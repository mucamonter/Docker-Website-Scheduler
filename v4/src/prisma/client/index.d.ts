
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model agendamento_participantes
 * 
 */
export type agendamento_participantes = $Result.DefaultSelection<Prisma.$agendamento_participantesPayload>
/**
 * Model agendamento_slots
 * 
 */
export type agendamento_slots = $Result.DefaultSelection<Prisma.$agendamento_slotsPayload>
/**
 * Model agendamentos
 * 
 */
export type agendamentos = $Result.DefaultSelection<Prisma.$agendamentosPayload>
/**
 * Model cidadaos
 * 
 */
export type cidadaos = $Result.DefaultSelection<Prisma.$cidadaosPayload>
/**
 * Model usuarios_admin
 * 
 */
export type usuarios_admin = $Result.DefaultSelection<Prisma.$usuarios_adminPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const usuarios_admin_papel: {
  admin: 'admin',
  visualizador: 'visualizador'
};

export type usuarios_admin_papel = (typeof usuarios_admin_papel)[keyof typeof usuarios_admin_papel]


export const agendamentos_atendimento: {
  no_paco: 'no_paco',
  marcado: 'marcado'
};

export type agendamentos_atendimento = (typeof agendamentos_atendimento)[keyof typeof agendamentos_atendimento]


export const agendamentos_tipo_atendimento: {
  unico: 'unico',
  grupo: 'grupo'
};

export type agendamentos_tipo_atendimento = (typeof agendamentos_tipo_atendimento)[keyof typeof agendamentos_tipo_atendimento]


export const agendamentos_status: {
  cancelado: 'cancelado',
  pedido_nao_atendido: 'pedido_nao_atendido',
  pedido_atendido: 'pedido_atendido',
  pedido_pendente: 'pedido_pendente'
};

export type agendamentos_status = (typeof agendamentos_status)[keyof typeof agendamentos_status]

}

export type usuarios_admin_papel = $Enums.usuarios_admin_papel

export const usuarios_admin_papel: typeof $Enums.usuarios_admin_papel

export type agendamentos_atendimento = $Enums.agendamentos_atendimento

export const agendamentos_atendimento: typeof $Enums.agendamentos_atendimento

export type agendamentos_tipo_atendimento = $Enums.agendamentos_tipo_atendimento

export const agendamentos_tipo_atendimento: typeof $Enums.agendamentos_tipo_atendimento

export type agendamentos_status = $Enums.agendamentos_status

export const agendamentos_status: typeof $Enums.agendamentos_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Agendamento_participantes
 * const agendamento_participantes = await prisma.agendamento_participantes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Agendamento_participantes
   * const agendamento_participantes = await prisma.agendamento_participantes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.agendamento_participantes`: Exposes CRUD operations for the **agendamento_participantes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamento_participantes
    * const agendamento_participantes = await prisma.agendamento_participantes.findMany()
    * ```
    */
  get agendamento_participantes(): Prisma.agendamento_participantesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamento_slots`: Exposes CRUD operations for the **agendamento_slots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamento_slots
    * const agendamento_slots = await prisma.agendamento_slots.findMany()
    * ```
    */
  get agendamento_slots(): Prisma.agendamento_slotsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamentos`: Exposes CRUD operations for the **agendamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamentos.findMany()
    * ```
    */
  get agendamentos(): Prisma.agendamentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cidadaos`: Exposes CRUD operations for the **cidadaos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cidadaos
    * const cidadaos = await prisma.cidadaos.findMany()
    * ```
    */
  get cidadaos(): Prisma.cidadaosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios_admin`: Exposes CRUD operations for the **usuarios_admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios_admins
    * const usuarios_admins = await prisma.usuarios_admin.findMany()
    * ```
    */
  get usuarios_admin(): Prisma.usuarios_adminDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    agendamento_participantes: 'agendamento_participantes',
    agendamento_slots: 'agendamento_slots',
    agendamentos: 'agendamentos',
    cidadaos: 'cidadaos',
    usuarios_admin: 'usuarios_admin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agendamento_participantes" | "agendamento_slots" | "agendamentos" | "cidadaos" | "usuarios_admin"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      agendamento_participantes: {
        payload: Prisma.$agendamento_participantesPayload<ExtArgs>
        fields: Prisma.agendamento_participantesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendamento_participantesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendamento_participantesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>
          }
          findFirst: {
            args: Prisma.agendamento_participantesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendamento_participantesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>
          }
          findMany: {
            args: Prisma.agendamento_participantesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>[]
          }
          create: {
            args: Prisma.agendamento_participantesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>
          }
          createMany: {
            args: Prisma.agendamento_participantesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.agendamento_participantesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>
          }
          update: {
            args: Prisma.agendamento_participantesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>
          }
          deleteMany: {
            args: Prisma.agendamento_participantesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendamento_participantesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.agendamento_participantesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_participantesPayload>
          }
          aggregate: {
            args: Prisma.Agendamento_participantesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento_participantes>
          }
          groupBy: {
            args: Prisma.agendamento_participantesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Agendamento_participantesGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendamento_participantesCountArgs<ExtArgs>
            result: $Utils.Optional<Agendamento_participantesCountAggregateOutputType> | number
          }
        }
      }
      agendamento_slots: {
        payload: Prisma.$agendamento_slotsPayload<ExtArgs>
        fields: Prisma.agendamento_slotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendamento_slotsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendamento_slotsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>
          }
          findFirst: {
            args: Prisma.agendamento_slotsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendamento_slotsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>
          }
          findMany: {
            args: Prisma.agendamento_slotsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>[]
          }
          create: {
            args: Prisma.agendamento_slotsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>
          }
          createMany: {
            args: Prisma.agendamento_slotsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.agendamento_slotsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>
          }
          update: {
            args: Prisma.agendamento_slotsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>
          }
          deleteMany: {
            args: Prisma.agendamento_slotsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendamento_slotsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.agendamento_slotsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamento_slotsPayload>
          }
          aggregate: {
            args: Prisma.Agendamento_slotsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento_slots>
          }
          groupBy: {
            args: Prisma.agendamento_slotsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Agendamento_slotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendamento_slotsCountArgs<ExtArgs>
            result: $Utils.Optional<Agendamento_slotsCountAggregateOutputType> | number
          }
        }
      }
      agendamentos: {
        payload: Prisma.$agendamentosPayload<ExtArgs>
        fields: Prisma.agendamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agendamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agendamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          findFirst: {
            args: Prisma.agendamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agendamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          findMany: {
            args: Prisma.agendamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>[]
          }
          create: {
            args: Prisma.agendamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          createMany: {
            args: Prisma.agendamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.agendamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          update: {
            args: Prisma.agendamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          deleteMany: {
            args: Prisma.agendamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agendamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.agendamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agendamentosPayload>
          }
          aggregate: {
            args: Prisma.AgendamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamentos>
          }
          groupBy: {
            args: Prisma.agendamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.agendamentosCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentosCountAggregateOutputType> | number
          }
        }
      }
      cidadaos: {
        payload: Prisma.$cidadaosPayload<ExtArgs>
        fields: Prisma.cidadaosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cidadaosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cidadaosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload>
          }
          findFirst: {
            args: Prisma.cidadaosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cidadaosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload>
          }
          findMany: {
            args: Prisma.cidadaosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload>[]
          }
          create: {
            args: Prisma.cidadaosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload>
          }
          createMany: {
            args: Prisma.cidadaosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cidadaosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload>
          }
          update: {
            args: Prisma.cidadaosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload>
          }
          deleteMany: {
            args: Prisma.cidadaosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cidadaosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cidadaosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cidadaosPayload>
          }
          aggregate: {
            args: Prisma.CidadaosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCidadaos>
          }
          groupBy: {
            args: Prisma.cidadaosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CidadaosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cidadaosCountArgs<ExtArgs>
            result: $Utils.Optional<CidadaosCountAggregateOutputType> | number
          }
        }
      }
      usuarios_admin: {
        payload: Prisma.$usuarios_adminPayload<ExtArgs>
        fields: Prisma.usuarios_adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarios_adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarios_adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload>
          }
          findFirst: {
            args: Prisma.usuarios_adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarios_adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload>
          }
          findMany: {
            args: Prisma.usuarios_adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload>[]
          }
          create: {
            args: Prisma.usuarios_adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload>
          }
          createMany: {
            args: Prisma.usuarios_adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarios_adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload>
          }
          update: {
            args: Prisma.usuarios_adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload>
          }
          deleteMany: {
            args: Prisma.usuarios_adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarios_adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarios_adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarios_adminPayload>
          }
          aggregate: {
            args: Prisma.Usuarios_adminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios_admin>
          }
          groupBy: {
            args: Prisma.usuarios_adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuarios_adminGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarios_adminCountArgs<ExtArgs>
            result: $Utils.Optional<Usuarios_adminCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    agendamento_participantes?: agendamento_participantesOmit
    agendamento_slots?: agendamento_slotsOmit
    agendamentos?: agendamentosOmit
    cidadaos?: cidadaosOmit
    usuarios_admin?: usuarios_adminOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AgendamentosCountOutputType
   */

  export type AgendamentosCountOutputType = {
    agendamento_participantes: number
    agendamento_slots: number
  }

  export type AgendamentosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamento_participantes?: boolean | AgendamentosCountOutputTypeCountAgendamento_participantesArgs
    agendamento_slots?: boolean | AgendamentosCountOutputTypeCountAgendamento_slotsArgs
  }

  // Custom InputTypes
  /**
   * AgendamentosCountOutputType without action
   */
  export type AgendamentosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendamentosCountOutputType
     */
    select?: AgendamentosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgendamentosCountOutputType without action
   */
  export type AgendamentosCountOutputTypeCountAgendamento_participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamento_participantesWhereInput
  }

  /**
   * AgendamentosCountOutputType without action
   */
  export type AgendamentosCountOutputTypeCountAgendamento_slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamento_slotsWhereInput
  }


  /**
   * Count Type CidadaosCountOutputType
   */

  export type CidadaosCountOutputType = {
    agendamentos: number
  }

  export type CidadaosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | CidadaosCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * CidadaosCountOutputType without action
   */
  export type CidadaosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CidadaosCountOutputType
     */
    select?: CidadaosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CidadaosCountOutputType without action
   */
  export type CidadaosCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamentosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model agendamento_participantes
   */

  export type AggregateAgendamento_participantes = {
    _count: Agendamento_participantesCountAggregateOutputType | null
    _avg: Agendamento_participantesAvgAggregateOutputType | null
    _sum: Agendamento_participantesSumAggregateOutputType | null
    _min: Agendamento_participantesMinAggregateOutputType | null
    _max: Agendamento_participantesMaxAggregateOutputType | null
  }

  export type Agendamento_participantesAvgAggregateOutputType = {
    id: number | null
    agendamento_id: number | null
  }

  export type Agendamento_participantesSumAggregateOutputType = {
    id: number | null
    agendamento_id: number | null
  }

  export type Agendamento_participantesMinAggregateOutputType = {
    id: number | null
    agendamento_id: number | null
    nome: string | null
    telefone: string | null
    principal: boolean | null
  }

  export type Agendamento_participantesMaxAggregateOutputType = {
    id: number | null
    agendamento_id: number | null
    nome: string | null
    telefone: string | null
    principal: boolean | null
  }

  export type Agendamento_participantesCountAggregateOutputType = {
    id: number
    agendamento_id: number
    nome: number
    telefone: number
    principal: number
    _all: number
  }


  export type Agendamento_participantesAvgAggregateInputType = {
    id?: true
    agendamento_id?: true
  }

  export type Agendamento_participantesSumAggregateInputType = {
    id?: true
    agendamento_id?: true
  }

  export type Agendamento_participantesMinAggregateInputType = {
    id?: true
    agendamento_id?: true
    nome?: true
    telefone?: true
    principal?: true
  }

  export type Agendamento_participantesMaxAggregateInputType = {
    id?: true
    agendamento_id?: true
    nome?: true
    telefone?: true
    principal?: true
  }

  export type Agendamento_participantesCountAggregateInputType = {
    id?: true
    agendamento_id?: true
    nome?: true
    telefone?: true
    principal?: true
    _all?: true
  }

  export type Agendamento_participantesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamento_participantes to aggregate.
     */
    where?: agendamento_participantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_participantes to fetch.
     */
    orderBy?: agendamento_participantesOrderByWithRelationInput | agendamento_participantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendamento_participantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agendamento_participantes
    **/
    _count?: true | Agendamento_participantesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agendamento_participantesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agendamento_participantesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agendamento_participantesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agendamento_participantesMaxAggregateInputType
  }

  export type GetAgendamento_participantesAggregateType<T extends Agendamento_participantesAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento_participantes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento_participantes[P]>
      : GetScalarType<T[P], AggregateAgendamento_participantes[P]>
  }




  export type agendamento_participantesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamento_participantesWhereInput
    orderBy?: agendamento_participantesOrderByWithAggregationInput | agendamento_participantesOrderByWithAggregationInput[]
    by: Agendamento_participantesScalarFieldEnum[] | Agendamento_participantesScalarFieldEnum
    having?: agendamento_participantesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agendamento_participantesCountAggregateInputType | true
    _avg?: Agendamento_participantesAvgAggregateInputType
    _sum?: Agendamento_participantesSumAggregateInputType
    _min?: Agendamento_participantesMinAggregateInputType
    _max?: Agendamento_participantesMaxAggregateInputType
  }

  export type Agendamento_participantesGroupByOutputType = {
    id: number
    agendamento_id: number
    nome: string
    telefone: string | null
    principal: boolean
    _count: Agendamento_participantesCountAggregateOutputType | null
    _avg: Agendamento_participantesAvgAggregateOutputType | null
    _sum: Agendamento_participantesSumAggregateOutputType | null
    _min: Agendamento_participantesMinAggregateOutputType | null
    _max: Agendamento_participantesMaxAggregateOutputType | null
  }

  type GetAgendamento_participantesGroupByPayload<T extends agendamento_participantesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agendamento_participantesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agendamento_participantesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agendamento_participantesGroupByOutputType[P]>
            : GetScalarType<T[P], Agendamento_participantesGroupByOutputType[P]>
        }
      >
    >


  export type agendamento_participantesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agendamento_id?: boolean
    nome?: boolean
    telefone?: boolean
    principal?: boolean
    agendamentos?: boolean | agendamentosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento_participantes"]>



  export type agendamento_participantesSelectScalar = {
    id?: boolean
    agendamento_id?: boolean
    nome?: boolean
    telefone?: boolean
    principal?: boolean
  }

  export type agendamento_participantesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agendamento_id" | "nome" | "telefone" | "principal", ExtArgs["result"]["agendamento_participantes"]>
  export type agendamento_participantesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | agendamentosDefaultArgs<ExtArgs>
  }

  export type $agendamento_participantesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agendamento_participantes"
    objects: {
      agendamentos: Prisma.$agendamentosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      agendamento_id: number
      nome: string
      telefone: string | null
      principal: boolean
    }, ExtArgs["result"]["agendamento_participantes"]>
    composites: {}
  }

  type agendamento_participantesGetPayload<S extends boolean | null | undefined | agendamento_participantesDefaultArgs> = $Result.GetResult<Prisma.$agendamento_participantesPayload, S>

  type agendamento_participantesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendamento_participantesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Agendamento_participantesCountAggregateInputType | true
    }

  export interface agendamento_participantesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agendamento_participantes'], meta: { name: 'agendamento_participantes' } }
    /**
     * Find zero or one Agendamento_participantes that matches the filter.
     * @param {agendamento_participantesFindUniqueArgs} args - Arguments to find a Agendamento_participantes
     * @example
     * // Get one Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendamento_participantesFindUniqueArgs>(args: SelectSubset<T, agendamento_participantesFindUniqueArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento_participantes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendamento_participantesFindUniqueOrThrowArgs} args - Arguments to find a Agendamento_participantes
     * @example
     * // Get one Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendamento_participantesFindUniqueOrThrowArgs>(args: SelectSubset<T, agendamento_participantesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento_participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_participantesFindFirstArgs} args - Arguments to find a Agendamento_participantes
     * @example
     * // Get one Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendamento_participantesFindFirstArgs>(args?: SelectSubset<T, agendamento_participantesFindFirstArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento_participantes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_participantesFindFirstOrThrowArgs} args - Arguments to find a Agendamento_participantes
     * @example
     * // Get one Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendamento_participantesFindFirstOrThrowArgs>(args?: SelectSubset<T, agendamento_participantesFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamento_participantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_participantesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.findMany()
     * 
     * // Get first 10 Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamento_participantesWithIdOnly = await prisma.agendamento_participantes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agendamento_participantesFindManyArgs>(args?: SelectSubset<T, agendamento_participantesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento_participantes.
     * @param {agendamento_participantesCreateArgs} args - Arguments to create a Agendamento_participantes.
     * @example
     * // Create one Agendamento_participantes
     * const Agendamento_participantes = await prisma.agendamento_participantes.create({
     *   data: {
     *     // ... data to create a Agendamento_participantes
     *   }
     * })
     * 
     */
    create<T extends agendamento_participantesCreateArgs>(args: SelectSubset<T, agendamento_participantesCreateArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamento_participantes.
     * @param {agendamento_participantesCreateManyArgs} args - Arguments to create many Agendamento_participantes.
     * @example
     * // Create many Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendamento_participantesCreateManyArgs>(args?: SelectSubset<T, agendamento_participantesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agendamento_participantes.
     * @param {agendamento_participantesDeleteArgs} args - Arguments to delete one Agendamento_participantes.
     * @example
     * // Delete one Agendamento_participantes
     * const Agendamento_participantes = await prisma.agendamento_participantes.delete({
     *   where: {
     *     // ... filter to delete one Agendamento_participantes
     *   }
     * })
     * 
     */
    delete<T extends agendamento_participantesDeleteArgs>(args: SelectSubset<T, agendamento_participantesDeleteArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento_participantes.
     * @param {agendamento_participantesUpdateArgs} args - Arguments to update one Agendamento_participantes.
     * @example
     * // Update one Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendamento_participantesUpdateArgs>(args: SelectSubset<T, agendamento_participantesUpdateArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamento_participantes.
     * @param {agendamento_participantesDeleteManyArgs} args - Arguments to filter Agendamento_participantes to delete.
     * @example
     * // Delete a few Agendamento_participantes
     * const { count } = await prisma.agendamento_participantes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendamento_participantesDeleteManyArgs>(args?: SelectSubset<T, agendamento_participantesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamento_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_participantesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendamento_participantesUpdateManyArgs>(args: SelectSubset<T, agendamento_participantesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agendamento_participantes.
     * @param {agendamento_participantesUpsertArgs} args - Arguments to update or create a Agendamento_participantes.
     * @example
     * // Update or create a Agendamento_participantes
     * const agendamento_participantes = await prisma.agendamento_participantes.upsert({
     *   create: {
     *     // ... data to create a Agendamento_participantes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento_participantes we want to update
     *   }
     * })
     */
    upsert<T extends agendamento_participantesUpsertArgs>(args: SelectSubset<T, agendamento_participantesUpsertArgs<ExtArgs>>): Prisma__agendamento_participantesClient<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamento_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_participantesCountArgs} args - Arguments to filter Agendamento_participantes to count.
     * @example
     * // Count the number of Agendamento_participantes
     * const count = await prisma.agendamento_participantes.count({
     *   where: {
     *     // ... the filter for the Agendamento_participantes we want to count
     *   }
     * })
    **/
    count<T extends agendamento_participantesCountArgs>(
      args?: Subset<T, agendamento_participantesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agendamento_participantesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agendamento_participantesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Agendamento_participantesAggregateArgs>(args: Subset<T, Agendamento_participantesAggregateArgs>): Prisma.PrismaPromise<GetAgendamento_participantesAggregateType<T>>

    /**
     * Group by Agendamento_participantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_participantesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agendamento_participantesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendamento_participantesGroupByArgs['orderBy'] }
        : { orderBy?: agendamento_participantesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agendamento_participantesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamento_participantesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agendamento_participantes model
   */
  readonly fields: agendamento_participantesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agendamento_participantes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendamento_participantesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends agendamentosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, agendamentosDefaultArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agendamento_participantes model
   */
  interface agendamento_participantesFieldRefs {
    readonly id: FieldRef<"agendamento_participantes", 'Int'>
    readonly agendamento_id: FieldRef<"agendamento_participantes", 'Int'>
    readonly nome: FieldRef<"agendamento_participantes", 'String'>
    readonly telefone: FieldRef<"agendamento_participantes", 'String'>
    readonly principal: FieldRef<"agendamento_participantes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * agendamento_participantes findUnique
   */
  export type agendamento_participantesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_participantes to fetch.
     */
    where: agendamento_participantesWhereUniqueInput
  }

  /**
   * agendamento_participantes findUniqueOrThrow
   */
  export type agendamento_participantesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_participantes to fetch.
     */
    where: agendamento_participantesWhereUniqueInput
  }

  /**
   * agendamento_participantes findFirst
   */
  export type agendamento_participantesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_participantes to fetch.
     */
    where?: agendamento_participantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_participantes to fetch.
     */
    orderBy?: agendamento_participantesOrderByWithRelationInput | agendamento_participantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamento_participantes.
     */
    cursor?: agendamento_participantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamento_participantes.
     */
    distinct?: Agendamento_participantesScalarFieldEnum | Agendamento_participantesScalarFieldEnum[]
  }

  /**
   * agendamento_participantes findFirstOrThrow
   */
  export type agendamento_participantesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_participantes to fetch.
     */
    where?: agendamento_participantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_participantes to fetch.
     */
    orderBy?: agendamento_participantesOrderByWithRelationInput | agendamento_participantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamento_participantes.
     */
    cursor?: agendamento_participantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamento_participantes.
     */
    distinct?: Agendamento_participantesScalarFieldEnum | Agendamento_participantesScalarFieldEnum[]
  }

  /**
   * agendamento_participantes findMany
   */
  export type agendamento_participantesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_participantes to fetch.
     */
    where?: agendamento_participantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_participantes to fetch.
     */
    orderBy?: agendamento_participantesOrderByWithRelationInput | agendamento_participantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agendamento_participantes.
     */
    cursor?: agendamento_participantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_participantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_participantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamento_participantes.
     */
    distinct?: Agendamento_participantesScalarFieldEnum | Agendamento_participantesScalarFieldEnum[]
  }

  /**
   * agendamento_participantes create
   */
  export type agendamento_participantesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * The data needed to create a agendamento_participantes.
     */
    data: XOR<agendamento_participantesCreateInput, agendamento_participantesUncheckedCreateInput>
  }

  /**
   * agendamento_participantes createMany
   */
  export type agendamento_participantesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agendamento_participantes.
     */
    data: agendamento_participantesCreateManyInput | agendamento_participantesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agendamento_participantes update
   */
  export type agendamento_participantesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * The data needed to update a agendamento_participantes.
     */
    data: XOR<agendamento_participantesUpdateInput, agendamento_participantesUncheckedUpdateInput>
    /**
     * Choose, which agendamento_participantes to update.
     */
    where: agendamento_participantesWhereUniqueInput
  }

  /**
   * agendamento_participantes updateMany
   */
  export type agendamento_participantesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agendamento_participantes.
     */
    data: XOR<agendamento_participantesUpdateManyMutationInput, agendamento_participantesUncheckedUpdateManyInput>
    /**
     * Filter which agendamento_participantes to update
     */
    where?: agendamento_participantesWhereInput
    /**
     * Limit how many agendamento_participantes to update.
     */
    limit?: number
  }

  /**
   * agendamento_participantes upsert
   */
  export type agendamento_participantesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * The filter to search for the agendamento_participantes to update in case it exists.
     */
    where: agendamento_participantesWhereUniqueInput
    /**
     * In case the agendamento_participantes found by the `where` argument doesn't exist, create a new agendamento_participantes with this data.
     */
    create: XOR<agendamento_participantesCreateInput, agendamento_participantesUncheckedCreateInput>
    /**
     * In case the agendamento_participantes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendamento_participantesUpdateInput, agendamento_participantesUncheckedUpdateInput>
  }

  /**
   * agendamento_participantes delete
   */
  export type agendamento_participantesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    /**
     * Filter which agendamento_participantes to delete.
     */
    where: agendamento_participantesWhereUniqueInput
  }

  /**
   * agendamento_participantes deleteMany
   */
  export type agendamento_participantesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamento_participantes to delete
     */
    where?: agendamento_participantesWhereInput
    /**
     * Limit how many agendamento_participantes to delete.
     */
    limit?: number
  }

  /**
   * agendamento_participantes without action
   */
  export type agendamento_participantesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
  }


  /**
   * Model agendamento_slots
   */

  export type AggregateAgendamento_slots = {
    _count: Agendamento_slotsCountAggregateOutputType | null
    _avg: Agendamento_slotsAvgAggregateOutputType | null
    _sum: Agendamento_slotsSumAggregateOutputType | null
    _min: Agendamento_slotsMinAggregateOutputType | null
    _max: Agendamento_slotsMaxAggregateOutputType | null
  }

  export type Agendamento_slotsAvgAggregateOutputType = {
    id: number | null
    agendamento_id: number | null
  }

  export type Agendamento_slotsSumAggregateOutputType = {
    id: bigint | null
    agendamento_id: number | null
  }

  export type Agendamento_slotsMinAggregateOutputType = {
    id: bigint | null
    agendamento_id: number | null
    data: Date | null
    horario_inicio: Date | null
  }

  export type Agendamento_slotsMaxAggregateOutputType = {
    id: bigint | null
    agendamento_id: number | null
    data: Date | null
    horario_inicio: Date | null
  }

  export type Agendamento_slotsCountAggregateOutputType = {
    id: number
    agendamento_id: number
    data: number
    horario_inicio: number
    _all: number
  }


  export type Agendamento_slotsAvgAggregateInputType = {
    id?: true
    agendamento_id?: true
  }

  export type Agendamento_slotsSumAggregateInputType = {
    id?: true
    agendamento_id?: true
  }

  export type Agendamento_slotsMinAggregateInputType = {
    id?: true
    agendamento_id?: true
    data?: true
    horario_inicio?: true
  }

  export type Agendamento_slotsMaxAggregateInputType = {
    id?: true
    agendamento_id?: true
    data?: true
    horario_inicio?: true
  }

  export type Agendamento_slotsCountAggregateInputType = {
    id?: true
    agendamento_id?: true
    data?: true
    horario_inicio?: true
    _all?: true
  }

  export type Agendamento_slotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamento_slots to aggregate.
     */
    where?: agendamento_slotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_slots to fetch.
     */
    orderBy?: agendamento_slotsOrderByWithRelationInput | agendamento_slotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendamento_slotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agendamento_slots
    **/
    _count?: true | Agendamento_slotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agendamento_slotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agendamento_slotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agendamento_slotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agendamento_slotsMaxAggregateInputType
  }

  export type GetAgendamento_slotsAggregateType<T extends Agendamento_slotsAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento_slots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento_slots[P]>
      : GetScalarType<T[P], AggregateAgendamento_slots[P]>
  }




  export type agendamento_slotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamento_slotsWhereInput
    orderBy?: agendamento_slotsOrderByWithAggregationInput | agendamento_slotsOrderByWithAggregationInput[]
    by: Agendamento_slotsScalarFieldEnum[] | Agendamento_slotsScalarFieldEnum
    having?: agendamento_slotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agendamento_slotsCountAggregateInputType | true
    _avg?: Agendamento_slotsAvgAggregateInputType
    _sum?: Agendamento_slotsSumAggregateInputType
    _min?: Agendamento_slotsMinAggregateInputType
    _max?: Agendamento_slotsMaxAggregateInputType
  }

  export type Agendamento_slotsGroupByOutputType = {
    id: bigint
    agendamento_id: number
    data: Date
    horario_inicio: Date
    _count: Agendamento_slotsCountAggregateOutputType | null
    _avg: Agendamento_slotsAvgAggregateOutputType | null
    _sum: Agendamento_slotsSumAggregateOutputType | null
    _min: Agendamento_slotsMinAggregateOutputType | null
    _max: Agendamento_slotsMaxAggregateOutputType | null
  }

  type GetAgendamento_slotsGroupByPayload<T extends agendamento_slotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agendamento_slotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agendamento_slotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agendamento_slotsGroupByOutputType[P]>
            : GetScalarType<T[P], Agendamento_slotsGroupByOutputType[P]>
        }
      >
    >


  export type agendamento_slotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agendamento_id?: boolean
    data?: boolean
    horario_inicio?: boolean
    agendamentos?: boolean | agendamentosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento_slots"]>



  export type agendamento_slotsSelectScalar = {
    id?: boolean
    agendamento_id?: boolean
    data?: boolean
    horario_inicio?: boolean
  }

  export type agendamento_slotsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "agendamento_id" | "data" | "horario_inicio", ExtArgs["result"]["agendamento_slots"]>
  export type agendamento_slotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | agendamentosDefaultArgs<ExtArgs>
  }

  export type $agendamento_slotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agendamento_slots"
    objects: {
      agendamentos: Prisma.$agendamentosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      agendamento_id: number
      data: Date
      horario_inicio: Date
    }, ExtArgs["result"]["agendamento_slots"]>
    composites: {}
  }

  type agendamento_slotsGetPayload<S extends boolean | null | undefined | agendamento_slotsDefaultArgs> = $Result.GetResult<Prisma.$agendamento_slotsPayload, S>

  type agendamento_slotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendamento_slotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Agendamento_slotsCountAggregateInputType | true
    }

  export interface agendamento_slotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agendamento_slots'], meta: { name: 'agendamento_slots' } }
    /**
     * Find zero or one Agendamento_slots that matches the filter.
     * @param {agendamento_slotsFindUniqueArgs} args - Arguments to find a Agendamento_slots
     * @example
     * // Get one Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendamento_slotsFindUniqueArgs>(args: SelectSubset<T, agendamento_slotsFindUniqueArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento_slots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendamento_slotsFindUniqueOrThrowArgs} args - Arguments to find a Agendamento_slots
     * @example
     * // Get one Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendamento_slotsFindUniqueOrThrowArgs>(args: SelectSubset<T, agendamento_slotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento_slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_slotsFindFirstArgs} args - Arguments to find a Agendamento_slots
     * @example
     * // Get one Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendamento_slotsFindFirstArgs>(args?: SelectSubset<T, agendamento_slotsFindFirstArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento_slots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_slotsFindFirstOrThrowArgs} args - Arguments to find a Agendamento_slots
     * @example
     * // Get one Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendamento_slotsFindFirstOrThrowArgs>(args?: SelectSubset<T, agendamento_slotsFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamento_slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_slotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.findMany()
     * 
     * // Get first 10 Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamento_slotsWithIdOnly = await prisma.agendamento_slots.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agendamento_slotsFindManyArgs>(args?: SelectSubset<T, agendamento_slotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento_slots.
     * @param {agendamento_slotsCreateArgs} args - Arguments to create a Agendamento_slots.
     * @example
     * // Create one Agendamento_slots
     * const Agendamento_slots = await prisma.agendamento_slots.create({
     *   data: {
     *     // ... data to create a Agendamento_slots
     *   }
     * })
     * 
     */
    create<T extends agendamento_slotsCreateArgs>(args: SelectSubset<T, agendamento_slotsCreateArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamento_slots.
     * @param {agendamento_slotsCreateManyArgs} args - Arguments to create many Agendamento_slots.
     * @example
     * // Create many Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendamento_slotsCreateManyArgs>(args?: SelectSubset<T, agendamento_slotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agendamento_slots.
     * @param {agendamento_slotsDeleteArgs} args - Arguments to delete one Agendamento_slots.
     * @example
     * // Delete one Agendamento_slots
     * const Agendamento_slots = await prisma.agendamento_slots.delete({
     *   where: {
     *     // ... filter to delete one Agendamento_slots
     *   }
     * })
     * 
     */
    delete<T extends agendamento_slotsDeleteArgs>(args: SelectSubset<T, agendamento_slotsDeleteArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento_slots.
     * @param {agendamento_slotsUpdateArgs} args - Arguments to update one Agendamento_slots.
     * @example
     * // Update one Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendamento_slotsUpdateArgs>(args: SelectSubset<T, agendamento_slotsUpdateArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamento_slots.
     * @param {agendamento_slotsDeleteManyArgs} args - Arguments to filter Agendamento_slots to delete.
     * @example
     * // Delete a few Agendamento_slots
     * const { count } = await prisma.agendamento_slots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendamento_slotsDeleteManyArgs>(args?: SelectSubset<T, agendamento_slotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamento_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_slotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendamento_slotsUpdateManyArgs>(args: SelectSubset<T, agendamento_slotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agendamento_slots.
     * @param {agendamento_slotsUpsertArgs} args - Arguments to update or create a Agendamento_slots.
     * @example
     * // Update or create a Agendamento_slots
     * const agendamento_slots = await prisma.agendamento_slots.upsert({
     *   create: {
     *     // ... data to create a Agendamento_slots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento_slots we want to update
     *   }
     * })
     */
    upsert<T extends agendamento_slotsUpsertArgs>(args: SelectSubset<T, agendamento_slotsUpsertArgs<ExtArgs>>): Prisma__agendamento_slotsClient<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamento_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_slotsCountArgs} args - Arguments to filter Agendamento_slots to count.
     * @example
     * // Count the number of Agendamento_slots
     * const count = await prisma.agendamento_slots.count({
     *   where: {
     *     // ... the filter for the Agendamento_slots we want to count
     *   }
     * })
    **/
    count<T extends agendamento_slotsCountArgs>(
      args?: Subset<T, agendamento_slotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agendamento_slotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agendamento_slotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Agendamento_slotsAggregateArgs>(args: Subset<T, Agendamento_slotsAggregateArgs>): Prisma.PrismaPromise<GetAgendamento_slotsAggregateType<T>>

    /**
     * Group by Agendamento_slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamento_slotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agendamento_slotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendamento_slotsGroupByArgs['orderBy'] }
        : { orderBy?: agendamento_slotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agendamento_slotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamento_slotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agendamento_slots model
   */
  readonly fields: agendamento_slotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agendamento_slots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendamento_slotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends agendamentosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, agendamentosDefaultArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agendamento_slots model
   */
  interface agendamento_slotsFieldRefs {
    readonly id: FieldRef<"agendamento_slots", 'BigInt'>
    readonly agendamento_id: FieldRef<"agendamento_slots", 'Int'>
    readonly data: FieldRef<"agendamento_slots", 'DateTime'>
    readonly horario_inicio: FieldRef<"agendamento_slots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * agendamento_slots findUnique
   */
  export type agendamento_slotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_slots to fetch.
     */
    where: agendamento_slotsWhereUniqueInput
  }

  /**
   * agendamento_slots findUniqueOrThrow
   */
  export type agendamento_slotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_slots to fetch.
     */
    where: agendamento_slotsWhereUniqueInput
  }

  /**
   * agendamento_slots findFirst
   */
  export type agendamento_slotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_slots to fetch.
     */
    where?: agendamento_slotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_slots to fetch.
     */
    orderBy?: agendamento_slotsOrderByWithRelationInput | agendamento_slotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamento_slots.
     */
    cursor?: agendamento_slotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamento_slots.
     */
    distinct?: Agendamento_slotsScalarFieldEnum | Agendamento_slotsScalarFieldEnum[]
  }

  /**
   * agendamento_slots findFirstOrThrow
   */
  export type agendamento_slotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_slots to fetch.
     */
    where?: agendamento_slotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_slots to fetch.
     */
    orderBy?: agendamento_slotsOrderByWithRelationInput | agendamento_slotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamento_slots.
     */
    cursor?: agendamento_slotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamento_slots.
     */
    distinct?: Agendamento_slotsScalarFieldEnum | Agendamento_slotsScalarFieldEnum[]
  }

  /**
   * agendamento_slots findMany
   */
  export type agendamento_slotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * Filter, which agendamento_slots to fetch.
     */
    where?: agendamento_slotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamento_slots to fetch.
     */
    orderBy?: agendamento_slotsOrderByWithRelationInput | agendamento_slotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agendamento_slots.
     */
    cursor?: agendamento_slotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamento_slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamento_slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamento_slots.
     */
    distinct?: Agendamento_slotsScalarFieldEnum | Agendamento_slotsScalarFieldEnum[]
  }

  /**
   * agendamento_slots create
   */
  export type agendamento_slotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * The data needed to create a agendamento_slots.
     */
    data: XOR<agendamento_slotsCreateInput, agendamento_slotsUncheckedCreateInput>
  }

  /**
   * agendamento_slots createMany
   */
  export type agendamento_slotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agendamento_slots.
     */
    data: agendamento_slotsCreateManyInput | agendamento_slotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agendamento_slots update
   */
  export type agendamento_slotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * The data needed to update a agendamento_slots.
     */
    data: XOR<agendamento_slotsUpdateInput, agendamento_slotsUncheckedUpdateInput>
    /**
     * Choose, which agendamento_slots to update.
     */
    where: agendamento_slotsWhereUniqueInput
  }

  /**
   * agendamento_slots updateMany
   */
  export type agendamento_slotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agendamento_slots.
     */
    data: XOR<agendamento_slotsUpdateManyMutationInput, agendamento_slotsUncheckedUpdateManyInput>
    /**
     * Filter which agendamento_slots to update
     */
    where?: agendamento_slotsWhereInput
    /**
     * Limit how many agendamento_slots to update.
     */
    limit?: number
  }

  /**
   * agendamento_slots upsert
   */
  export type agendamento_slotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * The filter to search for the agendamento_slots to update in case it exists.
     */
    where: agendamento_slotsWhereUniqueInput
    /**
     * In case the agendamento_slots found by the `where` argument doesn't exist, create a new agendamento_slots with this data.
     */
    create: XOR<agendamento_slotsCreateInput, agendamento_slotsUncheckedCreateInput>
    /**
     * In case the agendamento_slots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendamento_slotsUpdateInput, agendamento_slotsUncheckedUpdateInput>
  }

  /**
   * agendamento_slots delete
   */
  export type agendamento_slotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    /**
     * Filter which agendamento_slots to delete.
     */
    where: agendamento_slotsWhereUniqueInput
  }

  /**
   * agendamento_slots deleteMany
   */
  export type agendamento_slotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamento_slots to delete
     */
    where?: agendamento_slotsWhereInput
    /**
     * Limit how many agendamento_slots to delete.
     */
    limit?: number
  }

  /**
   * agendamento_slots without action
   */
  export type agendamento_slotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
  }


  /**
   * Model agendamentos
   */

  export type AggregateAgendamentos = {
    _count: AgendamentosCountAggregateOutputType | null
    _avg: AgendamentosAvgAggregateOutputType | null
    _sum: AgendamentosSumAggregateOutputType | null
    _min: AgendamentosMinAggregateOutputType | null
    _max: AgendamentosMaxAggregateOutputType | null
  }

  export type AgendamentosAvgAggregateOutputType = {
    id: number | null
    cidadao_id: number | null
  }

  export type AgendamentosSumAggregateOutputType = {
    id: number | null
    cidadao_id: number | null
  }

  export type AgendamentosMinAggregateOutputType = {
    id: number | null
    cidadao_id: number | null
    nome: string | null
    motivo: string | null
    tratativa: string | null
    data: Date | null
    horario: Date | null
    atendimento: $Enums.agendamentos_atendimento | null
    tipo_atendimento: $Enums.agendamentos_tipo_atendimento | null
    email: string | null
    telefone: string | null
    cep: string | null
    endereco: string | null
    data_registro: Date | null
    status: $Enums.agendamentos_status | null
  }

  export type AgendamentosMaxAggregateOutputType = {
    id: number | null
    cidadao_id: number | null
    nome: string | null
    motivo: string | null
    tratativa: string | null
    data: Date | null
    horario: Date | null
    atendimento: $Enums.agendamentos_atendimento | null
    tipo_atendimento: $Enums.agendamentos_tipo_atendimento | null
    email: string | null
    telefone: string | null
    cep: string | null
    endereco: string | null
    data_registro: Date | null
    status: $Enums.agendamentos_status | null
  }

  export type AgendamentosCountAggregateOutputType = {
    id: number
    cidadao_id: number
    nome: number
    motivo: number
    tratativa: number
    data: number
    horario: number
    atendimento: number
    tipo_atendimento: number
    blocos_json: number
    email: number
    telefone: number
    cep: number
    endereco: number
    data_registro: number
    status: number
    _all: number
  }


  export type AgendamentosAvgAggregateInputType = {
    id?: true
    cidadao_id?: true
  }

  export type AgendamentosSumAggregateInputType = {
    id?: true
    cidadao_id?: true
  }

  export type AgendamentosMinAggregateInputType = {
    id?: true
    cidadao_id?: true
    nome?: true
    motivo?: true
    tratativa?: true
    data?: true
    horario?: true
    atendimento?: true
    tipo_atendimento?: true
    email?: true
    telefone?: true
    cep?: true
    endereco?: true
    data_registro?: true
    status?: true
  }

  export type AgendamentosMaxAggregateInputType = {
    id?: true
    cidadao_id?: true
    nome?: true
    motivo?: true
    tratativa?: true
    data?: true
    horario?: true
    atendimento?: true
    tipo_atendimento?: true
    email?: true
    telefone?: true
    cep?: true
    endereco?: true
    data_registro?: true
    status?: true
  }

  export type AgendamentosCountAggregateInputType = {
    id?: true
    cidadao_id?: true
    nome?: true
    motivo?: true
    tratativa?: true
    data?: true
    horario?: true
    atendimento?: true
    tipo_atendimento?: true
    blocos_json?: true
    email?: true
    telefone?: true
    cep?: true
    endereco?: true
    data_registro?: true
    status?: true
    _all?: true
  }

  export type AgendamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamentos to aggregate.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agendamentos
    **/
    _count?: true | AgendamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentosMaxAggregateInputType
  }

  export type GetAgendamentosAggregateType<T extends AgendamentosAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamentos[P]>
      : GetScalarType<T[P], AggregateAgendamentos[P]>
  }




  export type agendamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agendamentosWhereInput
    orderBy?: agendamentosOrderByWithAggregationInput | agendamentosOrderByWithAggregationInput[]
    by: AgendamentosScalarFieldEnum[] | AgendamentosScalarFieldEnum
    having?: agendamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentosCountAggregateInputType | true
    _avg?: AgendamentosAvgAggregateInputType
    _sum?: AgendamentosSumAggregateInputType
    _min?: AgendamentosMinAggregateInputType
    _max?: AgendamentosMaxAggregateInputType
  }

  export type AgendamentosGroupByOutputType = {
    id: number
    cidadao_id: number | null
    nome: string
    motivo: string | null
    tratativa: string | null
    data: Date
    horario: Date
    atendimento: $Enums.agendamentos_atendimento
    tipo_atendimento: $Enums.agendamentos_tipo_atendimento
    blocos_json: JsonValue | null
    email: string | null
    telefone: string | null
    cep: string | null
    endereco: string | null
    data_registro: Date
    status: $Enums.agendamentos_status
    _count: AgendamentosCountAggregateOutputType | null
    _avg: AgendamentosAvgAggregateOutputType | null
    _sum: AgendamentosSumAggregateOutputType | null
    _min: AgendamentosMinAggregateOutputType | null
    _max: AgendamentosMaxAggregateOutputType | null
  }

  type GetAgendamentosGroupByPayload<T extends agendamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentosGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentosGroupByOutputType[P]>
        }
      >
    >


  export type agendamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cidadao_id?: boolean
    nome?: boolean
    motivo?: boolean
    tratativa?: boolean
    data?: boolean
    horario?: boolean
    atendimento?: boolean
    tipo_atendimento?: boolean
    blocos_json?: boolean
    email?: boolean
    telefone?: boolean
    cep?: boolean
    endereco?: boolean
    data_registro?: boolean
    status?: boolean
    agendamento_participantes?: boolean | agendamentos$agendamento_participantesArgs<ExtArgs>
    agendamento_slots?: boolean | agendamentos$agendamento_slotsArgs<ExtArgs>
    cidadaos?: boolean | agendamentos$cidadaosArgs<ExtArgs>
    _count?: boolean | AgendamentosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamentos"]>



  export type agendamentosSelectScalar = {
    id?: boolean
    cidadao_id?: boolean
    nome?: boolean
    motivo?: boolean
    tratativa?: boolean
    data?: boolean
    horario?: boolean
    atendimento?: boolean
    tipo_atendimento?: boolean
    blocos_json?: boolean
    email?: boolean
    telefone?: boolean
    cep?: boolean
    endereco?: boolean
    data_registro?: boolean
    status?: boolean
  }

  export type agendamentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cidadao_id" | "nome" | "motivo" | "tratativa" | "data" | "horario" | "atendimento" | "tipo_atendimento" | "blocos_json" | "email" | "telefone" | "cep" | "endereco" | "data_registro" | "status", ExtArgs["result"]["agendamentos"]>
  export type agendamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamento_participantes?: boolean | agendamentos$agendamento_participantesArgs<ExtArgs>
    agendamento_slots?: boolean | agendamentos$agendamento_slotsArgs<ExtArgs>
    cidadaos?: boolean | agendamentos$cidadaosArgs<ExtArgs>
    _count?: boolean | AgendamentosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $agendamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agendamentos"
    objects: {
      agendamento_participantes: Prisma.$agendamento_participantesPayload<ExtArgs>[]
      agendamento_slots: Prisma.$agendamento_slotsPayload<ExtArgs>[]
      cidadaos: Prisma.$cidadaosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cidadao_id: number | null
      nome: string
      motivo: string | null
      tratativa: string | null
      data: Date
      horario: Date
      atendimento: $Enums.agendamentos_atendimento
      tipo_atendimento: $Enums.agendamentos_tipo_atendimento
      blocos_json: Prisma.JsonValue | null
      email: string | null
      telefone: string | null
      cep: string | null
      endereco: string | null
      data_registro: Date
      status: $Enums.agendamentos_status
    }, ExtArgs["result"]["agendamentos"]>
    composites: {}
  }

  type agendamentosGetPayload<S extends boolean | null | undefined | agendamentosDefaultArgs> = $Result.GetResult<Prisma.$agendamentosPayload, S>

  type agendamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<agendamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentosCountAggregateInputType | true
    }

  export interface agendamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agendamentos'], meta: { name: 'agendamentos' } }
    /**
     * Find zero or one Agendamentos that matches the filter.
     * @param {agendamentosFindUniqueArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agendamentosFindUniqueArgs>(args: SelectSubset<T, agendamentosFindUniqueArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agendamentosFindUniqueOrThrowArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agendamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, agendamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosFindFirstArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agendamentosFindFirstArgs>(args?: SelectSubset<T, agendamentosFindFirstArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosFindFirstOrThrowArgs} args - Arguments to find a Agendamentos
     * @example
     * // Get one Agendamentos
     * const agendamentos = await prisma.agendamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agendamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, agendamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamentos.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamentos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentosWithIdOnly = await prisma.agendamentos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends agendamentosFindManyArgs>(args?: SelectSubset<T, agendamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamentos.
     * @param {agendamentosCreateArgs} args - Arguments to create a Agendamentos.
     * @example
     * // Create one Agendamentos
     * const Agendamentos = await prisma.agendamentos.create({
     *   data: {
     *     // ... data to create a Agendamentos
     *   }
     * })
     * 
     */
    create<T extends agendamentosCreateArgs>(args: SelectSubset<T, agendamentosCreateArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {agendamentosCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamentos = await prisma.agendamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agendamentosCreateManyArgs>(args?: SelectSubset<T, agendamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agendamentos.
     * @param {agendamentosDeleteArgs} args - Arguments to delete one Agendamentos.
     * @example
     * // Delete one Agendamentos
     * const Agendamentos = await prisma.agendamentos.delete({
     *   where: {
     *     // ... filter to delete one Agendamentos
     *   }
     * })
     * 
     */
    delete<T extends agendamentosDeleteArgs>(args: SelectSubset<T, agendamentosDeleteArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamentos.
     * @param {agendamentosUpdateArgs} args - Arguments to update one Agendamentos.
     * @example
     * // Update one Agendamentos
     * const agendamentos = await prisma.agendamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agendamentosUpdateArgs>(args: SelectSubset<T, agendamentosUpdateArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {agendamentosDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agendamentosDeleteManyArgs>(args?: SelectSubset<T, agendamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamentos = await prisma.agendamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agendamentosUpdateManyArgs>(args: SelectSubset<T, agendamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agendamentos.
     * @param {agendamentosUpsertArgs} args - Arguments to update or create a Agendamentos.
     * @example
     * // Update or create a Agendamentos
     * const agendamentos = await prisma.agendamentos.upsert({
     *   create: {
     *     // ... data to create a Agendamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamentos we want to update
     *   }
     * })
     */
    upsert<T extends agendamentosUpsertArgs>(args: SelectSubset<T, agendamentosUpsertArgs<ExtArgs>>): Prisma__agendamentosClient<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamentos.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends agendamentosCountArgs>(
      args?: Subset<T, agendamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendamentosAggregateArgs>(args: Subset<T, AgendamentosAggregateArgs>): Prisma.PrismaPromise<GetAgendamentosAggregateType<T>>

    /**
     * Group by Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agendamentosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agendamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agendamentosGroupByArgs['orderBy'] }
        : { orderBy?: agendamentosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agendamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agendamentos model
   */
  readonly fields: agendamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agendamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agendamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamento_participantes<T extends agendamentos$agendamento_participantesArgs<ExtArgs> = {}>(args?: Subset<T, agendamentos$agendamento_participantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamento_participantesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamento_slots<T extends agendamentos$agendamento_slotsArgs<ExtArgs> = {}>(args?: Subset<T, agendamentos$agendamento_slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamento_slotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cidadaos<T extends agendamentos$cidadaosArgs<ExtArgs> = {}>(args?: Subset<T, agendamentos$cidadaosArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agendamentos model
   */
  interface agendamentosFieldRefs {
    readonly id: FieldRef<"agendamentos", 'Int'>
    readonly cidadao_id: FieldRef<"agendamentos", 'Int'>
    readonly nome: FieldRef<"agendamentos", 'String'>
    readonly motivo: FieldRef<"agendamentos", 'String'>
    readonly tratativa: FieldRef<"agendamentos", 'String'>
    readonly data: FieldRef<"agendamentos", 'DateTime'>
    readonly horario: FieldRef<"agendamentos", 'DateTime'>
    readonly atendimento: FieldRef<"agendamentos", 'agendamentos_atendimento'>
    readonly tipo_atendimento: FieldRef<"agendamentos", 'agendamentos_tipo_atendimento'>
    readonly blocos_json: FieldRef<"agendamentos", 'Json'>
    readonly email: FieldRef<"agendamentos", 'String'>
    readonly telefone: FieldRef<"agendamentos", 'String'>
    readonly cep: FieldRef<"agendamentos", 'String'>
    readonly endereco: FieldRef<"agendamentos", 'String'>
    readonly data_registro: FieldRef<"agendamentos", 'DateTime'>
    readonly status: FieldRef<"agendamentos", 'agendamentos_status'>
  }
    

  // Custom InputTypes
  /**
   * agendamentos findUnique
   */
  export type agendamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos findUniqueOrThrow
   */
  export type agendamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos findFirst
   */
  export type agendamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamentos.
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamentos.
     */
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * agendamentos findFirstOrThrow
   */
  export type agendamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agendamentos.
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamentos.
     */
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * agendamentos findMany
   */
  export type agendamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter, which agendamentos to fetch.
     */
    where?: agendamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agendamentos to fetch.
     */
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agendamentos.
     */
    cursor?: agendamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agendamentos.
     */
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * agendamentos create
   */
  export type agendamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a agendamentos.
     */
    data: XOR<agendamentosCreateInput, agendamentosUncheckedCreateInput>
  }

  /**
   * agendamentos createMany
   */
  export type agendamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agendamentos.
     */
    data: agendamentosCreateManyInput | agendamentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agendamentos update
   */
  export type agendamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a agendamentos.
     */
    data: XOR<agendamentosUpdateInput, agendamentosUncheckedUpdateInput>
    /**
     * Choose, which agendamentos to update.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos updateMany
   */
  export type agendamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agendamentos.
     */
    data: XOR<agendamentosUpdateManyMutationInput, agendamentosUncheckedUpdateManyInput>
    /**
     * Filter which agendamentos to update
     */
    where?: agendamentosWhereInput
    /**
     * Limit how many agendamentos to update.
     */
    limit?: number
  }

  /**
   * agendamentos upsert
   */
  export type agendamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the agendamentos to update in case it exists.
     */
    where: agendamentosWhereUniqueInput
    /**
     * In case the agendamentos found by the `where` argument doesn't exist, create a new agendamentos with this data.
     */
    create: XOR<agendamentosCreateInput, agendamentosUncheckedCreateInput>
    /**
     * In case the agendamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agendamentosUpdateInput, agendamentosUncheckedUpdateInput>
  }

  /**
   * agendamentos delete
   */
  export type agendamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    /**
     * Filter which agendamentos to delete.
     */
    where: agendamentosWhereUniqueInput
  }

  /**
   * agendamentos deleteMany
   */
  export type agendamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agendamentos to delete
     */
    where?: agendamentosWhereInput
    /**
     * Limit how many agendamentos to delete.
     */
    limit?: number
  }

  /**
   * agendamentos.agendamento_participantes
   */
  export type agendamentos$agendamento_participantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_participantes
     */
    select?: agendamento_participantesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_participantes
     */
    omit?: agendamento_participantesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_participantesInclude<ExtArgs> | null
    where?: agendamento_participantesWhereInput
    orderBy?: agendamento_participantesOrderByWithRelationInput | agendamento_participantesOrderByWithRelationInput[]
    cursor?: agendamento_participantesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Agendamento_participantesScalarFieldEnum | Agendamento_participantesScalarFieldEnum[]
  }

  /**
   * agendamentos.agendamento_slots
   */
  export type agendamentos$agendamento_slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamento_slots
     */
    select?: agendamento_slotsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamento_slots
     */
    omit?: agendamento_slotsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamento_slotsInclude<ExtArgs> | null
    where?: agendamento_slotsWhereInput
    orderBy?: agendamento_slotsOrderByWithRelationInput | agendamento_slotsOrderByWithRelationInput[]
    cursor?: agendamento_slotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Agendamento_slotsScalarFieldEnum | Agendamento_slotsScalarFieldEnum[]
  }

  /**
   * agendamentos.cidadaos
   */
  export type agendamentos$cidadaosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    where?: cidadaosWhereInput
  }

  /**
   * agendamentos without action
   */
  export type agendamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
  }


  /**
   * Model cidadaos
   */

  export type AggregateCidadaos = {
    _count: CidadaosCountAggregateOutputType | null
    _avg: CidadaosAvgAggregateOutputType | null
    _sum: CidadaosSumAggregateOutputType | null
    _min: CidadaosMinAggregateOutputType | null
    _max: CidadaosMaxAggregateOutputType | null
  }

  export type CidadaosAvgAggregateOutputType = {
    id: number | null
  }

  export type CidadaosSumAggregateOutputType = {
    id: number | null
  }

  export type CidadaosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    senha_hash: string | null
    cep: string | null
    endereco: string | null
    criado_em: Date | null
    usuario: string | null
  }

  export type CidadaosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    senha_hash: string | null
    cep: string | null
    endereco: string | null
    criado_em: Date | null
    usuario: string | null
  }

  export type CidadaosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    senha_hash: number
    cep: number
    endereco: number
    criado_em: number
    usuario: number
    _all: number
  }


  export type CidadaosAvgAggregateInputType = {
    id?: true
  }

  export type CidadaosSumAggregateInputType = {
    id?: true
  }

  export type CidadaosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    senha_hash?: true
    cep?: true
    endereco?: true
    criado_em?: true
    usuario?: true
  }

  export type CidadaosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    senha_hash?: true
    cep?: true
    endereco?: true
    criado_em?: true
    usuario?: true
  }

  export type CidadaosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    senha_hash?: true
    cep?: true
    endereco?: true
    criado_em?: true
    usuario?: true
    _all?: true
  }

  export type CidadaosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cidadaos to aggregate.
     */
    where?: cidadaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cidadaos to fetch.
     */
    orderBy?: cidadaosOrderByWithRelationInput | cidadaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cidadaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cidadaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cidadaos
    **/
    _count?: true | CidadaosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CidadaosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CidadaosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CidadaosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CidadaosMaxAggregateInputType
  }

  export type GetCidadaosAggregateType<T extends CidadaosAggregateArgs> = {
        [P in keyof T & keyof AggregateCidadaos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCidadaos[P]>
      : GetScalarType<T[P], AggregateCidadaos[P]>
  }




  export type cidadaosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cidadaosWhereInput
    orderBy?: cidadaosOrderByWithAggregationInput | cidadaosOrderByWithAggregationInput[]
    by: CidadaosScalarFieldEnum[] | CidadaosScalarFieldEnum
    having?: cidadaosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CidadaosCountAggregateInputType | true
    _avg?: CidadaosAvgAggregateInputType
    _sum?: CidadaosSumAggregateInputType
    _min?: CidadaosMinAggregateInputType
    _max?: CidadaosMaxAggregateInputType
  }

  export type CidadaosGroupByOutputType = {
    id: number
    nome: string
    email: string
    telefone: string | null
    senha_hash: string
    cep: string | null
    endereco: string | null
    criado_em: Date
    usuario: string | null
    _count: CidadaosCountAggregateOutputType | null
    _avg: CidadaosAvgAggregateOutputType | null
    _sum: CidadaosSumAggregateOutputType | null
    _min: CidadaosMinAggregateOutputType | null
    _max: CidadaosMaxAggregateOutputType | null
  }

  type GetCidadaosGroupByPayload<T extends cidadaosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CidadaosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CidadaosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CidadaosGroupByOutputType[P]>
            : GetScalarType<T[P], CidadaosGroupByOutputType[P]>
        }
      >
    >


  export type cidadaosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    senha_hash?: boolean
    cep?: boolean
    endereco?: boolean
    criado_em?: boolean
    usuario?: boolean
    agendamentos?: boolean | cidadaos$agendamentosArgs<ExtArgs>
    _count?: boolean | CidadaosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidadaos"]>



  export type cidadaosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    senha_hash?: boolean
    cep?: boolean
    endereco?: boolean
    criado_em?: boolean
    usuario?: boolean
  }

  export type cidadaosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "senha_hash" | "cep" | "endereco" | "criado_em" | "usuario", ExtArgs["result"]["cidadaos"]>
  export type cidadaosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendamentos?: boolean | cidadaos$agendamentosArgs<ExtArgs>
    _count?: boolean | CidadaosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cidadaosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cidadaos"
    objects: {
      agendamentos: Prisma.$agendamentosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string | null
      senha_hash: string
      cep: string | null
      endereco: string | null
      criado_em: Date
      usuario: string | null
    }, ExtArgs["result"]["cidadaos"]>
    composites: {}
  }

  type cidadaosGetPayload<S extends boolean | null | undefined | cidadaosDefaultArgs> = $Result.GetResult<Prisma.$cidadaosPayload, S>

  type cidadaosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cidadaosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CidadaosCountAggregateInputType | true
    }

  export interface cidadaosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cidadaos'], meta: { name: 'cidadaos' } }
    /**
     * Find zero or one Cidadaos that matches the filter.
     * @param {cidadaosFindUniqueArgs} args - Arguments to find a Cidadaos
     * @example
     * // Get one Cidadaos
     * const cidadaos = await prisma.cidadaos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cidadaosFindUniqueArgs>(args: SelectSubset<T, cidadaosFindUniqueArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cidadaos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cidadaosFindUniqueOrThrowArgs} args - Arguments to find a Cidadaos
     * @example
     * // Get one Cidadaos
     * const cidadaos = await prisma.cidadaos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cidadaosFindUniqueOrThrowArgs>(args: SelectSubset<T, cidadaosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cidadaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cidadaosFindFirstArgs} args - Arguments to find a Cidadaos
     * @example
     * // Get one Cidadaos
     * const cidadaos = await prisma.cidadaos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cidadaosFindFirstArgs>(args?: SelectSubset<T, cidadaosFindFirstArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cidadaos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cidadaosFindFirstOrThrowArgs} args - Arguments to find a Cidadaos
     * @example
     * // Get one Cidadaos
     * const cidadaos = await prisma.cidadaos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cidadaosFindFirstOrThrowArgs>(args?: SelectSubset<T, cidadaosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cidadaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cidadaosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cidadaos
     * const cidadaos = await prisma.cidadaos.findMany()
     * 
     * // Get first 10 Cidadaos
     * const cidadaos = await prisma.cidadaos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cidadaosWithIdOnly = await prisma.cidadaos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cidadaosFindManyArgs>(args?: SelectSubset<T, cidadaosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cidadaos.
     * @param {cidadaosCreateArgs} args - Arguments to create a Cidadaos.
     * @example
     * // Create one Cidadaos
     * const Cidadaos = await prisma.cidadaos.create({
     *   data: {
     *     // ... data to create a Cidadaos
     *   }
     * })
     * 
     */
    create<T extends cidadaosCreateArgs>(args: SelectSubset<T, cidadaosCreateArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cidadaos.
     * @param {cidadaosCreateManyArgs} args - Arguments to create many Cidadaos.
     * @example
     * // Create many Cidadaos
     * const cidadaos = await prisma.cidadaos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cidadaosCreateManyArgs>(args?: SelectSubset<T, cidadaosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cidadaos.
     * @param {cidadaosDeleteArgs} args - Arguments to delete one Cidadaos.
     * @example
     * // Delete one Cidadaos
     * const Cidadaos = await prisma.cidadaos.delete({
     *   where: {
     *     // ... filter to delete one Cidadaos
     *   }
     * })
     * 
     */
    delete<T extends cidadaosDeleteArgs>(args: SelectSubset<T, cidadaosDeleteArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cidadaos.
     * @param {cidadaosUpdateArgs} args - Arguments to update one Cidadaos.
     * @example
     * // Update one Cidadaos
     * const cidadaos = await prisma.cidadaos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cidadaosUpdateArgs>(args: SelectSubset<T, cidadaosUpdateArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cidadaos.
     * @param {cidadaosDeleteManyArgs} args - Arguments to filter Cidadaos to delete.
     * @example
     * // Delete a few Cidadaos
     * const { count } = await prisma.cidadaos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cidadaosDeleteManyArgs>(args?: SelectSubset<T, cidadaosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cidadaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cidadaosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cidadaos
     * const cidadaos = await prisma.cidadaos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cidadaosUpdateManyArgs>(args: SelectSubset<T, cidadaosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cidadaos.
     * @param {cidadaosUpsertArgs} args - Arguments to update or create a Cidadaos.
     * @example
     * // Update or create a Cidadaos
     * const cidadaos = await prisma.cidadaos.upsert({
     *   create: {
     *     // ... data to create a Cidadaos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cidadaos we want to update
     *   }
     * })
     */
    upsert<T extends cidadaosUpsertArgs>(args: SelectSubset<T, cidadaosUpsertArgs<ExtArgs>>): Prisma__cidadaosClient<$Result.GetResult<Prisma.$cidadaosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cidadaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cidadaosCountArgs} args - Arguments to filter Cidadaos to count.
     * @example
     * // Count the number of Cidadaos
     * const count = await prisma.cidadaos.count({
     *   where: {
     *     // ... the filter for the Cidadaos we want to count
     *   }
     * })
    **/
    count<T extends cidadaosCountArgs>(
      args?: Subset<T, cidadaosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CidadaosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cidadaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadaosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CidadaosAggregateArgs>(args: Subset<T, CidadaosAggregateArgs>): Prisma.PrismaPromise<GetCidadaosAggregateType<T>>

    /**
     * Group by Cidadaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cidadaosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cidadaosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cidadaosGroupByArgs['orderBy'] }
        : { orderBy?: cidadaosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cidadaosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCidadaosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cidadaos model
   */
  readonly fields: cidadaosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cidadaos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cidadaosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendamentos<T extends cidadaos$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, cidadaos$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agendamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cidadaos model
   */
  interface cidadaosFieldRefs {
    readonly id: FieldRef<"cidadaos", 'Int'>
    readonly nome: FieldRef<"cidadaos", 'String'>
    readonly email: FieldRef<"cidadaos", 'String'>
    readonly telefone: FieldRef<"cidadaos", 'String'>
    readonly senha_hash: FieldRef<"cidadaos", 'String'>
    readonly cep: FieldRef<"cidadaos", 'String'>
    readonly endereco: FieldRef<"cidadaos", 'String'>
    readonly criado_em: FieldRef<"cidadaos", 'DateTime'>
    readonly usuario: FieldRef<"cidadaos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cidadaos findUnique
   */
  export type cidadaosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * Filter, which cidadaos to fetch.
     */
    where: cidadaosWhereUniqueInput
  }

  /**
   * cidadaos findUniqueOrThrow
   */
  export type cidadaosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * Filter, which cidadaos to fetch.
     */
    where: cidadaosWhereUniqueInput
  }

  /**
   * cidadaos findFirst
   */
  export type cidadaosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * Filter, which cidadaos to fetch.
     */
    where?: cidadaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cidadaos to fetch.
     */
    orderBy?: cidadaosOrderByWithRelationInput | cidadaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cidadaos.
     */
    cursor?: cidadaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cidadaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cidadaos.
     */
    distinct?: CidadaosScalarFieldEnum | CidadaosScalarFieldEnum[]
  }

  /**
   * cidadaos findFirstOrThrow
   */
  export type cidadaosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * Filter, which cidadaos to fetch.
     */
    where?: cidadaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cidadaos to fetch.
     */
    orderBy?: cidadaosOrderByWithRelationInput | cidadaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cidadaos.
     */
    cursor?: cidadaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cidadaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cidadaos.
     */
    distinct?: CidadaosScalarFieldEnum | CidadaosScalarFieldEnum[]
  }

  /**
   * cidadaos findMany
   */
  export type cidadaosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * Filter, which cidadaos to fetch.
     */
    where?: cidadaosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cidadaos to fetch.
     */
    orderBy?: cidadaosOrderByWithRelationInput | cidadaosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cidadaos.
     */
    cursor?: cidadaosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cidadaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cidadaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cidadaos.
     */
    distinct?: CidadaosScalarFieldEnum | CidadaosScalarFieldEnum[]
  }

  /**
   * cidadaos create
   */
  export type cidadaosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * The data needed to create a cidadaos.
     */
    data: XOR<cidadaosCreateInput, cidadaosUncheckedCreateInput>
  }

  /**
   * cidadaos createMany
   */
  export type cidadaosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cidadaos.
     */
    data: cidadaosCreateManyInput | cidadaosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cidadaos update
   */
  export type cidadaosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * The data needed to update a cidadaos.
     */
    data: XOR<cidadaosUpdateInput, cidadaosUncheckedUpdateInput>
    /**
     * Choose, which cidadaos to update.
     */
    where: cidadaosWhereUniqueInput
  }

  /**
   * cidadaos updateMany
   */
  export type cidadaosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cidadaos.
     */
    data: XOR<cidadaosUpdateManyMutationInput, cidadaosUncheckedUpdateManyInput>
    /**
     * Filter which cidadaos to update
     */
    where?: cidadaosWhereInput
    /**
     * Limit how many cidadaos to update.
     */
    limit?: number
  }

  /**
   * cidadaos upsert
   */
  export type cidadaosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * The filter to search for the cidadaos to update in case it exists.
     */
    where: cidadaosWhereUniqueInput
    /**
     * In case the cidadaos found by the `where` argument doesn't exist, create a new cidadaos with this data.
     */
    create: XOR<cidadaosCreateInput, cidadaosUncheckedCreateInput>
    /**
     * In case the cidadaos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cidadaosUpdateInput, cidadaosUncheckedUpdateInput>
  }

  /**
   * cidadaos delete
   */
  export type cidadaosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
    /**
     * Filter which cidadaos to delete.
     */
    where: cidadaosWhereUniqueInput
  }

  /**
   * cidadaos deleteMany
   */
  export type cidadaosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cidadaos to delete
     */
    where?: cidadaosWhereInput
    /**
     * Limit how many cidadaos to delete.
     */
    limit?: number
  }

  /**
   * cidadaos.agendamentos
   */
  export type cidadaos$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agendamentos
     */
    select?: agendamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the agendamentos
     */
    omit?: agendamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: agendamentosInclude<ExtArgs> | null
    where?: agendamentosWhereInput
    orderBy?: agendamentosOrderByWithRelationInput | agendamentosOrderByWithRelationInput[]
    cursor?: agendamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentosScalarFieldEnum | AgendamentosScalarFieldEnum[]
  }

  /**
   * cidadaos without action
   */
  export type cidadaosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cidadaos
     */
    select?: cidadaosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cidadaos
     */
    omit?: cidadaosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cidadaosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios_admin
   */

  export type AggregateUsuarios_admin = {
    _count: Usuarios_adminCountAggregateOutputType | null
    _avg: Usuarios_adminAvgAggregateOutputType | null
    _sum: Usuarios_adminSumAggregateOutputType | null
    _min: Usuarios_adminMinAggregateOutputType | null
    _max: Usuarios_adminMaxAggregateOutputType | null
  }

  export type Usuarios_adminAvgAggregateOutputType = {
    id: number | null
  }

  export type Usuarios_adminSumAggregateOutputType = {
    id: number | null
  }

  export type Usuarios_adminMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    papel: $Enums.usuarios_admin_papel | null
    criado_em: Date | null
    usuario: string | null
  }

  export type Usuarios_adminMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    papel: $Enums.usuarios_admin_papel | null
    criado_em: Date | null
    usuario: string | null
  }

  export type Usuarios_adminCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha_hash: number
    papel: number
    criado_em: number
    usuario: number
    _all: number
  }


  export type Usuarios_adminAvgAggregateInputType = {
    id?: true
  }

  export type Usuarios_adminSumAggregateInputType = {
    id?: true
  }

  export type Usuarios_adminMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    papel?: true
    criado_em?: true
    usuario?: true
  }

  export type Usuarios_adminMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    papel?: true
    criado_em?: true
    usuario?: true
  }

  export type Usuarios_adminCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha_hash?: true
    papel?: true
    criado_em?: true
    usuario?: true
    _all?: true
  }

  export type Usuarios_adminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_admin to aggregate.
     */
    where?: usuarios_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_admins to fetch.
     */
    orderBy?: usuarios_adminOrderByWithRelationInput | usuarios_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarios_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios_admins
    **/
    _count?: true | Usuarios_adminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuarios_adminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuarios_adminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuarios_adminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuarios_adminMaxAggregateInputType
  }

  export type GetUsuarios_adminAggregateType<T extends Usuarios_adminAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios_admin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios_admin[P]>
      : GetScalarType<T[P], AggregateUsuarios_admin[P]>
  }




  export type usuarios_adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarios_adminWhereInput
    orderBy?: usuarios_adminOrderByWithAggregationInput | usuarios_adminOrderByWithAggregationInput[]
    by: Usuarios_adminScalarFieldEnum[] | Usuarios_adminScalarFieldEnum
    having?: usuarios_adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuarios_adminCountAggregateInputType | true
    _avg?: Usuarios_adminAvgAggregateInputType
    _sum?: Usuarios_adminSumAggregateInputType
    _min?: Usuarios_adminMinAggregateInputType
    _max?: Usuarios_adminMaxAggregateInputType
  }

  export type Usuarios_adminGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha_hash: string
    papel: $Enums.usuarios_admin_papel
    criado_em: Date
    usuario: string | null
    _count: Usuarios_adminCountAggregateOutputType | null
    _avg: Usuarios_adminAvgAggregateOutputType | null
    _sum: Usuarios_adminSumAggregateOutputType | null
    _min: Usuarios_adminMinAggregateOutputType | null
    _max: Usuarios_adminMaxAggregateOutputType | null
  }

  type GetUsuarios_adminGroupByPayload<T extends usuarios_adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuarios_adminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuarios_adminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuarios_adminGroupByOutputType[P]>
            : GetScalarType<T[P], Usuarios_adminGroupByOutputType[P]>
        }
      >
    >


  export type usuarios_adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    papel?: boolean
    criado_em?: boolean
    usuario?: boolean
  }, ExtArgs["result"]["usuarios_admin"]>



  export type usuarios_adminSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    papel?: boolean
    criado_em?: boolean
    usuario?: boolean
  }

  export type usuarios_adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "papel" | "criado_em" | "usuario", ExtArgs["result"]["usuarios_admin"]>

  export type $usuarios_adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios_admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha_hash: string
      papel: $Enums.usuarios_admin_papel
      criado_em: Date
      usuario: string | null
    }, ExtArgs["result"]["usuarios_admin"]>
    composites: {}
  }

  type usuarios_adminGetPayload<S extends boolean | null | undefined | usuarios_adminDefaultArgs> = $Result.GetResult<Prisma.$usuarios_adminPayload, S>

  type usuarios_adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarios_adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuarios_adminCountAggregateInputType | true
    }

  export interface usuarios_adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios_admin'], meta: { name: 'usuarios_admin' } }
    /**
     * Find zero or one Usuarios_admin that matches the filter.
     * @param {usuarios_adminFindUniqueArgs} args - Arguments to find a Usuarios_admin
     * @example
     * // Get one Usuarios_admin
     * const usuarios_admin = await prisma.usuarios_admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarios_adminFindUniqueArgs>(args: SelectSubset<T, usuarios_adminFindUniqueArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios_admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarios_adminFindUniqueOrThrowArgs} args - Arguments to find a Usuarios_admin
     * @example
     * // Get one Usuarios_admin
     * const usuarios_admin = await prisma.usuarios_admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarios_adminFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarios_adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios_admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_adminFindFirstArgs} args - Arguments to find a Usuarios_admin
     * @example
     * // Get one Usuarios_admin
     * const usuarios_admin = await prisma.usuarios_admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarios_adminFindFirstArgs>(args?: SelectSubset<T, usuarios_adminFindFirstArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios_admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_adminFindFirstOrThrowArgs} args - Arguments to find a Usuarios_admin
     * @example
     * // Get one Usuarios_admin
     * const usuarios_admin = await prisma.usuarios_admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarios_adminFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarios_adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios_admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios_admins
     * const usuarios_admins = await prisma.usuarios_admin.findMany()
     * 
     * // Get first 10 Usuarios_admins
     * const usuarios_admins = await prisma.usuarios_admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarios_adminWithIdOnly = await prisma.usuarios_admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarios_adminFindManyArgs>(args?: SelectSubset<T, usuarios_adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios_admin.
     * @param {usuarios_adminCreateArgs} args - Arguments to create a Usuarios_admin.
     * @example
     * // Create one Usuarios_admin
     * const Usuarios_admin = await prisma.usuarios_admin.create({
     *   data: {
     *     // ... data to create a Usuarios_admin
     *   }
     * })
     * 
     */
    create<T extends usuarios_adminCreateArgs>(args: SelectSubset<T, usuarios_adminCreateArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios_admins.
     * @param {usuarios_adminCreateManyArgs} args - Arguments to create many Usuarios_admins.
     * @example
     * // Create many Usuarios_admins
     * const usuarios_admin = await prisma.usuarios_admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarios_adminCreateManyArgs>(args?: SelectSubset<T, usuarios_adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios_admin.
     * @param {usuarios_adminDeleteArgs} args - Arguments to delete one Usuarios_admin.
     * @example
     * // Delete one Usuarios_admin
     * const Usuarios_admin = await prisma.usuarios_admin.delete({
     *   where: {
     *     // ... filter to delete one Usuarios_admin
     *   }
     * })
     * 
     */
    delete<T extends usuarios_adminDeleteArgs>(args: SelectSubset<T, usuarios_adminDeleteArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios_admin.
     * @param {usuarios_adminUpdateArgs} args - Arguments to update one Usuarios_admin.
     * @example
     * // Update one Usuarios_admin
     * const usuarios_admin = await prisma.usuarios_admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarios_adminUpdateArgs>(args: SelectSubset<T, usuarios_adminUpdateArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios_admins.
     * @param {usuarios_adminDeleteManyArgs} args - Arguments to filter Usuarios_admins to delete.
     * @example
     * // Delete a few Usuarios_admins
     * const { count } = await prisma.usuarios_admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarios_adminDeleteManyArgs>(args?: SelectSubset<T, usuarios_adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios_admins
     * const usuarios_admin = await prisma.usuarios_admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarios_adminUpdateManyArgs>(args: SelectSubset<T, usuarios_adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios_admin.
     * @param {usuarios_adminUpsertArgs} args - Arguments to update or create a Usuarios_admin.
     * @example
     * // Update or create a Usuarios_admin
     * const usuarios_admin = await prisma.usuarios_admin.upsert({
     *   create: {
     *     // ... data to create a Usuarios_admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios_admin we want to update
     *   }
     * })
     */
    upsert<T extends usuarios_adminUpsertArgs>(args: SelectSubset<T, usuarios_adminUpsertArgs<ExtArgs>>): Prisma__usuarios_adminClient<$Result.GetResult<Prisma.$usuarios_adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios_admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_adminCountArgs} args - Arguments to filter Usuarios_admins to count.
     * @example
     * // Count the number of Usuarios_admins
     * const count = await prisma.usuarios_admin.count({
     *   where: {
     *     // ... the filter for the Usuarios_admins we want to count
     *   }
     * })
    **/
    count<T extends usuarios_adminCountArgs>(
      args?: Subset<T, usuarios_adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuarios_adminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuarios_adminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Usuarios_adminAggregateArgs>(args: Subset<T, Usuarios_adminAggregateArgs>): Prisma.PrismaPromise<GetUsuarios_adminAggregateType<T>>

    /**
     * Group by Usuarios_admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarios_adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarios_adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarios_adminGroupByArgs['orderBy'] }
        : { orderBy?: usuarios_adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarios_adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarios_adminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios_admin model
   */
  readonly fields: usuarios_adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios_admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarios_adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios_admin model
   */
  interface usuarios_adminFieldRefs {
    readonly id: FieldRef<"usuarios_admin", 'Int'>
    readonly nome: FieldRef<"usuarios_admin", 'String'>
    readonly email: FieldRef<"usuarios_admin", 'String'>
    readonly senha_hash: FieldRef<"usuarios_admin", 'String'>
    readonly papel: FieldRef<"usuarios_admin", 'usuarios_admin_papel'>
    readonly criado_em: FieldRef<"usuarios_admin", 'DateTime'>
    readonly usuario: FieldRef<"usuarios_admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuarios_admin findUnique
   */
  export type usuarios_adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * Filter, which usuarios_admin to fetch.
     */
    where: usuarios_adminWhereUniqueInput
  }

  /**
   * usuarios_admin findUniqueOrThrow
   */
  export type usuarios_adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * Filter, which usuarios_admin to fetch.
     */
    where: usuarios_adminWhereUniqueInput
  }

  /**
   * usuarios_admin findFirst
   */
  export type usuarios_adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * Filter, which usuarios_admin to fetch.
     */
    where?: usuarios_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_admins to fetch.
     */
    orderBy?: usuarios_adminOrderByWithRelationInput | usuarios_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_admins.
     */
    cursor?: usuarios_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_admins.
     */
    distinct?: Usuarios_adminScalarFieldEnum | Usuarios_adminScalarFieldEnum[]
  }

  /**
   * usuarios_admin findFirstOrThrow
   */
  export type usuarios_adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * Filter, which usuarios_admin to fetch.
     */
    where?: usuarios_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_admins to fetch.
     */
    orderBy?: usuarios_adminOrderByWithRelationInput | usuarios_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios_admins.
     */
    cursor?: usuarios_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_admins.
     */
    distinct?: Usuarios_adminScalarFieldEnum | Usuarios_adminScalarFieldEnum[]
  }

  /**
   * usuarios_admin findMany
   */
  export type usuarios_adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * Filter, which usuarios_admins to fetch.
     */
    where?: usuarios_adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios_admins to fetch.
     */
    orderBy?: usuarios_adminOrderByWithRelationInput | usuarios_adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios_admins.
     */
    cursor?: usuarios_adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios_admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios_admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios_admins.
     */
    distinct?: Usuarios_adminScalarFieldEnum | Usuarios_adminScalarFieldEnum[]
  }

  /**
   * usuarios_admin create
   */
  export type usuarios_adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * The data needed to create a usuarios_admin.
     */
    data: XOR<usuarios_adminCreateInput, usuarios_adminUncheckedCreateInput>
  }

  /**
   * usuarios_admin createMany
   */
  export type usuarios_adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios_admins.
     */
    data: usuarios_adminCreateManyInput | usuarios_adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios_admin update
   */
  export type usuarios_adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * The data needed to update a usuarios_admin.
     */
    data: XOR<usuarios_adminUpdateInput, usuarios_adminUncheckedUpdateInput>
    /**
     * Choose, which usuarios_admin to update.
     */
    where: usuarios_adminWhereUniqueInput
  }

  /**
   * usuarios_admin updateMany
   */
  export type usuarios_adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios_admins.
     */
    data: XOR<usuarios_adminUpdateManyMutationInput, usuarios_adminUncheckedUpdateManyInput>
    /**
     * Filter which usuarios_admins to update
     */
    where?: usuarios_adminWhereInput
    /**
     * Limit how many usuarios_admins to update.
     */
    limit?: number
  }

  /**
   * usuarios_admin upsert
   */
  export type usuarios_adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * The filter to search for the usuarios_admin to update in case it exists.
     */
    where: usuarios_adminWhereUniqueInput
    /**
     * In case the usuarios_admin found by the `where` argument doesn't exist, create a new usuarios_admin with this data.
     */
    create: XOR<usuarios_adminCreateInput, usuarios_adminUncheckedCreateInput>
    /**
     * In case the usuarios_admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarios_adminUpdateInput, usuarios_adminUncheckedUpdateInput>
  }

  /**
   * usuarios_admin delete
   */
  export type usuarios_adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
    /**
     * Filter which usuarios_admin to delete.
     */
    where: usuarios_adminWhereUniqueInput
  }

  /**
   * usuarios_admin deleteMany
   */
  export type usuarios_adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios_admins to delete
     */
    where?: usuarios_adminWhereInput
    /**
     * Limit how many usuarios_admins to delete.
     */
    limit?: number
  }

  /**
   * usuarios_admin without action
   */
  export type usuarios_adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios_admin
     */
    select?: usuarios_adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios_admin
     */
    omit?: usuarios_adminOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Agendamento_participantesScalarFieldEnum: {
    id: 'id',
    agendamento_id: 'agendamento_id',
    nome: 'nome',
    telefone: 'telefone',
    principal: 'principal'
  };

  export type Agendamento_participantesScalarFieldEnum = (typeof Agendamento_participantesScalarFieldEnum)[keyof typeof Agendamento_participantesScalarFieldEnum]


  export const Agendamento_slotsScalarFieldEnum: {
    id: 'id',
    agendamento_id: 'agendamento_id',
    data: 'data',
    horario_inicio: 'horario_inicio'
  };

  export type Agendamento_slotsScalarFieldEnum = (typeof Agendamento_slotsScalarFieldEnum)[keyof typeof Agendamento_slotsScalarFieldEnum]


  export const AgendamentosScalarFieldEnum: {
    id: 'id',
    cidadao_id: 'cidadao_id',
    nome: 'nome',
    motivo: 'motivo',
    tratativa: 'tratativa',
    data: 'data',
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

  export type AgendamentosScalarFieldEnum = (typeof AgendamentosScalarFieldEnum)[keyof typeof AgendamentosScalarFieldEnum]


  export const CidadaosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha_hash: 'senha_hash',
    cep: 'cep',
    endereco: 'endereco',
    criado_em: 'criado_em',
    usuario: 'usuario'
  };

  export type CidadaosScalarFieldEnum = (typeof CidadaosScalarFieldEnum)[keyof typeof CidadaosScalarFieldEnum]


  export const Usuarios_adminScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    papel: 'papel',
    criado_em: 'criado_em',
    usuario: 'usuario'
  };

  export type Usuarios_adminScalarFieldEnum = (typeof Usuarios_adminScalarFieldEnum)[keyof typeof Usuarios_adminScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const agendamento_participantesOrderByRelevanceFieldEnum: {
    nome: 'nome',
    telefone: 'telefone'
  };

  export type agendamento_participantesOrderByRelevanceFieldEnum = (typeof agendamento_participantesOrderByRelevanceFieldEnum)[keyof typeof agendamento_participantesOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const agendamentosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    motivo: 'motivo',
    tratativa: 'tratativa',
    email: 'email',
    telefone: 'telefone',
    cep: 'cep',
    endereco: 'endereco'
  };

  export type agendamentosOrderByRelevanceFieldEnum = (typeof agendamentosOrderByRelevanceFieldEnum)[keyof typeof agendamentosOrderByRelevanceFieldEnum]


  export const cidadaosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senha_hash: 'senha_hash',
    cep: 'cep',
    endereco: 'endereco',
    usuario: 'usuario'
  };

  export type cidadaosOrderByRelevanceFieldEnum = (typeof cidadaosOrderByRelevanceFieldEnum)[keyof typeof cidadaosOrderByRelevanceFieldEnum]


  export const usuarios_adminOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    usuario: 'usuario'
  };

  export type usuarios_adminOrderByRelevanceFieldEnum = (typeof usuarios_adminOrderByRelevanceFieldEnum)[keyof typeof usuarios_adminOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'agendamentos_atendimento'
   */
  export type Enumagendamentos_atendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'agendamentos_atendimento'>
    


  /**
   * Reference to a field of type 'agendamentos_tipo_atendimento'
   */
  export type Enumagendamentos_tipo_atendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'agendamentos_tipo_atendimento'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'agendamentos_status'
   */
  export type Enumagendamentos_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'agendamentos_status'>
    


  /**
   * Reference to a field of type 'usuarios_admin_papel'
   */
  export type Enumusuarios_admin_papelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'usuarios_admin_papel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type agendamento_participantesWhereInput = {
    AND?: agendamento_participantesWhereInput | agendamento_participantesWhereInput[]
    OR?: agendamento_participantesWhereInput[]
    NOT?: agendamento_participantesWhereInput | agendamento_participantesWhereInput[]
    id?: IntFilter<"agendamento_participantes"> | number
    agendamento_id?: IntFilter<"agendamento_participantes"> | number
    nome?: StringFilter<"agendamento_participantes"> | string
    telefone?: StringNullableFilter<"agendamento_participantes"> | string | null
    principal?: BoolFilter<"agendamento_participantes"> | boolean
    agendamentos?: XOR<AgendamentosScalarRelationFilter, agendamentosWhereInput>
  }

  export type agendamento_participantesOrderByWithRelationInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    principal?: SortOrder
    agendamentos?: agendamentosOrderByWithRelationInput
    _relevance?: agendamento_participantesOrderByRelevanceInput
  }

  export type agendamento_participantesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: agendamento_participantesWhereInput | agendamento_participantesWhereInput[]
    OR?: agendamento_participantesWhereInput[]
    NOT?: agendamento_participantesWhereInput | agendamento_participantesWhereInput[]
    agendamento_id?: IntFilter<"agendamento_participantes"> | number
    nome?: StringFilter<"agendamento_participantes"> | string
    telefone?: StringNullableFilter<"agendamento_participantes"> | string | null
    principal?: BoolFilter<"agendamento_participantes"> | boolean
    agendamentos?: XOR<AgendamentosScalarRelationFilter, agendamentosWhereInput>
  }, "id">

  export type agendamento_participantesOrderByWithAggregationInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrderInput | SortOrder
    principal?: SortOrder
    _count?: agendamento_participantesCountOrderByAggregateInput
    _avg?: agendamento_participantesAvgOrderByAggregateInput
    _max?: agendamento_participantesMaxOrderByAggregateInput
    _min?: agendamento_participantesMinOrderByAggregateInput
    _sum?: agendamento_participantesSumOrderByAggregateInput
  }

  export type agendamento_participantesScalarWhereWithAggregatesInput = {
    AND?: agendamento_participantesScalarWhereWithAggregatesInput | agendamento_participantesScalarWhereWithAggregatesInput[]
    OR?: agendamento_participantesScalarWhereWithAggregatesInput[]
    NOT?: agendamento_participantesScalarWhereWithAggregatesInput | agendamento_participantesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"agendamento_participantes"> | number
    agendamento_id?: IntWithAggregatesFilter<"agendamento_participantes"> | number
    nome?: StringWithAggregatesFilter<"agendamento_participantes"> | string
    telefone?: StringNullableWithAggregatesFilter<"agendamento_participantes"> | string | null
    principal?: BoolWithAggregatesFilter<"agendamento_participantes"> | boolean
  }

  export type agendamento_slotsWhereInput = {
    AND?: agendamento_slotsWhereInput | agendamento_slotsWhereInput[]
    OR?: agendamento_slotsWhereInput[]
    NOT?: agendamento_slotsWhereInput | agendamento_slotsWhereInput[]
    id?: BigIntFilter<"agendamento_slots"> | bigint | number
    agendamento_id?: IntFilter<"agendamento_slots"> | number
    data?: DateTimeFilter<"agendamento_slots"> | Date | string
    horario_inicio?: DateTimeFilter<"agendamento_slots"> | Date | string
    agendamentos?: XOR<AgendamentosScalarRelationFilter, agendamentosWhereInput>
  }

  export type agendamento_slotsOrderByWithRelationInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    agendamentos?: agendamentosOrderByWithRelationInput
  }

  export type agendamento_slotsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: agendamento_slotsWhereInput | agendamento_slotsWhereInput[]
    OR?: agendamento_slotsWhereInput[]
    NOT?: agendamento_slotsWhereInput | agendamento_slotsWhereInput[]
    agendamento_id?: IntFilter<"agendamento_slots"> | number
    data?: DateTimeFilter<"agendamento_slots"> | Date | string
    horario_inicio?: DateTimeFilter<"agendamento_slots"> | Date | string
    agendamentos?: XOR<AgendamentosScalarRelationFilter, agendamentosWhereInput>
  }, "id">

  export type agendamento_slotsOrderByWithAggregationInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
    _count?: agendamento_slotsCountOrderByAggregateInput
    _avg?: agendamento_slotsAvgOrderByAggregateInput
    _max?: agendamento_slotsMaxOrderByAggregateInput
    _min?: agendamento_slotsMinOrderByAggregateInput
    _sum?: agendamento_slotsSumOrderByAggregateInput
  }

  export type agendamento_slotsScalarWhereWithAggregatesInput = {
    AND?: agendamento_slotsScalarWhereWithAggregatesInput | agendamento_slotsScalarWhereWithAggregatesInput[]
    OR?: agendamento_slotsScalarWhereWithAggregatesInput[]
    NOT?: agendamento_slotsScalarWhereWithAggregatesInput | agendamento_slotsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"agendamento_slots"> | bigint | number
    agendamento_id?: IntWithAggregatesFilter<"agendamento_slots"> | number
    data?: DateTimeWithAggregatesFilter<"agendamento_slots"> | Date | string
    horario_inicio?: DateTimeWithAggregatesFilter<"agendamento_slots"> | Date | string
  }

  export type agendamentosWhereInput = {
    AND?: agendamentosWhereInput | agendamentosWhereInput[]
    OR?: agendamentosWhereInput[]
    NOT?: agendamentosWhereInput | agendamentosWhereInput[]
    id?: IntFilter<"agendamentos"> | number
    cidadao_id?: IntNullableFilter<"agendamentos"> | number | null
    nome?: StringFilter<"agendamentos"> | string
    motivo?: StringNullableFilter<"agendamentos"> | string | null
    tratativa?: StringNullableFilter<"agendamentos"> | string | null
    data?: DateTimeFilter<"agendamentos"> | Date | string
    horario?: DateTimeFilter<"agendamentos"> | Date | string
    atendimento?: Enumagendamentos_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento
    blocos_json?: JsonNullableFilter<"agendamentos">
    email?: StringNullableFilter<"agendamentos"> | string | null
    telefone?: StringNullableFilter<"agendamentos"> | string | null
    cep?: StringNullableFilter<"agendamentos"> | string | null
    endereco?: StringNullableFilter<"agendamentos"> | string | null
    data_registro?: DateTimeFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status
    agendamento_participantes?: Agendamento_participantesListRelationFilter
    agendamento_slots?: Agendamento_slotsListRelationFilter
    cidadaos?: XOR<CidadaosNullableScalarRelationFilter, cidadaosWhereInput> | null
  }

  export type agendamentosOrderByWithRelationInput = {
    id?: SortOrder
    cidadao_id?: SortOrderInput | SortOrder
    nome?: SortOrder
    motivo?: SortOrderInput | SortOrder
    tratativa?: SortOrderInput | SortOrder
    data?: SortOrder
    horario?: SortOrder
    atendimento?: SortOrder
    tipo_atendimento?: SortOrder
    blocos_json?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    data_registro?: SortOrder
    status?: SortOrder
    agendamento_participantes?: agendamento_participantesOrderByRelationAggregateInput
    agendamento_slots?: agendamento_slotsOrderByRelationAggregateInput
    cidadaos?: cidadaosOrderByWithRelationInput
    _relevance?: agendamentosOrderByRelevanceInput
  }

  export type agendamentosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: agendamentosWhereInput | agendamentosWhereInput[]
    OR?: agendamentosWhereInput[]
    NOT?: agendamentosWhereInput | agendamentosWhereInput[]
    cidadao_id?: IntNullableFilter<"agendamentos"> | number | null
    nome?: StringFilter<"agendamentos"> | string
    motivo?: StringNullableFilter<"agendamentos"> | string | null
    tratativa?: StringNullableFilter<"agendamentos"> | string | null
    data?: DateTimeFilter<"agendamentos"> | Date | string
    horario?: DateTimeFilter<"agendamentos"> | Date | string
    atendimento?: Enumagendamentos_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento
    blocos_json?: JsonNullableFilter<"agendamentos">
    email?: StringNullableFilter<"agendamentos"> | string | null
    telefone?: StringNullableFilter<"agendamentos"> | string | null
    cep?: StringNullableFilter<"agendamentos"> | string | null
    endereco?: StringNullableFilter<"agendamentos"> | string | null
    data_registro?: DateTimeFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status
    agendamento_participantes?: Agendamento_participantesListRelationFilter
    agendamento_slots?: Agendamento_slotsListRelationFilter
    cidadaos?: XOR<CidadaosNullableScalarRelationFilter, cidadaosWhereInput> | null
  }, "id">

  export type agendamentosOrderByWithAggregationInput = {
    id?: SortOrder
    cidadao_id?: SortOrderInput | SortOrder
    nome?: SortOrder
    motivo?: SortOrderInput | SortOrder
    tratativa?: SortOrderInput | SortOrder
    data?: SortOrder
    horario?: SortOrder
    atendimento?: SortOrder
    tipo_atendimento?: SortOrder
    blocos_json?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    data_registro?: SortOrder
    status?: SortOrder
    _count?: agendamentosCountOrderByAggregateInput
    _avg?: agendamentosAvgOrderByAggregateInput
    _max?: agendamentosMaxOrderByAggregateInput
    _min?: agendamentosMinOrderByAggregateInput
    _sum?: agendamentosSumOrderByAggregateInput
  }

  export type agendamentosScalarWhereWithAggregatesInput = {
    AND?: agendamentosScalarWhereWithAggregatesInput | agendamentosScalarWhereWithAggregatesInput[]
    OR?: agendamentosScalarWhereWithAggregatesInput[]
    NOT?: agendamentosScalarWhereWithAggregatesInput | agendamentosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"agendamentos"> | number
    cidadao_id?: IntNullableWithAggregatesFilter<"agendamentos"> | number | null
    nome?: StringWithAggregatesFilter<"agendamentos"> | string
    motivo?: StringNullableWithAggregatesFilter<"agendamentos"> | string | null
    tratativa?: StringNullableWithAggregatesFilter<"agendamentos"> | string | null
    data?: DateTimeWithAggregatesFilter<"agendamentos"> | Date | string
    horario?: DateTimeWithAggregatesFilter<"agendamentos"> | Date | string
    atendimento?: Enumagendamentos_atendimentoWithAggregatesFilter<"agendamentos"> | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoWithAggregatesFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento
    blocos_json?: JsonNullableWithAggregatesFilter<"agendamentos">
    email?: StringNullableWithAggregatesFilter<"agendamentos"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"agendamentos"> | string | null
    cep?: StringNullableWithAggregatesFilter<"agendamentos"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"agendamentos"> | string | null
    data_registro?: DateTimeWithAggregatesFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusWithAggregatesFilter<"agendamentos"> | $Enums.agendamentos_status
  }

  export type cidadaosWhereInput = {
    AND?: cidadaosWhereInput | cidadaosWhereInput[]
    OR?: cidadaosWhereInput[]
    NOT?: cidadaosWhereInput | cidadaosWhereInput[]
    id?: IntFilter<"cidadaos"> | number
    nome?: StringFilter<"cidadaos"> | string
    email?: StringFilter<"cidadaos"> | string
    telefone?: StringNullableFilter<"cidadaos"> | string | null
    senha_hash?: StringFilter<"cidadaos"> | string
    cep?: StringNullableFilter<"cidadaos"> | string | null
    endereco?: StringNullableFilter<"cidadaos"> | string | null
    criado_em?: DateTimeFilter<"cidadaos"> | Date | string
    usuario?: StringNullableFilter<"cidadaos"> | string | null
    agendamentos?: AgendamentosListRelationFilter
  }

  export type cidadaosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    senha_hash?: SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    usuario?: SortOrderInput | SortOrder
    agendamentos?: agendamentosOrderByRelationAggregateInput
    _relevance?: cidadaosOrderByRelevanceInput
  }

  export type cidadaosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    usuario?: string
    AND?: cidadaosWhereInput | cidadaosWhereInput[]
    OR?: cidadaosWhereInput[]
    NOT?: cidadaosWhereInput | cidadaosWhereInput[]
    nome?: StringFilter<"cidadaos"> | string
    telefone?: StringNullableFilter<"cidadaos"> | string | null
    senha_hash?: StringFilter<"cidadaos"> | string
    cep?: StringNullableFilter<"cidadaos"> | string | null
    endereco?: StringNullableFilter<"cidadaos"> | string | null
    criado_em?: DateTimeFilter<"cidadaos"> | Date | string
    agendamentos?: AgendamentosListRelationFilter
  }, "id" | "email" | "usuario">

  export type cidadaosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrderInput | SortOrder
    senha_hash?: SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrderInput | SortOrder
    criado_em?: SortOrder
    usuario?: SortOrderInput | SortOrder
    _count?: cidadaosCountOrderByAggregateInput
    _avg?: cidadaosAvgOrderByAggregateInput
    _max?: cidadaosMaxOrderByAggregateInput
    _min?: cidadaosMinOrderByAggregateInput
    _sum?: cidadaosSumOrderByAggregateInput
  }

  export type cidadaosScalarWhereWithAggregatesInput = {
    AND?: cidadaosScalarWhereWithAggregatesInput | cidadaosScalarWhereWithAggregatesInput[]
    OR?: cidadaosScalarWhereWithAggregatesInput[]
    NOT?: cidadaosScalarWhereWithAggregatesInput | cidadaosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cidadaos"> | number
    nome?: StringWithAggregatesFilter<"cidadaos"> | string
    email?: StringWithAggregatesFilter<"cidadaos"> | string
    telefone?: StringNullableWithAggregatesFilter<"cidadaos"> | string | null
    senha_hash?: StringWithAggregatesFilter<"cidadaos"> | string
    cep?: StringNullableWithAggregatesFilter<"cidadaos"> | string | null
    endereco?: StringNullableWithAggregatesFilter<"cidadaos"> | string | null
    criado_em?: DateTimeWithAggregatesFilter<"cidadaos"> | Date | string
    usuario?: StringNullableWithAggregatesFilter<"cidadaos"> | string | null
  }

  export type usuarios_adminWhereInput = {
    AND?: usuarios_adminWhereInput | usuarios_adminWhereInput[]
    OR?: usuarios_adminWhereInput[]
    NOT?: usuarios_adminWhereInput | usuarios_adminWhereInput[]
    id?: IntFilter<"usuarios_admin"> | number
    nome?: StringFilter<"usuarios_admin"> | string
    email?: StringFilter<"usuarios_admin"> | string
    senha_hash?: StringFilter<"usuarios_admin"> | string
    papel?: Enumusuarios_admin_papelFilter<"usuarios_admin"> | $Enums.usuarios_admin_papel
    criado_em?: DateTimeFilter<"usuarios_admin"> | Date | string
    usuario?: StringNullableFilter<"usuarios_admin"> | string | null
  }

  export type usuarios_adminOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrderInput | SortOrder
    _relevance?: usuarios_adminOrderByRelevanceInput
  }

  export type usuarios_adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    usuario?: string
    AND?: usuarios_adminWhereInput | usuarios_adminWhereInput[]
    OR?: usuarios_adminWhereInput[]
    NOT?: usuarios_adminWhereInput | usuarios_adminWhereInput[]
    nome?: StringFilter<"usuarios_admin"> | string
    senha_hash?: StringFilter<"usuarios_admin"> | string
    papel?: Enumusuarios_admin_papelFilter<"usuarios_admin"> | $Enums.usuarios_admin_papel
    criado_em?: DateTimeFilter<"usuarios_admin"> | Date | string
  }, "id" | "email" | "usuario">

  export type usuarios_adminOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrderInput | SortOrder
    _count?: usuarios_adminCountOrderByAggregateInput
    _avg?: usuarios_adminAvgOrderByAggregateInput
    _max?: usuarios_adminMaxOrderByAggregateInput
    _min?: usuarios_adminMinOrderByAggregateInput
    _sum?: usuarios_adminSumOrderByAggregateInput
  }

  export type usuarios_adminScalarWhereWithAggregatesInput = {
    AND?: usuarios_adminScalarWhereWithAggregatesInput | usuarios_adminScalarWhereWithAggregatesInput[]
    OR?: usuarios_adminScalarWhereWithAggregatesInput[]
    NOT?: usuarios_adminScalarWhereWithAggregatesInput | usuarios_adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios_admin"> | number
    nome?: StringWithAggregatesFilter<"usuarios_admin"> | string
    email?: StringWithAggregatesFilter<"usuarios_admin"> | string
    senha_hash?: StringWithAggregatesFilter<"usuarios_admin"> | string
    papel?: Enumusuarios_admin_papelWithAggregatesFilter<"usuarios_admin"> | $Enums.usuarios_admin_papel
    criado_em?: DateTimeWithAggregatesFilter<"usuarios_admin"> | Date | string
    usuario?: StringNullableWithAggregatesFilter<"usuarios_admin"> | string | null
  }

  export type agendamento_participantesCreateInput = {
    nome: string
    telefone?: string | null
    principal?: boolean
    agendamentos: agendamentosCreateNestedOneWithoutAgendamento_participantesInput
  }

  export type agendamento_participantesUncheckedCreateInput = {
    id?: number
    agendamento_id: number
    nome: string
    telefone?: string | null
    principal?: boolean
  }

  export type agendamento_participantesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: BoolFieldUpdateOperationsInput | boolean
    agendamentos?: agendamentosUpdateOneRequiredWithoutAgendamento_participantesNestedInput
  }

  export type agendamento_participantesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    agendamento_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type agendamento_participantesCreateManyInput = {
    id?: number
    agendamento_id: number
    nome: string
    telefone?: string | null
    principal?: boolean
  }

  export type agendamento_participantesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type agendamento_participantesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    agendamento_id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type agendamento_slotsCreateInput = {
    id?: bigint | number
    data: Date | string
    horario_inicio: Date | string
    agendamentos: agendamentosCreateNestedOneWithoutAgendamento_slotsInput
  }

  export type agendamento_slotsUncheckedCreateInput = {
    id?: bigint | number
    agendamento_id: number
    data: Date | string
    horario_inicio: Date | string
  }

  export type agendamento_slotsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    agendamentos?: agendamentosUpdateOneRequiredWithoutAgendamento_slotsNestedInput
  }

  export type agendamento_slotsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    agendamento_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type agendamento_slotsCreateManyInput = {
    id?: bigint | number
    agendamento_id: number
    data: Date | string
    horario_inicio: Date | string
  }

  export type agendamento_slotsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type agendamento_slotsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    agendamento_id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type agendamentosCreateInput = {
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesCreateNestedManyWithoutAgendamentosInput
    agendamento_slots?: agendamento_slotsCreateNestedManyWithoutAgendamentosInput
    cidadaos?: cidadaosCreateNestedOneWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateInput = {
    id?: number
    cidadao_id?: number | null
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput
    agendamento_slots?: agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput
  }

  export type agendamentosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUpdateManyWithoutAgendamentosNestedInput
    agendamento_slots?: agendamento_slotsUpdateManyWithoutAgendamentosNestedInput
    cidadaos?: cidadaosUpdateOneWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadao_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput
    agendamento_slots?: agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput
  }

  export type agendamentosCreateManyInput = {
    id?: number
    cidadao_id?: number | null
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
  }

  export type agendamentosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
  }

  export type agendamentosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadao_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
  }

  export type cidadaosCreateInput = {
    nome: string
    email: string
    telefone?: string | null
    senha_hash: string
    cep?: string | null
    endereco?: string | null
    criado_em?: Date | string
    usuario?: string | null
    agendamentos?: agendamentosCreateNestedManyWithoutCidadaosInput
  }

  export type cidadaosUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone?: string | null
    senha_hash: string
    cep?: string | null
    endereco?: string | null
    criado_em?: Date | string
    usuario?: string | null
    agendamentos?: agendamentosUncheckedCreateNestedManyWithoutCidadaosInput
  }

  export type cidadaosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUpdateManyWithoutCidadaosNestedInput
  }

  export type cidadaosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
    agendamentos?: agendamentosUncheckedUpdateManyWithoutCidadaosNestedInput
  }

  export type cidadaosCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone?: string | null
    senha_hash: string
    cep?: string | null
    endereco?: string | null
    criado_em?: Date | string
    usuario?: string | null
  }

  export type cidadaosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cidadaosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_adminCreateInput = {
    nome: string
    email: string
    senha_hash: string
    papel?: $Enums.usuarios_admin_papel
    criado_em?: Date | string
    usuario?: string | null
  }

  export type usuarios_adminUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    papel?: $Enums.usuarios_admin_papel
    criado_em?: Date | string
    usuario?: string | null
  }

  export type usuarios_adminUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    papel?: Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    papel?: Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_adminCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha_hash: string
    papel?: $Enums.usuarios_admin_papel
    criado_em?: Date | string
    usuario?: string | null
  }

  export type usuarios_adminUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    papel?: Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuarios_adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    papel?: Enumusuarios_admin_papelFieldUpdateOperationsInput | $Enums.usuarios_admin_papel
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AgendamentosScalarRelationFilter = {
    is?: agendamentosWhereInput
    isNot?: agendamentosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type agendamento_participantesOrderByRelevanceInput = {
    fields: agendamento_participantesOrderByRelevanceFieldEnum | agendamento_participantesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type agendamento_participantesCountOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    principal?: SortOrder
  }

  export type agendamento_participantesAvgOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
  }

  export type agendamento_participantesMaxOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    principal?: SortOrder
  }

  export type agendamento_participantesMinOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    nome?: SortOrder
    telefone?: SortOrder
    principal?: SortOrder
  }

  export type agendamento_participantesSumOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type agendamento_slotsCountOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
  }

  export type agendamento_slotsAvgOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
  }

  export type agendamento_slotsMaxOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
  }

  export type agendamento_slotsMinOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
    data?: SortOrder
    horario_inicio?: SortOrder
  }

  export type agendamento_slotsSumOrderByAggregateInput = {
    id?: SortOrder
    agendamento_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Enumagendamentos_atendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_atendimento | Enumagendamentos_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_atendimento[]
    notIn?: $Enums.agendamentos_atendimento[]
    not?: NestedEnumagendamentos_atendimentoFilter<$PrismaModel> | $Enums.agendamentos_atendimento
  }

  export type Enumagendamentos_tipo_atendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_tipo_atendimento | Enumagendamentos_tipo_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_tipo_atendimento[]
    notIn?: $Enums.agendamentos_tipo_atendimento[]
    not?: NestedEnumagendamentos_tipo_atendimentoFilter<$PrismaModel> | $Enums.agendamentos_tipo_atendimento
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Enumagendamentos_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusFilter<$PrismaModel> | $Enums.agendamentos_status
  }

  export type Agendamento_participantesListRelationFilter = {
    every?: agendamento_participantesWhereInput
    some?: agendamento_participantesWhereInput
    none?: agendamento_participantesWhereInput
  }

  export type Agendamento_slotsListRelationFilter = {
    every?: agendamento_slotsWhereInput
    some?: agendamento_slotsWhereInput
    none?: agendamento_slotsWhereInput
  }

  export type CidadaosNullableScalarRelationFilter = {
    is?: cidadaosWhereInput | null
    isNot?: cidadaosWhereInput | null
  }

  export type agendamento_participantesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type agendamento_slotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type agendamentosOrderByRelevanceInput = {
    fields: agendamentosOrderByRelevanceFieldEnum | agendamentosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type agendamentosCountOrderByAggregateInput = {
    id?: SortOrder
    cidadao_id?: SortOrder
    nome?: SortOrder
    motivo?: SortOrder
    tratativa?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    atendimento?: SortOrder
    tipo_atendimento?: SortOrder
    blocos_json?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    data_registro?: SortOrder
    status?: SortOrder
  }

  export type agendamentosAvgOrderByAggregateInput = {
    id?: SortOrder
    cidadao_id?: SortOrder
  }

  export type agendamentosMaxOrderByAggregateInput = {
    id?: SortOrder
    cidadao_id?: SortOrder
    nome?: SortOrder
    motivo?: SortOrder
    tratativa?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    atendimento?: SortOrder
    tipo_atendimento?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    data_registro?: SortOrder
    status?: SortOrder
  }

  export type agendamentosMinOrderByAggregateInput = {
    id?: SortOrder
    cidadao_id?: SortOrder
    nome?: SortOrder
    motivo?: SortOrder
    tratativa?: SortOrder
    data?: SortOrder
    horario?: SortOrder
    atendimento?: SortOrder
    tipo_atendimento?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    data_registro?: SortOrder
    status?: SortOrder
  }

  export type agendamentosSumOrderByAggregateInput = {
    id?: SortOrder
    cidadao_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumagendamentos_atendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_atendimento | Enumagendamentos_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_atendimento[]
    notIn?: $Enums.agendamentos_atendimento[]
    not?: NestedEnumagendamentos_atendimentoWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_atendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_atendimentoFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_atendimentoFilter<$PrismaModel>
  }

  export type Enumagendamentos_tipo_atendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_tipo_atendimento | Enumagendamentos_tipo_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_tipo_atendimento[]
    notIn?: $Enums.agendamentos_tipo_atendimento[]
    not?: NestedEnumagendamentos_tipo_atendimentoWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_tipo_atendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_tipo_atendimentoFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_tipo_atendimentoFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type Enumagendamentos_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_statusFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_statusFilter<$PrismaModel>
  }

  export type AgendamentosListRelationFilter = {
    every?: agendamentosWhereInput
    some?: agendamentosWhereInput
    none?: agendamentosWhereInput
  }

  export type agendamentosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cidadaosOrderByRelevanceInput = {
    fields: cidadaosOrderByRelevanceFieldEnum | cidadaosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cidadaosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha_hash?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrder
  }

  export type cidadaosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cidadaosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha_hash?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrder
  }

  export type cidadaosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    senha_hash?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrder
  }

  export type cidadaosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusuarios_admin_papelFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_admin_papel | Enumusuarios_admin_papelFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_admin_papel[]
    notIn?: $Enums.usuarios_admin_papel[]
    not?: NestedEnumusuarios_admin_papelFilter<$PrismaModel> | $Enums.usuarios_admin_papel
  }

  export type usuarios_adminOrderByRelevanceInput = {
    fields: usuarios_adminOrderByRelevanceFieldEnum | usuarios_adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarios_adminCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrder
  }

  export type usuarios_adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarios_adminMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrder
  }

  export type usuarios_adminMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    papel?: SortOrder
    criado_em?: SortOrder
    usuario?: SortOrder
  }

  export type usuarios_adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumusuarios_admin_papelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_admin_papel | Enumusuarios_admin_papelFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_admin_papel[]
    notIn?: $Enums.usuarios_admin_papel[]
    not?: NestedEnumusuarios_admin_papelWithAggregatesFilter<$PrismaModel> | $Enums.usuarios_admin_papel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuarios_admin_papelFilter<$PrismaModel>
    _max?: NestedEnumusuarios_admin_papelFilter<$PrismaModel>
  }

  export type agendamentosCreateNestedOneWithoutAgendamento_participantesInput = {
    create?: XOR<agendamentosCreateWithoutAgendamento_participantesInput, agendamentosUncheckedCreateWithoutAgendamento_participantesInput>
    connectOrCreate?: agendamentosCreateOrConnectWithoutAgendamento_participantesInput
    connect?: agendamentosWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type agendamentosUpdateOneRequiredWithoutAgendamento_participantesNestedInput = {
    create?: XOR<agendamentosCreateWithoutAgendamento_participantesInput, agendamentosUncheckedCreateWithoutAgendamento_participantesInput>
    connectOrCreate?: agendamentosCreateOrConnectWithoutAgendamento_participantesInput
    upsert?: agendamentosUpsertWithoutAgendamento_participantesInput
    connect?: agendamentosWhereUniqueInput
    update?: XOR<XOR<agendamentosUpdateToOneWithWhereWithoutAgendamento_participantesInput, agendamentosUpdateWithoutAgendamento_participantesInput>, agendamentosUncheckedUpdateWithoutAgendamento_participantesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type agendamentosCreateNestedOneWithoutAgendamento_slotsInput = {
    create?: XOR<agendamentosCreateWithoutAgendamento_slotsInput, agendamentosUncheckedCreateWithoutAgendamento_slotsInput>
    connectOrCreate?: agendamentosCreateOrConnectWithoutAgendamento_slotsInput
    connect?: agendamentosWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type agendamentosUpdateOneRequiredWithoutAgendamento_slotsNestedInput = {
    create?: XOR<agendamentosCreateWithoutAgendamento_slotsInput, agendamentosUncheckedCreateWithoutAgendamento_slotsInput>
    connectOrCreate?: agendamentosCreateOrConnectWithoutAgendamento_slotsInput
    upsert?: agendamentosUpsertWithoutAgendamento_slotsInput
    connect?: agendamentosWhereUniqueInput
    update?: XOR<XOR<agendamentosUpdateToOneWithWhereWithoutAgendamento_slotsInput, agendamentosUpdateWithoutAgendamento_slotsInput>, agendamentosUncheckedUpdateWithoutAgendamento_slotsInput>
  }

  export type agendamento_participantesCreateNestedManyWithoutAgendamentosInput = {
    create?: XOR<agendamento_participantesCreateWithoutAgendamentosInput, agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | agendamento_participantesCreateWithoutAgendamentosInput[] | agendamento_participantesUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_participantesCreateOrConnectWithoutAgendamentosInput | agendamento_participantesCreateOrConnectWithoutAgendamentosInput[]
    createMany?: agendamento_participantesCreateManyAgendamentosInputEnvelope
    connect?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
  }

  export type agendamento_slotsCreateNestedManyWithoutAgendamentosInput = {
    create?: XOR<agendamento_slotsCreateWithoutAgendamentosInput, agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | agendamento_slotsCreateWithoutAgendamentosInput[] | agendamento_slotsUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_slotsCreateOrConnectWithoutAgendamentosInput | agendamento_slotsCreateOrConnectWithoutAgendamentosInput[]
    createMany?: agendamento_slotsCreateManyAgendamentosInputEnvelope
    connect?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
  }

  export type cidadaosCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<cidadaosCreateWithoutAgendamentosInput, cidadaosUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: cidadaosCreateOrConnectWithoutAgendamentosInput
    connect?: cidadaosWhereUniqueInput
  }

  export type agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput = {
    create?: XOR<agendamento_participantesCreateWithoutAgendamentosInput, agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | agendamento_participantesCreateWithoutAgendamentosInput[] | agendamento_participantesUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_participantesCreateOrConnectWithoutAgendamentosInput | agendamento_participantesCreateOrConnectWithoutAgendamentosInput[]
    createMany?: agendamento_participantesCreateManyAgendamentosInputEnvelope
    connect?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
  }

  export type agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput = {
    create?: XOR<agendamento_slotsCreateWithoutAgendamentosInput, agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | agendamento_slotsCreateWithoutAgendamentosInput[] | agendamento_slotsUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_slotsCreateOrConnectWithoutAgendamentosInput | agendamento_slotsCreateOrConnectWithoutAgendamentosInput[]
    createMany?: agendamento_slotsCreateManyAgendamentosInputEnvelope
    connect?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
  }

  export type Enumagendamentos_atendimentoFieldUpdateOperationsInput = {
    set?: $Enums.agendamentos_atendimento
  }

  export type Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput = {
    set?: $Enums.agendamentos_tipo_atendimento
  }

  export type Enumagendamentos_statusFieldUpdateOperationsInput = {
    set?: $Enums.agendamentos_status
  }

  export type agendamento_participantesUpdateManyWithoutAgendamentosNestedInput = {
    create?: XOR<agendamento_participantesCreateWithoutAgendamentosInput, agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | agendamento_participantesCreateWithoutAgendamentosInput[] | agendamento_participantesUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_participantesCreateOrConnectWithoutAgendamentosInput | agendamento_participantesCreateOrConnectWithoutAgendamentosInput[]
    upsert?: agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput | agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput[]
    createMany?: agendamento_participantesCreateManyAgendamentosInputEnvelope
    set?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    disconnect?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    delete?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    connect?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    update?: agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput | agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput[]
    updateMany?: agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput | agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput[]
    deleteMany?: agendamento_participantesScalarWhereInput | agendamento_participantesScalarWhereInput[]
  }

  export type agendamento_slotsUpdateManyWithoutAgendamentosNestedInput = {
    create?: XOR<agendamento_slotsCreateWithoutAgendamentosInput, agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | agendamento_slotsCreateWithoutAgendamentosInput[] | agendamento_slotsUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_slotsCreateOrConnectWithoutAgendamentosInput | agendamento_slotsCreateOrConnectWithoutAgendamentosInput[]
    upsert?: agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput | agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput[]
    createMany?: agendamento_slotsCreateManyAgendamentosInputEnvelope
    set?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    disconnect?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    delete?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    connect?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    update?: agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput | agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput[]
    updateMany?: agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput | agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput[]
    deleteMany?: agendamento_slotsScalarWhereInput | agendamento_slotsScalarWhereInput[]
  }

  export type cidadaosUpdateOneWithoutAgendamentosNestedInput = {
    create?: XOR<cidadaosCreateWithoutAgendamentosInput, cidadaosUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: cidadaosCreateOrConnectWithoutAgendamentosInput
    upsert?: cidadaosUpsertWithoutAgendamentosInput
    disconnect?: cidadaosWhereInput | boolean
    delete?: cidadaosWhereInput | boolean
    connect?: cidadaosWhereUniqueInput
    update?: XOR<XOR<cidadaosUpdateToOneWithWhereWithoutAgendamentosInput, cidadaosUpdateWithoutAgendamentosInput>, cidadaosUncheckedUpdateWithoutAgendamentosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput = {
    create?: XOR<agendamento_participantesCreateWithoutAgendamentosInput, agendamento_participantesUncheckedCreateWithoutAgendamentosInput> | agendamento_participantesCreateWithoutAgendamentosInput[] | agendamento_participantesUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_participantesCreateOrConnectWithoutAgendamentosInput | agendamento_participantesCreateOrConnectWithoutAgendamentosInput[]
    upsert?: agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput | agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput[]
    createMany?: agendamento_participantesCreateManyAgendamentosInputEnvelope
    set?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    disconnect?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    delete?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    connect?: agendamento_participantesWhereUniqueInput | agendamento_participantesWhereUniqueInput[]
    update?: agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput | agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput[]
    updateMany?: agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput | agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput[]
    deleteMany?: agendamento_participantesScalarWhereInput | agendamento_participantesScalarWhereInput[]
  }

  export type agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput = {
    create?: XOR<agendamento_slotsCreateWithoutAgendamentosInput, agendamento_slotsUncheckedCreateWithoutAgendamentosInput> | agendamento_slotsCreateWithoutAgendamentosInput[] | agendamento_slotsUncheckedCreateWithoutAgendamentosInput[]
    connectOrCreate?: agendamento_slotsCreateOrConnectWithoutAgendamentosInput | agendamento_slotsCreateOrConnectWithoutAgendamentosInput[]
    upsert?: agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput | agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput[]
    createMany?: agendamento_slotsCreateManyAgendamentosInputEnvelope
    set?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    disconnect?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    delete?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    connect?: agendamento_slotsWhereUniqueInput | agendamento_slotsWhereUniqueInput[]
    update?: agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput | agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput[]
    updateMany?: agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput | agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput[]
    deleteMany?: agendamento_slotsScalarWhereInput | agendamento_slotsScalarWhereInput[]
  }

  export type agendamentosCreateNestedManyWithoutCidadaosInput = {
    create?: XOR<agendamentosCreateWithoutCidadaosInput, agendamentosUncheckedCreateWithoutCidadaosInput> | agendamentosCreateWithoutCidadaosInput[] | agendamentosUncheckedCreateWithoutCidadaosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutCidadaosInput | agendamentosCreateOrConnectWithoutCidadaosInput[]
    createMany?: agendamentosCreateManyCidadaosInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type agendamentosUncheckedCreateNestedManyWithoutCidadaosInput = {
    create?: XOR<agendamentosCreateWithoutCidadaosInput, agendamentosUncheckedCreateWithoutCidadaosInput> | agendamentosCreateWithoutCidadaosInput[] | agendamentosUncheckedCreateWithoutCidadaosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutCidadaosInput | agendamentosCreateOrConnectWithoutCidadaosInput[]
    createMany?: agendamentosCreateManyCidadaosInputEnvelope
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
  }

  export type agendamentosUpdateManyWithoutCidadaosNestedInput = {
    create?: XOR<agendamentosCreateWithoutCidadaosInput, agendamentosUncheckedCreateWithoutCidadaosInput> | agendamentosCreateWithoutCidadaosInput[] | agendamentosUncheckedCreateWithoutCidadaosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutCidadaosInput | agendamentosCreateOrConnectWithoutCidadaosInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutCidadaosInput | agendamentosUpsertWithWhereUniqueWithoutCidadaosInput[]
    createMany?: agendamentosCreateManyCidadaosInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutCidadaosInput | agendamentosUpdateWithWhereUniqueWithoutCidadaosInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutCidadaosInput | agendamentosUpdateManyWithWhereWithoutCidadaosInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type agendamentosUncheckedUpdateManyWithoutCidadaosNestedInput = {
    create?: XOR<agendamentosCreateWithoutCidadaosInput, agendamentosUncheckedCreateWithoutCidadaosInput> | agendamentosCreateWithoutCidadaosInput[] | agendamentosUncheckedCreateWithoutCidadaosInput[]
    connectOrCreate?: agendamentosCreateOrConnectWithoutCidadaosInput | agendamentosCreateOrConnectWithoutCidadaosInput[]
    upsert?: agendamentosUpsertWithWhereUniqueWithoutCidadaosInput | agendamentosUpsertWithWhereUniqueWithoutCidadaosInput[]
    createMany?: agendamentosCreateManyCidadaosInputEnvelope
    set?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    disconnect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    delete?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    connect?: agendamentosWhereUniqueInput | agendamentosWhereUniqueInput[]
    update?: agendamentosUpdateWithWhereUniqueWithoutCidadaosInput | agendamentosUpdateWithWhereUniqueWithoutCidadaosInput[]
    updateMany?: agendamentosUpdateManyWithWhereWithoutCidadaosInput | agendamentosUpdateManyWithWhereWithoutCidadaosInput[]
    deleteMany?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
  }

  export type Enumusuarios_admin_papelFieldUpdateOperationsInput = {
    set?: $Enums.usuarios_admin_papel
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumagendamentos_atendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_atendimento | Enumagendamentos_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_atendimento[]
    notIn?: $Enums.agendamentos_atendimento[]
    not?: NestedEnumagendamentos_atendimentoFilter<$PrismaModel> | $Enums.agendamentos_atendimento
  }

  export type NestedEnumagendamentos_tipo_atendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_tipo_atendimento | Enumagendamentos_tipo_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_tipo_atendimento[]
    notIn?: $Enums.agendamentos_tipo_atendimento[]
    not?: NestedEnumagendamentos_tipo_atendimentoFilter<$PrismaModel> | $Enums.agendamentos_tipo_atendimento
  }

  export type NestedEnumagendamentos_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusFilter<$PrismaModel> | $Enums.agendamentos_status
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumagendamentos_atendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_atendimento | Enumagendamentos_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_atendimento[]
    notIn?: $Enums.agendamentos_atendimento[]
    not?: NestedEnumagendamentos_atendimentoWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_atendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_atendimentoFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_atendimentoFilter<$PrismaModel>
  }

  export type NestedEnumagendamentos_tipo_atendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_tipo_atendimento | Enumagendamentos_tipo_atendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_tipo_atendimento[]
    notIn?: $Enums.agendamentos_tipo_atendimento[]
    not?: NestedEnumagendamentos_tipo_atendimentoWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_tipo_atendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_tipo_atendimentoFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_tipo_atendimentoFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumagendamentos_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.agendamentos_status | Enumagendamentos_statusFieldRefInput<$PrismaModel>
    in?: $Enums.agendamentos_status[]
    notIn?: $Enums.agendamentos_status[]
    not?: NestedEnumagendamentos_statusWithAggregatesFilter<$PrismaModel> | $Enums.agendamentos_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumagendamentos_statusFilter<$PrismaModel>
    _max?: NestedEnumagendamentos_statusFilter<$PrismaModel>
  }

  export type NestedEnumusuarios_admin_papelFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_admin_papel | Enumusuarios_admin_papelFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_admin_papel[]
    notIn?: $Enums.usuarios_admin_papel[]
    not?: NestedEnumusuarios_admin_papelFilter<$PrismaModel> | $Enums.usuarios_admin_papel
  }

  export type NestedEnumusuarios_admin_papelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.usuarios_admin_papel | Enumusuarios_admin_papelFieldRefInput<$PrismaModel>
    in?: $Enums.usuarios_admin_papel[]
    notIn?: $Enums.usuarios_admin_papel[]
    not?: NestedEnumusuarios_admin_papelWithAggregatesFilter<$PrismaModel> | $Enums.usuarios_admin_papel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusuarios_admin_papelFilter<$PrismaModel>
    _max?: NestedEnumusuarios_admin_papelFilter<$PrismaModel>
  }

  export type agendamentosCreateWithoutAgendamento_participantesInput = {
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_slots?: agendamento_slotsCreateNestedManyWithoutAgendamentosInput
    cidadaos?: cidadaosCreateNestedOneWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateWithoutAgendamento_participantesInput = {
    id?: number
    cidadao_id?: number | null
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_slots?: agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput
  }

  export type agendamentosCreateOrConnectWithoutAgendamento_participantesInput = {
    where: agendamentosWhereUniqueInput
    create: XOR<agendamentosCreateWithoutAgendamento_participantesInput, agendamentosUncheckedCreateWithoutAgendamento_participantesInput>
  }

  export type agendamentosUpsertWithoutAgendamento_participantesInput = {
    update: XOR<agendamentosUpdateWithoutAgendamento_participantesInput, agendamentosUncheckedUpdateWithoutAgendamento_participantesInput>
    create: XOR<agendamentosCreateWithoutAgendamento_participantesInput, agendamentosUncheckedCreateWithoutAgendamento_participantesInput>
    where?: agendamentosWhereInput
  }

  export type agendamentosUpdateToOneWithWhereWithoutAgendamento_participantesInput = {
    where?: agendamentosWhereInput
    data: XOR<agendamentosUpdateWithoutAgendamento_participantesInput, agendamentosUncheckedUpdateWithoutAgendamento_participantesInput>
  }

  export type agendamentosUpdateWithoutAgendamento_participantesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_slots?: agendamento_slotsUpdateManyWithoutAgendamentosNestedInput
    cidadaos?: cidadaosUpdateOneWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateWithoutAgendamento_participantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadao_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_slots?: agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput
  }

  export type agendamentosCreateWithoutAgendamento_slotsInput = {
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesCreateNestedManyWithoutAgendamentosInput
    cidadaos?: cidadaosCreateNestedOneWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateWithoutAgendamento_slotsInput = {
    id?: number
    cidadao_id?: number | null
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput
  }

  export type agendamentosCreateOrConnectWithoutAgendamento_slotsInput = {
    where: agendamentosWhereUniqueInput
    create: XOR<agendamentosCreateWithoutAgendamento_slotsInput, agendamentosUncheckedCreateWithoutAgendamento_slotsInput>
  }

  export type agendamentosUpsertWithoutAgendamento_slotsInput = {
    update: XOR<agendamentosUpdateWithoutAgendamento_slotsInput, agendamentosUncheckedUpdateWithoutAgendamento_slotsInput>
    create: XOR<agendamentosCreateWithoutAgendamento_slotsInput, agendamentosUncheckedCreateWithoutAgendamento_slotsInput>
    where?: agendamentosWhereInput
  }

  export type agendamentosUpdateToOneWithWhereWithoutAgendamento_slotsInput = {
    where?: agendamentosWhereInput
    data: XOR<agendamentosUpdateWithoutAgendamento_slotsInput, agendamentosUncheckedUpdateWithoutAgendamento_slotsInput>
  }

  export type agendamentosUpdateWithoutAgendamento_slotsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUpdateManyWithoutAgendamentosNestedInput
    cidadaos?: cidadaosUpdateOneWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateWithoutAgendamento_slotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cidadao_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput
  }

  export type agendamento_participantesCreateWithoutAgendamentosInput = {
    nome: string
    telefone?: string | null
    principal?: boolean
  }

  export type agendamento_participantesUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    telefone?: string | null
    principal?: boolean
  }

  export type agendamento_participantesCreateOrConnectWithoutAgendamentosInput = {
    where: agendamento_participantesWhereUniqueInput
    create: XOR<agendamento_participantesCreateWithoutAgendamentosInput, agendamento_participantesUncheckedCreateWithoutAgendamentosInput>
  }

  export type agendamento_participantesCreateManyAgendamentosInputEnvelope = {
    data: agendamento_participantesCreateManyAgendamentosInput | agendamento_participantesCreateManyAgendamentosInput[]
    skipDuplicates?: boolean
  }

  export type agendamento_slotsCreateWithoutAgendamentosInput = {
    id?: bigint | number
    data: Date | string
    horario_inicio: Date | string
  }

  export type agendamento_slotsUncheckedCreateWithoutAgendamentosInput = {
    id?: bigint | number
    data: Date | string
    horario_inicio: Date | string
  }

  export type agendamento_slotsCreateOrConnectWithoutAgendamentosInput = {
    where: agendamento_slotsWhereUniqueInput
    create: XOR<agendamento_slotsCreateWithoutAgendamentosInput, agendamento_slotsUncheckedCreateWithoutAgendamentosInput>
  }

  export type agendamento_slotsCreateManyAgendamentosInputEnvelope = {
    data: agendamento_slotsCreateManyAgendamentosInput | agendamento_slotsCreateManyAgendamentosInput[]
    skipDuplicates?: boolean
  }

  export type cidadaosCreateWithoutAgendamentosInput = {
    nome: string
    email: string
    telefone?: string | null
    senha_hash: string
    cep?: string | null
    endereco?: string | null
    criado_em?: Date | string
    usuario?: string | null
  }

  export type cidadaosUncheckedCreateWithoutAgendamentosInput = {
    id?: number
    nome: string
    email: string
    telefone?: string | null
    senha_hash: string
    cep?: string | null
    endereco?: string | null
    criado_em?: Date | string
    usuario?: string | null
  }

  export type cidadaosCreateOrConnectWithoutAgendamentosInput = {
    where: cidadaosWhereUniqueInput
    create: XOR<cidadaosCreateWithoutAgendamentosInput, cidadaosUncheckedCreateWithoutAgendamentosInput>
  }

  export type agendamento_participantesUpsertWithWhereUniqueWithoutAgendamentosInput = {
    where: agendamento_participantesWhereUniqueInput
    update: XOR<agendamento_participantesUpdateWithoutAgendamentosInput, agendamento_participantesUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<agendamento_participantesCreateWithoutAgendamentosInput, agendamento_participantesUncheckedCreateWithoutAgendamentosInput>
  }

  export type agendamento_participantesUpdateWithWhereUniqueWithoutAgendamentosInput = {
    where: agendamento_participantesWhereUniqueInput
    data: XOR<agendamento_participantesUpdateWithoutAgendamentosInput, agendamento_participantesUncheckedUpdateWithoutAgendamentosInput>
  }

  export type agendamento_participantesUpdateManyWithWhereWithoutAgendamentosInput = {
    where: agendamento_participantesScalarWhereInput
    data: XOR<agendamento_participantesUpdateManyMutationInput, agendamento_participantesUncheckedUpdateManyWithoutAgendamentosInput>
  }

  export type agendamento_participantesScalarWhereInput = {
    AND?: agendamento_participantesScalarWhereInput | agendamento_participantesScalarWhereInput[]
    OR?: agendamento_participantesScalarWhereInput[]
    NOT?: agendamento_participantesScalarWhereInput | agendamento_participantesScalarWhereInput[]
    id?: IntFilter<"agendamento_participantes"> | number
    agendamento_id?: IntFilter<"agendamento_participantes"> | number
    nome?: StringFilter<"agendamento_participantes"> | string
    telefone?: StringNullableFilter<"agendamento_participantes"> | string | null
    principal?: BoolFilter<"agendamento_participantes"> | boolean
  }

  export type agendamento_slotsUpsertWithWhereUniqueWithoutAgendamentosInput = {
    where: agendamento_slotsWhereUniqueInput
    update: XOR<agendamento_slotsUpdateWithoutAgendamentosInput, agendamento_slotsUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<agendamento_slotsCreateWithoutAgendamentosInput, agendamento_slotsUncheckedCreateWithoutAgendamentosInput>
  }

  export type agendamento_slotsUpdateWithWhereUniqueWithoutAgendamentosInput = {
    where: agendamento_slotsWhereUniqueInput
    data: XOR<agendamento_slotsUpdateWithoutAgendamentosInput, agendamento_slotsUncheckedUpdateWithoutAgendamentosInput>
  }

  export type agendamento_slotsUpdateManyWithWhereWithoutAgendamentosInput = {
    where: agendamento_slotsScalarWhereInput
    data: XOR<agendamento_slotsUpdateManyMutationInput, agendamento_slotsUncheckedUpdateManyWithoutAgendamentosInput>
  }

  export type agendamento_slotsScalarWhereInput = {
    AND?: agendamento_slotsScalarWhereInput | agendamento_slotsScalarWhereInput[]
    OR?: agendamento_slotsScalarWhereInput[]
    NOT?: agendamento_slotsScalarWhereInput | agendamento_slotsScalarWhereInput[]
    id?: BigIntFilter<"agendamento_slots"> | bigint | number
    agendamento_id?: IntFilter<"agendamento_slots"> | number
    data?: DateTimeFilter<"agendamento_slots"> | Date | string
    horario_inicio?: DateTimeFilter<"agendamento_slots"> | Date | string
  }

  export type cidadaosUpsertWithoutAgendamentosInput = {
    update: XOR<cidadaosUpdateWithoutAgendamentosInput, cidadaosUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<cidadaosCreateWithoutAgendamentosInput, cidadaosUncheckedCreateWithoutAgendamentosInput>
    where?: cidadaosWhereInput
  }

  export type cidadaosUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: cidadaosWhereInput
    data: XOR<cidadaosUpdateWithoutAgendamentosInput, cidadaosUncheckedUpdateWithoutAgendamentosInput>
  }

  export type cidadaosUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cidadaosUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    senha_hash?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    criado_em?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type agendamentosCreateWithoutCidadaosInput = {
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesCreateNestedManyWithoutAgendamentosInput
    agendamento_slots?: agendamento_slotsCreateNestedManyWithoutAgendamentosInput
  }

  export type agendamentosUncheckedCreateWithoutCidadaosInput = {
    id?: number
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUncheckedCreateNestedManyWithoutAgendamentosInput
    agendamento_slots?: agendamento_slotsUncheckedCreateNestedManyWithoutAgendamentosInput
  }

  export type agendamentosCreateOrConnectWithoutCidadaosInput = {
    where: agendamentosWhereUniqueInput
    create: XOR<agendamentosCreateWithoutCidadaosInput, agendamentosUncheckedCreateWithoutCidadaosInput>
  }

  export type agendamentosCreateManyCidadaosInputEnvelope = {
    data: agendamentosCreateManyCidadaosInput | agendamentosCreateManyCidadaosInput[]
    skipDuplicates?: boolean
  }

  export type agendamentosUpsertWithWhereUniqueWithoutCidadaosInput = {
    where: agendamentosWhereUniqueInput
    update: XOR<agendamentosUpdateWithoutCidadaosInput, agendamentosUncheckedUpdateWithoutCidadaosInput>
    create: XOR<agendamentosCreateWithoutCidadaosInput, agendamentosUncheckedCreateWithoutCidadaosInput>
  }

  export type agendamentosUpdateWithWhereUniqueWithoutCidadaosInput = {
    where: agendamentosWhereUniqueInput
    data: XOR<agendamentosUpdateWithoutCidadaosInput, agendamentosUncheckedUpdateWithoutCidadaosInput>
  }

  export type agendamentosUpdateManyWithWhereWithoutCidadaosInput = {
    where: agendamentosScalarWhereInput
    data: XOR<agendamentosUpdateManyMutationInput, agendamentosUncheckedUpdateManyWithoutCidadaosInput>
  }

  export type agendamentosScalarWhereInput = {
    AND?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
    OR?: agendamentosScalarWhereInput[]
    NOT?: agendamentosScalarWhereInput | agendamentosScalarWhereInput[]
    id?: IntFilter<"agendamentos"> | number
    cidadao_id?: IntNullableFilter<"agendamentos"> | number | null
    nome?: StringFilter<"agendamentos"> | string
    motivo?: StringNullableFilter<"agendamentos"> | string | null
    tratativa?: StringNullableFilter<"agendamentos"> | string | null
    data?: DateTimeFilter<"agendamentos"> | Date | string
    horario?: DateTimeFilter<"agendamentos"> | Date | string
    atendimento?: Enumagendamentos_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFilter<"agendamentos"> | $Enums.agendamentos_tipo_atendimento
    blocos_json?: JsonNullableFilter<"agendamentos">
    email?: StringNullableFilter<"agendamentos"> | string | null
    telefone?: StringNullableFilter<"agendamentos"> | string | null
    cep?: StringNullableFilter<"agendamentos"> | string | null
    endereco?: StringNullableFilter<"agendamentos"> | string | null
    data_registro?: DateTimeFilter<"agendamentos"> | Date | string
    status?: Enumagendamentos_statusFilter<"agendamentos"> | $Enums.agendamentos_status
  }

  export type agendamento_participantesCreateManyAgendamentosInput = {
    id?: number
    nome: string
    telefone?: string | null
    principal?: boolean
  }

  export type agendamento_slotsCreateManyAgendamentosInput = {
    id?: bigint | number
    data: Date | string
    horario_inicio: Date | string
  }

  export type agendamento_participantesUpdateWithoutAgendamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type agendamento_participantesUncheckedUpdateWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type agendamento_participantesUncheckedUpdateManyWithoutAgendamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    principal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type agendamento_slotsUpdateWithoutAgendamentosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type agendamento_slotsUncheckedUpdateWithoutAgendamentosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type agendamento_slotsUncheckedUpdateManyWithoutAgendamentosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type agendamentosCreateManyCidadaosInput = {
    id?: number
    nome: string
    motivo?: string | null
    tratativa?: string | null
    data: Date | string
    horario: Date | string
    atendimento?: $Enums.agendamentos_atendimento
    tipo_atendimento?: $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: string | null
    telefone?: string | null
    cep?: string | null
    endereco?: string | null
    data_registro?: Date | string
    status?: $Enums.agendamentos_status
  }

  export type agendamentosUpdateWithoutCidadaosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUpdateManyWithoutAgendamentosNestedInput
    agendamento_slots?: agendamento_slotsUpdateManyWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateWithoutCidadaosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
    agendamento_participantes?: agendamento_participantesUncheckedUpdateManyWithoutAgendamentosNestedInput
    agendamento_slots?: agendamento_slotsUncheckedUpdateManyWithoutAgendamentosNestedInput
  }

  export type agendamentosUncheckedUpdateManyWithoutCidadaosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    tratativa?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    atendimento?: Enumagendamentos_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_atendimento
    tipo_atendimento?: Enumagendamentos_tipo_atendimentoFieldUpdateOperationsInput | $Enums.agendamentos_tipo_atendimento
    blocos_json?: NullableJsonNullValueInput | InputJsonValue
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumagendamentos_statusFieldUpdateOperationsInput | $Enums.agendamentos_status
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}