import RouterException from "./exceptions/RouterException";
import addRoutePrefix from "../core/utils/routePrefixHandler";
import { FuncController, Middleware, RouteParams, HttpMethods, MiddlewareStorage, ClassController    } from "../types/RouterTypes";
import { logger } from "../core/utils/coreLogger";
import { resolveConfig } from "../core/config/AxonConfig";
import { BaseController } from "../core/services/controllerService";

const duplicateError = (path: string, method: keyof HttpMethods) => {
    throw new RouterException({
        msg: "Duplicated route!",
        name: "RouterError -> DUPLICATED_ROUTE",
        meta: {
            type: "DUPLICATED_ROUTE",
            description: `route "${method} ${path}" is duplicated`
        }
    })
}

let MIDDLEWARE_TIMEOUT: number; 

resolveConfig(false).then(config => MIDDLEWARE_TIMEOUT = config.MIDDLEWARE_TIMEOUT || 10000);

export class AxonRouteHandler<P = {}> {
    public _controller: FuncController<P> | ClassController<any, any>;
    public _middlewares: MiddlewareStorage[];

    constructor(controller: FuncController<P> | ClassController<any, any>) {
        this._controller = controller;
        this._middlewares = [];
    }

    middleware(fn: Middleware, timeout?: number, critical: boolean = false) {
        this._middlewares.push({
            timeout: timeout || MIDDLEWARE_TIMEOUT,
            middleware: fn,
            critical
        });

        return this;
    }
}

class AxonRouter {
    private routes: HttpMethods;
    public prefix: string | undefined;

    constructor(prefix?: string) {
        this.prefix = prefix;

        this.routes = {
            GET: {},
            POST: {},
            PUT: {},
            PATCH: {},
            DELETE: {},
            OPTIONS: {}
        }
    }

    /**
     * Endpoint with method GET
     * 
     * The purpose of the GET method is to simply retrieve data from the server. The GET method is used to request any of the following resources:
     * - A webpage or HTML file.
     * - An image or video.
     * - A JSON document.
     * - A CSS file or JavaScript file.
     * - An XML file.
     * @param path route path
     * @param controller route request controller
     * 
     * @example
     * 
     * router.get("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
     *  res.send("Hello World");
     * });
     */
    public get<Path extends string, C extends BaseController, M extends keyof C>(
        path: Path, 
        controller: (
            FuncController<RouteParams<Path>>
            | ClassController<C, M>
        )
    ) {
        if (this.routes.GET[path]) {
            duplicateError(path, "GET")
        }

        path = this.handleRoutePrefix(path) as Path;

        const handler = new AxonRouteHandler(controller);
        const { regex, paramNames } = this.parsePath(path);

        this.routes.GET[path] = {
            handler,
            paramNames,
            regex
        }

        return handler;
    }

    /**
     * Endpoint with method POST
     * 
     * The POST HTTP request method sends data to the server for processing.
     * 
     * The data sent to the server is typically in the following form:
     * - Input fields from online forms.
     * - XML or JSON data.
     * - Text data from query parameters.
     * @param path route path
     * @param controller route request controller
     * 
     * @example
     * 
     * router.post("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
     *  res.send("Hello World");
     * });
     */
    public post<Path extends string>(path: Path, controller: FuncController<RouteParams<Path>>) {
        if (this.routes.POST[path]) {
            duplicateError(path, "POST")
        }

        path = this.handleRoutePrefix(path) as Path;

        const handler = new AxonRouteHandler(controller);
        const { regex, paramNames } = this.parsePath(path);

        this.routes.POST[path] = {
            handler,
            paramNames,
            regex
        }

        return handler;
    }

    /**
     * Endpoint with method PUT
     * 
     * The PUT HTTP request method sends data to the server for replacing and changing full state.
     * @param path route path
     * @param controller route request controller
     * 
     * @example
     * 
     * router.put("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
     *  res.send("Hello World");
     * });
     */
    public put<Path extends string>(path: Path, controller: FuncController<RouteParams<Path>>) {
        if (this.routes.PUT[path]) {
            duplicateError(path, "PUT")
        }

        path = this.handleRoutePrefix(path) as Path;

        const handler = new AxonRouteHandler(controller);
        const { regex, paramNames } = this.parsePath(path);

        this.routes.PUT[path] = {
            handler,
            paramNames,
            regex
        }

        return handler;
    }

    /**
     * Endpoint with method PATCH
     * 
     * The PATCH HTTP request method sends data to the server for editing part of a data.
     * @param path route path
     * @param controller route request controller
     * 
     * @example
     * 
     * router.patch("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
     *  res.send("Hello World");
     * });
     */
    public patch<Path extends string>(path: Path, controller: FuncController<RouteParams<Path>>) {
        if (this.routes.PATCH[path]) {
            duplicateError(path, "PATCH")
        }

        path = this.handleRoutePrefix(path) as Path;

        const handler = new AxonRouteHandler(controller);
        const { regex, paramNames } = this.parsePath(path);

        this.routes.PATCH[path] = {
            handler,
            paramNames,
            regex
        }

        return handler;
    }

    /**
     * Endpoint with method DELETE
     * 
     * The DELETE HTTP request method sends data to the server for deleting a data.
     * @param path route path
     * @param controller route request controller
     * 
     * @example
     * 
     * router.delete("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
     *  res.send("Hello World");
     * });
     */
    public delete<Path extends string>(path: Path, controller: FuncController<RouteParams<Path>>) {
        if (this.routes.DELETE[path]) {
            duplicateError(path, "DELETE")
        }

        path = this.handleRoutePrefix(path) as Path;

        const handler = new AxonRouteHandler(controller);
        const { regex, paramNames } = this.parsePath(path);

        this.routes.DELETE[path] = {
            handler,
            paramNames,
            regex
        }

        return handler;
    }

    /**
     * Endpoint with method OPTIONS
     * 
     * The HTTP OPTIONS method returns a listing of which HTTP methods are supported and allowed.
     * @param path route path
     * @param controller route request controller
     * 
     * @example
     * 
     * router.options("/user/{param}(regex)", (req: Request<{ param: string }>, res: Response) => {
     *  res.send("Hello World");
     * });
     */
    public options<Path extends string>(path: Path, controller: FuncController<RouteParams<Path>>) {
        if (this.routes.OPTIONS[path]) {
            duplicateError(path, "OPTIONS")
        }

        path = this.handleRoutePrefix(path) as Path;

        const handler = new AxonRouteHandler(controller);
        const { regex, paramNames } = this.parsePath(path);

        this.routes.OPTIONS[path] = {
            handler,
            paramNames,
            regex
        }

        return handler;
    }

    public exportRoutes() {
        return this.routes
    }

    /**
     * Manually parses the route path.
     *
     * Supports dynamic segments in two formats:
     *
     *  - {name} for a default dynamic segment (matches anything except '/')
     *  - {name}(regex) to specify a custom regex pattern
     *
     * Example routes:
     *
     *   - /api/v1/{name}(\\d+)/user/{id}(\\d+)  → req.params is { name: string; id: string }
     *   - /api/v1/{name}(\\d+)/user/{id}          → req.params is { name: string; id: string }
     *   - /api/v1/{name}/user/{id}(\\d+)           → req.params is { name: string; id: string }
     */
    private parsePath(path: string): { regex: RegExp; paramNames: string[] } {
        let regexString = '^';
        const paramNames: string[] = [];
        let i = 0;
        while (i < path.length) {
            if (path[i] === '{') {
                
                const endBrace = path.indexOf('}', i);
                if (endBrace === -1) {
                    throw new Error("Unclosed parameter brace in route: " + path);
                }
                
                const paramName = path.slice(i + 1, endBrace);
                paramNames.push(paramName);
                i = endBrace + 1;
                
                if (i < path.length && path[i] === '(') {
                    const endParen = path.indexOf(')', i);
                    if (endParen === -1) {
                        throw new Error("Unclosed custom regex in route: " + path);
                    }
                    const customRegex = path.slice(i + 1, endParen);
                    regexString += `(${customRegex})`;
                    i = endParen + 1;
                } else {
                    
                    regexString += '([^/]+)';
                }
            } else {
                
                const nextBrace = path.indexOf('{', i);
                const literal = nextBrace === -1 ? path.slice(i) : path.slice(i, nextBrace);
                regexString += this.escapeRegExp(literal);
                i = nextBrace === -1 ? path.length : nextBrace;
            }
        }
        regexString += '/?$'; // Make trailing slash optional
        return { regex: new RegExp(regexString), paramNames };
    }

    private escapeRegExp(text: string): string {
        
        return text.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
    }

    private handleRoutePrefix(path: string) {
        if (this.prefix) {
            path = addRoutePrefix(path, this.prefix)
        }

        if (path[0] !== "/")
            path = `/${path}`

        if (path[path.length - 1] === "/")
            path = path.slice(0, -1)

        if (path.includes("//")) {
            logger.warn(`Route path "${path}" contains multiple consecutive slashes. This is not recommended and may cause issues.`);
        }

        return path;
    }
}

export default AxonRouter;