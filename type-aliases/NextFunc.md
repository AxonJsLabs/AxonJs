[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / NextFunc

# Type Alias: NextFunc()

> **NextFunc** = () => `Promise`\<`void`\> \| `void`

Defined in: [types/RouterTypes.ts:88](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/types/RouterTypes.ts#L88)

This function calls when process in current middleware is done and you want to pass
the request to the next middleware or controller.

## Returns

`Promise`\<`void`\> \| `void`
