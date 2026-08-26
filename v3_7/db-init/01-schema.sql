CREATE DATABASE IF NOT EXISTS V2_DB;
USE V2_DB;

CREATE TABLE IF NOT EXISTS cidadaos (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 nome VARCHAR(150) NOT NULL,
 email VARCHAR(255) NOT NULL,
 telefone VARCHAR(30) NULL,
 senha_hash VARCHAR(255) NOT NULL,
 cep VARCHAR(20) NULL,
 endereco VARCHAR(255) NULL,
 criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (id),
 UNIQUE KEY uk_cidadao_email (email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS agendamentos (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 cidadao_id INT UNSIGNED NULL,
 nome VARCHAR(150) NOT NULL,
 motivo TEXT NULL,
 tratativa TEXT NULL,
 data DATE NOT NULL,
 horario TIME NOT NULL,
 atendimento ENUM('no_paco','marcado') NOT NULL DEFAULT 'marcado',
 tipo_atendimento ENUM('unico','grupo') NOT NULL DEFAULT 'unico',
 blocos_json JSON NULL,
 email VARCHAR(255) NULL,
 telefone VARCHAR(30) NULL,
 cep VARCHAR(20) NULL,
 endereco VARCHAR(255) NULL,
 data_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 status ENUM('cancelado','pedido_nao_atendido','pedido_atendido','pedido_pendente') NOT NULL DEFAULT 'pedido_pendente',
 slot_ativo VARCHAR(40) GENERATED ALWAYS AS (CASE WHEN status <> 'cancelado' THEN CONCAT(data, ' ', horario) ELSE NULL END) STORED,
 PRIMARY KEY (id),
 UNIQUE KEY uk_agendamento_slot_ativo (slot_ativo),
 INDEX idx_agendamento_data (data),
 INDEX idx_agendamento_nome (nome),
 INDEX idx_agendamento_status (status),
 INDEX idx_agendamento_cidadao (cidadao_id),
 CONSTRAINT fk_agendamento_cidadao FOREIGN KEY (cidadao_id) REFERENCES cidadaos(id) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS usuarios_admin (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 nome VARCHAR(150) NOT NULL,
 email VARCHAR(255) NOT NULL,
 senha_hash VARCHAR(255) NOT NULL,
 papel ENUM('admin','visualizador') NOT NULL DEFAULT 'visualizador',
 criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 PRIMARY KEY (id),
 UNIQUE KEY uk_usuario_admin_email (email)
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS agendamento_participantes (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT,
 agendamento_id INT UNSIGNED NOT NULL,
 nome VARCHAR(150) NOT NULL,
 telefone VARCHAR(30) NULL,
 principal TINYINT(1) NOT NULL DEFAULT 0,
 PRIMARY KEY (id),
 INDEX idx_participante_agendamento (agendamento_id),
 CONSTRAINT fk_participante_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS agendamento_slots (
 id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
 agendamento_id INT UNSIGNED NOT NULL,
 data DATE NOT NULL,
 horario_inicio TIME NOT NULL,
 PRIMARY KEY (id),
 UNIQUE KEY uk_agenda_slot (data, horario_inicio),
 INDEX idx_slot_agendamento (agendamento_id),
 CONSTRAINT fk_slot_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
) ENGINE=InnoDB;
