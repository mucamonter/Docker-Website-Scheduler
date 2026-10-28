export const HORARIOS = [ '09:00','09:30', '10:00','10:30', '11:00','11:30', '13:00','13:30', '14:00','14:30', '15:00','15:30', '16:00', '16:30'];

export function diaUtil(dataISO: string): boolean{
    const match = dataISO.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return false;

    const [_, ano, mes, dia] = match.map(Number);
    const diaSemana = new Date(Date.UTC(ano, mes - 1, dia)).getUTCDay();


    // 0 = Domingo, 6 = Sábado
    return ![0, 6].includes(diaSemana);
}

//String para formatar
export function hoje(): string{
    return new Intl.DateTimeFormat('en-CA',{
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date());
}



//buscar entender melhor
export function blocosValidos(lista: any ):string[] {
    if (!Array.isArray(lista)) return [];
    const texto = (v: any) => (typeof v === 'string' ? v.trim() : '');
    return [...new Set(lista.map(texto))].filter((h) => HORARIOS.includes(h))
}

//buscar entender melhor
export function normalizarParticipantes(lista: any){
    if(!Array.isArray(lista)) return [];
    const texto = (v: any) => (typeof v === 'string' ? v.trim() : '');
    return lista
    .map((p) => ({nome: texto(p?.nome), telefone: texto(p?.telefone) }))
    .filter((p) => p.nome)
    .slice(0, 100);
}