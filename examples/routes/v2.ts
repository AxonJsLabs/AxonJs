import { Router, Response, Request } from "../../src";
import { BaseController } from "../../src/core/services/controller.service";

// you can set route prefix in Router
const router = Router("/api/v1")

router.get('/{name}([a-z]+)/{id}(\\d+)', async (req, res) => {
    return res.status(200).body({
        url: req.url,
        params: req.params,
        query: req.query
    })
})

class AuthController extends BaseController {
    /**
     * Login user
     */
    login() {

    }

    /**
     * Logout user
     */
    logout() {

    }

    /**
     * Get user
     */
    getUser() {

    }
}

router.get('/login', [AuthController, "login"]);

export { router as v2Routes }