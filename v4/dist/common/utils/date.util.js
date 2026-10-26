export function dataValida(dataISO) {
    const match = dataISO.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match)
        return false;
    const [_, ano, mes, dia] = match.map(Number);
    const data = new Date(Date.UTC(ano, mes - 1, dia));
    return (data.getUTCFullYear() === ano &&
        data.getUTCMonth() === mes - 1 &&
        data.getUTCDate() === dia);
}
//# sourceMappingURL=date.util.js.map