import { AxonCore, AxonPlugin, PluginMode, Router } from "../../../src";

export class NoModePlugin implements AxonPlugin {
    version = "1.0.0"
    name = "NoModePlugin plugin"
    mode: any = ""

    async init(core: AxonCore): Promise<void> {
        const router = Router();

        router.get("/NoModePlugin-plugin", async (req, res) => res.status(200).body({}));

        core.loadRoute(router);
    }
}