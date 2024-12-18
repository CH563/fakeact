import ora from 'ora';
import chalk from 'chalk';
import { getRandomInt, sleep } from '../utils/helpers.js';
import crypto from 'crypto';

interface AppConfig {
    shouldExit: () => boolean;
}

// 生成随机名字
function generateRandomName(): string {
    const names = ['james', 'john', 'robert', 'michael', 'william', 'david', 'richard', 'joseph'];
    return names[Math.floor(Math.random() * names.length)];
}

// 生成随机的密码和对应的哈希
function genPassAndHash(): [string, string] {
    const name = generateRandomName();
    const num = String(Math.floor(Math.random() * 99)).padStart(2, '0');
    const pass = `${name}${num}`;
    const hash = crypto.createHash('sha256').update(pass).digest('hex');
    return [pass, hash];
}

// 生成指定长度的随机十六进制字符串
function genHexString(length: number): string {
    const chars = '0123456789abcdef';
    return Array(length)
        .fill(0)
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join('');
}

// 生成彩虹色字符串
function rainbow(str: string): string {
    const colors = [
        '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', 
        '#0000FF', '#4B0082', '#9400D3'
    ];
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const colorIndex = Math.floor((i / str.length) * colors.length);
        result += chalk.hex(colors[colorIndex])(str[i]);
    }
    return result;
}

class HashGuesser {
    private hash: string;
    private guesses: string;
    private progress: number;
    private len: number;

    constructor(hash: string) {
        this.hash = hash;
        this.guesses = '';
        this.progress = 0;
        this.len = hash.length;
    }

    tickGuess() {
        if (!this.completed()) {
            this.guesses = genHexString(this.len);
            while (!this.completed() && this.guesses[this.progress] === this.hash[this.progress]) {
                this.progress++;
            }
        }
    }

    completed(): boolean {
        return this.progress === this.len;
    }

    toString(): string {
        const progress = this.progress;
        const done = this.hash.slice(0, progress);
        const undone = this.guesses.slice(progress);
        return chalk.green(done) + chalk.red(undone);
    }
}

async function bruteforce(speedFactor = 1, config?: AppConfig) {
    // Generate random number of parallel tasks
    const nParallel = getRandomInt(2, 10);
    const passHashPairs = Array(nParallel).fill(0).map(() => genPassAndHash());

    process.stdout.write('=> Hashes to decrypt\n');
    await sleep(500);

    for (const [_, hash] of passHashPairs) {
        process.stdout.write(`  ${hash}\n`);
    }
    await sleep(500);

    // Rainbow Table extraction simulation
    const message = '=> Extracting Rainbow Table';
    const width = 30;
    const millisWait = 2500;
    const fillChar = '=';
    const spinnerChars = ['|', '/', '-', '\\'];
    let spinnerIdx = 0;

    for (let i = 0; i < width; i++) {
        const spinner = i === width - 1 ? fillChar : spinnerChars[spinnerIdx];
        const progress = fillChar.repeat(i);
        const spaces = ' '.repeat(width - i - 1);
        const progressBar = progress + spinner + spaces;
        const rainbowProgress = rainbow(progressBar);
        
        process.stdout.write(`\r${message} [${rainbowProgress}]`);
        
        await sleep(millisWait / width);
        spinnerIdx = (spinnerIdx + 1) % spinnerChars.length;

        if (config?.shouldExit()) {
            return;
        }
    }
    process.stdout.write('\n');

    process.stdout.write('=> Begin matching\n');
    await sleep(500);

    // Show the progress of "decryption"
    const guessers = passHashPairs.map(([_, hash]) => new HashGuesser(hash));
    let first = true;

    while (!guessers.every(g => g.completed())) {
        if (!first) {
            process.stdout.write(`\x1B[${guessers.length - 1}A`);
        }
        first = false;

        for (let i = 0; i < guessers.length; i++) {
            const guesser = guessers[i];
            guesser.tickGuess();
            process.stdout.write(`\r :: ${guesser.toString()} ::`);
            
            if (i !== guessers.length - 1) {
                process.stdout.write('\n');
            }
        }

        await sleep(10);

        if (config?.shouldExit()) {
            return;
        }
    }

    process.stdout.write('\n=> Match found\n');

    for (const [pass, hash] of passHashPairs) {
        process.stdout.write(`  ${hash}:${chalk.bold(pass)}\n`);
    }
}
bruteforce.signature = './bruteforce.sh ./hashes.txt';
export default bruteforce;