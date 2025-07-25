[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / FuncController

# Type Alias: FuncController()\<P\>

> **FuncController**\<`P`\> = (`request`, `response`, ...`args`) => `Promise`\<`void`\> \| `void`

Defined in: [types/RouterTypes.ts:47](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/types/RouterTypes.ts#L47)

`FuncController` type represents a function controller
used in routing. It defines a function type that takes two parameters: a `Request`
object and a `Response` object, and returns a `Promise<void>` or `void`. This type is
commonly used to define the handler functions for different routes in a web application.
The `Request` object contains information about the incoming request, such as method,
path, params, query, and body. The `Response` object provides methods to send responses
back to the client. The `FuncController` type is generic, allowing you to specify the
type of parameters (`P`) that the controller function expects.

## Type Parameters

### P

`P` = \{ \}

## Parameters

### request

[`Request`](../interfaces/Request.md)\<`P`\>

### response

[`Response`](../interfaces/Response.md)

### args

...`any`[]

## Returns

`Promise`\<`void`\> \| `void`
