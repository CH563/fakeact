import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, sleep, getRandomItem } from '../utils/helpers.js';

interface AppConfig {
    shouldExit: boolean;
}

interface DownloadStats {
    speed: number;
    downloaded: number;
    total: number;
    eta: string;
}

const WARNING_TYPES = [
    'WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken',
    'WARNING: You are using pip version 21.2.4; however, version 23.3.1 is available.',
    'WARNING: Package {package} requires Python >=3.7, but you have Python 3.6.9',
    'WARNING: Ignoring invalid distribution -ip ({package})',
    'WARNING: {package} was installed using pip from legacy index',
    'WARNING: Directory {package}-0.0.0.dist-info is not owned by current user',
];

const ERROR_MESSAGES = [
    'ERROR: Could not find a version that satisfies the requirement {package}',
    'ERROR: Invalid requirement: \'{package}\'',
    'ERROR: Hash verification failed for {package}',
];

const INSTALL_STATES = [
    'Collecting {package}',
    'Downloading {package}-{version}.whl ({size})',
    'Installing collected packages: {package}',
    'Successfully installed {package}-{version}',
];

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatSpeed(bytesPerSec: number): string {
    return `${(bytesPerSec / (1024 * 1024)).toFixed(1)} MB/s`;
}

function formatTime(seconds: number): string {
    if (seconds < 60) return `0:00:${seconds > 9?seconds:`0${seconds}`}`;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `0:${minutes > 9?minutes:`0${minutes}`}:${seconds > 9?seconds:`0${seconds}`}`;
}

function generateProgressBar(progress: number, width: number = 30): string {
    const filled = Math.round(progress * width);
    const empty = width - filled;
    const bar = chalk.red('━'.repeat(filled)) + chalk.dim('━'.repeat(Math.max(0, empty)));
    if (empty < 1) return `  ${chalk.green('━'.repeat(filled))}`
    return `  ${bar}`;
}

async function simulateDownloadProgress(totalSize: number, duration: number): Promise<void> {
    const updateInterval = 100; // Update every 100ms
    const steps = duration / updateInterval;
    let lastSteps = steps;
    let downloaded = 0;
    
    for (let i = 0; i < steps; i++) {
        if (i < steps - 1) {
            // Simulate variable download speed
            const progress = i / steps;
            const speedVariation = 1 + Math.sin(progress * Math.PI) * 0.5; // Speed varies sinusoidally
            const increment = (totalSize / steps) * speedVariation;
            downloaded = Math.min(totalSize, downloaded + increment);
            
            const stats: DownloadStats = {
                speed: (increment / updateInterval) * 1000, // Bytes per second
                downloaded,
                total: totalSize,
                eta: formatTime(Math.ceil((totalSize - downloaded) / (increment / updateInterval) / 1000))
            };
            
            const progress_line = [
                generateProgressBar(downloaded / totalSize),
                chalk.green(`${formatBytes(downloaded)}/${formatBytes(totalSize)}`),
                chalk.red(`${formatSpeed(stats.speed)}`),
                `eta ${chalk.cyan(stats.eta)}`
            ].join(' ');
            
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(progress_line);
            lastSteps = stats.speed;
        }
        
        await sleep(updateInterval);
    }
    
    // Complete the progress bar
    const final_line = `${generateProgressBar(1)} ${chalk.green(`${formatBytes(totalSize)}/${formatBytes(totalSize)}`)} ${chalk.red(formatSpeed(lastSteps))} eta ${chalk.cyan('0:00:00')}`;
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(final_line + '\n');
}

async function generateRandomVersion(): Promise<string> {
    const major = getRandomInt(0, 10);
    const minor = getRandomInt(0, 20);
    const patch = getRandomInt(0, 100);
    return `${major}.${minor}.${patch}`;
}

async function formatMessage(template: string, packageName: string): Promise<string> {
    const version = await generateRandomVersion();
    const size = getRandomInt(100 * 1024, 10 * 1024 * 1024); // Random size between 100KB and 10MB
    return template
        .replace('{package}', packageName)
        .replace('{version}', version)
        .replace('{size}', formatBytes(size))
        .replace('{total_size}', size.toString());
}

async function pip( speedFactor: number = 1, config: AppConfig = { shouldExit: false }): Promise<void> {
    const PACKAGES_LIST: string[] = await loadData('pypi');
    const numPackages = getRandomInt(18, 36);
    const selectedPackages = new Set<string>();
    
    while (selectedPackages.size < numPackages) {
        selectedPackages.add(getRandomItem(PACKAGES_LIST));
    }

    console.log(chalk.cyan('Collecting packages from requirements.txt...'));
    await sleep(getRandomInt(100, 500) / speedFactor);

    console.log(chalk.dim('Resolving dependencies...'));
    await sleep(getRandomInt(100, 500) / speedFactor);

    for (const packageName of selectedPackages) {
        if (config.shouldExit) return;

        if (Math.random() < 0.2) {
            const warning = await formatMessage(getRandomItem(WARNING_TYPES), packageName);
            console.log(chalk.yellow(warning));
            await sleep(getRandomInt(100, 500) / speedFactor);
        }

        console.log(await formatMessage(INSTALL_STATES[0], packageName));
        
        // Download simulation with progress bar
        const downloadMsg = await formatMessage(INSTALL_STATES[1], packageName);
        console.log(chalk.dim(downloadMsg));
        
        const totalSize = getRandomInt(100 * 1024, 10 * 1024 * 1024); // Random size between 100KB and 10MB
        await simulateDownloadProgress(totalSize, getRandomInt(2000, 5000) * speedFactor);

        if (Math.random() < 0.05) {
            const error = await formatMessage(getRandomItem(ERROR_MESSAGES), packageName);
            console.log(chalk.red(error));
            continue;
        }

        console.log(await formatMessage(INSTALL_STATES[2], packageName));
        await sleep(getRandomInt(100, 500) / speedFactor);
        
        console.log(chalk.green(await formatMessage(INSTALL_STATES[3], packageName)));
        await sleep(getRandomInt(100, 500) / speedFactor);
    }

    console.log(chalk.green(`\nSuccessfully installed ${selectedPackages.size} packages`));
}

pip.signature = 'pip install -r requirements.txt';

export default pip;