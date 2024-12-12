export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
