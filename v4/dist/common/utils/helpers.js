"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HORARIOS = void 0;
exports.diaUtil = diaUtil;
exports.hoje = hoje;
exports.blocosValidos = blocosValidos;
exports.normalizarParticipantes = normalizarParticipantes;
exports.HORARIOS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
function diaUtil(dataISO) {
    const match = dataISO.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match)
        return false;
    const [_, ano, mes, dia] = match.map(Number);
    const diaSemana = new Date(Date.UTC(ano, mes - 1, dia)).getUTCDay();
    return ![0, 6].includes(diaSemana);
}
function hoje() {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date());
}
function blocosValidos(lista) {
    if (!Array.isArray(lista))
        return [];
    const texto = (v) => (typeof v === 'string' ? v.trim() : '');
    return [...new Set(lista.map(texto))].filter((h) => exports.HORARIOS.includes(h));
}
function normalizarParticipantes(lista) {
    if (!Array.isArray(lista))
        return [];
    const texto = (v) => (typeof v === 'string' ? v.trim() : '');
    return lista
        .map((p) => ({ nome: texto(p?.nome), telefone: texto(p?.telefone) }))
        .filter((p) => p.nome)
        .slice(0, 100);
}
//# sourceMappingURL=helpers.js.map