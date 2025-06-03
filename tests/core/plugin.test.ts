import { Axon } from "../../src";
import { PluginLoader } from "../../src/core/plugin/PluginLoader";
import { DevelopmentPlugin } from "./plugin/DevelopmentPlugin";
import { ProductionPlugin } from "./plugin/ProductionPlugin";
import { GlobalPlugin } from "./plugin/GlobalPlugin";
import { NoModePlugin } from "./plugin/NoModePlugin";

describe('Axon plugin system tests', () => {
    const globalPlugin = new GlobalPlugin();
    const productionPlugin = new ProductionPlugin();
    const developmentPlugin = new DevelopmentPlugin();
    const nomodePlugin = new NoModePlugin();

    const pluginLoader = new PluginLoader();

    Promise.all([
        pluginLoader.loadPlugin(globalPlugin),
        pluginLoader.loadPlugin(productionPlugin)
    ])

    const core = Axon();
    const TEST_PORT = 19877; // Use a high port number to avoid conflicts  
    const TEST_HOST = '127.0.0.1';

    beforeAll(() => {
        core.loadPlugin(globalPlugin);
        core.loadPlugin(productionPlugin);
        core.loadPlugin(developmentPlugin);
        core.loadPlugin(nomodePlugin);

        return new Promise((resolve) => {
            core.listen(TEST_HOST, TEST_PORT, () => {
                resolve(true);
            });
        });
    });

    afterAll(() => {
        core.close();
    })

    test('Should GlobalPlugin mode to be both', () => {
        expect(globalPlugin.mode).toBe("both");
    })

    test('Should ProductionPlugin mode to be production', () => {
        expect(productionPlugin.mode).toBe("production");
    });

    test('Should DevelopmentPlugin mode to be development', () => {
        expect(developmentPlugin.mode).toBe("development");
    });

    test('Should NoModePlugin mode to be both', () => {
        expect(nomodePlugin.mode).toBe("both");
    });

    test('Should return all loaded plugins', async () => {
        const plugins = await pluginLoader.getPlugins();

        expect(plugins).toEqual(expect.arrayContaining([globalPlugin, productionPlugin]));
    });

    test('Should return loaded production plugins', async () => {
        const plugins = await pluginLoader.getPlugins("production");

        expect(plugins).toEqual(expect.arrayContaining([productionPlugin]));
    });
});
