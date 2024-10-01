
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
 * Model logins
 * 
 */
export type logins = $Result.DefaultSelection<Prisma.$loginsPayload>
/**
 * Model ApiToken
 * 
 */
export type ApiToken = $Result.DefaultSelection<Prisma.$ApiTokenPayload>
/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model tracking
 * 
 */
export type tracking = $Result.DefaultSelection<Prisma.$trackingPayload>
/**
 * Model customtracking
 * 
 */
export type customtracking = $Result.DefaultSelection<Prisma.$customtrackingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Logins
 * const logins = await prisma.logins.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Logins
   * const logins = await prisma.logins.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.logins`: Exposes CRUD operations for the **logins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.logins.findMany()
    * ```
    */
  get logins(): Prisma.loginsDelegate<ExtArgs>;

  /**
   * `prisma.apiToken`: Exposes CRUD operations for the **ApiToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiTokens
    * const apiTokens = await prisma.apiToken.findMany()
    * ```
    */
  get apiToken(): Prisma.ApiTokenDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs>;

  /**
   * `prisma.tracking`: Exposes CRUD operations for the **tracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trackings
    * const trackings = await prisma.tracking.findMany()
    * ```
    */
  get tracking(): Prisma.trackingDelegate<ExtArgs>;

  /**
   * `prisma.customtracking`: Exposes CRUD operations for the **customtracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customtrackings
    * const customtrackings = await prisma.customtracking.findMany()
    * ```
    */
  get customtracking(): Prisma.customtrackingDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    logins: 'logins',
    ApiToken: 'ApiToken',
    roles: 'roles',
    tracking: 'tracking',
    customtracking: 'customtracking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'logins' | 'apiToken' | 'roles' | 'tracking' | 'customtracking'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      logins: {
        payload: Prisma.$loginsPayload<ExtArgs>
        fields: Prisma.loginsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.loginsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.loginsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          findFirst: {
            args: Prisma.loginsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.loginsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          findMany: {
            args: Prisma.loginsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>[]
          }
          create: {
            args: Prisma.loginsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          createMany: {
            args: Prisma.loginsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.loginsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>[]
          }
          delete: {
            args: Prisma.loginsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          update: {
            args: Prisma.loginsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          deleteMany: {
            args: Prisma.loginsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.loginsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.loginsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$loginsPayload>
          }
          aggregate: {
            args: Prisma.LoginsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLogins>
          }
          groupBy: {
            args: Prisma.loginsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LoginsGroupByOutputType>[]
          }
          count: {
            args: Prisma.loginsCountArgs<ExtArgs>,
            result: $Utils.Optional<LoginsCountAggregateOutputType> | number
          }
        }
      }
      ApiToken: {
        payload: Prisma.$ApiTokenPayload<ExtArgs>
        fields: Prisma.ApiTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findFirst: {
            args: Prisma.ApiTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          findMany: {
            args: Prisma.ApiTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          create: {
            args: Prisma.ApiTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          createMany: {
            args: Prisma.ApiTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiTokenCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>[]
          }
          delete: {
            args: Prisma.ApiTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          update: {
            args: Prisma.ApiTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          deleteMany: {
            args: Prisma.ApiTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApiTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApiTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiTokenPayload>
          }
          aggregate: {
            args: Prisma.ApiTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApiToken>
          }
          groupBy: {
            args: Prisma.ApiTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApiTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<ApiTokenCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      tracking: {
        payload: Prisma.$trackingPayload<ExtArgs>
        fields: Prisma.trackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trackingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trackingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>
          }
          findFirst: {
            args: Prisma.trackingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trackingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>
          }
          findMany: {
            args: Prisma.trackingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>[]
          }
          create: {
            args: Prisma.trackingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>
          }
          createMany: {
            args: Prisma.trackingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.trackingCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>[]
          }
          delete: {
            args: Prisma.trackingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>
          }
          update: {
            args: Prisma.trackingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>
          }
          deleteMany: {
            args: Prisma.trackingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.trackingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.trackingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trackingPayload>
          }
          aggregate: {
            args: Prisma.TrackingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTracking>
          }
          groupBy: {
            args: Prisma.trackingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.trackingCountArgs<ExtArgs>,
            result: $Utils.Optional<TrackingCountAggregateOutputType> | number
          }
        }
      }
      customtracking: {
        payload: Prisma.$customtrackingPayload<ExtArgs>
        fields: Prisma.customtrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customtrackingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customtrackingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>
          }
          findFirst: {
            args: Prisma.customtrackingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customtrackingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>
          }
          findMany: {
            args: Prisma.customtrackingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>[]
          }
          create: {
            args: Prisma.customtrackingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>
          }
          createMany: {
            args: Prisma.customtrackingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customtrackingCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>[]
          }
          delete: {
            args: Prisma.customtrackingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>
          }
          update: {
            args: Prisma.customtrackingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>
          }
          deleteMany: {
            args: Prisma.customtrackingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.customtrackingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.customtrackingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$customtrackingPayload>
          }
          aggregate: {
            args: Prisma.CustomtrackingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomtracking>
          }
          groupBy: {
            args: Prisma.customtrackingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomtrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.customtrackingCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomtrackingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Models
   */

  /**
   * Model logins
   */

  export type AggregateLogins = {
    _count: LoginsCountAggregateOutputType | null
    _avg: LoginsAvgAggregateOutputType | null
    _sum: LoginsSumAggregateOutputType | null
    _min: LoginsMinAggregateOutputType | null
    _max: LoginsMaxAggregateOutputType | null
  }

  export type LoginsAvgAggregateOutputType = {
    id: number | null
    logins: number | null
  }

  export type LoginsSumAggregateOutputType = {
    id: number | null
    logins: number | null
  }

  export type LoginsMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    logins: number | null
    objectId: string | null
    lastLogin: Date | null
  }

  export type LoginsMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    logins: number | null
    objectId: string | null
    lastLogin: Date | null
  }

  export type LoginsCountAggregateOutputType = {
    id: number
    email: number
    name: number
    logins: number
    objectId: number
    lastLogin: number
    _all: number
  }


  export type LoginsAvgAggregateInputType = {
    id?: true
    logins?: true
  }

  export type LoginsSumAggregateInputType = {
    id?: true
    logins?: true
  }

  export type LoginsMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    logins?: true
    objectId?: true
    lastLogin?: true
  }

  export type LoginsMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    logins?: true
    objectId?: true
    lastLogin?: true
  }

  export type LoginsCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    logins?: true
    objectId?: true
    lastLogin?: true
    _all?: true
  }

  export type LoginsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logins to aggregate.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logins
    **/
    _count?: true | LoginsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginsMaxAggregateInputType
  }

  export type GetLoginsAggregateType<T extends LoginsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogins[P]>
      : GetScalarType<T[P], AggregateLogins[P]>
  }




  export type loginsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loginsWhereInput
    orderBy?: loginsOrderByWithAggregationInput | loginsOrderByWithAggregationInput[]
    by: LoginsScalarFieldEnum[] | LoginsScalarFieldEnum
    having?: loginsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginsCountAggregateInputType | true
    _avg?: LoginsAvgAggregateInputType
    _sum?: LoginsSumAggregateInputType
    _min?: LoginsMinAggregateInputType
    _max?: LoginsMaxAggregateInputType
  }

  export type LoginsGroupByOutputType = {
    id: number
    email: string
    name: string
    logins: number
    objectId: string | null
    lastLogin: Date
    _count: LoginsCountAggregateOutputType | null
    _avg: LoginsAvgAggregateOutputType | null
    _sum: LoginsSumAggregateOutputType | null
    _min: LoginsMinAggregateOutputType | null
    _max: LoginsMaxAggregateOutputType | null
  }

  type GetLoginsGroupByPayload<T extends loginsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginsGroupByOutputType[P]>
            : GetScalarType<T[P], LoginsGroupByOutputType[P]>
        }
      >
    >


  export type loginsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    logins?: boolean
    objectId?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["logins"]>

  export type loginsSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    logins?: boolean
    objectId?: boolean
    lastLogin?: boolean
  }



  export type $loginsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      logins: number
      objectId: string | null
      lastLogin: Date
    }, ExtArgs["result"]["logins"]>
    composites: {}
  }


  type loginsGetPayload<S extends boolean | null | undefined | loginsDefaultArgs> = $Result.GetResult<Prisma.$loginsPayload, S>

  type loginsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<loginsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoginsCountAggregateInputType | true
    }

  export interface loginsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logins'], meta: { name: 'logins' } }
    /**
     * Find zero or one Logins that matches the filter.
     * @param {loginsFindUniqueArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends loginsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loginsFindUniqueArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Logins that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {loginsFindUniqueOrThrowArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends loginsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loginsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsFindFirstArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends loginsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loginsFindFirstArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Logins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsFindFirstOrThrowArgs} args - Arguments to find a Logins
     * @example
     * // Get one Logins
     * const logins = await prisma.logins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends loginsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loginsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.logins.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.logins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginsWithIdOnly = await prisma.logins.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends loginsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loginsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Logins.
     * @param {loginsCreateArgs} args - Arguments to create a Logins.
     * @example
     * // Create one Logins
     * const Logins = await prisma.logins.create({
     *   data: {
     *     // ... data to create a Logins
     *   }
     * })
     * 
    **/
    create<T extends loginsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loginsCreateArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Logins.
     * @param {loginsCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const logins = await prisma.logins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends loginsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loginsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logins and returns the data saved in the database.
     * @param {loginsCreateManyAndReturnArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const logins = await prisma.logins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logins and only return the `id`
     * const loginsWithIdOnly = await prisma.logins.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends loginsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, loginsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Logins.
     * @param {loginsDeleteArgs} args - Arguments to delete one Logins.
     * @example
     * // Delete one Logins
     * const Logins = await prisma.logins.delete({
     *   where: {
     *     // ... filter to delete one Logins
     *   }
     * })
     * 
    **/
    delete<T extends loginsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loginsDeleteArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Logins.
     * @param {loginsUpdateArgs} args - Arguments to update one Logins.
     * @example
     * // Update one Logins
     * const logins = await prisma.logins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends loginsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loginsUpdateArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Logins.
     * @param {loginsDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.logins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends loginsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loginsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const logins = await prisma.logins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends loginsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loginsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logins.
     * @param {loginsUpsertArgs} args - Arguments to update or create a Logins.
     * @example
     * // Update or create a Logins
     * const logins = await prisma.logins.upsert({
     *   create: {
     *     // ... data to create a Logins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logins we want to update
     *   }
     * })
    **/
    upsert<T extends loginsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loginsUpsertArgs<ExtArgs>>
    ): Prisma__loginsClient<$Result.GetResult<Prisma.$loginsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.logins.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends loginsCountArgs>(
      args?: Subset<T, loginsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginsAggregateArgs>(args: Subset<T, LoginsAggregateArgs>): Prisma.PrismaPromise<GetLoginsAggregateType<T>>

    /**
     * Group by Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loginsGroupByArgs} args - Group by arguments.
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
      T extends loginsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loginsGroupByArgs['orderBy'] }
        : { orderBy?: loginsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, loginsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logins model
   */
  readonly fields: loginsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loginsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the logins model
   */ 
  interface loginsFieldRefs {
    readonly id: FieldRef<"logins", 'Int'>
    readonly email: FieldRef<"logins", 'String'>
    readonly name: FieldRef<"logins", 'String'>
    readonly logins: FieldRef<"logins", 'Int'>
    readonly objectId: FieldRef<"logins", 'String'>
    readonly lastLogin: FieldRef<"logins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logins findUnique
   */
  export type loginsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins findUniqueOrThrow
   */
  export type loginsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins findFirst
   */
  export type loginsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * logins findFirstOrThrow
   */
  export type loginsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logins.
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logins.
     */
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * logins findMany
   */
  export type loginsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Filter, which logins to fetch.
     */
    where?: loginsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logins to fetch.
     */
    orderBy?: loginsOrderByWithRelationInput | loginsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logins.
     */
    cursor?: loginsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logins.
     */
    skip?: number
    distinct?: LoginsScalarFieldEnum | LoginsScalarFieldEnum[]
  }

  /**
   * logins create
   */
  export type loginsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * The data needed to create a logins.
     */
    data: XOR<loginsCreateInput, loginsUncheckedCreateInput>
  }

  /**
   * logins createMany
   */
  export type loginsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logins.
     */
    data: loginsCreateManyInput | loginsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logins createManyAndReturn
   */
  export type loginsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * The data used to create many logins.
     */
    data: loginsCreateManyInput | loginsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logins update
   */
  export type loginsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * The data needed to update a logins.
     */
    data: XOR<loginsUpdateInput, loginsUncheckedUpdateInput>
    /**
     * Choose, which logins to update.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins updateMany
   */
  export type loginsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logins.
     */
    data: XOR<loginsUpdateManyMutationInput, loginsUncheckedUpdateManyInput>
    /**
     * Filter which logins to update
     */
    where?: loginsWhereInput
  }

  /**
   * logins upsert
   */
  export type loginsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * The filter to search for the logins to update in case it exists.
     */
    where: loginsWhereUniqueInput
    /**
     * In case the logins found by the `where` argument doesn't exist, create a new logins with this data.
     */
    create: XOR<loginsCreateInput, loginsUncheckedCreateInput>
    /**
     * In case the logins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loginsUpdateInput, loginsUncheckedUpdateInput>
  }

  /**
   * logins delete
   */
  export type loginsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
    /**
     * Filter which logins to delete.
     */
    where: loginsWhereUniqueInput
  }

  /**
   * logins deleteMany
   */
  export type loginsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logins to delete
     */
    where?: loginsWhereInput
  }

  /**
   * logins without action
   */
  export type loginsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logins
     */
    select?: loginsSelect<ExtArgs> | null
  }


  /**
   * Model ApiToken
   */

  export type AggregateApiToken = {
    _count: ApiTokenCountAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  export type ApiTokenMinAggregateOutputType = {
    tokenId: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenType: string | null
    expirationDate: Date | null
    addedOn: Date | null
  }

  export type ApiTokenMaxAggregateOutputType = {
    tokenId: string | null
    accessToken: string | null
    refreshToken: string | null
    tokenType: string | null
    expirationDate: Date | null
    addedOn: Date | null
  }

  export type ApiTokenCountAggregateOutputType = {
    tokenId: number
    accessToken: number
    refreshToken: number
    tokenType: number
    expirationDate: number
    addedOn: number
    _all: number
  }


  export type ApiTokenMinAggregateInputType = {
    tokenId?: true
    accessToken?: true
    refreshToken?: true
    tokenType?: true
    expirationDate?: true
    addedOn?: true
  }

  export type ApiTokenMaxAggregateInputType = {
    tokenId?: true
    accessToken?: true
    refreshToken?: true
    tokenType?: true
    expirationDate?: true
    addedOn?: true
  }

  export type ApiTokenCountAggregateInputType = {
    tokenId?: true
    accessToken?: true
    refreshToken?: true
    tokenType?: true
    expirationDate?: true
    addedOn?: true
    _all?: true
  }

  export type ApiTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiToken to aggregate.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiTokens
    **/
    _count?: true | ApiTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiTokenMaxAggregateInputType
  }

  export type GetApiTokenAggregateType<T extends ApiTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateApiToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiToken[P]>
      : GetScalarType<T[P], AggregateApiToken[P]>
  }




  export type ApiTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiTokenWhereInput
    orderBy?: ApiTokenOrderByWithAggregationInput | ApiTokenOrderByWithAggregationInput[]
    by: ApiTokenScalarFieldEnum[] | ApiTokenScalarFieldEnum
    having?: ApiTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiTokenCountAggregateInputType | true
    _min?: ApiTokenMinAggregateInputType
    _max?: ApiTokenMaxAggregateInputType
  }

  export type ApiTokenGroupByOutputType = {
    tokenId: string
    accessToken: string
    refreshToken: string
    tokenType: string
    expirationDate: Date
    addedOn: Date
    _count: ApiTokenCountAggregateOutputType | null
    _min: ApiTokenMinAggregateOutputType | null
    _max: ApiTokenMaxAggregateOutputType | null
  }

  type GetApiTokenGroupByPayload<T extends ApiTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ApiTokenGroupByOutputType[P]>
        }
      >
    >


  export type ApiTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenType?: boolean
    expirationDate?: boolean
    addedOn?: boolean
  }, ExtArgs["result"]["apiToken"]>

  export type ApiTokenSelectScalar = {
    tokenId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    tokenType?: boolean
    expirationDate?: boolean
    addedOn?: boolean
  }



  export type $ApiTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tokenId: string
      accessToken: string
      refreshToken: string
      tokenType: string
      expirationDate: Date
      addedOn: Date
    }, ExtArgs["result"]["apiToken"]>
    composites: {}
  }


  type ApiTokenGetPayload<S extends boolean | null | undefined | ApiTokenDefaultArgs> = $Result.GetResult<Prisma.$ApiTokenPayload, S>

  type ApiTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiTokenCountAggregateInputType | true
    }

  export interface ApiTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiToken'], meta: { name: 'ApiToken' } }
    /**
     * Find zero or one ApiToken that matches the filter.
     * @param {ApiTokenFindUniqueArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApiTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApiTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ApiToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiTokenFindUniqueOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApiTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ApiToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApiTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiTokenFindFirstArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ApiToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindFirstOrThrowArgs} args - Arguments to find a ApiToken
     * @example
     * // Get one ApiToken
     * const apiToken = await prisma.apiToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApiTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ApiTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiTokens
     * const apiTokens = await prisma.apiToken.findMany()
     * 
     * // Get first 10 ApiTokens
     * const apiTokens = await prisma.apiToken.findMany({ take: 10 })
     * 
     * // Only select the `tokenId`
     * const apiTokenWithTokenIdOnly = await prisma.apiToken.findMany({ select: { tokenId: true } })
     * 
    **/
    findMany<T extends ApiTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ApiToken.
     * @param {ApiTokenCreateArgs} args - Arguments to create a ApiToken.
     * @example
     * // Create one ApiToken
     * const ApiToken = await prisma.apiToken.create({
     *   data: {
     *     // ... data to create a ApiToken
     *   }
     * })
     * 
    **/
    create<T extends ApiTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiTokenCreateArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ApiTokens.
     * @param {ApiTokenCreateManyArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ApiTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiTokens and returns the data saved in the database.
     * @param {ApiTokenCreateManyAndReturnArgs} args - Arguments to create many ApiTokens.
     * @example
     * // Create many ApiTokens
     * const apiToken = await prisma.apiToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiTokens and only return the `tokenId`
     * const apiTokenWithTokenIdOnly = await prisma.apiToken.createManyAndReturn({ 
     *   select: { tokenId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ApiTokenCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiTokenCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ApiToken.
     * @param {ApiTokenDeleteArgs} args - Arguments to delete one ApiToken.
     * @example
     * // Delete one ApiToken
     * const ApiToken = await prisma.apiToken.delete({
     *   where: {
     *     // ... filter to delete one ApiToken
     *   }
     * })
     * 
    **/
    delete<T extends ApiTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApiTokenDeleteArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ApiToken.
     * @param {ApiTokenUpdateArgs} args - Arguments to update one ApiToken.
     * @example
     * // Update one ApiToken
     * const apiToken = await prisma.apiToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApiTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiTokenUpdateArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ApiTokens.
     * @param {ApiTokenDeleteManyArgs} args - Arguments to filter ApiTokens to delete.
     * @example
     * // Delete a few ApiTokens
     * const { count } = await prisma.apiToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApiTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiTokens
     * const apiToken = await prisma.apiToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApiTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApiTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiToken.
     * @param {ApiTokenUpsertArgs} args - Arguments to update or create a ApiToken.
     * @example
     * // Update or create a ApiToken
     * const apiToken = await prisma.apiToken.upsert({
     *   create: {
     *     // ... data to create a ApiToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiToken we want to update
     *   }
     * })
    **/
    upsert<T extends ApiTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApiTokenUpsertArgs<ExtArgs>>
    ): Prisma__ApiTokenClient<$Result.GetResult<Prisma.$ApiTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ApiTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenCountArgs} args - Arguments to filter ApiTokens to count.
     * @example
     * // Count the number of ApiTokens
     * const count = await prisma.apiToken.count({
     *   where: {
     *     // ... the filter for the ApiTokens we want to count
     *   }
     * })
    **/
    count<T extends ApiTokenCountArgs>(
      args?: Subset<T, ApiTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiTokenAggregateArgs>(args: Subset<T, ApiTokenAggregateArgs>): Prisma.PrismaPromise<GetApiTokenAggregateType<T>>

    /**
     * Group by ApiToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiTokenGroupByArgs} args - Group by arguments.
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
      T extends ApiTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiTokenGroupByArgs['orderBy'] }
        : { orderBy?: ApiTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiToken model
   */
  readonly fields: ApiTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ApiToken model
   */ 
  interface ApiTokenFieldRefs {
    readonly tokenId: FieldRef<"ApiToken", 'String'>
    readonly accessToken: FieldRef<"ApiToken", 'String'>
    readonly refreshToken: FieldRef<"ApiToken", 'String'>
    readonly tokenType: FieldRef<"ApiToken", 'String'>
    readonly expirationDate: FieldRef<"ApiToken", 'DateTime'>
    readonly addedOn: FieldRef<"ApiToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiToken findUnique
   */
  export type ApiTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findUniqueOrThrow
   */
  export type ApiTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken findFirst
   */
  export type ApiTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findFirstOrThrow
   */
  export type ApiTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Filter, which ApiToken to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiTokens.
     */
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken findMany
   */
  export type ApiTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Filter, which ApiTokens to fetch.
     */
    where?: ApiTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiTokens to fetch.
     */
    orderBy?: ApiTokenOrderByWithRelationInput | ApiTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiTokens.
     */
    cursor?: ApiTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiTokens.
     */
    skip?: number
    distinct?: ApiTokenScalarFieldEnum | ApiTokenScalarFieldEnum[]
  }

  /**
   * ApiToken create
   */
  export type ApiTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a ApiToken.
     */
    data: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
  }

  /**
   * ApiToken createMany
   */
  export type ApiTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiToken createManyAndReturn
   */
  export type ApiTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * The data used to create many ApiTokens.
     */
    data: ApiTokenCreateManyInput | ApiTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiToken update
   */
  export type ApiTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a ApiToken.
     */
    data: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
    /**
     * Choose, which ApiToken to update.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken updateMany
   */
  export type ApiTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiTokens.
     */
    data: XOR<ApiTokenUpdateManyMutationInput, ApiTokenUncheckedUpdateManyInput>
    /**
     * Filter which ApiTokens to update
     */
    where?: ApiTokenWhereInput
  }

  /**
   * ApiToken upsert
   */
  export type ApiTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the ApiToken to update in case it exists.
     */
    where: ApiTokenWhereUniqueInput
    /**
     * In case the ApiToken found by the `where` argument doesn't exist, create a new ApiToken with this data.
     */
    create: XOR<ApiTokenCreateInput, ApiTokenUncheckedCreateInput>
    /**
     * In case the ApiToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiTokenUpdateInput, ApiTokenUncheckedUpdateInput>
  }

  /**
   * ApiToken delete
   */
  export type ApiTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
    /**
     * Filter which ApiToken to delete.
     */
    where: ApiTokenWhereUniqueInput
  }

  /**
   * ApiToken deleteMany
   */
  export type ApiTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiTokens to delete
     */
    where?: ApiTokenWhereInput
  }

  /**
   * ApiToken without action
   */
  export type ApiTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiToken
     */
    select?: ApiTokenSelect<ExtArgs> | null
  }


  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    addedOn: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    addedOn: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    addedOn: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    addedOn?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    addedOn?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    addedOn?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    addedOn: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    addedOn?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    addedOn?: boolean
  }



  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      addedOn: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends rolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesCreateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends rolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends rolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends rolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>
    ): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
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
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the roles model
   */ 
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'String'>
    readonly addedOn: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
  }


  /**
   * Model tracking
   */

  export type AggregateTracking = {
    _count: TrackingCountAggregateOutputType | null
    _avg: TrackingAvgAggregateOutputType | null
    _sum: TrackingSumAggregateOutputType | null
    _min: TrackingMinAggregateOutputType | null
    _max: TrackingMaxAggregateOutputType | null
  }

  export type TrackingAvgAggregateOutputType = {
    id: number | null
  }

  export type TrackingSumAggregateOutputType = {
    id: number | null
  }

  export type TrackingMinAggregateOutputType = {
    id: number | null
    country: string | null
    city: string | null
    region: string | null
    url: string | null
    nexturl: string | null
    ip: string | null
    pathname: string | null
    mobile: string | null
    platform: string | null
    useragent: string | null
    referer: string | null
    fetchsite: string | null
    created_at: Date | null
    addedOn: Date | null
  }

  export type TrackingMaxAggregateOutputType = {
    id: number | null
    country: string | null
    city: string | null
    region: string | null
    url: string | null
    nexturl: string | null
    ip: string | null
    pathname: string | null
    mobile: string | null
    platform: string | null
    useragent: string | null
    referer: string | null
    fetchsite: string | null
    created_at: Date | null
    addedOn: Date | null
  }

  export type TrackingCountAggregateOutputType = {
    id: number
    country: number
    city: number
    region: number
    url: number
    nexturl: number
    ip: number
    pathname: number
    mobile: number
    platform: number
    useragent: number
    referer: number
    fetchsite: number
    created_at: number
    addedOn: number
    _all: number
  }


  export type TrackingAvgAggregateInputType = {
    id?: true
  }

  export type TrackingSumAggregateInputType = {
    id?: true
  }

  export type TrackingMinAggregateInputType = {
    id?: true
    country?: true
    city?: true
    region?: true
    url?: true
    nexturl?: true
    ip?: true
    pathname?: true
    mobile?: true
    platform?: true
    useragent?: true
    referer?: true
    fetchsite?: true
    created_at?: true
    addedOn?: true
  }

  export type TrackingMaxAggregateInputType = {
    id?: true
    country?: true
    city?: true
    region?: true
    url?: true
    nexturl?: true
    ip?: true
    pathname?: true
    mobile?: true
    platform?: true
    useragent?: true
    referer?: true
    fetchsite?: true
    created_at?: true
    addedOn?: true
  }

  export type TrackingCountAggregateInputType = {
    id?: true
    country?: true
    city?: true
    region?: true
    url?: true
    nexturl?: true
    ip?: true
    pathname?: true
    mobile?: true
    platform?: true
    useragent?: true
    referer?: true
    fetchsite?: true
    created_at?: true
    addedOn?: true
    _all?: true
  }

  export type TrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tracking to aggregate.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: trackingOrderByWithRelationInput | trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trackings
    **/
    _count?: true | TrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingMaxAggregateInputType
  }

  export type GetTrackingAggregateType<T extends TrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracking[P]>
      : GetScalarType<T[P], AggregateTracking[P]>
  }




  export type trackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trackingWhereInput
    orderBy?: trackingOrderByWithAggregationInput | trackingOrderByWithAggregationInput[]
    by: TrackingScalarFieldEnum[] | TrackingScalarFieldEnum
    having?: trackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingCountAggregateInputType | true
    _avg?: TrackingAvgAggregateInputType
    _sum?: TrackingSumAggregateInputType
    _min?: TrackingMinAggregateInputType
    _max?: TrackingMaxAggregateInputType
  }

  export type TrackingGroupByOutputType = {
    id: number
    country: string | null
    city: string | null
    region: string | null
    url: string | null
    nexturl: string | null
    ip: string | null
    pathname: string | null
    mobile: string | null
    platform: string | null
    useragent: string | null
    referer: string | null
    fetchsite: string | null
    created_at: Date | null
    addedOn: Date
    _count: TrackingCountAggregateOutputType | null
    _avg: TrackingAvgAggregateOutputType | null
    _sum: TrackingSumAggregateOutputType | null
    _min: TrackingMinAggregateOutputType | null
    _max: TrackingMaxAggregateOutputType | null
  }

  type GetTrackingGroupByPayload<T extends trackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingGroupByOutputType[P]>
        }
      >
    >


  export type trackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    city?: boolean
    region?: boolean
    url?: boolean
    nexturl?: boolean
    ip?: boolean
    pathname?: boolean
    mobile?: boolean
    platform?: boolean
    useragent?: boolean
    referer?: boolean
    fetchsite?: boolean
    created_at?: boolean
    addedOn?: boolean
  }, ExtArgs["result"]["tracking"]>

  export type trackingSelectScalar = {
    id?: boolean
    country?: boolean
    city?: boolean
    region?: boolean
    url?: boolean
    nexturl?: boolean
    ip?: boolean
    pathname?: boolean
    mobile?: boolean
    platform?: boolean
    useragent?: boolean
    referer?: boolean
    fetchsite?: boolean
    created_at?: boolean
    addedOn?: boolean
  }



  export type $trackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tracking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string | null
      city: string | null
      region: string | null
      url: string | null
      nexturl: string | null
      ip: string | null
      pathname: string | null
      mobile: string | null
      platform: string | null
      useragent: string | null
      referer: string | null
      fetchsite: string | null
      created_at: Date | null
      addedOn: Date
    }, ExtArgs["result"]["tracking"]>
    composites: {}
  }


  type trackingGetPayload<S extends boolean | null | undefined | trackingDefaultArgs> = $Result.GetResult<Prisma.$trackingPayload, S>

  type trackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<trackingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrackingCountAggregateInputType | true
    }

  export interface trackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tracking'], meta: { name: 'tracking' } }
    /**
     * Find zero or one Tracking that matches the filter.
     * @param {trackingFindUniqueArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends trackingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trackingFindUniqueArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tracking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {trackingFindUniqueOrThrowArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends trackingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trackingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingFindFirstArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends trackingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trackingFindFirstArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingFindFirstOrThrowArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends trackingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trackingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Trackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trackings
     * const trackings = await prisma.tracking.findMany()
     * 
     * // Get first 10 Trackings
     * const trackings = await prisma.tracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingWithIdOnly = await prisma.tracking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends trackingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trackingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tracking.
     * @param {trackingCreateArgs} args - Arguments to create a Tracking.
     * @example
     * // Create one Tracking
     * const Tracking = await prisma.tracking.create({
     *   data: {
     *     // ... data to create a Tracking
     *   }
     * })
     * 
    **/
    create<T extends trackingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trackingCreateArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Trackings.
     * @param {trackingCreateManyArgs} args - Arguments to create many Trackings.
     * @example
     * // Create many Trackings
     * const tracking = await prisma.tracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends trackingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trackingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trackings and returns the data saved in the database.
     * @param {trackingCreateManyAndReturnArgs} args - Arguments to create many Trackings.
     * @example
     * // Create many Trackings
     * const tracking = await prisma.tracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trackings and only return the `id`
     * const trackingWithIdOnly = await prisma.tracking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends trackingCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, trackingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Tracking.
     * @param {trackingDeleteArgs} args - Arguments to delete one Tracking.
     * @example
     * // Delete one Tracking
     * const Tracking = await prisma.tracking.delete({
     *   where: {
     *     // ... filter to delete one Tracking
     *   }
     * })
     * 
    **/
    delete<T extends trackingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trackingDeleteArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tracking.
     * @param {trackingUpdateArgs} args - Arguments to update one Tracking.
     * @example
     * // Update one Tracking
     * const tracking = await prisma.tracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends trackingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trackingUpdateArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Trackings.
     * @param {trackingDeleteManyArgs} args - Arguments to filter Trackings to delete.
     * @example
     * // Delete a few Trackings
     * const { count } = await prisma.tracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends trackingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trackingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trackings
     * const tracking = await prisma.tracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends trackingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trackingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tracking.
     * @param {trackingUpsertArgs} args - Arguments to update or create a Tracking.
     * @example
     * // Update or create a Tracking
     * const tracking = await prisma.tracking.upsert({
     *   create: {
     *     // ... data to create a Tracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracking we want to update
     *   }
     * })
    **/
    upsert<T extends trackingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trackingUpsertArgs<ExtArgs>>
    ): Prisma__trackingClient<$Result.GetResult<Prisma.$trackingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingCountArgs} args - Arguments to filter Trackings to count.
     * @example
     * // Count the number of Trackings
     * const count = await prisma.tracking.count({
     *   where: {
     *     // ... the filter for the Trackings we want to count
     *   }
     * })
    **/
    count<T extends trackingCountArgs>(
      args?: Subset<T, trackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackingAggregateArgs>(args: Subset<T, TrackingAggregateArgs>): Prisma.PrismaPromise<GetTrackingAggregateType<T>>

    /**
     * Group by Tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trackingGroupByArgs} args - Group by arguments.
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
      T extends trackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trackingGroupByArgs['orderBy'] }
        : { orderBy?: trackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, trackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tracking model
   */
  readonly fields: trackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the tracking model
   */ 
  interface trackingFieldRefs {
    readonly id: FieldRef<"tracking", 'Int'>
    readonly country: FieldRef<"tracking", 'String'>
    readonly city: FieldRef<"tracking", 'String'>
    readonly region: FieldRef<"tracking", 'String'>
    readonly url: FieldRef<"tracking", 'String'>
    readonly nexturl: FieldRef<"tracking", 'String'>
    readonly ip: FieldRef<"tracking", 'String'>
    readonly pathname: FieldRef<"tracking", 'String'>
    readonly mobile: FieldRef<"tracking", 'String'>
    readonly platform: FieldRef<"tracking", 'String'>
    readonly useragent: FieldRef<"tracking", 'String'>
    readonly referer: FieldRef<"tracking", 'String'>
    readonly fetchsite: FieldRef<"tracking", 'String'>
    readonly created_at: FieldRef<"tracking", 'DateTime'>
    readonly addedOn: FieldRef<"tracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tracking findUnique
   */
  export type trackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * Filter, which tracking to fetch.
     */
    where: trackingWhereUniqueInput
  }

  /**
   * tracking findUniqueOrThrow
   */
  export type trackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * Filter, which tracking to fetch.
     */
    where: trackingWhereUniqueInput
  }

  /**
   * tracking findFirst
   */
  export type trackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * Filter, which tracking to fetch.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: trackingOrderByWithRelationInput | trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trackings.
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trackings.
     */
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * tracking findFirstOrThrow
   */
  export type trackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * Filter, which tracking to fetch.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: trackingOrderByWithRelationInput | trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trackings.
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trackings.
     */
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * tracking findMany
   */
  export type trackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * Filter, which trackings to fetch.
     */
    where?: trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trackings to fetch.
     */
    orderBy?: trackingOrderByWithRelationInput | trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trackings.
     */
    cursor?: trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trackings.
     */
    skip?: number
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * tracking create
   */
  export type trackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * The data needed to create a tracking.
     */
    data?: XOR<trackingCreateInput, trackingUncheckedCreateInput>
  }

  /**
   * tracking createMany
   */
  export type trackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trackings.
     */
    data: trackingCreateManyInput | trackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tracking createManyAndReturn
   */
  export type trackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * The data used to create many trackings.
     */
    data: trackingCreateManyInput | trackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tracking update
   */
  export type trackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * The data needed to update a tracking.
     */
    data: XOR<trackingUpdateInput, trackingUncheckedUpdateInput>
    /**
     * Choose, which tracking to update.
     */
    where: trackingWhereUniqueInput
  }

  /**
   * tracking updateMany
   */
  export type trackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trackings.
     */
    data: XOR<trackingUpdateManyMutationInput, trackingUncheckedUpdateManyInput>
    /**
     * Filter which trackings to update
     */
    where?: trackingWhereInput
  }

  /**
   * tracking upsert
   */
  export type trackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * The filter to search for the tracking to update in case it exists.
     */
    where: trackingWhereUniqueInput
    /**
     * In case the tracking found by the `where` argument doesn't exist, create a new tracking with this data.
     */
    create: XOR<trackingCreateInput, trackingUncheckedCreateInput>
    /**
     * In case the tracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trackingUpdateInput, trackingUncheckedUpdateInput>
  }

  /**
   * tracking delete
   */
  export type trackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
    /**
     * Filter which tracking to delete.
     */
    where: trackingWhereUniqueInput
  }

  /**
   * tracking deleteMany
   */
  export type trackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trackings to delete
     */
    where?: trackingWhereInput
  }

  /**
   * tracking without action
   */
  export type trackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tracking
     */
    select?: trackingSelect<ExtArgs> | null
  }


  /**
   * Model customtracking
   */

  export type AggregateCustomtracking = {
    _count: CustomtrackingCountAggregateOutputType | null
    _avg: CustomtrackingAvgAggregateOutputType | null
    _sum: CustomtrackingSumAggregateOutputType | null
    _min: CustomtrackingMinAggregateOutputType | null
    _max: CustomtrackingMaxAggregateOutputType | null
  }

  export type CustomtrackingAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomtrackingSumAggregateOutputType = {
    id: number | null
  }

  export type CustomtrackingMinAggregateOutputType = {
    id: number | null
    country: string | null
    city: string | null
    region: string | null
    url: string | null
    pathname: string | null
    mobile: boolean | null
    platform: string | null
    useragent: string | null
    referer: string | null
    created_at: Date | null
    sessionId: string | null
    userId: string | null
    pageViewId: string | null
    addedOn: Date | null
  }

  export type CustomtrackingMaxAggregateOutputType = {
    id: number | null
    country: string | null
    city: string | null
    region: string | null
    url: string | null
    pathname: string | null
    mobile: boolean | null
    platform: string | null
    useragent: string | null
    referer: string | null
    created_at: Date | null
    sessionId: string | null
    userId: string | null
    pageViewId: string | null
    addedOn: Date | null
  }

  export type CustomtrackingCountAggregateOutputType = {
    id: number
    country: number
    city: number
    region: number
    url: number
    pathname: number
    mobile: number
    platform: number
    useragent: number
    referer: number
    created_at: number
    sessionId: number
    userId: number
    pageViewId: number
    addedOn: number
    _all: number
  }


  export type CustomtrackingAvgAggregateInputType = {
    id?: true
  }

  export type CustomtrackingSumAggregateInputType = {
    id?: true
  }

  export type CustomtrackingMinAggregateInputType = {
    id?: true
    country?: true
    city?: true
    region?: true
    url?: true
    pathname?: true
    mobile?: true
    platform?: true
    useragent?: true
    referer?: true
    created_at?: true
    sessionId?: true
    userId?: true
    pageViewId?: true
    addedOn?: true
  }

  export type CustomtrackingMaxAggregateInputType = {
    id?: true
    country?: true
    city?: true
    region?: true
    url?: true
    pathname?: true
    mobile?: true
    platform?: true
    useragent?: true
    referer?: true
    created_at?: true
    sessionId?: true
    userId?: true
    pageViewId?: true
    addedOn?: true
  }

  export type CustomtrackingCountAggregateInputType = {
    id?: true
    country?: true
    city?: true
    region?: true
    url?: true
    pathname?: true
    mobile?: true
    platform?: true
    useragent?: true
    referer?: true
    created_at?: true
    sessionId?: true
    userId?: true
    pageViewId?: true
    addedOn?: true
    _all?: true
  }

  export type CustomtrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customtracking to aggregate.
     */
    where?: customtrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customtrackings to fetch.
     */
    orderBy?: customtrackingOrderByWithRelationInput | customtrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customtrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customtrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customtrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customtrackings
    **/
    _count?: true | CustomtrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomtrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomtrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomtrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomtrackingMaxAggregateInputType
  }

  export type GetCustomtrackingAggregateType<T extends CustomtrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomtracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomtracking[P]>
      : GetScalarType<T[P], AggregateCustomtracking[P]>
  }




  export type customtrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customtrackingWhereInput
    orderBy?: customtrackingOrderByWithAggregationInput | customtrackingOrderByWithAggregationInput[]
    by: CustomtrackingScalarFieldEnum[] | CustomtrackingScalarFieldEnum
    having?: customtrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomtrackingCountAggregateInputType | true
    _avg?: CustomtrackingAvgAggregateInputType
    _sum?: CustomtrackingSumAggregateInputType
    _min?: CustomtrackingMinAggregateInputType
    _max?: CustomtrackingMaxAggregateInputType
  }

  export type CustomtrackingGroupByOutputType = {
    id: number
    country: string | null
    city: string | null
    region: string | null
    url: string | null
    pathname: string | null
    mobile: boolean | null
    platform: string | null
    useragent: string | null
    referer: string | null
    created_at: Date | null
    sessionId: string | null
    userId: string | null
    pageViewId: string | null
    addedOn: Date
    _count: CustomtrackingCountAggregateOutputType | null
    _avg: CustomtrackingAvgAggregateOutputType | null
    _sum: CustomtrackingSumAggregateOutputType | null
    _min: CustomtrackingMinAggregateOutputType | null
    _max: CustomtrackingMaxAggregateOutputType | null
  }

  type GetCustomtrackingGroupByPayload<T extends customtrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomtrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomtrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomtrackingGroupByOutputType[P]>
            : GetScalarType<T[P], CustomtrackingGroupByOutputType[P]>
        }
      >
    >


  export type customtrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    city?: boolean
    region?: boolean
    url?: boolean
    pathname?: boolean
    mobile?: boolean
    platform?: boolean
    useragent?: boolean
    referer?: boolean
    created_at?: boolean
    sessionId?: boolean
    userId?: boolean
    pageViewId?: boolean
    addedOn?: boolean
  }, ExtArgs["result"]["customtracking"]>

  export type customtrackingSelectScalar = {
    id?: boolean
    country?: boolean
    city?: boolean
    region?: boolean
    url?: boolean
    pathname?: boolean
    mobile?: boolean
    platform?: boolean
    useragent?: boolean
    referer?: boolean
    created_at?: boolean
    sessionId?: boolean
    userId?: boolean
    pageViewId?: boolean
    addedOn?: boolean
  }



  export type $customtrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customtracking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string | null
      city: string | null
      region: string | null
      url: string | null
      pathname: string | null
      mobile: boolean | null
      platform: string | null
      useragent: string | null
      referer: string | null
      created_at: Date | null
      sessionId: string | null
      userId: string | null
      pageViewId: string | null
      addedOn: Date
    }, ExtArgs["result"]["customtracking"]>
    composites: {}
  }


  type customtrackingGetPayload<S extends boolean | null | undefined | customtrackingDefaultArgs> = $Result.GetResult<Prisma.$customtrackingPayload, S>

  type customtrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<customtrackingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomtrackingCountAggregateInputType | true
    }

  export interface customtrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customtracking'], meta: { name: 'customtracking' } }
    /**
     * Find zero or one Customtracking that matches the filter.
     * @param {customtrackingFindUniqueArgs} args - Arguments to find a Customtracking
     * @example
     * // Get one Customtracking
     * const customtracking = await prisma.customtracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends customtrackingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customtrackingFindUniqueArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customtracking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {customtrackingFindUniqueOrThrowArgs} args - Arguments to find a Customtracking
     * @example
     * // Get one Customtracking
     * const customtracking = await prisma.customtracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends customtrackingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customtrackingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customtracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customtrackingFindFirstArgs} args - Arguments to find a Customtracking
     * @example
     * // Get one Customtracking
     * const customtracking = await prisma.customtracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends customtrackingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customtrackingFindFirstArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customtracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customtrackingFindFirstOrThrowArgs} args - Arguments to find a Customtracking
     * @example
     * // Get one Customtracking
     * const customtracking = await prisma.customtracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends customtrackingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customtrackingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customtrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customtrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customtrackings
     * const customtrackings = await prisma.customtracking.findMany()
     * 
     * // Get first 10 Customtrackings
     * const customtrackings = await prisma.customtracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customtrackingWithIdOnly = await prisma.customtracking.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends customtrackingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customtrackingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customtracking.
     * @param {customtrackingCreateArgs} args - Arguments to create a Customtracking.
     * @example
     * // Create one Customtracking
     * const Customtracking = await prisma.customtracking.create({
     *   data: {
     *     // ... data to create a Customtracking
     *   }
     * })
     * 
    **/
    create<T extends customtrackingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customtrackingCreateArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customtrackings.
     * @param {customtrackingCreateManyArgs} args - Arguments to create many Customtrackings.
     * @example
     * // Create many Customtrackings
     * const customtracking = await prisma.customtracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends customtrackingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customtrackingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customtrackings and returns the data saved in the database.
     * @param {customtrackingCreateManyAndReturnArgs} args - Arguments to create many Customtrackings.
     * @example
     * // Create many Customtrackings
     * const customtracking = await prisma.customtracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customtrackings and only return the `id`
     * const customtrackingWithIdOnly = await prisma.customtracking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends customtrackingCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, customtrackingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Customtracking.
     * @param {customtrackingDeleteArgs} args - Arguments to delete one Customtracking.
     * @example
     * // Delete one Customtracking
     * const Customtracking = await prisma.customtracking.delete({
     *   where: {
     *     // ... filter to delete one Customtracking
     *   }
     * })
     * 
    **/
    delete<T extends customtrackingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customtrackingDeleteArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customtracking.
     * @param {customtrackingUpdateArgs} args - Arguments to update one Customtracking.
     * @example
     * // Update one Customtracking
     * const customtracking = await prisma.customtracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends customtrackingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customtrackingUpdateArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customtrackings.
     * @param {customtrackingDeleteManyArgs} args - Arguments to filter Customtrackings to delete.
     * @example
     * // Delete a few Customtrackings
     * const { count } = await prisma.customtracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends customtrackingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customtrackingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customtrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customtrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customtrackings
     * const customtracking = await prisma.customtracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends customtrackingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customtrackingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customtracking.
     * @param {customtrackingUpsertArgs} args - Arguments to update or create a Customtracking.
     * @example
     * // Update or create a Customtracking
     * const customtracking = await prisma.customtracking.upsert({
     *   create: {
     *     // ... data to create a Customtracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customtracking we want to update
     *   }
     * })
    **/
    upsert<T extends customtrackingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customtrackingUpsertArgs<ExtArgs>>
    ): Prisma__customtrackingClient<$Result.GetResult<Prisma.$customtrackingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customtrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customtrackingCountArgs} args - Arguments to filter Customtrackings to count.
     * @example
     * // Count the number of Customtrackings
     * const count = await prisma.customtracking.count({
     *   where: {
     *     // ... the filter for the Customtrackings we want to count
     *   }
     * })
    **/
    count<T extends customtrackingCountArgs>(
      args?: Subset<T, customtrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomtrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customtracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomtrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomtrackingAggregateArgs>(args: Subset<T, CustomtrackingAggregateArgs>): Prisma.PrismaPromise<GetCustomtrackingAggregateType<T>>

    /**
     * Group by Customtracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customtrackingGroupByArgs} args - Group by arguments.
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
      T extends customtrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customtrackingGroupByArgs['orderBy'] }
        : { orderBy?: customtrackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customtrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomtrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customtracking model
   */
  readonly fields: customtrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customtracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customtrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the customtracking model
   */ 
  interface customtrackingFieldRefs {
    readonly id: FieldRef<"customtracking", 'Int'>
    readonly country: FieldRef<"customtracking", 'String'>
    readonly city: FieldRef<"customtracking", 'String'>
    readonly region: FieldRef<"customtracking", 'String'>
    readonly url: FieldRef<"customtracking", 'String'>
    readonly pathname: FieldRef<"customtracking", 'String'>
    readonly mobile: FieldRef<"customtracking", 'Boolean'>
    readonly platform: FieldRef<"customtracking", 'String'>
    readonly useragent: FieldRef<"customtracking", 'String'>
    readonly referer: FieldRef<"customtracking", 'String'>
    readonly created_at: FieldRef<"customtracking", 'DateTime'>
    readonly sessionId: FieldRef<"customtracking", 'String'>
    readonly userId: FieldRef<"customtracking", 'String'>
    readonly pageViewId: FieldRef<"customtracking", 'String'>
    readonly addedOn: FieldRef<"customtracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customtracking findUnique
   */
  export type customtrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * Filter, which customtracking to fetch.
     */
    where: customtrackingWhereUniqueInput
  }

  /**
   * customtracking findUniqueOrThrow
   */
  export type customtrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * Filter, which customtracking to fetch.
     */
    where: customtrackingWhereUniqueInput
  }

  /**
   * customtracking findFirst
   */
  export type customtrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * Filter, which customtracking to fetch.
     */
    where?: customtrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customtrackings to fetch.
     */
    orderBy?: customtrackingOrderByWithRelationInput | customtrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customtrackings.
     */
    cursor?: customtrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customtrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customtrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customtrackings.
     */
    distinct?: CustomtrackingScalarFieldEnum | CustomtrackingScalarFieldEnum[]
  }

  /**
   * customtracking findFirstOrThrow
   */
  export type customtrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * Filter, which customtracking to fetch.
     */
    where?: customtrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customtrackings to fetch.
     */
    orderBy?: customtrackingOrderByWithRelationInput | customtrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customtrackings.
     */
    cursor?: customtrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customtrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customtrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customtrackings.
     */
    distinct?: CustomtrackingScalarFieldEnum | CustomtrackingScalarFieldEnum[]
  }

  /**
   * customtracking findMany
   */
  export type customtrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * Filter, which customtrackings to fetch.
     */
    where?: customtrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customtrackings to fetch.
     */
    orderBy?: customtrackingOrderByWithRelationInput | customtrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customtrackings.
     */
    cursor?: customtrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customtrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customtrackings.
     */
    skip?: number
    distinct?: CustomtrackingScalarFieldEnum | CustomtrackingScalarFieldEnum[]
  }

  /**
   * customtracking create
   */
  export type customtrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * The data needed to create a customtracking.
     */
    data?: XOR<customtrackingCreateInput, customtrackingUncheckedCreateInput>
  }

  /**
   * customtracking createMany
   */
  export type customtrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customtrackings.
     */
    data: customtrackingCreateManyInput | customtrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customtracking createManyAndReturn
   */
  export type customtrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * The data used to create many customtrackings.
     */
    data: customtrackingCreateManyInput | customtrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customtracking update
   */
  export type customtrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * The data needed to update a customtracking.
     */
    data: XOR<customtrackingUpdateInput, customtrackingUncheckedUpdateInput>
    /**
     * Choose, which customtracking to update.
     */
    where: customtrackingWhereUniqueInput
  }

  /**
   * customtracking updateMany
   */
  export type customtrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customtrackings.
     */
    data: XOR<customtrackingUpdateManyMutationInput, customtrackingUncheckedUpdateManyInput>
    /**
     * Filter which customtrackings to update
     */
    where?: customtrackingWhereInput
  }

  /**
   * customtracking upsert
   */
  export type customtrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * The filter to search for the customtracking to update in case it exists.
     */
    where: customtrackingWhereUniqueInput
    /**
     * In case the customtracking found by the `where` argument doesn't exist, create a new customtracking with this data.
     */
    create: XOR<customtrackingCreateInput, customtrackingUncheckedCreateInput>
    /**
     * In case the customtracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customtrackingUpdateInput, customtrackingUncheckedUpdateInput>
  }

  /**
   * customtracking delete
   */
  export type customtrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
    /**
     * Filter which customtracking to delete.
     */
    where: customtrackingWhereUniqueInput
  }

  /**
   * customtracking deleteMany
   */
  export type customtrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customtrackings to delete
     */
    where?: customtrackingWhereInput
  }

  /**
   * customtracking without action
   */
  export type customtrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customtracking
     */
    select?: customtrackingSelect<ExtArgs> | null
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


  export const LoginsScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    logins: 'logins',
    objectId: 'objectId',
    lastLogin: 'lastLogin'
  };

  export type LoginsScalarFieldEnum = (typeof LoginsScalarFieldEnum)[keyof typeof LoginsScalarFieldEnum]


  export const ApiTokenScalarFieldEnum: {
    tokenId: 'tokenId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    tokenType: 'tokenType',
    expirationDate: 'expirationDate',
    addedOn: 'addedOn'
  };

  export type ApiTokenScalarFieldEnum = (typeof ApiTokenScalarFieldEnum)[keyof typeof ApiTokenScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    addedOn: 'addedOn'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const TrackingScalarFieldEnum: {
    id: 'id',
    country: 'country',
    city: 'city',
    region: 'region',
    url: 'url',
    nexturl: 'nexturl',
    ip: 'ip',
    pathname: 'pathname',
    mobile: 'mobile',
    platform: 'platform',
    useragent: 'useragent',
    referer: 'referer',
    fetchsite: 'fetchsite',
    created_at: 'created_at',
    addedOn: 'addedOn'
  };

  export type TrackingScalarFieldEnum = (typeof TrackingScalarFieldEnum)[keyof typeof TrackingScalarFieldEnum]


  export const CustomtrackingScalarFieldEnum: {
    id: 'id',
    country: 'country',
    city: 'city',
    region: 'region',
    url: 'url',
    pathname: 'pathname',
    mobile: 'mobile',
    platform: 'platform',
    useragent: 'useragent',
    referer: 'referer',
    created_at: 'created_at',
    sessionId: 'sessionId',
    userId: 'userId',
    pageViewId: 'pageViewId',
    addedOn: 'addedOn'
  };

  export type CustomtrackingScalarFieldEnum = (typeof CustomtrackingScalarFieldEnum)[keyof typeof CustomtrackingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type loginsWhereInput = {
    AND?: loginsWhereInput | loginsWhereInput[]
    OR?: loginsWhereInput[]
    NOT?: loginsWhereInput | loginsWhereInput[]
    id?: IntFilter<"logins"> | number
    email?: StringFilter<"logins"> | string
    name?: StringFilter<"logins"> | string
    logins?: IntFilter<"logins"> | number
    objectId?: StringNullableFilter<"logins"> | string | null
    lastLogin?: DateTimeFilter<"logins"> | Date | string
  }

  export type loginsOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logins?: SortOrder
    objectId?: SortOrderInput | SortOrder
    lastLogin?: SortOrder
  }

  export type loginsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: loginsWhereInput | loginsWhereInput[]
    OR?: loginsWhereInput[]
    NOT?: loginsWhereInput | loginsWhereInput[]
    email?: StringFilter<"logins"> | string
    name?: StringFilter<"logins"> | string
    logins?: IntFilter<"logins"> | number
    objectId?: StringNullableFilter<"logins"> | string | null
    lastLogin?: DateTimeFilter<"logins"> | Date | string
  }, "id">

  export type loginsOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logins?: SortOrder
    objectId?: SortOrderInput | SortOrder
    lastLogin?: SortOrder
    _count?: loginsCountOrderByAggregateInput
    _avg?: loginsAvgOrderByAggregateInput
    _max?: loginsMaxOrderByAggregateInput
    _min?: loginsMinOrderByAggregateInput
    _sum?: loginsSumOrderByAggregateInput
  }

  export type loginsScalarWhereWithAggregatesInput = {
    AND?: loginsScalarWhereWithAggregatesInput | loginsScalarWhereWithAggregatesInput[]
    OR?: loginsScalarWhereWithAggregatesInput[]
    NOT?: loginsScalarWhereWithAggregatesInput | loginsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"logins"> | number
    email?: StringWithAggregatesFilter<"logins"> | string
    name?: StringWithAggregatesFilter<"logins"> | string
    logins?: IntWithAggregatesFilter<"logins"> | number
    objectId?: StringNullableWithAggregatesFilter<"logins"> | string | null
    lastLogin?: DateTimeWithAggregatesFilter<"logins"> | Date | string
  }

  export type ApiTokenWhereInput = {
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    tokenId?: StringFilter<"ApiToken"> | string
    accessToken?: StringFilter<"ApiToken"> | string
    refreshToken?: StringFilter<"ApiToken"> | string
    tokenType?: StringFilter<"ApiToken"> | string
    expirationDate?: DateTimeFilter<"ApiToken"> | Date | string
    addedOn?: DateTimeFilter<"ApiToken"> | Date | string
  }

  export type ApiTokenOrderByWithRelationInput = {
    tokenId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenType?: SortOrder
    expirationDate?: SortOrder
    addedOn?: SortOrder
  }

  export type ApiTokenWhereUniqueInput = Prisma.AtLeast<{
    tokenId?: string
    AND?: ApiTokenWhereInput | ApiTokenWhereInput[]
    OR?: ApiTokenWhereInput[]
    NOT?: ApiTokenWhereInput | ApiTokenWhereInput[]
    accessToken?: StringFilter<"ApiToken"> | string
    refreshToken?: StringFilter<"ApiToken"> | string
    tokenType?: StringFilter<"ApiToken"> | string
    expirationDate?: DateTimeFilter<"ApiToken"> | Date | string
    addedOn?: DateTimeFilter<"ApiToken"> | Date | string
  }, "tokenId">

  export type ApiTokenOrderByWithAggregationInput = {
    tokenId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenType?: SortOrder
    expirationDate?: SortOrder
    addedOn?: SortOrder
    _count?: ApiTokenCountOrderByAggregateInput
    _max?: ApiTokenMaxOrderByAggregateInput
    _min?: ApiTokenMinOrderByAggregateInput
  }

  export type ApiTokenScalarWhereWithAggregatesInput = {
    AND?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    OR?: ApiTokenScalarWhereWithAggregatesInput[]
    NOT?: ApiTokenScalarWhereWithAggregatesInput | ApiTokenScalarWhereWithAggregatesInput[]
    tokenId?: StringWithAggregatesFilter<"ApiToken"> | string
    accessToken?: StringWithAggregatesFilter<"ApiToken"> | string
    refreshToken?: StringWithAggregatesFilter<"ApiToken"> | string
    tokenType?: StringWithAggregatesFilter<"ApiToken"> | string
    expirationDate?: DateTimeWithAggregatesFilter<"ApiToken"> | Date | string
    addedOn?: DateTimeWithAggregatesFilter<"ApiToken"> | Date | string
  }

  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: StringFilter<"roles"> | string
    addedOn?: DateTimeFilter<"roles"> | Date | string
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    addedOn?: SortOrder
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    name?: StringFilter<"roles"> | string
    addedOn?: DateTimeFilter<"roles"> | Date | string
  }, "id">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    addedOn?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: StringWithAggregatesFilter<"roles"> | string
    addedOn?: DateTimeWithAggregatesFilter<"roles"> | Date | string
  }

  export type trackingWhereInput = {
    AND?: trackingWhereInput | trackingWhereInput[]
    OR?: trackingWhereInput[]
    NOT?: trackingWhereInput | trackingWhereInput[]
    id?: IntFilter<"tracking"> | number
    country?: StringNullableFilter<"tracking"> | string | null
    city?: StringNullableFilter<"tracking"> | string | null
    region?: StringNullableFilter<"tracking"> | string | null
    url?: StringNullableFilter<"tracking"> | string | null
    nexturl?: StringNullableFilter<"tracking"> | string | null
    ip?: StringNullableFilter<"tracking"> | string | null
    pathname?: StringNullableFilter<"tracking"> | string | null
    mobile?: StringNullableFilter<"tracking"> | string | null
    platform?: StringNullableFilter<"tracking"> | string | null
    useragent?: StringNullableFilter<"tracking"> | string | null
    referer?: StringNullableFilter<"tracking"> | string | null
    fetchsite?: StringNullableFilter<"tracking"> | string | null
    created_at?: DateTimeNullableFilter<"tracking"> | Date | string | null
    addedOn?: DateTimeFilter<"tracking"> | Date | string
  }

  export type trackingOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    nexturl?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    pathname?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    useragent?: SortOrderInput | SortOrder
    referer?: SortOrderInput | SortOrder
    fetchsite?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    addedOn?: SortOrder
  }

  export type trackingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: trackingWhereInput | trackingWhereInput[]
    OR?: trackingWhereInput[]
    NOT?: trackingWhereInput | trackingWhereInput[]
    country?: StringNullableFilter<"tracking"> | string | null
    city?: StringNullableFilter<"tracking"> | string | null
    region?: StringNullableFilter<"tracking"> | string | null
    url?: StringNullableFilter<"tracking"> | string | null
    nexturl?: StringNullableFilter<"tracking"> | string | null
    ip?: StringNullableFilter<"tracking"> | string | null
    pathname?: StringNullableFilter<"tracking"> | string | null
    mobile?: StringNullableFilter<"tracking"> | string | null
    platform?: StringNullableFilter<"tracking"> | string | null
    useragent?: StringNullableFilter<"tracking"> | string | null
    referer?: StringNullableFilter<"tracking"> | string | null
    fetchsite?: StringNullableFilter<"tracking"> | string | null
    created_at?: DateTimeNullableFilter<"tracking"> | Date | string | null
    addedOn?: DateTimeFilter<"tracking"> | Date | string
  }, "id">

  export type trackingOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    nexturl?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    pathname?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    useragent?: SortOrderInput | SortOrder
    referer?: SortOrderInput | SortOrder
    fetchsite?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    addedOn?: SortOrder
    _count?: trackingCountOrderByAggregateInput
    _avg?: trackingAvgOrderByAggregateInput
    _max?: trackingMaxOrderByAggregateInput
    _min?: trackingMinOrderByAggregateInput
    _sum?: trackingSumOrderByAggregateInput
  }

  export type trackingScalarWhereWithAggregatesInput = {
    AND?: trackingScalarWhereWithAggregatesInput | trackingScalarWhereWithAggregatesInput[]
    OR?: trackingScalarWhereWithAggregatesInput[]
    NOT?: trackingScalarWhereWithAggregatesInput | trackingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tracking"> | number
    country?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    city?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    region?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    url?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    nexturl?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    ip?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    pathname?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    platform?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    useragent?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    referer?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    fetchsite?: StringNullableWithAggregatesFilter<"tracking"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tracking"> | Date | string | null
    addedOn?: DateTimeWithAggregatesFilter<"tracking"> | Date | string
  }

  export type customtrackingWhereInput = {
    AND?: customtrackingWhereInput | customtrackingWhereInput[]
    OR?: customtrackingWhereInput[]
    NOT?: customtrackingWhereInput | customtrackingWhereInput[]
    id?: IntFilter<"customtracking"> | number
    country?: StringNullableFilter<"customtracking"> | string | null
    city?: StringNullableFilter<"customtracking"> | string | null
    region?: StringNullableFilter<"customtracking"> | string | null
    url?: StringNullableFilter<"customtracking"> | string | null
    pathname?: StringNullableFilter<"customtracking"> | string | null
    mobile?: BoolNullableFilter<"customtracking"> | boolean | null
    platform?: StringNullableFilter<"customtracking"> | string | null
    useragent?: StringNullableFilter<"customtracking"> | string | null
    referer?: StringNullableFilter<"customtracking"> | string | null
    created_at?: DateTimeNullableFilter<"customtracking"> | Date | string | null
    sessionId?: StringNullableFilter<"customtracking"> | string | null
    userId?: StringNullableFilter<"customtracking"> | string | null
    pageViewId?: StringNullableFilter<"customtracking"> | string | null
    addedOn?: DateTimeFilter<"customtracking"> | Date | string
  }

  export type customtrackingOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    pathname?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    useragent?: SortOrderInput | SortOrder
    referer?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    pageViewId?: SortOrderInput | SortOrder
    addedOn?: SortOrder
  }

  export type customtrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: customtrackingWhereInput | customtrackingWhereInput[]
    OR?: customtrackingWhereInput[]
    NOT?: customtrackingWhereInput | customtrackingWhereInput[]
    country?: StringNullableFilter<"customtracking"> | string | null
    city?: StringNullableFilter<"customtracking"> | string | null
    region?: StringNullableFilter<"customtracking"> | string | null
    url?: StringNullableFilter<"customtracking"> | string | null
    pathname?: StringNullableFilter<"customtracking"> | string | null
    mobile?: BoolNullableFilter<"customtracking"> | boolean | null
    platform?: StringNullableFilter<"customtracking"> | string | null
    useragent?: StringNullableFilter<"customtracking"> | string | null
    referer?: StringNullableFilter<"customtracking"> | string | null
    created_at?: DateTimeNullableFilter<"customtracking"> | Date | string | null
    sessionId?: StringNullableFilter<"customtracking"> | string | null
    userId?: StringNullableFilter<"customtracking"> | string | null
    pageViewId?: StringNullableFilter<"customtracking"> | string | null
    addedOn?: DateTimeFilter<"customtracking"> | Date | string
  }, "id">

  export type customtrackingOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    pathname?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    useragent?: SortOrderInput | SortOrder
    referer?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    sessionId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    pageViewId?: SortOrderInput | SortOrder
    addedOn?: SortOrder
    _count?: customtrackingCountOrderByAggregateInput
    _avg?: customtrackingAvgOrderByAggregateInput
    _max?: customtrackingMaxOrderByAggregateInput
    _min?: customtrackingMinOrderByAggregateInput
    _sum?: customtrackingSumOrderByAggregateInput
  }

  export type customtrackingScalarWhereWithAggregatesInput = {
    AND?: customtrackingScalarWhereWithAggregatesInput | customtrackingScalarWhereWithAggregatesInput[]
    OR?: customtrackingScalarWhereWithAggregatesInput[]
    NOT?: customtrackingScalarWhereWithAggregatesInput | customtrackingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"customtracking"> | number
    country?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    city?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    region?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    url?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    pathname?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    mobile?: BoolNullableWithAggregatesFilter<"customtracking"> | boolean | null
    platform?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    useragent?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    referer?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"customtracking"> | Date | string | null
    sessionId?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    userId?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    pageViewId?: StringNullableWithAggregatesFilter<"customtracking"> | string | null
    addedOn?: DateTimeWithAggregatesFilter<"customtracking"> | Date | string
  }

  export type loginsCreateInput = {
    email: string
    name: string
    logins: number
    objectId?: string | null
    lastLogin?: Date | string
  }

  export type loginsUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    logins: number
    objectId?: string | null
    lastLogin?: Date | string
  }

  export type loginsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logins?: IntFieldUpdateOperationsInput | number
    objectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loginsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logins?: IntFieldUpdateOperationsInput | number
    objectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loginsCreateManyInput = {
    id?: number
    email: string
    name: string
    logins: number
    objectId?: string | null
    lastLogin?: Date | string
  }

  export type loginsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logins?: IntFieldUpdateOperationsInput | number
    objectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type loginsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logins?: IntFieldUpdateOperationsInput | number
    objectId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenCreateInput = {
    tokenId?: string
    accessToken: string
    refreshToken?: string
    tokenType?: string
    expirationDate: Date | string
    addedOn?: Date | string
  }

  export type ApiTokenUncheckedCreateInput = {
    tokenId?: string
    accessToken: string
    refreshToken?: string
    tokenType?: string
    expirationDate: Date | string
    addedOn?: Date | string
  }

  export type ApiTokenUpdateInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenUncheckedUpdateInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenCreateManyInput = {
    tokenId?: string
    accessToken: string
    refreshToken?: string
    tokenType?: string
    expirationDate: Date | string
    addedOn?: Date | string
  }

  export type ApiTokenUpdateManyMutationInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiTokenUncheckedUpdateManyInput = {
    tokenId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    tokenType?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesCreateInput = {
    name: string
    addedOn?: Date | string
  }

  export type rolesUncheckedCreateInput = {
    id?: number
    name: string
    addedOn?: Date | string
  }

  export type rolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesCreateManyInput = {
    id?: number
    name: string
    addedOn?: Date | string
  }

  export type rolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trackingCreateInput = {
    country?: string | null
    city?: string | null
    region?: string | null
    url?: string | null
    nexturl?: string | null
    ip?: string | null
    pathname?: string | null
    mobile?: string | null
    platform?: string | null
    useragent?: string | null
    referer?: string | null
    fetchsite?: string | null
    created_at?: Date | string | null
    addedOn?: Date | string
  }

  export type trackingUncheckedCreateInput = {
    id?: number
    country?: string | null
    city?: string | null
    region?: string | null
    url?: string | null
    nexturl?: string | null
    ip?: string | null
    pathname?: string | null
    mobile?: string | null
    platform?: string | null
    useragent?: string | null
    referer?: string | null
    fetchsite?: string | null
    created_at?: Date | string | null
    addedOn?: Date | string
  }

  export type trackingUpdateInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    nexturl?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    fetchsite?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trackingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    nexturl?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    fetchsite?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trackingCreateManyInput = {
    id?: number
    country?: string | null
    city?: string | null
    region?: string | null
    url?: string | null
    nexturl?: string | null
    ip?: string | null
    pathname?: string | null
    mobile?: string | null
    platform?: string | null
    useragent?: string | null
    referer?: string | null
    fetchsite?: string | null
    created_at?: Date | string | null
    addedOn?: Date | string
  }

  export type trackingUpdateManyMutationInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    nexturl?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    fetchsite?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type trackingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    nexturl?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    fetchsite?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customtrackingCreateInput = {
    country?: string | null
    city?: string | null
    region?: string | null
    url?: string | null
    pathname?: string | null
    mobile?: boolean | null
    platform?: string | null
    useragent?: string | null
    referer?: string | null
    created_at?: Date | string | null
    sessionId?: string | null
    userId?: string | null
    pageViewId?: string | null
    addedOn?: Date | string
  }

  export type customtrackingUncheckedCreateInput = {
    id?: number
    country?: string | null
    city?: string | null
    region?: string | null
    url?: string | null
    pathname?: string | null
    mobile?: boolean | null
    platform?: string | null
    useragent?: string | null
    referer?: string | null
    created_at?: Date | string | null
    sessionId?: string | null
    userId?: string | null
    pageViewId?: string | null
    addedOn?: Date | string
  }

  export type customtrackingUpdateInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewId?: NullableStringFieldUpdateOperationsInput | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customtrackingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewId?: NullableStringFieldUpdateOperationsInput | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customtrackingCreateManyInput = {
    id?: number
    country?: string | null
    city?: string | null
    region?: string | null
    url?: string | null
    pathname?: string | null
    mobile?: boolean | null
    platform?: string | null
    useragent?: string | null
    referer?: string | null
    created_at?: Date | string | null
    sessionId?: string | null
    userId?: string | null
    pageViewId?: string | null
    addedOn?: Date | string
  }

  export type customtrackingUpdateManyMutationInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewId?: NullableStringFieldUpdateOperationsInput | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customtrackingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    pathname?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableBoolFieldUpdateOperationsInput | boolean | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    useragent?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    pageViewId?: NullableStringFieldUpdateOperationsInput | string | null
    addedOn?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type loginsCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logins?: SortOrder
    objectId?: SortOrder
    lastLogin?: SortOrder
  }

  export type loginsAvgOrderByAggregateInput = {
    id?: SortOrder
    logins?: SortOrder
  }

  export type loginsMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logins?: SortOrder
    objectId?: SortOrder
    lastLogin?: SortOrder
  }

  export type loginsMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    logins?: SortOrder
    objectId?: SortOrder
    lastLogin?: SortOrder
  }

  export type loginsSumOrderByAggregateInput = {
    id?: SortOrder
    logins?: SortOrder
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

  export type ApiTokenCountOrderByAggregateInput = {
    tokenId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenType?: SortOrder
    expirationDate?: SortOrder
    addedOn?: SortOrder
  }

  export type ApiTokenMaxOrderByAggregateInput = {
    tokenId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenType?: SortOrder
    expirationDate?: SortOrder
    addedOn?: SortOrder
  }

  export type ApiTokenMinOrderByAggregateInput = {
    tokenId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    tokenType?: SortOrder
    expirationDate?: SortOrder
    addedOn?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addedOn?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addedOn?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addedOn?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type trackingCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    city?: SortOrder
    region?: SortOrder
    url?: SortOrder
    nexturl?: SortOrder
    ip?: SortOrder
    pathname?: SortOrder
    mobile?: SortOrder
    platform?: SortOrder
    useragent?: SortOrder
    referer?: SortOrder
    fetchsite?: SortOrder
    created_at?: SortOrder
    addedOn?: SortOrder
  }

  export type trackingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type trackingMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    city?: SortOrder
    region?: SortOrder
    url?: SortOrder
    nexturl?: SortOrder
    ip?: SortOrder
    pathname?: SortOrder
    mobile?: SortOrder
    platform?: SortOrder
    useragent?: SortOrder
    referer?: SortOrder
    fetchsite?: SortOrder
    created_at?: SortOrder
    addedOn?: SortOrder
  }

  export type trackingMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    city?: SortOrder
    region?: SortOrder
    url?: SortOrder
    nexturl?: SortOrder
    ip?: SortOrder
    pathname?: SortOrder
    mobile?: SortOrder
    platform?: SortOrder
    useragent?: SortOrder
    referer?: SortOrder
    fetchsite?: SortOrder
    created_at?: SortOrder
    addedOn?: SortOrder
  }

  export type trackingSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type customtrackingCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    city?: SortOrder
    region?: SortOrder
    url?: SortOrder
    pathname?: SortOrder
    mobile?: SortOrder
    platform?: SortOrder
    useragent?: SortOrder
    referer?: SortOrder
    created_at?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    pageViewId?: SortOrder
    addedOn?: SortOrder
  }

  export type customtrackingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customtrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    city?: SortOrder
    region?: SortOrder
    url?: SortOrder
    pathname?: SortOrder
    mobile?: SortOrder
    platform?: SortOrder
    useragent?: SortOrder
    referer?: SortOrder
    created_at?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    pageViewId?: SortOrder
    addedOn?: SortOrder
  }

  export type customtrackingMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    city?: SortOrder
    region?: SortOrder
    url?: SortOrder
    pathname?: SortOrder
    mobile?: SortOrder
    platform?: SortOrder
    useragent?: SortOrder
    referer?: SortOrder
    created_at?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    pageViewId?: SortOrder
    addedOn?: SortOrder
  }

  export type customtrackingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use loginsDefaultArgs instead
     */
    export type loginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = loginsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiTokenDefaultArgs instead
     */
    export type ApiTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolesDefaultArgs instead
     */
    export type rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use trackingDefaultArgs instead
     */
    export type trackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = trackingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use customtrackingDefaultArgs instead
     */
    export type customtrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = customtrackingDefaultArgs<ExtArgs>

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