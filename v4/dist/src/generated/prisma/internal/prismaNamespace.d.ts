import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly agendamento_participantes: "agendamento_participantes";
    readonly agendamento_slots: "agendamento_slots";
    readonly agendamentos: "agendamentos";
    readonly cidadaos: "cidadaos";
    readonly usuarios_admin: "usuarios_admin";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "agendamento_participantes" | "agendamento_slots" | "agendamentos" | "cidadaos" | "usuarios_admin";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        agendamento_participantes: {
            payload: Prisma.$agendamento_participantesPayload<ExtArgs>;
            fields: Prisma.agendamento_participantesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.agendamento_participantesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.agendamento_participantesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>;
                };
                findFirst: {
                    args: Prisma.agendamento_participantesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.agendamento_participantesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>;
                };
                findMany: {
                    args: Prisma.agendamento_participantesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>[];
                };
                create: {
                    args: Prisma.agendamento_participantesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>;
                };
                createMany: {
                    args: Prisma.agendamento_participantesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.agendamento_participantesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>;
                };
                update: {
                    args: Prisma.agendamento_participantesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>;
                };
                deleteMany: {
                    args: Prisma.agendamento_participantesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.agendamento_participantesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.agendamento_participantesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>;
                };
                aggregate: {
                    args: Prisma.Agendamento_participantesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAgendamento_participantes>;
                };
                groupBy: {
                    args: Prisma.agendamento_participantesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Agendamento_participantesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.agendamento_participantesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Agendamento_participantesCountAggregateOutputType> | number;
                };
            };
        };
        agendamento_slots: {
            payload: Prisma.$agendamento_slotsPayload<ExtArgs>;
            fields: Prisma.agendamento_slotsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.agendamento_slotsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.agendamento_slotsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>;
                };
                findFirst: {
                    args: Prisma.agendamento_slotsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.agendamento_slotsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>;
                };
                findMany: {
                    args: Prisma.agendamento_slotsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>[];
                };
                create: {
                    args: Prisma.agendamento_slotsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>;
                };
                createMany: {
                    args: Prisma.agendamento_slotsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.agendamento_slotsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>;
                };
                update: {
                    args: Prisma.agendamento_slotsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>;
                };
                deleteMany: {
                    args: Prisma.agendamento_slotsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.agendamento_slotsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.agendamento_slotsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>;
                };
                aggregate: {
                    args: Prisma.Agendamento_slotsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAgendamento_slots>;
                };
                groupBy: {
                    args: Prisma.agendamento_slotsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Agendamento_slotsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.agendamento_slotsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Agendamento_slotsCountAggregateOutputType> | number;
                };
            };
        };
        agendamentos: {
            payload: Prisma.$agendamentosPayload<ExtArgs>;
            fields: Prisma.agendamentosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.agendamentosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.agendamentosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload>;
                };
                findFirst: {
                    args: Prisma.agendamentosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.agendamentosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload>;
                };
                findMany: {
                    args: Prisma.agendamentosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload>[];
                };
                create: {
                    args: Prisma.agendamentosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload>;
                };
                createMany: {
                    args: Prisma.agendamentosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.agendamentosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload>;
                };
                update: {
                    args: Prisma.agendamentosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload>;
                };
                deleteMany: {
                    args: Prisma.agendamentosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.agendamentosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.agendamentosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agendamentosPayload>;
                };
                aggregate: {
                    args: Prisma.AgendamentosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAgendamentos>;
                };
                groupBy: {
                    args: Prisma.agendamentosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AgendamentosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.agendamentosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AgendamentosCountAggregateOutputType> | number;
                };
            };
        };
        cidadaos: {
            payload: Prisma.$cidadaosPayload<ExtArgs>;
            fields: Prisma.cidadaosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cidadaosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cidadaosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload>;
                };
                findFirst: {
                    args: Prisma.cidadaosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cidadaosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload>;
                };
                findMany: {
                    args: Prisma.cidadaosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload>[];
                };
                create: {
                    args: Prisma.cidadaosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload>;
                };
                createMany: {
                    args: Prisma.cidadaosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cidadaosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload>;
                };
                update: {
                    args: Prisma.cidadaosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload>;
                };
                deleteMany: {
                    args: Prisma.cidadaosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cidadaosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cidadaosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cidadaosPayload>;
                };
                aggregate: {
                    args: Prisma.CidadaosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCidadaos>;
                };
                groupBy: {
                    args: Prisma.cidadaosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CidadaosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cidadaosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CidadaosCountAggregateOutputType> | number;
                };
            };
        };
        usuarios_admin: {
            payload: Prisma.$usuarios_adminPayload<ExtArgs>;
            fields: Prisma.usuarios_adminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usuarios_adminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usuarios_adminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload>;
                };
                findFirst: {
                    args: Prisma.usuarios_adminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usuarios_adminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload>;
                };
                findMany: {
                    args: Prisma.usuarios_adminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload>[];
                };
                create: {
                    args: Prisma.usuarios_adminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload>;
                };
                createMany: {
                    args: Prisma.usuarios_adminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.usuarios_adminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload>;
                };
                update: {
                    args: Prisma.usuarios_adminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload>;
                };
                deleteMany: {
                    args: Prisma.usuarios_adminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usuarios_adminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.usuarios_adminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarios_adminPayload>;
                };
                aggregate: {
                    args: Prisma.Usuarios_adminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuarios_admin>;
                };
                groupBy: {
                    args: Prisma.usuarios_adminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Usuarios_adminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usuarios_adminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Usuarios_adminCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
    readonly data: DataISO;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type Enumagendamentos_atendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'agendamentos_atendimento'>;
export type Enumagendamentos_tipo_atendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'agendamentos_tipo_atendimento'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type Enumagendamentos_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'agendamentos_status'>;
export type Enumusuarios_admin_papelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuarios_admin_papel'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    agendamento_participantes?: Prisma.agendamento_participantesOmit;
    agendamento_slots?: Prisma.agendamento_slotsOmit;
    agendamentos?: Prisma.agendamentosOmit;
    cidadaos?: Prisma.cidadaosOmit;
    usuarios_admin?: Prisma.usuarios_adminOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
