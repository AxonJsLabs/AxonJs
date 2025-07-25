[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / AxonCorsConfig

# Interface: AxonCorsConfig

Defined in: [types/CoreTypes.ts:10](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L10)

Cors configuration for AxonCore.

## Properties

### allowedHeaders?

> `optional` **allowedHeaders**: `string` \| `string`[]

Defined in: [types/CoreTypes.ts:48](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L48)

Configures the Access-Control-Allow-Headers CORS header.

Possible values:

* String - exprects a comma-delimited `'Content-Type,Authorization'`

* Array - `['Content-Type', 'Authorization']`

If not specified, defaults to reflecting the headers specified in the request's Access-Control-Request-Headers header.

***

### credentials?

> `optional` **credentials**: `boolean`

Defined in: [types/CoreTypes.ts:66](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L66)

Configures the Access-Control-Allow-Credentials CORS header.

Set to `true` to pass the header, otherwise it is omitted.

***

### exposedHeaders?

> `optional` **exposedHeaders**: `string` \| `string`[]

Defined in: [types/CoreTypes.ts:60](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L60)

Configures the Access-Control-Expose-Headers CORS header.

Possible values:

* String - exprects a comma-delimited `'Content-Range,X-Content-Range'`

* Array - `['Content-Range', 'X-Content-Range']`

If not specified, no custom headers are exposed.

***

### maxAge?

> `optional` **maxAge**: `number`

Defined in: [types/CoreTypes.ts:72](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L72)

Configures the Access-Control-Max-Age CORS header.

Set to an `integer` to pass the header, otherwise it is omitted.

***

### methods?

> `optional` **methods**: `string` \| `string`[]

Defined in: [types/CoreTypes.ts:36](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L36)

Configures the Access-Control-Allow-Methods CORS header.

Possible values:

* String - exprects a comma-delimited `'GET,POST,DELETE'`

* Array - `['GET', 'POST', 'DELETE']`

***

### optionsSuccessStatus?

> `optional` **optionsSuccessStatus**: `number`

Defined in: [types/CoreTypes.ts:80](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L80)

Provides a status code to use for successful `OPTIONS` requests, since some legacy browsers (IE11, various SmartTVs) choke on `204`.

***

### origin?

> `optional` **origin**: `string` \| `boolean` \| `Function` \| (`string` \| `RegExp`)[]

Defined in: [types/CoreTypes.ts:26](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L26)

Configures the Access-Control-Allow-Origin CORS header.

Possible values:

* Boolean - set origin to true to reflect the request origin, as defined by `req.header('Origin')`, or set it to false to disable CORS.

* String - set origin to a specific origin. For example if you set it to `"http://example.com"` only requests from "http://example.com" will be allowed.

* RegExp - set origin to a regular expression pattern which will be used to test the request origin. If it's a match, the request origin will be reflected. For example the pattern `/example\.com$/` will reflect any request that is coming from an origin ending with "example.com".

* Array - set origin to an array of valid origins. Each origin can be a String or a RegExp. For example `["http://example1.com", /\.example2\.com$/]` will accept any request from "http://example1.com" or from a subdomain of "example2.com".

* Function - set origin to a function implementing some custom logic. The function takes the request origin as the first parameter and a callback (which expects the signature err [object], allow [bool]) as the second.

***

### preflightContinue?

> `optional` **preflightContinue**: `boolean`

Defined in: [types/CoreTypes.ts:76](https://github.com/AxonJsLabs/AxonJs/blob/3187def3e5c0161745ea7e33640513908efc6c86/src/types/CoreTypes.ts#L76)

Pass the CORS preflight response to the next handler.
