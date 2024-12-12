import ora from 'ora';
import chalk from 'chalk';
import { getRandomInt, sleep } from '../utils/helpers.js';
import { EXTENSIONS_LIST, loadData } from '../utils/dataLoader.js';

import { formatBytes, formatDuration } from '../utils/format.js';

const clearLastLine = () => {
    process.stdout.moveCursor(0, -1) // up one line
    process.stdout.clearLine(1) // from cursor to end
}

async function download(speedFactor = 1) {
    // 加载文件列表数据
    const CFILES_LIST = await loadData('cfiles');

    const numFiles = CFILES_LIST.length;
    
    for (let fileIndex = 0; fileIndex < numFiles; fileIndex++) {
        // 随机选择一个文件扩展名
        const extension = EXTENSIONS_LIST[getRandomInt(0, EXTENSIONS_LIST.length - 1)];
    
        // 随机生成下载速度 (10MB-100MB)
        const downloadSpeed = getRandomInt(10_000_000, 100_000_000);

        // 随机选择一个文件名
        const arr = CFILES_LIST[fileIndex].split('/');
        const fileName = arr[arr.length-1].replace(/\.c$/, `.${extension}`);

        // 随机生成文件大小 (30MB-300MB)
        const fileBytes = getRandomInt(30_000_000, 300_000_000);
        const sleepMillis = 50;

        // 获取终端宽度并计算显示参数
        const statsWidth = 32;
        const restPadding = 16;
        const terminalWidth = process.stdout.columns;
        const remainingWidth = terminalWidth - statsWidth;
        const fileNameWidth = Math.floor(remainingWidth / 3);
        const progressBarSize = remainingWidth - fileNameWidth - restPadding;

        let bytesDownloaded = 0;

        const spinner = ora().start();
        while (bytesDownloaded < fileBytes) {
            // 模拟下载速度波动
            const speedOffset = getRandomInt(-5_000_000, 5_000_000);
            const actualSpeed = Math.max(100_000, downloadSpeed + speedOffset);

            // 计算本次循环下载的字节数
            const bytesIncoming = Math.floor((actualSpeed / 1000) * sleepMillis);
            bytesDownloaded = Math.min(bytesDownloaded + bytesIncoming, fileBytes);

            // 计算进度
            const percent = ((bytesDownloaded / fileBytes) * 100).toFixed(0);

            // 计算预计剩余时间
            const remainingBytes = fileBytes - bytesDownloaded;
            const eta = remainingBytes > 0 ? Math.ceil(remainingBytes / actualSpeed) : 0;

            // 生成进度条
            const progressBar = getProgressBar(percent, progressBarSize);

            // 格式化显示信息
            const truncatedFileName = fileName.slice(0, fileNameWidth).padEnd(fileNameWidth);
            const formattedBytes = formatBytes(bytesDownloaded);
            const formattedSpeed = `${formatBytes(actualSpeed)}/s`;
            const formattedEta = formatDuration(eta);

            // 更新显示
            const text = `${truncatedFileName} ${percent.padStart(3)}%${progressBar} ${formattedBytes.padEnd(10)} ${formattedSpeed.padEnd(12)} eta ${formattedEta.padEnd(10)}`;
            spinner.suffixText = text;
            await sleep(sleepMillis / speedFactor);
        }
        spinner.succeed();
        spinner.stop();
        clearLastLine();
    }
}

function getProgressBar(percent, width) {
    const completed = Math.floor((percent / 100) * width);
    return '[' + '='.repeat(completed) + ' '.repeat(width - completed) + ']';
}

export default download;
