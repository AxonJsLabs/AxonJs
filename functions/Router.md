[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / Router

# Function: Router()

> **Router**(`prefix?`): [`AxonRouter`](../classes/AxonRouter.md)

Defined in: [index.ts:23](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/index.ts#L23)

Instance of AxonRouter for easier usage

## Parameters

### prefix?

`string`

prefix for all routes in this router

## Returns

[`AxonRouter`](../classes/AxonRouter.md)

returns an instance of AxonRouter

## Example

```ts
const router = Router(); // without prefix
const router2 = Router("/api/v1"); // with prefix
```
