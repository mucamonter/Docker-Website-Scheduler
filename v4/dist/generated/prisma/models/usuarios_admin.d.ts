import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type usuarios_adminModel = runtime.Types.Result.DefaultSelection<Prisma.$usuarios_adminPayload>;
export type AggregateUsuarios_admin = {
    _count: Usuarios_adminCountAggregateOutputType | null;
    _avg: Usuarios_adminAvgAggregateOutputType | null;
    _sum: Usuarios_adminSumAggregateOutputType | null;
    _min: Usuarios_adminMinAggregateOutputType | null;
    _max: Usuarios_adminMaxAggregateOutputType | null;
};
export type Usuarios_adminAvgAggregateOutputType = {
    id: number | null;
};
export type Usuarios_adminSumAggregateOutputType = {
    id: number | null;
};
export type Usuarios_adminMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    email: string | null;
    senha_hash: string | null;
    papel: $Enums.usuarios_admin_papel | null;
    criado_em: Date | null;
};
export type Usuarios_adminMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    email: string | null;
    senha_hash: string | null;
    papel: $Enums.usuarios_admin_papel | null;
    criado_em: Date | null;
};
export type Usuarios_adminCountAggregateOutputType = {
    id: number;
    nome: number;
    email: number;
    senha_hash: number;
    papel: number;
    criado_em: number;
    _all: number;
};
export type Usuarios_adminAvgAggregateInputType = {
    id?: true;
};
export type Usuarios_adminSumAggregateInputType = {
    id?: true;
};
export type Usuarios_adminMinAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senha_hash?: true;
    papel?: true;
    criado_em?: true;
};
export type Usuarios_adminMaxAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senha_hash?: true;
    papel?: true;
    criado_em?: true;
};
export type Usuarios_adminCountAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senha_hash?: true;
    papel?: true;
    criado_em?: true;
    _all?: true;
};
export type Usuarios_adminAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuarios_adminWhereInput;
    orderBy?: Prisma.usuarios_adminOrderByWithRelationInput | Prisma.usuarios_adminOrderByWithRelationInput[];
    cursor?: Prisma.usuarios_adminWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Usuarios_adminCountAggregateInputType;
    _avg?: Usuarios_adminAvgAggregateInputType;
    _sum?: Usuarios_adminSumAggregateInputType;
    _min?: Usuarios_adminMinAggregateInputType;
    _max?: Usuarios_adminMaxAggregateInputType;
};
export type GetUsuarios_adminAggregateType<T extends Usuarios_adminAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuarios_admin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuarios_admin[P]> : Prisma.GetScalarType<T[P], AggregateUsuarios_admin[P]>;
};
export type usuarios_adminGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuarios_adminWhereInput;
    orderBy?: Prisma.usuarios_adminOrderByWithAggregationInput | Prisma.usuarios_adminOrderByWithAggregationInput[];
    by: Prisma.Usuarios_adminScalarFieldEnum[] | Prisma.Usuarios_adminScalarFieldEnum;
    having?: Prisma.usuarios_adminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Usuarios_adminCountAggregateInputType | true;
    _avg?: Usuarios_adminAvgAggregateInputType;
    _sum?: Usuarios_adminSumAggregateInputType;
    _min?: Usuarios_adminMinAggregateInputType;
    _max?: Usuarios_adminMaxAggregateInputType;
};
export type Usuarios_adminGroupByOutputType = {
    id: number;
    nome: string;
    email: string;
    senha_hash: string;
    papel: $Enums.usuarios_admin_papel;
    criado_em: Date;
    _count: Usuarios_adminCountAggregateOutputType | null;
    _avg: Usuarios_adminAvgAggregateOutputType | null;
    _sum: Usuarios_adminSumAggregateOutputType | null;
    _min: Usuarios_adminMinAggregateOutputType | null;
    _max: Usuarios_adminMaxAggregateOutputType | null;
};
export type GetUsuarios_adminGroupByPayload<T extends usuarios_adminGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Usuarios_adminGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Usuarios_adminGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Usuarios_adminGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Usuarios_adminGroupByOutputType[P]>;
}>>;
export type usuarios_adminWhereInput = {
    AND?: Prisma.usuarios_adminWhereInput | Prisma.usuarios_adminWhereInput[];
    OR?: Prisma.usuarios_adminWhereInput[];
    NOT?: Prisma.usuarios_adminWhereInput | Prisma.usuarios_adminWhereInput[];
    id?: Prisma.IntFilter<"usuarios_admin"> | number;
    nome?: Prisma.StringFilter<"usuarios_admin"> | string;
    email?: Prisma.StringFilter<"usuarios_admin"> | string;
    senha_hash?: Prisma.StringFilter<"usuarios_admin"> | string;
    papel?: Prisma.Enumusuarios_admin_papelFilter<"usuarios_admin"> | $Enums.usuarios_admin_papel;
    criado_em?: Prisma.DateTimeFilter<"usuarios_admin"> | Date | string;
};
export type usuarios_adminOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    _relevance?: Prisma.usuarios_adminOrderByRelevanceInput;
};
export type usuarios_adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.usuarios_adminWhereInput | Prisma.usuarios_adminWhereInput[];
    OR?: Prisma.usuarios_adminWhereInput[];
    NOT?: Prisma.usuarios_adminWhereInput | Prisma.usuarios_adminWhereInput[];
    nome?: Prisma.StringFilter<"usuarios_admin"> | string;
    senha_hash?: Prisma.StringFilter<"usuarios_admin"> | string;
    papel?: Prisma.Enumusuarios_admin_papelFilter<"usuarios_admin"> | $Enums.usuarios_admin_papel;
    criado_em?: Prisma.DateTimeFilter<"usuarios_admin"> | Date | string;
}, "id" | "email">;
export type usuarios_adminOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    _count?: Prisma.usuarios_adminCountOrderByAggregateInput;
    _avg?: Prisma.usuarios_adminAvgOrderByAggregateInput;
    _max?: Prisma.usuarios_adminMaxOrderByAggregateInput;
    _min?: Prisma.usuarios_adminMinOrderByAggregateInput;
    _sum?: Prisma.usuarios_adminSumOrderByAggregateInput;
};
export type usuarios_adminScalarWhereWithAggregatesInput = {
    AND?: Prisma.usuarios_adminScalarWhereWithAggregatesInput | Prisma.usuarios_adminScalarWhereWithAggregatesInput[];
    OR?: Prisma.usuarios_adminScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usuarios_adminScalarWhereWithAggregatesInput | Prisma.usuarios_adminScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"usuarios_admin"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"usuarios_admin"> | string;
    email?: Prisma.StringWithAggregatesFilter<"usuarios_admin"> | string;
    senha_hash?: Prisma.StringWithAggregatesFilter<"usuarios_admin"> | string;
    papel?: Prisma.Enumusuarios_admin_papelWithAggregatesFilter<"usuarios_admin"> | $Enums.usuarios_admin_papel;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"usuarios_admin"> | Date | string;
};
export type usuarios_adminCreateInput = {
    nome: string;
    email: string;
    senha_hash: string;
    papel?: $Enums.usuarios_admin_papel;
    criado_em?: Date | string;
};
export type usuarios_adminUncheckedCreateInput = {
    id?: number;
    nome: string;
    email: string;
    senha_hash: string;
    papel?: $Enums.usuarios_admin_papel;
    criado_em?: Date | string;
};
export type usuarios_adminUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuarios_adminUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuarios_adminCreateManyInput = {
    id?: number;
    nome: string;
    email: string;
    senha_hash: string;
    papel?: $Enums.usuarios_admin_papel;
    criado_em?: Date | string;
};
export type usuarios_adminUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuarios_adminUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    papel?: Prisma.Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuarios_adminOrderByRelevanceInput = {
    fields: Prisma.usuarios_adminOrderByRelevanceFieldEnum | Prisma.usuarios_adminOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type usuarios_adminCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type usuarios_adminAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type usuarios_adminMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type usuarios_adminMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    papel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type usuarios_adminSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Enumusuarios_admin_papelFieldUpdateOperationsInput = {
    set?: $Enums.usuarios_admin_papel;
};
export type usuarios_adminSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senha_hash?: boolean;
    papel?: boolean;
    criado_em?: boolean;
}, ExtArgs["result"]["usuarios_admin"]>;
export type usuarios_adminSelectScalar = {
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senha_hash?: boolean;
    papel?: boolean;
    criado_em?: boolean;
};
export type usuarios_adminOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "papel" | "criado_em", ExtArgs["result"]["usuarios_admin"]>;
export type $usuarios_adminPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "usuarios_admin";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        email: string;
        senha_hash: string;
        papel: $Enums.usuarios_admin_papel;
        criado_em: Date;
    }, ExtArgs["result"]["usuarios_admin"]>;
    composites: {};
};
export type usuarios_adminGetPayload<S extends boolean | null | undefined | usuarios_adminDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload, S>;
export type usuarios_adminCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usuarios_adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Usuarios_adminCountAggregateInputType | true;
};
export interface usuarios_adminDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['usuarios_admin'];
        meta: {
            name: 'usuarios_admin';
        };
    };
    findUnique<T extends usuarios_adminFindUniqueArgs>(args: Prisma.SelectSubset<T, usuarios_adminFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usuarios_adminFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usuarios_adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usuarios_adminFindFirstArgs>(args?: Prisma.SelectSubset<T, usuarios_adminFindFirstArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usuarios_adminFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usuarios_adminFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usuarios_adminFindManyArgs>(args?: Prisma.SelectSubset<T, usuarios_adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usuarios_adminCreateArgs>(args: Prisma.SelectSubset<T, usuarios_adminCreateArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usuarios_adminCreateManyArgs>(args?: Prisma.SelectSubset<T, usuarios_adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends usuarios_adminDeleteArgs>(args: Prisma.SelectSubset<T, usuarios_adminDeleteArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usuarios_adminUpdateArgs>(args: Prisma.SelectSubset<T, usuarios_adminUpdateArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usuarios_adminDeleteManyArgs>(args?: Prisma.SelectSubset<T, usuarios_adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usuarios_adminUpdateManyArgs>(args: Prisma.SelectSubset<T, usuarios_adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends usuarios_adminUpsertArgs>(args: Prisma.SelectSubset<T, usuarios_adminUpsertArgs<ExtArgs>>): Prisma.Prisma__usuarios_adminClient<runtime.Types.Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usuarios_adminCountArgs>(args?: Prisma.Subset<T, usuarios_adminCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Usuarios_adminCountAggregateOutputType> : number>;
    aggregate<T extends Usuarios_adminAggregateArgs>(args: Prisma.Subset<T, Usuarios_adminAggregateArgs>): Prisma.PrismaPromise<GetUsuarios_adminAggregateType<T>>;
    groupBy<T extends usuarios_adminGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usuarios_adminGroupByArgs['orderBy'];
    } : {
        orderBy?: usuarios_adminGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usuarios_adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarios_adminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usuarios_adminFieldRefs;
}
export interface Prisma__usuarios_adminClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usuarios_adminFieldRefs {
    readonly id: Prisma.FieldRef<"usuarios_admin", 'Int'>;
    readonly nome: Prisma.FieldRef<"usuarios_admin", 'String'>;
    readonly email: Prisma.FieldRef<"usuarios_admin", 'String'>;
    readonly senha_hash: Prisma.FieldRef<"usuarios_admin", 'String'>;
    readonly papel: Prisma.FieldRef<"usuarios_admin", 'usuarios_admin_papel'>;
    readonly criado_em: Prisma.FieldRef<"usuarios_admin", 'DateTime'>;
}
export type usuarios_adminFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    where: Prisma.usuarios_adminWhereUniqueInput;
};
export type usuarios_adminFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    where: Prisma.usuarios_adminWhereUniqueInput;
};
export type usuarios_adminFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    where?: Prisma.usuarios_adminWhereInput;
    orderBy?: Prisma.usuarios_adminOrderByWithRelationInput | Prisma.usuarios_adminOrderByWithRelationInput[];
    cursor?: Prisma.usuarios_adminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuarios_adminScalarFieldEnum | Prisma.Usuarios_adminScalarFieldEnum[];
};
export type usuarios_adminFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    where?: Prisma.usuarios_adminWhereInput;
    orderBy?: Prisma.usuarios_adminOrderByWithRelationInput | Prisma.usuarios_adminOrderByWithRelationInput[];
    cursor?: Prisma.usuarios_adminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuarios_adminScalarFieldEnum | Prisma.Usuarios_adminScalarFieldEnum[];
};
export type usuarios_adminFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    where?: Prisma.usuarios_adminWhereInput;
    orderBy?: Prisma.usuarios_adminOrderByWithRelationInput | Prisma.usuarios_adminOrderByWithRelationInput[];
    cursor?: Prisma.usuarios_adminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuarios_adminScalarFieldEnum | Prisma.Usuarios_adminScalarFieldEnum[];
};
export type usuarios_adminCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuarios_adminCreateInput, Prisma.usuarios_adminUncheckedCreateInput>;
};
export type usuarios_adminCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usuarios_adminCreateManyInput | Prisma.usuarios_adminCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usuarios_adminUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuarios_adminUpdateInput, Prisma.usuarios_adminUncheckedUpdateInput>;
    where: Prisma.usuarios_adminWhereUniqueInput;
};
export type usuarios_adminUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usuarios_adminUpdateManyMutationInput, Prisma.usuarios_adminUncheckedUpdateManyInput>;
    where?: Prisma.usuarios_adminWhereInput;
    limit?: number;
};
export type usuarios_adminUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    where: Prisma.usuarios_adminWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarios_adminCreateInput, Prisma.usuarios_adminUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usuarios_adminUpdateInput, Prisma.usuarios_adminUncheckedUpdateInput>;
};
export type usuarios_adminDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
    where: Prisma.usuarios_adminWhereUniqueInput;
};
export type usuarios_adminDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuarios_adminWhereInput;
    limit?: number;
};
export type usuarios_adminDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarios_adminSelect<ExtArgs> | null;
    omit?: Prisma.usuarios_adminOmit<ExtArgs> | null;
};
