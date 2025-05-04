import { ClassControllerMethods, FuncController, Request, Response } from "../../types/RouterTypes";

class ControllerStorage {
    public static controllers: Record<string, BaseController> = {};

    static add<C extends BaseController>(controllerName: string, controllerClass: new () => C) {
        if (Object.keys(this.controllers).includes(controllerName)) return;
        
        if (!controllerName) {
            throw new Error(`Controller name is required`, {
                cause: controllerName
            });
        }

        if (!(controllerClass.prototype instanceof BaseController)) {
            throw new Error(`Controller class must extend BaseController`, {
                cause: controllerClass
            });
        }

        this.controllers[controllerName] = new controllerClass();
        return;
    }

    /**
     * 
     * @param controllerName name of the controller that registered in the system with its class
     * @param methodName name of the method that is registered in the controller
     * @returns method of the controller
     * @throws Error if the controller or method is not found
     */
    static get(controllerName: string, methodName: string) {
        if (!Object.keys(this.controllers).includes(controllerName)) {
            throw new Error(`Controller ${controllerName} not found`, {
                cause: controllerName
            });
        }

        if (!Object.keys(this.controllers[controllerName]).includes(methodName)) {
            throw new Error(`Method ${methodName} not found in controller ${controllerName}`, {
                cause: methodName
            });
        }

        try {
            const instance = this.controllers[controllerName];
            return instance[methodName];
        } catch (error) {
            throw new Error(`Method ${methodName.toString()} is not bound to the instance`);
        }
    }

    static getAll() {
        return this.controllers;
    }
}


/**
 * Base controller class for class based controllers in AxonJs
 * 
 * @example
 * class AuthController extends BaseController {
 *     async login(req: Request<Params>, res: Response) {
 *         return res.status(200).body({ token });
 *     }
 * 
 *     async logout(req: Request<Params>, res: Response) {
 *         return res.status(200).body({ msg: "Logged out"});
 *     }
 * }
 * 
 * router.get("/login", [AuthController, "login"]);
 * router.get("/logout", [AuthController, "logout"]);
 * 
 */
export abstract class BaseController implements ClassControllerMethods {
    [classMethod: string]: FuncController;
}
// export abstract class BaseController implements ClassControllerMethods {
//     [methodName: string]: FuncController | any;
// }

// TODO: Add new type to other route setters.
// TODO: Add some functions to handle controller and return it to core.
// TODO: Add class controller instance initializer while routes are loading.
// TODO: Check controller registry and storage status.

// TODO: Manage all states and items in a Storage class and remove them from main core. (if it's possible and better | also in new branch not here)