import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    agendamento_participantes: 'agendamento_participantes',
    agendamento_slots: 'agendamento_slots',
    agendamentos: 'agendamentos',
    cidadaos: 'cidadaos',
    usuarios_admin: 'usuarios_admin'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const Agendamento_participantesScalarFieldEnum = {
    id: 'id',
    agendamento_id: 'agendamento_id',
    nome: 'nome',
    telefone: 'telefone',
    principal: 'principal'
};
export const Agendamento_slotsScalarFieldEnum = {
    id: 'id',
    agendamento_id: 'agendamento_id',
    data: 'data',
    horario_inicio: 'horario_inicio'
};
export const AgendamentosScalarFieldEnum = {
    id: 'id',
    cidadao_id: 'cidadao_id',
    nome: 'nome',
    motivo: 'motivo',
    tratativa: 'tratativa',
    data: data,
    horario: 'horario',
    atendimento: 'atendimento',
    tipo_atendimento: 'tipo_atendimento',
    blocos_json: 'blocos_json',
    email: 'email',
    telefone: 'telefone',
    cep: 'cep',
    endereco: 'endereco',
    data_registro: 'data_registro',
    status: 'status'
};
export const CidadaosScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha_hash: 'senha_hash',
    cep: 'cep',
    endereco: 'endereco',
    criado_em: 'criado_em'
};
export const Usuarios_adminScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    papel: 'papel',
    criado_em: 'criado_em'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const agendamento_participantesOrderByRelevanceFieldEnum = {
    nome: 'nome',
    telefone: 'telefone'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const agendamentosOrderByRelevanceFieldEnum = {
    nome: 'nome',
    motivo: 'motivo',
    tratativa: 'tratativa',
    email: 'email',
    telefone: 'telefone',
    cep: 'cep',
    endereco: 'endereco'
};
export const cidadaosOrderByRelevanceFieldEnum = {
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha_hash: 'senha_hash',
    cep: 'cep',
    endereco: 'endereco'
};
export const usuarios_adminOrderByRelevanceFieldEnum = {
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map