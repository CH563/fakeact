import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, getRandomItem, sleep } from '../utils/helpers.js';
import { EnvDetector, oraFun, writeLine } from '../utils/environment.js';

interface AppConfig {
    shouldExit: () => boolean;
}

async function bootlog(speedFactor = 1, config?: AppConfig) {
    // 加载bootlog列表
    const BOOTLOG_LIST = await loadData('bootlog');
    
    // 生成随机行数 (50-200)
    const numLines = getRandomInt(50, 200);
    
    let burstMode = false;
    let countBurstLines = 0;
    
    for (let i = 0; i < numLines; i++) {
        // 检查是否应该退出
        if (config?.shouldExit()) {
            return;
        }

        // 随机选择一行日志
        const choice = getRandomItem(BOOTLOG_LIST);
        
        // 设置延迟时间
        let lineSleepLength = getRandomInt(10, 1000);
        let charSleepLength = 5;
        const burstLines = getRandomInt(10, 50);

        // 处理突发模式
        if (burstMode && countBurstLines < burstLines) {
            lineSleepLength = 30;
            charSleepLength = 0;
        } else if (countBurstLines === burstLines) {
            burstMode = false;
            countBurstLines = 0;
        } else if (!burstMode) {
            // 1/20的概率进入突发模式
            burstMode = Math.random() < 1/20;
        }

        // 创建spinner
        const spinner = await oraFun();
        
        // 显示日志行
        spinner.start();
        let str = choice;
        let firstWords = '';

        // 10%概率第一个词加粗
        const hasBoldWord = Math.random() < 0.1;
        if (hasBoldWord) {
            const words = choice.split(' ');
            firstWords = chalk.bold(words.shift()) + ' ';
            str = words.join(' ');
        }
        // 1%概率出现错误信息
        const isError = Math.random() < 0.01;
        // 模拟打字效果
        for (let j = 0; j < str.length; j++) {
            const txt = str.substring(0, j + 1);
            spinner.text = `${firstWords}${isError ? chalk.red(`ERROR: ${txt}`) : txt}`;
            if (charSleepLength > 0) {
                await sleep(charSleepLength / speedFactor);
            }
        }
        
        
        spinner.stop();
        EnvDetector.isBrowser() ? writeLine() : writeLine(spinner.text);

        // 突发模式计数
        if (burstMode) {
            countBurstLines++;
        }

        // 行间延迟
        await sleep(lineSleepLength * speedFactor);
    }
}
bootlog.signature = 'bcdedit /set {current} bootlog Yes && shutdown /r';
export default bootlog;