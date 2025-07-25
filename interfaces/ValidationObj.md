[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / ValidationObj

# Interface: ValidationObj

Defined in: [types/RouterTypes.ts:114](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/RouterTypes.ts#L114)

Required object for auto validation process.

## Properties

### options?

> `optional` **options**: [`ValidationConfig`](../type-aliases/ValidationConfig.md)

Defined in: [types/RouterTypes.ts:133](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/RouterTypes.ts#L133)

Options of your validation part for this schema.

To prevent errors while adding options, use 'as <type>' to set type of object.

#### Example

```ts
options: {} as Joi.ValidationOptions
options: {} as Yup.ValidateOptions
options: {} as z.ParseParams
```

***

### schema

> **schema**: [`ValidationSchema`](../type-aliases/ValidationSchema.md)

Defined in: [types/RouterTypes.ts:120](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/RouterTypes.ts#L120)

Validation schema created with Joi, Zod or Yup.

NOTE: Be carefull, query, params and body for validation is always type of object.

***

### target?

> `optional` **target**: [`ValidationTargets`](../type-aliases/ValidationTargets.md)

Defined in: [types/RouterTypes.ts:142](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/RouterTypes.ts#L142)

Target of your validator middleware.

- body
- params (path parameters - /user/12)
- query (query parameters - ?limit=12)
