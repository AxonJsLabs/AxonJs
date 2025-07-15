[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / UnloadRouteParams

# Interface: UnloadRouteParams

Defined in: [types/CoreTypes.ts:113](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CoreTypes.ts#L113)

Type of input object of unloadRoute method.

## Properties

### method?

> `optional` **method**: keyof HttpMethods

Defined in: [types/CoreTypes.ts:133](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CoreTypes.ts#L133)

[Optional]

Name of http method which you want to remove it's children routes from backend core.

- GET
- POST
- PUT
- PATCH
- DELETE
- OPTIONS

***

### route?

> `optional` **route**: `string`

Defined in: [types/CoreTypes.ts:138](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CoreTypes.ts#L138)

A specific route which you want to remove it from backend core.

***

### router?

> `optional` **router**: [`AxonRouter`](../classes/AxonRouter.md)

Defined in: [types/CoreTypes.ts:119](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CoreTypes.ts#L119)

[Optional]

Instance of router which you want to remove it's routes from backend core.
