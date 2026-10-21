import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type agendamento_participantesModel = runtime.Types.Result.DefaultSelection<Prisma.$agendamento_participantesPayload>;
export type AggregateAgendamento_participantes = {
    _count: Agendamento_participantesCountAggregateOutputType | null;
    _avg: Agendamento_participantesAvgAggregateOutputType | null;
    _sum: Agendamento_participantesSumAggregateOutputType | null;
    _min: Agendamento_participantesMinAggregateOutputType | null;
    _max: Agendamento_participantesMaxAggregateOutputType | null;
};
export type Agendamento_participantesAvgAggregateOutputType = {
    id: number | null;
    agendamento_id: number | null;
};
export type Agendamento_participantesSumAggregateOutputType = {
    id: number | null;
    agendamento_id: number | null;
};
export type Agendamento_participantesMinAggregateOutputType = {
    id: number | null;
    agendamento_id: number | null;
    nome: string | null;
    telefone: string | null;
    principal: boolean | null;
};
export type Agendamento_participantesMaxAggregateOutputType = {
    id: number | null;
    agendamento_id: number | null;
    nome: string | null;
    telefone: string | null;
    principal: boolean | null;
};
export type Agendamento_participantesCountAggregateOutputType = {
    id: number;
    agendamento_id: number;
    nome: number;
    telefone: number;
    principal: number;
    _all: number;
};
export type Agendamento_participantesAvgAggregateInputType = {
    id?: true;
    agendamento_id?: true;
};
export type Agendamento_participantesSumAggregateInputType = {
    id?: true;
    agendamento_id?: true;
};
export type Agendamento_participantesMinAggregateInputType = {
    id?: true;
    agendamento_id?: true;
    nome?: true;
    telefone?: true;
    principal?: true;
};
export type Agendamento_participantesMaxAggregateInputType = {
    id?: true;
    agendamento_id?: true;
    nome?: true;
    telefone?: true;
    principal?: true;
};
export type Agendamento_participantesCountAggregateInputType = {
    id?: true;
    agendamento_id?: true;
    nome?: true;
    telefone?: true;
    principal?: true;
    _all?: true;
};
export type Agendamento_participantesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_participantesWhereInput;
    orderBy?: Prisma.agendamento_participantesOrderByWithRelationInput | Prisma.agendamento_participantesOrderByWithRelationInput[];
    cursor?: Prisma.agendamento_participantesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Agendamento_participantesCountAggregateInputType;
    _avg?: Agendamento_participantesAvgAggregateInputType;
    _sum?: Agendamento_participantesSumAggregateInputType;
    _min?: Agendamento_participantesMinAggregateInputType;
    _max?: Agendamento_participantesMaxAggregateInputType;
};
export type GetAgendamento_participantesAggregateType<T extends Agendamento_participantesAggregateArgs> = {
    [P in keyof T & keyof AggregateAgendamento_participantes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAgendamento_participantes[P]> : Prisma.GetScalarType<T[P], AggregateAgendamento_participantes[P]>;
};
export type agendamento_participantesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_participantesWhereInput;
    orderBy?: Prisma.agendamento_participantesOrderByWithAggregationInput | Prisma.agendamento_participantesOrderByWithAggregationInput[];
    by: Prisma.Agendamento_participantesScalarFieldEnum[] | Prisma.Agendamento_participantesScalarFieldEnum;
    having?: Prisma.agendamento_participantesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Agendamento_participantesCountAggregateInputType | true;
    _avg?: Agendamento_participantesAvgAggregateInputType;
    _sum?: Agendamento_participantesSumAggregateInputType;
    _min?: Agendamento_participantesMinAggregateInputType;
    _max?: Agendamento_participantesMaxAggregateInputType;
};
export type Agendamento_participantesGroupByOutputType = {
    id: number;
    agendamento_id: number;
    nome: string;
    telefone: string | null;
    principal: boolean;
    _count: Agendamento_participantesCountAggregateOutputType | null;
    _avg: Agendamento_participantesAvgAggregateOutputType | null;
    _sum: Agendamento_participantesSumAggregateOutputType | null;
    _min: Agendamento_participantesMinAggregateOutputType | null;
    _max: Agendamento_participantesMaxAggregateOutputType | null;
};
export type GetAgendamento_participantesGroupByPayload<T extends agendamento_participantesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Agendamento_participantesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Agendamento_participantesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Agendamento_participantesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Agendamento_participantesGroupByOutputType[P]>;
}>>;
export type agendamento_participantesWhereInput = {
    AND?: Prisma.agendamento_participantesWhereInput | Prisma.agendamento_participantesWhereInput[];
    OR?: Prisma.agendamento_participantesWhereInput[];
    NOT?: Prisma.agendamento_participantesWhereInput | Prisma.agendamento_participantesWhereInput[];
    id?: Prisma.IntFilter<"agendamento_participantes"> | number;
    agendamento_id?: Prisma.IntFilter<"agendamento_participantes"> | number;
    nome?: Prisma.StringFilter<"agendamento_participantes"> | string;
    telefone?: Prisma.StringNullableFilter<"agendamento_participantes"> | string | null;
    principal?: Prisma.BoolFilter<"agendamento_participantes"> | boolean;
    agendamentos?: Prisma.XOR<Prisma.AgendamentosScalarRelationFilter, Prisma.agendamentosWhereInput>;
};
export type agendamento_participantesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    principal?: Prisma.SortOrder;
    agendamentos?: Prisma.agendamentosOrderByWithRelationInput;
    _relevance?: Prisma.agendamento_participantesOrderByRelevanceInput;
};
export type agendamento_participantesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.agendamento_participantesWhereInput | Prisma.agendamento_participantesWhereInput[];
    OR?: Prisma.agendamento_participantesWhereInput[];
    NOT?: Prisma.agendamento_participantesWhereInput | Prisma.agendamento_participantesWhereInput[];
    agendamento_id?: Prisma.IntFilter<"agendamento_participantes"> | number;
    nome?: Prisma.StringFilter<"agendamento_participantes"> | string;
    telefone?: Prisma.StringNullableFilter<"agendamento_participantes"> | string | null;
    principal?: Prisma.BoolFilter<"agendamento_participantes"> | boolean;
    agendamentos?: Prisma.XOR<Prisma.AgendamentosScalarRelationFilter, Prisma.agendamentosWhereInput>;
}, "id">;
export type agendamento_participantesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    principal?: Prisma.SortOrder;
    _count?: Prisma.agendamento_participantesCountOrderByAggregateInput;
    _avg?: Prisma.agendamento_participantesAvgOrderByAggregateInput;
    _max?: Prisma.agendamento_participantesMaxOrderByAggregateInput;
    _min?: Prisma.agendamento_participantesMinOrderByAggregateInput;
    _sum?: Prisma.agendamento_participantesSumOrderByAggregateInput;
};
export type agendamento_participantesScalarWhereWithAggregatesInput = {
    AND?: Prisma.agendamento_participantesScalarWhereWithAggregatesInput | Prisma.agendamento_participantesScalarWhereWithAggregatesInput[];
    OR?: Prisma.agendamento_participantesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.agendamento_participantesScalarWhereWithAggregatesInput | Prisma.agendamento_participantesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"agendamento_participantes"> | number;
    agendamento_id?: Prisma.IntWithAggregatesFilter<"agendamento_participantes"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"agendamento_participantes"> | string;
    telefone?: Prisma.StringNullableWithAggregatesFilter<"agendamento_participantes"> | string | null;
    principal?: Prisma.BoolWithAggregatesFilter<"agendamento_participantes"> | boolean;
};
export type agendamento_participantesCreateInput = {
    nome: string;
    telefone?: string | null;
    principal?: boolean;
    agendamentos: Prisma.agendamentosCreateNestedOneWithoutAgendamento_participantesInput;
};
export type agendamento_participantesUncheckedCreateInput = {
    id?: number;
    agendamento_id: number;
    nome: string;
    telefone?: string | null;
    principal?: boolean;
};
export type agendamento_participantesUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    agendamentos?: Prisma.agendamentosUpdateOneRequiredWithoutAgendamento_participantesNestedInput;
};
export type agendamento_participantesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    agendamento_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type agendamento_participantesCreateManyInput = {
    id?: number;
    agendamento_id: number;
    nome: string;
    telefone?: string | null;
    principal?: boolean;
};
export type agendamento_participantesUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type agendamento_participantesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    agendamento_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type agendamento_participantesOrderByRelevanceInput = {
    fields: Prisma.agendamento_participantesOrderByRelevanceFieldEnum | Prisma.agendamento_participantesOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type agendamento_participantesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
};
export type agendamento_participantesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
};
export type agendamento_participantesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
};
export type agendamento_participantesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
};
export type agendamento_participantesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
};
export type Agendamento_participantesListRelationFilter = {
    every?: Prisma.agendamento_participantesWhereInput;
    some?: Prisma.agendamento_participantesWhereInput;
    none?: Prisma.agendamento_participantesWhereInput;
};
export type agendamento_participantesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type agendamento_participantesCreateNestedManyWithoutAgendamentosInput = {
    create?: Prisma.XOR<Prisma.agendamento_participantesCreateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_participantesCreateWithoutAgendamentosInput[] | Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_participantesCreateManyAgendamentosInputEnvelope;
    connect?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
};
export type agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput = {
    create?: Prisma.XOR<Prisma.agendamento_participantesCreateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_participantesCreateWithoutAgendamentosInput[] | Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_participantesCreateManyAgendamentosInputEnvelope;
    connect?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
};
export type agendamento_participantesUpdateManyWithoutAgendamentosNestedInput = {
    create?: Prisma.XOR<Prisma.agendamento_participantesCreateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_participantesCreateWithoutAgendamentosInput[] | Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput[];
    upsert?: Prisma.agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_participantesCreateManyAgendamentosInputEnvelope;
    set?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    disconnect?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    delete?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    connect?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    update?: Prisma.agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput[];
    updateMany?: Prisma.agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput | Prisma.agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput[];
    deleteMany?: Prisma.agendamento_participantesScalarWhereInput | Prisma.agendamento_participantesScalarWhereInput[];
};
export type agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput = {
    create?: Prisma.XOR<Prisma.agendamento_participantesCreateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_participantesCreateWithoutAgendamentosInput[] | Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_participantesCreateOrConnectWithoutAgendamentosInput[];
    upsert?: Prisma.agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_participantesCreateManyAgendamentosInputEnvelope;
    set?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    disconnect?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    delete?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    connect?: Prisma.agendamento_participantesWhereUniqueInput | Prisma.agendamento_participantesWhereUniqueInput[];
    update?: Prisma.agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput[];
    updateMany?: Prisma.agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput | Prisma.agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput[];
    deleteMany?: Prisma.agendamento_participantesScalarWhereInput | Prisma.agendamento_participantesScalarWhereInput[];
};
export type agendamento_participantesCreateWithoutAgendamentosInput = {
    nome: string;
    telefone?: string | null;
    principal?: boolean;
};
export type agendamento_participantesUncheckedCreateWithoutAgendamentosInput = {
    id?: number;
    nome: string;
    telefone?: string | null;
    principal?: boolean;
};
export type agendamento_participantesCreateOrConnectWithoutAgendamentosInput = {
    where: Prisma.agendamento_participantesWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamento_participantesCreateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput>;
};
export type agendamento_participantesCreateManyAgendamentosInputEnvelope = {
    data: Prisma.agendamento_participantesCreateManyAgendamentosInput | Prisma.agendamento_participantesCreateManyAgendamentosInput[];
    skipDuplicates?: boolean;
};
export type agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput = {
    where: Prisma.agendamento_participantesWhereUniqueInput;
    update: Prisma.XOR<Prisma.agendamento_participantesUpdateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedUpdateWithoutAgendamentosInput>;
    create: Prisma.XOR<Prisma.agendamento_participantesCreateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedCreateWithoutAgendamentosInput>;
};
export type agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput = {
    where: Prisma.agendamento_participantesWhereUniqueInput;
    data: Prisma.XOR<Prisma.agendamento_participantesUpdateWithoutAgendamentosInput, Prisma.agendamento_participantesUncheckedUpdateWithoutAgendamentosInput>;
};
export type agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput = {
    where: Prisma.agendamento_participantesScalarWhereInput;
    data: Prisma.XOR<Prisma.agendamento_participantesUpdateManyMutationInput, Prisma.agendamento_participantesUncheckedUpdateManyWithoutAgendamentosInput>;
};
export type agendamento_participantesScalarWhereInput = {
    AND?: Prisma.agendamento_participantesScalarWhereInput | Prisma.agendamento_participantesScalarWhereInput[];
    OR?: Prisma.agendamento_participantesScalarWhereInput[];
    NOT?: Prisma.agendamento_participantesScalarWhereInput | Prisma.agendamento_participantesScalarWhereInput[];
    id?: Prisma.IntFilter<"agendamento_participantes"> | number;
    agendamento_id?: Prisma.IntFilter<"agendamento_participantes"> | number;
    nome?: Prisma.StringFilter<"agendamento_participantes"> | string;
    telefone?: Prisma.StringNullableFilter<"agendamento_participantes"> | string | null;
    principal?: Prisma.BoolFilter<"agendamento_participantes"> | boolean;
};
export type agendamento_participantesCreateManyAgendamentosInput = {
    id?: number;
    nome: string;
    telefone?: string | null;
    principal?: boolean;
};
export type agendamento_participantesUpdateWithoutAgendamentosInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type agendamento_participantesUncheckedUpdateWithoutAgendamentosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type agendamento_participantesUncheckedUpdateManyWithoutAgendamentosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type agendamento_participantesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    agendamento_id?: boolean;
    nome?: boolean;
    telefone?: boolean;
    principal?: boolean;
    agendamentos?: boolean | Prisma.agendamentosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["agendamento_participantes"]>;
export type agendamento_participantesSelectScalar = {
    id?: boolean;
    agendamento_id?: boolean;
    nome?: boolean;
    telefone?: boolean;
    principal?: boolean;
};
export type agendamento_participantesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "agendamento_id" | "nome" | "telefone" | "principal", ExtArgs["result"]["agendamento_participantes"]>;
export type agendamento_participantesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    agendamentos?: boolean | Prisma.agendamentosDefaultArgs<ExtArgs>;
};
export type $agendamento_participantesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "agendamento_participantes";
    objects: {
        agendamentos: Prisma.$agendamentosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        agendamento_id: number;
        nome: string;
        telefone: string | null;
        principal: boolean;
    }, ExtArgs["result"]["agendamento_participantes"]>;
    composites: {};
};
export type agendamento_participantesGetPayload<S extends boolean | null | undefined | agendamento_participantesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload, S>;
export type agendamento_participantesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<agendamento_participantesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Agendamento_participantesCountAggregateInputType | true;
};
export interface agendamento_participantesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['agendamento_participantes'];
        meta: {
            name: 'agendamento_participantes';
        };
    };
    findUnique<T extends agendamento_participantesFindUniqueArgs>(args: Prisma.SelectSubset<T, agendamento_participantesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends agendamento_participantesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, agendamento_participantesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends agendamento_participantesFindFirstArgs>(args?: Prisma.SelectSubset<T, agendamento_participantesFindFirstArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends agendamento_participantesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, agendamento_participantesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends agendamento_participantesFindManyArgs>(args?: Prisma.SelectSubset<T, agendamento_participantesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends agendamento_participantesCreateArgs>(args: Prisma.SelectSubset<T, agendamento_participantesCreateArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends agendamento_participantesCreateManyArgs>(args?: Prisma.SelectSubset<T, agendamento_participantesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends agendamento_participantesDeleteArgs>(args: Prisma.SelectSubset<T, agendamento_participantesDeleteArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends agendamento_participantesUpdateArgs>(args: Prisma.SelectSubset<T, agendamento_participantesUpdateArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends agendamento_participantesDeleteManyArgs>(args?: Prisma.SelectSubset<T, agendamento_participantesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends agendamento_participantesUpdateManyArgs>(args: Prisma.SelectSubset<T, agendamento_participantesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends agendamento_participantesUpsertArgs>(args: Prisma.SelectSubset<T, agendamento_participantesUpsertArgs<ExtArgs>>): Prisma.Prisma__agendamento_participantesClient<runtime.Types.Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends agendamento_participantesCountArgs>(args?: Prisma.Subset<T, agendamento_participantesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Agendamento_participantesCountAggregateOutputType> : number>;
    aggregate<T extends Agendamento_participantesAggregateArgs>(args: Prisma.Subset<T, Agendamento_participantesAggregateArgs>): Prisma.PrismaPromise<GetAgendamento_participantesAggregateType<T>>;
    groupBy<T extends agendamento_participantesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: agendamento_participantesGroupByArgs['orderBy'];
    } : {
        orderBy?: agendamento_participantesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, agendamento_participantesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamento_participantesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: agendamento_participantesFieldRefs;
}
export interface Prisma__agendamento_participantesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    agendamentos<T extends Prisma.agendamentosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agendamentosDefaultArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface agendamento_participantesFieldRefs {
    readonly id: Prisma.FieldRef<"agendamento_participantes", 'Int'>;
    readonly agendamento_id: Prisma.FieldRef<"agendamento_participantes", 'Int'>;
    readonly nome: Prisma.FieldRef<"agendamento_participantes", 'String'>;
    readonly telefone: Prisma.FieldRef<"agendamento_participantes", 'String'>;
    readonly principal: Prisma.FieldRef<"agendamento_participantes", 'Boolean'>;
}
export type agendamento_participantesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
    where: Prisma.agendamento_participantesWhereUniqueInput;
};
export type agendamento_participantesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
    where: Prisma.agendamento_participantesWhereUniqueInput;
};
export type agendamento_participantesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type agendamento_participantesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type agendamento_participantesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type agendamento_participantesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.agendamento_participantesCreateInput, Prisma.agendamento_participantesUncheckedCreateInput>;
};
export type agendamento_participantesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.agendamento_participantesCreateManyInput | Prisma.agendamento_participantesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type agendamento_participantesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.agendamento_participantesUpdateInput, Prisma.agendamento_participantesUncheckedUpdateInput>;
    where: Prisma.agendamento_participantesWhereUniqueInput;
};
export type agendamento_participantesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.agendamento_participantesUpdateManyMutationInput, Prisma.agendamento_participantesUncheckedUpdateManyInput>;
    where?: Prisma.agendamento_participantesWhereInput;
    limit?: number;
};
export type agendamento_participantesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
    where: Prisma.agendamento_participantesWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamento_participantesCreateInput, Prisma.agendamento_participantesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.agendamento_participantesUpdateInput, Prisma.agendamento_participantesUncheckedUpdateInput>;
};
export type agendamento_participantesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
    where: Prisma.agendamento_participantesWhereUniqueInput;
};
export type agendamento_participantesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_participantesWhereInput;
    limit?: number;
};
export type agendamento_participantesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_participantesSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_participantesOmit<ExtArgs> | null;
    include?: Prisma.agendamento_participantesInclude<ExtArgs> | null;
};
