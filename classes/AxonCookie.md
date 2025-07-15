[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / AxonCookie

# Class: AxonCookie

Defined in: [core/cookie/AxonCookie.ts:6](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/cookie/AxonCookie.ts#L6)

## Constructors

### Constructor

> **new AxonCookie**(): `AxonCookie`

#### Returns

`AxonCookie`

## Methods

### clear()

> `static` **clear**(`res`, `name`, `options`): `void`

Defined in: [core/cookie/AxonCookie.ts:104](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/cookie/AxonCookie.ts#L104)

Clear a cookie

You have to pass all options which you set while creating cookie to delete that cookie.

#### Parameters

##### res

[`Response`](../interfaces/Response.md)

##### name

`string`

##### options

[`CookieOptions`](../interfaces/CookieOptions.md) = `{}`

#### Returns

`void`

***

### parse()

> `static` **parse**(`req`): `Record`\<`string`, `string`\>

Defined in: [core/cookie/AxonCookie.ts:10](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/cookie/AxonCookie.ts#L10)

Parse cookies from request headers

#### Parameters

##### req

[`Request`](../interfaces/Request.md)\<`any`\>

#### Returns

`Record`\<`string`, `string`\>

***

### set()

> `static` **set**(`res`, `name`, `value`, `options`): `void`

Defined in: [core/cookie/AxonCookie.ts:71](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/core/cookie/AxonCookie.ts#L71)

Set a cookie in the response

#### Parameters

##### res

[`Response`](../interfaces/Response.md)

##### name

`string`

##### value

`string`

##### options

[`CookieOptions`](../interfaces/CookieOptions.md) = `{}`

#### Returns

`void`
