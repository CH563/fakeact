import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { sleep, chooseMultipleRandom, getRandomItem, genPackageVersion } from '../utils/helpers.js';
import { randomInt } from 'crypto';

interface AppConfig {
    shouldExit: boolean;
}

// Constants
const SPINNERS: string[] = ['/', '-', '\\', '|'];
const SPINNER_SLEEP: number = 50;
const TEXT_SLEEP: number = 15;
const MAX_SPINNER_LOOPS: number = 20;

// Helper function to simulate delayed printing
async function dprint(text: string, delay: number): Promise<void> {
    for (const char of text) {
        process.stdout.write(char);
        await sleep(delay);
    }
}

// Helper function to print with newline
async function print(text: string): Promise<void> {
    process.stdout.write(text);
}

// Helper function to print newline
async function newline(): Promise<void> {
    process.stdout.write('\n');
}

// Main simcity function
async function simcity(speedFactor: number = 1, config: AppConfig = { shouldExit: false }): Promise<void> {
    const SIMCITY_LIST = await loadData('simcity');
    let lastSimcity = '';

    for (let i = 0; i < 500; i++) {
        const spinnerLoops = Math.floor(Math.random() * (MAX_SPINNER_LOOPS - 1)) + 1;

        // Select a random message, ensuring it's not the same as the last one
        let currentSimcity;
        do {
            currentSimcity = getRandomItem(SIMCITY_LIST);
        } while (currentSimcity === lastSimcity);
        lastSimcity = currentSimcity;

        // Choose a status/resolution
        const resolutionId = Math.floor(Math.random() * 100) + 1;
        let resolution = 'OK';
        if (resolutionId <= 4) resolution = 'FAIL';
        else if (resolutionId <= 9) resolution = 'YES';
        else if (resolutionId <= 14) resolution = 'SUCCESS';

        // Checkbox states
        const uncheckedCheckbox = '[ ] ';
        const checkedCheckbox = '[o] ';

        // Track first print
        let isFirstPrint = true;

        // Spinner animation loop
        spinnerLoop: for (let j = 0; j < spinnerLoops; j++) {
            for (const spinner of SPINNERS) {
                const msg = `${currentSimcity}... ${spinner}`;

                if (isFirstPrint) {
                    await print(uncheckedCheckbox);
                    await dprint(msg, TEXT_SLEEP);
                    isFirstPrint = false;
                } else {
                    await print(uncheckedCheckbox);
                    await print(msg);
                }

                await sleep(SPINNER_SLEEP);
                await print('\r');

                if (config.shouldExit) {
                    resolution = 'ABORTED';
                    break spinnerLoop;
                }
            }
        }

        // Determine color for final status
        let colorFunc;
        if (resolution === 'FAIL' || resolution === 'ABORTED') {
            colorFunc = chalk.red;
        } else if (resolutionId > 50) {
            colorFunc = chalk.white;
        } else {
            const colorId = Math.floor(Math.random() * 20) + 1;
            if (colorId <= 2) colorFunc = chalk.red;
            else if (colorId <= 4) colorFunc = chalk.green;
            else if (colorId <= 6) colorFunc = chalk.cyan;
            else if (colorId <= 10) colorFunc = chalk.blue;
            else colorFunc = chalk.white;
        }

        // Print final status
        await dprint(checkedCheckbox, 10);
        await sleep(randomInt(10, 100) / speedFactor);
        await print(colorFunc(`${currentSimcity}... ${resolution}`));

        if (config.shouldExit) {
            await print('\nALL DONE\n');
            return;
        }
        await newline();
    }
}

// Export configuration
simcity.signature = './start-sumcity.sh';
export default simcity;