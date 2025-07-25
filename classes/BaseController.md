[**@axonlabs/core v0.13.0**](../README.md)

***

[@axonlabs/core](../globals.md) / BaseController

# Class: `abstract` BaseController

Defined in: [core/classController/index.ts:19](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/core/classController/index.ts#L19)

Base controller class for class based controllers in AxonJs

## Example

```ts
class AuthController extends BaseController {
    async login(req: Request<Params>, res: Response) {
        return res.status(200).body({ token });
    }

    async logout(req: Request<Params>, res: Response) {
        return res.status(200).body({ msg: "Logged out"});
    }
}

router.get("/login", [AuthController, "login"]);
router.get("/logout", [AuthController, "logout"]);
```

## Constructors

### Constructor

> **new BaseController**(): `BaseController`

Defined in: [core/classController/index.ts:20](https://github.com/AxonJsLabs/AxonJs/blob/407e35cea641a89da71a37171ebae2edf17c9012/src/core/classController/index.ts#L20)

#### Returns

`BaseController`
