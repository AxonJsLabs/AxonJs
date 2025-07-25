[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / Router

# Function: Router()

> **Router**(`prefix?`): [`AxonRouter`](../classes/AxonRouter.md)

Defined in: [index.ts:23](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/index.ts#L23)

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
