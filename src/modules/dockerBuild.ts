import chalk from 'chalk';
import { sleep, getRandomInt, getRandomItem } from '../utils/helpers.js';
import { loadData } from '../utils/dataLoader.js';
import runModule from './index.js';

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
            process.stdout.write(
                `\rSending build context to Docker daemon  ${currentSize.toFixed(2)}MB`
            );
            
            const remainingSize = targetSize - currentSize;
            currentSize += remainingSize <= 5 ? 5 : getRandomInt(5, 30);
            
            await sleep(getRandomInt(50, 300) / speedFactor);
        }
        console.log();

        // 模拟构建步骤
        const totalSteps = getRandomInt(30, 100);
        
        for (let currentStep = 1; currentStep <= totalSteps; currentStep++) {
            const moduleName = getRandomItem(Object.keys(runModule).filter(e => e.indexOf('docker') === -1));
            const instruction = runModule[moduleName]?.signature || getRandomItem(OTHER_COMMANDS);
            
            console.log(chalk.cyan(
                `\nStep ${currentStep}/${totalSteps} : RUN ${instruction}`
            ));

            if (Math.random() > 0.5) {
                console.log(chalk.gray(' ---> Using cache'));
                await sleep(getRandomInt(100, 500) / speedFactor);
            } else {
                const stepHash = generateHexString(12);
                console.log(chalk.gray(` ---> Running in ${stepHash}`));
                console.log();
                await runModule[moduleName](speedFactor);
                // 模拟命令执行输出
                await sleep(getRandomInt(500, 1000) / speedFactor);
            }
            console.log(chalk.gray(` ---> ${generateHexString(12)}`));
        }

        // 最终输出
        const finalHash = generateHexString(12);
        const imageName = getRandomItem(packages);
        const imageTag = getRandomItem(tags);

        console.log(chalk.green(`\nSuccessfully built ${finalHash}`));
        console.log(chalk.green(`Successfully tagged ${imageName}:${imageTag}`));

    } catch (error) {
        console.error(chalk.red('Build failed:', error.message));
    }
}
dockerBuild.signature = 'docker build -t image .';
export default dockerBuild;