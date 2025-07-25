[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / AxonConfig

# Interface: AxonConfig

Defined in: [types/ConfigTypes.ts:3](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L3)

## Properties

### CORS?

> `optional` **CORS**: [`AxonCorsConfig`](AxonCorsConfig.md)

Defined in: [types/ConfigTypes.ts:23](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L23)

Cors configuration for AxonCore.

***

### DEBUG?

> `optional` **DEBUG**: `boolean`

Defined in: [types/ConfigTypes.ts:7](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L7)

AxonCore debug mode.

***

### DEPENDENCY\_CACHE?

> `optional` **DEPENDENCY\_CACHE**: `boolean`

Defined in: [types/ConfigTypes.ts:52](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L52)

Cache dependencies of controller, middleware handlers.

This option will improve the performance of your application but it affect on
updating dependencies and their lifecycle because they will resolve just once in lifetime of application.

#### Default

```ts
false
```

***

### HTTPS?

> `optional` **HTTPS**: [`AxonHttpsConfig`](../type-aliases/AxonHttpsConfig.md)

Defined in: [types/ConfigTypes.ts:28](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L28)

Https configuration for AxonCore.

***

### LOGGER?

> `optional` **LOGGER**: `boolean`

Defined in: [types/ConfigTypes.ts:11](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L11)

AxonCore logger.

***

### LOGGER\_VERBOSE?

> `optional` **LOGGER\_VERBOSE**: `boolean`

Defined in: [types/ConfigTypes.ts:15](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L15)

Verboose mode of logger.

***

### MIDDLEWARE\_TIMEOUT?

> `optional` **MIDDLEWARE\_TIMEOUT**: `number`

Defined in: [types/ConfigTypes.ts:35](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L35)

A global variable to set default middleware timeout for all routes before breaking the middleware chain.

#### Default

```ts
10000ms | 10s
```

***

### PROJECT\_ENV?

> `optional` **PROJECT\_ENV**: `"development"` \| `"production"`

Defined in: [types/ConfigTypes.ts:42](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L42)

Project environment type to manage features more secure and automatically in AxonCore.

#### Default

```ts
development
```

***

### RESPONSE\_MESSAGES?

> `optional` **RESPONSE\_MESSAGES**: [`AxonResponseMessage`](AxonResponseMessage.md)

Defined in: [types/ConfigTypes.ts:19](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/ConfigTypes.ts#L19)

Configuration for AxonCore custom response messages.
