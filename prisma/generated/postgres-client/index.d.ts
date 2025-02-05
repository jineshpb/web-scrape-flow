
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model workflow
 * 
 */
export type workflow = $Result.DefaultSelection<Prisma.$workflowPayload>
/**
 * Model workflowExecution
 * 
 */
export type workflowExecution = $Result.DefaultSelection<Prisma.$workflowExecutionPayload>
/**
 * Model ExecutionPhase
 * 
 */
export type ExecutionPhase = $Result.DefaultSelection<Prisma.$ExecutionPhasePayload>
/**
 * Model ExecutionLog
 * 
 */
export type ExecutionLog = $Result.DefaultSelection<Prisma.$ExecutionLogPayload>
/**
 * Model UserBalance
 * 
 */
export type UserBalance = $Result.DefaultSelection<Prisma.$UserBalancePayload>
/**
 * Model credential
 * 
 */
export type credential = $Result.DefaultSelection<Prisma.$credentialPayload>
/**
 * Model UserPurchase
 * 
 */
export type UserPurchase = $Result.DefaultSelection<Prisma.$UserPurchasePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workflows
 * const workflows = await prisma.workflow.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workflows
   * const workflows = await prisma.workflow.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.workflow`: Exposes CRUD operations for the **workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.workflowDelegate<ExtArgs>;

  /**
   * `prisma.workflowExecution`: Exposes CRUD operations for the **workflowExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowExecutions
    * const workflowExecutions = await prisma.workflowExecution.findMany()
    * ```
    */
  get workflowExecution(): Prisma.workflowExecutionDelegate<ExtArgs>;

  /**
   * `prisma.executionPhase`: Exposes CRUD operations for the **ExecutionPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionPhases
    * const executionPhases = await prisma.executionPhase.findMany()
    * ```
    */
  get executionPhase(): Prisma.ExecutionPhaseDelegate<ExtArgs>;

  /**
   * `prisma.executionLog`: Exposes CRUD operations for the **ExecutionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionLogs
    * const executionLogs = await prisma.executionLog.findMany()
    * ```
    */
  get executionLog(): Prisma.ExecutionLogDelegate<ExtArgs>;

  /**
   * `prisma.userBalance`: Exposes CRUD operations for the **UserBalance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserBalances
    * const userBalances = await prisma.userBalance.findMany()
    * ```
    */
  get userBalance(): Prisma.UserBalanceDelegate<ExtArgs>;

  /**
   * `prisma.credential`: Exposes CRUD operations for the **credential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credentials
    * const credentials = await prisma.credential.findMany()
    * ```
    */
  get credential(): Prisma.credentialDelegate<ExtArgs>;

  /**
   * `prisma.userPurchase`: Exposes CRUD operations for the **UserPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPurchases
    * const userPurchases = await prisma.userPurchase.findMany()
    * ```
    */
  get userPurchase(): Prisma.UserPurchaseDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    workflow: 'workflow',
    workflowExecution: 'workflowExecution',
    ExecutionPhase: 'ExecutionPhase',
    ExecutionLog: 'ExecutionLog',
    UserBalance: 'UserBalance',
    credential: 'credential',
    UserPurchase: 'UserPurchase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "workflow" | "workflowExecution" | "executionPhase" | "executionLog" | "userBalance" | "credential" | "userPurchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      workflow: {
        payload: Prisma.$workflowPayload<ExtArgs>
        fields: Prisma.workflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          findFirst: {
            args: Prisma.workflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          findMany: {
            args: Prisma.workflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>[]
          }
          create: {
            args: Prisma.workflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          createMany: {
            args: Prisma.workflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>[]
          }
          delete: {
            args: Prisma.workflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          update: {
            args: Prisma.workflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          deleteMany: {
            args: Prisma.workflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.workflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.workflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      workflowExecution: {
        payload: Prisma.$workflowExecutionPayload<ExtArgs>
        fields: Prisma.workflowExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workflowExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workflowExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>
          }
          findFirst: {
            args: Prisma.workflowExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workflowExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>
          }
          findMany: {
            args: Prisma.workflowExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>[]
          }
          create: {
            args: Prisma.workflowExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>
          }
          createMany: {
            args: Prisma.workflowExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workflowExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>[]
          }
          delete: {
            args: Prisma.workflowExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>
          }
          update: {
            args: Prisma.workflowExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>
          }
          deleteMany: {
            args: Prisma.workflowExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workflowExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workflowExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workflowExecutionPayload>
          }
          aggregate: {
            args: Prisma.WorkflowExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowExecution>
          }
          groupBy: {
            args: Prisma.workflowExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.workflowExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionCountAggregateOutputType> | number
          }
        }
      }
      ExecutionPhase: {
        payload: Prisma.$ExecutionPhasePayload<ExtArgs>
        fields: Prisma.ExecutionPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          findFirst: {
            args: Prisma.ExecutionPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          findMany: {
            args: Prisma.ExecutionPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>[]
          }
          create: {
            args: Prisma.ExecutionPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          createMany: {
            args: Prisma.ExecutionPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>[]
          }
          delete: {
            args: Prisma.ExecutionPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          update: {
            args: Prisma.ExecutionPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          deleteMany: {
            args: Prisma.ExecutionPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExecutionPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionPhasePayload>
          }
          aggregate: {
            args: Prisma.ExecutionPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionPhase>
          }
          groupBy: {
            args: Prisma.ExecutionPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionPhaseCountAggregateOutputType> | number
          }
        }
      }
      ExecutionLog: {
        payload: Prisma.$ExecutionLogPayload<ExtArgs>
        fields: Prisma.ExecutionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findFirst: {
            args: Prisma.ExecutionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          findMany: {
            args: Prisma.ExecutionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          create: {
            args: Prisma.ExecutionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          createMany: {
            args: Prisma.ExecutionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>[]
          }
          delete: {
            args: Prisma.ExecutionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          update: {
            args: Prisma.ExecutionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExecutionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionLogPayload>
          }
          aggregate: {
            args: Prisma.ExecutionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionLog>
          }
          groupBy: {
            args: Prisma.ExecutionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionLogCountAggregateOutputType> | number
          }
        }
      }
      UserBalance: {
        payload: Prisma.$UserBalancePayload<ExtArgs>
        fields: Prisma.UserBalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserBalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserBalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          findFirst: {
            args: Prisma.UserBalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserBalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          findMany: {
            args: Prisma.UserBalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          create: {
            args: Prisma.UserBalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          createMany: {
            args: Prisma.UserBalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserBalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>[]
          }
          delete: {
            args: Prisma.UserBalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          update: {
            args: Prisma.UserBalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          deleteMany: {
            args: Prisma.UserBalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserBalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserBalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserBalancePayload>
          }
          aggregate: {
            args: Prisma.UserBalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserBalance>
          }
          groupBy: {
            args: Prisma.UserBalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserBalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserBalanceCountArgs<ExtArgs>
            result: $Utils.Optional<UserBalanceCountAggregateOutputType> | number
          }
        }
      }
      credential: {
        payload: Prisma.$credentialPayload<ExtArgs>
        fields: Prisma.credentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.credentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.credentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>
          }
          findFirst: {
            args: Prisma.credentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.credentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>
          }
          findMany: {
            args: Prisma.credentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>[]
          }
          create: {
            args: Prisma.credentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>
          }
          createMany: {
            args: Prisma.credentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.credentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>[]
          }
          delete: {
            args: Prisma.credentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>
          }
          update: {
            args: Prisma.credentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>
          }
          deleteMany: {
            args: Prisma.credentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.credentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.credentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$credentialPayload>
          }
          aggregate: {
            args: Prisma.CredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredential>
          }
          groupBy: {
            args: Prisma.credentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.credentialCountArgs<ExtArgs>
            result: $Utils.Optional<CredentialCountAggregateOutputType> | number
          }
        }
      }
      UserPurchase: {
        payload: Prisma.$UserPurchasePayload<ExtArgs>
        fields: Prisma.UserPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>
          }
          findFirst: {
            args: Prisma.UserPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>
          }
          findMany: {
            args: Prisma.UserPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>[]
          }
          create: {
            args: Prisma.UserPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>
          }
          createMany: {
            args: Prisma.UserPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>[]
          }
          delete: {
            args: Prisma.UserPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>
          }
          update: {
            args: Prisma.UserPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>
          }
          deleteMany: {
            args: Prisma.UserPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPurchasePayload>
          }
          aggregate: {
            args: Prisma.UserPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPurchase>
          }
          groupBy: {
            args: Prisma.UserPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<UserPurchaseCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    executions: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | WorkflowCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workflowExecutionWhereInput
  }


  /**
   * Count Type WorkflowExecutionCountOutputType
   */

  export type WorkflowExecutionCountOutputType = {
    phases: number
  }

  export type WorkflowExecutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | WorkflowExecutionCountOutputTypeCountPhasesArgs
  }

  // Custom InputTypes
  /**
   * WorkflowExecutionCountOutputType without action
   */
  export type WorkflowExecutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecutionCountOutputType
     */
    select?: WorkflowExecutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowExecutionCountOutputType without action
   */
  export type WorkflowExecutionCountOutputTypeCountPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionPhaseWhereInput
  }


  /**
   * Count Type ExecutionPhaseCountOutputType
   */

  export type ExecutionPhaseCountOutputType = {
    logs: number
  }

  export type ExecutionPhaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | ExecutionPhaseCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * ExecutionPhaseCountOutputType without action
   */
  export type ExecutionPhaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhaseCountOutputType
     */
    select?: ExecutionPhaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExecutionPhaseCountOutputType without action
   */
  export type ExecutionPhaseCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    creditsCost: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    creditsCost: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    definition: string | null
    executionPlan: string | null
    creditsCost: number | null
    cron: string | null
    status: string | null
    lastRunAt: Date | null
    lastRunId: string | null
    lastRunStatus: string | null
    nextRunAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    definition: string | null
    executionPlan: string | null
    creditsCost: number | null
    cron: string | null
    status: string | null
    lastRunAt: Date | null
    lastRunId: string | null
    lastRunStatus: string | null
    nextRunAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    definition: number
    executionPlan: number
    creditsCost: number
    cron: number
    status: number
    lastRunAt: number
    lastRunId: number
    lastRunStatus: number
    nextRunAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    creditsCost?: true
  }

  export type WorkflowSumAggregateInputType = {
    creditsCost?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    executionPlan?: true
    creditsCost?: true
    cron?: true
    status?: true
    lastRunAt?: true
    lastRunId?: true
    lastRunStatus?: true
    nextRunAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    executionPlan?: true
    creditsCost?: true
    cron?: true
    status?: true
    lastRunAt?: true
    lastRunId?: true
    lastRunStatus?: true
    nextRunAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    executionPlan?: true
    creditsCost?: true
    cron?: true
    status?: true
    lastRunAt?: true
    lastRunId?: true
    lastRunStatus?: true
    nextRunAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workflow to aggregate.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type workflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workflowWhereInput
    orderBy?: workflowOrderByWithAggregationInput | workflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: workflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    definition: string
    executionPlan: string | null
    creditsCost: number | null
    cron: string | null
    status: string
    lastRunAt: Date | null
    lastRunId: string | null
    lastRunStatus: string | null
    nextRunAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends workflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type workflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    executionPlan?: boolean
    creditsCost?: boolean
    cron?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastRunId?: boolean
    lastRunStatus?: boolean
    nextRunAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    executions?: boolean | workflow$executionsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type workflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    executionPlan?: boolean
    creditsCost?: boolean
    cron?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastRunId?: boolean
    lastRunStatus?: boolean
    nextRunAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type workflowSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    executionPlan?: boolean
    creditsCost?: boolean
    cron?: boolean
    status?: boolean
    lastRunAt?: boolean
    lastRunId?: boolean
    lastRunStatus?: boolean
    nextRunAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type workflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | workflow$executionsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $workflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workflow"
    objects: {
      executions: Prisma.$workflowExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      definition: string
      executionPlan: string | null
      creditsCost: number | null
      cron: string | null
      status: string
      lastRunAt: Date | null
      lastRunId: string | null
      lastRunStatus: string | null
      nextRunAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type workflowGetPayload<S extends boolean | null | undefined | workflowDefaultArgs> = $Result.GetResult<Prisma.$workflowPayload, S>

  type workflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<workflowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface workflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workflow'], meta: { name: 'workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {workflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workflowFindUniqueArgs>(args: SelectSubset<T, workflowFindUniqueArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {workflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workflowFindUniqueOrThrowArgs>(args: SelectSubset<T, workflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workflowFindFirstArgs>(args?: SelectSubset<T, workflowFindFirstArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workflowFindFirstOrThrowArgs>(args?: SelectSubset<T, workflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workflowFindManyArgs>(args?: SelectSubset<T, workflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workflow.
     * @param {workflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends workflowCreateArgs>(args: SelectSubset<T, workflowCreateArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workflows.
     * @param {workflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workflowCreateManyArgs>(args?: SelectSubset<T, workflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {workflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workflowCreateManyAndReturnArgs>(args?: SelectSubset<T, workflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Workflow.
     * @param {workflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends workflowDeleteArgs>(args: SelectSubset<T, workflowDeleteArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workflow.
     * @param {workflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workflowUpdateArgs>(args: SelectSubset<T, workflowUpdateArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workflows.
     * @param {workflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workflowDeleteManyArgs>(args?: SelectSubset<T, workflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workflowUpdateManyArgs>(args: SelectSubset<T, workflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workflow.
     * @param {workflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends workflowUpsertArgs>(args: SelectSubset<T, workflowUpsertArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends workflowCountArgs>(
      args?: Subset<T, workflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowGroupByArgs} args - Group by arguments.
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
      T extends workflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workflowGroupByArgs['orderBy'] }
        : { orderBy?: workflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workflow model
   */
  readonly fields: workflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executions<T extends workflow$executionsArgs<ExtArgs> = {}>(args?: Subset<T, workflow$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the workflow model
   */ 
  interface workflowFieldRefs {
    readonly id: FieldRef<"workflow", 'String'>
    readonly userId: FieldRef<"workflow", 'String'>
    readonly name: FieldRef<"workflow", 'String'>
    readonly description: FieldRef<"workflow", 'String'>
    readonly definition: FieldRef<"workflow", 'String'>
    readonly executionPlan: FieldRef<"workflow", 'String'>
    readonly creditsCost: FieldRef<"workflow", 'Int'>
    readonly cron: FieldRef<"workflow", 'String'>
    readonly status: FieldRef<"workflow", 'String'>
    readonly lastRunAt: FieldRef<"workflow", 'DateTime'>
    readonly lastRunId: FieldRef<"workflow", 'String'>
    readonly lastRunStatus: FieldRef<"workflow", 'String'>
    readonly nextRunAt: FieldRef<"workflow", 'DateTime'>
    readonly createdAt: FieldRef<"workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workflow findUnique
   */
  export type workflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow findUniqueOrThrow
   */
  export type workflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow findFirst
   */
  export type workflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workflows.
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * workflow findFirstOrThrow
   */
  export type workflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflow to fetch.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workflows.
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * workflow findMany
   */
  export type workflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter, which workflows to fetch.
     */
    where?: workflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflows to fetch.
     */
    orderBy?: workflowOrderByWithRelationInput | workflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workflows.
     */
    cursor?: workflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * workflow create
   */
  export type workflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * The data needed to create a workflow.
     */
    data: XOR<workflowCreateInput, workflowUncheckedCreateInput>
  }

  /**
   * workflow createMany
   */
  export type workflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workflows.
     */
    data: workflowCreateManyInput | workflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workflow createManyAndReturn
   */
  export type workflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many workflows.
     */
    data: workflowCreateManyInput | workflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workflow update
   */
  export type workflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * The data needed to update a workflow.
     */
    data: XOR<workflowUpdateInput, workflowUncheckedUpdateInput>
    /**
     * Choose, which workflow to update.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow updateMany
   */
  export type workflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workflows.
     */
    data: XOR<workflowUpdateManyMutationInput, workflowUncheckedUpdateManyInput>
    /**
     * Filter which workflows to update
     */
    where?: workflowWhereInput
  }

  /**
   * workflow upsert
   */
  export type workflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * The filter to search for the workflow to update in case it exists.
     */
    where: workflowWhereUniqueInput
    /**
     * In case the workflow found by the `where` argument doesn't exist, create a new workflow with this data.
     */
    create: XOR<workflowCreateInput, workflowUncheckedCreateInput>
    /**
     * In case the workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workflowUpdateInput, workflowUncheckedUpdateInput>
  }

  /**
   * workflow delete
   */
  export type workflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
    /**
     * Filter which workflow to delete.
     */
    where: workflowWhereUniqueInput
  }

  /**
   * workflow deleteMany
   */
  export type workflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workflows to delete
     */
    where?: workflowWhereInput
  }

  /**
   * workflow.executions
   */
  export type workflow$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    where?: workflowExecutionWhereInput
    orderBy?: workflowExecutionOrderByWithRelationInput | workflowExecutionOrderByWithRelationInput[]
    cursor?: workflowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * workflow without action
   */
  export type workflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflow
     */
    select?: workflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowInclude<ExtArgs> | null
  }


  /**
   * Model workflowExecution
   */

  export type AggregateWorkflowExecution = {
    _count: WorkflowExecutionCountAggregateOutputType | null
    _avg: WorkflowExecutionAvgAggregateOutputType | null
    _sum: WorkflowExecutionSumAggregateOutputType | null
    _min: WorkflowExecutionMinAggregateOutputType | null
    _max: WorkflowExecutionMaxAggregateOutputType | null
  }

  export type WorkflowExecutionAvgAggregateOutputType = {
    creditsConsumed: number | null
  }

  export type WorkflowExecutionSumAggregateOutputType = {
    creditsConsumed: number | null
  }

  export type WorkflowExecutionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    trigger: string | null
    status: string | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    definition: string | null
    creditsConsumed: number | null
  }

  export type WorkflowExecutionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    trigger: string | null
    status: string | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
    definition: string | null
    creditsConsumed: number | null
  }

  export type WorkflowExecutionCountAggregateOutputType = {
    id: number
    workflowId: number
    userId: number
    trigger: number
    status: number
    createdAt: number
    startedAt: number
    completedAt: number
    definition: number
    creditsConsumed: number
    _all: number
  }


  export type WorkflowExecutionAvgAggregateInputType = {
    creditsConsumed?: true
  }

  export type WorkflowExecutionSumAggregateInputType = {
    creditsConsumed?: true
  }

  export type WorkflowExecutionMinAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    definition?: true
    creditsConsumed?: true
  }

  export type WorkflowExecutionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    definition?: true
    creditsConsumed?: true
  }

  export type WorkflowExecutionCountAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    definition?: true
    creditsConsumed?: true
    _all?: true
  }

  export type WorkflowExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workflowExecution to aggregate.
     */
    where?: workflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflowExecutions to fetch.
     */
    orderBy?: workflowExecutionOrderByWithRelationInput | workflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workflowExecutions
    **/
    _count?: true | WorkflowExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowExecutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowExecutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowExecutionMaxAggregateInputType
  }

  export type GetWorkflowExecutionAggregateType<T extends WorkflowExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowExecution[P]>
      : GetScalarType<T[P], AggregateWorkflowExecution[P]>
  }




  export type workflowExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workflowExecutionWhereInput
    orderBy?: workflowExecutionOrderByWithAggregationInput | workflowExecutionOrderByWithAggregationInput[]
    by: WorkflowExecutionScalarFieldEnum[] | WorkflowExecutionScalarFieldEnum
    having?: workflowExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowExecutionCountAggregateInputType | true
    _avg?: WorkflowExecutionAvgAggregateInputType
    _sum?: WorkflowExecutionSumAggregateInputType
    _min?: WorkflowExecutionMinAggregateInputType
    _max?: WorkflowExecutionMaxAggregateInputType
  }

  export type WorkflowExecutionGroupByOutputType = {
    id: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt: Date
    startedAt: Date | null
    completedAt: Date | null
    definition: string
    creditsConsumed: number
    _count: WorkflowExecutionCountAggregateOutputType | null
    _avg: WorkflowExecutionAvgAggregateOutputType | null
    _sum: WorkflowExecutionSumAggregateOutputType | null
    _min: WorkflowExecutionMinAggregateOutputType | null
    _max: WorkflowExecutionMaxAggregateOutputType | null
  }

  type GetWorkflowExecutionGroupByPayload<T extends workflowExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowExecutionGroupByOutputType[P]>
        }
      >
    >


  export type workflowExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    definition?: boolean
    creditsConsumed?: boolean
    phases?: boolean | workflowExecution$phasesArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
    _count?: boolean | WorkflowExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExecution"]>

  export type workflowExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    definition?: boolean
    creditsConsumed?: boolean
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExecution"]>

  export type workflowExecutionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    definition?: boolean
    creditsConsumed?: boolean
  }

  export type workflowExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | workflowExecution$phasesArgs<ExtArgs>
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
    _count?: boolean | WorkflowExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workflowExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | workflowDefaultArgs<ExtArgs>
  }

  export type $workflowExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workflowExecution"
    objects: {
      phases: Prisma.$ExecutionPhasePayload<ExtArgs>[]
      workflow: Prisma.$workflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      userId: string
      trigger: string
      status: string
      createdAt: Date
      startedAt: Date | null
      completedAt: Date | null
      definition: string
      creditsConsumed: number
    }, ExtArgs["result"]["workflowExecution"]>
    composites: {}
  }

  type workflowExecutionGetPayload<S extends boolean | null | undefined | workflowExecutionDefaultArgs> = $Result.GetResult<Prisma.$workflowExecutionPayload, S>

  type workflowExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<workflowExecutionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkflowExecutionCountAggregateInputType | true
    }

  export interface workflowExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workflowExecution'], meta: { name: 'workflowExecution' } }
    /**
     * Find zero or one WorkflowExecution that matches the filter.
     * @param {workflowExecutionFindUniqueArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workflowExecutionFindUniqueArgs>(args: SelectSubset<T, workflowExecutionFindUniqueArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkflowExecution that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {workflowExecutionFindUniqueOrThrowArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workflowExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, workflowExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkflowExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowExecutionFindFirstArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workflowExecutionFindFirstArgs>(args?: SelectSubset<T, workflowExecutionFindFirstArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkflowExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowExecutionFindFirstOrThrowArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workflowExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, workflowExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkflowExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowExecutions
     * const workflowExecutions = await prisma.workflowExecution.findMany()
     * 
     * // Get first 10 WorkflowExecutions
     * const workflowExecutions = await prisma.workflowExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowExecutionWithIdOnly = await prisma.workflowExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workflowExecutionFindManyArgs>(args?: SelectSubset<T, workflowExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkflowExecution.
     * @param {workflowExecutionCreateArgs} args - Arguments to create a WorkflowExecution.
     * @example
     * // Create one WorkflowExecution
     * const WorkflowExecution = await prisma.workflowExecution.create({
     *   data: {
     *     // ... data to create a WorkflowExecution
     *   }
     * })
     * 
     */
    create<T extends workflowExecutionCreateArgs>(args: SelectSubset<T, workflowExecutionCreateArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkflowExecutions.
     * @param {workflowExecutionCreateManyArgs} args - Arguments to create many WorkflowExecutions.
     * @example
     * // Create many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workflowExecutionCreateManyArgs>(args?: SelectSubset<T, workflowExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowExecutions and returns the data saved in the database.
     * @param {workflowExecutionCreateManyAndReturnArgs} args - Arguments to create many WorkflowExecutions.
     * @example
     * // Create many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowExecutions and only return the `id`
     * const workflowExecutionWithIdOnly = await prisma.workflowExecution.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workflowExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, workflowExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkflowExecution.
     * @param {workflowExecutionDeleteArgs} args - Arguments to delete one WorkflowExecution.
     * @example
     * // Delete one WorkflowExecution
     * const WorkflowExecution = await prisma.workflowExecution.delete({
     *   where: {
     *     // ... filter to delete one WorkflowExecution
     *   }
     * })
     * 
     */
    delete<T extends workflowExecutionDeleteArgs>(args: SelectSubset<T, workflowExecutionDeleteArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkflowExecution.
     * @param {workflowExecutionUpdateArgs} args - Arguments to update one WorkflowExecution.
     * @example
     * // Update one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workflowExecutionUpdateArgs>(args: SelectSubset<T, workflowExecutionUpdateArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkflowExecutions.
     * @param {workflowExecutionDeleteManyArgs} args - Arguments to filter WorkflowExecutions to delete.
     * @example
     * // Delete a few WorkflowExecutions
     * const { count } = await prisma.workflowExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workflowExecutionDeleteManyArgs>(args?: SelectSubset<T, workflowExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workflowExecutionUpdateManyArgs>(args: SelectSubset<T, workflowExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowExecution.
     * @param {workflowExecutionUpsertArgs} args - Arguments to update or create a WorkflowExecution.
     * @example
     * // Update or create a WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.upsert({
     *   create: {
     *     // ... data to create a WorkflowExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowExecution we want to update
     *   }
     * })
     */
    upsert<T extends workflowExecutionUpsertArgs>(args: SelectSubset<T, workflowExecutionUpsertArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkflowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowExecutionCountArgs} args - Arguments to filter WorkflowExecutions to count.
     * @example
     * // Count the number of WorkflowExecutions
     * const count = await prisma.workflowExecution.count({
     *   where: {
     *     // ... the filter for the WorkflowExecutions we want to count
     *   }
     * })
    **/
    count<T extends workflowExecutionCountArgs>(
      args?: Subset<T, workflowExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowExecutionAggregateArgs>(args: Subset<T, WorkflowExecutionAggregateArgs>): Prisma.PrismaPromise<GetWorkflowExecutionAggregateType<T>>

    /**
     * Group by WorkflowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workflowExecutionGroupByArgs} args - Group by arguments.
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
      T extends workflowExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workflowExecutionGroupByArgs['orderBy'] }
        : { orderBy?: workflowExecutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, workflowExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workflowExecution model
   */
  readonly fields: workflowExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workflowExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workflowExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phases<T extends workflowExecution$phasesArgs<ExtArgs> = {}>(args?: Subset<T, workflowExecution$phasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findMany"> | Null>
    workflow<T extends workflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workflowDefaultArgs<ExtArgs>>): Prisma__workflowClient<$Result.GetResult<Prisma.$workflowPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the workflowExecution model
   */ 
  interface workflowExecutionFieldRefs {
    readonly id: FieldRef<"workflowExecution", 'String'>
    readonly workflowId: FieldRef<"workflowExecution", 'String'>
    readonly userId: FieldRef<"workflowExecution", 'String'>
    readonly trigger: FieldRef<"workflowExecution", 'String'>
    readonly status: FieldRef<"workflowExecution", 'String'>
    readonly createdAt: FieldRef<"workflowExecution", 'DateTime'>
    readonly startedAt: FieldRef<"workflowExecution", 'DateTime'>
    readonly completedAt: FieldRef<"workflowExecution", 'DateTime'>
    readonly definition: FieldRef<"workflowExecution", 'String'>
    readonly creditsConsumed: FieldRef<"workflowExecution", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * workflowExecution findUnique
   */
  export type workflowExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which workflowExecution to fetch.
     */
    where: workflowExecutionWhereUniqueInput
  }

  /**
   * workflowExecution findUniqueOrThrow
   */
  export type workflowExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which workflowExecution to fetch.
     */
    where: workflowExecutionWhereUniqueInput
  }

  /**
   * workflowExecution findFirst
   */
  export type workflowExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which workflowExecution to fetch.
     */
    where?: workflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflowExecutions to fetch.
     */
    orderBy?: workflowExecutionOrderByWithRelationInput | workflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workflowExecutions.
     */
    cursor?: workflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workflowExecutions.
     */
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * workflowExecution findFirstOrThrow
   */
  export type workflowExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which workflowExecution to fetch.
     */
    where?: workflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflowExecutions to fetch.
     */
    orderBy?: workflowExecutionOrderByWithRelationInput | workflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workflowExecutions.
     */
    cursor?: workflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workflowExecutions.
     */
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * workflowExecution findMany
   */
  export type workflowExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which workflowExecutions to fetch.
     */
    where?: workflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workflowExecutions to fetch.
     */
    orderBy?: workflowExecutionOrderByWithRelationInput | workflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workflowExecutions.
     */
    cursor?: workflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workflowExecutions.
     */
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * workflowExecution create
   */
  export type workflowExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a workflowExecution.
     */
    data: XOR<workflowExecutionCreateInput, workflowExecutionUncheckedCreateInput>
  }

  /**
   * workflowExecution createMany
   */
  export type workflowExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workflowExecutions.
     */
    data: workflowExecutionCreateManyInput | workflowExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workflowExecution createManyAndReturn
   */
  export type workflowExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many workflowExecutions.
     */
    data: workflowExecutionCreateManyInput | workflowExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workflowExecution update
   */
  export type workflowExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a workflowExecution.
     */
    data: XOR<workflowExecutionUpdateInput, workflowExecutionUncheckedUpdateInput>
    /**
     * Choose, which workflowExecution to update.
     */
    where: workflowExecutionWhereUniqueInput
  }

  /**
   * workflowExecution updateMany
   */
  export type workflowExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workflowExecutions.
     */
    data: XOR<workflowExecutionUpdateManyMutationInput, workflowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which workflowExecutions to update
     */
    where?: workflowExecutionWhereInput
  }

  /**
   * workflowExecution upsert
   */
  export type workflowExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the workflowExecution to update in case it exists.
     */
    where: workflowExecutionWhereUniqueInput
    /**
     * In case the workflowExecution found by the `where` argument doesn't exist, create a new workflowExecution with this data.
     */
    create: XOR<workflowExecutionCreateInput, workflowExecutionUncheckedCreateInput>
    /**
     * In case the workflowExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workflowExecutionUpdateInput, workflowExecutionUncheckedUpdateInput>
  }

  /**
   * workflowExecution delete
   */
  export type workflowExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
    /**
     * Filter which workflowExecution to delete.
     */
    where: workflowExecutionWhereUniqueInput
  }

  /**
   * workflowExecution deleteMany
   */
  export type workflowExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workflowExecutions to delete
     */
    where?: workflowExecutionWhereInput
  }

  /**
   * workflowExecution.phases
   */
  export type workflowExecution$phasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    where?: ExecutionPhaseWhereInput
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    cursor?: ExecutionPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * workflowExecution without action
   */
  export type workflowExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workflowExecution
     */
    select?: workflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workflowExecutionInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionPhase
   */

  export type AggregateExecutionPhase = {
    _count: ExecutionPhaseCountAggregateOutputType | null
    _avg: ExecutionPhaseAvgAggregateOutputType | null
    _sum: ExecutionPhaseSumAggregateOutputType | null
    _min: ExecutionPhaseMinAggregateOutputType | null
    _max: ExecutionPhaseMaxAggregateOutputType | null
  }

  export type ExecutionPhaseAvgAggregateOutputType = {
    number: number | null
    creditsConsumed: number | null
  }

  export type ExecutionPhaseSumAggregateOutputType = {
    number: number | null
    creditsConsumed: number | null
  }

  export type ExecutionPhaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    number: number | null
    node: string | null
    name: string | null
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string | null
  }

  export type ExecutionPhaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    number: number | null
    node: string | null
    name: string | null
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string | null
  }

  export type ExecutionPhaseCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    number: number
    node: number
    name: number
    startedAt: number
    completedAt: number
    inputs: number
    outputs: number
    creditsConsumed: number
    workflowExecutionId: number
    _all: number
  }


  export type ExecutionPhaseAvgAggregateInputType = {
    number?: true
    creditsConsumed?: true
  }

  export type ExecutionPhaseSumAggregateInputType = {
    number?: true
    creditsConsumed?: true
  }

  export type ExecutionPhaseMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
  }

  export type ExecutionPhaseMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
  }

  export type ExecutionPhaseCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
    _all?: true
  }

  export type ExecutionPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionPhase to aggregate.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionPhases
    **/
    _count?: true | ExecutionPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionPhaseMaxAggregateInputType
  }

  export type GetExecutionPhaseAggregateType<T extends ExecutionPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionPhase[P]>
      : GetScalarType<T[P], AggregateExecutionPhase[P]>
  }




  export type ExecutionPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionPhaseWhereInput
    orderBy?: ExecutionPhaseOrderByWithAggregationInput | ExecutionPhaseOrderByWithAggregationInput[]
    by: ExecutionPhaseScalarFieldEnum[] | ExecutionPhaseScalarFieldEnum
    having?: ExecutionPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionPhaseCountAggregateInputType | true
    _avg?: ExecutionPhaseAvgAggregateInputType
    _sum?: ExecutionPhaseSumAggregateInputType
    _min?: ExecutionPhaseMinAggregateInputType
    _max?: ExecutionPhaseMaxAggregateInputType
  }

  export type ExecutionPhaseGroupByOutputType = {
    id: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string
    _count: ExecutionPhaseCountAggregateOutputType | null
    _avg: ExecutionPhaseAvgAggregateOutputType | null
    _sum: ExecutionPhaseSumAggregateOutputType | null
    _min: ExecutionPhaseMinAggregateOutputType | null
    _max: ExecutionPhaseMaxAggregateOutputType | null
  }

  type GetExecutionPhaseGroupByPayload<T extends ExecutionPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionPhaseGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | workflowExecutionDefaultArgs<ExtArgs>
    logs?: boolean | ExecutionPhase$logsArgs<ExtArgs>
    _count?: boolean | ExecutionPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionPhase"]>

  export type ExecutionPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | workflowExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionPhase"]>

  export type ExecutionPhaseSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
  }

  export type ExecutionPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | workflowExecutionDefaultArgs<ExtArgs>
    logs?: boolean | ExecutionPhase$logsArgs<ExtArgs>
    _count?: boolean | ExecutionPhaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExecutionPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | workflowExecutionDefaultArgs<ExtArgs>
  }

  export type $ExecutionPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionPhase"
    objects: {
      execution: Prisma.$workflowExecutionPayload<ExtArgs>
      logs: Prisma.$ExecutionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: string
      number: number
      node: string
      name: string
      startedAt: Date | null
      completedAt: Date | null
      inputs: string | null
      outputs: string | null
      creditsConsumed: number | null
      workflowExecutionId: string
    }, ExtArgs["result"]["executionPhase"]>
    composites: {}
  }

  type ExecutionPhaseGetPayload<S extends boolean | null | undefined | ExecutionPhaseDefaultArgs> = $Result.GetResult<Prisma.$ExecutionPhasePayload, S>

  type ExecutionPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExecutionPhaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExecutionPhaseCountAggregateInputType | true
    }

  export interface ExecutionPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionPhase'], meta: { name: 'ExecutionPhase' } }
    /**
     * Find zero or one ExecutionPhase that matches the filter.
     * @param {ExecutionPhaseFindUniqueArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionPhaseFindUniqueArgs>(args: SelectSubset<T, ExecutionPhaseFindUniqueArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExecutionPhase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExecutionPhaseFindUniqueOrThrowArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExecutionPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseFindFirstArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionPhaseFindFirstArgs>(args?: SelectSubset<T, ExecutionPhaseFindFirstArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExecutionPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseFindFirstOrThrowArgs} args - Arguments to find a ExecutionPhase
     * @example
     * // Get one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExecutionPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionPhases
     * const executionPhases = await prisma.executionPhase.findMany()
     * 
     * // Get first 10 ExecutionPhases
     * const executionPhases = await prisma.executionPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionPhaseWithIdOnly = await prisma.executionPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionPhaseFindManyArgs>(args?: SelectSubset<T, ExecutionPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExecutionPhase.
     * @param {ExecutionPhaseCreateArgs} args - Arguments to create a ExecutionPhase.
     * @example
     * // Create one ExecutionPhase
     * const ExecutionPhase = await prisma.executionPhase.create({
     *   data: {
     *     // ... data to create a ExecutionPhase
     *   }
     * })
     * 
     */
    create<T extends ExecutionPhaseCreateArgs>(args: SelectSubset<T, ExecutionPhaseCreateArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExecutionPhases.
     * @param {ExecutionPhaseCreateManyArgs} args - Arguments to create many ExecutionPhases.
     * @example
     * // Create many ExecutionPhases
     * const executionPhase = await prisma.executionPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionPhaseCreateManyArgs>(args?: SelectSubset<T, ExecutionPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionPhases and returns the data saved in the database.
     * @param {ExecutionPhaseCreateManyAndReturnArgs} args - Arguments to create many ExecutionPhases.
     * @example
     * // Create many ExecutionPhases
     * const executionPhase = await prisma.executionPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionPhases and only return the `id`
     * const executionPhaseWithIdOnly = await prisma.executionPhase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExecutionPhase.
     * @param {ExecutionPhaseDeleteArgs} args - Arguments to delete one ExecutionPhase.
     * @example
     * // Delete one ExecutionPhase
     * const ExecutionPhase = await prisma.executionPhase.delete({
     *   where: {
     *     // ... filter to delete one ExecutionPhase
     *   }
     * })
     * 
     */
    delete<T extends ExecutionPhaseDeleteArgs>(args: SelectSubset<T, ExecutionPhaseDeleteArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExecutionPhase.
     * @param {ExecutionPhaseUpdateArgs} args - Arguments to update one ExecutionPhase.
     * @example
     * // Update one ExecutionPhase
     * const executionPhase = await prisma.executionPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionPhaseUpdateArgs>(args: SelectSubset<T, ExecutionPhaseUpdateArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExecutionPhases.
     * @param {ExecutionPhaseDeleteManyArgs} args - Arguments to filter ExecutionPhases to delete.
     * @example
     * // Delete a few ExecutionPhases
     * const { count } = await prisma.executionPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionPhaseDeleteManyArgs>(args?: SelectSubset<T, ExecutionPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionPhases
     * const executionPhase = await prisma.executionPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionPhaseUpdateManyArgs>(args: SelectSubset<T, ExecutionPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExecutionPhase.
     * @param {ExecutionPhaseUpsertArgs} args - Arguments to update or create a ExecutionPhase.
     * @example
     * // Update or create a ExecutionPhase
     * const executionPhase = await prisma.executionPhase.upsert({
     *   create: {
     *     // ... data to create a ExecutionPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionPhase we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionPhaseUpsertArgs>(args: SelectSubset<T, ExecutionPhaseUpsertArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExecutionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseCountArgs} args - Arguments to filter ExecutionPhases to count.
     * @example
     * // Count the number of ExecutionPhases
     * const count = await prisma.executionPhase.count({
     *   where: {
     *     // ... the filter for the ExecutionPhases we want to count
     *   }
     * })
    **/
    count<T extends ExecutionPhaseCountArgs>(
      args?: Subset<T, ExecutionPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionPhaseAggregateArgs>(args: Subset<T, ExecutionPhaseAggregateArgs>): Prisma.PrismaPromise<GetExecutionPhaseAggregateType<T>>

    /**
     * Group by ExecutionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionPhaseGroupByArgs} args - Group by arguments.
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
      T extends ExecutionPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionPhaseGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionPhaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionPhase model
   */
  readonly fields: ExecutionPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    execution<T extends workflowExecutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workflowExecutionDefaultArgs<ExtArgs>>): Prisma__workflowExecutionClient<$Result.GetResult<Prisma.$workflowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    logs<T extends ExecutionPhase$logsArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionPhase$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ExecutionPhase model
   */ 
  interface ExecutionPhaseFieldRefs {
    readonly id: FieldRef<"ExecutionPhase", 'String'>
    readonly userId: FieldRef<"ExecutionPhase", 'String'>
    readonly status: FieldRef<"ExecutionPhase", 'String'>
    readonly number: FieldRef<"ExecutionPhase", 'Int'>
    readonly node: FieldRef<"ExecutionPhase", 'String'>
    readonly name: FieldRef<"ExecutionPhase", 'String'>
    readonly startedAt: FieldRef<"ExecutionPhase", 'DateTime'>
    readonly completedAt: FieldRef<"ExecutionPhase", 'DateTime'>
    readonly inputs: FieldRef<"ExecutionPhase", 'String'>
    readonly outputs: FieldRef<"ExecutionPhase", 'String'>
    readonly creditsConsumed: FieldRef<"ExecutionPhase", 'Int'>
    readonly workflowExecutionId: FieldRef<"ExecutionPhase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionPhase findUnique
   */
  export type ExecutionPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase findUniqueOrThrow
   */
  export type ExecutionPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase findFirst
   */
  export type ExecutionPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionPhases.
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionPhases.
     */
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * ExecutionPhase findFirstOrThrow
   */
  export type ExecutionPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhase to fetch.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionPhases.
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionPhases.
     */
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * ExecutionPhase findMany
   */
  export type ExecutionPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionPhases to fetch.
     */
    where?: ExecutionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionPhases to fetch.
     */
    orderBy?: ExecutionPhaseOrderByWithRelationInput | ExecutionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionPhases.
     */
    cursor?: ExecutionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionPhases.
     */
    skip?: number
    distinct?: ExecutionPhaseScalarFieldEnum | ExecutionPhaseScalarFieldEnum[]
  }

  /**
   * ExecutionPhase create
   */
  export type ExecutionPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionPhase.
     */
    data: XOR<ExecutionPhaseCreateInput, ExecutionPhaseUncheckedCreateInput>
  }

  /**
   * ExecutionPhase createMany
   */
  export type ExecutionPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionPhases.
     */
    data: ExecutionPhaseCreateManyInput | ExecutionPhaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionPhase createManyAndReturn
   */
  export type ExecutionPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExecutionPhases.
     */
    data: ExecutionPhaseCreateManyInput | ExecutionPhaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionPhase update
   */
  export type ExecutionPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionPhase.
     */
    data: XOR<ExecutionPhaseUpdateInput, ExecutionPhaseUncheckedUpdateInput>
    /**
     * Choose, which ExecutionPhase to update.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase updateMany
   */
  export type ExecutionPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionPhases.
     */
    data: XOR<ExecutionPhaseUpdateManyMutationInput, ExecutionPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionPhases to update
     */
    where?: ExecutionPhaseWhereInput
  }

  /**
   * ExecutionPhase upsert
   */
  export type ExecutionPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionPhase to update in case it exists.
     */
    where: ExecutionPhaseWhereUniqueInput
    /**
     * In case the ExecutionPhase found by the `where` argument doesn't exist, create a new ExecutionPhase with this data.
     */
    create: XOR<ExecutionPhaseCreateInput, ExecutionPhaseUncheckedCreateInput>
    /**
     * In case the ExecutionPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionPhaseUpdateInput, ExecutionPhaseUncheckedUpdateInput>
  }

  /**
   * ExecutionPhase delete
   */
  export type ExecutionPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
    /**
     * Filter which ExecutionPhase to delete.
     */
    where: ExecutionPhaseWhereUniqueInput
  }

  /**
   * ExecutionPhase deleteMany
   */
  export type ExecutionPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionPhases to delete
     */
    where?: ExecutionPhaseWhereInput
  }

  /**
   * ExecutionPhase.logs
   */
  export type ExecutionPhase$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    cursor?: ExecutionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionPhase without action
   */
  export type ExecutionPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionPhase
     */
    select?: ExecutionPhaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionPhaseInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionLog
   */

  export type AggregateExecutionLog = {
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  export type ExecutionLogMinAggregateOutputType = {
    id: string | null
    logLevel: string | null
    message: string | null
    timestamp: Date | null
    executionPhaseId: string | null
  }

  export type ExecutionLogMaxAggregateOutputType = {
    id: string | null
    logLevel: string | null
    message: string | null
    timestamp: Date | null
    executionPhaseId: string | null
  }

  export type ExecutionLogCountAggregateOutputType = {
    id: number
    logLevel: number
    message: number
    timestamp: number
    executionPhaseId: number
    _all: number
  }


  export type ExecutionLogMinAggregateInputType = {
    id?: true
    logLevel?: true
    message?: true
    timestamp?: true
    executionPhaseId?: true
  }

  export type ExecutionLogMaxAggregateInputType = {
    id?: true
    logLevel?: true
    message?: true
    timestamp?: true
    executionPhaseId?: true
  }

  export type ExecutionLogCountAggregateInputType = {
    id?: true
    logLevel?: true
    message?: true
    timestamp?: true
    executionPhaseId?: true
    _all?: true
  }

  export type ExecutionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLog to aggregate.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionLogs
    **/
    _count?: true | ExecutionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type GetExecutionLogAggregateType<T extends ExecutionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionLog[P]>
      : GetScalarType<T[P], AggregateExecutionLog[P]>
  }




  export type ExecutionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionLogWhereInput
    orderBy?: ExecutionLogOrderByWithAggregationInput | ExecutionLogOrderByWithAggregationInput[]
    by: ExecutionLogScalarFieldEnum[] | ExecutionLogScalarFieldEnum
    having?: ExecutionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionLogCountAggregateInputType | true
    _min?: ExecutionLogMinAggregateInputType
    _max?: ExecutionLogMaxAggregateInputType
  }

  export type ExecutionLogGroupByOutputType = {
    id: string
    logLevel: string
    message: string
    timestamp: Date
    executionPhaseId: string
    _count: ExecutionLogCountAggregateOutputType | null
    _min: ExecutionLogMinAggregateOutputType | null
    _max: ExecutionLogMaxAggregateOutputType | null
  }

  type GetExecutionLogGroupByPayload<T extends ExecutionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionLogGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logLevel?: boolean
    message?: boolean
    timestamp?: boolean
    executionPhaseId?: boolean
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logLevel?: boolean
    message?: boolean
    timestamp?: boolean
    executionPhaseId?: boolean
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionLog"]>

  export type ExecutionLogSelectScalar = {
    id?: boolean
    logLevel?: boolean
    message?: boolean
    timestamp?: boolean
    executionPhaseId?: boolean
  }

  export type ExecutionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }
  export type ExecutionLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executionPhase?: boolean | ExecutionPhaseDefaultArgs<ExtArgs>
  }

  export type $ExecutionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionLog"
    objects: {
      executionPhase: Prisma.$ExecutionPhasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      logLevel: string
      message: string
      timestamp: Date
      executionPhaseId: string
    }, ExtArgs["result"]["executionLog"]>
    composites: {}
  }

  type ExecutionLogGetPayload<S extends boolean | null | undefined | ExecutionLogDefaultArgs> = $Result.GetResult<Prisma.$ExecutionLogPayload, S>

  type ExecutionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExecutionLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExecutionLogCountAggregateInputType | true
    }

  export interface ExecutionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionLog'], meta: { name: 'ExecutionLog' } }
    /**
     * Find zero or one ExecutionLog that matches the filter.
     * @param {ExecutionLogFindUniqueArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionLogFindUniqueArgs>(args: SelectSubset<T, ExecutionLogFindUniqueArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExecutionLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExecutionLogFindUniqueOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExecutionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionLogFindFirstArgs>(args?: SelectSubset<T, ExecutionLogFindFirstArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExecutionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindFirstOrThrowArgs} args - Arguments to find a ExecutionLog
     * @example
     * // Get one ExecutionLog
     * const executionLog = await prisma.executionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExecutionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany()
     * 
     * // Get first 10 ExecutionLogs
     * const executionLogs = await prisma.executionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionLogFindManyArgs>(args?: SelectSubset<T, ExecutionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExecutionLog.
     * @param {ExecutionLogCreateArgs} args - Arguments to create a ExecutionLog.
     * @example
     * // Create one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.create({
     *   data: {
     *     // ... data to create a ExecutionLog
     *   }
     * })
     * 
     */
    create<T extends ExecutionLogCreateArgs>(args: SelectSubset<T, ExecutionLogCreateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExecutionLogs.
     * @param {ExecutionLogCreateManyArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionLogCreateManyArgs>(args?: SelectSubset<T, ExecutionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionLogs and returns the data saved in the database.
     * @param {ExecutionLogCreateManyAndReturnArgs} args - Arguments to create many ExecutionLogs.
     * @example
     * // Create many ExecutionLogs
     * const executionLog = await prisma.executionLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionLogs and only return the `id`
     * const executionLogWithIdOnly = await prisma.executionLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExecutionLog.
     * @param {ExecutionLogDeleteArgs} args - Arguments to delete one ExecutionLog.
     * @example
     * // Delete one ExecutionLog
     * const ExecutionLog = await prisma.executionLog.delete({
     *   where: {
     *     // ... filter to delete one ExecutionLog
     *   }
     * })
     * 
     */
    delete<T extends ExecutionLogDeleteArgs>(args: SelectSubset<T, ExecutionLogDeleteArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExecutionLog.
     * @param {ExecutionLogUpdateArgs} args - Arguments to update one ExecutionLog.
     * @example
     * // Update one ExecutionLog
     * const executionLog = await prisma.executionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionLogUpdateArgs>(args: SelectSubset<T, ExecutionLogUpdateArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExecutionLogs.
     * @param {ExecutionLogDeleteManyArgs} args - Arguments to filter ExecutionLogs to delete.
     * @example
     * // Delete a few ExecutionLogs
     * const { count } = await prisma.executionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionLogDeleteManyArgs>(args?: SelectSubset<T, ExecutionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionLogs
     * const executionLog = await prisma.executionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionLogUpdateManyArgs>(args: SelectSubset<T, ExecutionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExecutionLog.
     * @param {ExecutionLogUpsertArgs} args - Arguments to update or create a ExecutionLog.
     * @example
     * // Update or create a ExecutionLog
     * const executionLog = await prisma.executionLog.upsert({
     *   create: {
     *     // ... data to create a ExecutionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionLog we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionLogUpsertArgs>(args: SelectSubset<T, ExecutionLogUpsertArgs<ExtArgs>>): Prisma__ExecutionLogClient<$Result.GetResult<Prisma.$ExecutionLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExecutionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogCountArgs} args - Arguments to filter ExecutionLogs to count.
     * @example
     * // Count the number of ExecutionLogs
     * const count = await prisma.executionLog.count({
     *   where: {
     *     // ... the filter for the ExecutionLogs we want to count
     *   }
     * })
    **/
    count<T extends ExecutionLogCountArgs>(
      args?: Subset<T, ExecutionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionLogAggregateArgs>(args: Subset<T, ExecutionLogAggregateArgs>): Prisma.PrismaPromise<GetExecutionLogAggregateType<T>>

    /**
     * Group by ExecutionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionLogGroupByArgs} args - Group by arguments.
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
      T extends ExecutionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionLogGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionLog model
   */
  readonly fields: ExecutionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executionPhase<T extends ExecutionPhaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExecutionPhaseDefaultArgs<ExtArgs>>): Prisma__ExecutionPhaseClient<$Result.GetResult<Prisma.$ExecutionPhasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ExecutionLog model
   */ 
  interface ExecutionLogFieldRefs {
    readonly id: FieldRef<"ExecutionLog", 'String'>
    readonly logLevel: FieldRef<"ExecutionLog", 'String'>
    readonly message: FieldRef<"ExecutionLog", 'String'>
    readonly timestamp: FieldRef<"ExecutionLog", 'DateTime'>
    readonly executionPhaseId: FieldRef<"ExecutionLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionLog findUnique
   */
  export type ExecutionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findUniqueOrThrow
   */
  export type ExecutionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog findFirst
   */
  export type ExecutionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findFirstOrThrow
   */
  export type ExecutionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLog to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionLogs.
     */
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog findMany
   */
  export type ExecutionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionLogs to fetch.
     */
    where?: ExecutionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionLogs to fetch.
     */
    orderBy?: ExecutionLogOrderByWithRelationInput | ExecutionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionLogs.
     */
    cursor?: ExecutionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionLogs.
     */
    skip?: number
    distinct?: ExecutionLogScalarFieldEnum | ExecutionLogScalarFieldEnum[]
  }

  /**
   * ExecutionLog create
   */
  export type ExecutionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionLog.
     */
    data: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
  }

  /**
   * ExecutionLog createMany
   */
  export type ExecutionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionLog createManyAndReturn
   */
  export type ExecutionLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExecutionLogs.
     */
    data: ExecutionLogCreateManyInput | ExecutionLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionLog update
   */
  export type ExecutionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionLog.
     */
    data: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
    /**
     * Choose, which ExecutionLog to update.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog updateMany
   */
  export type ExecutionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionLogs.
     */
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionLogs to update
     */
    where?: ExecutionLogWhereInput
  }

  /**
   * ExecutionLog upsert
   */
  export type ExecutionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionLog to update in case it exists.
     */
    where: ExecutionLogWhereUniqueInput
    /**
     * In case the ExecutionLog found by the `where` argument doesn't exist, create a new ExecutionLog with this data.
     */
    create: XOR<ExecutionLogCreateInput, ExecutionLogUncheckedCreateInput>
    /**
     * In case the ExecutionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionLogUpdateInput, ExecutionLogUncheckedUpdateInput>
  }

  /**
   * ExecutionLog delete
   */
  export type ExecutionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
    /**
     * Filter which ExecutionLog to delete.
     */
    where: ExecutionLogWhereUniqueInput
  }

  /**
   * ExecutionLog deleteMany
   */
  export type ExecutionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionLogs to delete
     */
    where?: ExecutionLogWhereInput
  }

  /**
   * ExecutionLog without action
   */
  export type ExecutionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionLog
     */
    select?: ExecutionLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionLogInclude<ExtArgs> | null
  }


  /**
   * Model UserBalance
   */

  export type AggregateUserBalance = {
    _count: UserBalanceCountAggregateOutputType | null
    _avg: UserBalanceAvgAggregateOutputType | null
    _sum: UserBalanceSumAggregateOutputType | null
    _min: UserBalanceMinAggregateOutputType | null
    _max: UserBalanceMaxAggregateOutputType | null
  }

  export type UserBalanceAvgAggregateOutputType = {
    credits: number | null
  }

  export type UserBalanceSumAggregateOutputType = {
    credits: number | null
  }

  export type UserBalanceMinAggregateOutputType = {
    userId: string | null
    credits: number | null
  }

  export type UserBalanceMaxAggregateOutputType = {
    userId: string | null
    credits: number | null
  }

  export type UserBalanceCountAggregateOutputType = {
    userId: number
    credits: number
    _all: number
  }


  export type UserBalanceAvgAggregateInputType = {
    credits?: true
  }

  export type UserBalanceSumAggregateInputType = {
    credits?: true
  }

  export type UserBalanceMinAggregateInputType = {
    userId?: true
    credits?: true
  }

  export type UserBalanceMaxAggregateInputType = {
    userId?: true
    credits?: true
  }

  export type UserBalanceCountAggregateInputType = {
    userId?: true
    credits?: true
    _all?: true
  }

  export type UserBalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBalance to aggregate.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserBalances
    **/
    _count?: true | UserBalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserBalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserBalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserBalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserBalanceMaxAggregateInputType
  }

  export type GetUserBalanceAggregateType<T extends UserBalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserBalance[P]>
      : GetScalarType<T[P], AggregateUserBalance[P]>
  }




  export type UserBalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserBalanceWhereInput
    orderBy?: UserBalanceOrderByWithAggregationInput | UserBalanceOrderByWithAggregationInput[]
    by: UserBalanceScalarFieldEnum[] | UserBalanceScalarFieldEnum
    having?: UserBalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserBalanceCountAggregateInputType | true
    _avg?: UserBalanceAvgAggregateInputType
    _sum?: UserBalanceSumAggregateInputType
    _min?: UserBalanceMinAggregateInputType
    _max?: UserBalanceMaxAggregateInputType
  }

  export type UserBalanceGroupByOutputType = {
    userId: string
    credits: number
    _count: UserBalanceCountAggregateOutputType | null
    _avg: UserBalanceAvgAggregateOutputType | null
    _sum: UserBalanceSumAggregateOutputType | null
    _min: UserBalanceMinAggregateOutputType | null
    _max: UserBalanceMaxAggregateOutputType | null
  }

  type GetUserBalanceGroupByPayload<T extends UserBalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserBalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserBalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserBalanceGroupByOutputType[P]>
            : GetScalarType<T[P], UserBalanceGroupByOutputType[P]>
        }
      >
    >


  export type UserBalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    credits?: boolean
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    credits?: boolean
  }, ExtArgs["result"]["userBalance"]>

  export type UserBalanceSelectScalar = {
    userId?: boolean
    credits?: boolean
  }


  export type $UserBalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserBalance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      credits: number
    }, ExtArgs["result"]["userBalance"]>
    composites: {}
  }

  type UserBalanceGetPayload<S extends boolean | null | undefined | UserBalanceDefaultArgs> = $Result.GetResult<Prisma.$UserBalancePayload, S>

  type UserBalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserBalanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserBalanceCountAggregateInputType | true
    }

  export interface UserBalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserBalance'], meta: { name: 'UserBalance' } }
    /**
     * Find zero or one UserBalance that matches the filter.
     * @param {UserBalanceFindUniqueArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserBalanceFindUniqueArgs>(args: SelectSubset<T, UserBalanceFindUniqueArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserBalance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserBalanceFindUniqueOrThrowArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserBalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserBalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserBalance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindFirstArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserBalanceFindFirstArgs>(args?: SelectSubset<T, UserBalanceFindFirstArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserBalance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindFirstOrThrowArgs} args - Arguments to find a UserBalance
     * @example
     * // Get one UserBalance
     * const userBalance = await prisma.userBalance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserBalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserBalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserBalances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserBalances
     * const userBalances = await prisma.userBalance.findMany()
     * 
     * // Get first 10 UserBalances
     * const userBalances = await prisma.userBalance.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userBalanceWithUserIdOnly = await prisma.userBalance.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserBalanceFindManyArgs>(args?: SelectSubset<T, UserBalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserBalance.
     * @param {UserBalanceCreateArgs} args - Arguments to create a UserBalance.
     * @example
     * // Create one UserBalance
     * const UserBalance = await prisma.userBalance.create({
     *   data: {
     *     // ... data to create a UserBalance
     *   }
     * })
     * 
     */
    create<T extends UserBalanceCreateArgs>(args: SelectSubset<T, UserBalanceCreateArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserBalances.
     * @param {UserBalanceCreateManyArgs} args - Arguments to create many UserBalances.
     * @example
     * // Create many UserBalances
     * const userBalance = await prisma.userBalance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserBalanceCreateManyArgs>(args?: SelectSubset<T, UserBalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserBalances and returns the data saved in the database.
     * @param {UserBalanceCreateManyAndReturnArgs} args - Arguments to create many UserBalances.
     * @example
     * // Create many UserBalances
     * const userBalance = await prisma.userBalance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserBalances and only return the `userId`
     * const userBalanceWithUserIdOnly = await prisma.userBalance.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserBalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserBalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserBalance.
     * @param {UserBalanceDeleteArgs} args - Arguments to delete one UserBalance.
     * @example
     * // Delete one UserBalance
     * const UserBalance = await prisma.userBalance.delete({
     *   where: {
     *     // ... filter to delete one UserBalance
     *   }
     * })
     * 
     */
    delete<T extends UserBalanceDeleteArgs>(args: SelectSubset<T, UserBalanceDeleteArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserBalance.
     * @param {UserBalanceUpdateArgs} args - Arguments to update one UserBalance.
     * @example
     * // Update one UserBalance
     * const userBalance = await prisma.userBalance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserBalanceUpdateArgs>(args: SelectSubset<T, UserBalanceUpdateArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserBalances.
     * @param {UserBalanceDeleteManyArgs} args - Arguments to filter UserBalances to delete.
     * @example
     * // Delete a few UserBalances
     * const { count } = await prisma.userBalance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserBalanceDeleteManyArgs>(args?: SelectSubset<T, UserBalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserBalances
     * const userBalance = await prisma.userBalance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserBalanceUpdateManyArgs>(args: SelectSubset<T, UserBalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserBalance.
     * @param {UserBalanceUpsertArgs} args - Arguments to update or create a UserBalance.
     * @example
     * // Update or create a UserBalance
     * const userBalance = await prisma.userBalance.upsert({
     *   create: {
     *     // ... data to create a UserBalance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserBalance we want to update
     *   }
     * })
     */
    upsert<T extends UserBalanceUpsertArgs>(args: SelectSubset<T, UserBalanceUpsertArgs<ExtArgs>>): Prisma__UserBalanceClient<$Result.GetResult<Prisma.$UserBalancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserBalances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceCountArgs} args - Arguments to filter UserBalances to count.
     * @example
     * // Count the number of UserBalances
     * const count = await prisma.userBalance.count({
     *   where: {
     *     // ... the filter for the UserBalances we want to count
     *   }
     * })
    **/
    count<T extends UserBalanceCountArgs>(
      args?: Subset<T, UserBalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserBalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserBalanceAggregateArgs>(args: Subset<T, UserBalanceAggregateArgs>): Prisma.PrismaPromise<GetUserBalanceAggregateType<T>>

    /**
     * Group by UserBalance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserBalanceGroupByArgs} args - Group by arguments.
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
      T extends UserBalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserBalanceGroupByArgs['orderBy'] }
        : { orderBy?: UserBalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserBalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserBalance model
   */
  readonly fields: UserBalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserBalance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserBalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserBalance model
   */ 
  interface UserBalanceFieldRefs {
    readonly userId: FieldRef<"UserBalance", 'String'>
    readonly credits: FieldRef<"UserBalance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserBalance findUnique
   */
  export type UserBalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance findUniqueOrThrow
   */
  export type UserBalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance findFirst
   */
  export type UserBalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBalances.
     */
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance findFirstOrThrow
   */
  export type UserBalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Filter, which UserBalance to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserBalances.
     */
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance findMany
   */
  export type UserBalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Filter, which UserBalances to fetch.
     */
    where?: UserBalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserBalances to fetch.
     */
    orderBy?: UserBalanceOrderByWithRelationInput | UserBalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserBalances.
     */
    cursor?: UserBalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserBalances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserBalances.
     */
    skip?: number
    distinct?: UserBalanceScalarFieldEnum | UserBalanceScalarFieldEnum[]
  }

  /**
   * UserBalance create
   */
  export type UserBalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * The data needed to create a UserBalance.
     */
    data: XOR<UserBalanceCreateInput, UserBalanceUncheckedCreateInput>
  }

  /**
   * UserBalance createMany
   */
  export type UserBalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserBalances.
     */
    data: UserBalanceCreateManyInput | UserBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBalance createManyAndReturn
   */
  export type UserBalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserBalances.
     */
    data: UserBalanceCreateManyInput | UserBalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserBalance update
   */
  export type UserBalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * The data needed to update a UserBalance.
     */
    data: XOR<UserBalanceUpdateInput, UserBalanceUncheckedUpdateInput>
    /**
     * Choose, which UserBalance to update.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance updateMany
   */
  export type UserBalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserBalances.
     */
    data: XOR<UserBalanceUpdateManyMutationInput, UserBalanceUncheckedUpdateManyInput>
    /**
     * Filter which UserBalances to update
     */
    where?: UserBalanceWhereInput
  }

  /**
   * UserBalance upsert
   */
  export type UserBalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * The filter to search for the UserBalance to update in case it exists.
     */
    where: UserBalanceWhereUniqueInput
    /**
     * In case the UserBalance found by the `where` argument doesn't exist, create a new UserBalance with this data.
     */
    create: XOR<UserBalanceCreateInput, UserBalanceUncheckedCreateInput>
    /**
     * In case the UserBalance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserBalanceUpdateInput, UserBalanceUncheckedUpdateInput>
  }

  /**
   * UserBalance delete
   */
  export type UserBalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
    /**
     * Filter which UserBalance to delete.
     */
    where: UserBalanceWhereUniqueInput
  }

  /**
   * UserBalance deleteMany
   */
  export type UserBalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserBalances to delete
     */
    where?: UserBalanceWhereInput
  }

  /**
   * UserBalance without action
   */
  export type UserBalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserBalance
     */
    select?: UserBalanceSelect<ExtArgs> | null
  }


  /**
   * Model credential
   */

  export type AggregateCredential = {
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  export type CredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
  }

  export type CredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    value: string | null
    createdAt: Date | null
  }

  export type CredentialCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    value: number
    createdAt: number
    _all: number
  }


  export type CredentialMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    value?: true
    createdAt?: true
  }

  export type CredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    value?: true
    createdAt?: true
  }

  export type CredentialCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    value?: true
    createdAt?: true
    _all?: true
  }

  export type CredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credential to aggregate.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned credentials
    **/
    _count?: true | CredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredentialMaxAggregateInputType
  }

  export type GetCredentialAggregateType<T extends CredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredential[P]>
      : GetScalarType<T[P], AggregateCredential[P]>
  }




  export type credentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: credentialWhereInput
    orderBy?: credentialOrderByWithAggregationInput | credentialOrderByWithAggregationInput[]
    by: CredentialScalarFieldEnum[] | CredentialScalarFieldEnum
    having?: credentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredentialCountAggregateInputType | true
    _min?: CredentialMinAggregateInputType
    _max?: CredentialMaxAggregateInputType
  }

  export type CredentialGroupByOutputType = {
    id: string
    userId: string
    name: string
    value: string
    createdAt: Date
    _count: CredentialCountAggregateOutputType | null
    _min: CredentialMinAggregateOutputType | null
    _max: CredentialMaxAggregateOutputType | null
  }

  type GetCredentialGroupByPayload<T extends credentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredentialGroupByOutputType[P]>
            : GetScalarType<T[P], CredentialGroupByOutputType[P]>
        }
      >
    >


  export type credentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["credential"]>

  export type credentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["credential"]>

  export type credentialSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    value?: boolean
    createdAt?: boolean
  }


  export type $credentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "credential"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      value: string
      createdAt: Date
    }, ExtArgs["result"]["credential"]>
    composites: {}
  }

  type credentialGetPayload<S extends boolean | null | undefined | credentialDefaultArgs> = $Result.GetResult<Prisma.$credentialPayload, S>

  type credentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<credentialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CredentialCountAggregateInputType | true
    }

  export interface credentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['credential'], meta: { name: 'credential' } }
    /**
     * Find zero or one Credential that matches the filter.
     * @param {credentialFindUniqueArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends credentialFindUniqueArgs>(args: SelectSubset<T, credentialFindUniqueArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Credential that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {credentialFindUniqueOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends credentialFindUniqueOrThrowArgs>(args: SelectSubset<T, credentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Credential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialFindFirstArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends credentialFindFirstArgs>(args?: SelectSubset<T, credentialFindFirstArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Credential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialFindFirstOrThrowArgs} args - Arguments to find a Credential
     * @example
     * // Get one Credential
     * const credential = await prisma.credential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends credentialFindFirstOrThrowArgs>(args?: SelectSubset<T, credentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Credentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credentials
     * const credentials = await prisma.credential.findMany()
     * 
     * // Get first 10 Credentials
     * const credentials = await prisma.credential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credentialWithIdOnly = await prisma.credential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends credentialFindManyArgs>(args?: SelectSubset<T, credentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Credential.
     * @param {credentialCreateArgs} args - Arguments to create a Credential.
     * @example
     * // Create one Credential
     * const Credential = await prisma.credential.create({
     *   data: {
     *     // ... data to create a Credential
     *   }
     * })
     * 
     */
    create<T extends credentialCreateArgs>(args: SelectSubset<T, credentialCreateArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Credentials.
     * @param {credentialCreateManyArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends credentialCreateManyArgs>(args?: SelectSubset<T, credentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credentials and returns the data saved in the database.
     * @param {credentialCreateManyAndReturnArgs} args - Arguments to create many Credentials.
     * @example
     * // Create many Credentials
     * const credential = await prisma.credential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credentials and only return the `id`
     * const credentialWithIdOnly = await prisma.credential.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends credentialCreateManyAndReturnArgs>(args?: SelectSubset<T, credentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Credential.
     * @param {credentialDeleteArgs} args - Arguments to delete one Credential.
     * @example
     * // Delete one Credential
     * const Credential = await prisma.credential.delete({
     *   where: {
     *     // ... filter to delete one Credential
     *   }
     * })
     * 
     */
    delete<T extends credentialDeleteArgs>(args: SelectSubset<T, credentialDeleteArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Credential.
     * @param {credentialUpdateArgs} args - Arguments to update one Credential.
     * @example
     * // Update one Credential
     * const credential = await prisma.credential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends credentialUpdateArgs>(args: SelectSubset<T, credentialUpdateArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Credentials.
     * @param {credentialDeleteManyArgs} args - Arguments to filter Credentials to delete.
     * @example
     * // Delete a few Credentials
     * const { count } = await prisma.credential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends credentialDeleteManyArgs>(args?: SelectSubset<T, credentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credentials
     * const credential = await prisma.credential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends credentialUpdateManyArgs>(args: SelectSubset<T, credentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Credential.
     * @param {credentialUpsertArgs} args - Arguments to update or create a Credential.
     * @example
     * // Update or create a Credential
     * const credential = await prisma.credential.upsert({
     *   create: {
     *     // ... data to create a Credential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credential we want to update
     *   }
     * })
     */
    upsert<T extends credentialUpsertArgs>(args: SelectSubset<T, credentialUpsertArgs<ExtArgs>>): Prisma__credentialClient<$Result.GetResult<Prisma.$credentialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Credentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialCountArgs} args - Arguments to filter Credentials to count.
     * @example
     * // Count the number of Credentials
     * const count = await prisma.credential.count({
     *   where: {
     *     // ... the filter for the Credentials we want to count
     *   }
     * })
    **/
    count<T extends credentialCountArgs>(
      args?: Subset<T, credentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredentialAggregateArgs>(args: Subset<T, CredentialAggregateArgs>): Prisma.PrismaPromise<GetCredentialAggregateType<T>>

    /**
     * Group by Credential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {credentialGroupByArgs} args - Group by arguments.
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
      T extends credentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: credentialGroupByArgs['orderBy'] }
        : { orderBy?: credentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, credentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the credential model
   */
  readonly fields: credentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for credential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__credentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the credential model
   */ 
  interface credentialFieldRefs {
    readonly id: FieldRef<"credential", 'String'>
    readonly userId: FieldRef<"credential", 'String'>
    readonly name: FieldRef<"credential", 'String'>
    readonly value: FieldRef<"credential", 'String'>
    readonly createdAt: FieldRef<"credential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * credential findUnique
   */
  export type credentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where: credentialWhereUniqueInput
  }

  /**
   * credential findUniqueOrThrow
   */
  export type credentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where: credentialWhereUniqueInput
  }

  /**
   * credential findFirst
   */
  export type credentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * credential findFirstOrThrow
   */
  export type credentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credential to fetch.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for credentials.
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of credentials.
     */
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * credential findMany
   */
  export type credentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter, which credentials to fetch.
     */
    where?: credentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of credentials to fetch.
     */
    orderBy?: credentialOrderByWithRelationInput | credentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing credentials.
     */
    cursor?: credentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` credentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` credentials.
     */
    skip?: number
    distinct?: CredentialScalarFieldEnum | CredentialScalarFieldEnum[]
  }

  /**
   * credential create
   */
  export type credentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * The data needed to create a credential.
     */
    data: XOR<credentialCreateInput, credentialUncheckedCreateInput>
  }

  /**
   * credential createMany
   */
  export type credentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many credentials.
     */
    data: credentialCreateManyInput | credentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * credential createManyAndReturn
   */
  export type credentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many credentials.
     */
    data: credentialCreateManyInput | credentialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * credential update
   */
  export type credentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * The data needed to update a credential.
     */
    data: XOR<credentialUpdateInput, credentialUncheckedUpdateInput>
    /**
     * Choose, which credential to update.
     */
    where: credentialWhereUniqueInput
  }

  /**
   * credential updateMany
   */
  export type credentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update credentials.
     */
    data: XOR<credentialUpdateManyMutationInput, credentialUncheckedUpdateManyInput>
    /**
     * Filter which credentials to update
     */
    where?: credentialWhereInput
  }

  /**
   * credential upsert
   */
  export type credentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * The filter to search for the credential to update in case it exists.
     */
    where: credentialWhereUniqueInput
    /**
     * In case the credential found by the `where` argument doesn't exist, create a new credential with this data.
     */
    create: XOR<credentialCreateInput, credentialUncheckedCreateInput>
    /**
     * In case the credential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<credentialUpdateInput, credentialUncheckedUpdateInput>
  }

  /**
   * credential delete
   */
  export type credentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
    /**
     * Filter which credential to delete.
     */
    where: credentialWhereUniqueInput
  }

  /**
   * credential deleteMany
   */
  export type credentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which credentials to delete
     */
    where?: credentialWhereInput
  }

  /**
   * credential without action
   */
  export type credentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the credential
     */
    select?: credentialSelect<ExtArgs> | null
  }


  /**
   * Model UserPurchase
   */

  export type AggregateUserPurchase = {
    _count: UserPurchaseCountAggregateOutputType | null
    _avg: UserPurchaseAvgAggregateOutputType | null
    _sum: UserPurchaseSumAggregateOutputType | null
    _min: UserPurchaseMinAggregateOutputType | null
    _max: UserPurchaseMaxAggregateOutputType | null
  }

  export type UserPurchaseAvgAggregateOutputType = {
    amount: number | null
  }

  export type UserPurchaseSumAggregateOutputType = {
    amount: number | null
  }

  export type UserPurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeId: string | null
    description: string | null
    amount: number | null
    currency: string | null
    date: Date | null
  }

  export type UserPurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeId: string | null
    description: string | null
    amount: number | null
    currency: string | null
    date: Date | null
  }

  export type UserPurchaseCountAggregateOutputType = {
    id: number
    userId: number
    stripeId: number
    description: number
    amount: number
    currency: number
    date: number
    _all: number
  }


  export type UserPurchaseAvgAggregateInputType = {
    amount?: true
  }

  export type UserPurchaseSumAggregateInputType = {
    amount?: true
  }

  export type UserPurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    stripeId?: true
    description?: true
    amount?: true
    currency?: true
    date?: true
  }

  export type UserPurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeId?: true
    description?: true
    amount?: true
    currency?: true
    date?: true
  }

  export type UserPurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    stripeId?: true
    description?: true
    amount?: true
    currency?: true
    date?: true
    _all?: true
  }

  export type UserPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPurchase to aggregate.
     */
    where?: UserPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPurchases to fetch.
     */
    orderBy?: UserPurchaseOrderByWithRelationInput | UserPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPurchases
    **/
    _count?: true | UserPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPurchaseMaxAggregateInputType
  }

  export type GetUserPurchaseAggregateType<T extends UserPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPurchase[P]>
      : GetScalarType<T[P], AggregateUserPurchase[P]>
  }




  export type UserPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPurchaseWhereInput
    orderBy?: UserPurchaseOrderByWithAggregationInput | UserPurchaseOrderByWithAggregationInput[]
    by: UserPurchaseScalarFieldEnum[] | UserPurchaseScalarFieldEnum
    having?: UserPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPurchaseCountAggregateInputType | true
    _avg?: UserPurchaseAvgAggregateInputType
    _sum?: UserPurchaseSumAggregateInputType
    _min?: UserPurchaseMinAggregateInputType
    _max?: UserPurchaseMaxAggregateInputType
  }

  export type UserPurchaseGroupByOutputType = {
    id: string
    userId: string
    stripeId: string
    description: string
    amount: number
    currency: string
    date: Date
    _count: UserPurchaseCountAggregateOutputType | null
    _avg: UserPurchaseAvgAggregateOutputType | null
    _sum: UserPurchaseSumAggregateOutputType | null
    _min: UserPurchaseMinAggregateOutputType | null
    _max: UserPurchaseMaxAggregateOutputType | null
  }

  type GetUserPurchaseGroupByPayload<T extends UserPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], UserPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type UserPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeId?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    date?: boolean
  }, ExtArgs["result"]["userPurchase"]>

  export type UserPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeId?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    date?: boolean
  }, ExtArgs["result"]["userPurchase"]>

  export type UserPurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeId?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    date?: boolean
  }


  export type $UserPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPurchase"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeId: string
      description: string
      amount: number
      currency: string
      date: Date
    }, ExtArgs["result"]["userPurchase"]>
    composites: {}
  }

  type UserPurchaseGetPayload<S extends boolean | null | undefined | UserPurchaseDefaultArgs> = $Result.GetResult<Prisma.$UserPurchasePayload, S>

  type UserPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPurchaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPurchaseCountAggregateInputType | true
    }

  export interface UserPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPurchase'], meta: { name: 'UserPurchase' } }
    /**
     * Find zero or one UserPurchase that matches the filter.
     * @param {UserPurchaseFindUniqueArgs} args - Arguments to find a UserPurchase
     * @example
     * // Get one UserPurchase
     * const userPurchase = await prisma.userPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPurchaseFindUniqueArgs>(args: SelectSubset<T, UserPurchaseFindUniqueArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPurchase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPurchaseFindUniqueOrThrowArgs} args - Arguments to find a UserPurchase
     * @example
     * // Get one UserPurchase
     * const userPurchase = await prisma.userPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPurchaseFindFirstArgs} args - Arguments to find a UserPurchase
     * @example
     * // Get one UserPurchase
     * const userPurchase = await prisma.userPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPurchaseFindFirstArgs>(args?: SelectSubset<T, UserPurchaseFindFirstArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPurchaseFindFirstOrThrowArgs} args - Arguments to find a UserPurchase
     * @example
     * // Get one UserPurchase
     * const userPurchase = await prisma.userPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPurchases
     * const userPurchases = await prisma.userPurchase.findMany()
     * 
     * // Get first 10 UserPurchases
     * const userPurchases = await prisma.userPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPurchaseWithIdOnly = await prisma.userPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPurchaseFindManyArgs>(args?: SelectSubset<T, UserPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPurchase.
     * @param {UserPurchaseCreateArgs} args - Arguments to create a UserPurchase.
     * @example
     * // Create one UserPurchase
     * const UserPurchase = await prisma.userPurchase.create({
     *   data: {
     *     // ... data to create a UserPurchase
     *   }
     * })
     * 
     */
    create<T extends UserPurchaseCreateArgs>(args: SelectSubset<T, UserPurchaseCreateArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPurchases.
     * @param {UserPurchaseCreateManyArgs} args - Arguments to create many UserPurchases.
     * @example
     * // Create many UserPurchases
     * const userPurchase = await prisma.userPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPurchaseCreateManyArgs>(args?: SelectSubset<T, UserPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPurchases and returns the data saved in the database.
     * @param {UserPurchaseCreateManyAndReturnArgs} args - Arguments to create many UserPurchases.
     * @example
     * // Create many UserPurchases
     * const userPurchase = await prisma.userPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPurchases and only return the `id`
     * const userPurchaseWithIdOnly = await prisma.userPurchase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPurchase.
     * @param {UserPurchaseDeleteArgs} args - Arguments to delete one UserPurchase.
     * @example
     * // Delete one UserPurchase
     * const UserPurchase = await prisma.userPurchase.delete({
     *   where: {
     *     // ... filter to delete one UserPurchase
     *   }
     * })
     * 
     */
    delete<T extends UserPurchaseDeleteArgs>(args: SelectSubset<T, UserPurchaseDeleteArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPurchase.
     * @param {UserPurchaseUpdateArgs} args - Arguments to update one UserPurchase.
     * @example
     * // Update one UserPurchase
     * const userPurchase = await prisma.userPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPurchaseUpdateArgs>(args: SelectSubset<T, UserPurchaseUpdateArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPurchases.
     * @param {UserPurchaseDeleteManyArgs} args - Arguments to filter UserPurchases to delete.
     * @example
     * // Delete a few UserPurchases
     * const { count } = await prisma.userPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPurchaseDeleteManyArgs>(args?: SelectSubset<T, UserPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPurchases
     * const userPurchase = await prisma.userPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPurchaseUpdateManyArgs>(args: SelectSubset<T, UserPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPurchase.
     * @param {UserPurchaseUpsertArgs} args - Arguments to update or create a UserPurchase.
     * @example
     * // Update or create a UserPurchase
     * const userPurchase = await prisma.userPurchase.upsert({
     *   create: {
     *     // ... data to create a UserPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPurchase we want to update
     *   }
     * })
     */
    upsert<T extends UserPurchaseUpsertArgs>(args: SelectSubset<T, UserPurchaseUpsertArgs<ExtArgs>>): Prisma__UserPurchaseClient<$Result.GetResult<Prisma.$UserPurchasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPurchaseCountArgs} args - Arguments to filter UserPurchases to count.
     * @example
     * // Count the number of UserPurchases
     * const count = await prisma.userPurchase.count({
     *   where: {
     *     // ... the filter for the UserPurchases we want to count
     *   }
     * })
    **/
    count<T extends UserPurchaseCountArgs>(
      args?: Subset<T, UserPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPurchaseAggregateArgs>(args: Subset<T, UserPurchaseAggregateArgs>): Prisma.PrismaPromise<GetUserPurchaseAggregateType<T>>

    /**
     * Group by UserPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPurchaseGroupByArgs} args - Group by arguments.
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
      T extends UserPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: UserPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPurchase model
   */
  readonly fields: UserPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserPurchase model
   */ 
  interface UserPurchaseFieldRefs {
    readonly id: FieldRef<"UserPurchase", 'String'>
    readonly userId: FieldRef<"UserPurchase", 'String'>
    readonly stripeId: FieldRef<"UserPurchase", 'String'>
    readonly description: FieldRef<"UserPurchase", 'String'>
    readonly amount: FieldRef<"UserPurchase", 'Int'>
    readonly currency: FieldRef<"UserPurchase", 'String'>
    readonly date: FieldRef<"UserPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPurchase findUnique
   */
  export type UserPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which UserPurchase to fetch.
     */
    where: UserPurchaseWhereUniqueInput
  }

  /**
   * UserPurchase findUniqueOrThrow
   */
  export type UserPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which UserPurchase to fetch.
     */
    where: UserPurchaseWhereUniqueInput
  }

  /**
   * UserPurchase findFirst
   */
  export type UserPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which UserPurchase to fetch.
     */
    where?: UserPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPurchases to fetch.
     */
    orderBy?: UserPurchaseOrderByWithRelationInput | UserPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPurchases.
     */
    cursor?: UserPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPurchases.
     */
    distinct?: UserPurchaseScalarFieldEnum | UserPurchaseScalarFieldEnum[]
  }

  /**
   * UserPurchase findFirstOrThrow
   */
  export type UserPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which UserPurchase to fetch.
     */
    where?: UserPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPurchases to fetch.
     */
    orderBy?: UserPurchaseOrderByWithRelationInput | UserPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPurchases.
     */
    cursor?: UserPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPurchases.
     */
    distinct?: UserPurchaseScalarFieldEnum | UserPurchaseScalarFieldEnum[]
  }

  /**
   * UserPurchase findMany
   */
  export type UserPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * Filter, which UserPurchases to fetch.
     */
    where?: UserPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPurchases to fetch.
     */
    orderBy?: UserPurchaseOrderByWithRelationInput | UserPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPurchases.
     */
    cursor?: UserPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPurchases.
     */
    skip?: number
    distinct?: UserPurchaseScalarFieldEnum | UserPurchaseScalarFieldEnum[]
  }

  /**
   * UserPurchase create
   */
  export type UserPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * The data needed to create a UserPurchase.
     */
    data: XOR<UserPurchaseCreateInput, UserPurchaseUncheckedCreateInput>
  }

  /**
   * UserPurchase createMany
   */
  export type UserPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPurchases.
     */
    data: UserPurchaseCreateManyInput | UserPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPurchase createManyAndReturn
   */
  export type UserPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPurchases.
     */
    data: UserPurchaseCreateManyInput | UserPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPurchase update
   */
  export type UserPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * The data needed to update a UserPurchase.
     */
    data: XOR<UserPurchaseUpdateInput, UserPurchaseUncheckedUpdateInput>
    /**
     * Choose, which UserPurchase to update.
     */
    where: UserPurchaseWhereUniqueInput
  }

  /**
   * UserPurchase updateMany
   */
  export type UserPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPurchases.
     */
    data: XOR<UserPurchaseUpdateManyMutationInput, UserPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which UserPurchases to update
     */
    where?: UserPurchaseWhereInput
  }

  /**
   * UserPurchase upsert
   */
  export type UserPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * The filter to search for the UserPurchase to update in case it exists.
     */
    where: UserPurchaseWhereUniqueInput
    /**
     * In case the UserPurchase found by the `where` argument doesn't exist, create a new UserPurchase with this data.
     */
    create: XOR<UserPurchaseCreateInput, UserPurchaseUncheckedCreateInput>
    /**
     * In case the UserPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPurchaseUpdateInput, UserPurchaseUncheckedUpdateInput>
  }

  /**
   * UserPurchase delete
   */
  export type UserPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
    /**
     * Filter which UserPurchase to delete.
     */
    where: UserPurchaseWhereUniqueInput
  }

  /**
   * UserPurchase deleteMany
   */
  export type UserPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPurchases to delete
     */
    where?: UserPurchaseWhereInput
  }

  /**
   * UserPurchase without action
   */
  export type UserPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPurchase
     */
    select?: UserPurchaseSelect<ExtArgs> | null
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


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    definition: 'definition',
    executionPlan: 'executionPlan',
    creditsCost: 'creditsCost',
    cron: 'cron',
    status: 'status',
    lastRunAt: 'lastRunAt',
    lastRunId: 'lastRunId',
    lastRunStatus: 'lastRunStatus',
    nextRunAt: 'nextRunAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowExecutionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    userId: 'userId',
    trigger: 'trigger',
    status: 'status',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    definition: 'definition',
    creditsConsumed: 'creditsConsumed'
  };

  export type WorkflowExecutionScalarFieldEnum = (typeof WorkflowExecutionScalarFieldEnum)[keyof typeof WorkflowExecutionScalarFieldEnum]


  export const ExecutionPhaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    number: 'number',
    node: 'node',
    name: 'name',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    inputs: 'inputs',
    outputs: 'outputs',
    creditsConsumed: 'creditsConsumed',
    workflowExecutionId: 'workflowExecutionId'
  };

  export type ExecutionPhaseScalarFieldEnum = (typeof ExecutionPhaseScalarFieldEnum)[keyof typeof ExecutionPhaseScalarFieldEnum]


  export const ExecutionLogScalarFieldEnum: {
    id: 'id',
    logLevel: 'logLevel',
    message: 'message',
    timestamp: 'timestamp',
    executionPhaseId: 'executionPhaseId'
  };

  export type ExecutionLogScalarFieldEnum = (typeof ExecutionLogScalarFieldEnum)[keyof typeof ExecutionLogScalarFieldEnum]


  export const UserBalanceScalarFieldEnum: {
    userId: 'userId',
    credits: 'credits'
  };

  export type UserBalanceScalarFieldEnum = (typeof UserBalanceScalarFieldEnum)[keyof typeof UserBalanceScalarFieldEnum]


  export const CredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    value: 'value',
    createdAt: 'createdAt'
  };

  export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum]


  export const UserPurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeId: 'stripeId',
    description: 'description',
    amount: 'amount',
    currency: 'currency',
    date: 'date'
  };

  export type UserPurchaseScalarFieldEnum = (typeof UserPurchaseScalarFieldEnum)[keyof typeof UserPurchaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type workflowWhereInput = {
    AND?: workflowWhereInput | workflowWhereInput[]
    OR?: workflowWhereInput[]
    NOT?: workflowWhereInput | workflowWhereInput[]
    id?: StringFilter<"workflow"> | string
    userId?: StringFilter<"workflow"> | string
    name?: StringFilter<"workflow"> | string
    description?: StringNullableFilter<"workflow"> | string | null
    definition?: StringFilter<"workflow"> | string
    executionPlan?: StringNullableFilter<"workflow"> | string | null
    creditsCost?: IntNullableFilter<"workflow"> | number | null
    cron?: StringNullableFilter<"workflow"> | string | null
    status?: StringFilter<"workflow"> | string
    lastRunAt?: DateTimeNullableFilter<"workflow"> | Date | string | null
    lastRunId?: StringNullableFilter<"workflow"> | string | null
    lastRunStatus?: StringNullableFilter<"workflow"> | string | null
    nextRunAt?: DateTimeNullableFilter<"workflow"> | Date | string | null
    createdAt?: DateTimeFilter<"workflow"> | Date | string
    updatedAt?: DateTimeFilter<"workflow"> | Date | string
    executions?: WorkflowExecutionListRelationFilter
  }

  export type workflowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    definition?: SortOrder
    executionPlan?: SortOrderInput | SortOrder
    creditsCost?: SortOrderInput | SortOrder
    cron?: SortOrderInput | SortOrder
    status?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastRunId?: SortOrderInput | SortOrder
    lastRunStatus?: SortOrderInput | SortOrder
    nextRunAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    executions?: workflowExecutionOrderByRelationAggregateInput
  }

  export type workflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: workflowUserIdNameCompoundUniqueInput
    AND?: workflowWhereInput | workflowWhereInput[]
    OR?: workflowWhereInput[]
    NOT?: workflowWhereInput | workflowWhereInput[]
    userId?: StringFilter<"workflow"> | string
    name?: StringFilter<"workflow"> | string
    description?: StringNullableFilter<"workflow"> | string | null
    definition?: StringFilter<"workflow"> | string
    executionPlan?: StringNullableFilter<"workflow"> | string | null
    creditsCost?: IntNullableFilter<"workflow"> | number | null
    cron?: StringNullableFilter<"workflow"> | string | null
    status?: StringFilter<"workflow"> | string
    lastRunAt?: DateTimeNullableFilter<"workflow"> | Date | string | null
    lastRunId?: StringNullableFilter<"workflow"> | string | null
    lastRunStatus?: StringNullableFilter<"workflow"> | string | null
    nextRunAt?: DateTimeNullableFilter<"workflow"> | Date | string | null
    createdAt?: DateTimeFilter<"workflow"> | Date | string
    updatedAt?: DateTimeFilter<"workflow"> | Date | string
    executions?: WorkflowExecutionListRelationFilter
  }, "id" | "userId_name">

  export type workflowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    definition?: SortOrder
    executionPlan?: SortOrderInput | SortOrder
    creditsCost?: SortOrderInput | SortOrder
    cron?: SortOrderInput | SortOrder
    status?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastRunId?: SortOrderInput | SortOrder
    lastRunStatus?: SortOrderInput | SortOrder
    nextRunAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: workflowCountOrderByAggregateInput
    _avg?: workflowAvgOrderByAggregateInput
    _max?: workflowMaxOrderByAggregateInput
    _min?: workflowMinOrderByAggregateInput
    _sum?: workflowSumOrderByAggregateInput
  }

  export type workflowScalarWhereWithAggregatesInput = {
    AND?: workflowScalarWhereWithAggregatesInput | workflowScalarWhereWithAggregatesInput[]
    OR?: workflowScalarWhereWithAggregatesInput[]
    NOT?: workflowScalarWhereWithAggregatesInput | workflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"workflow"> | string
    userId?: StringWithAggregatesFilter<"workflow"> | string
    name?: StringWithAggregatesFilter<"workflow"> | string
    description?: StringNullableWithAggregatesFilter<"workflow"> | string | null
    definition?: StringWithAggregatesFilter<"workflow"> | string
    executionPlan?: StringNullableWithAggregatesFilter<"workflow"> | string | null
    creditsCost?: IntNullableWithAggregatesFilter<"workflow"> | number | null
    cron?: StringNullableWithAggregatesFilter<"workflow"> | string | null
    status?: StringWithAggregatesFilter<"workflow"> | string
    lastRunAt?: DateTimeNullableWithAggregatesFilter<"workflow"> | Date | string | null
    lastRunId?: StringNullableWithAggregatesFilter<"workflow"> | string | null
    lastRunStatus?: StringNullableWithAggregatesFilter<"workflow"> | string | null
    nextRunAt?: DateTimeNullableWithAggregatesFilter<"workflow"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"workflow"> | Date | string
  }

  export type workflowExecutionWhereInput = {
    AND?: workflowExecutionWhereInput | workflowExecutionWhereInput[]
    OR?: workflowExecutionWhereInput[]
    NOT?: workflowExecutionWhereInput | workflowExecutionWhereInput[]
    id?: StringFilter<"workflowExecution"> | string
    workflowId?: StringFilter<"workflowExecution"> | string
    userId?: StringFilter<"workflowExecution"> | string
    trigger?: StringFilter<"workflowExecution"> | string
    status?: StringFilter<"workflowExecution"> | string
    createdAt?: DateTimeFilter<"workflowExecution"> | Date | string
    startedAt?: DateTimeNullableFilter<"workflowExecution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"workflowExecution"> | Date | string | null
    definition?: StringFilter<"workflowExecution"> | string
    creditsConsumed?: IntFilter<"workflowExecution"> | number
    phases?: ExecutionPhaseListRelationFilter
    workflow?: XOR<WorkflowRelationFilter, workflowWhereInput>
  }

  export type workflowExecutionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
    phases?: ExecutionPhaseOrderByRelationAggregateInput
    workflow?: workflowOrderByWithRelationInput
  }

  export type workflowExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: workflowExecutionWhereInput | workflowExecutionWhereInput[]
    OR?: workflowExecutionWhereInput[]
    NOT?: workflowExecutionWhereInput | workflowExecutionWhereInput[]
    workflowId?: StringFilter<"workflowExecution"> | string
    userId?: StringFilter<"workflowExecution"> | string
    trigger?: StringFilter<"workflowExecution"> | string
    status?: StringFilter<"workflowExecution"> | string
    createdAt?: DateTimeFilter<"workflowExecution"> | Date | string
    startedAt?: DateTimeNullableFilter<"workflowExecution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"workflowExecution"> | Date | string | null
    definition?: StringFilter<"workflowExecution"> | string
    creditsConsumed?: IntFilter<"workflowExecution"> | number
    phases?: ExecutionPhaseListRelationFilter
    workflow?: XOR<WorkflowRelationFilter, workflowWhereInput>
  }, "id">

  export type workflowExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
    _count?: workflowExecutionCountOrderByAggregateInput
    _avg?: workflowExecutionAvgOrderByAggregateInput
    _max?: workflowExecutionMaxOrderByAggregateInput
    _min?: workflowExecutionMinOrderByAggregateInput
    _sum?: workflowExecutionSumOrderByAggregateInput
  }

  export type workflowExecutionScalarWhereWithAggregatesInput = {
    AND?: workflowExecutionScalarWhereWithAggregatesInput | workflowExecutionScalarWhereWithAggregatesInput[]
    OR?: workflowExecutionScalarWhereWithAggregatesInput[]
    NOT?: workflowExecutionScalarWhereWithAggregatesInput | workflowExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"workflowExecution"> | string
    workflowId?: StringWithAggregatesFilter<"workflowExecution"> | string
    userId?: StringWithAggregatesFilter<"workflowExecution"> | string
    trigger?: StringWithAggregatesFilter<"workflowExecution"> | string
    status?: StringWithAggregatesFilter<"workflowExecution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"workflowExecution"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"workflowExecution"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"workflowExecution"> | Date | string | null
    definition?: StringWithAggregatesFilter<"workflowExecution"> | string
    creditsConsumed?: IntWithAggregatesFilter<"workflowExecution"> | number
  }

  export type ExecutionPhaseWhereInput = {
    AND?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    OR?: ExecutionPhaseWhereInput[]
    NOT?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    id?: StringFilter<"ExecutionPhase"> | string
    userId?: StringFilter<"ExecutionPhase"> | string
    status?: StringFilter<"ExecutionPhase"> | string
    number?: IntFilter<"ExecutionPhase"> | number
    node?: StringFilter<"ExecutionPhase"> | string
    name?: StringFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExecutionPhase"> | string
    execution?: XOR<WorkflowExecutionRelationFilter, workflowExecutionWhereInput>
    logs?: ExecutionLogListRelationFilter
  }

  export type ExecutionPhaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    inputs?: SortOrderInput | SortOrder
    outputs?: SortOrderInput | SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    workflowExecutionId?: SortOrder
    execution?: workflowExecutionOrderByWithRelationInput
    logs?: ExecutionLogOrderByRelationAggregateInput
  }

  export type ExecutionPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    OR?: ExecutionPhaseWhereInput[]
    NOT?: ExecutionPhaseWhereInput | ExecutionPhaseWhereInput[]
    userId?: StringFilter<"ExecutionPhase"> | string
    status?: StringFilter<"ExecutionPhase"> | string
    number?: IntFilter<"ExecutionPhase"> | number
    node?: StringFilter<"ExecutionPhase"> | string
    name?: StringFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExecutionPhase"> | string
    execution?: XOR<WorkflowExecutionRelationFilter, workflowExecutionWhereInput>
    logs?: ExecutionLogListRelationFilter
  }, "id">

  export type ExecutionPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    inputs?: SortOrderInput | SortOrder
    outputs?: SortOrderInput | SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    workflowExecutionId?: SortOrder
    _count?: ExecutionPhaseCountOrderByAggregateInput
    _avg?: ExecutionPhaseAvgOrderByAggregateInput
    _max?: ExecutionPhaseMaxOrderByAggregateInput
    _min?: ExecutionPhaseMinOrderByAggregateInput
    _sum?: ExecutionPhaseSumOrderByAggregateInput
  }

  export type ExecutionPhaseScalarWhereWithAggregatesInput = {
    AND?: ExecutionPhaseScalarWhereWithAggregatesInput | ExecutionPhaseScalarWhereWithAggregatesInput[]
    OR?: ExecutionPhaseScalarWhereWithAggregatesInput[]
    NOT?: ExecutionPhaseScalarWhereWithAggregatesInput | ExecutionPhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    userId?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    status?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    number?: IntWithAggregatesFilter<"ExecutionPhase"> | number
    node?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    name?: StringWithAggregatesFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableWithAggregatesFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableWithAggregatesFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableWithAggregatesFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringWithAggregatesFilter<"ExecutionPhase"> | string
  }

  export type ExecutionLogWhereInput = {
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    logLevel?: StringFilter<"ExecutionLog"> | string
    message?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringFilter<"ExecutionLog"> | string
    executionPhase?: XOR<ExecutionPhaseRelationFilter, ExecutionPhaseWhereInput>
  }

  export type ExecutionLogOrderByWithRelationInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
    executionPhase?: ExecutionPhaseOrderByWithRelationInput
  }

  export type ExecutionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    OR?: ExecutionLogWhereInput[]
    NOT?: ExecutionLogWhereInput | ExecutionLogWhereInput[]
    logLevel?: StringFilter<"ExecutionLog"> | string
    message?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringFilter<"ExecutionLog"> | string
    executionPhase?: XOR<ExecutionPhaseRelationFilter, ExecutionPhaseWhereInput>
  }, "id">

  export type ExecutionLogOrderByWithAggregationInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
    _count?: ExecutionLogCountOrderByAggregateInput
    _max?: ExecutionLogMaxOrderByAggregateInput
    _min?: ExecutionLogMinOrderByAggregateInput
  }

  export type ExecutionLogScalarWhereWithAggregatesInput = {
    AND?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    OR?: ExecutionLogScalarWhereWithAggregatesInput[]
    NOT?: ExecutionLogScalarWhereWithAggregatesInput | ExecutionLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionLog"> | string
    logLevel?: StringWithAggregatesFilter<"ExecutionLog"> | string
    message?: StringWithAggregatesFilter<"ExecutionLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringWithAggregatesFilter<"ExecutionLog"> | string
  }

  export type UserBalanceWhereInput = {
    AND?: UserBalanceWhereInput | UserBalanceWhereInput[]
    OR?: UserBalanceWhereInput[]
    NOT?: UserBalanceWhereInput | UserBalanceWhereInput[]
    userId?: StringFilter<"UserBalance"> | string
    credits?: IntFilter<"UserBalance"> | number
  }

  export type UserBalanceOrderByWithRelationInput = {
    userId?: SortOrder
    credits?: SortOrder
  }

  export type UserBalanceWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserBalanceWhereInput | UserBalanceWhereInput[]
    OR?: UserBalanceWhereInput[]
    NOT?: UserBalanceWhereInput | UserBalanceWhereInput[]
    credits?: IntFilter<"UserBalance"> | number
  }, "userId">

  export type UserBalanceOrderByWithAggregationInput = {
    userId?: SortOrder
    credits?: SortOrder
    _count?: UserBalanceCountOrderByAggregateInput
    _avg?: UserBalanceAvgOrderByAggregateInput
    _max?: UserBalanceMaxOrderByAggregateInput
    _min?: UserBalanceMinOrderByAggregateInput
    _sum?: UserBalanceSumOrderByAggregateInput
  }

  export type UserBalanceScalarWhereWithAggregatesInput = {
    AND?: UserBalanceScalarWhereWithAggregatesInput | UserBalanceScalarWhereWithAggregatesInput[]
    OR?: UserBalanceScalarWhereWithAggregatesInput[]
    NOT?: UserBalanceScalarWhereWithAggregatesInput | UserBalanceScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserBalance"> | string
    credits?: IntWithAggregatesFilter<"UserBalance"> | number
  }

  export type credentialWhereInput = {
    AND?: credentialWhereInput | credentialWhereInput[]
    OR?: credentialWhereInput[]
    NOT?: credentialWhereInput | credentialWhereInput[]
    id?: StringFilter<"credential"> | string
    userId?: StringFilter<"credential"> | string
    name?: StringFilter<"credential"> | string
    value?: StringFilter<"credential"> | string
    createdAt?: DateTimeFilter<"credential"> | Date | string
  }

  export type credentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type credentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: credentialUserIdNameCompoundUniqueInput
    AND?: credentialWhereInput | credentialWhereInput[]
    OR?: credentialWhereInput[]
    NOT?: credentialWhereInput | credentialWhereInput[]
    userId?: StringFilter<"credential"> | string
    name?: StringFilter<"credential"> | string
    value?: StringFilter<"credential"> | string
    createdAt?: DateTimeFilter<"credential"> | Date | string
  }, "id" | "userId_name">

  export type credentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    _count?: credentialCountOrderByAggregateInput
    _max?: credentialMaxOrderByAggregateInput
    _min?: credentialMinOrderByAggregateInput
  }

  export type credentialScalarWhereWithAggregatesInput = {
    AND?: credentialScalarWhereWithAggregatesInput | credentialScalarWhereWithAggregatesInput[]
    OR?: credentialScalarWhereWithAggregatesInput[]
    NOT?: credentialScalarWhereWithAggregatesInput | credentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"credential"> | string
    userId?: StringWithAggregatesFilter<"credential"> | string
    name?: StringWithAggregatesFilter<"credential"> | string
    value?: StringWithAggregatesFilter<"credential"> | string
    createdAt?: DateTimeWithAggregatesFilter<"credential"> | Date | string
  }

  export type UserPurchaseWhereInput = {
    AND?: UserPurchaseWhereInput | UserPurchaseWhereInput[]
    OR?: UserPurchaseWhereInput[]
    NOT?: UserPurchaseWhereInput | UserPurchaseWhereInput[]
    id?: StringFilter<"UserPurchase"> | string
    userId?: StringFilter<"UserPurchase"> | string
    stripeId?: StringFilter<"UserPurchase"> | string
    description?: StringFilter<"UserPurchase"> | string
    amount?: IntFilter<"UserPurchase"> | number
    currency?: StringFilter<"UserPurchase"> | string
    date?: DateTimeFilter<"UserPurchase"> | Date | string
  }

  export type UserPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
  }

  export type UserPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPurchaseWhereInput | UserPurchaseWhereInput[]
    OR?: UserPurchaseWhereInput[]
    NOT?: UserPurchaseWhereInput | UserPurchaseWhereInput[]
    userId?: StringFilter<"UserPurchase"> | string
    stripeId?: StringFilter<"UserPurchase"> | string
    description?: StringFilter<"UserPurchase"> | string
    amount?: IntFilter<"UserPurchase"> | number
    currency?: StringFilter<"UserPurchase"> | string
    date?: DateTimeFilter<"UserPurchase"> | Date | string
  }, "id">

  export type UserPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
    _count?: UserPurchaseCountOrderByAggregateInput
    _avg?: UserPurchaseAvgOrderByAggregateInput
    _max?: UserPurchaseMaxOrderByAggregateInput
    _min?: UserPurchaseMinOrderByAggregateInput
    _sum?: UserPurchaseSumOrderByAggregateInput
  }

  export type UserPurchaseScalarWhereWithAggregatesInput = {
    AND?: UserPurchaseScalarWhereWithAggregatesInput | UserPurchaseScalarWhereWithAggregatesInput[]
    OR?: UserPurchaseScalarWhereWithAggregatesInput[]
    NOT?: UserPurchaseScalarWhereWithAggregatesInput | UserPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPurchase"> | string
    userId?: StringWithAggregatesFilter<"UserPurchase"> | string
    stripeId?: StringWithAggregatesFilter<"UserPurchase"> | string
    description?: StringWithAggregatesFilter<"UserPurchase"> | string
    amount?: IntWithAggregatesFilter<"UserPurchase"> | number
    currency?: StringWithAggregatesFilter<"UserPurchase"> | string
    date?: DateTimeWithAggregatesFilter<"UserPurchase"> | Date | string
  }

  export type workflowCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    executionPlan?: string | null
    creditsCost?: number | null
    cron?: string | null
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    nextRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: workflowExecutionCreateNestedManyWithoutWorkflowInput
  }

  export type workflowUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    executionPlan?: string | null
    creditsCost?: number | null
    cron?: string | null
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    nextRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: workflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type workflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    executionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: NullableIntFieldUpdateOperationsInput | number | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: workflowExecutionUpdateManyWithoutWorkflowNestedInput
  }

  export type workflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    executionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: NullableIntFieldUpdateOperationsInput | number | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: workflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type workflowCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    executionPlan?: string | null
    creditsCost?: number | null
    cron?: string | null
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    nextRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    executionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: NullableIntFieldUpdateOperationsInput | number | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    executionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: NullableIntFieldUpdateOperationsInput | number | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowExecutionCreateInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
    phases?: ExecutionPhaseCreateNestedManyWithoutExecutionInput
    workflow: workflowCreateNestedOneWithoutExecutionsInput
  }

  export type workflowExecutionUncheckedCreateInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
    phases?: ExecutionPhaseUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type workflowExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
    phases?: ExecutionPhaseUpdateManyWithoutExecutionNestedInput
    workflow?: workflowUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type workflowExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
    phases?: ExecutionPhaseUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type workflowExecutionCreateManyInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
  }

  export type workflowExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
  }

  export type workflowExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
  }

  export type ExecutionPhaseCreateInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    execution: workflowExecutionCreateNestedOneWithoutPhasesInput
    logs?: ExecutionLogCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseUncheckedCreateInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    execution?: workflowExecutionUpdateOneRequiredWithoutPhasesNestedInput
    logs?: ExecutionLogUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
    logs?: ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseCreateManyInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
  }

  export type ExecutionPhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExecutionPhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutionLogCreateInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
    executionPhase: ExecutionPhaseCreateNestedOneWithoutLogsInput
  }

  export type ExecutionLogUncheckedCreateInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
    executionPhaseId: string
  }

  export type ExecutionLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionPhase?: ExecutionPhaseUpdateOneRequiredWithoutLogsNestedInput
  }

  export type ExecutionLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionPhaseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExecutionLogCreateManyInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
    executionPhaseId: string
  }

  export type ExecutionLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    executionPhaseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserBalanceCreateInput = {
    userId: string
    credits?: number
  }

  export type UserBalanceUncheckedCreateInput = {
    userId: string
    credits?: number
  }

  export type UserBalanceUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type UserBalanceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type UserBalanceCreateManyInput = {
    userId: string
    credits?: number
  }

  export type UserBalanceUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type UserBalanceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type credentialCreateInput = {
    id?: string
    userId: string
    name: string
    value: string
    createdAt?: Date | string
  }

  export type credentialUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    value: string
    createdAt?: Date | string
  }

  export type credentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialCreateManyInput = {
    id?: string
    userId: string
    name: string
    value: string
    createdAt?: Date | string
  }

  export type credentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type credentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPurchaseCreateInput = {
    id?: string
    userId: string
    stripeId: string
    description: string
    amount: number
    currency: string
    date?: Date | string
  }

  export type UserPurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    stripeId: string
    description: string
    amount: number
    currency: string
    date?: Date | string
  }

  export type UserPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPurchaseCreateManyInput = {
    id?: string
    userId: string
    stripeId: string
    description: string
    amount: number
    currency: string
    date?: Date | string
  }

  export type UserPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkflowExecutionListRelationFilter = {
    every?: workflowExecutionWhereInput
    some?: workflowExecutionWhereInput
    none?: workflowExecutionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type workflowExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workflowUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type workflowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    executionPlan?: SortOrder
    creditsCost?: SortOrder
    cron?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastRunId?: SortOrder
    lastRunStatus?: SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workflowAvgOrderByAggregateInput = {
    creditsCost?: SortOrder
  }

  export type workflowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    executionPlan?: SortOrder
    creditsCost?: SortOrder
    cron?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastRunId?: SortOrder
    lastRunStatus?: SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workflowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    executionPlan?: SortOrder
    creditsCost?: SortOrder
    cron?: SortOrder
    status?: SortOrder
    lastRunAt?: SortOrder
    lastRunId?: SortOrder
    lastRunStatus?: SortOrder
    nextRunAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type workflowSumOrderByAggregateInput = {
    creditsCost?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ExecutionPhaseListRelationFilter = {
    every?: ExecutionPhaseWhereInput
    some?: ExecutionPhaseWhereInput
    none?: ExecutionPhaseWhereInput
  }

  export type WorkflowRelationFilter = {
    is?: workflowWhereInput
    isNot?: workflowWhereInput
  }

  export type ExecutionPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workflowExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type workflowExecutionAvgOrderByAggregateInput = {
    creditsConsumed?: SortOrder
  }

  export type workflowExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type workflowExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    definition?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type workflowExecutionSumOrderByAggregateInput = {
    creditsConsumed?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type WorkflowExecutionRelationFilter = {
    is?: workflowExecutionWhereInput
    isNot?: workflowExecutionWhereInput
  }

  export type ExecutionLogListRelationFilter = {
    every?: ExecutionLogWhereInput
    some?: ExecutionLogWhereInput
    none?: ExecutionLogWhereInput
  }

  export type ExecutionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExecutionPhaseAvgOrderByAggregateInput = {
    number?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type ExecutionPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExecutionPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExecutionPhaseSumOrderByAggregateInput = {
    number?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type ExecutionPhaseRelationFilter = {
    is?: ExecutionPhaseWhereInput
    isNot?: ExecutionPhaseWhereInput
  }

  export type ExecutionLogCountOrderByAggregateInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
  }

  export type ExecutionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
  }

  export type ExecutionLogMinOrderByAggregateInput = {
    id?: SortOrder
    logLevel?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    executionPhaseId?: SortOrder
  }

  export type UserBalanceCountOrderByAggregateInput = {
    userId?: SortOrder
    credits?: SortOrder
  }

  export type UserBalanceAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserBalanceMaxOrderByAggregateInput = {
    userId?: SortOrder
    credits?: SortOrder
  }

  export type UserBalanceMinOrderByAggregateInput = {
    userId?: SortOrder
    credits?: SortOrder
  }

  export type UserBalanceSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type credentialUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type credentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type credentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type credentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
  }

  export type UserPurchaseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
  }

  export type UserPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    date?: SortOrder
  }

  export type UserPurchaseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type workflowExecutionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<workflowExecutionCreateWithoutWorkflowInput, workflowExecutionUncheckedCreateWithoutWorkflowInput> | workflowExecutionCreateWithoutWorkflowInput[] | workflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: workflowExecutionCreateOrConnectWithoutWorkflowInput | workflowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: workflowExecutionCreateManyWorkflowInputEnvelope
    connect?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
  }

  export type workflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<workflowExecutionCreateWithoutWorkflowInput, workflowExecutionUncheckedCreateWithoutWorkflowInput> | workflowExecutionCreateWithoutWorkflowInput[] | workflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: workflowExecutionCreateOrConnectWithoutWorkflowInput | workflowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: workflowExecutionCreateManyWorkflowInputEnvelope
    connect?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type workflowExecutionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<workflowExecutionCreateWithoutWorkflowInput, workflowExecutionUncheckedCreateWithoutWorkflowInput> | workflowExecutionCreateWithoutWorkflowInput[] | workflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: workflowExecutionCreateOrConnectWithoutWorkflowInput | workflowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: workflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | workflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: workflowExecutionCreateManyWorkflowInputEnvelope
    set?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    disconnect?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    delete?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    connect?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    update?: workflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | workflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: workflowExecutionUpdateManyWithWhereWithoutWorkflowInput | workflowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: workflowExecutionScalarWhereInput | workflowExecutionScalarWhereInput[]
  }

  export type workflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<workflowExecutionCreateWithoutWorkflowInput, workflowExecutionUncheckedCreateWithoutWorkflowInput> | workflowExecutionCreateWithoutWorkflowInput[] | workflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: workflowExecutionCreateOrConnectWithoutWorkflowInput | workflowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: workflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | workflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: workflowExecutionCreateManyWorkflowInputEnvelope
    set?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    disconnect?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    delete?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    connect?: workflowExecutionWhereUniqueInput | workflowExecutionWhereUniqueInput[]
    update?: workflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | workflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: workflowExecutionUpdateManyWithWhereWithoutWorkflowInput | workflowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: workflowExecutionScalarWhereInput | workflowExecutionScalarWhereInput[]
  }

  export type ExecutionPhaseCreateNestedManyWithoutExecutionInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
  }

  export type workflowCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<workflowCreateWithoutExecutionsInput, workflowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: workflowCreateOrConnectWithoutExecutionsInput
    connect?: workflowWhereUniqueInput
  }

  export type ExecutionPhaseUncheckedCreateNestedManyWithoutExecutionInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExecutionPhaseUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    upsert?: ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    set?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    disconnect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    delete?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    update?: ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput | ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
  }

  export type workflowUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<workflowCreateWithoutExecutionsInput, workflowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: workflowCreateOrConnectWithoutExecutionsInput
    upsert?: workflowUpsertWithoutExecutionsInput
    connect?: workflowWhereUniqueInput
    update?: XOR<XOR<workflowUpdateToOneWithWhereWithoutExecutionsInput, workflowUpdateWithoutExecutionsInput>, workflowUncheckedUpdateWithoutExecutionsInput>
  }

  export type ExecutionPhaseUncheckedUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput> | ExecutionPhaseCreateWithoutExecutionInput[] | ExecutionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutExecutionInput | ExecutionPhaseCreateOrConnectWithoutExecutionInput[]
    upsert?: ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: ExecutionPhaseCreateManyExecutionInputEnvelope
    set?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    disconnect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    delete?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    connect?: ExecutionPhaseWhereUniqueInput | ExecutionPhaseWhereUniqueInput[]
    update?: ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput | ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput | ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
  }

  export type workflowExecutionCreateNestedOneWithoutPhasesInput = {
    create?: XOR<workflowExecutionCreateWithoutPhasesInput, workflowExecutionUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: workflowExecutionCreateOrConnectWithoutPhasesInput
    connect?: workflowExecutionWhereUniqueInput
  }

  export type ExecutionLogCreateNestedManyWithoutExecutionPhaseInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type ExecutionLogUncheckedCreateNestedManyWithoutExecutionPhaseInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
  }

  export type workflowExecutionUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<workflowExecutionCreateWithoutPhasesInput, workflowExecutionUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: workflowExecutionCreateOrConnectWithoutPhasesInput
    upsert?: workflowExecutionUpsertWithoutPhasesInput
    connect?: workflowExecutionWhereUniqueInput
    update?: XOR<XOR<workflowExecutionUpdateToOneWithWhereWithoutPhasesInput, workflowExecutionUpdateWithoutPhasesInput>, workflowExecutionUncheckedUpdateWithoutPhasesInput>
  }

  export type ExecutionLogUpdateManyWithoutExecutionPhaseNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput | ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseNestedInput = {
    create?: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput> | ExecutionLogCreateWithoutExecutionPhaseInput[] | ExecutionLogUncheckedCreateWithoutExecutionPhaseInput[]
    connectOrCreate?: ExecutionLogCreateOrConnectWithoutExecutionPhaseInput | ExecutionLogCreateOrConnectWithoutExecutionPhaseInput[]
    upsert?: ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput[]
    createMany?: ExecutionLogCreateManyExecutionPhaseInputEnvelope
    set?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    disconnect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    delete?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    connect?: ExecutionLogWhereUniqueInput | ExecutionLogWhereUniqueInput[]
    update?: ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput | ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput[]
    updateMany?: ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput | ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput[]
    deleteMany?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
  }

  export type ExecutionPhaseCreateNestedOneWithoutLogsInput = {
    create?: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutLogsInput
    connect?: ExecutionPhaseWhereUniqueInput
  }

  export type ExecutionPhaseUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExecutionPhaseCreateOrConnectWithoutLogsInput
    upsert?: ExecutionPhaseUpsertWithoutLogsInput
    connect?: ExecutionPhaseWhereUniqueInput
    update?: XOR<XOR<ExecutionPhaseUpdateToOneWithWhereWithoutLogsInput, ExecutionPhaseUpdateWithoutLogsInput>, ExecutionPhaseUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type workflowExecutionCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
    phases?: ExecutionPhaseCreateNestedManyWithoutExecutionInput
  }

  export type workflowExecutionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
    phases?: ExecutionPhaseUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type workflowExecutionCreateOrConnectWithoutWorkflowInput = {
    where: workflowExecutionWhereUniqueInput
    create: XOR<workflowExecutionCreateWithoutWorkflowInput, workflowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type workflowExecutionCreateManyWorkflowInputEnvelope = {
    data: workflowExecutionCreateManyWorkflowInput | workflowExecutionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type workflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: workflowExecutionWhereUniqueInput
    update: XOR<workflowExecutionUpdateWithoutWorkflowInput, workflowExecutionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<workflowExecutionCreateWithoutWorkflowInput, workflowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type workflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: workflowExecutionWhereUniqueInput
    data: XOR<workflowExecutionUpdateWithoutWorkflowInput, workflowExecutionUncheckedUpdateWithoutWorkflowInput>
  }

  export type workflowExecutionUpdateManyWithWhereWithoutWorkflowInput = {
    where: workflowExecutionScalarWhereInput
    data: XOR<workflowExecutionUpdateManyMutationInput, workflowExecutionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type workflowExecutionScalarWhereInput = {
    AND?: workflowExecutionScalarWhereInput | workflowExecutionScalarWhereInput[]
    OR?: workflowExecutionScalarWhereInput[]
    NOT?: workflowExecutionScalarWhereInput | workflowExecutionScalarWhereInput[]
    id?: StringFilter<"workflowExecution"> | string
    workflowId?: StringFilter<"workflowExecution"> | string
    userId?: StringFilter<"workflowExecution"> | string
    trigger?: StringFilter<"workflowExecution"> | string
    status?: StringFilter<"workflowExecution"> | string
    createdAt?: DateTimeFilter<"workflowExecution"> | Date | string
    startedAt?: DateTimeNullableFilter<"workflowExecution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"workflowExecution"> | Date | string | null
    definition?: StringFilter<"workflowExecution"> | string
    creditsConsumed?: IntFilter<"workflowExecution"> | number
  }

  export type ExecutionPhaseCreateWithoutExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    logs?: ExecutionLogCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseUncheckedCreateWithoutExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    logs?: ExecutionLogUncheckedCreateNestedManyWithoutExecutionPhaseInput
  }

  export type ExecutionPhaseCreateOrConnectWithoutExecutionInput = {
    where: ExecutionPhaseWhereUniqueInput
    create: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput>
  }

  export type ExecutionPhaseCreateManyExecutionInputEnvelope = {
    data: ExecutionPhaseCreateManyExecutionInput | ExecutionPhaseCreateManyExecutionInput[]
    skipDuplicates?: boolean
  }

  export type workflowCreateWithoutExecutionsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    executionPlan?: string | null
    creditsCost?: number | null
    cron?: string | null
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    nextRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workflowUncheckedCreateWithoutExecutionsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    executionPlan?: string | null
    creditsCost?: number | null
    cron?: string | null
    status: string
    lastRunAt?: Date | string | null
    lastRunId?: string | null
    lastRunStatus?: string | null
    nextRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type workflowCreateOrConnectWithoutExecutionsInput = {
    where: workflowWhereUniqueInput
    create: XOR<workflowCreateWithoutExecutionsInput, workflowUncheckedCreateWithoutExecutionsInput>
  }

  export type ExecutionPhaseUpsertWithWhereUniqueWithoutExecutionInput = {
    where: ExecutionPhaseWhereUniqueInput
    update: XOR<ExecutionPhaseUpdateWithoutExecutionInput, ExecutionPhaseUncheckedUpdateWithoutExecutionInput>
    create: XOR<ExecutionPhaseCreateWithoutExecutionInput, ExecutionPhaseUncheckedCreateWithoutExecutionInput>
  }

  export type ExecutionPhaseUpdateWithWhereUniqueWithoutExecutionInput = {
    where: ExecutionPhaseWhereUniqueInput
    data: XOR<ExecutionPhaseUpdateWithoutExecutionInput, ExecutionPhaseUncheckedUpdateWithoutExecutionInput>
  }

  export type ExecutionPhaseUpdateManyWithWhereWithoutExecutionInput = {
    where: ExecutionPhaseScalarWhereInput
    data: XOR<ExecutionPhaseUpdateManyMutationInput, ExecutionPhaseUncheckedUpdateManyWithoutExecutionInput>
  }

  export type ExecutionPhaseScalarWhereInput = {
    AND?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
    OR?: ExecutionPhaseScalarWhereInput[]
    NOT?: ExecutionPhaseScalarWhereInput | ExecutionPhaseScalarWhereInput[]
    id?: StringFilter<"ExecutionPhase"> | string
    userId?: StringFilter<"ExecutionPhase"> | string
    status?: StringFilter<"ExecutionPhase"> | string
    number?: IntFilter<"ExecutionPhase"> | number
    node?: StringFilter<"ExecutionPhase"> | string
    name?: StringFilter<"ExecutionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExecutionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    outputs?: StringNullableFilter<"ExecutionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExecutionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExecutionPhase"> | string
  }

  export type workflowUpsertWithoutExecutionsInput = {
    update: XOR<workflowUpdateWithoutExecutionsInput, workflowUncheckedUpdateWithoutExecutionsInput>
    create: XOR<workflowCreateWithoutExecutionsInput, workflowUncheckedCreateWithoutExecutionsInput>
    where?: workflowWhereInput
  }

  export type workflowUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: workflowWhereInput
    data: XOR<workflowUpdateWithoutExecutionsInput, workflowUncheckedUpdateWithoutExecutionsInput>
  }

  export type workflowUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    executionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: NullableIntFieldUpdateOperationsInput | number | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    executionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: NullableIntFieldUpdateOperationsInput | number | null
    cron?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    nextRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workflowExecutionCreateWithoutPhasesInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
    workflow: workflowCreateNestedOneWithoutExecutionsInput
  }

  export type workflowExecutionUncheckedCreateWithoutPhasesInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
  }

  export type workflowExecutionCreateOrConnectWithoutPhasesInput = {
    where: workflowExecutionWhereUniqueInput
    create: XOR<workflowExecutionCreateWithoutPhasesInput, workflowExecutionUncheckedCreateWithoutPhasesInput>
  }

  export type ExecutionLogCreateWithoutExecutionPhaseInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
  }

  export type ExecutionLogUncheckedCreateWithoutExecutionPhaseInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
  }

  export type ExecutionLogCreateOrConnectWithoutExecutionPhaseInput = {
    where: ExecutionLogWhereUniqueInput
    create: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput>
  }

  export type ExecutionLogCreateManyExecutionPhaseInputEnvelope = {
    data: ExecutionLogCreateManyExecutionPhaseInput | ExecutionLogCreateManyExecutionPhaseInput[]
    skipDuplicates?: boolean
  }

  export type workflowExecutionUpsertWithoutPhasesInput = {
    update: XOR<workflowExecutionUpdateWithoutPhasesInput, workflowExecutionUncheckedUpdateWithoutPhasesInput>
    create: XOR<workflowExecutionCreateWithoutPhasesInput, workflowExecutionUncheckedCreateWithoutPhasesInput>
    where?: workflowExecutionWhereInput
  }

  export type workflowExecutionUpdateToOneWithWhereWithoutPhasesInput = {
    where?: workflowExecutionWhereInput
    data: XOR<workflowExecutionUpdateWithoutPhasesInput, workflowExecutionUncheckedUpdateWithoutPhasesInput>
  }

  export type workflowExecutionUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
    workflow?: workflowUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type workflowExecutionUncheckedUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
  }

  export type ExecutionLogUpsertWithWhereUniqueWithoutExecutionPhaseInput = {
    where: ExecutionLogWhereUniqueInput
    update: XOR<ExecutionLogUpdateWithoutExecutionPhaseInput, ExecutionLogUncheckedUpdateWithoutExecutionPhaseInput>
    create: XOR<ExecutionLogCreateWithoutExecutionPhaseInput, ExecutionLogUncheckedCreateWithoutExecutionPhaseInput>
  }

  export type ExecutionLogUpdateWithWhereUniqueWithoutExecutionPhaseInput = {
    where: ExecutionLogWhereUniqueInput
    data: XOR<ExecutionLogUpdateWithoutExecutionPhaseInput, ExecutionLogUncheckedUpdateWithoutExecutionPhaseInput>
  }

  export type ExecutionLogUpdateManyWithWhereWithoutExecutionPhaseInput = {
    where: ExecutionLogScalarWhereInput
    data: XOR<ExecutionLogUpdateManyMutationInput, ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseInput>
  }

  export type ExecutionLogScalarWhereInput = {
    AND?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    OR?: ExecutionLogScalarWhereInput[]
    NOT?: ExecutionLogScalarWhereInput | ExecutionLogScalarWhereInput[]
    id?: StringFilter<"ExecutionLog"> | string
    logLevel?: StringFilter<"ExecutionLog"> | string
    message?: StringFilter<"ExecutionLog"> | string
    timestamp?: DateTimeFilter<"ExecutionLog"> | Date | string
    executionPhaseId?: StringFilter<"ExecutionLog"> | string
  }

  export type ExecutionPhaseCreateWithoutLogsInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    execution: workflowExecutionCreateNestedOneWithoutPhasesInput
  }

  export type ExecutionPhaseUncheckedCreateWithoutLogsInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
  }

  export type ExecutionPhaseCreateOrConnectWithoutLogsInput = {
    where: ExecutionPhaseWhereUniqueInput
    create: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
  }

  export type ExecutionPhaseUpsertWithoutLogsInput = {
    update: XOR<ExecutionPhaseUpdateWithoutLogsInput, ExecutionPhaseUncheckedUpdateWithoutLogsInput>
    create: XOR<ExecutionPhaseCreateWithoutLogsInput, ExecutionPhaseUncheckedCreateWithoutLogsInput>
    where?: ExecutionPhaseWhereInput
  }

  export type ExecutionPhaseUpdateToOneWithWhereWithoutLogsInput = {
    where?: ExecutionPhaseWhereInput
    data: XOR<ExecutionPhaseUpdateWithoutLogsInput, ExecutionPhaseUncheckedUpdateWithoutLogsInput>
  }

  export type ExecutionPhaseUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    execution?: workflowExecutionUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
  }

  export type workflowExecutionCreateManyWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    definition?: string
    creditsConsumed?: number
  }

  export type workflowExecutionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
    phases?: ExecutionPhaseUpdateManyWithoutExecutionNestedInput
  }

  export type workflowExecutionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
    phases?: ExecutionPhaseUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type workflowExecutionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    definition?: StringFieldUpdateOperationsInput | string
    creditsConsumed?: IntFieldUpdateOperationsInput | number
  }

  export type ExecutionPhaseCreateManyExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
  }

  export type ExecutionPhaseUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: ExecutionLogUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    logs?: ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseNestedInput
  }

  export type ExecutionPhaseUncheckedUpdateManyWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExecutionLogCreateManyExecutionPhaseInput = {
    id?: string
    logLevel: string
    message: string
    timestamp?: Date | string
  }

  export type ExecutionLogUpdateWithoutExecutionPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogUncheckedUpdateWithoutExecutionPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionLogUncheckedUpdateManyWithoutExecutionPhaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    logLevel?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WorkflowCountOutputTypeDefaultArgs instead
     */
    export type WorkflowCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkflowCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkflowExecutionCountOutputTypeDefaultArgs instead
     */
    export type WorkflowExecutionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkflowExecutionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExecutionPhaseCountOutputTypeDefaultArgs instead
     */
    export type ExecutionPhaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExecutionPhaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use workflowDefaultArgs instead
     */
    export type workflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = workflowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use workflowExecutionDefaultArgs instead
     */
    export type workflowExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = workflowExecutionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExecutionPhaseDefaultArgs instead
     */
    export type ExecutionPhaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExecutionPhaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExecutionLogDefaultArgs instead
     */
    export type ExecutionLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExecutionLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserBalanceDefaultArgs instead
     */
    export type UserBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserBalanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use credentialDefaultArgs instead
     */
    export type credentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = credentialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPurchaseDefaultArgs instead
     */
    export type UserPurchaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPurchaseDefaultArgs<ExtArgs>

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