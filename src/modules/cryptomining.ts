import chalk from 'chalk';
import { getRandomInt, sleep, generateHexString, normalDistribution, getCurrentTime } from '../utils/helpers.js';

interface MiningStats {
    solutionsFound: number;
    startTime: Date;
    totalHashrate: number;
}

async function cryptomining(speedFactor: number = 1): Promise<void> {
    // Initialize random parameters similar to Rust version
    const numLines = getRandomInt(300, 1000);
    const newJobEveryNLines = getRandomInt(20, 50);
    const approximateMhsPerGpu = getRandomInt(1, 99);
    const numGpus = getRandomInt(1, 8);
    const solutionFoundEveryNLines = getRandomInt(80, 200);

    let remainingUntilNewJob = newJobEveryNLines;
    let remainingUntilNextSolution = solutionFoundEveryNLines;
    let numSolutionsFound = 0;
    const startTime = new Date();

    const stats: MiningStats = {
        solutionsFound: 0,
        startTime,
        totalHashrate: 0
    };

    for (let i = 0; i < numLines; i++) {
        const currentTime = await getCurrentTime();
        const timeFormatted = chalk.magenta(currentTime);
        const separator = chalk.black('|');

        if (remainingUntilNewJob === 0) {
            // New job received
            remainingUntilNewJob = newJobEveryNLines;
            const info = chalk.cyan.bold('ℹ');
            
            console.log(
                `${info}  ${timeFormatted}${separator}${chalk.blue('stratum')}    ` +
                `Received new job #${generateHexString(8)}  ` +
                `seed: #${generateHexString(32)}  ` +
                `target: #${generateHexString(24)}`
            );
        } else if (remainingUntilNextSolution === 0) {
            // Solution found
            remainingUntilNextSolution = solutionFoundEveryNLines;
            numSolutionsFound++;
            const info = chalk.cyan.bold('ℹ');

            console.log(
                `${info}  ${timeFormatted}${separator}${chalk.blue('CUDA0')}     ` +
                `Solution found; Submitted to stratum.buttcoin.org`
            );
            console.log(
                `${info}  ${timeFormatted}${separator}${chalk.blue('CUDA0')}     ` +
                `Nonce: 0x${generateHexString(16)}`
            );
            console.log(
                `${info}  ${timeFormatted}${separator}${chalk.blue('stratum')}    ` +
                `${chalk.green('Accepted.')}`
            );
        } else {
            // Regular mining progress
            remainingUntilNewJob--;
            remainingUntilNextSolution--;
            const info = chalk.green('m');

            let totalMhs = 0;
            let gpuStats = '';

            // Calculate hash rates for each GPU
            for (let gpu = 0; gpu < numGpus; gpu++) {
                const actualMhsPerGpu = approximateMhsPerGpu + 
                    normalDistribution(0, 0.2);
                gpuStats += `gpu/${gpu} ${chalk.cyan(actualMhsPerGpu.toFixed(2))} `;
                totalMhs += actualMhsPerGpu;
            }

            // Calculate elapsed time
            const elapsed = new Date().getTime() - startTime.getTime();
            const hours = Math.floor(elapsed / (1000 * 60 * 60));
            const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
            const elapsedFormatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            const speed = `Speed ${chalk.cyan.bold(totalMhs.toFixed(2))} Mh/s`;

            console.log(
                `${info}  ${timeFormatted}${separator}${chalk.blue('cryptominer')} ` +
                `${speed}    ${gpuStats}  ` +
                `[A${numSolutionsFound}+0:R0+0:F0] Time: ${elapsedFormatted}`
            );
        }

        // Simulate mining delay
        await sleep(300 / speedFactor);
    }
}
cryptomining.signature = './cryptominer.sh --gpu all --provider stratum';
export default cryptomining;