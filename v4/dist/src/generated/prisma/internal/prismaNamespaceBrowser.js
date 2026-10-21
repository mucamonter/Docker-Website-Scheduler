"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios_adminOrderByRelevanceFieldEnum = exports.cidadaosOrderByRelevanceFieldEnum = exports.agendamentosOrderByRelevanceFieldEnum = exports.QueryMode = exports.JsonNullValueFilter = exports.agendamento_participantesOrderByRelevanceFieldEnum = exports.NullsOrder = exports.NullableJsonNullValueInput = exports.SortOrder = exports.Usuarios_adminScalarFieldEnum = exports.CidadaosScalarFieldEnum = exports.AgendamentosScalarFieldEnum = exports.Agendamento_slotsScalarFieldEnum = exports.Agendamento_participantesScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    agendamento_participantes: 'agendamento_participantes',
    agendamento_slots: 'agendamento_slots',
    agendamentos: 'agendamentos',
    cidadaos: 'cidadaos',
    usuarios_admin: 'usuarios_admin'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Agendamento_participantesScalarFieldEnum = {
    id: 'id',
    agendamento_id: 'agendamento_id',
    nome: 'nome',
    telefone: 'telefone',
    principal: 'principal'
};
exports.Agendamento_slotsScalarFieldEnum = {
    id: 'id',
    agendamento_id: 'agendamento_id',
    data: 'data',
    horario_inicio: 'horario_inicio'
};
exports.AgendamentosScalarFieldEnum = {
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
exports.CidadaosScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha_hash: 'senha_hash',
    cep: 'cep',
    endereco: 'endereco',
    criado_em: 'criado_em'
};
exports.Usuarios_adminScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    papel: 'papel',
    criado_em: 'criado_em'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.agendamento_participantesOrderByRelevanceFieldEnum = {
    nome: 'nome',
    telefone: 'telefone'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.agendamentosOrderByRelevanceFieldEnum = {
    nome: 'nome',
    motivo: 'motivo',
    tratativa: 'tratativa',
    email: 'email',
    telefone: 'telefone',
    cep: 'cep',
    endereco: 'endereco'
};
exports.cidadaosOrderByRelevanceFieldEnum = {
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha_hash: 'senha_hash',
    cep: 'cep',
    endereco: 'endereco'
};
exports.usuarios_adminOrderByRelevanceFieldEnum = {
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map