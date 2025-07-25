[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / AxonResponseMessage

# Interface: AxonResponseMessage

Defined in: [types/CoreTypes.ts:86](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/types/CoreTypes.ts#L86)

Configuration for AxonCore custom response messages.

## Indexable

\[`key`: `string`\]: `undefined` \| `string`

## Properties

### methodNotAllowed?

> `optional` **methodNotAllowed**: `string`

Defined in: [types/CoreTypes.ts:106](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/types/CoreTypes.ts#L106)

response error message for 405 method not allowed response from core

use `{method}` to show request method.

example:
- config: 'Method {method} is not allowed'
- response: 'Method TRACE is not allowed'

***

### notFound?

> `optional` **notFound**: `string`

Defined in: [types/CoreTypes.ts:92](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/types/CoreTypes.ts#L92)

response error message for 404 not found response from core

use `{path}` to show request method.

***

### serverError?

> `optional` **serverError**: `string`

Defined in: [types/CoreTypes.ts:96](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/types/CoreTypes.ts#L96)

response error message for 500 internal server error response from core
