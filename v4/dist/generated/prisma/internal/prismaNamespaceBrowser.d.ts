import * as runtime from "@prisma/client/runtime/index-browser";
import type { DataISO } from "../../../types/data";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly agendamento_participantes: "agendamento_participantes";
    readonly agendamento_slots: "agendamento_slots";
    readonly agendamentos: "agendamentos";
    readonly cidadaos: "cidadaos";
    readonly usuarios_admin: "usuarios_admin";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Agendamento_participantesScalarFieldEnum: {
    readonly id: "id";
    readonly agendamento_id: "agendamento_id";
    readonly nome: "nome";
    readonly telefone: "telefone";
    readonly principal: "principal";
};
export type Agendamento_participantesScalarFieldEnum = (typeof Agendamento_participantesScalarFieldEnum)[keyof typeof Agendamento_participantesScalarFieldEnum];
export declare const Agendamento_slotsScalarFieldEnum: {
    readonly id: "id";
    readonly agendamento_id: "agendamento_id";
    readonly data: "data";
    readonly horario_inicio: "horario_inicio";
};
export type Agendamento_slotsScalarFieldEnum = (typeof Agendamento_slotsScalarFieldEnum)[keyof typeof Agendamento_slotsScalarFieldEnum];
export declare const AgendamentosScalarFieldEnum: {
    readonly id: "id";
    readonly cidadao_id: "cidadao_id";
    readonly nome: "nome";
    readonly motivo: "motivo";
    readonly tratativa: "tratativa";
    readonly data: DataISO;
    readonly horario: "horario";
    readonly atendimento: "atendimento";
    readonly tipo_atendimento: "tipo_atendimento";
    readonly blocos_json: "blocos_json";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly cep: "cep";
    readonly endereco: "endereco";
    readonly data_registro: "data_registro";
    readonly status: "status";
};
export type AgendamentosScalarFieldEnum = (typeof AgendamentosScalarFieldEnum)[keyof typeof AgendamentosScalarFieldEnum];
export declare const CidadaosScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly senha_hash: "senha_hash";
    readonly cep: "cep";
    readonly endereco: "endereco";
    readonly criado_em: "criado_em";
};
export type CidadaosScalarFieldEnum = (typeof CidadaosScalarFieldEnum)[keyof typeof CidadaosScalarFieldEnum];
export declare const Usuarios_adminScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly senha_hash: "senha_hash";
    readonly papel: "papel";
    readonly criado_em: "criado_em";
};
export type Usuarios_adminScalarFieldEnum = (typeof Usuarios_adminScalarFieldEnum)[keyof typeof Usuarios_adminScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const agendamento_participantesOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
    readonly telefone: "telefone";
};
export type agendamento_participantesOrderByRelevanceFieldEnum = (typeof agendamento_participantesOrderByRelevanceFieldEnum)[keyof typeof agendamento_participantesOrderByRelevanceFieldEnum];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const agendamentosOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
    readonly motivo: "motivo";
    readonly tratativa: "tratativa";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly cep: "cep";
    readonly endereco: "endereco";
};
export type agendamentosOrderByRelevanceFieldEnum = (typeof agendamentosOrderByRelevanceFieldEnum)[keyof typeof agendamentosOrderByRelevanceFieldEnum];
export declare const cidadaosOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly senha_hash: "senha_hash";
    readonly cep: "cep";
    readonly endereco: "endereco";
};
export type cidadaosOrderByRelevanceFieldEnum = (typeof cidadaosOrderByRelevanceFieldEnum)[keyof typeof cidadaosOrderByRelevanceFieldEnum];
export declare const usuarios_adminOrderByRelevanceFieldEnum: {
    readonly nome: "nome";
    readonly email: "email";
    readonly senha_hash: "senha_hash";
};
export type usuarios_adminOrderByRelevanceFieldEnum = (typeof usuarios_adminOrderByRelevanceFieldEnum)[keyof typeof usuarios_adminOrderByRelevanceFieldEnum];
