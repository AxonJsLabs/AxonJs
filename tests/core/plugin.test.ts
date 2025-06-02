import { Axon } from "../../src";
import { PluginLoader } from "../../src/core/plugin/PluginLoader";
import { DevelopmentPlugin } from "./plugin/DevelopmentPlugin";
import { ProductionPlugin } from "./plugin/ProductionPlugin";
import { GlobalPlugin } from "./plugin/GlobalPlugin";
import { NoModePlugin } from "./plugin/NoModePlugin";

describe('Axon plugin system tests', async () => {
    const globalPlugin = new GlobalPlugin();
    const productionPlugin = new ProductionPlugin();
    const developmentPlugin = new DevelopmentPlugin();
    const nomodePlugin = new NoModePlugin();

    const pluginLoader = new PluginLoader();

    await pluginLoader.loadPlugin(globalPlugin);
    await pluginLoader.loadPlugin(productionPlugin);
    await pluginLoader.loadPlugin(developmentPlugin);
    await pluginLoader.loadPlugin(nomodePlugin);

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

    // test('Should PluginLoader return all plugins', () => {
    //     expect(pluginLoader.getPlugins()).toBe("both");
    // });
});
