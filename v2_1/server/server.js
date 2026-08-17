const express = require('express');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcryptjs');
const pool = require('./db');

const app = express();

const PORT = Number(process.env.PORT || 3000);

const HORARIOS = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00'
];

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';


// ============================================================
// CONFIGURAÇÃO
// ============================================================

app.use(express.json({ limit: '100kb' }));

app.use(
    session({
        secret: process.env.SESSION_SECRET || 'chave-local',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: 8 * 60 * 60 * 1000
        }
    })
);


// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function texto(valor) {
    return typeof valor === 'string' ? valor.trim() : '';
}

function dataValida(data) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        return false;
    }

    const [ano, mes, dia] = data.split('-').map(Number);

    const dataObj = new Date(Date.UTC(ano, mes - 1, dia));

    return (
        dataObj.getUTCFullYear() === ano &&
        dataObj.getUTCMonth() === mes - 1 &&
        dataObj.getUTCDate() === dia
    );
}

function diaUtil(data) {
    const [ano, mes, dia] = data.split('-').map(Number);

    const dataObj = new Date(Date.UTC(ano, mes - 1, dia));

    const diaSemana = dataObj.getUTCDay();

    return diaSemana !== 0 && diaSemana !== 6;
}

function hoje() {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(new Date());
}


// ============================================================
// MIDDLEWARE DE AUTENTICAÇÃO
// ============================================================

function exigirAdmin(req, res, next) {
    if (req.session?.tipo === 'admin') {
        return next();
    }

    return res.status(401).json({
        mensagem: 'Acesso administrativo necessário.'
    });
}

function exigirCidadao(req, res, next) {
    if (req.session?.tipo === 'cidadao' && req.session?.cidadaoId) {
        return next();
    }

    return res.status(401).json({
        mensagem: 'Login de cidadão necessário.'
    });
}


// ============================================================
// SAÚDE DO SERVIDOR / BANCO
// ============================================================

app.get('/api/health', async (req, res) => {
    try {
        await pool.query('SELECT 1');

        res.json({
            ok: true,
            database: process.env.DB_NAME || 'V2_DB'
        });

    } catch (error) {
        console.error('Erro no banco:', error);

        res.status(503).json({
            ok: false,
            mensagem: 'Banco de dados indisponível.'
        });
    }
});


// ============================================================
// LOGIN UNIFICADO
// ============================================================

app.post('/api/login', async (req, res) => {

    try {

        const login = texto(req.body.login).toLowerCase();
        const senha = typeof req.body.senha === 'string'
            ? req.body.senha
            : '';

        if (!login || !senha) {
            return res.status(400).json({
                mensagem: 'Informe o usuário/e-mail e a senha.'
            });
        }


        // ----------------------------------------------------
        // 1. VERIFICA ADMINISTRADOR
        // ----------------------------------------------------

        if (login === ADMIN_USER.toLowerCase()) {

            if (senha !== ADMIN_PASSWORD) {
                return res.status(401).json({
                    mensagem: 'Usuário ou senha inválidos.'
                });
            }

            req.session.tipo = 'admin';
            req.session.admin = true;
            req.session.usuario = ADMIN_USER;

            return res.json({
                sucesso: true,
                tipo: 'admin',
                redirect: '/admin.html'
            });
        }


        // ----------------------------------------------------
        // 2. PROCURA CIDADÃO NO MYSQL
        // ----------------------------------------------------

        const [usuarios] = await pool.execute(
            `
            SELECT
                id,
                nome,
                email,
                senha_hash
            FROM cidadaos
            WHERE LOWER(email) = ?
            LIMIT 1
            `,
            [login]
        );


        // Cidadão não encontrado
        if (usuarios.length === 0) {
            return res.status(401).json({
                mensagem: 'Usuário ou senha inválidos.'
            });
        }


        const cidadao = usuarios[0];


        // ----------------------------------------------------
        // 3. VERIFICA SENHA DO CIDADÃO
        // ----------------------------------------------------

        const senhaCorreta = await bcrypt.compare(
            senha,
            cidadao.senha_hash
        );

        if (!senhaCorreta) {
            return res.status(401).json({
                mensagem: 'Usuário ou senha inválidos.'
            });
        }


        // ----------------------------------------------------
        // 4. LOGIN DO CIDADÃO CONFIRMADO
        // ----------------------------------------------------

        req.session.tipo = 'cidadao';
        req.session.admin = false;

        req.session.cidadaoId = cidadao.id;
        req.session.cidadaoEmail = cidadao.email;
        req.session.cidadaoNome = cidadao.nome;

        return res.json({
            sucesso: true,
            tipo: 'cidadao',
            redirect: '/cidadao.html'
        });

    } catch (error) {

        console.error('Erro no login:', error);

        return res.status(500).json({
            mensagem: 'Erro interno ao realizar login.'
        });
    }
});


// ============================================================
// LOGOUT
// ============================================================

app.post('/api/logout', (req, res) => {

    req.session.destroy(() => {

        res.json({
            sucesso: true
        });

    });
});


// ============================================================
// INFORMAÇÕES DA SESSÃO DO ADMIN
// ============================================================

app.get('/api/admin/me', exigirAdmin, (req, res) => {

    res.json({
        autenticado: true,
        usuario: req.session.usuario
    });

});


// ============================================================
// CADASTRO DE CIDADÃO
// ============================================================

app.post('/api/cidadao/cadastro', async (req, res) => {

    const nome = texto(req.body.nome);
    const email = texto(req.body.email).toLowerCase();
    const senha = typeof req.body.senha === 'string'
        ? req.body.senha
        : '';

    const cep = texto(req.body.cep);
    const endereco = texto(req.body.endereco);


    if (!nome || !email || !senha) {
        return res.status(400).json({
            mensagem: 'Nome, e-mail e senha são obrigatórios.'
        });
    }


    if (senha.length < 6) {
        return res.status(400).json({
            mensagem: 'A senha deve ter pelo menos 6 caracteres.'
        });
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            mensagem: 'Informe um e-mail válido.'
        });
    }


    try {

        const [existente] = await pool.execute(
            'SELECT id FROM cidadaos WHERE email = ?',
            [email]
        );


        if (existente.length > 0) {
            return res.status(409).json({
                mensagem: 'Já existe uma conta com este e-mail.'
            });
        }


        const senhaHash = await bcrypt.hash(senha, 12);


        const [resultado] = await pool.execute(
            `
            INSERT INTO cidadaos
            (nome, email, senha_hash, cep, endereco)
            VALUES (?, ?, ?, ?, ?)
            `,
            [
                nome,
                email,
                senhaHash,
                cep || null,
                endereco || null
            ]
        );


        res.status(201).json({
            sucesso: true,
            id: resultado.insertId
        });

    } catch (error) {

        console.error('Erro ao cadastrar cidadão:', error);

        res.status(500).json({
            mensagem: 'Não foi possível criar a conta.'
        });
    }
});


// ============================================================
// DADOS DO CIDADÃO LOGADO
// ============================================================

app.get('/api/cidadao/me', exigirCidadao, async (req, res) => {

    try {

        const [rows] = await pool.execute(
            `
            SELECT
                id,
                nome,
                email,
                cep,
                endereco
            FROM cidadaos
            WHERE id = ?
            `,
            [req.session.cidadaoId]
        );


        if (rows.length === 0) {
            return res.status(401).json({
                mensagem: 'Conta não encontrada.'
            });
        }


        res.json({
            cidadao: rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Não foi possível carregar a conta.'
        });
    }
});


// ============================================================
// AGENDAMENTOS DO CIDADÃO
// ============================================================

app.get(
    '/api/cidadao/meus-agendamentos',
    exigirCidadao,
    async (req, res) => {

        try {

            const [agendamentos] = await pool.execute(
                `
                SELECT
                    a.id,
                    a.nome,
                    a.motivo,
                    DATE_FORMAT(a.data, '%d/%m/%Y') AS data_br,
                    TIME_FORMAT(a.horario, '%H:%i') AS horario,
                    a.email,
                    a.cep,
                    a.endereco,
                    a.status
                FROM agendamentos a
                WHERE
                    a.cidadao_id = ?
                    OR (
                        a.cidadao_id IS NULL
                        AND LOWER(a.email) = ?
                    )
                ORDER BY
                    a.data DESC,
                    a.horario DESC,
                    a.id DESC
                `,
                [
                    req.session.cidadaoId,
                    req.session.cidadaoEmail
                ]
            );


            // Vincula agendamentos antigos ao cidadão
            await pool.execute(
                `
                UPDATE agendamentos
                SET cidadao_id = ?
                WHERE
                    cidadao_id IS NULL
                    AND LOWER(email) = ?
                `,
                [
                    req.session.cidadaoId,
                    req.session.cidadaoEmail
                ]
            );


            const [cidadao] = await pool.execute(
                `
                SELECT
                    id,
                    nome,
                    email,
                    cep,
                    endereco
                FROM cidadaos
                WHERE id = ?
                `,
                [req.session.cidadaoId]
            );


            res.json({
                cidadao: cidadao[0],
                agendamentos
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                mensagem: 'Não foi possível carregar seus agendamentos.'
            });
        }
    }
);


// ============================================================
// CIDADÃO CANCELA AGENDAMENTO
// ============================================================

app.patch(
    '/api/cidadao/agendamentos/:id/cancelar',
    exigirCidadao,
    async (req, res) => {

        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                mensagem: 'ID inválido.'
            });
        }


        try {

            const [resultado] = await pool.execute(
                `
                UPDATE agendamentos
                SET status = 'cancelado'
                WHERE
                    id = ?
                    AND cidadao_id = ?
                    AND status = 'agendado'
                `,
                [
                    id,
                    req.session.cidadaoId
                ]
            );


            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem:
                        'Agendamento não encontrado ou não pode mais ser cancelado.'
                });
            }


            res.json({
                sucesso: true
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                mensagem: 'Não foi possível cancelar o agendamento.'
            });
        }
    }
);


// ============================================================
// HORÁRIOS DISPONÍVEIS
// ============================================================

app.get('/api/agendamentos/disponiveis', async (req, res) => {

    const data = texto(req.query.data);


    if (!dataValida(data)) {
        return res.status(400).json({
            mensagem: 'Data inválida.'
        });
    }


    if (!diaUtil(data)) {
        return res.json({
            horariosOcupados: HORARIOS,
            horariosDisponiveis: []
        });
    }


    try {

        const [rows] = await pool.execute(
            `
            SELECT TIME_FORMAT(horario, '%H:%i') AS horario
            FROM agendamentos
            WHERE
                data = ?
                AND status <> 'cancelado'
            `,
            [data]
        );


        const ocupados = new Set(
            rows.map(row => row.horario)
        );


        res.json({
            horariosOcupados: [...ocupados],
            horariosDisponiveis:
                HORARIOS.filter(hora => !ocupados.has(hora))
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Não foi possível consultar os horários.'
        });
    }
});


// ============================================================
// BUSCA DE CIDADÃOS / NOMES DE AGENDAMENTOS
// ============================================================

app.get('/api/agendamentos/buscar', async (req, res) => {

    const termo = texto(req.query.termo);


    if (termo.length < 3) {
        return res.json({
            nomes: []
        });
    }


    try {

        const [rows] = await pool.execute(
            `
            SELECT DISTINCT nome
            FROM agendamentos
            WHERE
                nome LIKE ?
                AND status <> 'cancelado'
            ORDER BY nome
            LIMIT 20
            `,
            [`%${termo}%`]
        );


        res.json({
            nomes: rows.map(row => row.nome)
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            mensagem: 'Não foi possível realizar a busca.'
        });
    }
});


// ============================================================
// CRIAÇÃO DE AGENDAMENTO
// ============================================================

app.post('/api/agendamentos', async (req, res) => {

    let nome = texto(req.body.nome);
    const motivo = texto(req.body.motivo);
    const data = texto(req.body.data);
    const horario = texto(req.body.horario);

    const jaTemCadastro = req.body.jaTemCadastro === true;

    let email = jaTemCadastro
        ? 'Já Cadastrado'
        : texto(req.body.email);

    let cep = jaTemCadastro
        ? 'Já Cadastrado'
        : texto(req.body.cep);

    let endereco = jaTemCadastro
        ? 'Já Cadastrado'
        : texto(req.body.endereco);


    if (!nome || !motivo || !data || !horario) {
        return res.status(400).json({
            mensagem: 'Preencha todos os campos obrigatórios.'
        });
    }


    if (!dataValida(data)) {
        return res.status(400).json({
            mensagem: 'Data inválida.'
        });
    }


    if (data < hoje()) {
        return res.status(400).json({
            mensagem: 'Não é possível agendar para uma data passada.'
        });
    }


    if (!diaUtil(data)) {
        return res.status(400).json({
            mensagem: 'Atendimento apenas em dias úteis.'
        });
    }


    if (!HORARIOS.includes(horario)) {
        return res.status(400).json({
            mensagem: 'Horário inválido.'
        });
    }


    try {

        let cidadaoId = req.session?.cidadaoId || null;


        // Se estiver logado, usa os dados reais do cidadão
        if (cidadaoId) {

            const [conta] = await pool.execute(
                `
                SELECT
                    nome,
                    email,
                    cep,
                    endereco
                FROM cidadaos
                WHERE id = ?
                `,
                [cidadaoId]
            );


            if (conta.length > 0) {

                nome = conta[0].nome;
                email = conta[0].email;
                cep = conta[0].cep || cep;
                endereco = conta[0].endereco || endereco;
            }
        }


        const [resultado] = await pool.execute(
            `
            INSERT INTO agendamentos
            (
                cidadao_id,
                nome,
                motivo,
                data,
                horario,
                email,
                cep,
                endereco,
                status
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'agendado')
            `,
            [
                cidadaoId,
                nome,
                motivo,
                data,
                `${horario}:00`,
                email || null,
                cep || null,
                endereco || null
            ]
        );


        res.status(201).json({
            sucesso: true,
            id: resultado.insertId,
            data,
            horario
        });

    } catch (error) {

        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({
                mensagem:
                    'Este horário já está reservado. Escolha outro horário.'
            });
        }


        console.error(error);

        res.status(500).json({
            mensagem: 'Não foi possível salvar o agendamento.'
        });
    }
});


// ============================================================
// ADMIN — LISTAR AGENDAMENTOS
// ============================================================

app.get(
    '/api/admin/agendamentos',
    exigirAdmin,
    async (req, res) => {

        const data = texto(req.query.data);
        const status = texto(req.query.status);
        const nome = texto(req.query.nome);

        const where = [];
        const params = [];


        if (data) {

            if (!dataValida(data)) {
                return res.status(400).json({
                    mensagem: 'Data inválida.'
                });
            }

            where.push('data = ?');
            params.push(data);
        }


        if (status) {

            if (
                ![
                    'agendado',
                    'feito',
                    'cancelado'
                ].includes(status)
            ) {
                return res.status(400).json({
                    mensagem: 'Status inválido.'
                });
            }

            where.push('status = ?');
            params.push(status);
        }


        if (nome) {
            where.push('nome LIKE ?');
            params.push(`%${nome}%`);
        }


        const sql = `
            SELECT
                id,
                nome,
                motivo,
                DATE_FORMAT(data, '%Y-%m-%d') AS data,
                TIME_FORMAT(horario, '%H:%i') AS horario,
                email,
                cep,
                endereco,
                DATE_FORMAT(
                    data_registro,
                    '%Y-%m-%d %H:%i:%s'
                ) AS data_registro,
                status
            FROM agendamentos
            ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
            ORDER BY
                data ASC,
                horario ASC,
                id ASC
        `;


        try {

            const [rows] = await pool.execute(
                sql,
                params
            );


            res.json({
                agendamentos: rows
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                mensagem:
                    'Não foi possível carregar os agendamentos.'
            });
        }
    }
);


// ============================================================
// ADMIN — EDITAR AGENDAMENTO
// ============================================================

app.patch(
    '/api/admin/agendamentos/:id',
    exigirAdmin,
    async (req, res) => {

        const id = Number(req.params.id);

        const nome = texto(req.body.nome);
        const motivo = texto(req.body.motivo);
        const data = texto(req.body.data);
        const horario = texto(req.body.horario);
        const email = texto(req.body.email);
        const cep = texto(req.body.cep);
        const endereco = texto(req.body.endereco);


        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                mensagem: 'ID inválido.'
            });
        }


        if (!nome || !motivo || !data || !horario) {
            return res.status(400).json({
                mensagem:
                    'Nome, motivo, data e horário são obrigatórios.'
            });
        }


        if (!dataValida(data)) {
            return res.status(400).json({
                mensagem: 'Data inválida.'
            });
        }


        if (data < hoje()) {
            return res.status(400).json({
                mensagem:
                    'Não é possível alterar para uma data passada.'
            });
        }


        if (!diaUtil(data)) {
            return res.status(400).json({
                mensagem:
                    'Atendimento apenas em dias úteis.'
            });
        }


        if (!HORARIOS.includes(horario)) {
            return res.status(400).json({
                mensagem: 'Horário inválido.'
            });
        }


        try {

            const [resultado] = await pool.execute(
                `
                UPDATE agendamentos
                SET
                    nome = ?,
                    motivo = ?,
                    data = ?,
                    horario = ?,
                    email = ?,
                    cep = ?,
                    endereco = ?
                WHERE id = ?
                `,
                [
                    nome,
                    motivo,
                    data,
                    `${horario}:00`,
                    email || null,
                    cep || null,
                    endereco || null,
                    id
                ]
            );


            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem:
                        'Agendamento não encontrado.'
                });
            }


            res.json({
                sucesso: true
            });

        } catch (error) {

            if (error.code === 'ER_DUP_ENTRY') {
                return res.status(409).json({
                    mensagem:
                        'Esse dia e horário já estão ocupados por outro agendamento.'
                });
            }


            console.error(error);

            res.status(500).json({
                mensagem:
                    'Não foi possível editar o agendamento.'
            });
        }
    }
);


// ============================================================
// ADMIN — ALTERAR STATUS
// ============================================================

app.patch(
    '/api/admin/agendamentos/:id/status',
    exigirAdmin,
    async (req, res) => {

        const id = Number(req.params.id);
        const status = texto(req.body.status);


        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({
                mensagem: 'ID inválido.'
            });
        }


        if (
            ![
                'agendado',
                'feito',
                'cancelado'
            ].includes(status)
        ) {
            return res.status(400).json({
                mensagem: 'Status inválido.'
            });
        }


        try {

            const [resultado] = await pool.execute(
                `
                UPDATE agendamentos
                SET status = ?
                WHERE id = ?
                `,
                [
                    status,
                    id
                ]
            );


            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    mensagem:
                        'Agendamento não encontrado.'
                });
            }


            res.json({
                sucesso: true
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                mensagem:
                    'Não foi possível alterar o status.'
            });
        }
    }
);


// ============================================================
// PÁGINAS
// ============================================================

app.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'login.html')
    );
});

app.get('/login', (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'login.html')
    );
});

app.get('/cadastro', (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'cadastro.html')
    );
});

app.get('/agendamento', (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'agendamento.html')
    );
});


// ------------------------------------------------------------
// PÁGINAS PROTEGIDAS
// ------------------------------------------------------------

app.get('/admin', exigirAdmin, (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'admin.html')
    );
});

app.get('/admin.html', exigirAdmin, (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'admin.html')
    );
});

app.get('/cidadao', exigirCidadao, (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'cidadao.html')
    );
});

app.get('/cidadao.html', exigirCidadao, (req, res) => {
    res.sendFile(
        path.join(__dirname, '..', 'app', 'cidadao.html')
    );
});


// ============================================================
// ARQUIVOS ESTÁTICOS
// ============================================================

app.use(
    express.static(
        path.join(__dirname, '..', 'app')
    )
);


// ============================================================
// FALLBACK
// ============================================================

app.use((req, res, next) => {

    if (
        req.method === 'GET' &&
        !req.path.startsWith('/api/')
    ) {
        return res.sendFile(
            path.join(__dirname, '..', 'app', 'login.html')
        );
    }

    next();
});


// ============================================================
// INICIALIZAÇÃO
// ============================================================

app.listen(
    PORT,
    '0.0.0.0',
    () => {
        console.log(
            `Servidor iniciado na porta ${PORT}`
        );
    }
);