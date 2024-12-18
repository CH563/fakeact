export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function chooseMultipleRandom<T>(arr: T[], n: number): T[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

export async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Helper function to generate random hex strings
export function generateHexString(length: number): string {
    const chars = '0123456789abcdef';
    return Array.from(
        { length }, 
        () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');
}

// Helper function to generate normal distribution random numbers
export function normalDistribution(mean: number, standardDeviation: number): number {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return mean + standardDeviation * z0;
}

// 生成随机的构建时间
export const getRandomBuildTime = () => {
    return (Math.random() * 2 + 0.5).toFixed(2);
};

// 生成随机的文件大小
export const getRandomFileSize = () => {
    return (Math.random() * 500 + 50).toFixed(1);
};

export async function getCurrentTime(): Promise<string> {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
}

function chiSquaredRandom(degreesOfFreedom: number): number {
    let sum = 0;
    for (let i = 0; i < degreesOfFreedom; i++) {
        const u = Math.random();
        const standardNormal = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
        sum += standardNormal * standardNormal;
    }
    return sum;
}

function exponentialRandom(lambda: number): number {
    return -Math.log(1 - Math.random()) / lambda;
}

export function genPackageVersion(): string {
    const major = Math.floor(exponentialRandom(2.0));
    const minor = Math.floor(10.0 * chiSquaredRandom(1.0));
    const patch = Math.floor(10.0 * chiSquaredRandom(1.0));
    return `${major}.${minor}.${patch}`;
}

/**
 * Helper function to get random unique items from an array
 */
export function getRandomUniqueItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const executeNTimes = async (n, callback): Promise<void> => {
    if (typeof n !== 'number' || n < 0) {
        throw new Error('times must be a number greater or equal to 0');
    }

    if (typeof callback !== 'function') {
        throw new Error('callback must be a function');
    }

    if (n === 0) {
        // 无限循环
        while (true) {
            await callback();
        }
    } else {
        for (let i = 0; i < n; i++) {
            await callback();
        }
    }
}