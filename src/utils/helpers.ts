export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
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

export async function getCurrentTime(): Promise<string> {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
}

/**
 * Helper function to get random unique items from an array
 */
export function getRandomUniqueItems<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}