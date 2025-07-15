[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / NextFunc

# Type Alias: NextFunc()

> **NextFunc** = () => `Promise`\<`void`\> \| `void`

Defined in: [types/RouterTypes.ts:88](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/RouterTypes.ts#L88)

This function calls when process in current middleware is done and you want to pass
the request to the next middleware or controller.

## Returns

`Promise`\<`void`\> \| `void`
