import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';

// 生成包的版本号
function generatePackageVersion(): string {
    // 使用 chi-squared 分布近似实现
    const chiSquared = () => {
        // 简化的 chi-squared 实现
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            const u = Math.random();
            sum += u * u;
        }
        return sum;
    };

    const major = Math.floor(10 * chiSquared());
    const minor = Math.floor(10 * chiSquared());
    const patch = Math.floor(10 * chiSquared());

    return `${major}.${minor}.${patch}`;
}

// 随机选择不重复的包
function chooseRandomPackages(packages: string[], count: number): string[] {
    const shuffled = [...packages].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

interface Package {
    name: string;
    version: string;
}

async function composer(speedFactor = 1): Promise<void> {
    try {
        // 加载包列表数据
        const COMPOSERS_LIST = await loadData('composer');

        // 生成随机包数量 (10-100)
        const numPackages = getRandomInt(10, 100);
        
        // 选择随机包并生成版本号
        const chosenPackages: Package[] = chooseRandomPackages(COMPOSERS_LIST, numPackages).map(name => ({
                name,
                version: generatePackageVersion()
            }));

        // 输出初始信息
        console.log(chalk.green('Loading composer repositories with package information'));
        console.log(chalk.green('Updating dependencies (including require-dev)'));

        // 安装包
        for (const pkg of chosenPackages) {
            const sleepTime = getRandomInt(100, 2000) / speedFactor;
            
            // 显示安装信息
            console.log(
                `  - Installing ${chalk.green(pkg.name)} (${chalk.yellow(pkg.version)}): Loading from cache`
            );
            
            await sleep(sleepTime);
        }

        // 输出完成信息
        console.log(chalk.green('Writing lock file'));
        console.log(chalk.green('Generating autoload files'));

    } catch (error) {
        console.error(chalk.red('Error during composer installation:'), error);
        throw error;
    }
}

export default composer;