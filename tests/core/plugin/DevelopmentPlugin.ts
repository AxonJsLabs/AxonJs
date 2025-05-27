import { AxonCore, AxonPlugin, PluginMode, Router } from "../../../src";

export class DevelopmentPlugin implements AxonPlugin {
    version = "1.0.0"
    name = "development plugin"
    mode: PluginMode = "development"

    async init(core: AxonCore): Promise<void> {
        const router = Router();

        router.get("/development-plugin", async (req, res) => res.status(200).body({}));

        core.loadRoute(router);
    }
}