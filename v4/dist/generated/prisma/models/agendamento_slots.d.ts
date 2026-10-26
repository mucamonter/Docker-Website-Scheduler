import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type agendamento_slotsModel = runtime.Types.Result.DefaultSelection<Prisma.$agendamento_slotsPayload>;
export type AggregateAgendamento_slots = {
    _count: Agendamento_slotsCountAggregateOutputType | null;
    _avg: Agendamento_slotsAvgAggregateOutputType | null;
    _sum: Agendamento_slotsSumAggregateOutputType | null;
    _min: Agendamento_slotsMinAggregateOutputType | null;
    _max: Agendamento_slotsMaxAggregateOutputType | null;
};
export type Agendamento_slotsAvgAggregateOutputType = {
    id: number | null;
    agendamento_id: number | null;
};
export type Agendamento_slotsSumAggregateOutputType = {
    id: bigint | null;
    agendamento_id: number | null;
};
export type Agendamento_slotsMinAggregateOutputType = {
    id: bigint | null;
    agendamento_id: number | null;
    data: Date | null;
    horario_inicio: Date | null;
};
export type Agendamento_slotsMaxAggregateOutputType = {
    id: bigint | null;
    agendamento_id: number | null;
    data: Date | null;
    horario_inicio: Date | null;
};
export type Agendamento_slotsCountAggregateOutputType = {
    id: number;
    agendamento_id: number;
    data: number;
    horario_inicio: number;
    _all: number;
};
export type Agendamento_slotsAvgAggregateInputType = {
    id?: true;
    agendamento_id?: true;
};
export type Agendamento_slotsSumAggregateInputType = {
    id?: true;
    agendamento_id?: true;
};
export type Agendamento_slotsMinAggregateInputType = {
    id?: true;
    agendamento_id?: true;
    data?: true;
    horario_inicio?: true;
};
export type Agendamento_slotsMaxAggregateInputType = {
    id?: true;
    agendamento_id?: true;
    data?: true;
    horario_inicio?: true;
};
export type Agendamento_slotsCountAggregateInputType = {
    id?: true;
    agendamento_id?: true;
    data?: true;
    horario_inicio?: true;
    _all?: true;
};
export type Agendamento_slotsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_slotsWhereInput;
    orderBy?: Prisma.agendamento_slotsOrderByWithRelationInput | Prisma.agendamento_slotsOrderByWithRelationInput[];
    cursor?: Prisma.agendamento_slotsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Agendamento_slotsCountAggregateInputType;
    _avg?: Agendamento_slotsAvgAggregateInputType;
    _sum?: Agendamento_slotsSumAggregateInputType;
    _min?: Agendamento_slotsMinAggregateInputType;
    _max?: Agendamento_slotsMaxAggregateInputType;
};
export type GetAgendamento_slotsAggregateType<T extends Agendamento_slotsAggregateArgs> = {
    [P in keyof T & keyof AggregateAgendamento_slots]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAgendamento_slots[P]> : Prisma.GetScalarType<T[P], AggregateAgendamento_slots[P]>;
};
export type agendamento_slotsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_slotsWhereInput;
    orderBy?: Prisma.agendamento_slotsOrderByWithAggregationInput | Prisma.agendamento_slotsOrderByWithAggregationInput[];
    by: Prisma.Agendamento_slotsScalarFieldEnum[] | Prisma.Agendamento_slotsScalarFieldEnum;
    having?: Prisma.agendamento_slotsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Agendamento_slotsCountAggregateInputType | true;
    _avg?: Agendamento_slotsAvgAggregateInputType;
    _sum?: Agendamento_slotsSumAggregateInputType;
    _min?: Agendamento_slotsMinAggregateInputType;
    _max?: Agendamento_slotsMaxAggregateInputType;
};
export type Agendamento_slotsGroupByOutputType = {
    id: bigint;
    agendamento_id: number;
    data: Date;
    horario_inicio: Date;
    _count: Agendamento_slotsCountAggregateOutputType | null;
    _avg: Agendamento_slotsAvgAggregateOutputType | null;
    _sum: Agendamento_slotsSumAggregateOutputType | null;
    _min: Agendamento_slotsMinAggregateOutputType | null;
    _max: Agendamento_slotsMaxAggregateOutputType | null;
};
export type GetAgendamento_slotsGroupByPayload<T extends agendamento_slotsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Agendamento_slotsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Agendamento_slotsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Agendamento_slotsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Agendamento_slotsGroupByOutputType[P]>;
}>>;
export type agendamento_slotsWhereInput = {
    AND?: Prisma.agendamento_slotsWhereInput | Prisma.agendamento_slotsWhereInput[];
    OR?: Prisma.agendamento_slotsWhereInput[];
    NOT?: Prisma.agendamento_slotsWhereInput | Prisma.agendamento_slotsWhereInput[];
    id?: Prisma.BigIntFilter<"agendamento_slots"> | bigint | number;
    agendamento_id?: Prisma.IntFilter<"agendamento_slots"> | number;
    data?: Prisma.DateTimeFilter<"agendamento_slots"> | Date | string;
    horario_inicio?: Prisma.DateTimeFilter<"agendamento_slots"> | Date | string;
    agendamentos?: Prisma.XOR<Prisma.AgendamentosScalarRelationFilter, Prisma.agendamentosWhereInput>;
};
export type agendamento_slotsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
    agendamentos?: Prisma.agendamentosOrderByWithRelationInput;
};
export type agendamento_slotsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.agendamento_slotsWhereInput | Prisma.agendamento_slotsWhereInput[];
    OR?: Prisma.agendamento_slotsWhereInput[];
    NOT?: Prisma.agendamento_slotsWhereInput | Prisma.agendamento_slotsWhereInput[];
    agendamento_id?: Prisma.IntFilter<"agendamento_slots"> | number;
    data?: Prisma.DateTimeFilter<"agendamento_slots"> | Date | string;
    horario_inicio?: Prisma.DateTimeFilter<"agendamento_slots"> | Date | string;
    agendamentos?: Prisma.XOR<Prisma.AgendamentosScalarRelationFilter, Prisma.agendamentosWhereInput>;
}, "id">;
export type agendamento_slotsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
    _count?: Prisma.agendamento_slotsCountOrderByAggregateInput;
    _avg?: Prisma.agendamento_slotsAvgOrderByAggregateInput;
    _max?: Prisma.agendamento_slotsMaxOrderByAggregateInput;
    _min?: Prisma.agendamento_slotsMinOrderByAggregateInput;
    _sum?: Prisma.agendamento_slotsSumOrderByAggregateInput;
};
export type agendamento_slotsScalarWhereWithAggregatesInput = {
    AND?: Prisma.agendamento_slotsScalarWhereWithAggregatesInput | Prisma.agendamento_slotsScalarWhereWithAggregatesInput[];
    OR?: Prisma.agendamento_slotsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.agendamento_slotsScalarWhereWithAggregatesInput | Prisma.agendamento_slotsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"agendamento_slots"> | bigint | number;
    agendamento_id?: Prisma.IntWithAggregatesFilter<"agendamento_slots"> | number;
    data?: Prisma.DateTimeWithAggregatesFilter<"agendamento_slots"> | Date | string;
    horario_inicio?: Prisma.DateTimeWithAggregatesFilter<"agendamento_slots"> | Date | string;
};
export type agendamento_slotsCreateInput = {
    id?: bigint | number;
    data: Date | string;
    horario_inicio: Date | string;
    agendamentos: Prisma.agendamentosCreateNestedOneWithoutAgendamento_slotsInput;
};
export type agendamento_slotsUncheckedCreateInput = {
    id?: bigint | number;
    agendamento_id: number;
    data: Date | string;
    horario_inicio: Date | string;
};
export type agendamento_slotsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    agendamentos?: Prisma.agendamentosUpdateOneRequiredWithoutAgendamento_slotsNestedInput;
};
export type agendamento_slotsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    agendamento_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type agendamento_slotsCreateManyInput = {
    id?: bigint | number;
    agendamento_id: number;
    data: Date | string;
    horario_inicio: Date | string;
};
export type agendamento_slotsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type agendamento_slotsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    agendamento_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type agendamento_slotsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
};
export type agendamento_slotsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
};
export type agendamento_slotsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
};
export type agendamento_slotsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
};
export type agendamento_slotsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    agendamento_id?: Prisma.SortOrder;
};
export type Agendamento_slotsListRelationFilter = {
    every?: Prisma.agendamento_slotsWhereInput;
    some?: Prisma.agendamento_slotsWhereInput;
    none?: Prisma.agendamento_slotsWhereInput;
};
export type agendamento_slotsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type agendamento_slotsCreateNestedManyWithoutAgendamentosInput = {
    create?: Prisma.XOR<Prisma.agendamento_slotsCreateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_slotsCreateWithoutAgendamentosInput[] | Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_slotsCreateManyAgendamentosInputEnvelope;
    connect?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
};
export type agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput = {
    create?: Prisma.XOR<Prisma.agendamento_slotsCreateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_slotsCreateWithoutAgendamentosInput[] | Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_slotsCreateManyAgendamentosInputEnvelope;
    connect?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
};
export type agendamento_slotsUpdateManyWithoutAgendamentosNestedInput = {
    create?: Prisma.XOR<Prisma.agendamento_slotsCreateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_slotsCreateWithoutAgendamentosInput[] | Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput[];
    upsert?: Prisma.agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_slotsCreateManyAgendamentosInputEnvelope;
    set?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    disconnect?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    delete?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    connect?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    update?: Prisma.agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput[];
    updateMany?: Prisma.agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput | Prisma.agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput[];
    deleteMany?: Prisma.agendamento_slotsScalarWhereInput | Prisma.agendamento_slotsScalarWhereInput[];
};
export type agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput = {
    create?: Prisma.XOR<Prisma.agendamento_slotsCreateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | Prisma.agendamento_slotsCreateWithoutAgendamentosInput[] | Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput[];
    connectOrCreate?: Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput | Prisma.agendamento_slotsCreateOrConnectWithoutAgendamentosInput[];
    upsert?: Prisma.agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput[];
    createMany?: Prisma.agendamento_slotsCreateManyAgendamentosInputEnvelope;
    set?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    disconnect?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    delete?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    connect?: Prisma.agendamento_slotsWhereUniqueInput | Prisma.agendamento_slotsWhereUniqueInput[];
    update?: Prisma.agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput | Prisma.agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput[];
    updateMany?: Prisma.agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput | Prisma.agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput[];
    deleteMany?: Prisma.agendamento_slotsScalarWhereInput | Prisma.agendamento_slotsScalarWhereInput[];
};
export type agendamento_slotsCreateWithoutAgendamentosInput = {
    id?: bigint | number;
    data: Date | string;
    horario_inicio: Date | string;
};
export type agendamento_slotsUncheckedCreateWithoutAgendamentosInput = {
    id?: bigint | number;
    data: Date | string;
    horario_inicio: Date | string;
};
export type agendamento_slotsCreateOrConnectWithoutAgendamentosInput = {
    where: Prisma.agendamento_slotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamento_slotsCreateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput>;
};
export type agendamento_slotsCreateManyAgendamentosInputEnvelope = {
    data: Prisma.agendamento_slotsCreateManyAgendamentosInput | Prisma.agendamento_slotsCreateManyAgendamentosInput[];
    skipDuplicates?: boolean;
};
export type agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput = {
    where: Prisma.agendamento_slotsWhereUniqueInput;
    update: Prisma.XOR<Prisma.agendamento_slotsUpdateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedUpdateWithoutAgendamentosInput>;
    create: Prisma.XOR<Prisma.agendamento_slotsCreateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedCreateWithoutAgendamentosInput>;
};
export type agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput = {
    where: Prisma.agendamento_slotsWhereUniqueInput;
    data: Prisma.XOR<Prisma.agendamento_slotsUpdateWithoutAgendamentosInput, Prisma.agendamento_slotsUncheckedUpdateWithoutAgendamentosInput>;
};
export type agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput = {
    where: Prisma.agendamento_slotsScalarWhereInput;
    data: Prisma.XOR<Prisma.agendamento_slotsUpdateManyMutationInput, Prisma.agendamento_slotsUncheckedUpdateManyWithoutAgendamentosInput>;
};
export type agendamento_slotsScalarWhereInput = {
    AND?: Prisma.agendamento_slotsScalarWhereInput | Prisma.agendamento_slotsScalarWhereInput[];
    OR?: Prisma.agendamento_slotsScalarWhereInput[];
    NOT?: Prisma.agendamento_slotsScalarWhereInput | Prisma.agendamento_slotsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"agendamento_slots"> | bigint | number;
    agendamento_id?: Prisma.IntFilter<"agendamento_slots"> | number;
    data?: Prisma.DateTimeFilter<"agendamento_slots"> | Date | string;
    horario_inicio?: Prisma.DateTimeFilter<"agendamento_slots"> | Date | string;
};
export type agendamento_slotsCreateManyAgendamentosInput = {
    id?: bigint | number;
    data: Date | string;
    horario_inicio: Date | string;
};
export type agendamento_slotsUpdateWithoutAgendamentosInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type agendamento_slotsUncheckedUpdateWithoutAgendamentosInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type agendamento_slotsUncheckedUpdateManyWithoutAgendamentosInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type agendamento_slotsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    agendamento_id?: boolean;
    data?: boolean;
    horario_inicio?: boolean;
    agendamentos?: boolean | Prisma.agendamentosDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["agendamento_slots"]>;
export type agendamento_slotsSelectScalar = {
    id?: boolean;
    agendamento_id?: boolean;
    data?: boolean;
    horario_inicio?: boolean;
};
export type agendamento_slotsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "agendamento_id" | "data" | "horario_inicio", ExtArgs["result"]["agendamento_slots"]>;
export type agendamento_slotsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    agendamentos?: boolean | Prisma.agendamentosDefaultArgs<ExtArgs>;
};
export type $agendamento_slotsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "agendamento_slots";
    objects: {
        agendamentos: Prisma.$agendamentosPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        agendamento_id: number;
        data: Date;
        horario_inicio: Date;
    }, ExtArgs["result"]["agendamento_slots"]>;
    composites: {};
};
export type agendamento_slotsGetPayload<S extends boolean | null | undefined | agendamento_slotsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload, S>;
export type agendamento_slotsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<agendamento_slotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Agendamento_slotsCountAggregateInputType | true;
};
export interface agendamento_slotsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['agendamento_slots'];
        meta: {
            name: 'agendamento_slots';
        };
    };
    findUnique<T extends agendamento_slotsFindUniqueArgs>(args: Prisma.SelectSubset<T, agendamento_slotsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends agendamento_slotsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, agendamento_slotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends agendamento_slotsFindFirstArgs>(args?: Prisma.SelectSubset<T, agendamento_slotsFindFirstArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends agendamento_slotsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, agendamento_slotsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends agendamento_slotsFindManyArgs>(args?: Prisma.SelectSubset<T, agendamento_slotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends agendamento_slotsCreateArgs>(args: Prisma.SelectSubset<T, agendamento_slotsCreateArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends agendamento_slotsCreateManyArgs>(args?: Prisma.SelectSubset<T, agendamento_slotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends agendamento_slotsDeleteArgs>(args: Prisma.SelectSubset<T, agendamento_slotsDeleteArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends agendamento_slotsUpdateArgs>(args: Prisma.SelectSubset<T, agendamento_slotsUpdateArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends agendamento_slotsDeleteManyArgs>(args?: Prisma.SelectSubset<T, agendamento_slotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends agendamento_slotsUpdateManyArgs>(args: Prisma.SelectSubset<T, agendamento_slotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends agendamento_slotsUpsertArgs>(args: Prisma.SelectSubset<T, agendamento_slotsUpsertArgs<ExtArgs>>): Prisma.Prisma__agendamento_slotsClient<runtime.Types.Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends agendamento_slotsCountArgs>(args?: Prisma.Subset<T, agendamento_slotsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Agendamento_slotsCountAggregateOutputType> : number>;
    aggregate<T extends Agendamento_slotsAggregateArgs>(args: Prisma.Subset<T, Agendamento_slotsAggregateArgs>): Prisma.PrismaPromise<GetAgendamento_slotsAggregateType<T>>;
    groupBy<T extends agendamento_slotsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: agendamento_slotsGroupByArgs['orderBy'];
    } : {
        orderBy?: agendamento_slotsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, agendamento_slotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamento_slotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: agendamento_slotsFieldRefs;
}
export interface Prisma__agendamento_slotsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    agendamentos<T extends Prisma.agendamentosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agendamentosDefaultArgs<ExtArgs>>): Prisma.Prisma__agendamentosClient<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface agendamento_slotsFieldRefs {
    readonly id: Prisma.FieldRef<"agendamento_slots", 'BigInt'>;
    readonly agendamento_id: Prisma.FieldRef<"agendamento_slots", 'Int'>;
    readonly data: Prisma.FieldRef<"agendamento_slots", 'DateTime'>;
    readonly horario_inicio: Prisma.FieldRef<"agendamento_slots", 'DateTime'>;
}
export type agendamento_slotsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
    where: Prisma.agendamento_slotsWhereUniqueInput;
};
export type agendamento_slotsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
    where: Prisma.agendamento_slotsWhereUniqueInput;
};
export type agendamento_slotsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type agendamento_slotsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type agendamento_slotsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type agendamento_slotsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.agendamento_slotsCreateInput, Prisma.agendamento_slotsUncheckedCreateInput>;
};
export type agendamento_slotsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.agendamento_slotsCreateManyInput | Prisma.agendamento_slotsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type agendamento_slotsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.agendamento_slotsUpdateInput, Prisma.agendamento_slotsUncheckedUpdateInput>;
    where: Prisma.agendamento_slotsWhereUniqueInput;
};
export type agendamento_slotsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.agendamento_slotsUpdateManyMutationInput, Prisma.agendamento_slotsUncheckedUpdateManyInput>;
    where?: Prisma.agendamento_slotsWhereInput;
    limit?: number;
};
export type agendamento_slotsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
    where: Prisma.agendamento_slotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.agendamento_slotsCreateInput, Prisma.agendamento_slotsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.agendamento_slotsUpdateInput, Prisma.agendamento_slotsUncheckedUpdateInput>;
};
export type agendamento_slotsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
    where: Prisma.agendamento_slotsWhereUniqueInput;
};
export type agendamento_slotsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamento_slotsWhereInput;
    limit?: number;
};
export type agendamento_slotsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.agendamento_slotsSelect<ExtArgs> | null;
    omit?: Prisma.agendamento_slotsOmit<ExtArgs> | null;
    include?: Prisma.agendamento_slotsInclude<ExtArgs> | null;
};
