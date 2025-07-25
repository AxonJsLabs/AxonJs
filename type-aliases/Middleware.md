[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / Middleware

# Type Alias: Middleware()\<P\>

> **Middleware**\<`P`\> = (`request`, `response`, `next`) => `Promise`\<`void`\> \| `void`

Defined in: [types/RouterTypes.ts:78](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/RouterTypes.ts#L78)

The `Middleware` type represents a function that acts as middleware in a
web application. Middleware functions have access to the `Request` object, the
`Response` object, and a `NextFunc` function.

## Type Parameters

### P

`P` = \{ \}

## Parameters

### request

[`Request`](../interfaces/Request.md)\<`P`\>

### response

[`Response`](../interfaces/Response.md)

### next

[`NextFunc`](NextFunc.md)

## Returns

`Promise`\<`void`\> \| `void`
