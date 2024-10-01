
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
 * Model ResourceGroup
 * 
 */
export type ResourceGroup = $Result.DefaultSelection<Prisma.$ResourceGroupPayload>
/**
 * Model StorageAccount
 * 
 */
export type StorageAccount = $Result.DefaultSelection<Prisma.$StorageAccountPayload>
/**
 * Model Container
 * 
 */
export type Container = $Result.DefaultSelection<Prisma.$ContainerPayload>
/**
 * Model Operations
 * 
 */
export type Operations = $Result.DefaultSelection<Prisma.$OperationsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ResourceGroups
 * const resourceGroups = await prisma.resourceGroup.findMany()
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
   * // Fetch zero or more ResourceGroups
   * const resourceGroups = await prisma.resourceGroup.findMany()
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
   * `prisma.resourceGroup`: Exposes CRUD operations for the **ResourceGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceGroups
    * const resourceGroups = await prisma.resourceGroup.findMany()
    * ```
    */
  get resourceGroup(): Prisma.ResourceGroupDelegate<ExtArgs>;

  /**
   * `prisma.storageAccount`: Exposes CRUD operations for the **StorageAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorageAccounts
    * const storageAccounts = await prisma.storageAccount.findMany()
    * ```
    */
  get storageAccount(): Prisma.StorageAccountDelegate<ExtArgs>;

  /**
   * `prisma.container`: Exposes CRUD operations for the **Container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Containers
    * const containers = await prisma.container.findMany()
    * ```
    */
  get container(): Prisma.ContainerDelegate<ExtArgs>;

  /**
   * `prisma.operations`: Exposes CRUD operations for the **Operations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operations
    * const operations = await prisma.operations.findMany()
    * ```
    */
  get operations(): Prisma.OperationsDelegate<ExtArgs>;
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
    ResourceGroup: 'ResourceGroup',
    StorageAccount: 'StorageAccount',
    Container: 'Container',
    Operations: 'Operations'
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
      modelProps: 'resourceGroup' | 'storageAccount' | 'container' | 'operations'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      ResourceGroup: {
        payload: Prisma.$ResourceGroupPayload<ExtArgs>
        fields: Prisma.ResourceGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>
          }
          findFirst: {
            args: Prisma.ResourceGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>
          }
          findMany: {
            args: Prisma.ResourceGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>[]
          }
          create: {
            args: Prisma.ResourceGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>
          }
          createMany: {
            args: Prisma.ResourceGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceGroupCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>[]
          }
          delete: {
            args: Prisma.ResourceGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>
          }
          update: {
            args: Prisma.ResourceGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>
          }
          deleteMany: {
            args: Prisma.ResourceGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResourceGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResourceGroupPayload>
          }
          aggregate: {
            args: Prisma.ResourceGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResourceGroup>
          }
          groupBy: {
            args: Prisma.ResourceGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResourceGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<ResourceGroupCountAggregateOutputType> | number
          }
        }
      }
      StorageAccount: {
        payload: Prisma.$StorageAccountPayload<ExtArgs>
        fields: Prisma.StorageAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorageAccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageAccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>
          }
          findFirst: {
            args: Prisma.StorageAccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageAccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>
          }
          findMany: {
            args: Prisma.StorageAccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>[]
          }
          create: {
            args: Prisma.StorageAccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>
          }
          createMany: {
            args: Prisma.StorageAccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StorageAccountCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>[]
          }
          delete: {
            args: Prisma.StorageAccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>
          }
          update: {
            args: Prisma.StorageAccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>
          }
          deleteMany: {
            args: Prisma.StorageAccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StorageAccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StorageAccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageAccountPayload>
          }
          aggregate: {
            args: Prisma.StorageAccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStorageAccount>
          }
          groupBy: {
            args: Prisma.StorageAccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StorageAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageAccountCountArgs<ExtArgs>,
            result: $Utils.Optional<StorageAccountCountAggregateOutputType> | number
          }
        }
      }
      Container: {
        payload: Prisma.$ContainerPayload<ExtArgs>
        fields: Prisma.ContainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findFirst: {
            args: Prisma.ContainerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findMany: {
            args: Prisma.ContainerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          create: {
            args: Prisma.ContainerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          createMany: {
            args: Prisma.ContainerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContainerCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          delete: {
            args: Prisma.ContainerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          update: {
            args: Prisma.ContainerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          deleteMany: {
            args: Prisma.ContainerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContainerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContainerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          aggregate: {
            args: Prisma.ContainerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContainer>
          }
          groupBy: {
            args: Prisma.ContainerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContainerCountArgs<ExtArgs>,
            result: $Utils.Optional<ContainerCountAggregateOutputType> | number
          }
        }
      }
      Operations: {
        payload: Prisma.$OperationsPayload<ExtArgs>
        fields: Prisma.OperationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>
          }
          findFirst: {
            args: Prisma.OperationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>
          }
          findMany: {
            args: Prisma.OperationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>[]
          }
          create: {
            args: Prisma.OperationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>
          }
          createMany: {
            args: Prisma.OperationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperationsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>[]
          }
          delete: {
            args: Prisma.OperationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>
          }
          update: {
            args: Prisma.OperationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>
          }
          deleteMany: {
            args: Prisma.OperationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OperationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OperationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OperationsPayload>
          }
          aggregate: {
            args: Prisma.OperationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOperations>
          }
          groupBy: {
            args: Prisma.OperationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OperationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperationsCountArgs<ExtArgs>,
            result: $Utils.Optional<OperationsCountAggregateOutputType> | number
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
   * Count Type ResourceGroupCountOutputType
   */

  export type ResourceGroupCountOutputType = {
    storageAccounts: number
  }

  export type ResourceGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storageAccounts?: boolean | ResourceGroupCountOutputTypeCountStorageAccountsArgs
  }

  // Custom InputTypes
  /**
   * ResourceGroupCountOutputType without action
   */
  export type ResourceGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroupCountOutputType
     */
    select?: ResourceGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceGroupCountOutputType without action
   */
  export type ResourceGroupCountOutputTypeCountStorageAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageAccountWhereInput
  }


  /**
   * Count Type StorageAccountCountOutputType
   */

  export type StorageAccountCountOutputType = {
    containers: number
  }

  export type StorageAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    containers?: boolean | StorageAccountCountOutputTypeCountContainersArgs
  }

  // Custom InputTypes
  /**
   * StorageAccountCountOutputType without action
   */
  export type StorageAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccountCountOutputType
     */
    select?: StorageAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StorageAccountCountOutputType without action
   */
  export type StorageAccountCountOutputTypeCountContainersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ResourceGroup
   */

  export type AggregateResourceGroup = {
    _count: ResourceGroupCountAggregateOutputType | null
    _avg: ResourceGroupAvgAggregateOutputType | null
    _sum: ResourceGroupSumAggregateOutputType | null
    _min: ResourceGroupMinAggregateOutputType | null
    _max: ResourceGroupMaxAggregateOutputType | null
  }

  export type ResourceGroupAvgAggregateOutputType = {
    id: number | null
  }

  export type ResourceGroupSumAggregateOutputType = {
    id: number | null
  }

  export type ResourceGroupMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ResourceGroupMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ResourceGroupCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    createdAt: number
    _all: number
  }


  export type ResourceGroupAvgAggregateInputType = {
    id?: true
  }

  export type ResourceGroupSumAggregateInputType = {
    id?: true
  }

  export type ResourceGroupMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
  }

  export type ResourceGroupMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
  }

  export type ResourceGroupCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type ResourceGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceGroup to aggregate.
     */
    where?: ResourceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceGroups to fetch.
     */
    orderBy?: ResourceGroupOrderByWithRelationInput | ResourceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceGroups
    **/
    _count?: true | ResourceGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceGroupMaxAggregateInputType
  }

  export type GetResourceGroupAggregateType<T extends ResourceGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceGroup[P]>
      : GetScalarType<T[P], AggregateResourceGroup[P]>
  }




  export type ResourceGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceGroupWhereInput
    orderBy?: ResourceGroupOrderByWithAggregationInput | ResourceGroupOrderByWithAggregationInput[]
    by: ResourceGroupScalarFieldEnum[] | ResourceGroupScalarFieldEnum
    having?: ResourceGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceGroupCountAggregateInputType | true
    _avg?: ResourceGroupAvgAggregateInputType
    _sum?: ResourceGroupSumAggregateInputType
    _min?: ResourceGroupMinAggregateInputType
    _max?: ResourceGroupMaxAggregateInputType
  }

  export type ResourceGroupGroupByOutputType = {
    id: number
    userId: string
    name: string
    createdAt: Date
    _count: ResourceGroupCountAggregateOutputType | null
    _avg: ResourceGroupAvgAggregateOutputType | null
    _sum: ResourceGroupSumAggregateOutputType | null
    _min: ResourceGroupMinAggregateOutputType | null
    _max: ResourceGroupMaxAggregateOutputType | null
  }

  type GetResourceGroupGroupByPayload<T extends ResourceGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupGroupByOutputType[P]>
        }
      >
    >


  export type ResourceGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    storageAccounts?: boolean | ResourceGroup$storageAccountsArgs<ExtArgs>
    _count?: boolean | ResourceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceGroup"]>

  export type ResourceGroupSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
  }


  export type ResourceGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storageAccounts?: boolean | ResourceGroup$storageAccountsArgs<ExtArgs>
    _count?: boolean | ResourceGroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ResourceGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceGroup"
    objects: {
      storageAccounts: Prisma.$StorageAccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["resourceGroup"]>
    composites: {}
  }


  type ResourceGroupGetPayload<S extends boolean | null | undefined | ResourceGroupDefaultArgs> = $Result.GetResult<Prisma.$ResourceGroupPayload, S>

  type ResourceGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResourceGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResourceGroupCountAggregateInputType | true
    }

  export interface ResourceGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceGroup'], meta: { name: 'ResourceGroup' } }
    /**
     * Find zero or one ResourceGroup that matches the filter.
     * @param {ResourceGroupFindUniqueArgs} args - Arguments to find a ResourceGroup
     * @example
     * // Get one ResourceGroup
     * const resourceGroup = await prisma.resourceGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResourceGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResourceGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResourceGroupFindUniqueOrThrowArgs} args - Arguments to find a ResourceGroup
     * @example
     * // Get one ResourceGroup
     * const resourceGroup = await prisma.resourceGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResourceGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResourceGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupFindFirstArgs} args - Arguments to find a ResourceGroup
     * @example
     * // Get one ResourceGroup
     * const resourceGroup = await prisma.resourceGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResourceGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceGroupFindFirstArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResourceGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupFindFirstOrThrowArgs} args - Arguments to find a ResourceGroup
     * @example
     * // Get one ResourceGroup
     * const resourceGroup = await prisma.resourceGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResourceGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResourceGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceGroups
     * const resourceGroups = await prisma.resourceGroup.findMany()
     * 
     * // Get first 10 ResourceGroups
     * const resourceGroups = await prisma.resourceGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceGroupWithIdOnly = await prisma.resourceGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResourceGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResourceGroup.
     * @param {ResourceGroupCreateArgs} args - Arguments to create a ResourceGroup.
     * @example
     * // Create one ResourceGroup
     * const ResourceGroup = await prisma.resourceGroup.create({
     *   data: {
     *     // ... data to create a ResourceGroup
     *   }
     * })
     * 
    **/
    create<T extends ResourceGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceGroupCreateArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResourceGroups.
     * @param {ResourceGroupCreateManyArgs} args - Arguments to create many ResourceGroups.
     * @example
     * // Create many ResourceGroups
     * const resourceGroup = await prisma.resourceGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResourceGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceGroups and returns the data saved in the database.
     * @param {ResourceGroupCreateManyAndReturnArgs} args - Arguments to create many ResourceGroups.
     * @example
     * // Create many ResourceGroups
     * const resourceGroup = await prisma.resourceGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceGroups and only return the `id`
     * const resourceGroupWithIdOnly = await prisma.resourceGroup.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ResourceGroupCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceGroupCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a ResourceGroup.
     * @param {ResourceGroupDeleteArgs} args - Arguments to delete one ResourceGroup.
     * @example
     * // Delete one ResourceGroup
     * const ResourceGroup = await prisma.resourceGroup.delete({
     *   where: {
     *     // ... filter to delete one ResourceGroup
     *   }
     * })
     * 
    **/
    delete<T extends ResourceGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceGroupDeleteArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResourceGroup.
     * @param {ResourceGroupUpdateArgs} args - Arguments to update one ResourceGroup.
     * @example
     * // Update one ResourceGroup
     * const resourceGroup = await prisma.resourceGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResourceGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceGroupUpdateArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResourceGroups.
     * @param {ResourceGroupDeleteManyArgs} args - Arguments to filter ResourceGroups to delete.
     * @example
     * // Delete a few ResourceGroups
     * const { count } = await prisma.resourceGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResourceGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResourceGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceGroups
     * const resourceGroup = await prisma.resourceGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResourceGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResourceGroup.
     * @param {ResourceGroupUpsertArgs} args - Arguments to update or create a ResourceGroup.
     * @example
     * // Update or create a ResourceGroup
     * const resourceGroup = await prisma.resourceGroup.upsert({
     *   create: {
     *     // ... data to create a ResourceGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceGroup we want to update
     *   }
     * })
    **/
    upsert<T extends ResourceGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResourceGroupUpsertArgs<ExtArgs>>
    ): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResourceGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupCountArgs} args - Arguments to filter ResourceGroups to count.
     * @example
     * // Count the number of ResourceGroups
     * const count = await prisma.resourceGroup.count({
     *   where: {
     *     // ... the filter for the ResourceGroups we want to count
     *   }
     * })
    **/
    count<T extends ResourceGroupCountArgs>(
      args?: Subset<T, ResourceGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceGroupAggregateArgs>(args: Subset<T, ResourceGroupAggregateArgs>): Prisma.PrismaPromise<GetResourceGroupAggregateType<T>>

    /**
     * Group by ResourceGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceGroup model
   */
  readonly fields: ResourceGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    storageAccounts<T extends ResourceGroup$storageAccountsArgs<ExtArgs> = {}>(args?: Subset<T, ResourceGroup$storageAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the ResourceGroup model
   */ 
  interface ResourceGroupFieldRefs {
    readonly id: FieldRef<"ResourceGroup", 'Int'>
    readonly userId: FieldRef<"ResourceGroup", 'String'>
    readonly name: FieldRef<"ResourceGroup", 'String'>
    readonly createdAt: FieldRef<"ResourceGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResourceGroup findUnique
   */
  export type ResourceGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ResourceGroup to fetch.
     */
    where: ResourceGroupWhereUniqueInput
  }

  /**
   * ResourceGroup findUniqueOrThrow
   */
  export type ResourceGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ResourceGroup to fetch.
     */
    where: ResourceGroupWhereUniqueInput
  }

  /**
   * ResourceGroup findFirst
   */
  export type ResourceGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ResourceGroup to fetch.
     */
    where?: ResourceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceGroups to fetch.
     */
    orderBy?: ResourceGroupOrderByWithRelationInput | ResourceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceGroups.
     */
    cursor?: ResourceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceGroups.
     */
    distinct?: ResourceGroupScalarFieldEnum | ResourceGroupScalarFieldEnum[]
  }

  /**
   * ResourceGroup findFirstOrThrow
   */
  export type ResourceGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ResourceGroup to fetch.
     */
    where?: ResourceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceGroups to fetch.
     */
    orderBy?: ResourceGroupOrderByWithRelationInput | ResourceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceGroups.
     */
    cursor?: ResourceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceGroups.
     */
    distinct?: ResourceGroupScalarFieldEnum | ResourceGroupScalarFieldEnum[]
  }

  /**
   * ResourceGroup findMany
   */
  export type ResourceGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * Filter, which ResourceGroups to fetch.
     */
    where?: ResourceGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceGroups to fetch.
     */
    orderBy?: ResourceGroupOrderByWithRelationInput | ResourceGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceGroups.
     */
    cursor?: ResourceGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceGroups.
     */
    skip?: number
    distinct?: ResourceGroupScalarFieldEnum | ResourceGroupScalarFieldEnum[]
  }

  /**
   * ResourceGroup create
   */
  export type ResourceGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceGroup.
     */
    data: XOR<ResourceGroupCreateInput, ResourceGroupUncheckedCreateInput>
  }

  /**
   * ResourceGroup createMany
   */
  export type ResourceGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceGroups.
     */
    data: ResourceGroupCreateManyInput | ResourceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceGroup createManyAndReturn
   */
  export type ResourceGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * The data used to create many ResourceGroups.
     */
    data: ResourceGroupCreateManyInput | ResourceGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceGroup update
   */
  export type ResourceGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceGroup.
     */
    data: XOR<ResourceGroupUpdateInput, ResourceGroupUncheckedUpdateInput>
    /**
     * Choose, which ResourceGroup to update.
     */
    where: ResourceGroupWhereUniqueInput
  }

  /**
   * ResourceGroup updateMany
   */
  export type ResourceGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceGroups.
     */
    data: XOR<ResourceGroupUpdateManyMutationInput, ResourceGroupUncheckedUpdateManyInput>
    /**
     * Filter which ResourceGroups to update
     */
    where?: ResourceGroupWhereInput
  }

  /**
   * ResourceGroup upsert
   */
  export type ResourceGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceGroup to update in case it exists.
     */
    where: ResourceGroupWhereUniqueInput
    /**
     * In case the ResourceGroup found by the `where` argument doesn't exist, create a new ResourceGroup with this data.
     */
    create: XOR<ResourceGroupCreateInput, ResourceGroupUncheckedCreateInput>
    /**
     * In case the ResourceGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceGroupUpdateInput, ResourceGroupUncheckedUpdateInput>
  }

  /**
   * ResourceGroup delete
   */
  export type ResourceGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
    /**
     * Filter which ResourceGroup to delete.
     */
    where: ResourceGroupWhereUniqueInput
  }

  /**
   * ResourceGroup deleteMany
   */
  export type ResourceGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceGroups to delete
     */
    where?: ResourceGroupWhereInput
  }

  /**
   * ResourceGroup.storageAccounts
   */
  export type ResourceGroup$storageAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    where?: StorageAccountWhereInput
    orderBy?: StorageAccountOrderByWithRelationInput | StorageAccountOrderByWithRelationInput[]
    cursor?: StorageAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StorageAccountScalarFieldEnum | StorageAccountScalarFieldEnum[]
  }

  /**
   * ResourceGroup without action
   */
  export type ResourceGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceGroup
     */
    select?: ResourceGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceGroupInclude<ExtArgs> | null
  }


  /**
   * Model StorageAccount
   */

  export type AggregateStorageAccount = {
    _count: StorageAccountCountAggregateOutputType | null
    _avg: StorageAccountAvgAggregateOutputType | null
    _sum: StorageAccountSumAggregateOutputType | null
    _min: StorageAccountMinAggregateOutputType | null
    _max: StorageAccountMaxAggregateOutputType | null
  }

  export type StorageAccountAvgAggregateOutputType = {
    id: number | null
    resourceGroupId: number | null
  }

  export type StorageAccountSumAggregateOutputType = {
    id: number | null
    resourceGroupId: number | null
  }

  export type StorageAccountMinAggregateOutputType = {
    id: number | null
    userId: string | null
    storageAccountName: string | null
    resourceGroupId: number | null
    accessKey: string | null
    createdAt: Date | null
  }

  export type StorageAccountMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    storageAccountName: string | null
    resourceGroupId: number | null
    accessKey: string | null
    createdAt: Date | null
  }

  export type StorageAccountCountAggregateOutputType = {
    id: number
    userId: number
    storageAccountName: number
    resourceGroupId: number
    accessKey: number
    createdAt: number
    _all: number
  }


  export type StorageAccountAvgAggregateInputType = {
    id?: true
    resourceGroupId?: true
  }

  export type StorageAccountSumAggregateInputType = {
    id?: true
    resourceGroupId?: true
  }

  export type StorageAccountMinAggregateInputType = {
    id?: true
    userId?: true
    storageAccountName?: true
    resourceGroupId?: true
    accessKey?: true
    createdAt?: true
  }

  export type StorageAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    storageAccountName?: true
    resourceGroupId?: true
    accessKey?: true
    createdAt?: true
  }

  export type StorageAccountCountAggregateInputType = {
    id?: true
    userId?: true
    storageAccountName?: true
    resourceGroupId?: true
    accessKey?: true
    createdAt?: true
    _all?: true
  }

  export type StorageAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageAccount to aggregate.
     */
    where?: StorageAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageAccounts to fetch.
     */
    orderBy?: StorageAccountOrderByWithRelationInput | StorageAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorageAccounts
    **/
    _count?: true | StorageAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorageAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorageAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageAccountMaxAggregateInputType
  }

  export type GetStorageAccountAggregateType<T extends StorageAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateStorageAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorageAccount[P]>
      : GetScalarType<T[P], AggregateStorageAccount[P]>
  }




  export type StorageAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageAccountWhereInput
    orderBy?: StorageAccountOrderByWithAggregationInput | StorageAccountOrderByWithAggregationInput[]
    by: StorageAccountScalarFieldEnum[] | StorageAccountScalarFieldEnum
    having?: StorageAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageAccountCountAggregateInputType | true
    _avg?: StorageAccountAvgAggregateInputType
    _sum?: StorageAccountSumAggregateInputType
    _min?: StorageAccountMinAggregateInputType
    _max?: StorageAccountMaxAggregateInputType
  }

  export type StorageAccountGroupByOutputType = {
    id: number
    userId: string
    storageAccountName: string
    resourceGroupId: number
    accessKey: string | null
    createdAt: Date
    _count: StorageAccountCountAggregateOutputType | null
    _avg: StorageAccountAvgAggregateOutputType | null
    _sum: StorageAccountSumAggregateOutputType | null
    _min: StorageAccountMinAggregateOutputType | null
    _max: StorageAccountMaxAggregateOutputType | null
  }

  type GetStorageAccountGroupByPayload<T extends StorageAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorageAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageAccountGroupByOutputType[P]>
            : GetScalarType<T[P], StorageAccountGroupByOutputType[P]>
        }
      >
    >


  export type StorageAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storageAccountName?: boolean
    resourceGroupId?: boolean
    accessKey?: boolean
    createdAt?: boolean
    containers?: boolean | StorageAccount$containersArgs<ExtArgs>
    resourceGroup?: boolean | ResourceGroupDefaultArgs<ExtArgs>
    _count?: boolean | StorageAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storageAccount"]>

  export type StorageAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    storageAccountName?: boolean
    resourceGroupId?: boolean
    accessKey?: boolean
    createdAt?: boolean
  }


  export type StorageAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    containers?: boolean | StorageAccount$containersArgs<ExtArgs>
    resourceGroup?: boolean | ResourceGroupDefaultArgs<ExtArgs>
    _count?: boolean | StorageAccountCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StorageAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorageAccount"
    objects: {
      containers: Prisma.$ContainerPayload<ExtArgs>[]
      resourceGroup: Prisma.$ResourceGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      storageAccountName: string
      resourceGroupId: number
      accessKey: string | null
      createdAt: Date
    }, ExtArgs["result"]["storageAccount"]>
    composites: {}
  }


  type StorageAccountGetPayload<S extends boolean | null | undefined | StorageAccountDefaultArgs> = $Result.GetResult<Prisma.$StorageAccountPayload, S>

  type StorageAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StorageAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StorageAccountCountAggregateInputType | true
    }

  export interface StorageAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorageAccount'], meta: { name: 'StorageAccount' } }
    /**
     * Find zero or one StorageAccount that matches the filter.
     * @param {StorageAccountFindUniqueArgs} args - Arguments to find a StorageAccount
     * @example
     * // Get one StorageAccount
     * const storageAccount = await prisma.storageAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StorageAccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StorageAccountFindUniqueArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StorageAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StorageAccountFindUniqueOrThrowArgs} args - Arguments to find a StorageAccount
     * @example
     * // Get one StorageAccount
     * const storageAccount = await prisma.storageAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StorageAccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageAccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StorageAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAccountFindFirstArgs} args - Arguments to find a StorageAccount
     * @example
     * // Get one StorageAccount
     * const storageAccount = await prisma.storageAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StorageAccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageAccountFindFirstArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StorageAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAccountFindFirstOrThrowArgs} args - Arguments to find a StorageAccount
     * @example
     * // Get one StorageAccount
     * const storageAccount = await prisma.storageAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StorageAccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageAccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StorageAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorageAccounts
     * const storageAccounts = await prisma.storageAccount.findMany()
     * 
     * // Get first 10 StorageAccounts
     * const storageAccounts = await prisma.storageAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storageAccountWithIdOnly = await prisma.storageAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StorageAccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageAccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StorageAccount.
     * @param {StorageAccountCreateArgs} args - Arguments to create a StorageAccount.
     * @example
     * // Create one StorageAccount
     * const StorageAccount = await prisma.storageAccount.create({
     *   data: {
     *     // ... data to create a StorageAccount
     *   }
     * })
     * 
    **/
    create<T extends StorageAccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageAccountCreateArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StorageAccounts.
     * @param {StorageAccountCreateManyArgs} args - Arguments to create many StorageAccounts.
     * @example
     * // Create many StorageAccounts
     * const storageAccount = await prisma.storageAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends StorageAccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageAccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StorageAccounts and returns the data saved in the database.
     * @param {StorageAccountCreateManyAndReturnArgs} args - Arguments to create many StorageAccounts.
     * @example
     * // Create many StorageAccounts
     * const storageAccount = await prisma.storageAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StorageAccounts and only return the `id`
     * const storageAccountWithIdOnly = await prisma.storageAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends StorageAccountCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageAccountCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a StorageAccount.
     * @param {StorageAccountDeleteArgs} args - Arguments to delete one StorageAccount.
     * @example
     * // Delete one StorageAccount
     * const StorageAccount = await prisma.storageAccount.delete({
     *   where: {
     *     // ... filter to delete one StorageAccount
     *   }
     * })
     * 
    **/
    delete<T extends StorageAccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StorageAccountDeleteArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StorageAccount.
     * @param {StorageAccountUpdateArgs} args - Arguments to update one StorageAccount.
     * @example
     * // Update one StorageAccount
     * const storageAccount = await prisma.storageAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StorageAccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageAccountUpdateArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StorageAccounts.
     * @param {StorageAccountDeleteManyArgs} args - Arguments to filter StorageAccounts to delete.
     * @example
     * // Delete a few StorageAccounts
     * const { count } = await prisma.storageAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StorageAccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageAccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorageAccounts
     * const storageAccount = await prisma.storageAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StorageAccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StorageAccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StorageAccount.
     * @param {StorageAccountUpsertArgs} args - Arguments to update or create a StorageAccount.
     * @example
     * // Update or create a StorageAccount
     * const storageAccount = await prisma.storageAccount.upsert({
     *   create: {
     *     // ... data to create a StorageAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorageAccount we want to update
     *   }
     * })
    **/
    upsert<T extends StorageAccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StorageAccountUpsertArgs<ExtArgs>>
    ): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StorageAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAccountCountArgs} args - Arguments to filter StorageAccounts to count.
     * @example
     * // Count the number of StorageAccounts
     * const count = await prisma.storageAccount.count({
     *   where: {
     *     // ... the filter for the StorageAccounts we want to count
     *   }
     * })
    **/
    count<T extends StorageAccountCountArgs>(
      args?: Subset<T, StorageAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorageAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorageAccountAggregateArgs>(args: Subset<T, StorageAccountAggregateArgs>): Prisma.PrismaPromise<GetStorageAccountAggregateType<T>>

    /**
     * Group by StorageAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAccountGroupByArgs} args - Group by arguments.
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
      T extends StorageAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageAccountGroupByArgs['orderBy'] }
        : { orderBy?: StorageAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorageAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorageAccount model
   */
  readonly fields: StorageAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorageAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorageAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    containers<T extends StorageAccount$containersArgs<ExtArgs> = {}>(args?: Subset<T, StorageAccount$containersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findMany'> | Null>;

    resourceGroup<T extends ResourceGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceGroupDefaultArgs<ExtArgs>>): Prisma__ResourceGroupClient<$Result.GetResult<Prisma.$ResourceGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the StorageAccount model
   */ 
  interface StorageAccountFieldRefs {
    readonly id: FieldRef<"StorageAccount", 'Int'>
    readonly userId: FieldRef<"StorageAccount", 'String'>
    readonly storageAccountName: FieldRef<"StorageAccount", 'String'>
    readonly resourceGroupId: FieldRef<"StorageAccount", 'Int'>
    readonly accessKey: FieldRef<"StorageAccount", 'String'>
    readonly createdAt: FieldRef<"StorageAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StorageAccount findUnique
   */
  export type StorageAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * Filter, which StorageAccount to fetch.
     */
    where: StorageAccountWhereUniqueInput
  }

  /**
   * StorageAccount findUniqueOrThrow
   */
  export type StorageAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * Filter, which StorageAccount to fetch.
     */
    where: StorageAccountWhereUniqueInput
  }

  /**
   * StorageAccount findFirst
   */
  export type StorageAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * Filter, which StorageAccount to fetch.
     */
    where?: StorageAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageAccounts to fetch.
     */
    orderBy?: StorageAccountOrderByWithRelationInput | StorageAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageAccounts.
     */
    cursor?: StorageAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageAccounts.
     */
    distinct?: StorageAccountScalarFieldEnum | StorageAccountScalarFieldEnum[]
  }

  /**
   * StorageAccount findFirstOrThrow
   */
  export type StorageAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * Filter, which StorageAccount to fetch.
     */
    where?: StorageAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageAccounts to fetch.
     */
    orderBy?: StorageAccountOrderByWithRelationInput | StorageAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageAccounts.
     */
    cursor?: StorageAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageAccounts.
     */
    distinct?: StorageAccountScalarFieldEnum | StorageAccountScalarFieldEnum[]
  }

  /**
   * StorageAccount findMany
   */
  export type StorageAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * Filter, which StorageAccounts to fetch.
     */
    where?: StorageAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageAccounts to fetch.
     */
    orderBy?: StorageAccountOrderByWithRelationInput | StorageAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorageAccounts.
     */
    cursor?: StorageAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageAccounts.
     */
    skip?: number
    distinct?: StorageAccountScalarFieldEnum | StorageAccountScalarFieldEnum[]
  }

  /**
   * StorageAccount create
   */
  export type StorageAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a StorageAccount.
     */
    data: XOR<StorageAccountCreateInput, StorageAccountUncheckedCreateInput>
  }

  /**
   * StorageAccount createMany
   */
  export type StorageAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorageAccounts.
     */
    data: StorageAccountCreateManyInput | StorageAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorageAccount createManyAndReturn
   */
  export type StorageAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * The data used to create many StorageAccounts.
     */
    data: StorageAccountCreateManyInput | StorageAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StorageAccount update
   */
  export type StorageAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a StorageAccount.
     */
    data: XOR<StorageAccountUpdateInput, StorageAccountUncheckedUpdateInput>
    /**
     * Choose, which StorageAccount to update.
     */
    where: StorageAccountWhereUniqueInput
  }

  /**
   * StorageAccount updateMany
   */
  export type StorageAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorageAccounts.
     */
    data: XOR<StorageAccountUpdateManyMutationInput, StorageAccountUncheckedUpdateManyInput>
    /**
     * Filter which StorageAccounts to update
     */
    where?: StorageAccountWhereInput
  }

  /**
   * StorageAccount upsert
   */
  export type StorageAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the StorageAccount to update in case it exists.
     */
    where: StorageAccountWhereUniqueInput
    /**
     * In case the StorageAccount found by the `where` argument doesn't exist, create a new StorageAccount with this data.
     */
    create: XOR<StorageAccountCreateInput, StorageAccountUncheckedCreateInput>
    /**
     * In case the StorageAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageAccountUpdateInput, StorageAccountUncheckedUpdateInput>
  }

  /**
   * StorageAccount delete
   */
  export type StorageAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
    /**
     * Filter which StorageAccount to delete.
     */
    where: StorageAccountWhereUniqueInput
  }

  /**
   * StorageAccount deleteMany
   */
  export type StorageAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageAccounts to delete
     */
    where?: StorageAccountWhereInput
  }

  /**
   * StorageAccount.containers
   */
  export type StorageAccount$containersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    cursor?: ContainerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * StorageAccount without action
   */
  export type StorageAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageAccount
     */
    select?: StorageAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StorageAccountInclude<ExtArgs> | null
  }


  /**
   * Model Container
   */

  export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  export type ContainerAvgAggregateOutputType = {
    id: number | null
    storageAccountId: number | null
  }

  export type ContainerSumAggregateOutputType = {
    id: number | null
    storageAccountId: number | null
  }

  export type ContainerMinAggregateOutputType = {
    id: number | null
    containerName: string | null
    storageAccountId: number | null
    createdAt: Date | null
  }

  export type ContainerMaxAggregateOutputType = {
    id: number | null
    containerName: string | null
    storageAccountId: number | null
    createdAt: Date | null
  }

  export type ContainerCountAggregateOutputType = {
    id: number
    containerName: number
    storageAccountId: number
    createdAt: number
    _all: number
  }


  export type ContainerAvgAggregateInputType = {
    id?: true
    storageAccountId?: true
  }

  export type ContainerSumAggregateInputType = {
    id?: true
    storageAccountId?: true
  }

  export type ContainerMinAggregateInputType = {
    id?: true
    containerName?: true
    storageAccountId?: true
    createdAt?: true
  }

  export type ContainerMaxAggregateInputType = {
    id?: true
    containerName?: true
    storageAccountId?: true
    createdAt?: true
  }

  export type ContainerCountAggregateInputType = {
    id?: true
    containerName?: true
    storageAccountId?: true
    createdAt?: true
    _all?: true
  }

  export type ContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Container to aggregate.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Containers
    **/
    _count?: true | ContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerMaxAggregateInputType
  }

  export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainer[P]>
      : GetScalarType<T[P], AggregateContainer[P]>
  }




  export type ContainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithAggregationInput | ContainerOrderByWithAggregationInput[]
    by: ContainerScalarFieldEnum[] | ContainerScalarFieldEnum
    having?: ContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerCountAggregateInputType | true
    _avg?: ContainerAvgAggregateInputType
    _sum?: ContainerSumAggregateInputType
    _min?: ContainerMinAggregateInputType
    _max?: ContainerMaxAggregateInputType
  }

  export type ContainerGroupByOutputType = {
    id: number
    containerName: string
    storageAccountId: number
    createdAt: Date
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  type GetContainerGroupByPayload<T extends ContainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerGroupByOutputType[P]>
        }
      >
    >


  export type ContainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    containerName?: boolean
    storageAccountId?: boolean
    createdAt?: boolean
    storageAccount?: boolean | StorageAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["container"]>

  export type ContainerSelectScalar = {
    id?: boolean
    containerName?: boolean
    storageAccountId?: boolean
    createdAt?: boolean
  }


  export type ContainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    storageAccount?: boolean | StorageAccountDefaultArgs<ExtArgs>
  }


  export type $ContainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Container"
    objects: {
      storageAccount: Prisma.$StorageAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      containerName: string
      storageAccountId: number
      createdAt: Date
    }, ExtArgs["result"]["container"]>
    composites: {}
  }


  type ContainerGetPayload<S extends boolean | null | undefined | ContainerDefaultArgs> = $Result.GetResult<Prisma.$ContainerPayload, S>

  type ContainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContainerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContainerCountAggregateInputType | true
    }

  export interface ContainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Container'], meta: { name: 'Container' } }
    /**
     * Find zero or one Container that matches the filter.
     * @param {ContainerFindUniqueArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContainerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerFindUniqueArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Container that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContainerFindUniqueOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContainerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContainerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindFirstArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Container that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContainerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Containers
     * const containers = await prisma.container.findMany()
     * 
     * // Get first 10 Containers
     * const containers = await prisma.container.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const containerWithIdOnly = await prisma.container.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContainerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Container.
     * @param {ContainerCreateArgs} args - Arguments to create a Container.
     * @example
     * // Create one Container
     * const Container = await prisma.container.create({
     *   data: {
     *     // ... data to create a Container
     *   }
     * })
     * 
    **/
    create<T extends ContainerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerCreateArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Containers.
     * @param {ContainerCreateManyArgs} args - Arguments to create many Containers.
     * @example
     * // Create many Containers
     * const container = await prisma.container.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ContainerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Containers and returns the data saved in the database.
     * @param {ContainerCreateManyAndReturnArgs} args - Arguments to create many Containers.
     * @example
     * // Create many Containers
     * const container = await prisma.container.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Containers and only return the `id`
     * const containerWithIdOnly = await prisma.container.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ContainerCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Container.
     * @param {ContainerDeleteArgs} args - Arguments to delete one Container.
     * @example
     * // Delete one Container
     * const Container = await prisma.container.delete({
     *   where: {
     *     // ... filter to delete one Container
     *   }
     * })
     * 
    **/
    delete<T extends ContainerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerDeleteArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Container.
     * @param {ContainerUpdateArgs} args - Arguments to update one Container.
     * @example
     * // Update one Container
     * const container = await prisma.container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContainerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerUpdateArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Containers.
     * @param {ContainerDeleteManyArgs} args - Arguments to filter Containers to delete.
     * @example
     * // Delete a few Containers
     * const { count } = await prisma.container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContainerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContainerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContainerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Container.
     * @param {ContainerUpsertArgs} args - Arguments to update or create a Container.
     * @example
     * // Update or create a Container
     * const container = await prisma.container.upsert({
     *   create: {
     *     // ... data to create a Container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Container we want to update
     *   }
     * })
    **/
    upsert<T extends ContainerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContainerUpsertArgs<ExtArgs>>
    ): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerCountArgs} args - Arguments to filter Containers to count.
     * @example
     * // Count the number of Containers
     * const count = await prisma.container.count({
     *   where: {
     *     // ... the filter for the Containers we want to count
     *   }
     * })
    **/
    count<T extends ContainerCountArgs>(
      args?: Subset<T, ContainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContainerAggregateArgs>(args: Subset<T, ContainerAggregateArgs>): Prisma.PrismaPromise<GetContainerAggregateType<T>>

    /**
     * Group by Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerGroupByArgs} args - Group by arguments.
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
      T extends ContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerGroupByArgs['orderBy'] }
        : { orderBy?: ContainerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Container model
   */
  readonly fields: ContainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    storageAccount<T extends StorageAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StorageAccountDefaultArgs<ExtArgs>>): Prisma__StorageAccountClient<$Result.GetResult<Prisma.$StorageAccountPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Container model
   */ 
  interface ContainerFieldRefs {
    readonly id: FieldRef<"Container", 'Int'>
    readonly containerName: FieldRef<"Container", 'String'>
    readonly storageAccountId: FieldRef<"Container", 'Int'>
    readonly createdAt: FieldRef<"Container", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Container findUnique
   */
  export type ContainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findUniqueOrThrow
   */
  export type ContainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findFirst
   */
  export type ContainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findFirstOrThrow
   */
  export type ContainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findMany
   */
  export type ContainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Containers to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container create
   */
  export type ContainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to create a Container.
     */
    data: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
  }

  /**
   * Container createMany
   */
  export type ContainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Containers.
     */
    data: ContainerCreateManyInput | ContainerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Container createManyAndReturn
   */
  export type ContainerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data used to create many Containers.
     */
    data: ContainerCreateManyInput | ContainerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Container update
   */
  export type ContainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to update a Container.
     */
    data: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
    /**
     * Choose, which Container to update.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container updateMany
   */
  export type ContainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Containers.
     */
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyInput>
    /**
     * Filter which Containers to update
     */
    where?: ContainerWhereInput
  }

  /**
   * Container upsert
   */
  export type ContainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The filter to search for the Container to update in case it exists.
     */
    where: ContainerWhereUniqueInput
    /**
     * In case the Container found by the `where` argument doesn't exist, create a new Container with this data.
     */
    create: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
    /**
     * In case the Container was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
  }

  /**
   * Container delete
   */
  export type ContainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter which Container to delete.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container deleteMany
   */
  export type ContainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Containers to delete
     */
    where?: ContainerWhereInput
  }

  /**
   * Container without action
   */
  export type ContainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
  }


  /**
   * Model Operations
   */

  export type AggregateOperations = {
    _count: OperationsCountAggregateOutputType | null
    _avg: OperationsAvgAggregateOutputType | null
    _sum: OperationsSumAggregateOutputType | null
    _min: OperationsMinAggregateOutputType | null
    _max: OperationsMaxAggregateOutputType | null
  }

  export type OperationsAvgAggregateOutputType = {
    id: number | null
  }

  export type OperationsSumAggregateOutputType = {
    id: number | null
  }

  export type OperationsMinAggregateOutputType = {
    id: number | null
    resourcegroup: string | null
    creation: string | null
    deletion: string | null
    createdAt: Date | null
  }

  export type OperationsMaxAggregateOutputType = {
    id: number | null
    resourcegroup: string | null
    creation: string | null
    deletion: string | null
    createdAt: Date | null
  }

  export type OperationsCountAggregateOutputType = {
    id: number
    resourcegroup: number
    creation: number
    deletion: number
    createdAt: number
    _all: number
  }


  export type OperationsAvgAggregateInputType = {
    id?: true
  }

  export type OperationsSumAggregateInputType = {
    id?: true
  }

  export type OperationsMinAggregateInputType = {
    id?: true
    resourcegroup?: true
    creation?: true
    deletion?: true
    createdAt?: true
  }

  export type OperationsMaxAggregateInputType = {
    id?: true
    resourcegroup?: true
    creation?: true
    deletion?: true
    createdAt?: true
  }

  export type OperationsCountAggregateInputType = {
    id?: true
    resourcegroup?: true
    creation?: true
    deletion?: true
    createdAt?: true
    _all?: true
  }

  export type OperationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to aggregate.
     */
    where?: OperationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationsOrderByWithRelationInput | OperationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Operations
    **/
    _count?: true | OperationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperationsMaxAggregateInputType
  }

  export type GetOperationsAggregateType<T extends OperationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOperations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperations[P]>
      : GetScalarType<T[P], AggregateOperations[P]>
  }




  export type OperationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperationsWhereInput
    orderBy?: OperationsOrderByWithAggregationInput | OperationsOrderByWithAggregationInput[]
    by: OperationsScalarFieldEnum[] | OperationsScalarFieldEnum
    having?: OperationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperationsCountAggregateInputType | true
    _avg?: OperationsAvgAggregateInputType
    _sum?: OperationsSumAggregateInputType
    _min?: OperationsMinAggregateInputType
    _max?: OperationsMaxAggregateInputType
  }

  export type OperationsGroupByOutputType = {
    id: number
    resourcegroup: string
    creation: string
    deletion: string
    createdAt: Date
    _count: OperationsCountAggregateOutputType | null
    _avg: OperationsAvgAggregateOutputType | null
    _sum: OperationsSumAggregateOutputType | null
    _min: OperationsMinAggregateOutputType | null
    _max: OperationsMaxAggregateOutputType | null
  }

  type GetOperationsGroupByPayload<T extends OperationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperationsGroupByOutputType[P]>
            : GetScalarType<T[P], OperationsGroupByOutputType[P]>
        }
      >
    >


  export type OperationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resourcegroup?: boolean
    creation?: boolean
    deletion?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["operations"]>

  export type OperationsSelectScalar = {
    id?: boolean
    resourcegroup?: boolean
    creation?: boolean
    deletion?: boolean
    createdAt?: boolean
  }



  export type $OperationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Operations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resourcegroup: string
      creation: string
      deletion: string
      createdAt: Date
    }, ExtArgs["result"]["operations"]>
    composites: {}
  }


  type OperationsGetPayload<S extends boolean | null | undefined | OperationsDefaultArgs> = $Result.GetResult<Prisma.$OperationsPayload, S>

  type OperationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OperationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OperationsCountAggregateInputType | true
    }

  export interface OperationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Operations'], meta: { name: 'Operations' } }
    /**
     * Find zero or one Operations that matches the filter.
     * @param {OperationsFindUniqueArgs} args - Arguments to find a Operations
     * @example
     * // Get one Operations
     * const operations = await prisma.operations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OperationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OperationsFindUniqueArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Operations that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OperationsFindUniqueOrThrowArgs} args - Arguments to find a Operations
     * @example
     * // Get one Operations
     * const operations = await prisma.operations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OperationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OperationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationsFindFirstArgs} args - Arguments to find a Operations
     * @example
     * // Get one Operations
     * const operations = await prisma.operations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OperationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OperationsFindFirstArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Operations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationsFindFirstOrThrowArgs} args - Arguments to find a Operations
     * @example
     * // Get one Operations
     * const operations = await prisma.operations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OperationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OperationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Operations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations
     * const operations = await prisma.operations.findMany()
     * 
     * // Get first 10 Operations
     * const operations = await prisma.operations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operationsWithIdOnly = await prisma.operations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OperationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OperationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Operations.
     * @param {OperationsCreateArgs} args - Arguments to create a Operations.
     * @example
     * // Create one Operations
     * const Operations = await prisma.operations.create({
     *   data: {
     *     // ... data to create a Operations
     *   }
     * })
     * 
    **/
    create<T extends OperationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OperationsCreateArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Operations.
     * @param {OperationsCreateManyArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operations = await prisma.operations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends OperationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OperationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operations and returns the data saved in the database.
     * @param {OperationsCreateManyAndReturnArgs} args - Arguments to create many Operations.
     * @example
     * // Create many Operations
     * const operations = await prisma.operations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operations and only return the `id`
     * const operationsWithIdOnly = await prisma.operations.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends OperationsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, OperationsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Operations.
     * @param {OperationsDeleteArgs} args - Arguments to delete one Operations.
     * @example
     * // Delete one Operations
     * const Operations = await prisma.operations.delete({
     *   where: {
     *     // ... filter to delete one Operations
     *   }
     * })
     * 
    **/
    delete<T extends OperationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OperationsDeleteArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Operations.
     * @param {OperationsUpdateArgs} args - Arguments to update one Operations.
     * @example
     * // Update one Operations
     * const operations = await prisma.operations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OperationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OperationsUpdateArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Operations.
     * @param {OperationsDeleteManyArgs} args - Arguments to filter Operations to delete.
     * @example
     * // Delete a few Operations
     * const { count } = await prisma.operations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OperationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OperationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations
     * const operations = await prisma.operations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OperationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OperationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operations.
     * @param {OperationsUpsertArgs} args - Arguments to update or create a Operations.
     * @example
     * // Update or create a Operations
     * const operations = await prisma.operations.upsert({
     *   create: {
     *     // ... data to create a Operations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operations we want to update
     *   }
     * })
    **/
    upsert<T extends OperationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OperationsUpsertArgs<ExtArgs>>
    ): Prisma__OperationsClient<$Result.GetResult<Prisma.$OperationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationsCountArgs} args - Arguments to filter Operations to count.
     * @example
     * // Count the number of Operations
     * const count = await prisma.operations.count({
     *   where: {
     *     // ... the filter for the Operations we want to count
     *   }
     * })
    **/
    count<T extends OperationsCountArgs>(
      args?: Subset<T, OperationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperationsAggregateArgs>(args: Subset<T, OperationsAggregateArgs>): Prisma.PrismaPromise<GetOperationsAggregateType<T>>

    /**
     * Group by Operations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperationsGroupByArgs} args - Group by arguments.
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
      T extends OperationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperationsGroupByArgs['orderBy'] }
        : { orderBy?: OperationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Operations model
   */
  readonly fields: OperationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Operations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Operations model
   */ 
  interface OperationsFieldRefs {
    readonly id: FieldRef<"Operations", 'Int'>
    readonly resourcegroup: FieldRef<"Operations", 'String'>
    readonly creation: FieldRef<"Operations", 'String'>
    readonly deletion: FieldRef<"Operations", 'String'>
    readonly createdAt: FieldRef<"Operations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Operations findUnique
   */
  export type OperationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where: OperationsWhereUniqueInput
  }

  /**
   * Operations findUniqueOrThrow
   */
  export type OperationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where: OperationsWhereUniqueInput
  }

  /**
   * Operations findFirst
   */
  export type OperationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationsOrderByWithRelationInput | OperationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationsScalarFieldEnum | OperationsScalarFieldEnum[]
  }

  /**
   * Operations findFirstOrThrow
   */
  export type OperationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationsOrderByWithRelationInput | OperationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Operations.
     */
    cursor?: OperationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Operations.
     */
    distinct?: OperationsScalarFieldEnum | OperationsScalarFieldEnum[]
  }

  /**
   * Operations findMany
   */
  export type OperationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * Filter, which Operations to fetch.
     */
    where?: OperationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Operations to fetch.
     */
    orderBy?: OperationsOrderByWithRelationInput | OperationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Operations.
     */
    cursor?: OperationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Operations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Operations.
     */
    skip?: number
    distinct?: OperationsScalarFieldEnum | OperationsScalarFieldEnum[]
  }

  /**
   * Operations create
   */
  export type OperationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * The data needed to create a Operations.
     */
    data: XOR<OperationsCreateInput, OperationsUncheckedCreateInput>
  }

  /**
   * Operations createMany
   */
  export type OperationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Operations.
     */
    data: OperationsCreateManyInput | OperationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operations createManyAndReturn
   */
  export type OperationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * The data used to create many Operations.
     */
    data: OperationsCreateManyInput | OperationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Operations update
   */
  export type OperationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * The data needed to update a Operations.
     */
    data: XOR<OperationsUpdateInput, OperationsUncheckedUpdateInput>
    /**
     * Choose, which Operations to update.
     */
    where: OperationsWhereUniqueInput
  }

  /**
   * Operations updateMany
   */
  export type OperationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Operations.
     */
    data: XOR<OperationsUpdateManyMutationInput, OperationsUncheckedUpdateManyInput>
    /**
     * Filter which Operations to update
     */
    where?: OperationsWhereInput
  }

  /**
   * Operations upsert
   */
  export type OperationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * The filter to search for the Operations to update in case it exists.
     */
    where: OperationsWhereUniqueInput
    /**
     * In case the Operations found by the `where` argument doesn't exist, create a new Operations with this data.
     */
    create: XOR<OperationsCreateInput, OperationsUncheckedCreateInput>
    /**
     * In case the Operations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperationsUpdateInput, OperationsUncheckedUpdateInput>
  }

  /**
   * Operations delete
   */
  export type OperationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
    /**
     * Filter which Operations to delete.
     */
    where: OperationsWhereUniqueInput
  }

  /**
   * Operations deleteMany
   */
  export type OperationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Operations to delete
     */
    where?: OperationsWhereInput
  }

  /**
   * Operations without action
   */
  export type OperationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Operations
     */
    select?: OperationsSelect<ExtArgs> | null
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


  export const ResourceGroupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type ResourceGroupScalarFieldEnum = (typeof ResourceGroupScalarFieldEnum)[keyof typeof ResourceGroupScalarFieldEnum]


  export const StorageAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storageAccountName: 'storageAccountName',
    resourceGroupId: 'resourceGroupId',
    accessKey: 'accessKey',
    createdAt: 'createdAt'
  };

  export type StorageAccountScalarFieldEnum = (typeof StorageAccountScalarFieldEnum)[keyof typeof StorageAccountScalarFieldEnum]


  export const ContainerScalarFieldEnum: {
    id: 'id',
    containerName: 'containerName',
    storageAccountId: 'storageAccountId',
    createdAt: 'createdAt'
  };

  export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum]


  export const OperationsScalarFieldEnum: {
    id: 'id',
    resourcegroup: 'resourcegroup',
    creation: 'creation',
    deletion: 'deletion',
    createdAt: 'createdAt'
  };

  export type OperationsScalarFieldEnum = (typeof OperationsScalarFieldEnum)[keyof typeof OperationsScalarFieldEnum]


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


  export type ResourceGroupWhereInput = {
    AND?: ResourceGroupWhereInput | ResourceGroupWhereInput[]
    OR?: ResourceGroupWhereInput[]
    NOT?: ResourceGroupWhereInput | ResourceGroupWhereInput[]
    id?: IntFilter<"ResourceGroup"> | number
    userId?: StringFilter<"ResourceGroup"> | string
    name?: StringFilter<"ResourceGroup"> | string
    createdAt?: DateTimeFilter<"ResourceGroup"> | Date | string
    storageAccounts?: StorageAccountListRelationFilter
  }

  export type ResourceGroupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    storageAccounts?: StorageAccountOrderByRelationAggregateInput
  }

  export type ResourceGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ResourceGroupWhereInput | ResourceGroupWhereInput[]
    OR?: ResourceGroupWhereInput[]
    NOT?: ResourceGroupWhereInput | ResourceGroupWhereInput[]
    userId?: StringFilter<"ResourceGroup"> | string
    createdAt?: DateTimeFilter<"ResourceGroup"> | Date | string
    storageAccounts?: StorageAccountListRelationFilter
  }, "id" | "name">

  export type ResourceGroupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: ResourceGroupCountOrderByAggregateInput
    _avg?: ResourceGroupAvgOrderByAggregateInput
    _max?: ResourceGroupMaxOrderByAggregateInput
    _min?: ResourceGroupMinOrderByAggregateInput
    _sum?: ResourceGroupSumOrderByAggregateInput
  }

  export type ResourceGroupScalarWhereWithAggregatesInput = {
    AND?: ResourceGroupScalarWhereWithAggregatesInput | ResourceGroupScalarWhereWithAggregatesInput[]
    OR?: ResourceGroupScalarWhereWithAggregatesInput[]
    NOT?: ResourceGroupScalarWhereWithAggregatesInput | ResourceGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResourceGroup"> | number
    userId?: StringWithAggregatesFilter<"ResourceGroup"> | string
    name?: StringWithAggregatesFilter<"ResourceGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResourceGroup"> | Date | string
  }

  export type StorageAccountWhereInput = {
    AND?: StorageAccountWhereInput | StorageAccountWhereInput[]
    OR?: StorageAccountWhereInput[]
    NOT?: StorageAccountWhereInput | StorageAccountWhereInput[]
    id?: IntFilter<"StorageAccount"> | number
    userId?: StringFilter<"StorageAccount"> | string
    storageAccountName?: StringFilter<"StorageAccount"> | string
    resourceGroupId?: IntFilter<"StorageAccount"> | number
    accessKey?: StringNullableFilter<"StorageAccount"> | string | null
    createdAt?: DateTimeFilter<"StorageAccount"> | Date | string
    containers?: ContainerListRelationFilter
    resourceGroup?: XOR<ResourceGroupRelationFilter, ResourceGroupWhereInput>
  }

  export type StorageAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storageAccountName?: SortOrder
    resourceGroupId?: SortOrder
    accessKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    containers?: ContainerOrderByRelationAggregateInput
    resourceGroup?: ResourceGroupOrderByWithRelationInput
  }

  export type StorageAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_storageAccountName?: StorageAccountUserIdStorageAccountNameCompoundUniqueInput
    AND?: StorageAccountWhereInput | StorageAccountWhereInput[]
    OR?: StorageAccountWhereInput[]
    NOT?: StorageAccountWhereInput | StorageAccountWhereInput[]
    userId?: StringFilter<"StorageAccount"> | string
    storageAccountName?: StringFilter<"StorageAccount"> | string
    resourceGroupId?: IntFilter<"StorageAccount"> | number
    accessKey?: StringNullableFilter<"StorageAccount"> | string | null
    createdAt?: DateTimeFilter<"StorageAccount"> | Date | string
    containers?: ContainerListRelationFilter
    resourceGroup?: XOR<ResourceGroupRelationFilter, ResourceGroupWhereInput>
  }, "id" | "userId_storageAccountName">

  export type StorageAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storageAccountName?: SortOrder
    resourceGroupId?: SortOrder
    accessKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StorageAccountCountOrderByAggregateInput
    _avg?: StorageAccountAvgOrderByAggregateInput
    _max?: StorageAccountMaxOrderByAggregateInput
    _min?: StorageAccountMinOrderByAggregateInput
    _sum?: StorageAccountSumOrderByAggregateInput
  }

  export type StorageAccountScalarWhereWithAggregatesInput = {
    AND?: StorageAccountScalarWhereWithAggregatesInput | StorageAccountScalarWhereWithAggregatesInput[]
    OR?: StorageAccountScalarWhereWithAggregatesInput[]
    NOT?: StorageAccountScalarWhereWithAggregatesInput | StorageAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StorageAccount"> | number
    userId?: StringWithAggregatesFilter<"StorageAccount"> | string
    storageAccountName?: StringWithAggregatesFilter<"StorageAccount"> | string
    resourceGroupId?: IntWithAggregatesFilter<"StorageAccount"> | number
    accessKey?: StringNullableWithAggregatesFilter<"StorageAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StorageAccount"> | Date | string
  }

  export type ContainerWhereInput = {
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    id?: IntFilter<"Container"> | number
    containerName?: StringFilter<"Container"> | string
    storageAccountId?: IntFilter<"Container"> | number
    createdAt?: DateTimeFilter<"Container"> | Date | string
    storageAccount?: XOR<StorageAccountRelationFilter, StorageAccountWhereInput>
  }

  export type ContainerOrderByWithRelationInput = {
    id?: SortOrder
    containerName?: SortOrder
    storageAccountId?: SortOrder
    createdAt?: SortOrder
    storageAccount?: StorageAccountOrderByWithRelationInput
  }

  export type ContainerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    storageAccountId_containerName?: ContainerStorageAccountIdContainerNameCompoundUniqueInput
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    containerName?: StringFilter<"Container"> | string
    storageAccountId?: IntFilter<"Container"> | number
    createdAt?: DateTimeFilter<"Container"> | Date | string
    storageAccount?: XOR<StorageAccountRelationFilter, StorageAccountWhereInput>
  }, "id" | "storageAccountId_containerName">

  export type ContainerOrderByWithAggregationInput = {
    id?: SortOrder
    containerName?: SortOrder
    storageAccountId?: SortOrder
    createdAt?: SortOrder
    _count?: ContainerCountOrderByAggregateInput
    _avg?: ContainerAvgOrderByAggregateInput
    _max?: ContainerMaxOrderByAggregateInput
    _min?: ContainerMinOrderByAggregateInput
    _sum?: ContainerSumOrderByAggregateInput
  }

  export type ContainerScalarWhereWithAggregatesInput = {
    AND?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    OR?: ContainerScalarWhereWithAggregatesInput[]
    NOT?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Container"> | number
    containerName?: StringWithAggregatesFilter<"Container"> | string
    storageAccountId?: IntWithAggregatesFilter<"Container"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Container"> | Date | string
  }

  export type OperationsWhereInput = {
    AND?: OperationsWhereInput | OperationsWhereInput[]
    OR?: OperationsWhereInput[]
    NOT?: OperationsWhereInput | OperationsWhereInput[]
    id?: IntFilter<"Operations"> | number
    resourcegroup?: StringFilter<"Operations"> | string
    creation?: StringFilter<"Operations"> | string
    deletion?: StringFilter<"Operations"> | string
    createdAt?: DateTimeFilter<"Operations"> | Date | string
  }

  export type OperationsOrderByWithRelationInput = {
    id?: SortOrder
    resourcegroup?: SortOrder
    creation?: SortOrder
    deletion?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OperationsWhereInput | OperationsWhereInput[]
    OR?: OperationsWhereInput[]
    NOT?: OperationsWhereInput | OperationsWhereInput[]
    resourcegroup?: StringFilter<"Operations"> | string
    creation?: StringFilter<"Operations"> | string
    deletion?: StringFilter<"Operations"> | string
    createdAt?: DateTimeFilter<"Operations"> | Date | string
  }, "id">

  export type OperationsOrderByWithAggregationInput = {
    id?: SortOrder
    resourcegroup?: SortOrder
    creation?: SortOrder
    deletion?: SortOrder
    createdAt?: SortOrder
    _count?: OperationsCountOrderByAggregateInput
    _avg?: OperationsAvgOrderByAggregateInput
    _max?: OperationsMaxOrderByAggregateInput
    _min?: OperationsMinOrderByAggregateInput
    _sum?: OperationsSumOrderByAggregateInput
  }

  export type OperationsScalarWhereWithAggregatesInput = {
    AND?: OperationsScalarWhereWithAggregatesInput | OperationsScalarWhereWithAggregatesInput[]
    OR?: OperationsScalarWhereWithAggregatesInput[]
    NOT?: OperationsScalarWhereWithAggregatesInput | OperationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Operations"> | number
    resourcegroup?: StringWithAggregatesFilter<"Operations"> | string
    creation?: StringWithAggregatesFilter<"Operations"> | string
    deletion?: StringWithAggregatesFilter<"Operations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Operations"> | Date | string
  }

  export type ResourceGroupCreateInput = {
    userId?: string
    name: string
    createdAt?: Date | string
    storageAccounts?: StorageAccountCreateNestedManyWithoutResourceGroupInput
  }

  export type ResourceGroupUncheckedCreateInput = {
    id?: number
    userId?: string
    name: string
    createdAt?: Date | string
    storageAccounts?: StorageAccountUncheckedCreateNestedManyWithoutResourceGroupInput
  }

  export type ResourceGroupUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storageAccounts?: StorageAccountUpdateManyWithoutResourceGroupNestedInput
  }

  export type ResourceGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storageAccounts?: StorageAccountUncheckedUpdateManyWithoutResourceGroupNestedInput
  }

  export type ResourceGroupCreateManyInput = {
    id?: number
    userId?: string
    name: string
    createdAt?: Date | string
  }

  export type ResourceGroupUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageAccountCreateInput = {
    userId: string
    storageAccountName: string
    accessKey?: string | null
    createdAt?: Date | string
    containers?: ContainerCreateNestedManyWithoutStorageAccountInput
    resourceGroup: ResourceGroupCreateNestedOneWithoutStorageAccountsInput
  }

  export type StorageAccountUncheckedCreateInput = {
    id?: number
    userId: string
    storageAccountName: string
    resourceGroupId: number
    accessKey?: string | null
    createdAt?: Date | string
    containers?: ContainerUncheckedCreateNestedManyWithoutStorageAccountInput
  }

  export type StorageAccountUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    containers?: ContainerUpdateManyWithoutStorageAccountNestedInput
    resourceGroup?: ResourceGroupUpdateOneRequiredWithoutStorageAccountsNestedInput
  }

  export type StorageAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    resourceGroupId?: IntFieldUpdateOperationsInput | number
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    containers?: ContainerUncheckedUpdateManyWithoutStorageAccountNestedInput
  }

  export type StorageAccountCreateManyInput = {
    id?: number
    userId: string
    storageAccountName: string
    resourceGroupId: number
    accessKey?: string | null
    createdAt?: Date | string
  }

  export type StorageAccountUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    resourceGroupId?: IntFieldUpdateOperationsInput | number
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerCreateInput = {
    containerName: string
    createdAt?: Date | string
    storageAccount: StorageAccountCreateNestedOneWithoutContainersInput
  }

  export type ContainerUncheckedCreateInput = {
    id?: number
    containerName: string
    storageAccountId: number
    createdAt?: Date | string
  }

  export type ContainerUpdateInput = {
    containerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    storageAccount?: StorageAccountUpdateOneRequiredWithoutContainersNestedInput
  }

  export type ContainerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerName?: StringFieldUpdateOperationsInput | string
    storageAccountId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerCreateManyInput = {
    id?: number
    containerName: string
    storageAccountId: number
    createdAt?: Date | string
  }

  export type ContainerUpdateManyMutationInput = {
    containerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerName?: StringFieldUpdateOperationsInput | string
    storageAccountId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationsCreateInput = {
    resourcegroup: string
    creation?: string
    deletion?: string
    createdAt?: Date | string
  }

  export type OperationsUncheckedCreateInput = {
    id?: number
    resourcegroup: string
    creation?: string
    deletion?: string
    createdAt?: Date | string
  }

  export type OperationsUpdateInput = {
    resourcegroup?: StringFieldUpdateOperationsInput | string
    creation?: StringFieldUpdateOperationsInput | string
    deletion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resourcegroup?: StringFieldUpdateOperationsInput | string
    creation?: StringFieldUpdateOperationsInput | string
    deletion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationsCreateManyInput = {
    id?: number
    resourcegroup: string
    creation?: string
    deletion?: string
    createdAt?: Date | string
  }

  export type OperationsUpdateManyMutationInput = {
    resourcegroup?: StringFieldUpdateOperationsInput | string
    creation?: StringFieldUpdateOperationsInput | string
    deletion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resourcegroup?: StringFieldUpdateOperationsInput | string
    creation?: StringFieldUpdateOperationsInput | string
    deletion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StorageAccountListRelationFilter = {
    every?: StorageAccountWhereInput
    some?: StorageAccountWhereInput
    none?: StorageAccountWhereInput
  }

  export type StorageAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceGroupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceGroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResourceGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceGroupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ResourceGroupSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ContainerListRelationFilter = {
    every?: ContainerWhereInput
    some?: ContainerWhereInput
    none?: ContainerWhereInput
  }

  export type ResourceGroupRelationFilter = {
    is?: ResourceGroupWhereInput
    isNot?: ResourceGroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContainerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorageAccountUserIdStorageAccountNameCompoundUniqueInput = {
    userId: string
    storageAccountName: string
  }

  export type StorageAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storageAccountName?: SortOrder
    resourceGroupId?: SortOrder
    accessKey?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    resourceGroupId?: SortOrder
  }

  export type StorageAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storageAccountName?: SortOrder
    resourceGroupId?: SortOrder
    accessKey?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storageAccountName?: SortOrder
    resourceGroupId?: SortOrder
    accessKey?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageAccountSumOrderByAggregateInput = {
    id?: SortOrder
    resourceGroupId?: SortOrder
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

  export type StorageAccountRelationFilter = {
    is?: StorageAccountWhereInput
    isNot?: StorageAccountWhereInput
  }

  export type ContainerStorageAccountIdContainerNameCompoundUniqueInput = {
    storageAccountId: number
    containerName: string
  }

  export type ContainerCountOrderByAggregateInput = {
    id?: SortOrder
    containerName?: SortOrder
    storageAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContainerAvgOrderByAggregateInput = {
    id?: SortOrder
    storageAccountId?: SortOrder
  }

  export type ContainerMaxOrderByAggregateInput = {
    id?: SortOrder
    containerName?: SortOrder
    storageAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContainerMinOrderByAggregateInput = {
    id?: SortOrder
    containerName?: SortOrder
    storageAccountId?: SortOrder
    createdAt?: SortOrder
  }

  export type ContainerSumOrderByAggregateInput = {
    id?: SortOrder
    storageAccountId?: SortOrder
  }

  export type OperationsCountOrderByAggregateInput = {
    id?: SortOrder
    resourcegroup?: SortOrder
    creation?: SortOrder
    deletion?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OperationsMaxOrderByAggregateInput = {
    id?: SortOrder
    resourcegroup?: SortOrder
    creation?: SortOrder
    deletion?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationsMinOrderByAggregateInput = {
    id?: SortOrder
    resourcegroup?: SortOrder
    creation?: SortOrder
    deletion?: SortOrder
    createdAt?: SortOrder
  }

  export type OperationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StorageAccountCreateNestedManyWithoutResourceGroupInput = {
    create?: XOR<StorageAccountCreateWithoutResourceGroupInput, StorageAccountUncheckedCreateWithoutResourceGroupInput> | StorageAccountCreateWithoutResourceGroupInput[] | StorageAccountUncheckedCreateWithoutResourceGroupInput[]
    connectOrCreate?: StorageAccountCreateOrConnectWithoutResourceGroupInput | StorageAccountCreateOrConnectWithoutResourceGroupInput[]
    createMany?: StorageAccountCreateManyResourceGroupInputEnvelope
    connect?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
  }

  export type StorageAccountUncheckedCreateNestedManyWithoutResourceGroupInput = {
    create?: XOR<StorageAccountCreateWithoutResourceGroupInput, StorageAccountUncheckedCreateWithoutResourceGroupInput> | StorageAccountCreateWithoutResourceGroupInput[] | StorageAccountUncheckedCreateWithoutResourceGroupInput[]
    connectOrCreate?: StorageAccountCreateOrConnectWithoutResourceGroupInput | StorageAccountCreateOrConnectWithoutResourceGroupInput[]
    createMany?: StorageAccountCreateManyResourceGroupInputEnvelope
    connect?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StorageAccountUpdateManyWithoutResourceGroupNestedInput = {
    create?: XOR<StorageAccountCreateWithoutResourceGroupInput, StorageAccountUncheckedCreateWithoutResourceGroupInput> | StorageAccountCreateWithoutResourceGroupInput[] | StorageAccountUncheckedCreateWithoutResourceGroupInput[]
    connectOrCreate?: StorageAccountCreateOrConnectWithoutResourceGroupInput | StorageAccountCreateOrConnectWithoutResourceGroupInput[]
    upsert?: StorageAccountUpsertWithWhereUniqueWithoutResourceGroupInput | StorageAccountUpsertWithWhereUniqueWithoutResourceGroupInput[]
    createMany?: StorageAccountCreateManyResourceGroupInputEnvelope
    set?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    disconnect?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    delete?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    connect?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    update?: StorageAccountUpdateWithWhereUniqueWithoutResourceGroupInput | StorageAccountUpdateWithWhereUniqueWithoutResourceGroupInput[]
    updateMany?: StorageAccountUpdateManyWithWhereWithoutResourceGroupInput | StorageAccountUpdateManyWithWhereWithoutResourceGroupInput[]
    deleteMany?: StorageAccountScalarWhereInput | StorageAccountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StorageAccountUncheckedUpdateManyWithoutResourceGroupNestedInput = {
    create?: XOR<StorageAccountCreateWithoutResourceGroupInput, StorageAccountUncheckedCreateWithoutResourceGroupInput> | StorageAccountCreateWithoutResourceGroupInput[] | StorageAccountUncheckedCreateWithoutResourceGroupInput[]
    connectOrCreate?: StorageAccountCreateOrConnectWithoutResourceGroupInput | StorageAccountCreateOrConnectWithoutResourceGroupInput[]
    upsert?: StorageAccountUpsertWithWhereUniqueWithoutResourceGroupInput | StorageAccountUpsertWithWhereUniqueWithoutResourceGroupInput[]
    createMany?: StorageAccountCreateManyResourceGroupInputEnvelope
    set?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    disconnect?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    delete?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    connect?: StorageAccountWhereUniqueInput | StorageAccountWhereUniqueInput[]
    update?: StorageAccountUpdateWithWhereUniqueWithoutResourceGroupInput | StorageAccountUpdateWithWhereUniqueWithoutResourceGroupInput[]
    updateMany?: StorageAccountUpdateManyWithWhereWithoutResourceGroupInput | StorageAccountUpdateManyWithWhereWithoutResourceGroupInput[]
    deleteMany?: StorageAccountScalarWhereInput | StorageAccountScalarWhereInput[]
  }

  export type ContainerCreateNestedManyWithoutStorageAccountInput = {
    create?: XOR<ContainerCreateWithoutStorageAccountInput, ContainerUncheckedCreateWithoutStorageAccountInput> | ContainerCreateWithoutStorageAccountInput[] | ContainerUncheckedCreateWithoutStorageAccountInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutStorageAccountInput | ContainerCreateOrConnectWithoutStorageAccountInput[]
    createMany?: ContainerCreateManyStorageAccountInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type ResourceGroupCreateNestedOneWithoutStorageAccountsInput = {
    create?: XOR<ResourceGroupCreateWithoutStorageAccountsInput, ResourceGroupUncheckedCreateWithoutStorageAccountsInput>
    connectOrCreate?: ResourceGroupCreateOrConnectWithoutStorageAccountsInput
    connect?: ResourceGroupWhereUniqueInput
  }

  export type ContainerUncheckedCreateNestedManyWithoutStorageAccountInput = {
    create?: XOR<ContainerCreateWithoutStorageAccountInput, ContainerUncheckedCreateWithoutStorageAccountInput> | ContainerCreateWithoutStorageAccountInput[] | ContainerUncheckedCreateWithoutStorageAccountInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutStorageAccountInput | ContainerCreateOrConnectWithoutStorageAccountInput[]
    createMany?: ContainerCreateManyStorageAccountInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContainerUpdateManyWithoutStorageAccountNestedInput = {
    create?: XOR<ContainerCreateWithoutStorageAccountInput, ContainerUncheckedCreateWithoutStorageAccountInput> | ContainerCreateWithoutStorageAccountInput[] | ContainerUncheckedCreateWithoutStorageAccountInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutStorageAccountInput | ContainerCreateOrConnectWithoutStorageAccountInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutStorageAccountInput | ContainerUpsertWithWhereUniqueWithoutStorageAccountInput[]
    createMany?: ContainerCreateManyStorageAccountInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutStorageAccountInput | ContainerUpdateWithWhereUniqueWithoutStorageAccountInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutStorageAccountInput | ContainerUpdateManyWithWhereWithoutStorageAccountInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type ResourceGroupUpdateOneRequiredWithoutStorageAccountsNestedInput = {
    create?: XOR<ResourceGroupCreateWithoutStorageAccountsInput, ResourceGroupUncheckedCreateWithoutStorageAccountsInput>
    connectOrCreate?: ResourceGroupCreateOrConnectWithoutStorageAccountsInput
    upsert?: ResourceGroupUpsertWithoutStorageAccountsInput
    connect?: ResourceGroupWhereUniqueInput
    update?: XOR<XOR<ResourceGroupUpdateToOneWithWhereWithoutStorageAccountsInput, ResourceGroupUpdateWithoutStorageAccountsInput>, ResourceGroupUncheckedUpdateWithoutStorageAccountsInput>
  }

  export type ContainerUncheckedUpdateManyWithoutStorageAccountNestedInput = {
    create?: XOR<ContainerCreateWithoutStorageAccountInput, ContainerUncheckedCreateWithoutStorageAccountInput> | ContainerCreateWithoutStorageAccountInput[] | ContainerUncheckedCreateWithoutStorageAccountInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutStorageAccountInput | ContainerCreateOrConnectWithoutStorageAccountInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutStorageAccountInput | ContainerUpsertWithWhereUniqueWithoutStorageAccountInput[]
    createMany?: ContainerCreateManyStorageAccountInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutStorageAccountInput | ContainerUpdateWithWhereUniqueWithoutStorageAccountInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutStorageAccountInput | ContainerUpdateManyWithWhereWithoutStorageAccountInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type StorageAccountCreateNestedOneWithoutContainersInput = {
    create?: XOR<StorageAccountCreateWithoutContainersInput, StorageAccountUncheckedCreateWithoutContainersInput>
    connectOrCreate?: StorageAccountCreateOrConnectWithoutContainersInput
    connect?: StorageAccountWhereUniqueInput
  }

  export type StorageAccountUpdateOneRequiredWithoutContainersNestedInput = {
    create?: XOR<StorageAccountCreateWithoutContainersInput, StorageAccountUncheckedCreateWithoutContainersInput>
    connectOrCreate?: StorageAccountCreateOrConnectWithoutContainersInput
    upsert?: StorageAccountUpsertWithoutContainersInput
    connect?: StorageAccountWhereUniqueInput
    update?: XOR<XOR<StorageAccountUpdateToOneWithWhereWithoutContainersInput, StorageAccountUpdateWithoutContainersInput>, StorageAccountUncheckedUpdateWithoutContainersInput>
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

  export type StorageAccountCreateWithoutResourceGroupInput = {
    userId: string
    storageAccountName: string
    accessKey?: string | null
    createdAt?: Date | string
    containers?: ContainerCreateNestedManyWithoutStorageAccountInput
  }

  export type StorageAccountUncheckedCreateWithoutResourceGroupInput = {
    id?: number
    userId: string
    storageAccountName: string
    accessKey?: string | null
    createdAt?: Date | string
    containers?: ContainerUncheckedCreateNestedManyWithoutStorageAccountInput
  }

  export type StorageAccountCreateOrConnectWithoutResourceGroupInput = {
    where: StorageAccountWhereUniqueInput
    create: XOR<StorageAccountCreateWithoutResourceGroupInput, StorageAccountUncheckedCreateWithoutResourceGroupInput>
  }

  export type StorageAccountCreateManyResourceGroupInputEnvelope = {
    data: StorageAccountCreateManyResourceGroupInput | StorageAccountCreateManyResourceGroupInput[]
    skipDuplicates?: boolean
  }

  export type StorageAccountUpsertWithWhereUniqueWithoutResourceGroupInput = {
    where: StorageAccountWhereUniqueInput
    update: XOR<StorageAccountUpdateWithoutResourceGroupInput, StorageAccountUncheckedUpdateWithoutResourceGroupInput>
    create: XOR<StorageAccountCreateWithoutResourceGroupInput, StorageAccountUncheckedCreateWithoutResourceGroupInput>
  }

  export type StorageAccountUpdateWithWhereUniqueWithoutResourceGroupInput = {
    where: StorageAccountWhereUniqueInput
    data: XOR<StorageAccountUpdateWithoutResourceGroupInput, StorageAccountUncheckedUpdateWithoutResourceGroupInput>
  }

  export type StorageAccountUpdateManyWithWhereWithoutResourceGroupInput = {
    where: StorageAccountScalarWhereInput
    data: XOR<StorageAccountUpdateManyMutationInput, StorageAccountUncheckedUpdateManyWithoutResourceGroupInput>
  }

  export type StorageAccountScalarWhereInput = {
    AND?: StorageAccountScalarWhereInput | StorageAccountScalarWhereInput[]
    OR?: StorageAccountScalarWhereInput[]
    NOT?: StorageAccountScalarWhereInput | StorageAccountScalarWhereInput[]
    id?: IntFilter<"StorageAccount"> | number
    userId?: StringFilter<"StorageAccount"> | string
    storageAccountName?: StringFilter<"StorageAccount"> | string
    resourceGroupId?: IntFilter<"StorageAccount"> | number
    accessKey?: StringNullableFilter<"StorageAccount"> | string | null
    createdAt?: DateTimeFilter<"StorageAccount"> | Date | string
  }

  export type ContainerCreateWithoutStorageAccountInput = {
    containerName: string
    createdAt?: Date | string
  }

  export type ContainerUncheckedCreateWithoutStorageAccountInput = {
    id?: number
    containerName: string
    createdAt?: Date | string
  }

  export type ContainerCreateOrConnectWithoutStorageAccountInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutStorageAccountInput, ContainerUncheckedCreateWithoutStorageAccountInput>
  }

  export type ContainerCreateManyStorageAccountInputEnvelope = {
    data: ContainerCreateManyStorageAccountInput | ContainerCreateManyStorageAccountInput[]
    skipDuplicates?: boolean
  }

  export type ResourceGroupCreateWithoutStorageAccountsInput = {
    userId?: string
    name: string
    createdAt?: Date | string
  }

  export type ResourceGroupUncheckedCreateWithoutStorageAccountsInput = {
    id?: number
    userId?: string
    name: string
    createdAt?: Date | string
  }

  export type ResourceGroupCreateOrConnectWithoutStorageAccountsInput = {
    where: ResourceGroupWhereUniqueInput
    create: XOR<ResourceGroupCreateWithoutStorageAccountsInput, ResourceGroupUncheckedCreateWithoutStorageAccountsInput>
  }

  export type ContainerUpsertWithWhereUniqueWithoutStorageAccountInput = {
    where: ContainerWhereUniqueInput
    update: XOR<ContainerUpdateWithoutStorageAccountInput, ContainerUncheckedUpdateWithoutStorageAccountInput>
    create: XOR<ContainerCreateWithoutStorageAccountInput, ContainerUncheckedCreateWithoutStorageAccountInput>
  }

  export type ContainerUpdateWithWhereUniqueWithoutStorageAccountInput = {
    where: ContainerWhereUniqueInput
    data: XOR<ContainerUpdateWithoutStorageAccountInput, ContainerUncheckedUpdateWithoutStorageAccountInput>
  }

  export type ContainerUpdateManyWithWhereWithoutStorageAccountInput = {
    where: ContainerScalarWhereInput
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyWithoutStorageAccountInput>
  }

  export type ContainerScalarWhereInput = {
    AND?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
    OR?: ContainerScalarWhereInput[]
    NOT?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
    id?: IntFilter<"Container"> | number
    containerName?: StringFilter<"Container"> | string
    storageAccountId?: IntFilter<"Container"> | number
    createdAt?: DateTimeFilter<"Container"> | Date | string
  }

  export type ResourceGroupUpsertWithoutStorageAccountsInput = {
    update: XOR<ResourceGroupUpdateWithoutStorageAccountsInput, ResourceGroupUncheckedUpdateWithoutStorageAccountsInput>
    create: XOR<ResourceGroupCreateWithoutStorageAccountsInput, ResourceGroupUncheckedCreateWithoutStorageAccountsInput>
    where?: ResourceGroupWhereInput
  }

  export type ResourceGroupUpdateToOneWithWhereWithoutStorageAccountsInput = {
    where?: ResourceGroupWhereInput
    data: XOR<ResourceGroupUpdateWithoutStorageAccountsInput, ResourceGroupUncheckedUpdateWithoutStorageAccountsInput>
  }

  export type ResourceGroupUpdateWithoutStorageAccountsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceGroupUncheckedUpdateWithoutStorageAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageAccountCreateWithoutContainersInput = {
    userId: string
    storageAccountName: string
    accessKey?: string | null
    createdAt?: Date | string
    resourceGroup: ResourceGroupCreateNestedOneWithoutStorageAccountsInput
  }

  export type StorageAccountUncheckedCreateWithoutContainersInput = {
    id?: number
    userId: string
    storageAccountName: string
    resourceGroupId: number
    accessKey?: string | null
    createdAt?: Date | string
  }

  export type StorageAccountCreateOrConnectWithoutContainersInput = {
    where: StorageAccountWhereUniqueInput
    create: XOR<StorageAccountCreateWithoutContainersInput, StorageAccountUncheckedCreateWithoutContainersInput>
  }

  export type StorageAccountUpsertWithoutContainersInput = {
    update: XOR<StorageAccountUpdateWithoutContainersInput, StorageAccountUncheckedUpdateWithoutContainersInput>
    create: XOR<StorageAccountCreateWithoutContainersInput, StorageAccountUncheckedCreateWithoutContainersInput>
    where?: StorageAccountWhereInput
  }

  export type StorageAccountUpdateToOneWithWhereWithoutContainersInput = {
    where?: StorageAccountWhereInput
    data: XOR<StorageAccountUpdateWithoutContainersInput, StorageAccountUncheckedUpdateWithoutContainersInput>
  }

  export type StorageAccountUpdateWithoutContainersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resourceGroup?: ResourceGroupUpdateOneRequiredWithoutStorageAccountsNestedInput
  }

  export type StorageAccountUncheckedUpdateWithoutContainersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    resourceGroupId?: IntFieldUpdateOperationsInput | number
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageAccountCreateManyResourceGroupInput = {
    id?: number
    userId: string
    storageAccountName: string
    accessKey?: string | null
    createdAt?: Date | string
  }

  export type StorageAccountUpdateWithoutResourceGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    containers?: ContainerUpdateManyWithoutStorageAccountNestedInput
  }

  export type StorageAccountUncheckedUpdateWithoutResourceGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    containers?: ContainerUncheckedUpdateManyWithoutStorageAccountNestedInput
  }

  export type StorageAccountUncheckedUpdateManyWithoutResourceGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    storageAccountName?: StringFieldUpdateOperationsInput | string
    accessKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerCreateManyStorageAccountInput = {
    id?: number
    containerName: string
    createdAt?: Date | string
  }

  export type ContainerUpdateWithoutStorageAccountInput = {
    containerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateWithoutStorageAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerUncheckedUpdateManyWithoutStorageAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    containerName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ResourceGroupCountOutputTypeDefaultArgs instead
     */
    export type ResourceGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StorageAccountCountOutputTypeDefaultArgs instead
     */
    export type StorageAccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StorageAccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResourceGroupDefaultArgs instead
     */
    export type ResourceGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResourceGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StorageAccountDefaultArgs instead
     */
    export type StorageAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StorageAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContainerDefaultArgs instead
     */
    export type ContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContainerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperationsDefaultArgs instead
     */
    export type OperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperationsDefaultArgs<ExtArgs>

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