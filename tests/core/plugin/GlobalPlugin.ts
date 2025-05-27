import { AxonCore, AxonPlugin, PluginMode, Router } from "../../../src";

export class GlobalPlugin implements AxonPlugin {
    version = "1.0.0"
    name = "global plugin"
    mode: PluginMode = "both"

    async init(core: AxonCore): Promise<void> {
        const router = Router();

        router.get("/global-plugin", async (req, res) => res.status(200).body({}));

        core.loadRoute(router);
    }
}