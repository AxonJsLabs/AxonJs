[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / NeuronContainer

# Class: NeuronContainer

Defined in: [core/DI/NeuronContainer.ts:17](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L17)

**`Experimental`**

NeuronContainer is a flexible and performant dependency injection system.
Supports aliasing, hybrid string/class tokens, async registration, and lifecycles.

### Lifecycle Types:

- **Singleton**: Shared instance for entire app lifetime.
- **Transient**: New instance on every request.
- **Scoped**: New instance per logical scope/request.

 This is an experimental feature.

## Version

0.5.1

## Since

0.13.0

## Constructors

### Constructor

> **new NeuronContainer**(): `NeuronContainer`

**`Experimental`**

#### Returns

`NeuronContainer`

## Methods

### checkDependency()

> **checkDependency**(`key`, `scopeId?`): `boolean`

Defined in: [core/DI/NeuronContainer.ts:131](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L131)

**`Experimental`**

Check status of a dependency in scope or outside of a scope.

#### Parameters

##### key

Key or alias of dependency

`string` | `Function`

##### scopeId?

`string`

The ID of scope that you want to resolve

#### Returns

`boolean`

Throw error if something wrong and return true if everything was ok

***

### clearScope()

> **clearScope**(`scopeId`): `void`

Defined in: [core/DI/NeuronContainer.ts:248](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L248)

**`Experimental`**

Clear all scoped instances for a specific scope ID.

#### Parameters

##### scopeId

`string`

The ID of scope that you want to clear

#### Returns

`void`

#### Example

```ts
container.clearScope(req.id);
```

***

### clone()

> **clone**(): `NeuronContainer`

Defined in: [core/DI/NeuronContainer.ts:229](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L229)

**`Experimental`**

Clone the entire container with same dependencies.

#### Returns

`NeuronContainer`

A clone of current container

#### Example

```ts
const testContainer = container.clone();
```

***

### inspect()

> **inspect**(`key`): `null` \| \{ `isFactory`: `boolean`; `key`: `string` \| `Function`; `lifecycle`: [`Lifecycle`](../type-aliases/Lifecycle.md); `resolved`: `boolean`; \}

Defined in: [core/DI/NeuronContainer.ts:210](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L210)

**`Experimental`**

Inspect metadata of a registered dependency.

#### Parameters

##### key

Key or alias of dependency

`string` | `Function`

#### Returns

`null` \| \{ `isFactory`: `boolean`; `key`: `string` \| `Function`; `lifecycle`: [`Lifecycle`](../type-aliases/Lifecycle.md); `resolved`: `boolean`; \}

metadata of dependency

#### Example

```ts
container.inspect('db');
```

***

### listDependencies()

> **listDependencies**(): (`string` \| `Function`)[]

Defined in: [core/DI/NeuronContainer.ts:199](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L199)

**`Experimental`**

List all registered dependency keys.

#### Returns

(`string` \| `Function`)[]

Array of dependencies

#### Example

```ts
console.log(container.listDependencies());
```

***

### override()

> **override**\<`T`\>(`key`, `value`): `void`

Defined in: [core/DI/NeuronContainer.ts:179](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L179)

**`Experimental`**

Override a registered dependency with a new singleton and non-factory value.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

Key or alias of an exist dependency

`string` | `Function`

##### value

`T`

value of dependency

#### Returns

`void`

#### Example

```ts
container.override('logger', customLogger);
```

***

### register()

> **register**\<`T`\>(`keys`, `value`, `options`): `void`

Defined in: [core/DI/NeuronContainer.ts:62](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L62)

**`Experimental`**

Main registration method used internally by value/factory variants.

#### Type Parameters

##### T

`T`

#### Parameters

##### keys

String, array of string or Function key for the dependency

`string` | `Function` | `string`[]

##### value

Value to inject as dependency value

`T` | () => `T` \| `Promise`\<`T`\>

##### options

Some options for configuring the dependency

###### isFactory

`boolean`

###### lifecycle?

[`Lifecycle`](../type-aliases/Lifecycle.md)

#### Returns

`void`

***

### registerFactory()

> **registerFactory**\<`T`\>(`keys`, `factory`, `options`): `void`

Defined in: [core/DI/NeuronContainer.ts:48](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L48)

**`Experimental`**

Register a factory function that creates the dependency (sync or async).

#### Type Parameters

##### T

`T`

#### Parameters

##### keys

String, array of string or Function key for the dependency

`string` | `Function` | `string`[]

##### factory

() => `T` \| `Promise`\<`T`\>

Factory function or something that must run to return the instance of dependency

##### options

Some options for configuring the dependency

###### lifecycle?

[`Lifecycle`](../type-aliases/Lifecycle.md)

#### Returns

`void`

#### Example

```ts
container.registerFactory('db', () => new DB())
container.registerFactory('auth', async () => await AuthService.build())
```

***

### registerValue()

> **registerValue**\<`T`\>(`keys`, `value`, `options`): `void`

Defined in: [core/DI/NeuronContainer.ts:31](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L31)

**`Experimental`**

Register a static value or instance (object, function, class instance).

#### Type Parameters

##### T

`T`

#### Parameters

##### keys

String, array of string or Function key for the dependency

`string` | `Function` | `string`[]

##### value

`T`

Function, object or instance to register as dependency value

##### options

Some options for configuring the dependency

###### lifecycle?

[`Lifecycle`](../type-aliases/Lifecycle.md)

#### Returns

`void`

#### Example

```ts
container.registerValue('logger', new Logger())
container.registerValue('config', { port: 3000 })
```

***

### resolve()

> **resolve**\<`T`\>(`key`, `scopeId?`): `Promise`\<`T`\>

Defined in: [core/DI/NeuronContainer.ts:96](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L96)

**`Experimental`**

Resolve a dependency, respecting its lifecycle (singleton, scoped, transient).

#### Type Parameters

##### T

`T`

#### Parameters

##### key

Key or alias of dependency

`string` | `Function`

##### scopeId?

`string`

The ID of scope that you want to resolve

#### Returns

`Promise`\<`T`\>

value or instance of the dependency

#### Example

```ts
const logger = await container.resolve('logger')
const auth = await container.resolve('auth', req.id)
```

***

### use()

> **use**\<`T`\>(`key`, `scopeId?`): `Promise`\<`T`\>

Defined in: [core/DI/NeuronContainer.ts:168](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/DI/NeuronContainer.ts#L168)

**`Experimental`**

Shortcut for resolve(), mostly for user-facing code.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

Key or alias of dependency

`string` | `Function`

##### scopeId?

`string`

The ID of scope that you want to resolve

#### Returns

`Promise`\<`T`\>

value or instance of the dependency

#### Example

```ts
const db = await container.use(DBService);
```
