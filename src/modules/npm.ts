import ora from 'ora';
import chalk from 'chalk';
import { sleep, getRandomInt } from '../utils/helpers.js';
import { COMMON_PACKAGES, Package } from '../utils/packageLists.js'


interface AppConfig {
    shouldExit?: boolean;
}

// 生成随机包名
function generatePackageName(): string {
    const prefixes = ['@types/', '@babel/', '@vue/', '@typescript-eslint/', '@jest/', '@testing-library/', ''];
    const names = ['util', 'core', 'plugin', 'helper', 'tool', 'lib', 'common', 'config', 'preset', 'loader', 'parser'];
    const suffix = Math.random() > 0.6 ? `-${names[Math.floor(Math.random() * names.length)]}` : '';
    
    return prefixes[Math.floor(Math.random() * prefixes.length)] + 
           names[Math.floor(Math.random() * names.length)] + suffix;
}

// 生成随机版本号
function generateVersion(): string {
    const major = getRandomInt(0, 9);
    const minor = getRandomInt(0, 20);
    const patch = getRandomInt(0, 99);
    const prerelease = Math.random() > 0.9 ? 
        `-${['alpha', 'beta', 'rc'][Math.floor(Math.random() * 3)]}.${getRandomInt(1, 5)}` : '';
    return `${major}.${minor}.${patch}${prerelease}`;
}

// 格式化文件大小
function formatSize(bytes: number): string {
    const units = ['B', 'kB', 'MB', 'GB'];
    let size = bytes;
    let unit = 0;
    
    while (size >= 1024 && unit < units.length - 1) {
        size /= 1024;
        unit++;
    }
    
    return `${size.toFixed(1)} ${units[unit]}`;
}

// 生成进度条
function generateProgressBar(progress: number): string {
    const width = 30;
    const completed = Math.floor(width * progress);
    const remaining = width - completed;
    
    return '[' +
        chalk.green('=').repeat(completed) +
        (remaining > 0 ? '>' : '') +
        ' '.repeat(Math.max(0, remaining - 1)) +
        ']';
}

async function npm(speedFactor: number = 1, config: AppConfig = {}) {
    const spinner = ora('Resolving dependencies...').start();
    const packages = [...COMMON_PACKAGES];
    const totalPackages = getRandomInt(20, 40);
    
    // 添加一些随机包
    for (let i = packages.length; i < totalPackages; i++) {
        packages.push({
            name: generatePackageName(),
            version: generateVersion(),
            size: getRandomInt(1000, 1000000),
            isDevDependency: Math.random() > 0.7
        });
    }

    await sleep(1000 * speedFactor);
    spinner.succeed('Dependencies resolved');

    // 显示包的依赖树
    console.log(chalk.gray('\nDependencies:'));
    const devDeps = packages.filter(p => p.isDevDependency);
    const regularDeps = packages.filter(p => !p.isDevDependency);

    function printDeps(deps: Package[], prefix: string = '') {
        deps.slice(0, 6).forEach((pkg, index, arr) => {
            const isLast = index === arr.length - 1;
            const line = isLast ? '└── ' : '├── ';
            console.log(chalk.gray(`${prefix}${line}${pkg.name}@${pkg.version}`));
            
            if (pkg.dependencies) {
                const newPrefix = prefix + (isLast ? '    ' : '│   ');
                Object.entries(pkg.dependencies).slice(0, 3).forEach(([depName, depVersion], depIndex, depArr) => {
                    const depIsLast = depIndex === depArr.length - 1;
                    const depLine = depIsLast ? '└── ' : '├── ';
                    console.log(chalk.gray(`${newPrefix}${depLine}${depName}@${depVersion}`));
                });
                if (Object.keys(pkg.dependencies).length > 3) {
                    console.log(chalk.gray(`${newPrefix}└── ...`));
                }
            }
        });
    }

    console.log(chalk.gray('Regular dependencies:'));
    printDeps(regularDeps);
    if (regularDeps.length > 6) {
        console.log(chalk.gray(`└── ... and ${regularDeps.length - 6} more`));
    }

    if (devDeps.length > 0) {
        console.log(chalk.gray('\nDev dependencies:'));
        printDeps(devDeps);
        if (devDeps.length > 6) {
            console.log(chalk.gray(`└── ... and ${devDeps.length - 6} more`));
        }
    }
    
    await sleep(500 * speedFactor);
    console.log('\nPackages ('+packages.length+'):');
    
    // 安装进度
    const statusMessages = [
        'Generating type definitions...',
        'Verifying tree...',
        'Resolving peer dependencies...',
        'Running install scripts...',
        'Building fresh packages...',
        'Optimizing dependencies...',
        'Auditing package tree...',
        'Linking dependencies...',
        'Checking for native build requirements...',
        'Processing source maps...',
        'Validating package.json...',
        'Checking compatibility...'
    ];

    for (let i = 0; i < packages.length; i++) {
        if (config.shouldExit) {
            console.log(chalk.red('\nInstallation interrupted'));
            return;
        }

        const pkg = packages[i];
        const progress = (i + 1) / packages.length;
        const progressBar = generateProgressBar(progress);
        
        // 清除上一行
        if (i > 0) process.stdout.write('\x1B[1A\x1B[2K');
        
        // 显示当前安装的包
        const pkgType = pkg.isDevDependency ? chalk.gray(' (dev)') : '';
        console.log(
            `${progressBar} ${(progress * 100).toFixed(1)}% ` +
            chalk.green(`added ${pkg.name}@${pkg.version}`) +
            pkgType +
            chalk.gray(` (${formatSize(pkg.size || 0)})`)
        );
        
        // 增加状态消息的显示频率
        if (Math.random() > 0.7) {
            console.log(chalk.gray(statusMessages[Math.floor(Math.random() * statusMessages.length)]));
        }

        await sleep(getRandomInt(100, 300) * speedFactor);
    }

    // 显示安装总结
    const totalSize = packages.reduce((acc, pkg) => acc + (pkg.size || 0), 0);
    const installTime = (2 + Math.random() * 2).toFixed(1);
    
    console.log('\n' + chalk.green('✓') + ' Installation completed successfully');
    console.log(chalk.gray(`Added ${packages.length} packages (${packages.filter(p => p.isDevDependency).length} dev) in ${installTime}s`));
    console.log(chalk.gray(`Total size: ${formatSize(totalSize)}`));
    
    // 增加更多类型的警告和提示
    const warnings = [];
    
    // 资金赞助提示
    if (Math.random() > 0.6) {
        const fundingCount = getRandomInt(3, 8);
        warnings.push({
            type: 'funding',
            message: `${fundingCount} packages are looking for funding\n  Run ${chalk.cyan('npm fund')} for details`
        });
    }
    
    // 安全漏洞提示
    if (Math.random() > 0.7) {
        const critical = getRandomInt(0, 2);
        const high = getRandomInt(0, 3);
        const moderate = getRandomInt(1, 4);
        const low = getRandomInt(0, 5);
        const total = critical + high + moderate + low;
        
        if (total > 0) {
            let message = `Found ${total} vulnerabilities (`;
            const details = [];
            if (critical) details.push(`${critical} critical`);
            if (high) details.push(`${high} high`);
            if (moderate) details.push(`${moderate} moderate`);
            if (low) details.push(`${low} low`);
            message += details.join(', ') + ')';
            
            warnings.push({
                type: 'security',
                message: message + '\n  Run ' + chalk.cyan('npm audit fix') + ' to fix them'
            });
        }
    }
    
    // 过时包提示
    if (Math.random() > 0.8) {
        const outdatedCount = getRandomInt(2, 6);
        warnings.push({
            type: 'outdated',
            message: `${outdatedCount} packages are outdated\n  Run ${chalk.cyan('npm outdated')} to see them`
        });
    }
    
    // 引擎版本提示
    if (Math.random() > 0.9) {
        warnings.push({
            type: 'engine',
            message: `Package requires Node.js version >=16.0.0\n  Current version: ${process.version}`
        });
    }

    // 显示所有警告
    if (warnings.length > 0) {
        console.log(''); // 空行
        warnings.forEach(warning => {
            console.log(chalk.yellow('\n' + warning.message));
        });
    }
}
npm.signature = 'npm install';
export default npm;