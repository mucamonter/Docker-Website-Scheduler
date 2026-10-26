import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type agendamentosModel = runtime.Types.Result.DefaultSelection<Prisma.$agendamentosPayload>;
export type AggregateAgendamentos = {
    _count: AgendamentosCountAggregateOutputType | null;
    _avg: AgendamentosAvgAggregateOutputType | null;
    _sum: AgendamentosSumAggregateOutputType | null;
    _min: AgendamentosMinAggregateOutputType | null;
    _max: AgendamentosMaxAggregateOutputType | null;
};
export type AgendamentosAvgAggregateOutputType = {
    id: number | null;
    cidadao_id: number | null;
};
export type AgendamentosSumAggregateOutputType = {
    id: number | null;
    cidadao_id: number | null;
};
export type AgendamentosMinAggregateOutputType = {
    id: number | null;
    cidadao_id: number | null;
    nome: string | null;
    motivo: string | null;
    tratativa: string | null;
    data: Date | null;
    horario: Date | null;
    atendimento: $Enums.agendamentos_atendimento | null;
    tipo_atendimento: $Enums.agendamentos_tipo_atendimento | null;
    email: string | null;
    telefone: string | null;
    cep: string | null;
    endereco: string | null;
    data_registro: Date | null;
    status: $Enums.agendamentos_status | null;
};
export type AgendamentosMaxAggregateOutputType = {
    id: number | null;
    cidadao_id: number | null;
    nome: string | null;
    motivo: string | null;
    tratativa: string | null;
    data: Date | null;
    horario: Date | null;
    atendimento: $Enums.agendamentos_atendimento | null;
    tipo_atendimento: $Enums.agendamentos_tipo_atendimento | null;
    email: string | null;
    telefone: string | null;
    cep: string | null;
    endereco: string | null;
    data_registro: Date | null;
    status: $Enums.agendamentos_status | null;
};
export type AgendamentosCountAggregateOutputType = {
    id: number;
    cidadao_id: number;
    nome: number;
    motivo: number;
    tratativa: number;
    data: number;
    horario: number;
    atendimento: number;
    tipo_atendimento: number;
    blocos_json: number;
    email: number;
    telefone: number;
    cep: number;
    endereco: number;
    data_registro: number;
    status: number;
    _all: number;
};
export type AgendamentosAvgAggregateInputType = {
    id?: true;
    cidadao_id?: true;
};
export type AgendamentosSumAggregateInputType = {
    id?: true;
    cidadao_id?: true;
};
export type AgendamentosMinAggregateInputType = {
    id?: true;
    cidadao_id?: true;
    nome?: true;
    motivo?: true;
    tratativa?: true;
    data?: true;
    horario?: true;
    atendimento?: true;
    tipo_atendimento?: true;
    email?: true;
    telefone?: true;
    cep?: true;
    endereco?: true;
    data_registro?: true;
    status?: true;
};
export type AgendamentosMaxAggregateInputType = {
    id?: true;
    cidadao_id?: true;
    nome?: true;
    motivo?: true;
    tratativa?: true;
    data?: true;
    horario?: true;
    atendimento?: true;
    tipo_atendimento?: true;
    email?: true;
    telefone?: true;
    cep?: true;
    endereco?: true;
    data_registro?: true;
    status?: true;
};
export type AgendamentosCountAggregateInputType = {
    id?: true;
    cidadao_id?: true;
    nome?: true;
    motivo?: true;
    tratativa?: true;
    data?: true;
    horario?: true;
    atendimento?: true;
    tipo_atendimento?: true;
    blocos_json?: true;
    email?: true;
    telefone?: true;
    cep?: true;
    endereco?: true;
    data_registro?: true;
    status?: true;
    _all?: true;
};
export type AgendamentosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamentosWhereInput;
    orderBy?: Prisma.agendamentosOrderByWithRelationInput | Prisma.agendamentosOrderByWithRelationInput[];
    cursor?: Prisma.agendamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AgendamentosCountAggregateInputType;
    _avg?: AgendamentosAvgAggregateInputType;
    _sum?: AgendamentosSumAggregateInputType;
    _min?: AgendamentosMinAggregateInputType;
    _max?: AgendamentosMaxAggregateInputType;
};
export type GetAgendamentosAggregateType<T extends AgendamentosAggregateArgs> = {
    [P in keyof T & keyof AggregateAgendamentos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAgendamentos[P]> : Prisma.GetScalarType<T[P], AggregateAgendamentos[P]>;
};
export type agendamentosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamentosWhereInput;
    orderBy?: Prisma.agendamentosOrderByWithAggregationInput | Prisma.agendamentosOrderByWithAggregationInput[];
    by: Prisma.AgendamentosScalarFieldEnum[] | Prisma.AgendamentosScalarFieldEnum;
    having?: Prisma.agendamentosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AgendamentosCountAggregateInputType | true;
    _avg?: AgendamentosAvgAggregateInputType;
    _sum?: AgendamentosSumAggregateInputType;
    _min?: AgendamentosMinAggregateInputType;
    _max?: AgendamentosMaxAggregateInputType;
};
export type AgendamentosGroupByOutputType = {
    id: number;
    cidadao_id: number | null;
    nome: string;
    motivo: string | null;
    tratativa: string | null;
    data: Date;
    horario: Date | string;
    atendimento: $Enums.agendamentos_atendimento;
    tipo_atendimento: $Enums.agendamentos_tipo_atendimento;
    blocos_json: runtime.JsonValue | null;
    email: string | null;
    telefone: string | null;
    cep: string | null;
    endereco: string | null;
    data_registro: Date;
    status: $Enums.agendamentos_status;
    _count: AgendamentosCountAggregateOutputType | null;
    _avg: AgendamentosAvgAggregateOutputType | null;
    _sum: AgendamentosSumAggregateOutputType | null;
    _min: AgendamentosMinAggregateOutputType | null;
    _max: AgendamentosMaxAggregateOutputType | null;
};
export type GetAgendamentosGroupByPayload<T extends agendamentosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AgendamentosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AgendamentosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AgendamentosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AgendamentosGroupByOutputType[P]>;
}>>;
export type agendamentosWhereInput = {
    AND?: Prisma.agendamentosWhereInput | Prisma.agendamentosWhereInput[];
    OR?: Prisma.agendamentosWhereInput[];
    NOT?: Prisma.agendamentosWhereInput | Prisma.agendamentosWhereInput[];
    id?: Prisma.IntFilter<"agendamentos"> | number;
    cidadao_id?: Prisma.IntNullableFilter<"agendamentos"> | number | null;
    nome?: Prisma.StringFilter<"agendamentos"> | string;
    motivo?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    tratativa?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    data?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    horario?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.JsonNullableFilter<"agendamentos">;
    email?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    telefone?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    cep?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    endereco?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    data_registro?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    status?: Prisma.Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.Agendamento_participantesListRelationFilter;
    agendamento_slots?: Prisma.Agendamento_slotsListRelationFilter;
    cidadaos?: Prisma.XOR<Prisma.CidadaosNullableScalarRelationFilter, Prisma.cidadaosWhereInput> | null;
};
export type agendamentosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cidadao_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tratativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario?: Prisma.SortOrder;
    atendimento?: Prisma.SortOrder;
    tipo_atendimento?: Prisma.SortOrder;
    blocos_json?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    cep?: Prisma.SortOrderInput | Prisma.SortOrder;
    endereco?: Prisma.SortOrderInput | Prisma.SortOrder;
    data_registro?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agendamento_participantes?: Prisma.agendamento_participantesOrderByRelationAggregateInput;
    agendamento_slots?: Prisma.agendamento_slotsOrderByRelationAggregateInput;
    cidadaos?: Prisma.cidadaosOrderByWithRelationInput;
    _relevance?: Prisma.agendamentosOrderByRelevanceInput;
};
export type agendamentosWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.agendamentosWhereInput | Prisma.agendamentosWhereInput[];
    OR?: Prisma.agendamentosWhereInput[];
    NOT?: Prisma.agendamentosWhereInput | Prisma.agendamentosWhereInput[];
    cidadao_id?: Prisma.IntNullableFilter<"agendamentos"> | number | null;
    nome?: Prisma.StringFilter<"agendamentos"> | string;
    motivo?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    tratativa?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    data?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    horario?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.JsonNullableFilter<"agendamentos">;
    email?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    telefone?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    cep?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    endereco?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    data_registro?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    status?: Prisma.Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.Agendamento_participantesListRelationFilter;
    agendamento_slots?: Prisma.Agendamento_slotsListRelationFilter;
    cidadaos?: Prisma.XOR<Prisma.CidadaosNullableScalarRelationFilter, Prisma.cidadaosWhereInput> | null;
}, "id">;
export type agendamentosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cidadao_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tratativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario?: Prisma.SortOrder;
    atendimento?: Prisma.SortOrder;
    tipo_atendimento?: Prisma.SortOrder;
    blocos_json?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    cep?: Prisma.SortOrderInput | Prisma.SortOrder;
    endereco?: Prisma.SortOrderInput | Prisma.SortOrder;
    data_registro?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.agendamentosCountOrderByAggregateInput;
    _avg?: Prisma.agendamentosAvgOrderByAggregateInput;
    _max?: Prisma.agendamentosMaxOrderByAggregateInput;
    _min?: Prisma.agendamentosMinOrderByAggregateInput;
    _sum?: Prisma.agendamentosSumOrderByAggregateInput;
};
export type agendamentosScalarWhereWithAggregatesInput = {
    AND?: Prisma.agendamentosScalarWhereWithAggregatesInput | Prisma.agendamentosScalarWhereWithAggregatesInput[];
    OR?: Prisma.agendamentosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.agendamentosScalarWhereWithAggregatesInput | Prisma.agendamentosScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"agendamentos"> | number;
    cidadao_id?: Prisma.IntNullableWithAggregatesFilter<"agendamentos"> | number | null;
    nome?: Prisma.StringWithAggregatesFilter<"agendamentos"> | string;
    motivo?: Prisma.StringNullableWithAggregatesFilter<"agendamentos"> | string | null;
    tratativa?: Prisma.StringNullableWithAggregatesFilter<"agendamentos"> | string | null;
    data?: Prisma.DateTimeWithAggregatesFilter<"agendamentos"> | Date | string;
    horario?: Prisma.DateTimeWithAggregatesFilter<"agendamentos"> | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoWithAggregatesFilter<"agendamentos"> | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoWithAggregatesFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.JsonNullableWithAggregatesFilter<"agendamentos">;
    email?: Prisma.StringNullableWithAggregatesFilter<"agendamentos"> | string | null;
    telefone?: Prisma.StringNullableWithAggregatesFilter<"agendamentos"> | string | null;
    cep?: Prisma.StringNullableWithAggregatesFilter<"agendamentos"> | string | null;
    endereco?: Prisma.StringNullableWithAggregatesFilter<"agendamentos"> | string | null;
    data_registro?: Prisma.DateTimeWithAggregatesFilter<"agendamentos"> | Date | string;
    status?: Prisma.Enumagendamentos_statusWithAggregatesFilter<"agendamentos"> | $Enums.agendamentos_status;
};
export type agendamentosCreateInput = {
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesCreateNestedManyWithoutAgendamentosInput;
    agendamento_slots?: Prisma.agendamento_slotsCreateNestedManyWithoutAgendamentosInput;
    cidadaos?: Prisma.cidadaosCreateNestedOneWithoutAgendamentosInput;
};
export type agendamentosUncheckedCreateInput = {
    id?: number;
    cidadao_id?: number | null;
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput;
    agendamento_slots?: Prisma.agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput;
};
export type agendamentosUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUpdateManyWithoutAgendamentosNestedInput;
    agendamento_slots?: Prisma.agendamento_slotsUpdateManyWithoutAgendamentosNestedInput;
    cidadaos?: Prisma.cidadaosUpdateOneWithoutAgendamentosNestedInput;
};
export type agendamentosUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cidadao_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput;
    agendamento_slots?: Prisma.agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput;
};
export type agendamentosCreateManyInput = {
    id?: number;
    cidadao_id?: number | null;
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
};
export type agendamentosUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
};
export type agendamentosUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cidadao_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
};
export type AgendamentosScalarRelationFilter = {
    is?: Prisma.agendamentosWhereInput;
    isNot?: Prisma.agendamentosWhereInput;
};
export type agendamentosOrderByRelevanceInput = {
    fields: Prisma.agendamentosOrderByRelevanceFieldEnum | Prisma.agendamentosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type agendamentosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cidadao_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    tratativa?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario?: Prisma.SortOrder;
    atendimento?: Prisma.SortOrder;
    tipo_atendimento?: Prisma.SortOrder;
    blocos_json?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    data_registro?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type agendamentosAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cidadao_id?: Prisma.SortOrder;
};
export type agendamentosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cidadao_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    tratativa?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario?: Prisma.SortOrder;
    atendimento?: Prisma.SortOrder;
    tipo_atendimento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    data_registro?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type agendamentosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cidadao_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    tratativa?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario?: Prisma.SortOrder;
    atendimento?: Prisma.SortOrder;
    tipo_atendimento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    data_registro?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type agendamentosSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cidadao_id?: Prisma.SortOrder;
};
export type AgendamentosListRelationFilter = {
    every?: Prisma.agendamentosWhereInput;
    some?: Prisma.agendamentosWhereInput;
    none?: Prisma.agendamentosWhereInput;
};
export type agendamentosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type agendamentosCreateNestedOneWithoutAgendamento_participantesInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_participantesInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_participantesInput>;
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutAgendamento_participantesInput;
    connect?: Prisma.agendamentosWhereUniqueInput;
};
export type agendamentosUpdateOneRequiredWithoutAgendamento_participantesNestedInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_participantesInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_participantesInput>;
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutAgendamento_participantesInput;
    upsert?: Prisma.agendamentosUpsertWithoutAgendamento_participantesInput;
    connect?: Prisma.agendamentosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.agendamentosUpdateToOneWithWhereWithoutAgendamento_participantesInput, Prisma.agendamentosUpdateWithoutAgendamento_participantesInput>, Prisma.agendamentosUncheckedUpdateWithoutAgendamento_participantesInput>;
};
export type agendamentosCreateNestedOneWithoutAgendamento_slotsInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_slotsInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_slotsInput>;
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutAgendamento_slotsInput;
    connect?: Prisma.agendamentosWhereUniqueInput;
};
export type agendamentosUpdateOneRequiredWithoutAgendamento_slotsNestedInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_slotsInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_slotsInput>;
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutAgendamento_slotsInput;
    upsert?: Prisma.agendamentosUpsertWithoutAgendamento_slotsInput;
    connect?: Prisma.agendamentosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.agendamentosUpdateToOneWithWhereWithoutAgendamento_slotsInput, Prisma.agendamentosUpdateWithoutAgendamento_slotsInput>, Prisma.agendamentosUncheckedUpdateWithoutAgendamento_slotsInput>;
};
export type Enumagendamentos_atendimentoFieldUpdateOperationsInput = {
    set?: $Enums.agendamentos_atendimento;
};
export type Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput = {
    set?: $Enums.agendamentos_tipo_atendimento;
};
export type Enumagendamentos_statusFieldUpdateOperationsInput = {
    set?: $Enums.agendamentos_status;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type agendamentosCreateNestedManyWithoutCidadaosInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutCidadaosInput, Prisma.agendamentosUncheckedCreateWithoutCidadaosInput> | Prisma.agendamentosCreateWithoutCidadaosInput[] | Prisma.agendamentosUncheckedCreateWithoutCidadaosInput[];
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutCidadaosInput | Prisma.agendamentosCreateOrConnectWithoutCidadaosInput[];
    createMany?: Prisma.agendamentosCreateManyCidadaosInputEnvelope;
    connect?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
};
export type agendamentosUncheckedCreateNestedManyWithoutCidadaosInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutCidadaosInput, Prisma.agendamentosUncheckedCreateWithoutCidadaosInput> | Prisma.agendamentosCreateWithoutCidadaosInput[] | Prisma.agendamentosUncheckedCreateWithoutCidadaosInput[];
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutCidadaosInput | Prisma.agendamentosCreateOrConnectWithoutCidadaosInput[];
    createMany?: Prisma.agendamentosCreateManyCidadaosInputEnvelope;
    connect?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
};
export type agendamentosUpdateManyWithoutCidadaosNestedInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutCidadaosInput, Prisma.agendamentosUncheckedCreateWithoutCidadaosInput> | Prisma.agendamentosCreateWithoutCidadaosInput[] | Prisma.agendamentosUncheckedCreateWithoutCidadaosInput[];
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutCidadaosInput | Prisma.agendamentosCreateOrConnectWithoutCidadaosInput[];
    upsert?: Prisma.agendamentosUpsertWithWhereUniqueWithoutCidadaosInput | Prisma.agendamentosUpsertWithWhereUniqueWithoutCidadaosInput[];
    createMany?: Prisma.agendamentosCreateManyCidadaosInputEnvelope;
    set?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    disconnect?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    delete?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    connect?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    update?: Prisma.agendamentosUpdateWithWhereUniqueWithoutCidadaosInput | Prisma.agendamentosUpdateWithWhereUniqueWithoutCidadaosInput[];
    updateMany?: Prisma.agendamentosUpdateManyWithWhereWithoutCidadaosInput | Prisma.agendamentosUpdateManyWithWhereWithoutCidadaosInput[];
    deleteMany?: Prisma.agendamentosScalarWhereInput | Prisma.agendamentosScalarWhereInput[];
};
export type agendamentosUncheckedUpdateManyWithoutCidadaosNestedInput = {
    create?: Prisma.XOR<Prisma.agendamentosCreateWithoutCidadaosInput, Prisma.agendamentosUncheckedCreateWithoutCidadaosInput> | Prisma.agendamentosCreateWithoutCidadaosInput[] | Prisma.agendamentosUncheckedCreateWithoutCidadaosInput[];
    connectOrCreate?: Prisma.agendamentosCreateOrConnectWithoutCidadaosInput | Prisma.agendamentosCreateOrConnectWithoutCidadaosInput[];
    upsert?: Prisma.agendamentosUpsertWithWhereUniqueWithoutCidadaosInput | Prisma.agendamentosUpsertWithWhereUniqueWithoutCidadaosInput[];
    createMany?: Prisma.agendamentosCreateManyCidadaosInputEnvelope;
    set?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    disconnect?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    delete?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    connect?: Prisma.agendamentosWhereUniqueInput | Prisma.agendamentosWhereUniqueInput[];
    update?: Prisma.agendamentosUpdateWithWhereUniqueWithoutCidadaosInput | Prisma.agendamentosUpdateWithWhereUniqueWithoutCidadaosInput[];
    updateMany?: Prisma.agendamentosUpdateManyWithWhereWithoutCidadaosInput | Prisma.agendamentosUpdateManyWithWhereWithoutCidadaosInput[];
    deleteMany?: Prisma.agendamentosScalarWhereInput | Prisma.agendamentosScalarWhereInput[];
};
export type agendamentosCreateWithoutAgendamento_participantesInput = {
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_slots?: Prisma.agendamento_slotsCreateNestedManyWithoutAgendamentosInput;
    cidadaos?: Prisma.cidadaosCreateNestedOneWithoutAgendamentosInput;
};
export type agendamentosUncheckedCreateWithoutAgendamento_participantesInput = {
    id?: number;
    cidadao_id?: number | null;
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_slots?: Prisma.agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput;
};
export type agendamentosCreateOrConnectWithoutAgendamento_participantesInput = {
    where: Prisma.agendamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_participantesInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_participantesInput>;
};
export type agendamentosUpsertWithoutAgendamento_participantesInput = {
    update: Prisma.XOR<Prisma.agendamentosUpdateWithoutAgendamento_participantesInput, Prisma.agendamentosUncheckedUpdateWithoutAgendamento_participantesInput>;
    create: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_participantesInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_participantesInput>;
    where?: Prisma.agendamentosWhereInput;
};
export type agendamentosUpdateToOneWithWhereWithoutAgendamento_participantesInput = {
    where?: Prisma.agendamentosWhereInput;
    data: Prisma.XOR<Prisma.agendamentosUpdateWithoutAgendamento_participantesInput, Prisma.agendamentosUncheckedUpdateWithoutAgendamento_participantesInput>;
};
export type agendamentosUpdateWithoutAgendamento_participantesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_slots?: Prisma.agendamento_slotsUpdateManyWithoutAgendamentosNestedInput;
    cidadaos?: Prisma.cidadaosUpdateOneWithoutAgendamentosNestedInput;
};
export type agendamentosUncheckedUpdateWithoutAgendamento_participantesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cidadao_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_slots?: Prisma.agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput;
};
export type agendamentosCreateWithoutAgendamento_slotsInput = {
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesCreateNestedManyWithoutAgendamentosInput;
    cidadaos?: Prisma.cidadaosCreateNestedOneWithoutAgendamentosInput;
};
export type agendamentosUncheckedCreateWithoutAgendamento_slotsInput = {
    id?: number;
    cidadao_id?: number | null;
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput;
};
export type agendamentosCreateOrConnectWithoutAgendamento_slotsInput = {
    where: Prisma.agendamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_slotsInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_slotsInput>;
};
export type agendamentosUpsertWithoutAgendamento_slotsInput = {
    update: Prisma.XOR<Prisma.agendamentosUpdateWithoutAgendamento_slotsInput, Prisma.agendamentosUncheckedUpdateWithoutAgendamento_slotsInput>;
    create: Prisma.XOR<Prisma.agendamentosCreateWithoutAgendamento_slotsInput, Prisma.agendamentosUncheckedCreateWithoutAgendamento_slotsInput>;
    where?: Prisma.agendamentosWhereInput;
};
export type agendamentosUpdateToOneWithWhereWithoutAgendamento_slotsInput = {
    where?: Prisma.agendamentosWhereInput;
    data: Prisma.XOR<Prisma.agendamentosUpdateWithoutAgendamento_slotsInput, Prisma.agendamentosUncheckedUpdateWithoutAgendamento_slotsInput>;
};
export type agendamentosUpdateWithoutAgendamento_slotsInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUpdateManyWithoutAgendamentosNestedInput;
    cidadaos?: Prisma.cidadaosUpdateOneWithoutAgendamentosNestedInput;
};
export type agendamentosUncheckedUpdateWithoutAgendamento_slotsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cidadao_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput;
};
export type agendamentosCreateWithoutCidadaosInput = {
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesCreateNestedManyWithoutAgendamentosInput;
    agendamento_slots?: Prisma.agendamento_slotsCreateNestedManyWithoutAgendamentosInput;
};
export type agendamentosUncheckedCreateWithoutCidadaosInput = {
    id?: number;
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput;
    agendamento_slots?: Prisma.agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput;
};
export type agendamentosCreateOrConnectWithoutCidadaosInput = {
    where: Prisma.agendamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamentosCreateWithoutCidadaosInput, Prisma.agendamentosUncheckedCreateWithoutCidadaosInput>;
};
export type agendamentosCreateManyCidadaosInputEnvelope = {
    data: Prisma.agendamentosCreateManyCidadaosInput | Prisma.agendamentosCreateManyCidadaosInput[];
    skipDuplicates?: boolean;
};
export type agendamentosUpsertWithWhereUniqueWithoutCidadaosInput = {
    where: Prisma.agendamentosWhereUniqueInput;
    update: Prisma.XOR<Prisma.agendamentosUpdateWithoutCidadaosInput, Prisma.agendamentosUncheckedUpdateWithoutCidadaosInput>;
    create: Prisma.XOR<Prisma.agendamentosCreateWithoutCidadaosInput, Prisma.agendamentosUncheckedCreateWithoutCidadaosInput>;
};
export type agendamentosUpdateWithWhereUniqueWithoutCidadaosInput = {
    where: Prisma.agendamentosWhereUniqueInput;
    data: Prisma.XOR<Prisma.agendamentosUpdateWithoutCidadaosInput, Prisma.agendamentosUncheckedUpdateWithoutCidadaosInput>;
};
export type agendamentosUpdateManyWithWhereWithoutCidadaosInput = {
    where: Prisma.agendamentosScalarWhereInput;
    data: Prisma.XOR<Prisma.agendamentosUpdateManyMutationInput, Prisma.agendamentosUncheckedUpdateManyWithoutCidadaosInput>;
};
export type agendamentosScalarWhereInput = {
    AND?: Prisma.agendamentosScalarWhereInput | Prisma.agendamentosScalarWhereInput[];
    OR?: Prisma.agendamentosScalarWhereInput[];
    NOT?: Prisma.agendamentosScalarWhereInput | Prisma.agendamentosScalarWhereInput[];
    id?: Prisma.IntFilter<"agendamentos"> | number;
    cidadao_id?: Prisma.IntNullableFilter<"agendamentos"> | number | null;
    nome?: Prisma.StringFilter<"agendamentos"> | string;
    motivo?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    tratativa?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    data?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    horario?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.JsonNullableFilter<"agendamentos">;
    email?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    telefone?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    cep?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    endereco?: Prisma.StringNullableFilter<"agendamentos"> | string | null;
    data_registro?: Prisma.DateTimeFilter<"agendamentos"> | Date | string;
    status?: Prisma.Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status;
};
export type agendamentosCreateManyCidadaosInput = {
    id?: number;
    nome: string;
    motivo?: string | null;
    tratativa?: string | null;
    data: Date | string;
    horario: Date | string;
    atendimento?: $Enums.agendamentos_atendimento;
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: string | null;
    telefone?: string | null;
    cep?: string | null;
    endereco?: string | null;
    data_registro?: Date | string;
    status?: $Enums.agendamentos_status;
};
export type agendamentosUpdateWithoutCidadaosInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUpdateManyWithoutAgendamentosNestedInput;
    agendamento_slots?: Prisma.agendamento_slotsUpdateManyWithoutAgendamentosNestedInput;
};
export type agendamentosUncheckedUpdateWithoutCidadaosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
    agendamento_participantes?: Prisma.agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput;
    agendamento_slots?: Prisma.agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput;
};
export type agendamentosUncheckedUpdateManyWithoutCidadaosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tratativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atendimento?: Prisma.Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento;
    tipo_atendimento?: Prisma.Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento;
    blocos_json?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    data_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status;
};
export type AgendamentosCountOutputType = {
    agendamento_participantes: number;
    agendamento_slots: number;
};
export type AgendamentosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    agendamento_participantes?: boolean | AgendamentosCountOutputTypeCountAgendamento_participantesArgs;
    agendamento_slots?: boolean | AgendamentosCountOutputTypeCountAgendamento_slotsArgs;
};
export type AgendamentosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AgendamentosCountOutputTypeSelect<ExtArgs> | null;
};
export type AgendamentosCountOutputTypeCountAgendamento_participantesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_participantesWhereInput;
};
export type AgendamentosCountOutputTypeCountAgendamento_slotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_slotsWhereInput;
};
export type agendamentosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cidadao_id?: boolean;
    nome?: boolean;
    motivo?: boolean;
    tratativa?: boolean;
    data?: boolean;
    horario?: boolean;
    atendimento?: boolean;
    tipo_atendimento?: boolean;
    blocos_json?: boolean;
    email?: boolean;
    telefone?: boolean;
    cep?: boolean;
    endereco?: boolean;
    data_registro?: boolean;
    status?: boolean;
    agendamento_participantes?: boolean | Prisma.agendamentos$agendamento_participantesArgs<ExtArgs>;
    agendamento_slots?: boolean | Prisma.agendamentos$agendamento_slotsArgs<ExtArgs>;
    cidadaos?: boolean | Prisma.agendamentos$cidadaosArgs<ExtArgs>;
    _count?: boolean | Prisma.AgendamentosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["agendamentos"]>;
export type agendamentosSelectScalar = {
    id?: boolean;
    cidadao_id?: boolean;
    nome?: boolean;
    motivo?: boolean;
    tratativa?: boolean;
    data?: boolean;
    horario?: boolean;
    atendimento?: boolean;
    tipo_atendimento?: boolean;
    blocos_json?: boolean;
    email?: boolean;
    telefone?: boolean;
    cep?: boolean;
    endereco?: boolean;
    data_registro?: boolean;
    status?: boolean;
};
export type agendamentosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cidadao_id" | "nome" | "motivo" | "tratativa" | "data" | "horario" | "atendimento" | "tipo_atendimento" | "blocos_json" | "email" | "telefone" | "cep" | "endereco" | "data_registro" | "status", ExtArgs["result"]["agendamentos"]>;
export type agendamentosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    agendamento_participantes?: boolean | Prisma.agendamentos$agendamento_participantesArgs<ExtArgs>;
    agendamento_slots?: boolean | Prisma.agendamentos$agendamento_slotsArgs<ExtArgs>;
    cidadaos?: boolean | Prisma.agendamentos$cidadaosArgs<ExtArgs>;
    _count?: boolean | Prisma.AgendamentosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $agendamentosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "agendamentos";
    objects: {
        agendamento_participantes: Prisma.$agendamento_participantesPayload<ExtArgs>[];
        agendamento_slots: Prisma.$agendamento_slotsPayload<ExtArgs>[];
        cidadaos: Prisma.$cidadaosPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        cidadao_id: number | null;
        nome: string;
        motivo: string | null;
        tratativa: string | null;
        data: Date;
        horario: Date | string;
        atendimento: $Enums.agendamentos_atendimento;
        tipo_atendimento: $Enums.agendamentos_tipo_atendimento;
        blocos_json: runtime.JsonValue | null;
        email: string | null;
        telefone: string | null;
        cep: string | null;
        endereco: string | null;
        data_registro: Date;
        status: $Enums.agendamentos_status;
    }, ExtArgs["result"]["agendamentos"]>;
    composites: {};
};
export type agendamentosGetPayload<S extends boolean | null | undefined | agendamentosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$agendamentosPayload, S>;
export type agendamentosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<agendamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AgendamentosCountAggregateInputType | true;
};
export interface agendamentosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['agendamentos'];
        meta: {
            name: 'agendamentos';
        };
    };
    findUnique<T extends agendamentosFindUniqueArgs>(args: Prisma.SelectSubset<T, agendamentosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends agendamentosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, agendamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends agendamentosFindFirstArgs>(args?: Prisma.SelectSubset<T, agendamentosFindFirstArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends agendamentosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, agendamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends agendamentosFindManyArgs>(args?: Prisma.SelectSubset<T, agendamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends agendamentosCreateArgs>(args: Prisma.SelectSubset<T, agendamentosCreateArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends agendamentosCreateManyArgs>(args?: Prisma.SelectSubset<T, agendamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends agendamentosDeleteArgs>(args: Prisma.SelectSubset<T, agendamentosDeleteArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends agendamentosUpdateArgs>(args: Prisma.SelectSubset<T, agendamentosUpdateArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends agendamentosDeleteManyArgs>(args?: Prisma.SelectSubset<T, agendamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends agendamentosUpdateManyArgs>(args: Prisma.SelectSubset<T, agendamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends agendamentosUpsertArgs>(args: Prisma.SelectSubset<T, agendamentosUpsertArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends agendamentosCountArgs>(args?: Prisma.Subset<T, agendamentosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AgendamentosCountAggregateOutputType> : number>;
    aggregate<T extends AgendamentosAggregateArgs>(args: Prisma.Subset<T, AgendamentosAggregateArgs>): Prisma.PrismaPromise<GetAgendamentosAggregateType<T>>;
    groupBy<T extends agendamentosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: agendamentosGroupByArgs['orderBy'];
    } : {
        orderBy?: agendamentosGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, agendamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: agendamentosFieldRefs;
}
export interface Prisma__agendamentosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    agendamento_participantes<T extends Prisma.agendamentos$agendamento_participantesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agendamentos$agendamento_participantesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    agendamento_slots<T extends Prisma.agendamentos$agendamento_slotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agendamentos$agendamento_slotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cidadaos<T extends Prisma.agendamentos$cidadaosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agendamentos$cidadaosArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface agendamentosFieldRefs {
    readonly id: Prisma.FieldRef<"agendamentos", 'Int'>;
    readonly cidadao_id: Prisma.FieldRef<"agendamentos", 'Int'>;
    readonly nome: Prisma.FieldRef<"agendamentos", 'String'>;
    readonly motivo: Prisma.FieldRef<"agendamentos", 'String'>;
    readonly tratativa: Prisma.FieldRef<"agendamentos", 'String'>;
    readonly data: Prisma.FieldRef<"agendamentos", 'DateTime'>;
    readonly horario: Prisma.FieldRef<"agendamentos", 'DateTime'>;
    readonly atendimento: Prisma.FieldRef<"agendamentos", 'agendamentos_atendimento'>;
    readonly tipo_atendimento: Prisma.FieldRef<"agendamentos", 'agendamentos_tipo_atendimento'>;
    readonly blocos_json: Prisma.FieldRef<"agendamentos", 'Json'>;
    readonly email: Prisma.FieldRef<"agendamentos", 'String'>;
    readonly telefone: Prisma.FieldRef<"agendamentos", 'String'>;
    readonly cep: Prisma.FieldRef<"agendamentos", 'String'>;
    readonly endereco: Prisma.FieldRef<"agendamentos", 'String'>;
    readonly data_registro: Prisma.FieldRef<"agendamentos", 'DateTime'>;
    readonly status: Prisma.FieldRef<"agendamentos", 'agendamentos_status'>;
}
export type agendamentosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    where: Prisma.agendamentosWhereUniqueInput;
};
export type agendamentosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    where: Prisma.agendamentosWhereUniqueInput;
};
export type agendamentosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    where?: Prisma.agendamentosWhereInput;
    orderBy?: Prisma.agendamentosOrderByWithRelationInput | Prisma.agendamentosOrderByWithRelationInput[];
    cursor?: Prisma.agendamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AgendamentosScalarFieldEnum | Prisma.AgendamentosScalarFieldEnum[];
};
export type agendamentosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    where?: Prisma.agendamentosWhereInput;
    orderBy?: Prisma.agendamentosOrderByWithRelationInput | Prisma.agendamentosOrderByWithRelationInput[];
    cursor?: Prisma.agendamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AgendamentosScalarFieldEnum | Prisma.AgendamentosScalarFieldEnum[];
};
export type agendamentosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    where?: Prisma.agendamentosWhereInput;
    orderBy?: Prisma.agendamentosOrderByWithRelationInput | Prisma.agendamentosOrderByWithRelationInput[];
    cursor?: Prisma.agendamentosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AgendamentosScalarFieldEnum | Prisma.AgendamentosScalarFieldEnum[];
};
export type agendamentosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.agendamentosCreateInput, Prisma.agendamentosUncheckedCreateInput>;
};
export type agendamentosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.agendamentosCreateManyInput | Prisma.agendamentosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type agendamentosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.agendamentosUpdateInput, Prisma.agendamentosUncheckedUpdateInput>;
    where: Prisma.agendamentosWhereUniqueInput;
};
export type agendamentosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.agendamentosUpdateManyMutationInput, Prisma.agendamentosUncheckedUpdateManyInput>;
    where?: Prisma.agendamentosWhereInput;
    limit?: number;
};
export type agendamentosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    where: Prisma.agendamentosWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamentosCreateInput, Prisma.agendamentosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.agendamentosUpdateInput, Prisma.agendamentosUncheckedUpdateInput>;
};
export type agendamentosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
    where: Prisma.agendamentosWhereUniqueInput;
};
export type agendamentosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamentosWhereInput;
    limit?: number;
};
export type agendamentos$agendamento_participantesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
    where?: Prisma.agendamento_participantesWhereInput;
    orderBy?: Prisma.agendamento_participantesOrderByWithRelationInput | Prisma.agendamento_participantesOrderByWithRelationInput[];
    cursor?: Prisma.agendamento_participantesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Agendamento_participantesScalarFieldEnum | Prisma.Agendamento_participantesScalarFieldEnum[];
};
export type agendamentos$agendamento_slotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
    where?: Prisma.agendamento_slotsWhereInput;
    orderBy?: Prisma.agendamento_slotsOrderByWithRelationInput | Prisma.agendamento_slotsOrderByWithRelationInput[];
    cursor?: Prisma.agendamento_slotsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Agendamento_slotsScalarFieldEnum | Prisma.Agendamento_slotsScalarFieldEnum[];
};
export type agendamentos$cidadaosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where?: Prisma.cidadaosWhereInput;
};
export type agendamentosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamentosSelect<ExtArgs> | null;
    omit?: Prisma.agendamentosOmit<ExtArgs> | null;
    include?: Prisma.agendamentosInclude<ExtArgs> | null;
};
