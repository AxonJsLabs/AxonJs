import { AxonCore, AxonPlugin, PluginMode, Router } from "../../../src";

export class ProductionPlugin implements AxonPlugin {
    version = "1.0.0"
    name = "production plugin"
    mode: PluginMode = "production"

    async init(core: AxonCore): Promise<void> {
        const router = Router();

        router.get("/production-plugin", async (req, res) => res.status(200).body({}));

        core.loadRoute(router);
    }
}