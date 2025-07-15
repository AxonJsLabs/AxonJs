[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / AxonCore

# Class: AxonCore

Defined in: [core/AxonCore.ts:41](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L41)

## Constructors

### Constructor

> **new AxonCore**(`config?`): `AxonCore`

Defined in: [core/AxonCore.ts:92](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L92)

#### Parameters

##### config?

[`AxonConfig`](../interfaces/AxonConfig.md)

#### Returns

`AxonCore`

## Methods

### clearGlobalMiddlewares()

> **clearGlobalMiddlewares**(): `void`

Defined in: [core/AxonCore.ts:340](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L340)

Clears all the global middlewares

#### Returns

`void`

***

### close()

> **close**(`server?`): `boolean`

Defined in: [core/AxonCore.ts:825](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L825)

Closes the web servers

#### Parameters

##### server?

server to close

`"https"` | `"http"`

#### Returns

`boolean`

#### Example

```ts
core.close() // closes both http and https servers
core.close("http") // closes only http server
core.close("https") // closes only https server
```

***

### getConfig()

> **getConfig**(): [`AxonConfig`](../interfaces/AxonConfig.md)

Defined in: [core/AxonCore.ts:872](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L872)

Returns the core config

#### Returns

[`AxonConfig`](../interfaces/AxonConfig.md)

core config

#### Example

```ts
const config = core.getConfig();
console.log(config);
```

***

### getContainer()

> **getContainer**(): [`NeuronContainer`](NeuronContainer.md)

Defined in: [core/AxonCore.ts:881](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L881)

Get instance of dependency container that is using by Axon core.

#### Returns

[`NeuronContainer`](NeuronContainer.md)

Dependency Container

#### Since

0.13.0

***

### getServers()

> **getServers**(): `object`

Defined in: [core/AxonCore.ts:858](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L858)

Returns the server object

#### Returns

`object`

server object

##### http

> **http**: `null` \| `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

##### https

> **https**: `null` \| `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

#### Example

```ts
const servers = core.getServers();
servers.http.on("request", () => {
    // something here
});
```

***

### globalMiddleware()

> **globalMiddleware**(`fn`, `timeout?`, `critical?`): `Promise`\<`void`\>

Defined in: [core/AxonCore.ts:301](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L301)

You can set one or many middlewares in global scope with this method.

#### Parameters

##### fn

middleware function or array of middleware functions

[`Middleware`](../type-aliases/Middleware.md) | [`Middleware`](../type-aliases/Middleware.md)[]

##### timeout?

`number`

timeout in milliseconds

##### critical?

`boolean` = `false`

whether the middleware is critical (defaults to false)

#### Returns

`Promise`\<`void`\>

#### Example

```ts
core.globalMiddleware(authMiddleware, 5000, true) // critical middleware with 5s timeout
core.globalMiddleware([uploadMiddleware, userMiddleware], 10000, false) // optional middlewares with 10s timeout
```

***

### listen()

> **listen**(`host`, `port`, `callback?`): `void`

Defined in: [core/AxonCore.ts:683](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L683)

Start listening to http incoming requests

#### Parameters

##### host

`string` = `'127.0.0.1'`

server host address

##### port

server port

`number` | \{ `http`: `number`; `https`: `number`; \}

##### callback?

(`mode?`) => `void`

callback a function to run after starting to listen

#### Returns

`void`

#### Example

```ts
core.listen("0.0.0.0", 80)
// or
core.listen("0.0.0.0", {
     https: 443,
     http: 80
})
```

***

### loadPlugin()

> **loadPlugin**(`plugin`): `Promise`\<`void`\>

Defined in: [core/AxonCore.ts:132](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L132)

Loads a specified Axon plugin using the plugin loader.

#### Parameters

##### plugin

[`AxonPlugin`](../interfaces/AxonPlugin.md)

The plugin to be loaded. It should be an instance of AxonPlugin.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
// this class must implements AxonPlugin type
class MyPlugin implements AxonPlugin {
     name = "plugin"
     version = "1.0.0"

     init(core) {}
}

core.loadPlugin(new MyPlugin())
```

***

### loadRoute()

> **loadRoute**(`router`): `Promise`\<`void`\>

Defined in: [core/AxonCore.ts:176](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L176)

loads created routes

#### Parameters

##### router

[`AxonRouter`](AxonRouter.md)

instance of Router which routes set with it.

#### Returns

`Promise`\<`void`\>

#### Example

```ts
const router = Router(); // without prefix
const router2 = Router("/api/v1"); // with prefix

router.get('/', async (req, res) => {});

core.loadRoute(router);
```

***

### registerDependencyFactory()

> **registerDependencyFactory**\<`T`\>(`name`, `factory`, `options?`): `void`

Defined in: [core/AxonCore.ts:284](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L284)

Register a factory function that creates the dependency (sync or async).

Default lifecycle of dependencies is **singleton**

#### Type Parameters

##### T

`T`

#### Parameters

##### name

String, array of string or Function key for the dependency

`string` | `string`[]

##### factory

() => `T` \| `Promise`\<`T`\>

Factory function or something that must run to return the instance of dependency

##### options?

Some options for configuring the dependency

###### lifecycle?

[`Lifecycle`](../type-aliases/Lifecycle.md)

#### Returns

`void`

#### Since

0.13.0

#### Example

```ts
core.registerDependencyFactory('db', () => new DB())
core.registerDependencyFactory('auth', async () => await AuthService.build())
```

***

### registerDependencyValue()

> **registerDependencyValue**\<`T`\>(`name`, `value`, `options?`): `void`

Defined in: [core/AxonCore.ts:262](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L262)

Register a static value or instance (object, function, class instance).

Default lifecycle of dependencies is **singleton**

#### Type Parameters

##### T

`T`

#### Parameters

##### name

String, array of string or Function key for the dependency

`string` | `string`[]

##### value

`T`

Function, object or instance to register as dependency value

##### options?

Some options for configuring the dependency

###### lifecycle?

[`Lifecycle`](../type-aliases/Lifecycle.md)

#### Returns

`void`

#### Since

0.13.0

#### Example

```ts
core.registerDependencyValue('logger', new Logger());
core.registerDependencyValue('config', { port: 3000 });
```

***

### unloadRoute()

> **unloadRoute**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [core/AxonCore.ts:235](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L235)

unload routes based on entered parameters

#### Parameters

##### \_\_namedParameters

[`UnloadRouteParams`](../interfaces/UnloadRouteParams.md)

#### Returns

`Promise`\<`void`\>

#### Example

```ts
// this one unloads a route with path `/api/v1/user`.
core.unloadRoute({
    route: '/api/v1/user'
});

// this one unloads all  routes with method `GET`
core.unloadRoute({
    method: 'GET'
});

const userRouter = Router();

// this one unloads all routes of userRouter.
core.unloadRoute({
    router: userRouter
});

// this one unloads a route with path `/api/v1/user`, all routes with method `GET` and all routes of userRouter.
core.unloadRoute({
    route: '/api/v1/user',
    method: "GET",
    router: userRouter
})
```

***

### unloadRoutes()

> **unloadRoutes**(): `Promise`\<`void`\>

Defined in: [core/AxonCore.ts:244](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/AxonCore.ts#L244)

unload all routes

#### Returns

`Promise`\<`void`\>

#### Example

```ts
core.unloadRoutes();
```
