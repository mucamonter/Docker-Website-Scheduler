import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type cidadaosModel = runtime.Types.Result.DefaultSelection<Prisma.$cidadaosPayload>;
export type AggregateCidadaos = {
    _count: CidadaosCountAggregateOutputType | null;
    _avg: CidadaosAvgAggregateOutputType | null;
    _sum: CidadaosSumAggregateOutputType | null;
    _min: CidadaosMinAggregateOutputType | null;
    _max: CidadaosMaxAggregateOutputType | null;
};
export type CidadaosAvgAggregateOutputType = {
    id: number | null;
};
export type CidadaosSumAggregateOutputType = {
    id: number | null;
};
export type CidadaosMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    senha_hash: string | null;
    cep: string | null;
    endereco: string | null;
    criado_em: Date | null;
};
export type CidadaosMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    senha_hash: string | null;
    cep: string | null;
    endereco: string | null;
    criado_em: Date | null;
};
export type CidadaosCountAggregateOutputType = {
    id: number;
    nome: number;
    email: number;
    telefone: number;
    senha_hash: number;
    cep: number;
    endereco: number;
    criado_em: number;
    _all: number;
};
export type CidadaosAvgAggregateInputType = {
    id?: true;
};
export type CidadaosSumAggregateInputType = {
    id?: true;
};
export type CidadaosMinAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    senha_hash?: true;
    cep?: true;
    endereco?: true;
    criado_em?: true;
};
export type CidadaosMaxAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    senha_hash?: true;
    cep?: true;
    endereco?: true;
    criado_em?: true;
};
export type CidadaosCountAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    senha_hash?: true;
    cep?: true;
    endereco?: true;
    criado_em?: true;
    _all?: true;
};
export type CidadaosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cidadaosWhereInput;
    orderBy?: Prisma.cidadaosOrderByWithRelationInput | Prisma.cidadaosOrderByWithRelationInput[];
    cursor?: Prisma.cidadaosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CidadaosCountAggregateInputType;
    _avg?: CidadaosAvgAggregateInputType;
    _sum?: CidadaosSumAggregateInputType;
    _min?: CidadaosMinAggregateInputType;
    _max?: CidadaosMaxAggregateInputType;
};
export type GetCidadaosAggregateType<T extends CidadaosAggregateArgs> = {
    [P in keyof T & keyof AggregateCidadaos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCidadaos[P]> : Prisma.GetScalarType<T[P], AggregateCidadaos[P]>;
};
export type cidadaosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cidadaosWhereInput;
    orderBy?: Prisma.cidadaosOrderByWithAggregationInput | Prisma.cidadaosOrderByWithAggregationInput[];
    by: Prisma.CidadaosScalarFieldEnum[] | Prisma.CidadaosScalarFieldEnum;
    having?: Prisma.cidadaosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CidadaosCountAggregateInputType | true;
    _avg?: CidadaosAvgAggregateInputType;
    _sum?: CidadaosSumAggregateInputType;
    _min?: CidadaosMinAggregateInputType;
    _max?: CidadaosMaxAggregateInputType;
};
export type CidadaosGroupByOutputType = {
    id: number;
    nome: string;
    email: string;
    telefone: string | null;
    senha_hash: string;
    cep: string | null;
    endereco: string | null;
    criado_em: Date;
    _count: CidadaosCountAggregateOutputType | null;
    _avg: CidadaosAvgAggregateOutputType | null;
    _sum: CidadaosSumAggregateOutputType | null;
    _min: CidadaosMinAggregateOutputType | null;
    _max: CidadaosMaxAggregateOutputType | null;
};
export type GetCidadaosGroupByPayload<T extends cidadaosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CidadaosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CidadaosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CidadaosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CidadaosGroupByOutputType[P]>;
}>>;
export type cidadaosWhereInput = {
    AND?: Prisma.cidadaosWhereInput | Prisma.cidadaosWhereInput[];
    OR?: Prisma.cidadaosWhereInput[];
    NOT?: Prisma.cidadaosWhereInput | Prisma.cidadaosWhereInput[];
    id?: Prisma.IntFilter<"cidadaos"> | number;
    nome?: Prisma.StringFilter<"cidadaos"> | string;
    email?: Prisma.StringFilter<"cidadaos"> | string;
    telefone?: Prisma.StringNullableFilter<"cidadaos"> | string | null;
    senha_hash?: Prisma.StringFilter<"cidadaos"> | string;
    cep?: Prisma.StringNullableFilter<"cidadaos"> | string | null;
    endereco?: Prisma.StringNullableFilter<"cidadaos"> | string | null;
    criado_em?: Prisma.DateTimeFilter<"cidadaos"> | Date | string;
    agendamentos?: Prisma.AgendamentosListRelationFilter;
};
export type cidadaosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    cep?: Prisma.SortOrderInput | Prisma.SortOrder;
    endereco?: Prisma.SortOrderInput | Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    agendamentos?: Prisma.agendamentosOrderByRelationAggregateInput;
    _relevance?: Prisma.cidadaosOrderByRelevanceInput;
};
export type cidadaosWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.cidadaosWhereInput | Prisma.cidadaosWhereInput[];
    OR?: Prisma.cidadaosWhereInput[];
    NOT?: Prisma.cidadaosWhereInput | Prisma.cidadaosWhereInput[];
    nome?: Prisma.StringFilter<"cidadaos"> | string;
    telefone?: Prisma.StringNullableFilter<"cidadaos"> | string | null;
    senha_hash?: Prisma.StringFilter<"cidadaos"> | string;
    cep?: Prisma.StringNullableFilter<"cidadaos"> | string | null;
    endereco?: Prisma.StringNullableFilter<"cidadaos"> | string | null;
    criado_em?: Prisma.DateTimeFilter<"cidadaos"> | Date | string;
    agendamentos?: Prisma.AgendamentosListRelationFilter;
}, "id" | "email">;
export type cidadaosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    cep?: Prisma.SortOrderInput | Prisma.SortOrder;
    endereco?: Prisma.SortOrderInput | Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    _count?: Prisma.cidadaosCountOrderByAggregateInput;
    _avg?: Prisma.cidadaosAvgOrderByAggregateInput;
    _max?: Prisma.cidadaosMaxOrderByAggregateInput;
    _min?: Prisma.cidadaosMinOrderByAggregateInput;
    _sum?: Prisma.cidadaosSumOrderByAggregateInput;
};
export type cidadaosScalarWhereWithAggregatesInput = {
    AND?: Prisma.cidadaosScalarWhereWithAggregatesInput | Prisma.cidadaosScalarWhereWithAggregatesInput[];
    OR?: Prisma.cidadaosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cidadaosScalarWhereWithAggregatesInput | Prisma.cidadaosScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"cidadaos"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"cidadaos"> | string;
    email?: Prisma.StringWithAggregatesFilter<"cidadaos"> | string;
    telefone?: Prisma.StringNullableWithAggregatesFilter<"cidadaos"> | string | null;
    senha_hash?: Prisma.StringWithAggregatesFilter<"cidadaos"> | string;
    cep?: Prisma.StringNullableWithAggregatesFilter<"cidadaos"> | string | null;
    endereco?: Prisma.StringNullableWithAggregatesFilter<"cidadaos"> | string | null;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"cidadaos"> | Date | string;
};
export type cidadaosCreateInput = {
    nome: string;
    email: string;
    telefone?: string | null;
    senha_hash: string;
    cep?: string | null;
    endereco?: string | null;
    criado_em?: Date | string;
    agendamentos?: Prisma.agendamentosCreateNestedManyWithoutCidadaosInput;
};
export type cidadaosUncheckedCreateInput = {
    id?: number;
    nome: string;
    email: string;
    telefone?: string | null;
    senha_hash: string;
    cep?: string | null;
    endereco?: string | null;
    criado_em?: Date | string;
    agendamentos?: Prisma.agendamentosUncheckedCreateNestedManyWithoutCidadaosInput;
};
export type cidadaosUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    agendamentos?: Prisma.agendamentosUpdateManyWithoutCidadaosNestedInput;
};
export type cidadaosUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    agendamentos?: Prisma.agendamentosUncheckedUpdateManyWithoutCidadaosNestedInput;
};
export type cidadaosCreateManyInput = {
    id?: number;
    nome: string;
    email: string;
    telefone?: string | null;
    senha_hash: string;
    cep?: string | null;
    endereco?: string | null;
    criado_em?: Date | string;
};
export type cidadaosUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cidadaosUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CidadaosNullableScalarRelationFilter = {
    is?: Prisma.cidadaosWhereInput | null;
    isNot?: Prisma.cidadaosWhereInput | null;
};
export type cidadaosOrderByRelevanceInput = {
    fields: Prisma.cidadaosOrderByRelevanceFieldEnum | Prisma.cidadaosOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type cidadaosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type cidadaosAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type cidadaosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type cidadaosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    cep?: Prisma.SortOrder;
    endereco?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type cidadaosSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type cidadaosCreateNestedOneWithoutAgendamentosInput = {
    create?: Prisma.XOR<Prisma.cidadaosCreateWithoutAgendamentosInput, Prisma.cidadaosUncheckedCreateWithoutAgendamentosInput>;
    connectOrCreate?: Prisma.cidadaosCreateOrConnectWithoutAgendamentosInput;
    connect?: Prisma.cidadaosWhereUniqueInput;
};
export type cidadaosUpdateOneWithoutAgendamentosNestedInput = {
    create?: Prisma.XOR<Prisma.cidadaosCreateWithoutAgendamentosInput, Prisma.cidadaosUncheckedCreateWithoutAgendamentosInput>;
    connectOrCreate?: Prisma.cidadaosCreateOrConnectWithoutAgendamentosInput;
    upsert?: Prisma.cidadaosUpsertWithoutAgendamentosInput;
    disconnect?: Prisma.cidadaosWhereInput | boolean;
    delete?: Prisma.cidadaosWhereInput | boolean;
    connect?: Prisma.cidadaosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cidadaosUpdateToOneWithWhereWithoutAgendamentosInput, Prisma.cidadaosUpdateWithoutAgendamentosInput>, Prisma.cidadaosUncheckedUpdateWithoutAgendamentosInput>;
};
export type cidadaosCreateWithoutAgendamentosInput = {
    nome: string;
    email: string;
    telefone?: string | null;
    senha_hash: string;
    cep?: string | null;
    endereco?: string | null;
    criado_em?: Date | string;
};
export type cidadaosUncheckedCreateWithoutAgendamentosInput = {
    id?: number;
    nome: string;
    email: string;
    telefone?: string | null;
    senha_hash: string;
    cep?: string | null;
    endereco?: string | null;
    criado_em?: Date | string;
};
export type cidadaosCreateOrConnectWithoutAgendamentosInput = {
    where: Prisma.cidadaosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cidadaosCreateWithoutAgendamentosInput, Prisma.cidadaosUncheckedCreateWithoutAgendamentosInput>;
};
export type cidadaosUpsertWithoutAgendamentosInput = {
    update: Prisma.XOR<Prisma.cidadaosUpdateWithoutAgendamentosInput, Prisma.cidadaosUncheckedUpdateWithoutAgendamentosInput>;
    create: Prisma.XOR<Prisma.cidadaosCreateWithoutAgendamentosInput, Prisma.cidadaosUncheckedCreateWithoutAgendamentosInput>;
    where?: Prisma.cidadaosWhereInput;
};
export type cidadaosUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: Prisma.cidadaosWhereInput;
    data: Prisma.XOR<Prisma.cidadaosUpdateWithoutAgendamentosInput, Prisma.cidadaosUncheckedUpdateWithoutAgendamentosInput>;
};
export type cidadaosUpdateWithoutAgendamentosInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cidadaosUncheckedUpdateWithoutAgendamentosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    cep?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    endereco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CidadaosCountOutputType = {
    agendamentos: number;
};
export type CidadaosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    agendamentos?: boolean | CidadaosCountOutputTypeCountAgendamentosArgs;
};
export type CidadaosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CidadaosCountOutputTypeSelect<ExtArgs> | null;
};
export type CidadaosCountOutputTypeCountAgendamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agendamentosWhereInput;
};
export type cidadaosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    senha_hash?: boolean;
    cep?: boolean;
    endereco?: boolean;
    criado_em?: boolean;
    agendamentos?: boolean | Prisma.cidadaos$agendamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.CidadaosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cidadaos"]>;
export type cidadaosSelectScalar = {
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    senha_hash?: boolean;
    cep?: boolean;
    endereco?: boolean;
    criado_em?: boolean;
};
export type cidadaosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "senha_hash" | "cep" | "endereco" | "criado_em", ExtArgs["result"]["cidadaos"]>;
export type cidadaosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    agendamentos?: boolean | Prisma.cidadaos$agendamentosArgs<ExtArgs>;
    _count?: boolean | Prisma.CidadaosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $cidadaosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cidadaos";
    objects: {
        agendamentos: Prisma.$agendamentosPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        email: string;
        telefone: string | null;
        senha_hash: string;
        cep: string | null;
        endereco: string | null;
        criado_em: Date;
    }, ExtArgs["result"]["cidadaos"]>;
    composites: {};
};
export type cidadaosGetPayload<S extends boolean | null | undefined | cidadaosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cidadaosPayload, S>;
export type cidadaosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cidadaosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CidadaosCountAggregateInputType | true;
};
export interface cidadaosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cidadaos'];
        meta: {
            name: 'cidadaos';
        };
    };
    findUnique<T extends cidadaosFindUniqueArgs>(args: Prisma.SelectSubset<T, cidadaosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cidadaosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cidadaosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cidadaosFindFirstArgs>(args?: Prisma.SelectSubset<T, cidadaosFindFirstArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cidadaosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cidadaosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cidadaosFindManyArgs>(args?: Prisma.SelectSubset<T, cidadaosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cidadaosCreateArgs>(args: Prisma.SelectSubset<T, cidadaosCreateArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cidadaosCreateManyArgs>(args?: Prisma.SelectSubset<T, cidadaosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends cidadaosDeleteArgs>(args: Prisma.SelectSubset<T, cidadaosDeleteArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cidadaosUpdateArgs>(args: Prisma.SelectSubset<T, cidadaosUpdateArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cidadaosDeleteManyArgs>(args?: Prisma.SelectSubset<T, cidadaosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cidadaosUpdateManyArgs>(args: Prisma.SelectSubset<T, cidadaosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends cidadaosUpsertArgs>(args: Prisma.SelectSubset<T, cidadaosUpsertArgs<ExtArgs>>): Prisma.Prisma__cidadaosClient<runtime.Types.Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cidadaosCountArgs>(args?: Prisma.Subset<T, cidadaosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CidadaosCountAggregateOutputType> : number>;
    aggregate<T extends CidadaosAggregateArgs>(args: Prisma.Subset<T, CidadaosAggregateArgs>): Prisma.PrismaPromise<GetCidadaosAggregateType<T>>;
    groupBy<T extends cidadaosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cidadaosGroupByArgs['orderBy'];
    } : {
        orderBy?: cidadaosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cidadaosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCidadaosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cidadaosFieldRefs;
}
export interface Prisma__cidadaosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    agendamentos<T extends Prisma.cidadaos$agendamentosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cidadaos$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cidadaosFieldRefs {
    readonly id: Prisma.FieldRef<"cidadaos", 'Int'>;
    readonly nome: Prisma.FieldRef<"cidadaos", 'String'>;
    readonly email: Prisma.FieldRef<"cidadaos", 'String'>;
    readonly telefone: Prisma.FieldRef<"cidadaos", 'String'>;
    readonly senha_hash: Prisma.FieldRef<"cidadaos", 'String'>;
    readonly cep: Prisma.FieldRef<"cidadaos", 'String'>;
    readonly endereco: Prisma.FieldRef<"cidadaos", 'String'>;
    readonly criado_em: Prisma.FieldRef<"cidadaos", 'DateTime'>;
}
export type cidadaosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where: Prisma.cidadaosWhereUniqueInput;
};
export type cidadaosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where: Prisma.cidadaosWhereUniqueInput;
};
export type cidadaosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where?: Prisma.cidadaosWhereInput;
    orderBy?: Prisma.cidadaosOrderByWithRelationInput | Prisma.cidadaosOrderByWithRelationInput[];
    cursor?: Prisma.cidadaosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CidadaosScalarFieldEnum | Prisma.CidadaosScalarFieldEnum[];
};
export type cidadaosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where?: Prisma.cidadaosWhereInput;
    orderBy?: Prisma.cidadaosOrderByWithRelationInput | Prisma.cidadaosOrderByWithRelationInput[];
    cursor?: Prisma.cidadaosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CidadaosScalarFieldEnum | Prisma.CidadaosScalarFieldEnum[];
};
export type cidadaosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where?: Prisma.cidadaosWhereInput;
    orderBy?: Prisma.cidadaosOrderByWithRelationInput | Prisma.cidadaosOrderByWithRelationInput[];
    cursor?: Prisma.cidadaosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CidadaosScalarFieldEnum | Prisma.CidadaosScalarFieldEnum[];
};
export type cidadaosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cidadaosCreateInput, Prisma.cidadaosUncheckedCreateInput>;
};
export type cidadaosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cidadaosCreateManyInput | Prisma.cidadaosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cidadaosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cidadaosUpdateInput, Prisma.cidadaosUncheckedUpdateInput>;
    where: Prisma.cidadaosWhereUniqueInput;
};
export type cidadaosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cidadaosUpdateManyMutationInput, Prisma.cidadaosUncheckedUpdateManyInput>;
    where?: Prisma.cidadaosWhereInput;
    limit?: number;
};
export type cidadaosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where: Prisma.cidadaosWhereUniqueInput;
    create: Prisma.XOR<Prisma.cidadaosCreateInput, Prisma.cidadaosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cidadaosUpdateInput, Prisma.cidadaosUncheckedUpdateInput>;
};
export type cidadaosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
    where: Prisma.cidadaosWhereUniqueInput;
};
export type cidadaosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cidadaosWhereInput;
    limit?: number;
};
export type cidadaos$agendamentosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cidadaosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cidadaosSelect<ExtArgs> | null;
    omit?: Prisma.cidadaosOmit<ExtArgs> | null;
    include?: Prisma.cidadaosInclude<ExtArgs> | null;
};
