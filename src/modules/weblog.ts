import { loadData, EXTENSIONS_LIST } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

// Constants
const HTTP_CODES = [200, 201, 400, 401, 403, 404, 500, 502, 503];

interface AppConfig {
    shouldExit: boolean;
}

function generateFilePath(packagesList: string[], extensionsList: string[]): string {
    const dirCount = getRandomInt(1, 3);
    const dirs = Array(dirCount).fill(0).map(() => faker.word.sample());
    const pkg = packagesList[getRandomInt(0, packagesList.length - 1)];
    const extension = extensionsList[getRandomInt(0, extensionsList.length - 1)];
    
    return `/${dirs.join('/')}/${pkg}${extension}`;
}

async function weblog(speedFactor: 1, config: AppConfig = { shouldExit: false }): Promise<void> {
    // Load package data
    const PACKAGES_LIST = await loadData('packages');
    
    // Generate random number of lines
    const numLines = getRandomInt(50, 200);
    let burstMode = false;
    let countBurstLines = 0;
    
    for (let i = 0; i < numLines; i++) {
        if (config.shouldExit) {
            return;
        }

        // Generate IP address (randomly choose between IPv4 and IPv6)
        const ip = Math.random() > 0.5 ? 
            faker.internet.ipv4() : 
            faker.internet.ipv6().toLowerCase();

        // Generate timestamp
        const date = dayjs().format('D/MMM/YYYY:HH:mm:ss ZZ');

        // Generate request details
        const method = 'GET';
        const path = generateFilePath(PACKAGES_LIST, EXTENSIONS_LIST);
        const httpCode = HTTP_CODES[getRandomInt(0, HTTP_CODES.length - 1)];
        const size = getRandomInt(99, 5_000_000);
        const referrer = '-';
        const userAgent = faker.internet.userAgent();

        // Format log line
        const line = `${ip} - - [${date}] "${method} ${path} HTTP/1.0" ${httpCode} ${size} "${referrer}" "${userAgent}"`;

        // Calculate sleep time
        let lineSleepLength = getRandomInt(50, 1000);
        const burstLines = getRandomInt(10, 50);

        if (burstMode && countBurstLines < burstLines) {
            lineSleepLength = 60;
        } else if (countBurstLines === burstLines) {
            burstMode = false;
            countBurstLines = 0;
        } else if (!burstMode) {
            burstMode = Math.random() < 1/20; // 5% chance to enter burst mode
        }

        // Print line
        console.log(line);

        if (burstMode) {
            countBurstLines++;
        }

        // Apply speed factor to sleep time
        await sleep(lineSleepLength / speedFactor);
    }
}

export default weblog;