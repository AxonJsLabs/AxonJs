[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / Request

# Interface: Request\<P\>

Defined in: [types/RouterTypes.ts:10](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/RouterTypes.ts#L10)

Incoming request, including some information about the client.

## Extends

- `IncomingMessage`

## Type Parameters

### P

`P`

## Properties

### body?

> `optional` **body**: `any`

Defined in: [types/RouterTypes.ts:15](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/RouterTypes.ts#L15)

***

### method

> **method**: `string`

Defined in: [types/RouterTypes.ts:11](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/RouterTypes.ts#L11)

**Only valid for request obtained from Server.**

The request method as a string. Read only. Examples: `'GET'`, `'DELETE'`.

#### Since

v0.1.1

#### Overrides

`IncomingMessage.method`

***

### params?

> `optional` **params**: `P`

Defined in: [types/RouterTypes.ts:13](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/RouterTypes.ts#L13)

***

### path

> **path**: `string`

Defined in: [types/RouterTypes.ts:12](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/RouterTypes.ts#L12)

***

### query?

> `optional` **query**: `object`

Defined in: [types/RouterTypes.ts:14](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/RouterTypes.ts#L14)

#### Index Signature

\[`key`: `string`\]: `undefined` \| `string`
