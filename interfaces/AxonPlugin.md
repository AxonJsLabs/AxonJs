[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / AxonPlugin

# Interface: AxonPlugin

Defined in: [types/PluginTypes.ts:12](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/PluginTypes.ts#L12)

## Indexable

\[`methodName`: `string`\]: `any`

Rest of plugin methods.

## Properties

### mode

> **mode**: [`PluginMode`](../type-aliases/PluginMode.md)

Defined in: [types/PluginTypes.ts:33](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/PluginTypes.ts#L33)

This field submit your plugin environment mode to use.

- production
- development
- both

***

### name

> **name**: `string`

Defined in: [types/PluginTypes.ts:16](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/PluginTypes.ts#L16)

This field submit your plugin name for AxonCore.

***

### version

> **version**: `string`

Defined in: [types/PluginTypes.ts:24](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/PluginTypes.ts#L24)

This field submit your plugin version for AxonCore.

NOTE:
*It's better to use semantic versioning and also without 'v' or 'V' keyword.*

## Methods

### init()

> **init**(`core`): `Promise`\<`void`\>

Defined in: [types/PluginTypes.ts:39](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/PluginTypes.ts#L39)

This is the start point of your plugin, Initialize method.

#### Parameters

##### core

[`AxonCore`](../classes/AxonCore.md)

An instance of AxonCore that used in project and ready to use.

#### Returns

`Promise`\<`void`\>
