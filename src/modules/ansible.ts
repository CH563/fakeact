import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';

// 模拟正态分布
function normalDistribution(mean: number, stdDev: number): number {
    const u1 = Math.random();
    const u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stdDev + mean;
}

// 生成随机IPv4地址
function generateIPv4(): string {
    return Array(4).fill(0)
        .map(() => Math.floor(Math.random() * 256))
        .join('.');
}

// 生成随机IPv6地址
function generateIPv6(): string {
    return Array(8).fill(0)
        .map(() => Math.floor(Math.random() * 65536).toString(16).padStart(4, '0'))
        .join(':').toLowerCase();
}

// 生成随机用户名
function generateUsername(): string {
    const prefixes = ['server', 'host', 'node', 'web'];
    const suffixes = ['prod', 'dev', 'staging', 'test'];
    const numbers = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${numbers}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
}

// 获取终端宽度
function getTerminalWidth(): number {
    return process.stdout.columns || 80;
}

interface HostStatus {
    text: string;
    color: 'green' | 'yellow' | 'red' | 'cyan';
}

async function processHosts(hosts: string[], isGather: boolean, speedFactor: number = 1): Promise<void> {
    const globalOutcome = getRandomInt(1, 20);
    const latencyMean = 500 / speedFactor;
    const latencyStdDev = 100 / speedFactor;

    for (const host of hosts) {
        const hostOutcome = getRandomInt(1, 50);
        let status: HostStatus;

        if (isGather) {
            status = { text: `ok: [${host}]`, color: 'green' };
        } else {
            switch (globalOutcome) {
                case 1:
                    status = { text: `skipping: [${host}]`, color: 'cyan' };
                    break;
                case 2:
                    status = { text: `failed: [${host}]`, color: 'red' };
                    break;
                case 3:
                    status = { text: `changed: [${host}]`, color: 'yellow' };
                    break;
                default:
                    if (hostOutcome === 1) {
                        status = { text: `skipping: [${host}]`, color: 'cyan' };
                    } else if (hostOutcome === 2) {
                        status = { text: `failed: [${host}]`, color: 'red' };
                    } else if (hostOutcome >= 3 && hostOutcome <= 5) {
                        status = { text: `changed: [${host}]`, color: 'yellow' };
                    } else {
                        status = { text: `ok: [${host}]`, color: 'green' };
                    }
            }
        }

        console.log(chalk[status.color](status.text));
        
        const sleepTime = Math.round(normalDistribution(latencyMean, latencyStdDev));
        await sleep(sleepTime);
    }
}

async function ansible(speedFactor = 1): Promise<void> {
    try {
        // 加载角色和任务列表
        const ANSIBLE_ROLES_LIST = await loadData('ansible_roles');
        const ANSIBLE_TASKS_LIST = await loadData('ansible_tasks');

        const termWidth = getTerminalWidth();
        const username = generateUsername();
        
        // 显示 PLAY 信息
        const playText = `PLAY [setup ${username}] `;
        console.log(playText.padEnd(termWidth, '*'));
        console.log();
        await sleep(getRandomInt(1000, 3000) / speedFactor);

        // 生成主机列表
        const numIpv4Hosts = getRandomInt(1, 20);
        const numIpv6Hosts = getRandomInt(1, 20);
        const ipv4Hosts = Array(numIpv4Hosts).fill(0).map(() => generateIPv4());
        const ipv6Hosts = Array(numIpv6Hosts).fill(0).map(() => generateIPv6());
        const hosts = [...ipv4Hosts, ...ipv6Hosts].sort(() => Math.random() - 0.5);

        // Gathering Facts
        const gatheringText = 'TASK [Gathering Facts] ';
        await sleep(getRandomInt(1000, 3000) / speedFactor);
        console.log(gatheringText.padEnd(termWidth, '*'));
        await processHosts(hosts, true, speedFactor);
        await sleep(getRandomInt(1000, 3000) / speedFactor);

        // 处理角色和任务
        const numRoles = getRandomInt(3, 10);
        for (let i = 0; i < numRoles; i++) {
            const role = ANSIBLE_ROLES_LIST[Math.floor(Math.random() * ANSIBLE_ROLES_LIST.length)];
            const numTasks = getRandomInt(3, 10);

            for (let j = 0; j < numTasks; j++) {
                console.log();
                const task = ANSIBLE_TASKS_LIST[Math.floor(Math.random() * ANSIBLE_TASKS_LIST.length)];
                const taskText = `TASK [${role} : ${task}] `;
                console.log(taskText.padEnd(termWidth, '*'));
                await sleep(getRandomInt(1000, 3000) / speedFactor);
                await processHosts(hosts, false, speedFactor);
            }
        }
    } catch (error) {
        console.error(chalk.red('Error during ansible execution:'), error);
        throw error;
    }
}

export default ansible;