import { Request, Response } from "../../types/RouterTypes";

interface ControllerRegistry {
    [key: string]: any;
}

const ControllerStorage: ControllerRegistry = {};


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
export class BaseController {
    constructor() {
        const controllerName = this.constructor.name;

        if (!ControllerStorage[controllerName]) {
            ControllerStorage[controllerName] = this;
        }
    }
}