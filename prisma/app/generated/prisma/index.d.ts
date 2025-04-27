
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
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Sentiment
 * 
 */
export type Sentiment = $Result.DefaultSelection<Prisma.$SentimentPayload>
/**
 * Model Actionable
 * 
 */
export type Actionable = $Result.DefaultSelection<Prisma.$ActionablePayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reviews
 * const reviews = await prisma.review.findMany()
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
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sentiment`: Exposes CRUD operations for the **Sentiment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sentiments
    * const sentiments = await prisma.sentiment.findMany()
    * ```
    */
  get sentiment(): Prisma.SentimentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actionable`: Exposes CRUD operations for the **Actionable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actionables
    * const actionables = await prisma.actionable.findMany()
    * ```
    */
  get actionable(): Prisma.ActionableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Review: 'Review',
    Sentiment: 'Sentiment',
    Actionable: 'Actionable',
    Recommendation: 'Recommendation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "review" | "sentiment" | "actionable" | "recommendation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Sentiment: {
        payload: Prisma.$SentimentPayload<ExtArgs>
        fields: Prisma.SentimentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentimentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentimentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>
          }
          findFirst: {
            args: Prisma.SentimentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentimentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>
          }
          findMany: {
            args: Prisma.SentimentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>[]
          }
          create: {
            args: Prisma.SentimentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>
          }
          createMany: {
            args: Prisma.SentimentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentimentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>[]
          }
          delete: {
            args: Prisma.SentimentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>
          }
          update: {
            args: Prisma.SentimentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>
          }
          deleteMany: {
            args: Prisma.SentimentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentimentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SentimentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>[]
          }
          upsert: {
            args: Prisma.SentimentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentimentPayload>
          }
          aggregate: {
            args: Prisma.SentimentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentiment>
          }
          groupBy: {
            args: Prisma.SentimentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentimentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentimentCountArgs<ExtArgs>
            result: $Utils.Optional<SentimentCountAggregateOutputType> | number
          }
        }
      }
      Actionable: {
        payload: Prisma.$ActionablePayload<ExtArgs>
        fields: Prisma.ActionableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>
          }
          findFirst: {
            args: Prisma.ActionableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>
          }
          findMany: {
            args: Prisma.ActionableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>[]
          }
          create: {
            args: Prisma.ActionableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>
          }
          createMany: {
            args: Prisma.ActionableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>[]
          }
          delete: {
            args: Prisma.ActionableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>
          }
          update: {
            args: Prisma.ActionableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>
          }
          deleteMany: {
            args: Prisma.ActionableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActionableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>[]
          }
          upsert: {
            args: Prisma.ActionableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionablePayload>
          }
          aggregate: {
            args: Prisma.ActionableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActionable>
          }
          groupBy: {
            args: Prisma.ActionableGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionableGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionableCountArgs<ExtArgs>
            result: $Utils.Optional<ActionableCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    review?: ReviewOmit
    sentiment?: SentimentOmit
    actionable?: ActionableOmit
    recommendation?: RecommendationOmit
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
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    actionables: number
    recommendations: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionables?: boolean | ReviewCountOutputTypeCountActionablesArgs
    recommendations?: boolean | ReviewCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountActionablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionableWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: string | null
    email: string | null
    age_group: string | null
    trip_type: string | null
    description: string | null
    transport_mode: string | null
    rating: number | null
    company_name: string | null
    origin: string | null
    destination: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: string | null
    email: string | null
    age_group: string | null
    trip_type: string | null
    description: string | null
    transport_mode: string | null
    rating: number | null
    company_name: string | null
    origin: string | null
    destination: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    email: number
    age_group: number
    trip_type: number
    description: number
    transport_mode: number
    rating: number
    company_name: number
    origin: number
    destination: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    email?: true
    age_group?: true
    trip_type?: true
    description?: true
    transport_mode?: true
    rating?: true
    company_name?: true
    origin?: true
    destination?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    email?: true
    age_group?: true
    trip_type?: true
    description?: true
    transport_mode?: true
    rating?: true
    company_name?: true
    origin?: true
    destination?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    email?: true
    age_group?: true
    trip_type?: true
    description?: true
    transport_mode?: true
    rating?: true
    company_name?: true
    origin?: true
    destination?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: string
    email: string | null
    age_group: string | null
    trip_type: string | null
    description: string | null
    transport_mode: string | null
    rating: number | null
    company_name: string | null
    origin: string | null
    destination: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    email?: boolean
    age_group?: boolean
    trip_type?: boolean
    description?: boolean
    transport_mode?: boolean
    rating?: boolean
    company_name?: boolean
    origin?: boolean
    destination?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    actionables?: boolean | Review$actionablesArgs<ExtArgs>
    recommendations?: boolean | Review$recommendationsArgs<ExtArgs>
    sentiment?: boolean | Review$sentimentArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    email?: boolean
    age_group?: boolean
    trip_type?: boolean
    description?: boolean
    transport_mode?: boolean
    rating?: boolean
    company_name?: boolean
    origin?: boolean
    destination?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    email?: boolean
    age_group?: boolean
    trip_type?: boolean
    description?: boolean
    transport_mode?: boolean
    rating?: boolean
    company_name?: boolean
    origin?: boolean
    destination?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    review_id?: boolean
    email?: boolean
    age_group?: boolean
    trip_type?: boolean
    description?: boolean
    transport_mode?: boolean
    rating?: boolean
    company_name?: boolean
    origin?: boolean
    destination?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "email" | "age_group" | "trip_type" | "description" | "transport_mode" | "rating" | "company_name" | "origin" | "destination" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actionables?: boolean | Review$actionablesArgs<ExtArgs>
    recommendations?: boolean | Review$recommendationsArgs<ExtArgs>
    sentiment?: boolean | Review$sentimentArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      actionables: Prisma.$ActionablePayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
      sentiment: Prisma.$SentimentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: string
      email: string | null
      age_group: string | null
      trip_type: string | null
      description: string | null
      transport_mode: string | null
      rating: number | null
      company_name: string | null
      origin: string | null
      destination: string | null
      start_date: Date | null
      end_date: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.createManyAndReturn({
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.updateManyAndReturn({
     *   select: { review_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actionables<T extends Review$actionablesArgs<ExtArgs> = {}>(args?: Subset<T, Review$actionablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recommendations<T extends Review$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Review$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentiment<T extends Review$sentimentArgs<ExtArgs> = {}>(args?: Subset<T, Review$sentimentArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly review_id: FieldRef<"Review", 'String'>
    readonly email: FieldRef<"Review", 'String'>
    readonly age_group: FieldRef<"Review", 'String'>
    readonly trip_type: FieldRef<"Review", 'String'>
    readonly description: FieldRef<"Review", 'String'>
    readonly transport_mode: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly company_name: FieldRef<"Review", 'String'>
    readonly origin: FieldRef<"Review", 'String'>
    readonly destination: FieldRef<"Review", 'String'>
    readonly start_date: FieldRef<"Review", 'DateTime'>
    readonly end_date: FieldRef<"Review", 'DateTime'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
    readonly updated_at: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data?: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.actionables
   */
  export type Review$actionablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    where?: ActionableWhereInput
    orderBy?: ActionableOrderByWithRelationInput | ActionableOrderByWithRelationInput[]
    cursor?: ActionableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionableScalarFieldEnum | ActionableScalarFieldEnum[]
  }

  /**
   * Review.recommendations
   */
  export type Review$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Review.sentiment
   */
  export type Review$sentimentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    where?: SentimentWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Sentiment
   */

  export type AggregateSentiment = {
    _count: SentimentCountAggregateOutputType | null
    _avg: SentimentAvgAggregateOutputType | null
    _sum: SentimentSumAggregateOutputType | null
    _min: SentimentMinAggregateOutputType | null
    _max: SentimentMaxAggregateOutputType | null
  }

  export type SentimentAvgAggregateOutputType = {
    score: Decimal | null
  }

  export type SentimentSumAggregateOutputType = {
    score: Decimal | null
  }

  export type SentimentMinAggregateOutputType = {
    sentiment_id: string | null
    score: Decimal | null
    label: string | null
    summary: string | null
    emotion_tone: string | null
    review_id: string | null
  }

  export type SentimentMaxAggregateOutputType = {
    sentiment_id: string | null
    score: Decimal | null
    label: string | null
    summary: string | null
    emotion_tone: string | null
    review_id: string | null
  }

  export type SentimentCountAggregateOutputType = {
    sentiment_id: number
    score: number
    label: number
    summary: number
    emotion_tone: number
    review_id: number
    _all: number
  }


  export type SentimentAvgAggregateInputType = {
    score?: true
  }

  export type SentimentSumAggregateInputType = {
    score?: true
  }

  export type SentimentMinAggregateInputType = {
    sentiment_id?: true
    score?: true
    label?: true
    summary?: true
    emotion_tone?: true
    review_id?: true
  }

  export type SentimentMaxAggregateInputType = {
    sentiment_id?: true
    score?: true
    label?: true
    summary?: true
    emotion_tone?: true
    review_id?: true
  }

  export type SentimentCountAggregateInputType = {
    sentiment_id?: true
    score?: true
    label?: true
    summary?: true
    emotion_tone?: true
    review_id?: true
    _all?: true
  }

  export type SentimentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sentiment to aggregate.
     */
    where?: SentimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentiments to fetch.
     */
    orderBy?: SentimentOrderByWithRelationInput | SentimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sentiments
    **/
    _count?: true | SentimentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentimentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentimentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentimentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentimentMaxAggregateInputType
  }

  export type GetSentimentAggregateType<T extends SentimentAggregateArgs> = {
        [P in keyof T & keyof AggregateSentiment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentiment[P]>
      : GetScalarType<T[P], AggregateSentiment[P]>
  }




  export type SentimentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentimentWhereInput
    orderBy?: SentimentOrderByWithAggregationInput | SentimentOrderByWithAggregationInput[]
    by: SentimentScalarFieldEnum[] | SentimentScalarFieldEnum
    having?: SentimentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentimentCountAggregateInputType | true
    _avg?: SentimentAvgAggregateInputType
    _sum?: SentimentSumAggregateInputType
    _min?: SentimentMinAggregateInputType
    _max?: SentimentMaxAggregateInputType
  }

  export type SentimentGroupByOutputType = {
    sentiment_id: string
    score: Decimal | null
    label: string | null
    summary: string | null
    emotion_tone: string | null
    review_id: string
    _count: SentimentCountAggregateOutputType | null
    _avg: SentimentAvgAggregateOutputType | null
    _sum: SentimentSumAggregateOutputType | null
    _min: SentimentMinAggregateOutputType | null
    _max: SentimentMaxAggregateOutputType | null
  }

  type GetSentimentGroupByPayload<T extends SentimentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentimentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentimentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentimentGroupByOutputType[P]>
            : GetScalarType<T[P], SentimentGroupByOutputType[P]>
        }
      >
    >


  export type SentimentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sentiment_id?: boolean
    score?: boolean
    label?: boolean
    summary?: boolean
    emotion_tone?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentiment"]>

  export type SentimentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sentiment_id?: boolean
    score?: boolean
    label?: boolean
    summary?: boolean
    emotion_tone?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentiment"]>

  export type SentimentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sentiment_id?: boolean
    score?: boolean
    label?: boolean
    summary?: boolean
    emotion_tone?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentiment"]>

  export type SentimentSelectScalar = {
    sentiment_id?: boolean
    score?: boolean
    label?: boolean
    summary?: boolean
    emotion_tone?: boolean
    review_id?: boolean
  }

  export type SentimentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sentiment_id" | "score" | "label" | "summary" | "emotion_tone" | "review_id", ExtArgs["result"]["sentiment"]>
  export type SentimentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type SentimentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type SentimentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $SentimentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sentiment"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sentiment_id: string
      score: Prisma.Decimal | null
      label: string | null
      summary: string | null
      emotion_tone: string | null
      review_id: string
    }, ExtArgs["result"]["sentiment"]>
    composites: {}
  }

  type SentimentGetPayload<S extends boolean | null | undefined | SentimentDefaultArgs> = $Result.GetResult<Prisma.$SentimentPayload, S>

  type SentimentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SentimentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SentimentCountAggregateInputType | true
    }

  export interface SentimentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sentiment'], meta: { name: 'Sentiment' } }
    /**
     * Find zero or one Sentiment that matches the filter.
     * @param {SentimentFindUniqueArgs} args - Arguments to find a Sentiment
     * @example
     * // Get one Sentiment
     * const sentiment = await prisma.sentiment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentimentFindUniqueArgs>(args: SelectSubset<T, SentimentFindUniqueArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sentiment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SentimentFindUniqueOrThrowArgs} args - Arguments to find a Sentiment
     * @example
     * // Get one Sentiment
     * const sentiment = await prisma.sentiment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentimentFindUniqueOrThrowArgs>(args: SelectSubset<T, SentimentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sentiment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentFindFirstArgs} args - Arguments to find a Sentiment
     * @example
     * // Get one Sentiment
     * const sentiment = await prisma.sentiment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentimentFindFirstArgs>(args?: SelectSubset<T, SentimentFindFirstArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sentiment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentFindFirstOrThrowArgs} args - Arguments to find a Sentiment
     * @example
     * // Get one Sentiment
     * const sentiment = await prisma.sentiment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentimentFindFirstOrThrowArgs>(args?: SelectSubset<T, SentimentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sentiments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sentiments
     * const sentiments = await prisma.sentiment.findMany()
     * 
     * // Get first 10 Sentiments
     * const sentiments = await prisma.sentiment.findMany({ take: 10 })
     * 
     * // Only select the `sentiment_id`
     * const sentimentWithSentiment_idOnly = await prisma.sentiment.findMany({ select: { sentiment_id: true } })
     * 
     */
    findMany<T extends SentimentFindManyArgs>(args?: SelectSubset<T, SentimentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sentiment.
     * @param {SentimentCreateArgs} args - Arguments to create a Sentiment.
     * @example
     * // Create one Sentiment
     * const Sentiment = await prisma.sentiment.create({
     *   data: {
     *     // ... data to create a Sentiment
     *   }
     * })
     * 
     */
    create<T extends SentimentCreateArgs>(args: SelectSubset<T, SentimentCreateArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sentiments.
     * @param {SentimentCreateManyArgs} args - Arguments to create many Sentiments.
     * @example
     * // Create many Sentiments
     * const sentiment = await prisma.sentiment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentimentCreateManyArgs>(args?: SelectSubset<T, SentimentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sentiments and returns the data saved in the database.
     * @param {SentimentCreateManyAndReturnArgs} args - Arguments to create many Sentiments.
     * @example
     * // Create many Sentiments
     * const sentiment = await prisma.sentiment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sentiments and only return the `sentiment_id`
     * const sentimentWithSentiment_idOnly = await prisma.sentiment.createManyAndReturn({
     *   select: { sentiment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentimentCreateManyAndReturnArgs>(args?: SelectSubset<T, SentimentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sentiment.
     * @param {SentimentDeleteArgs} args - Arguments to delete one Sentiment.
     * @example
     * // Delete one Sentiment
     * const Sentiment = await prisma.sentiment.delete({
     *   where: {
     *     // ... filter to delete one Sentiment
     *   }
     * })
     * 
     */
    delete<T extends SentimentDeleteArgs>(args: SelectSubset<T, SentimentDeleteArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sentiment.
     * @param {SentimentUpdateArgs} args - Arguments to update one Sentiment.
     * @example
     * // Update one Sentiment
     * const sentiment = await prisma.sentiment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentimentUpdateArgs>(args: SelectSubset<T, SentimentUpdateArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sentiments.
     * @param {SentimentDeleteManyArgs} args - Arguments to filter Sentiments to delete.
     * @example
     * // Delete a few Sentiments
     * const { count } = await prisma.sentiment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentimentDeleteManyArgs>(args?: SelectSubset<T, SentimentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sentiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sentiments
     * const sentiment = await prisma.sentiment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentimentUpdateManyArgs>(args: SelectSubset<T, SentimentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sentiments and returns the data updated in the database.
     * @param {SentimentUpdateManyAndReturnArgs} args - Arguments to update many Sentiments.
     * @example
     * // Update many Sentiments
     * const sentiment = await prisma.sentiment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sentiments and only return the `sentiment_id`
     * const sentimentWithSentiment_idOnly = await prisma.sentiment.updateManyAndReturn({
     *   select: { sentiment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SentimentUpdateManyAndReturnArgs>(args: SelectSubset<T, SentimentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sentiment.
     * @param {SentimentUpsertArgs} args - Arguments to update or create a Sentiment.
     * @example
     * // Update or create a Sentiment
     * const sentiment = await prisma.sentiment.upsert({
     *   create: {
     *     // ... data to create a Sentiment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sentiment we want to update
     *   }
     * })
     */
    upsert<T extends SentimentUpsertArgs>(args: SelectSubset<T, SentimentUpsertArgs<ExtArgs>>): Prisma__SentimentClient<$Result.GetResult<Prisma.$SentimentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sentiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentCountArgs} args - Arguments to filter Sentiments to count.
     * @example
     * // Count the number of Sentiments
     * const count = await prisma.sentiment.count({
     *   where: {
     *     // ... the filter for the Sentiments we want to count
     *   }
     * })
    **/
    count<T extends SentimentCountArgs>(
      args?: Subset<T, SentimentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentimentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sentiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SentimentAggregateArgs>(args: Subset<T, SentimentAggregateArgs>): Prisma.PrismaPromise<GetSentimentAggregateType<T>>

    /**
     * Group by Sentiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentimentGroupByArgs} args - Group by arguments.
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
      T extends SentimentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentimentGroupByArgs['orderBy'] }
        : { orderBy?: SentimentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SentimentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentimentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sentiment model
   */
  readonly fields: SentimentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sentiment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentimentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sentiment model
   */
  interface SentimentFieldRefs {
    readonly sentiment_id: FieldRef<"Sentiment", 'String'>
    readonly score: FieldRef<"Sentiment", 'Decimal'>
    readonly label: FieldRef<"Sentiment", 'String'>
    readonly summary: FieldRef<"Sentiment", 'String'>
    readonly emotion_tone: FieldRef<"Sentiment", 'String'>
    readonly review_id: FieldRef<"Sentiment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sentiment findUnique
   */
  export type SentimentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * Filter, which Sentiment to fetch.
     */
    where: SentimentWhereUniqueInput
  }

  /**
   * Sentiment findUniqueOrThrow
   */
  export type SentimentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * Filter, which Sentiment to fetch.
     */
    where: SentimentWhereUniqueInput
  }

  /**
   * Sentiment findFirst
   */
  export type SentimentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * Filter, which Sentiment to fetch.
     */
    where?: SentimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentiments to fetch.
     */
    orderBy?: SentimentOrderByWithRelationInput | SentimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentiments.
     */
    cursor?: SentimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentiments.
     */
    distinct?: SentimentScalarFieldEnum | SentimentScalarFieldEnum[]
  }

  /**
   * Sentiment findFirstOrThrow
   */
  export type SentimentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * Filter, which Sentiment to fetch.
     */
    where?: SentimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentiments to fetch.
     */
    orderBy?: SentimentOrderByWithRelationInput | SentimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentiments.
     */
    cursor?: SentimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentiments.
     */
    distinct?: SentimentScalarFieldEnum | SentimentScalarFieldEnum[]
  }

  /**
   * Sentiment findMany
   */
  export type SentimentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * Filter, which Sentiments to fetch.
     */
    where?: SentimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentiments to fetch.
     */
    orderBy?: SentimentOrderByWithRelationInput | SentimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sentiments.
     */
    cursor?: SentimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentiments.
     */
    skip?: number
    distinct?: SentimentScalarFieldEnum | SentimentScalarFieldEnum[]
  }

  /**
   * Sentiment create
   */
  export type SentimentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * The data needed to create a Sentiment.
     */
    data: XOR<SentimentCreateInput, SentimentUncheckedCreateInput>
  }

  /**
   * Sentiment createMany
   */
  export type SentimentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sentiments.
     */
    data: SentimentCreateManyInput | SentimentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sentiment createManyAndReturn
   */
  export type SentimentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * The data used to create many Sentiments.
     */
    data: SentimentCreateManyInput | SentimentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sentiment update
   */
  export type SentimentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * The data needed to update a Sentiment.
     */
    data: XOR<SentimentUpdateInput, SentimentUncheckedUpdateInput>
    /**
     * Choose, which Sentiment to update.
     */
    where: SentimentWhereUniqueInput
  }

  /**
   * Sentiment updateMany
   */
  export type SentimentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sentiments.
     */
    data: XOR<SentimentUpdateManyMutationInput, SentimentUncheckedUpdateManyInput>
    /**
     * Filter which Sentiments to update
     */
    where?: SentimentWhereInput
    /**
     * Limit how many Sentiments to update.
     */
    limit?: number
  }

  /**
   * Sentiment updateManyAndReturn
   */
  export type SentimentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * The data used to update Sentiments.
     */
    data: XOR<SentimentUpdateManyMutationInput, SentimentUncheckedUpdateManyInput>
    /**
     * Filter which Sentiments to update
     */
    where?: SentimentWhereInput
    /**
     * Limit how many Sentiments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sentiment upsert
   */
  export type SentimentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * The filter to search for the Sentiment to update in case it exists.
     */
    where: SentimentWhereUniqueInput
    /**
     * In case the Sentiment found by the `where` argument doesn't exist, create a new Sentiment with this data.
     */
    create: XOR<SentimentCreateInput, SentimentUncheckedCreateInput>
    /**
     * In case the Sentiment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentimentUpdateInput, SentimentUncheckedUpdateInput>
  }

  /**
   * Sentiment delete
   */
  export type SentimentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
    /**
     * Filter which Sentiment to delete.
     */
    where: SentimentWhereUniqueInput
  }

  /**
   * Sentiment deleteMany
   */
  export type SentimentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sentiments to delete
     */
    where?: SentimentWhereInput
    /**
     * Limit how many Sentiments to delete.
     */
    limit?: number
  }

  /**
   * Sentiment without action
   */
  export type SentimentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sentiment
     */
    select?: SentimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sentiment
     */
    omit?: SentimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentimentInclude<ExtArgs> | null
  }


  /**
   * Model Actionable
   */

  export type AggregateActionable = {
    _count: ActionableCountAggregateOutputType | null
    _min: ActionableMinAggregateOutputType | null
    _max: ActionableMaxAggregateOutputType | null
  }

  export type ActionableMinAggregateOutputType = {
    actionable_id: string | null
    title: string | null
    description: string | null
    priority: string | null
    department: string | null
    category: string | null
    source_aspect: string | null
    created_at: Date | null
    updated_at: Date | null
    review_id: string | null
  }

  export type ActionableMaxAggregateOutputType = {
    actionable_id: string | null
    title: string | null
    description: string | null
    priority: string | null
    department: string | null
    category: string | null
    source_aspect: string | null
    created_at: Date | null
    updated_at: Date | null
    review_id: string | null
  }

  export type ActionableCountAggregateOutputType = {
    actionable_id: number
    title: number
    description: number
    priority: number
    department: number
    category: number
    source_aspect: number
    created_at: number
    updated_at: number
    review_id: number
    _all: number
  }


  export type ActionableMinAggregateInputType = {
    actionable_id?: true
    title?: true
    description?: true
    priority?: true
    department?: true
    category?: true
    source_aspect?: true
    created_at?: true
    updated_at?: true
    review_id?: true
  }

  export type ActionableMaxAggregateInputType = {
    actionable_id?: true
    title?: true
    description?: true
    priority?: true
    department?: true
    category?: true
    source_aspect?: true
    created_at?: true
    updated_at?: true
    review_id?: true
  }

  export type ActionableCountAggregateInputType = {
    actionable_id?: true
    title?: true
    description?: true
    priority?: true
    department?: true
    category?: true
    source_aspect?: true
    created_at?: true
    updated_at?: true
    review_id?: true
    _all?: true
  }

  export type ActionableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actionable to aggregate.
     */
    where?: ActionableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actionables to fetch.
     */
    orderBy?: ActionableOrderByWithRelationInput | ActionableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actionables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actionables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actionables
    **/
    _count?: true | ActionableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionableMaxAggregateInputType
  }

  export type GetActionableAggregateType<T extends ActionableAggregateArgs> = {
        [P in keyof T & keyof AggregateActionable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActionable[P]>
      : GetScalarType<T[P], AggregateActionable[P]>
  }




  export type ActionableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionableWhereInput
    orderBy?: ActionableOrderByWithAggregationInput | ActionableOrderByWithAggregationInput[]
    by: ActionableScalarFieldEnum[] | ActionableScalarFieldEnum
    having?: ActionableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionableCountAggregateInputType | true
    _min?: ActionableMinAggregateInputType
    _max?: ActionableMaxAggregateInputType
  }

  export type ActionableGroupByOutputType = {
    actionable_id: string
    title: string | null
    description: string | null
    priority: string | null
    department: string | null
    category: string | null
    source_aspect: string | null
    created_at: Date | null
    updated_at: Date | null
    review_id: string
    _count: ActionableCountAggregateOutputType | null
    _min: ActionableMinAggregateOutputType | null
    _max: ActionableMaxAggregateOutputType | null
  }

  type GetActionableGroupByPayload<T extends ActionableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionableGroupByOutputType[P]>
            : GetScalarType<T[P], ActionableGroupByOutputType[P]>
        }
      >
    >


  export type ActionableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actionable_id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    department?: boolean
    category?: boolean
    source_aspect?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionable"]>

  export type ActionableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actionable_id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    department?: boolean
    category?: boolean
    source_aspect?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionable"]>

  export type ActionableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actionable_id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    department?: boolean
    category?: boolean
    source_aspect?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actionable"]>

  export type ActionableSelectScalar = {
    actionable_id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    department?: boolean
    category?: boolean
    source_aspect?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
  }

  export type ActionableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"actionable_id" | "title" | "description" | "priority" | "department" | "category" | "source_aspect" | "created_at" | "updated_at" | "review_id", ExtArgs["result"]["actionable"]>
  export type ActionableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ActionableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type ActionableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ActionablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actionable"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      actionable_id: string
      title: string | null
      description: string | null
      priority: string | null
      department: string | null
      category: string | null
      source_aspect: string | null
      created_at: Date | null
      updated_at: Date | null
      review_id: string
    }, ExtArgs["result"]["actionable"]>
    composites: {}
  }

  type ActionableGetPayload<S extends boolean | null | undefined | ActionableDefaultArgs> = $Result.GetResult<Prisma.$ActionablePayload, S>

  type ActionableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActionableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActionableCountAggregateInputType | true
    }

  export interface ActionableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actionable'], meta: { name: 'Actionable' } }
    /**
     * Find zero or one Actionable that matches the filter.
     * @param {ActionableFindUniqueArgs} args - Arguments to find a Actionable
     * @example
     * // Get one Actionable
     * const actionable = await prisma.actionable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionableFindUniqueArgs>(args: SelectSubset<T, ActionableFindUniqueArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actionable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActionableFindUniqueOrThrowArgs} args - Arguments to find a Actionable
     * @example
     * // Get one Actionable
     * const actionable = await prisma.actionable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionableFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actionable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionableFindFirstArgs} args - Arguments to find a Actionable
     * @example
     * // Get one Actionable
     * const actionable = await prisma.actionable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionableFindFirstArgs>(args?: SelectSubset<T, ActionableFindFirstArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actionable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionableFindFirstOrThrowArgs} args - Arguments to find a Actionable
     * @example
     * // Get one Actionable
     * const actionable = await prisma.actionable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionableFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionableFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actionables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actionables
     * const actionables = await prisma.actionable.findMany()
     * 
     * // Get first 10 Actionables
     * const actionables = await prisma.actionable.findMany({ take: 10 })
     * 
     * // Only select the `actionable_id`
     * const actionableWithActionable_idOnly = await prisma.actionable.findMany({ select: { actionable_id: true } })
     * 
     */
    findMany<T extends ActionableFindManyArgs>(args?: SelectSubset<T, ActionableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actionable.
     * @param {ActionableCreateArgs} args - Arguments to create a Actionable.
     * @example
     * // Create one Actionable
     * const Actionable = await prisma.actionable.create({
     *   data: {
     *     // ... data to create a Actionable
     *   }
     * })
     * 
     */
    create<T extends ActionableCreateArgs>(args: SelectSubset<T, ActionableCreateArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actionables.
     * @param {ActionableCreateManyArgs} args - Arguments to create many Actionables.
     * @example
     * // Create many Actionables
     * const actionable = await prisma.actionable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionableCreateManyArgs>(args?: SelectSubset<T, ActionableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actionables and returns the data saved in the database.
     * @param {ActionableCreateManyAndReturnArgs} args - Arguments to create many Actionables.
     * @example
     * // Create many Actionables
     * const actionable = await prisma.actionable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actionables and only return the `actionable_id`
     * const actionableWithActionable_idOnly = await prisma.actionable.createManyAndReturn({
     *   select: { actionable_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionableCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actionable.
     * @param {ActionableDeleteArgs} args - Arguments to delete one Actionable.
     * @example
     * // Delete one Actionable
     * const Actionable = await prisma.actionable.delete({
     *   where: {
     *     // ... filter to delete one Actionable
     *   }
     * })
     * 
     */
    delete<T extends ActionableDeleteArgs>(args: SelectSubset<T, ActionableDeleteArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actionable.
     * @param {ActionableUpdateArgs} args - Arguments to update one Actionable.
     * @example
     * // Update one Actionable
     * const actionable = await prisma.actionable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionableUpdateArgs>(args: SelectSubset<T, ActionableUpdateArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actionables.
     * @param {ActionableDeleteManyArgs} args - Arguments to filter Actionables to delete.
     * @example
     * // Delete a few Actionables
     * const { count } = await prisma.actionable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionableDeleteManyArgs>(args?: SelectSubset<T, ActionableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actionables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actionables
     * const actionable = await prisma.actionable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionableUpdateManyArgs>(args: SelectSubset<T, ActionableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actionables and returns the data updated in the database.
     * @param {ActionableUpdateManyAndReturnArgs} args - Arguments to update many Actionables.
     * @example
     * // Update many Actionables
     * const actionable = await prisma.actionable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actionables and only return the `actionable_id`
     * const actionableWithActionable_idOnly = await prisma.actionable.updateManyAndReturn({
     *   select: { actionable_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActionableUpdateManyAndReturnArgs>(args: SelectSubset<T, ActionableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actionable.
     * @param {ActionableUpsertArgs} args - Arguments to update or create a Actionable.
     * @example
     * // Update or create a Actionable
     * const actionable = await prisma.actionable.upsert({
     *   create: {
     *     // ... data to create a Actionable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actionable we want to update
     *   }
     * })
     */
    upsert<T extends ActionableUpsertArgs>(args: SelectSubset<T, ActionableUpsertArgs<ExtArgs>>): Prisma__ActionableClient<$Result.GetResult<Prisma.$ActionablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actionables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionableCountArgs} args - Arguments to filter Actionables to count.
     * @example
     * // Count the number of Actionables
     * const count = await prisma.actionable.count({
     *   where: {
     *     // ... the filter for the Actionables we want to count
     *   }
     * })
    **/
    count<T extends ActionableCountArgs>(
      args?: Subset<T, ActionableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actionable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActionableAggregateArgs>(args: Subset<T, ActionableAggregateArgs>): Prisma.PrismaPromise<GetActionableAggregateType<T>>

    /**
     * Group by Actionable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionableGroupByArgs} args - Group by arguments.
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
      T extends ActionableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionableGroupByArgs['orderBy'] }
        : { orderBy?: ActionableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActionableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actionable model
   */
  readonly fields: ActionableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actionable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Actionable model
   */
  interface ActionableFieldRefs {
    readonly actionable_id: FieldRef<"Actionable", 'String'>
    readonly title: FieldRef<"Actionable", 'String'>
    readonly description: FieldRef<"Actionable", 'String'>
    readonly priority: FieldRef<"Actionable", 'String'>
    readonly department: FieldRef<"Actionable", 'String'>
    readonly category: FieldRef<"Actionable", 'String'>
    readonly source_aspect: FieldRef<"Actionable", 'String'>
    readonly created_at: FieldRef<"Actionable", 'DateTime'>
    readonly updated_at: FieldRef<"Actionable", 'DateTime'>
    readonly review_id: FieldRef<"Actionable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Actionable findUnique
   */
  export type ActionableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * Filter, which Actionable to fetch.
     */
    where: ActionableWhereUniqueInput
  }

  /**
   * Actionable findUniqueOrThrow
   */
  export type ActionableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * Filter, which Actionable to fetch.
     */
    where: ActionableWhereUniqueInput
  }

  /**
   * Actionable findFirst
   */
  export type ActionableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * Filter, which Actionable to fetch.
     */
    where?: ActionableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actionables to fetch.
     */
    orderBy?: ActionableOrderByWithRelationInput | ActionableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actionables.
     */
    cursor?: ActionableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actionables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actionables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actionables.
     */
    distinct?: ActionableScalarFieldEnum | ActionableScalarFieldEnum[]
  }

  /**
   * Actionable findFirstOrThrow
   */
  export type ActionableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * Filter, which Actionable to fetch.
     */
    where?: ActionableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actionables to fetch.
     */
    orderBy?: ActionableOrderByWithRelationInput | ActionableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actionables.
     */
    cursor?: ActionableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actionables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actionables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actionables.
     */
    distinct?: ActionableScalarFieldEnum | ActionableScalarFieldEnum[]
  }

  /**
   * Actionable findMany
   */
  export type ActionableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * Filter, which Actionables to fetch.
     */
    where?: ActionableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actionables to fetch.
     */
    orderBy?: ActionableOrderByWithRelationInput | ActionableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actionables.
     */
    cursor?: ActionableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actionables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actionables.
     */
    skip?: number
    distinct?: ActionableScalarFieldEnum | ActionableScalarFieldEnum[]
  }

  /**
   * Actionable create
   */
  export type ActionableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * The data needed to create a Actionable.
     */
    data: XOR<ActionableCreateInput, ActionableUncheckedCreateInput>
  }

  /**
   * Actionable createMany
   */
  export type ActionableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actionables.
     */
    data: ActionableCreateManyInput | ActionableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actionable createManyAndReturn
   */
  export type ActionableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * The data used to create many Actionables.
     */
    data: ActionableCreateManyInput | ActionableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actionable update
   */
  export type ActionableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * The data needed to update a Actionable.
     */
    data: XOR<ActionableUpdateInput, ActionableUncheckedUpdateInput>
    /**
     * Choose, which Actionable to update.
     */
    where: ActionableWhereUniqueInput
  }

  /**
   * Actionable updateMany
   */
  export type ActionableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actionables.
     */
    data: XOR<ActionableUpdateManyMutationInput, ActionableUncheckedUpdateManyInput>
    /**
     * Filter which Actionables to update
     */
    where?: ActionableWhereInput
    /**
     * Limit how many Actionables to update.
     */
    limit?: number
  }

  /**
   * Actionable updateManyAndReturn
   */
  export type ActionableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * The data used to update Actionables.
     */
    data: XOR<ActionableUpdateManyMutationInput, ActionableUncheckedUpdateManyInput>
    /**
     * Filter which Actionables to update
     */
    where?: ActionableWhereInput
    /**
     * Limit how many Actionables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actionable upsert
   */
  export type ActionableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * The filter to search for the Actionable to update in case it exists.
     */
    where: ActionableWhereUniqueInput
    /**
     * In case the Actionable found by the `where` argument doesn't exist, create a new Actionable with this data.
     */
    create: XOR<ActionableCreateInput, ActionableUncheckedCreateInput>
    /**
     * In case the Actionable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionableUpdateInput, ActionableUncheckedUpdateInput>
  }

  /**
   * Actionable delete
   */
  export type ActionableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
    /**
     * Filter which Actionable to delete.
     */
    where: ActionableWhereUniqueInput
  }

  /**
   * Actionable deleteMany
   */
  export type ActionableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actionables to delete
     */
    where?: ActionableWhereInput
    /**
     * Limit how many Actionables to delete.
     */
    limit?: number
  }

  /**
   * Actionable without action
   */
  export type ActionableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actionable
     */
    select?: ActionableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actionable
     */
    omit?: ActionableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionableInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationMinAggregateOutputType = {
    recommendation_id: string | null
    title: string | null
    description: string | null
    impact: string | null
    target_area: string | null
    effort_level: string | null
    data_driven: boolean | null
    created_at: Date | null
    updated_at: Date | null
    review_id: string | null
  }

  export type RecommendationMaxAggregateOutputType = {
    recommendation_id: string | null
    title: string | null
    description: string | null
    impact: string | null
    target_area: string | null
    effort_level: string | null
    data_driven: boolean | null
    created_at: Date | null
    updated_at: Date | null
    review_id: string | null
  }

  export type RecommendationCountAggregateOutputType = {
    recommendation_id: number
    title: number
    description: number
    impact: number
    target_area: number
    effort_level: number
    data_driven: number
    created_at: number
    updated_at: number
    review_id: number
    _all: number
  }


  export type RecommendationMinAggregateInputType = {
    recommendation_id?: true
    title?: true
    description?: true
    impact?: true
    target_area?: true
    effort_level?: true
    data_driven?: true
    created_at?: true
    updated_at?: true
    review_id?: true
  }

  export type RecommendationMaxAggregateInputType = {
    recommendation_id?: true
    title?: true
    description?: true
    impact?: true
    target_area?: true
    effort_level?: true
    data_driven?: true
    created_at?: true
    updated_at?: true
    review_id?: true
  }

  export type RecommendationCountAggregateInputType = {
    recommendation_id?: true
    title?: true
    description?: true
    impact?: true
    target_area?: true
    effort_level?: true
    data_driven?: true
    created_at?: true
    updated_at?: true
    review_id?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    recommendation_id: string
    title: string | null
    description: string | null
    impact: string | null
    target_area: string | null
    effort_level: string | null
    data_driven: boolean | null
    created_at: Date | null
    updated_at: Date | null
    review_id: string
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendation_id?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    target_area?: boolean
    effort_level?: boolean
    data_driven?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendation_id?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    target_area?: boolean
    effort_level?: boolean
    data_driven?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendation_id?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    target_area?: boolean
    effort_level?: boolean
    data_driven?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    recommendation_id?: boolean
    title?: boolean
    description?: boolean
    impact?: boolean
    target_area?: boolean
    effort_level?: boolean
    data_driven?: boolean
    created_at?: boolean
    updated_at?: boolean
    review_id?: boolean
  }

  export type RecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recommendation_id" | "title" | "description" | "impact" | "target_area" | "effort_level" | "data_driven" | "created_at" | "updated_at" | "review_id", ExtArgs["result"]["recommendation"]>
  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }
  export type RecommendationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      recommendation_id: string
      title: string | null
      description: string | null
      impact: string | null
      target_area: string | null
      effort_level: string | null
      data_driven: boolean | null
      created_at: Date | null
      updated_at: Date | null
      review_id: string
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `recommendation_id`
     * const recommendationWithRecommendation_idOnly = await prisma.recommendation.findMany({ select: { recommendation_id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `recommendation_id`
     * const recommendationWithRecommendation_idOnly = await prisma.recommendation.createManyAndReturn({
     *   select: { recommendation_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations and returns the data updated in the database.
     * @param {RecommendationUpdateManyAndReturnArgs} args - Arguments to update many Recommendations.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommendations and only return the `recommendation_id`
     * const recommendationWithRecommendation_idOnly = await prisma.recommendation.updateManyAndReturn({
     *   select: { recommendation_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
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
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Recommendation model
   */
  interface RecommendationFieldRefs {
    readonly recommendation_id: FieldRef<"Recommendation", 'String'>
    readonly title: FieldRef<"Recommendation", 'String'>
    readonly description: FieldRef<"Recommendation", 'String'>
    readonly impact: FieldRef<"Recommendation", 'String'>
    readonly target_area: FieldRef<"Recommendation", 'String'>
    readonly effort_level: FieldRef<"Recommendation", 'String'>
    readonly data_driven: FieldRef<"Recommendation", 'Boolean'>
    readonly created_at: FieldRef<"Recommendation", 'DateTime'>
    readonly updated_at: FieldRef<"Recommendation", 'DateTime'>
    readonly review_id: FieldRef<"Recommendation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendation updateManyAndReturn
   */
  export type RecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
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


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    email: 'email',
    age_group: 'age_group',
    trip_type: 'trip_type',
    description: 'description',
    transport_mode: 'transport_mode',
    rating: 'rating',
    company_name: 'company_name',
    origin: 'origin',
    destination: 'destination',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SentimentScalarFieldEnum: {
    sentiment_id: 'sentiment_id',
    score: 'score',
    label: 'label',
    summary: 'summary',
    emotion_tone: 'emotion_tone',
    review_id: 'review_id'
  };

  export type SentimentScalarFieldEnum = (typeof SentimentScalarFieldEnum)[keyof typeof SentimentScalarFieldEnum]


  export const ActionableScalarFieldEnum: {
    actionable_id: 'actionable_id',
    title: 'title',
    description: 'description',
    priority: 'priority',
    department: 'department',
    category: 'category',
    source_aspect: 'source_aspect',
    created_at: 'created_at',
    updated_at: 'updated_at',
    review_id: 'review_id'
  };

  export type ActionableScalarFieldEnum = (typeof ActionableScalarFieldEnum)[keyof typeof ActionableScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    recommendation_id: 'recommendation_id',
    title: 'title',
    description: 'description',
    impact: 'impact',
    target_area: 'target_area',
    effort_level: 'effort_level',
    data_driven: 'data_driven',
    created_at: 'created_at',
    updated_at: 'updated_at',
    review_id: 'review_id'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    review_id?: UuidFilter<"Review"> | string
    email?: StringNullableFilter<"Review"> | string | null
    age_group?: StringNullableFilter<"Review"> | string | null
    trip_type?: StringNullableFilter<"Review"> | string | null
    description?: StringNullableFilter<"Review"> | string | null
    transport_mode?: StringNullableFilter<"Review"> | string | null
    rating?: IntNullableFilter<"Review"> | number | null
    company_name?: StringNullableFilter<"Review"> | string | null
    origin?: StringNullableFilter<"Review"> | string | null
    destination?: StringNullableFilter<"Review"> | string | null
    start_date?: DateTimeNullableFilter<"Review"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Review"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Review"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Review"> | Date | string | null
    actionables?: ActionableListRelationFilter
    recommendations?: RecommendationListRelationFilter
    sentiment?: XOR<SentimentNullableScalarRelationFilter, SentimentWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    review_id?: SortOrder
    email?: SortOrderInput | SortOrder
    age_group?: SortOrderInput | SortOrder
    trip_type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    transport_mode?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    actionables?: ActionableOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
    sentiment?: SentimentOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    email?: StringNullableFilter<"Review"> | string | null
    age_group?: StringNullableFilter<"Review"> | string | null
    trip_type?: StringNullableFilter<"Review"> | string | null
    description?: StringNullableFilter<"Review"> | string | null
    transport_mode?: StringNullableFilter<"Review"> | string | null
    rating?: IntNullableFilter<"Review"> | number | null
    company_name?: StringNullableFilter<"Review"> | string | null
    origin?: StringNullableFilter<"Review"> | string | null
    destination?: StringNullableFilter<"Review"> | string | null
    start_date?: DateTimeNullableFilter<"Review"> | Date | string | null
    end_date?: DateTimeNullableFilter<"Review"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Review"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Review"> | Date | string | null
    actionables?: ActionableListRelationFilter
    recommendations?: RecommendationListRelationFilter
    sentiment?: XOR<SentimentNullableScalarRelationFilter, SentimentWhereInput> | null
  }, "review_id">

  export type ReviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    email?: SortOrderInput | SortOrder
    age_group?: SortOrderInput | SortOrder
    trip_type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    transport_mode?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    company_name?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    destination?: SortOrderInput | SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    review_id?: UuidWithAggregatesFilter<"Review"> | string
    email?: StringNullableWithAggregatesFilter<"Review"> | string | null
    age_group?: StringNullableWithAggregatesFilter<"Review"> | string | null
    trip_type?: StringNullableWithAggregatesFilter<"Review"> | string | null
    description?: StringNullableWithAggregatesFilter<"Review"> | string | null
    transport_mode?: StringNullableWithAggregatesFilter<"Review"> | string | null
    rating?: IntNullableWithAggregatesFilter<"Review"> | number | null
    company_name?: StringNullableWithAggregatesFilter<"Review"> | string | null
    origin?: StringNullableWithAggregatesFilter<"Review"> | string | null
    destination?: StringNullableWithAggregatesFilter<"Review"> | string | null
    start_date?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
  }

  export type SentimentWhereInput = {
    AND?: SentimentWhereInput | SentimentWhereInput[]
    OR?: SentimentWhereInput[]
    NOT?: SentimentWhereInput | SentimentWhereInput[]
    sentiment_id?: UuidFilter<"Sentiment"> | string
    score?: DecimalNullableFilter<"Sentiment"> | Decimal | DecimalJsLike | number | string | null
    label?: StringNullableFilter<"Sentiment"> | string | null
    summary?: StringNullableFilter<"Sentiment"> | string | null
    emotion_tone?: StringNullableFilter<"Sentiment"> | string | null
    review_id?: UuidFilter<"Sentiment"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type SentimentOrderByWithRelationInput = {
    sentiment_id?: SortOrder
    score?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    emotion_tone?: SortOrderInput | SortOrder
    review_id?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type SentimentWhereUniqueInput = Prisma.AtLeast<{
    sentiment_id?: string
    review_id?: string
    AND?: SentimentWhereInput | SentimentWhereInput[]
    OR?: SentimentWhereInput[]
    NOT?: SentimentWhereInput | SentimentWhereInput[]
    score?: DecimalNullableFilter<"Sentiment"> | Decimal | DecimalJsLike | number | string | null
    label?: StringNullableFilter<"Sentiment"> | string | null
    summary?: StringNullableFilter<"Sentiment"> | string | null
    emotion_tone?: StringNullableFilter<"Sentiment"> | string | null
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "sentiment_id" | "review_id">

  export type SentimentOrderByWithAggregationInput = {
    sentiment_id?: SortOrder
    score?: SortOrderInput | SortOrder
    label?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    emotion_tone?: SortOrderInput | SortOrder
    review_id?: SortOrder
    _count?: SentimentCountOrderByAggregateInput
    _avg?: SentimentAvgOrderByAggregateInput
    _max?: SentimentMaxOrderByAggregateInput
    _min?: SentimentMinOrderByAggregateInput
    _sum?: SentimentSumOrderByAggregateInput
  }

  export type SentimentScalarWhereWithAggregatesInput = {
    AND?: SentimentScalarWhereWithAggregatesInput | SentimentScalarWhereWithAggregatesInput[]
    OR?: SentimentScalarWhereWithAggregatesInput[]
    NOT?: SentimentScalarWhereWithAggregatesInput | SentimentScalarWhereWithAggregatesInput[]
    sentiment_id?: UuidWithAggregatesFilter<"Sentiment"> | string
    score?: DecimalNullableWithAggregatesFilter<"Sentiment"> | Decimal | DecimalJsLike | number | string | null
    label?: StringNullableWithAggregatesFilter<"Sentiment"> | string | null
    summary?: StringNullableWithAggregatesFilter<"Sentiment"> | string | null
    emotion_tone?: StringNullableWithAggregatesFilter<"Sentiment"> | string | null
    review_id?: UuidWithAggregatesFilter<"Sentiment"> | string
  }

  export type ActionableWhereInput = {
    AND?: ActionableWhereInput | ActionableWhereInput[]
    OR?: ActionableWhereInput[]
    NOT?: ActionableWhereInput | ActionableWhereInput[]
    actionable_id?: UuidFilter<"Actionable"> | string
    title?: StringNullableFilter<"Actionable"> | string | null
    description?: StringNullableFilter<"Actionable"> | string | null
    priority?: StringNullableFilter<"Actionable"> | string | null
    department?: StringNullableFilter<"Actionable"> | string | null
    category?: StringNullableFilter<"Actionable"> | string | null
    source_aspect?: StringNullableFilter<"Actionable"> | string | null
    created_at?: DateTimeNullableFilter<"Actionable"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Actionable"> | Date | string | null
    review_id?: UuidFilter<"Actionable"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ActionableOrderByWithRelationInput = {
    actionable_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    source_aspect?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    review_id?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type ActionableWhereUniqueInput = Prisma.AtLeast<{
    actionable_id?: string
    review_id?: string
    AND?: ActionableWhereInput | ActionableWhereInput[]
    OR?: ActionableWhereInput[]
    NOT?: ActionableWhereInput | ActionableWhereInput[]
    title?: StringNullableFilter<"Actionable"> | string | null
    description?: StringNullableFilter<"Actionable"> | string | null
    priority?: StringNullableFilter<"Actionable"> | string | null
    department?: StringNullableFilter<"Actionable"> | string | null
    category?: StringNullableFilter<"Actionable"> | string | null
    source_aspect?: StringNullableFilter<"Actionable"> | string | null
    created_at?: DateTimeNullableFilter<"Actionable"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Actionable"> | Date | string | null
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "actionable_id" | "review_id">

  export type ActionableOrderByWithAggregationInput = {
    actionable_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    source_aspect?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    review_id?: SortOrder
    _count?: ActionableCountOrderByAggregateInput
    _max?: ActionableMaxOrderByAggregateInput
    _min?: ActionableMinOrderByAggregateInput
  }

  export type ActionableScalarWhereWithAggregatesInput = {
    AND?: ActionableScalarWhereWithAggregatesInput | ActionableScalarWhereWithAggregatesInput[]
    OR?: ActionableScalarWhereWithAggregatesInput[]
    NOT?: ActionableScalarWhereWithAggregatesInput | ActionableScalarWhereWithAggregatesInput[]
    actionable_id?: UuidWithAggregatesFilter<"Actionable"> | string
    title?: StringNullableWithAggregatesFilter<"Actionable"> | string | null
    description?: StringNullableWithAggregatesFilter<"Actionable"> | string | null
    priority?: StringNullableWithAggregatesFilter<"Actionable"> | string | null
    department?: StringNullableWithAggregatesFilter<"Actionable"> | string | null
    category?: StringNullableWithAggregatesFilter<"Actionable"> | string | null
    source_aspect?: StringNullableWithAggregatesFilter<"Actionable"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Actionable"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Actionable"> | Date | string | null
    review_id?: UuidWithAggregatesFilter<"Actionable"> | string
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    recommendation_id?: UuidFilter<"Recommendation"> | string
    title?: StringNullableFilter<"Recommendation"> | string | null
    description?: StringNullableFilter<"Recommendation"> | string | null
    impact?: StringNullableFilter<"Recommendation"> | string | null
    target_area?: StringNullableFilter<"Recommendation"> | string | null
    effort_level?: StringNullableFilter<"Recommendation"> | string | null
    data_driven?: BoolNullableFilter<"Recommendation"> | boolean | null
    created_at?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    review_id?: UuidFilter<"Recommendation"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type RecommendationOrderByWithRelationInput = {
    recommendation_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    impact?: SortOrderInput | SortOrder
    target_area?: SortOrderInput | SortOrder
    effort_level?: SortOrderInput | SortOrder
    data_driven?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    review_id?: SortOrder
    review?: ReviewOrderByWithRelationInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    recommendation_id?: string
    review_id?: string
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    title?: StringNullableFilter<"Recommendation"> | string | null
    description?: StringNullableFilter<"Recommendation"> | string | null
    impact?: StringNullableFilter<"Recommendation"> | string | null
    target_area?: StringNullableFilter<"Recommendation"> | string | null
    effort_level?: StringNullableFilter<"Recommendation"> | string | null
    data_driven?: BoolNullableFilter<"Recommendation"> | boolean | null
    created_at?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "recommendation_id" | "review_id">

  export type RecommendationOrderByWithAggregationInput = {
    recommendation_id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    impact?: SortOrderInput | SortOrder
    target_area?: SortOrderInput | SortOrder
    effort_level?: SortOrderInput | SortOrder
    data_driven?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    review_id?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    recommendation_id?: UuidWithAggregatesFilter<"Recommendation"> | string
    title?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    description?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    impact?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    target_area?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    effort_level?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    data_driven?: BoolNullableWithAggregatesFilter<"Recommendation"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Recommendation"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Recommendation"> | Date | string | null
    review_id?: UuidWithAggregatesFilter<"Recommendation"> | string
  }

  export type ReviewCreateInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    actionables?: ActionableCreateNestedManyWithoutReviewInput
    recommendations?: RecommendationCreateNestedManyWithoutReviewInput
    sentiment?: SentimentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    actionables?: ActionableUncheckedCreateNestedManyWithoutReviewInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutReviewInput
    sentiment?: SentimentUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionables?: ActionableUpdateManyWithoutReviewNestedInput
    recommendations?: RecommendationUpdateManyWithoutReviewNestedInput
    sentiment?: SentimentUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionables?: ActionableUncheckedUpdateManyWithoutReviewNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutReviewNestedInput
    sentiment?: SentimentUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ReviewUpdateManyMutationInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SentimentCreateInput = {
    sentiment_id?: string
    score?: Decimal | DecimalJsLike | number | string | null
    label?: string | null
    summary?: string | null
    emotion_tone?: string | null
    review: ReviewCreateNestedOneWithoutSentimentInput
  }

  export type SentimentUncheckedCreateInput = {
    sentiment_id?: string
    score?: Decimal | DecimalJsLike | number | string | null
    label?: string | null
    summary?: string | null
    emotion_tone?: string | null
    review_id: string
  }

  export type SentimentUpdateInput = {
    sentiment_id?: StringFieldUpdateOperationsInput | string
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    emotion_tone?: NullableStringFieldUpdateOperationsInput | string | null
    review?: ReviewUpdateOneRequiredWithoutSentimentNestedInput
  }

  export type SentimentUncheckedUpdateInput = {
    sentiment_id?: StringFieldUpdateOperationsInput | string
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    emotion_tone?: NullableStringFieldUpdateOperationsInput | string | null
    review_id?: StringFieldUpdateOperationsInput | string
  }

  export type SentimentCreateManyInput = {
    sentiment_id?: string
    score?: Decimal | DecimalJsLike | number | string | null
    label?: string | null
    summary?: string | null
    emotion_tone?: string | null
    review_id: string
  }

  export type SentimentUpdateManyMutationInput = {
    sentiment_id?: StringFieldUpdateOperationsInput | string
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    emotion_tone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SentimentUncheckedUpdateManyInput = {
    sentiment_id?: StringFieldUpdateOperationsInput | string
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    emotion_tone?: NullableStringFieldUpdateOperationsInput | string | null
    review_id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionableCreateInput = {
    actionable_id?: string
    title?: string | null
    description?: string | null
    priority?: string | null
    department?: string | null
    category?: string | null
    source_aspect?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review: ReviewCreateNestedOneWithoutActionablesInput
  }

  export type ActionableUncheckedCreateInput = {
    actionable_id?: string
    title?: string | null
    description?: string | null
    priority?: string | null
    department?: string | null
    category?: string | null
    source_aspect?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_id: string
  }

  export type ActionableUpdateInput = {
    actionable_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source_aspect?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUpdateOneRequiredWithoutActionablesNestedInput
  }

  export type ActionableUncheckedUpdateInput = {
    actionable_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source_aspect?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_id?: StringFieldUpdateOperationsInput | string
  }

  export type ActionableCreateManyInput = {
    actionable_id?: string
    title?: string | null
    description?: string | null
    priority?: string | null
    department?: string | null
    category?: string | null
    source_aspect?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_id: string
  }

  export type ActionableUpdateManyMutationInput = {
    actionable_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source_aspect?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionableUncheckedUpdateManyInput = {
    actionable_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source_aspect?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_id?: StringFieldUpdateOperationsInput | string
  }

  export type RecommendationCreateInput = {
    recommendation_id?: string
    title?: string | null
    description?: string | null
    impact?: string | null
    target_area?: string | null
    effort_level?: string | null
    data_driven?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review: ReviewCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    recommendation_id?: string
    title?: string | null
    description?: string | null
    impact?: string | null
    target_area?: string | null
    effort_level?: string | null
    data_driven?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_id: string
  }

  export type RecommendationUpdateInput = {
    recommendation_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    target_area?: NullableStringFieldUpdateOperationsInput | string | null
    effort_level?: NullableStringFieldUpdateOperationsInput | string | null
    data_driven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review?: ReviewUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    recommendation_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    target_area?: NullableStringFieldUpdateOperationsInput | string | null
    effort_level?: NullableStringFieldUpdateOperationsInput | string | null
    data_driven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_id?: StringFieldUpdateOperationsInput | string
  }

  export type RecommendationCreateManyInput = {
    recommendation_id?: string
    title?: string | null
    description?: string | null
    impact?: string | null
    target_area?: string | null
    effort_level?: string | null
    data_driven?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    review_id: string
  }

  export type RecommendationUpdateManyMutationInput = {
    recommendation_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    target_area?: NullableStringFieldUpdateOperationsInput | string | null
    effort_level?: NullableStringFieldUpdateOperationsInput | string | null
    data_driven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationUncheckedUpdateManyInput = {
    recommendation_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    target_area?: NullableStringFieldUpdateOperationsInput | string | null
    effort_level?: NullableStringFieldUpdateOperationsInput | string | null
    data_driven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    review_id?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type ActionableListRelationFilter = {
    every?: ActionableWhereInput
    some?: ActionableWhereInput
    none?: ActionableWhereInput
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type SentimentNullableScalarRelationFilter = {
    is?: SentimentWhereInput | null
    isNot?: SentimentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActionableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    email?: SortOrder
    age_group?: SortOrder
    trip_type?: SortOrder
    description?: SortOrder
    transport_mode?: SortOrder
    rating?: SortOrder
    company_name?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    email?: SortOrder
    age_group?: SortOrder
    trip_type?: SortOrder
    description?: SortOrder
    transport_mode?: SortOrder
    rating?: SortOrder
    company_name?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    email?: SortOrder
    age_group?: SortOrder
    trip_type?: SortOrder
    description?: SortOrder
    transport_mode?: SortOrder
    rating?: SortOrder
    company_name?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type SentimentCountOrderByAggregateInput = {
    sentiment_id?: SortOrder
    score?: SortOrder
    label?: SortOrder
    summary?: SortOrder
    emotion_tone?: SortOrder
    review_id?: SortOrder
  }

  export type SentimentAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SentimentMaxOrderByAggregateInput = {
    sentiment_id?: SortOrder
    score?: SortOrder
    label?: SortOrder
    summary?: SortOrder
    emotion_tone?: SortOrder
    review_id?: SortOrder
  }

  export type SentimentMinOrderByAggregateInput = {
    sentiment_id?: SortOrder
    score?: SortOrder
    label?: SortOrder
    summary?: SortOrder
    emotion_tone?: SortOrder
    review_id?: SortOrder
  }

  export type SentimentSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ActionableCountOrderByAggregateInput = {
    actionable_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    department?: SortOrder
    category?: SortOrder
    source_aspect?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    review_id?: SortOrder
  }

  export type ActionableMaxOrderByAggregateInput = {
    actionable_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    department?: SortOrder
    category?: SortOrder
    source_aspect?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    review_id?: SortOrder
  }

  export type ActionableMinOrderByAggregateInput = {
    actionable_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    department?: SortOrder
    category?: SortOrder
    source_aspect?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    review_id?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RecommendationCountOrderByAggregateInput = {
    recommendation_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    target_area?: SortOrder
    effort_level?: SortOrder
    data_driven?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    review_id?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    recommendation_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    target_area?: SortOrder
    effort_level?: SortOrder
    data_driven?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    review_id?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    recommendation_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    impact?: SortOrder
    target_area?: SortOrder
    effort_level?: SortOrder
    data_driven?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    review_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ActionableCreateNestedManyWithoutReviewInput = {
    create?: XOR<ActionableCreateWithoutReviewInput, ActionableUncheckedCreateWithoutReviewInput> | ActionableCreateWithoutReviewInput[] | ActionableUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ActionableCreateOrConnectWithoutReviewInput | ActionableCreateOrConnectWithoutReviewInput[]
    createMany?: ActionableCreateManyReviewInputEnvelope
    connect?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutReviewInput = {
    create?: XOR<RecommendationCreateWithoutReviewInput, RecommendationUncheckedCreateWithoutReviewInput> | RecommendationCreateWithoutReviewInput[] | RecommendationUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutReviewInput | RecommendationCreateOrConnectWithoutReviewInput[]
    createMany?: RecommendationCreateManyReviewInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type SentimentCreateNestedOneWithoutReviewInput = {
    create?: XOR<SentimentCreateWithoutReviewInput, SentimentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: SentimentCreateOrConnectWithoutReviewInput
    connect?: SentimentWhereUniqueInput
  }

  export type ActionableUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ActionableCreateWithoutReviewInput, ActionableUncheckedCreateWithoutReviewInput> | ActionableCreateWithoutReviewInput[] | ActionableUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ActionableCreateOrConnectWithoutReviewInput | ActionableCreateOrConnectWithoutReviewInput[]
    createMany?: ActionableCreateManyReviewInputEnvelope
    connect?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<RecommendationCreateWithoutReviewInput, RecommendationUncheckedCreateWithoutReviewInput> | RecommendationCreateWithoutReviewInput[] | RecommendationUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutReviewInput | RecommendationCreateOrConnectWithoutReviewInput[]
    createMany?: RecommendationCreateManyReviewInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type SentimentUncheckedCreateNestedOneWithoutReviewInput = {
    create?: XOR<SentimentCreateWithoutReviewInput, SentimentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: SentimentCreateOrConnectWithoutReviewInput
    connect?: SentimentWhereUniqueInput
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

  export type ActionableUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ActionableCreateWithoutReviewInput, ActionableUncheckedCreateWithoutReviewInput> | ActionableCreateWithoutReviewInput[] | ActionableUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ActionableCreateOrConnectWithoutReviewInput | ActionableCreateOrConnectWithoutReviewInput[]
    upsert?: ActionableUpsertWithWhereUniqueWithoutReviewInput | ActionableUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ActionableCreateManyReviewInputEnvelope
    set?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    disconnect?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    delete?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    connect?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    update?: ActionableUpdateWithWhereUniqueWithoutReviewInput | ActionableUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ActionableUpdateManyWithWhereWithoutReviewInput | ActionableUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ActionableScalarWhereInput | ActionableScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutReviewNestedInput = {
    create?: XOR<RecommendationCreateWithoutReviewInput, RecommendationUncheckedCreateWithoutReviewInput> | RecommendationCreateWithoutReviewInput[] | RecommendationUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutReviewInput | RecommendationCreateOrConnectWithoutReviewInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutReviewInput | RecommendationUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: RecommendationCreateManyReviewInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutReviewInput | RecommendationUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutReviewInput | RecommendationUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type SentimentUpdateOneWithoutReviewNestedInput = {
    create?: XOR<SentimentCreateWithoutReviewInput, SentimentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: SentimentCreateOrConnectWithoutReviewInput
    upsert?: SentimentUpsertWithoutReviewInput
    disconnect?: SentimentWhereInput | boolean
    delete?: SentimentWhereInput | boolean
    connect?: SentimentWhereUniqueInput
    update?: XOR<XOR<SentimentUpdateToOneWithWhereWithoutReviewInput, SentimentUpdateWithoutReviewInput>, SentimentUncheckedUpdateWithoutReviewInput>
  }

  export type ActionableUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ActionableCreateWithoutReviewInput, ActionableUncheckedCreateWithoutReviewInput> | ActionableCreateWithoutReviewInput[] | ActionableUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ActionableCreateOrConnectWithoutReviewInput | ActionableCreateOrConnectWithoutReviewInput[]
    upsert?: ActionableUpsertWithWhereUniqueWithoutReviewInput | ActionableUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ActionableCreateManyReviewInputEnvelope
    set?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    disconnect?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    delete?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    connect?: ActionableWhereUniqueInput | ActionableWhereUniqueInput[]
    update?: ActionableUpdateWithWhereUniqueWithoutReviewInput | ActionableUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ActionableUpdateManyWithWhereWithoutReviewInput | ActionableUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ActionableScalarWhereInput | ActionableScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<RecommendationCreateWithoutReviewInput, RecommendationUncheckedCreateWithoutReviewInput> | RecommendationCreateWithoutReviewInput[] | RecommendationUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutReviewInput | RecommendationCreateOrConnectWithoutReviewInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutReviewInput | RecommendationUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: RecommendationCreateManyReviewInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutReviewInput | RecommendationUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutReviewInput | RecommendationUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type SentimentUncheckedUpdateOneWithoutReviewNestedInput = {
    create?: XOR<SentimentCreateWithoutReviewInput, SentimentUncheckedCreateWithoutReviewInput>
    connectOrCreate?: SentimentCreateOrConnectWithoutReviewInput
    upsert?: SentimentUpsertWithoutReviewInput
    disconnect?: SentimentWhereInput | boolean
    delete?: SentimentWhereInput | boolean
    connect?: SentimentWhereUniqueInput
    update?: XOR<XOR<SentimentUpdateToOneWithWhereWithoutReviewInput, SentimentUpdateWithoutReviewInput>, SentimentUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewCreateNestedOneWithoutSentimentInput = {
    create?: XOR<ReviewCreateWithoutSentimentInput, ReviewUncheckedCreateWithoutSentimentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSentimentInput
    connect?: ReviewWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ReviewUpdateOneRequiredWithoutSentimentNestedInput = {
    create?: XOR<ReviewCreateWithoutSentimentInput, ReviewUncheckedCreateWithoutSentimentInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutSentimentInput
    upsert?: ReviewUpsertWithoutSentimentInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutSentimentInput, ReviewUpdateWithoutSentimentInput>, ReviewUncheckedUpdateWithoutSentimentInput>
  }

  export type ReviewCreateNestedOneWithoutActionablesInput = {
    create?: XOR<ReviewCreateWithoutActionablesInput, ReviewUncheckedCreateWithoutActionablesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutActionablesInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutActionablesNestedInput = {
    create?: XOR<ReviewCreateWithoutActionablesInput, ReviewUncheckedCreateWithoutActionablesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutActionablesInput
    upsert?: ReviewUpsertWithoutActionablesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutActionablesInput, ReviewUpdateWithoutActionablesInput>, ReviewUncheckedUpdateWithoutActionablesInput>
  }

  export type ReviewCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<ReviewCreateWithoutRecommendationsInput, ReviewUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRecommendationsInput
    connect?: ReviewWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ReviewUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<ReviewCreateWithoutRecommendationsInput, ReviewUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRecommendationsInput
    upsert?: ReviewUpsertWithoutRecommendationsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutRecommendationsInput, ReviewUpdateWithoutRecommendationsInput>, ReviewUncheckedUpdateWithoutRecommendationsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ActionableCreateWithoutReviewInput = {
    actionable_id?: string
    title?: string | null
    description?: string | null
    priority?: string | null
    department?: string | null
    category?: string | null
    source_aspect?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ActionableUncheckedCreateWithoutReviewInput = {
    actionable_id?: string
    title?: string | null
    description?: string | null
    priority?: string | null
    department?: string | null
    category?: string | null
    source_aspect?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ActionableCreateOrConnectWithoutReviewInput = {
    where: ActionableWhereUniqueInput
    create: XOR<ActionableCreateWithoutReviewInput, ActionableUncheckedCreateWithoutReviewInput>
  }

  export type ActionableCreateManyReviewInputEnvelope = {
    data: ActionableCreateManyReviewInput | ActionableCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutReviewInput = {
    recommendation_id?: string
    title?: string | null
    description?: string | null
    impact?: string | null
    target_area?: string | null
    effort_level?: string | null
    data_driven?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type RecommendationUncheckedCreateWithoutReviewInput = {
    recommendation_id?: string
    title?: string | null
    description?: string | null
    impact?: string | null
    target_area?: string | null
    effort_level?: string | null
    data_driven?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type RecommendationCreateOrConnectWithoutReviewInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutReviewInput, RecommendationUncheckedCreateWithoutReviewInput>
  }

  export type RecommendationCreateManyReviewInputEnvelope = {
    data: RecommendationCreateManyReviewInput | RecommendationCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type SentimentCreateWithoutReviewInput = {
    sentiment_id?: string
    score?: Decimal | DecimalJsLike | number | string | null
    label?: string | null
    summary?: string | null
    emotion_tone?: string | null
  }

  export type SentimentUncheckedCreateWithoutReviewInput = {
    sentiment_id?: string
    score?: Decimal | DecimalJsLike | number | string | null
    label?: string | null
    summary?: string | null
    emotion_tone?: string | null
  }

  export type SentimentCreateOrConnectWithoutReviewInput = {
    where: SentimentWhereUniqueInput
    create: XOR<SentimentCreateWithoutReviewInput, SentimentUncheckedCreateWithoutReviewInput>
  }

  export type ActionableUpsertWithWhereUniqueWithoutReviewInput = {
    where: ActionableWhereUniqueInput
    update: XOR<ActionableUpdateWithoutReviewInput, ActionableUncheckedUpdateWithoutReviewInput>
    create: XOR<ActionableCreateWithoutReviewInput, ActionableUncheckedCreateWithoutReviewInput>
  }

  export type ActionableUpdateWithWhereUniqueWithoutReviewInput = {
    where: ActionableWhereUniqueInput
    data: XOR<ActionableUpdateWithoutReviewInput, ActionableUncheckedUpdateWithoutReviewInput>
  }

  export type ActionableUpdateManyWithWhereWithoutReviewInput = {
    where: ActionableScalarWhereInput
    data: XOR<ActionableUpdateManyMutationInput, ActionableUncheckedUpdateManyWithoutReviewInput>
  }

  export type ActionableScalarWhereInput = {
    AND?: ActionableScalarWhereInput | ActionableScalarWhereInput[]
    OR?: ActionableScalarWhereInput[]
    NOT?: ActionableScalarWhereInput | ActionableScalarWhereInput[]
    actionable_id?: UuidFilter<"Actionable"> | string
    title?: StringNullableFilter<"Actionable"> | string | null
    description?: StringNullableFilter<"Actionable"> | string | null
    priority?: StringNullableFilter<"Actionable"> | string | null
    department?: StringNullableFilter<"Actionable"> | string | null
    category?: StringNullableFilter<"Actionable"> | string | null
    source_aspect?: StringNullableFilter<"Actionable"> | string | null
    created_at?: DateTimeNullableFilter<"Actionable"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Actionable"> | Date | string | null
    review_id?: UuidFilter<"Actionable"> | string
  }

  export type RecommendationUpsertWithWhereUniqueWithoutReviewInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutReviewInput, RecommendationUncheckedUpdateWithoutReviewInput>
    create: XOR<RecommendationCreateWithoutReviewInput, RecommendationUncheckedCreateWithoutReviewInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutReviewInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutReviewInput, RecommendationUncheckedUpdateWithoutReviewInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutReviewInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutReviewInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    recommendation_id?: UuidFilter<"Recommendation"> | string
    title?: StringNullableFilter<"Recommendation"> | string | null
    description?: StringNullableFilter<"Recommendation"> | string | null
    impact?: StringNullableFilter<"Recommendation"> | string | null
    target_area?: StringNullableFilter<"Recommendation"> | string | null
    effort_level?: StringNullableFilter<"Recommendation"> | string | null
    data_driven?: BoolNullableFilter<"Recommendation"> | boolean | null
    created_at?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    review_id?: UuidFilter<"Recommendation"> | string
  }

  export type SentimentUpsertWithoutReviewInput = {
    update: XOR<SentimentUpdateWithoutReviewInput, SentimentUncheckedUpdateWithoutReviewInput>
    create: XOR<SentimentCreateWithoutReviewInput, SentimentUncheckedCreateWithoutReviewInput>
    where?: SentimentWhereInput
  }

  export type SentimentUpdateToOneWithWhereWithoutReviewInput = {
    where?: SentimentWhereInput
    data: XOR<SentimentUpdateWithoutReviewInput, SentimentUncheckedUpdateWithoutReviewInput>
  }

  export type SentimentUpdateWithoutReviewInput = {
    sentiment_id?: StringFieldUpdateOperationsInput | string
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    emotion_tone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SentimentUncheckedUpdateWithoutReviewInput = {
    sentiment_id?: StringFieldUpdateOperationsInput | string
    score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    label?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    emotion_tone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateWithoutSentimentInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    actionables?: ActionableCreateNestedManyWithoutReviewInput
    recommendations?: RecommendationCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutSentimentInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    actionables?: ActionableUncheckedCreateNestedManyWithoutReviewInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutSentimentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutSentimentInput, ReviewUncheckedCreateWithoutSentimentInput>
  }

  export type ReviewUpsertWithoutSentimentInput = {
    update: XOR<ReviewUpdateWithoutSentimentInput, ReviewUncheckedUpdateWithoutSentimentInput>
    create: XOR<ReviewCreateWithoutSentimentInput, ReviewUncheckedCreateWithoutSentimentInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutSentimentInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutSentimentInput, ReviewUncheckedUpdateWithoutSentimentInput>
  }

  export type ReviewUpdateWithoutSentimentInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionables?: ActionableUpdateManyWithoutReviewNestedInput
    recommendations?: RecommendationUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutSentimentInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionables?: ActionableUncheckedUpdateManyWithoutReviewNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutActionablesInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recommendations?: RecommendationCreateNestedManyWithoutReviewInput
    sentiment?: SentimentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutActionablesInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutReviewInput
    sentiment?: SentimentUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutActionablesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutActionablesInput, ReviewUncheckedCreateWithoutActionablesInput>
  }

  export type ReviewUpsertWithoutActionablesInput = {
    update: XOR<ReviewUpdateWithoutActionablesInput, ReviewUncheckedUpdateWithoutActionablesInput>
    create: XOR<ReviewCreateWithoutActionablesInput, ReviewUncheckedCreateWithoutActionablesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutActionablesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutActionablesInput, ReviewUncheckedUpdateWithoutActionablesInput>
  }

  export type ReviewUpdateWithoutActionablesInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendations?: RecommendationUpdateManyWithoutReviewNestedInput
    sentiment?: SentimentUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutActionablesInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recommendations?: RecommendationUncheckedUpdateManyWithoutReviewNestedInput
    sentiment?: SentimentUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ReviewCreateWithoutRecommendationsInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    actionables?: ActionableCreateNestedManyWithoutReviewInput
    sentiment?: SentimentCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutRecommendationsInput = {
    review_id?: string
    email?: string | null
    age_group?: string | null
    trip_type?: string | null
    description?: string | null
    transport_mode?: string | null
    rating?: number | null
    company_name?: string | null
    origin?: string | null
    destination?: string | null
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    actionables?: ActionableUncheckedCreateNestedManyWithoutReviewInput
    sentiment?: SentimentUncheckedCreateNestedOneWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutRecommendationsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRecommendationsInput, ReviewUncheckedCreateWithoutRecommendationsInput>
  }

  export type ReviewUpsertWithoutRecommendationsInput = {
    update: XOR<ReviewUpdateWithoutRecommendationsInput, ReviewUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<ReviewCreateWithoutRecommendationsInput, ReviewUncheckedCreateWithoutRecommendationsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutRecommendationsInput, ReviewUncheckedUpdateWithoutRecommendationsInput>
  }

  export type ReviewUpdateWithoutRecommendationsInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionables?: ActionableUpdateManyWithoutReviewNestedInput
    sentiment?: SentimentUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRecommendationsInput = {
    review_id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    age_group?: NullableStringFieldUpdateOperationsInput | string | null
    trip_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionables?: ActionableUncheckedUpdateManyWithoutReviewNestedInput
    sentiment?: SentimentUncheckedUpdateOneWithoutReviewNestedInput
  }

  export type ActionableCreateManyReviewInput = {
    actionable_id?: string
    title?: string | null
    description?: string | null
    priority?: string | null
    department?: string | null
    category?: string | null
    source_aspect?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type RecommendationCreateManyReviewInput = {
    recommendation_id?: string
    title?: string | null
    description?: string | null
    impact?: string | null
    target_area?: string | null
    effort_level?: string | null
    data_driven?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ActionableUpdateWithoutReviewInput = {
    actionable_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source_aspect?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionableUncheckedUpdateWithoutReviewInput = {
    actionable_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source_aspect?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActionableUncheckedUpdateManyWithoutReviewInput = {
    actionable_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    source_aspect?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationUpdateWithoutReviewInput = {
    recommendation_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    target_area?: NullableStringFieldUpdateOperationsInput | string | null
    effort_level?: NullableStringFieldUpdateOperationsInput | string | null
    data_driven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationUncheckedUpdateWithoutReviewInput = {
    recommendation_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    target_area?: NullableStringFieldUpdateOperationsInput | string | null
    effort_level?: NullableStringFieldUpdateOperationsInput | string | null
    data_driven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationUncheckedUpdateManyWithoutReviewInput = {
    recommendation_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    impact?: NullableStringFieldUpdateOperationsInput | string | null
    target_area?: NullableStringFieldUpdateOperationsInput | string | null
    effort_level?: NullableStringFieldUpdateOperationsInput | string | null
    data_driven?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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