import ora from 'ora';
import chalk from 'chalk';
import { getRandomInt, sleep, generateHexString } from '../utils/helpers.js';
import { loadCsv } from '../utils/dataLoader.js';

type PackageList = {
    name: string;
    id: string;
    versions: string[];
}

interface ProgressDisplay {
    start(): void;
    stop(): void;
    text: string;
}

class ProgressBar {
    private current: number = 0;
    private total: number;
    private width: number;
    private includeNumbers: boolean;

    constructor(total: number, width: number = 41, includeNumbers: boolean = false) {
        this.total = total;
        this.width = width;
        this.includeNumbers = includeNumbers;
    }

    update(value: number) {
        this.current = Math.min(this.current + value, this.total);
    }

    replace(value: number) {
        this.current = Math.min(value, this.total);
    }

    toString(): string {
        const progress = this.current / this.total;
        const filled = Math.floor(progress * this.width);
        const empty = this.width - filled;
        
        const bar = '='.repeat(filled) + ' '.repeat(empty);
        
        if (this.includeNumbers) {
            return `[${bar}] ${this.current}/${this.total}`;
        }
        return `[${bar}] ${Math.floor(progress * 100)}%`;
    }
}

async function printBanner(): Promise<void> {
    const banner = `               ${chalk.green('_')}
   ${chalk.blue('_')}       _ ${chalk.red('_')}${chalk.green('(_)')}${chalk.magenta('_')}     |  Documentation: https://docs.julialang.org
  ${chalk.blue('(_)')}     | ${chalk.red('(_)')} ${chalk.magenta('(_)')}    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _\` |  |
  | | |_| | | | (_| |  |  Version 1.7.3 (2022-05-06)
 _/ |\\__'_|_|_|\\__'_|  |  Fedora 35 build
|__/                   |
`;
    console.log(banner);
}

async function printJuliaPrompt(): Promise<void> {
    process.stdout.write(chalk.green.bold('julia> '));
}

async function printPkgPrompt(project: string): Promise<void> {
    process.stdout.write(chalk.blue.bold(`(${project}) pkg> `));
}

function logAction(action: string, message: string) {
    console.log(`${chalk.green.bold(action.padStart(12))} ${message}`);
}

async function installPackages(packages: PackageList[]): Promise<void> {
    const maxNameLength = Math.max(...packages.map(p => p.name.length));
    
    for (const pkg of packages) {
        const version = pkg.versions[pkg.versions.length - 1];
        const padding = '─'.repeat(maxNameLength - pkg.name.length + 1);
        const packageAndVersion = `${pkg.name} ${padding} v${version}`;

        if (Math.random() < 0.1) {
            logAction('Installing', packageAndVersion);
            await sleep(getRandomInt(250, 1000));
            // Move cursor up and clear line
            process.stdout.write('\x1B[1A\x1B[2K');
        } else {
            await sleep(getRandomInt(10, 200));
        }

        logAction('Installed', packageAndVersion);
    }
}

async function downloadArtifacts(artifacts: PackageList[]): Promise<void> {
    for (const artifact of artifacts) {
        await sleep(getRandomInt(50, 100));
        logAction('Downloading', `artifact: ${artifact.name}`);
        await sleep(getRandomInt(100, 150));

        const bar = new ProgressBar(10000);
        const spinner = ora({
            text: `${chalk.cyan.bold('Downloading'.padStart(15))} ${bar}`,
            spinner: 'line'
        }).start();

        while (bar.toString().includes('100%') === false) {
            const add = Math.min(getRandomInt(0, 500), 10000);
            bar.update(add);
            spinner.text = `${chalk.cyan.bold('Downloading'.padStart(15))} ${bar}`;
            await sleep(getRandomInt(50, 75));
        }

        spinner.stop();
        await sleep(getRandomInt(100, 200));
        // Move cursor up and clear line
        process.stdout.write('\x1B[1A\x1B[2K');
        logAction('Downloaded', `artifact: ${artifact.name}`);
    }
}

async function updateProjectAndManifest(project: string): Promise<void> {
    const isVersionedProject = project.startsWith('@');
    const projectPath = isVersionedProject
        ? `~/.julia/environments/${project.slice(1)}/Project.toml`
        : `~/Documents/code/julia/projects/${project}.jl/Project.toml`;
    const manifestPath = isVersionedProject
        ? `~/.julia/environments/${project.slice(1)}/Manifest.toml`
        : `~/Documents/code/julia/projects/${project}.jl/Manifest.toml`;

    if (Math.random() < 0.9) {
        logAction('Updating', `\`${projectPath}\``);
    } else {
        logAction('No Changes', `to \`${projectPath}\``);
    }

    await sleep(getRandomInt(10, 100));
    logAction('Updating', `\`${manifestPath}\``);
}

async function reportPackages(packages: PackageList[]) {
    for (const pkg of packages) {
        const pkgId = chalk.gray(`  [${pkg.id.substring(0, 8)}] `)
        const randomBool = Math.random() < 0.75;  // 随机概率
        if (pkg.versions.length > 1 && randomBool) {
            console.log(pkgId + chalk.yellow(`↑ ${pkg.name} ${pkg.versions[0]} ⇒ ${pkg.versions[1]}`));
        } else if (Math.random() < 0.9) {
            console.log(pkgId + chalk.green(`+ ${pkg.name} ${pkg.versions[0]}`));
        } else {
            console.log(pkgId + chalk.red(`- ${pkg.name} ${pkg.versions[0]}`));
        }
        await sleep(getRandomInt(10, 100));
    }
}

async function buildArtifacts(artifacts: PackageList[]) {
    const maxNameLength = Math.max(...artifacts.map(p => p.name.length));
    for (const artifact of artifacts) {
        const padding = '─'.repeat(maxNameLength - artifact.name.length + 1);
        const packageAndVersion = `${artifact.name} ${padding}→ ~/.julia/scratchspaces/${generateHexString(8)}-${generateHexString(4)}-${generateHexString(4)}-${generateHexString(4)}-${generateHexString(12)}/${generateHexString(40)}/build.log`;
        logAction('Building', `${packageAndVersion}`);
        // 这里可以进一步模拟进度条逻辑
        const bar = new ProgressBar(10000);
        const spinner = ora({
            text: `${chalk.cyan.bold('Progress'.padStart(15))} ${bar}`,
            spinner: 'line'
        }).start();

        while (bar.toString().includes('100%') === false) {
            const add = Math.min(getRandomInt(0, 500), 10000);
            bar.update(add);
            spinner.text = `${chalk.cyan.bold('Progress'.padStart(15))} ${bar}`;
            await sleep(getRandomInt(50, 75));
        }

        spinner.stop();
        await sleep(getRandomInt(10, 100));  // 模拟构建过程
    }
}

async function precompile(packages: PackageList[]) {
    logAction("Precompiling", "project...");
    // for (const pkg of packages) {
    //     console.log(`Precompiling ${pkg.name}`);
    //     await this.sleep(50);  // 模拟预编译过程
    // }
    const tt = new Date().getSeconds();
    const bar = new ProgressBar(packages.length);
    const spinner = ora({
        text: `${chalk.cyan.bold('Progress'.padStart(15))} ${bar}`,
        spinner: 'line'
    }).start();

    while (bar.toString().includes('100%') === false) {
        const add = Math.min(getRandomInt(0, packages.length / 4), packages.length);
        bar.update(add);
        spinner.text = `${chalk.cyan.bold('Progress'.padStart(15))} ${bar}`;
        await sleep(getRandomInt(50, 1000));
    }

    spinner.stop();
    console.log(`  ${packages.length} dependencies successfully precompiled in ${new Date().getSeconds() - tt} seconds (${getRandomInt(10, 500)} already precompiled)`);
}

async function gc() {
    await sleep(getRandomInt(50, 250));

    console.log(`${chalk.cyan.bold('[ Info:"')} We haven't cleaned this depot up for a bit, running Pkg.gc()...`);
    await sleep(getRandomInt(100, 250));
    
    logAction('Active', `manifest files: ${getRandomInt(1, 10)} found`);
    await sleep(getRandomInt(100, 250));

    logAction('Active', `artifact files: ${getRandomInt(10, 200)} found`);
    await sleep(getRandomInt(100, 250));

    logAction('Active', `scratchspaces: ${getRandomInt(10, 20)} found`);
    await sleep(getRandomInt(100, 250));

    logAction('Deleted', `${getRandomInt(2, 10)} artifact installations ${getRandomInt(10, 250)} MiB`);
    await sleep(getRandomInt(100, 250));

    logAction('Deleted', `${getRandomInt(2, 10)} scratchspaces ${getRandomInt(10, 250)} byte`);
}

async function julia(speedFactor: number = 1): Promise<void> {
    const JULIA_PACKAGES_LIST: PackageList[] = await loadCsv('julia');
    
    // Choose random packages
    const numPackages = getRandomInt(10, 150);
    const numArtifacts = getRandomInt(1, 10);
    const shuffled = [...JULIA_PACKAGES_LIST].sort(() => 0.5 - Math.random());
    const packages = shuffled.slice(0, numPackages);
    const artifacts = shuffled.slice(numPackages, numPackages + numArtifacts);

    // Project selection
    const project = Math.random() < 0.3 ? '@v1.7' : shuffled[0].name;

    // Julia startup
    await printBanner();
    await sleep(getRandomInt(50, 150));
    console.log();
    await printJuliaPrompt();

    // Wait for user input
    await sleep(getRandomInt(500, 2500));

    // Enter pkg mode
    process.stdout.write('\x1B[2K'); // Clear line
    await printPkgPrompt(project);

    // Wait for user input
    await sleep(getRandomInt(500, 1500));

    // Type "update" and press enter
    process.stdout.write('up');
    await sleep(getRandomInt(100, 500));
    process.stdout.write('date');
    await sleep(getRandomInt(500, 1500));
    console.log();

    // Package update process
    await sleep(getRandomInt(200, 1000));
    logAction('Updating', 'registry at `~/.julia/registries/General.toml`');
    await sleep(getRandomInt(1500, 5000));

    logAction('Resolving', 'package versions...');
    await sleep(getRandomInt(500, 2500));

    await installPackages(packages);
    await sleep(getRandomInt(250, 1000));

    await downloadArtifacts(artifacts);
    await sleep(getRandomInt(250, 1000));

    await updateProjectAndManifest(project);
    await sleep(getRandomInt(10, 100));

    await reportPackages(packages);
    await sleep(getRandomInt(150, 500));

    await buildArtifacts(artifacts);
    await sleep(getRandomInt(150, 500));

    await precompile(packages);

    if (Math.random() < 0.25) await gc();

    await sleep(getRandomInt(50, 250));

    // Exit pkg mode
    console.log();
    await printPkgPrompt(project);
    await sleep(getRandomInt(500, 5000));

    process.stdout.write('\x1B[2K'); // Clear line
    await printJuliaPrompt();
    await sleep(getRandomInt(1000, 7000));

    console.log();
}
julia.signature = 'julia --threads auto --project .';
export default julia;