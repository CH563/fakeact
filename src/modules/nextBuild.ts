import chalk from 'chalk';
import { sleep, getRandomItem, getRandomBuildTime, getRandomFileSize, getRandomInt } from '../utils/helpers.js';
import { generatePages, WARNING_MESSAGES, ERROR_MESSAGES, INFO_MESSAGES } from '../utils/pageLists.js';

interface BuildConfig {
    shouldFail?: boolean;
    verbose?: boolean;
    speedFactor?: number;
}

// 构建阶段定义
enum BuildPhase {
    SETUP = 'Setup',
    COMPILE = 'Compile',
    OPTIMIZE = 'Optimize',
    BUNDLE = 'Bundle',
    BUILD = 'Build',
}


class NextjsBuildSimulator {
    private config: BuildConfig;
    private startTime: number;
    private hasErrors: boolean = false;
    private hasWarnings: boolean = false;
    private totalPages: number = 0;

    constructor(speedFactor: number = 1, config: BuildConfig = {}) {
        this.config = {
            shouldFail: config.shouldFail || false,
            verbose: config.verbose || false,
            speedFactor: speedFactor || 1,
        };
        this.startTime = Date.now();
    }

    private async log(message: string, type: 'info' | 'warn' | 'error' = 'info'): Promise<void> {
        const prefix = {
            info: chalk.blue('info'),
            warn: chalk.yellow('warn'),
            error: chalk.red('error'),
        }[type];

        console.log(`${prefix}  - ${message}`);
        await sleep(50 * (this.config.speedFactor || 1));
    }

    private async simulatePageCompilation(page: string, isLast: boolean = false): Promise<void> {
        const buildTime = getRandomBuildTime();
        const size = getRandomFileSize();
        const line = isLast ? '└── ' : '├── ';
        
        // 随机生成警告
        if (Math.random() < 0.2) {
            this.hasWarnings = true;
            await this.log(
                `${chalk.yellow('warn')}  - ${getRandomItem(WARNING_MESSAGES)} in ${page}`,
                'warn'
            );
        }

        // 随机生成错误
        if (Math.random() < 0.1 && this.config.shouldFail) {
            this.hasErrors = true;
            await this.log(
                `${chalk.red('error')} - ${getRandomItem(ERROR_MESSAGES)} in ${page}`,
                'error'
            );
        }

        console.log(
            `${line}○ ${chalk.dim(page)}${' '.repeat(Math.max(1, 40 - page.length))}` +
            `${size} kB${' '.repeat(8)}${buildTime}s`
        );
        this.totalPages++;
    }

    private getRandomPages(): string[] {
        return generatePages().filter(() => Math.random() > 0.2);
    }

    public async simulate(): Promise<void> {
        console.log(chalk.bold('\n🔥 Next.js Build Simulator\n'));
        
        await this.log('Creating an optimized production build...');
        
        // 编译阶段
        for (const phase of Object.values(BuildPhase)) {
            await this.log(`${phase} phase starting...`);
            await sleep(500 / (this.config.speedFactor || 1));

            if (phase === BuildPhase.COMPILE) {
                console.log('\nCompiling pages...\n');
                console.log(`${chalk.underline('Page')}${' '.repeat(42)}${chalk.underline('Size')}${' '.repeat(12)}${chalk.underline('Times')}`)
                console.log(`├── ○ ${chalk.dim('/')}`)
                const pages = this.getRandomPages();
                for (const page of pages) {
                    await this.simulatePageCompilation(page);
                    await sleep(getRandomInt(30, 100) / (this.config.speedFactor || 1));
                }
            }

            // 随机添加构建信息
            if (Math.random() > 0.7) {
                await this.log(getRandomItem(INFO_MESSAGES));
            }
        }

        // 构建完成统计
        const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
        console.log('\n' + '─'.repeat(50));

        if (this.hasErrors) {
            console.log(chalk.red(`\n✗ Failed to compile in ${duration}s`));
            console.log(chalk.red('\nFound errors in your application:'));
            process.exit(1);
        } else {
            console.log(chalk.green(`\n✓ Compiled successfully in ${duration}s`));
            console.log(`\n○ Pages: ${this.totalPages}`);
            if (this.hasWarnings) {
                console.log(chalk.yellow('\n⚠ Found some non-critical issues (see above)'));
            }
            console.log(chalk.green('\n✨ Done!'));
        }
    }
}

// 使用示例
async function nextBuild(speedFactor: number = 1, config: BuildConfig = {}): Promise<void> {
    const simulator = new NextjsBuildSimulator(speedFactor, config);
    await simulator.simulate();
}

nextBuild.signature = 'next build';
export default nextBuild;