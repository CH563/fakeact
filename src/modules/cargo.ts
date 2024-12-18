import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';

// Helper function to generate version numbers similar to Rust implementation
function generatePackageVersion(): string {
    // Simplified version of chi-squared and exponential distributions
    // Using basic random number generators as approximation
    const expSample = () => -Math.log(1 - Math.random()) / 2; // Exponential with lambda=2
    const chiSquaredSample = () => Math.pow(Math.random(), 2); // Simplified chi-squared

    const major = Math.floor(expSample());
    const minor = Math.floor(10 * chiSquaredSample());
    const patch = Math.floor(10 * chiSquaredSample());

    return `${major}.${minor}.${patch}`;
}

interface Package {
    name: string;
    version: string;
}

async function cargo(speedFactor = 1): Promise<void> {
    // Load package list data
    const PACKAGES_LIST = await loadData('packages');
    
    // Generate random number of packages (between 10 and 100)
    const numPackages = getRandomInt(10, 100);
    
    // Randomly select packages without repetition
    const chosenPackages: Package[] = [];
    const shuffledPackages = [...PACKAGES_LIST].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < Math.min(numPackages, shuffledPackages.length); i++) {
        chosenPackages.push({
            name: shuffledPackages[i],
            version: generatePackageVersion()
        });
    }

    const stages = ['Downloading', 'Compiling'];
    const startTime = Date.now();

    // Process each stage
    for (const stage of stages) {
        for (const pkg of chosenPackages) {
            // Random sleep duration between 100ms and 2000ms
            const sleepDuration = getRandomInt(100, 2000) / speedFactor;
            
            // Print current package status
            console.log(`${chalk.green.bold(stage.padStart(12))} ${pkg.name} v${pkg.version}`);
            
            await sleep(sleepDuration);
        }
    }

    // Calculate elapsed time
    const elapsed = (Date.now() - startTime) / 1000;
    
    // Print completion message
    console.log(
        `${chalk.green.bold('Finished'.padStart(12))} release [optimized] target(s) in ${elapsed.toFixed(2)} secs`
    );
}
cargo.signature = 'cargo run';
export default cargo;