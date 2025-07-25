[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / AxonRouter

# Class: AxonRouter

Defined in: [Router/AxonRouter.ts:58](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L58)

## Constructors

### Constructor

> **new AxonRouter**(`prefix?`): `AxonRouter`

Defined in: [Router/AxonRouter.ts:62](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L62)

#### Parameters

##### prefix?

`string`

#### Returns

`AxonRouter`

## Properties

### prefix

> **prefix**: `undefined` \| `string`

Defined in: [Router/AxonRouter.ts:60](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L60)

## Methods

### delete()

> **delete**\<`Path`, `C`, `M`\>(`path`, `controller`, `validation?`): `AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

Defined in: [Router/AxonRouter.ts:337](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L337)

Endpoint with method DELETE

The DELETE HTTP request method sends data to the server for deleting a data.

#### Type Parameters

##### Path

`Path` *extends* `string`

##### C

`C` *extends* [`BaseController`](BaseController.md)

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### path

`Path`

route path

##### controller

route request controller

[`FuncController`](../type-aliases/FuncController.md)\<`RouteParams`\<`Path`\>\> | `ClassController`\<`C`, `M`\>

##### validation?

[`ValidationObj`](../interfaces/ValidationObj.md)[]

an array contains your validation objects

#### Returns

`AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

#### Example

```ts
router.delete("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
 res.send("Hello World");
});

router.delete("/logout", authController, [
     {
         schema: logoutSchema,
         target: "params",
         options: {
             abortEarly: false
         }
     }
])
```

***

### exportRoutes()

> **exportRoutes**(): [`HttpMethods`](../interfaces/HttpMethods.md)

Defined in: [Router/AxonRouter.ts:416](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L416)

#### Returns

[`HttpMethods`](../interfaces/HttpMethods.md)

***

### get()

> **get**\<`Path`, `C`, `M`\>(`path`, `controller`, `validation?`): `AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

Defined in: [Router/AxonRouter.ts:103](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L103)

Endpoint with method GET

The purpose of the GET method is to simply retrieve data from the server. The GET method is used to request any of the following resources:
- A webpage or HTML file.
- An image or video.
- A JSON document.
- A CSS file or JavaScript file.
- An XML file.

#### Type Parameters

##### Path

`Path` *extends* `string`

##### C

`C` *extends* [`BaseController`](BaseController.md)

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### path

`Path`

route path

##### controller

route request controller

[`FuncController`](../type-aliases/FuncController.md)\<`RouteParams`\<`Path`\>\> | `ClassController`\<`C`, `M`\>

##### validation?

[`ValidationObj`](../interfaces/ValidationObj.md)[]

#### Returns

`AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

#### Example

```ts
router.get("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
 res.send("Hello World");
});

router.get("/user", userController, [
     {
         schema: limitSchema,
         target: "query",
         options: {
             abortEarly: false
         }
     }
])
```

***

### options()

> **options**\<`Path`, `C`, `M`\>(`path`, `controller`, `validation?`): `AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

Defined in: [Router/AxonRouter.ts:383](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L383)

Endpoint with method OPTIONS

The HTTP OPTIONS method returns a listing of which HTTP methods are supported and allowed.

#### Type Parameters

##### Path

`Path` *extends* `string`

##### C

`C` *extends* [`BaseController`](BaseController.md)

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### path

`Path`

route path

##### controller

route request controller

[`FuncController`](../type-aliases/FuncController.md)\<`RouteParams`\<`Path`\>\> | `ClassController`\<`C`, `M`\>

##### validation?

[`ValidationObj`](../interfaces/ValidationObj.md)[]

#### Returns

`AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

#### Example

```ts
router.options("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
 res.send("Hello World");
});
```

***

### patch()

> **patch**\<`Path`, `C`, `M`\>(`path`, `controller`, `validation?`): `AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

Defined in: [Router/AxonRouter.ts:280](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L280)

Endpoint with method PATCH

The PATCH HTTP request method sends data to the server for editing part of a data.

#### Type Parameters

##### Path

`Path` *extends* `string`

##### C

`C` *extends* [`BaseController`](BaseController.md)

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### path

`Path`

route path

##### controller

route request controller

[`FuncController`](../type-aliases/FuncController.md)\<`RouteParams`\<`Path`\>\> | `ClassController`\<`C`, `M`\>

##### validation?

[`ValidationObj`](../interfaces/ValidationObj.md)[]

#### Returns

`AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

#### Example

```ts
router.patch("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
 res.send("Hello World");
});

router.patch("/edit", userController, [
     {
         schema: editSchema,
         target: "body",
         options: {
             abortEarly: false
         }
     },
     {
         schema: userSchema,
         target: "params"
     }
])
```

***

### post()

> **post**\<`Path`, `C`, `M`\>(`path`, `controller`, `validation?`): `AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

Defined in: [Router/AxonRouter.ts:164](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L164)

Endpoint with method POST

The POST HTTP request method sends data to the server for processing.

The data sent to the server is typically in the following form:
- Input fields from online forms.
- XML or JSON data.
- Text data from query parameters.

#### Type Parameters

##### Path

`Path` *extends* `string`

##### C

`C` *extends* [`BaseController`](BaseController.md)

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### path

`Path`

route path

##### controller

route request controller

[`FuncController`](../type-aliases/FuncController.md)\<`RouteParams`\<`Path`\>\> | `ClassController`\<`C`, `M`\>

##### validation?

[`ValidationObj`](../interfaces/ValidationObj.md)[]

#### Returns

`AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

#### Example

```ts
router.post("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
 res.send("Hello World");
});

router.post("/login", authController, [
     {
         schema: loginSchema,
         target: "body",
         options: {
             abortEarly: false
         }
     }
])
```

***

### put()

> **put**\<`Path`, `C`, `M`\>(`path`, `controller`, `validation?`): `AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

Defined in: [Router/AxonRouter.ts:220](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/Router/AxonRouter.ts#L220)

Endpoint with method PUT

The PUT HTTP request method sends data to the server for replacing and changing full state.

#### Type Parameters

##### Path

`Path` *extends* `string`

##### C

`C` *extends* [`BaseController`](BaseController.md)

##### M

`M` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### path

`Path`

route path

##### controller

route request controller

[`FuncController`](../type-aliases/FuncController.md)\<`RouteParams`\<`Path`\>\> | `ClassController`\<`C`, `M`\>

##### validation?

[`ValidationObj`](../interfaces/ValidationObj.md)[]

#### Returns

`AxonRouteHandler`\<`RouteParams`\<`Path`\>\>

#### Example

```ts
router.put("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
 res.send("Hello World");
});

router.put("/edit", userController, [
     {
         schema: editSchema,
         target: "body",
         options: {
             abortEarly: false
         }
     }
])
```
