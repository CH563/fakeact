import chalk from 'chalk';
import { sleep, getRandomInt, getRandomItem } from '../utils/helpers.js';
import { loadData } from '../utils/dataLoader.js';
import { EnvDetector, writeLine, write } from '../utils/environment.js';
import { MODULE_SIGNATURES } from '../utils/moduleSignatures.js';

// 生成随机十六进制字符串
function generateHexString(length) {
    return Array.from(
        { length }, 
        () => Math.floor(Math.random() * 16).toString(16)
    ).join('');
}

// 模拟其他命令
const OTHER_COMMANDS = [
    'apt-get update && apt-get install -y',
    'npm install --production',
    'pip install -r requirements.txt',
    'mkdir -p /app/data',
    'COPY . /app/',
    'chmod +x /entrypoint.sh',
    'RUN adduser --system --group app',
    'WORKDIR /app',
    'ENV NODE_ENV=production'
];

async function dockerBuild(speedFactor = 1) {
    try {
        // 预加载数据
        const [packages, tags] = await Promise.all([
            loadData('docker_packages'),
            loadData('docker_tags')
        ]);

        // 模拟发送构建上下文到 Docker 守护进程
        const targetSize = getRandomInt(100, 1000);
        let currentSize = 0;

        while (currentSize <= targetSize) {
            write(
                `\rSending build context to Docker daemon  ${currentSize.toFixed(2)}MB`
            );
            
            const remainingSize = targetSize - currentSize;
            currentSize += remainingSize <= 5 ? 5 : getRandomInt(5, 30);
            
            await sleep(getRandomInt(50, 300) / speedFactor);
        }
        writeLine();

        // 模拟构建步骤（浏览器里截断步数，避免一次播放过长）
        const totalSteps = EnvDetector.isBrowser() ? getRandomInt(8, 15) : getRandomInt(30, 100);

        for (let currentStep = 1; currentStep <= totalSteps; currentStep++) {
            const moduleName = getRandomItem(Object.keys(MODULE_SIGNATURES).filter(e => e.indexOf('docker') === -1));
            const instruction = MODULE_SIGNATURES[moduleName] || getRandomItem(OTHER_COMMANDS);
            
            writeLine(chalk.cyan(
                `\nStep ${currentStep}/${totalSteps} : RUN ${instruction}`
            ));

            if (Math.random() > 0.5) {
                writeLine(chalk.gray(' ---> Using cache'));
                await sleep(getRandomInt(100, 500) / speedFactor);
            } else {
                const stepHash = generateHexString(12);
                writeLine(chalk.gray(` ---> Running in ${stepHash}`));
                writeLine();
                // 模拟命令执行输出
                await sleep(getRandomInt(500, 1000) / speedFactor);
            }
            writeLine(chalk.gray(` ---> ${generateHexString(12)}`));
        }

        // 最终输出
        const finalHash = generateHexString(12);
        const imageName = getRandomItem(packages);
        const imageTag = getRandomItem(tags);

        writeLine(chalk.green(`\nSuccessfully built ${finalHash}`));
        writeLine(chalk.green(`Successfully tagged ${imageName}:${imageTag}`));

    } catch (error) {
        writeLine(chalk.red(`Build failed: ${error.message}`));
    }
}
dockerBuild.signature = 'docker build -t image .';
export default dockerBuild;