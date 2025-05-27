import { Axon } from "../../src";
import { DevelopmentPlugin } from "./plugin/DevelopmentPlugin";
import { ProductionPlugin } from "./plugin/ProductionPlugin";
import { GlobalPlugin } from "./plugin/GlobalPlugin";

describe('Axon plugin system (v0.0.1)', () => {
    const globalPlugin = new GlobalPlugin();
    const productionPlugin = new ProductionPlugin();
    const developmentPlugin = new DevelopmentPlugin();

    const core = Axon();
    const TEST_PORT = 19877; // Use a high port number to avoid conflicts  
    const TEST_HOST = '127.0.0.1';

    beforeAll(() => {
        core.loadPlugin(globalPlugin);
        core.loadPlugin(productionPlugin);
        core.loadPlugin(developmentPlugin);

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
});
