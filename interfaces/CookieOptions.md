[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / CookieOptions

# Interface: CookieOptions

Defined in: [types/CookieTypes.ts:4](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L4)

Options for configuring HTTP cookies.

## Properties

### domain?

> `optional` **domain**: `string`

Defined in: [types/CookieTypes.ts:55](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L55)

The domain for which the cookie is valid.

Example: "example.com"

***

### duration?

> `optional` **duration**: `string`

Defined in: [types/CookieTypes.ts:39](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L39)

Human-readable duration string to set both `expires` and `maxAge`.

Supported units:
- s (seconds)
- m (minutes)
- h (hours)
- d (days)
- M (months)
- y (years)

You can combine multiple units, e.g. "1d2h30m".

Ignored if `maxAge` or `expires` are already defined.

***

### expires?

> `optional` **expires**: `Date`

Defined in: [types/CookieTypes.ts:22](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L22)

Exact expiration date of the cookie.

If provided, the cookie will be removed after this date.

#### Example

```ts
new Date(Date.now() + 86400000) // 1 day from now
```

***

### httpOnly?

> `optional` **httpOnly**: `boolean`

Defined in: [types/CookieTypes.ts:69](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L69)

Marks the cookie as inaccessible to JavaScript (`document.cookie`).

Helps prevent XSS attacks.

***

### maxAge?

> `optional` **maxAge**: `number`

Defined in: [types/CookieTypes.ts:12](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L12)

Number of seconds until the cookie expires.

Takes precedence over `duration` if both are set.

Example: 3600 (1 hour)

***

### path?

> `optional` **path**: `string`

Defined in: [types/CookieTypes.ts:48](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L48)

The path where the cookie is valid.

Defaults to "/" if not specified.

Example: "/api"

***

### sameSite?

> `optional` **sameSite**: `"Strict"` \| `"Lax"` \| `"None"`

Defined in: [types/CookieTypes.ts:77](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L77)

Controls cross-site cookie behavior.
- "Strict": cookie sent only to same-site requests.
- "Lax": cookie sent on top-level navigations.
- "None": cookie sent on all requests (must also be `secure`).

***

### secure?

> `optional` **secure**: `boolean`

Defined in: [types/CookieTypes.ts:62](https://github.com/AxonJsLabs/AxonJs/blob/443c878e407aac4d555b412a63d998c861697725/src/types/CookieTypes.ts#L62)

Indicates if the cookie should only be sent over HTTPS.

Recommended for all authentication cookies.
