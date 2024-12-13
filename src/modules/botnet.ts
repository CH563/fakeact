import chalk from 'chalk';
import { getRandomInt, sleep } from '../utils/helpers.js';

interface AppConfig {
    shouldExit: () => boolean;
}

// 终端控制helper函数
const cursorUp = async (lines: number) => {
    process.stdout.write(`\x1b[${lines}A`);
};

const eraseLine = async () => {
    process.stdout.write('\x1b[2K');
};

const print = async (text: string) => {
    process.stdout.write(text);
};

async function botnet(speedFactor = 1, config?: AppConfig) {
    // 生成随机集群数据
    const clusters: number[] = [];
    const numClusters = getRandomInt(8, 17); // 8 to 16 inclusive
    for (let i = 0; i < numClusters; i++) {
        const numNodes = getRandomInt(100, 201); // 100 to 200 inclusive
        clusters.push(numNodes);
    }
    
    // 初始化集群状态
    const onlines = new Array(clusters.length).fill(false);
    const size = clusters.reduce((a, b) => a + b, 0);

    // 建立连接
    let connected = 0;
    while (connected <= size) {
        await print(`\rEstablishing connections: ${connected.toString().padStart(4)}/${size.toString().padStart(4)}`);
        connected++;
        await sleep(Math.pow(Math.random(), 50) * 50 * speedFactor);
    }
    console.log(); // newline

    await sleep(300 * speedFactor);

    // 显示集群信息
    for (let i = 0; i < clusters.length; i++) {
        if (config?.shouldExit()) {
            return;
        }
        const text = `  Cluster #${i.toString().padStart(2, '0')} (${clusters[i].toString().padStart(3)} nodes)`;
        for (const char of text) {
            await print(char);
            await sleep(10 * speedFactor);
        }
        console.log();
        await sleep(100 * speedFactor);
    }

    // 集群启动循环
    while (true) {
        if (config?.shouldExit()) {
            return;
        }

        await cursorUp(onlines.length);
        
        // 更新状态显示
        for (let i = 0; i < clusters.length; i++) {
            await eraseLine();
            const status = onlines[i] 
                ? chalk.bold.green('online')
                : chalk.bold.yellow('booting');
            await print(`  Cluster #${i.toString().padStart(2, '0')} (${clusters[i].toString().padStart(3)} nodes) [${status}]\n`);
        }

        // 检查是否所有集群都在线
        if (onlines.every(x => x)) {
            break;
        }

        // 更新集群状态
        for (let i = 0; i < onlines.length; i++) {
            const successRate = 0.05;
            if (Math.random() < successRate) {
                onlines[i] = true;
            }
        }

        await sleep(100 * speedFactor);
    }

    // 执行最终任务
    const tasks = [
        "Synchronizing clocks...",
        "Sending login information...",
        "Sending command..."
    ];

    for (const task of tasks) {
        if (config?.shouldExit()) {
            return;
        }

        await sleep(300 * speedFactor);
        
        // 打印任务
        for (const char of `+ ${task} `) {
            await print(char);
            await sleep(10 * speedFactor);
        }
        
        await sleep(600 * speedFactor);
        
        // 打印完成标记
        for (const char of "[done]") {
            await print(char);
            await sleep(10 * speedFactor);
        }
        console.log();
    }

    // 打印完成信息
    for (const char of ">> Botnet update complete.") {
        await print(char);
        await sleep(10 * speedFactor);
    }
    console.log();
}

export default botnet;