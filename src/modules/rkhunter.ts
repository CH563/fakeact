import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { sleep, chooseMultipleRandom, getRandomItem, genPackageVersion } from '../utils/helpers.js';

interface AppConfig {
    shouldExit: boolean;
}

// Helper function to get current date in the required format
function getCurrentDate(): string {
    return new Date().toLocaleString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        hour12: true
    });
}

async function rkhunter(speedFactor: number = 1, config: AppConfig = { shouldExit: false }): Promise<void> {
    const [RKHUNTER_CHECKS_LIST, RKHUNTER_ROOTKITS_LIST, RKHUNTER_TASKS_LIST] = await Promise.all([
        loadData('rkhunter_checks'),
        loadData('rkhunter_rootkits'),
        loadData('rkhunter_tasks')
    ]);

    const version = genPackageVersion();
    console.log(`Running Rootkit Hunter version ${version} on localhost\n`);
    await sleep(500 / speedFactor);

    console.log(`Info: Start date is ${getCurrentDate()}\n`);
    console.log('Info: Detected operating system is \'Linux\'');
    console.log(`Found O/S name: Ubuntu ${genPackageVersion()}`);
    await sleep(500 / speedFactor);

    // Print initial configuration information
    console.log('Info: Environment shell is /bin/bash; rkhunter is using dash');
    console.log('Info: Using configuration file \'/etc/rkhunter.conf\'');
    console.log('Info: Installation directory is \'/usr\'');
    console.log('Info: Using language \'en\'');
    console.log('Info: Using \'/var/lib/rkhunter/db\' as the database directory');
    console.log('Info: Using \'/usr/share/rkhunter/scripts\' as the support script directory');
    console.log('Info: Using \'/var/lib/rkhunter/db\' as the database directory');
    console.log('Info: Using \'/usr/share/rkhunter/scripts\' as the support script directory');
    console.log('Info: Using \'/usr/local/sbin /usr/local/bin /usr/sbin /usr/bin /sbin /bin /usr/games /usr/local/games /snap/bin /usr/libexec\' as the command directories');
    console.log('Info: Using \'/var/lib/rkhunter/tmp\' as the temporary directory');
    console.log('Info: No mail-on-warning address configured\n');

    await sleep(500 / speedFactor);
    console.log('Checking if the O/S has changed since last time...');
    await sleep(500 / speedFactor);
    console.log('Info: Nothing seems to have changed.');
    console.log('Info: Locking is not being used\n');

    await sleep(500 / speedFactor);
    console.log('Starting system checks...\n');

    while (!config.shouldExit) {
        const task = getRandomItem(RKHUNTER_TASKS_LIST);
        console.log(task);

        const isRootkit = Math.random() < 0.5;
        const rkPad = isRootkit ? '  ' : '';
        const rootkit = getRandomItem(RKHUNTER_ROOTKITS_LIST);

        if (isRootkit) {
            console.log(`  Checking for ${rootkit}...`);
        }

        let rootkitFound = false;
        const numChecks = Math.floor(Math.random() * 28) + 2; // 2 to 30 checks
        const checks = chooseMultipleRandom(RKHUNTER_CHECKS_LIST, numChecks).sort();

        // Calculate padding for checks
        let checkPad = Math.max(40, ...checks.map(check => check.length));

        for (const check of checks) {
            await sleep((Math.random() * 800 + 200) / speedFactor); // 200 to 1000ms
            const checkPositive = Math.random() < 0.05; // 5% chance of positive check
            if (checkPositive) {
                rootkitFound = true;
            }

            let checkStatus = checkPositive ? 
                chalk.red('Found') : 
                'Not found';

            if (Math.random() < 0.01) { // 1% chance of skipped
                checkStatus = 'Skipped';
            }

            console.log(`${rkPad}  ${check.padEnd(checkPad)} [ ${checkStatus} ]`);
        }

        if (isRootkit) {
            checkPad += 2;
            console.log(`  ${rootkit.padEnd(checkPad)} [ ${rootkitFound ? chalk.red('Found') : 'Not found'} ]`);
        }

        console.log();
        await sleep(500 / speedFactor);
    }
}

rkhunter.signature = 'rkhunter --check';
export default rkhunter;