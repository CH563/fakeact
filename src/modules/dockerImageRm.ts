import chalk from 'chalk';
import { sleep, getRandomInt, getRandomItem, generateHexString, getRandomUniqueItems } from '../utils/helpers.js';
import { loadData } from '../utils/dataLoader.js';

interface AppConfig {
    shouldExit: () => boolean;
}

interface DockerImageRmOptions {
    speedFactor?: number;
    config?: AppConfig;
}

async function dockerImageRm(options: DockerImageRmOptions = { speedFactor: 1 }) {
    // Load data lists
    const [DOCKER_PACKAGES_LIST, DOCKER_TAGS_LIST] = await Promise.all([
        loadData('docker_packages'),
        loadData('docker_tags')
    ]);

    // Generate random number of packages to process (between 20 and 100)
    const numPackages = getRandomInt(20, 100);
    
    // Choose random packages without repetition
    const chosenPackages = getRandomUniqueItems(DOCKER_PACKAGES_LIST, numPackages);

    for (const packageName of chosenPackages) {
        // Generate random sleep duration between 500ms and 5000ms
        const sleepLength = getRandomInt(500, 5000) / (options.speedFactor || 1);
        
        // Get random tag from the tags list
        const packageTag = getRandomItem(DOCKER_TAGS_LIST);
        
        // Generate SHA256 hash
        const hash = generateHexString(64);
        
        // Print untagged messages
        console.log(chalk.dim(`Untagged: ${packageName}:${packageTag}`));
        console.log(chalk.dim(`Untagged: ${packageName}:${packageTag}@sha256:${hash}`));
        
        // Generate and print random number of deleted hash messages
        const numHashes = getRandomInt(10, 30);
        for (let i = 0; i < numHashes; i++) {
            const deleteHash = generateHexString(64);
            console.log(chalk.dim(`Deleted: sha256:${deleteHash}`));
        }
        
        // Sleep for random duration
        await sleep(sleepLength);
        
        // Check if should exit
        if (options.config?.shouldExit()) {
            return;
        }
    }
}
dockerImageRm.signature = 'docker image rm 04880416f1bf';
export default dockerImageRm;