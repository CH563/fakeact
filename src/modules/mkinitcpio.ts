import chalk from 'chalk';
import { loadData, COMPRESSION_FORMATS_LIST } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';

const REQUIRED_HOOKS = [
    "base",
    "udev",
    "autodetect",
    "modconf",
    "block",
    "fsck",
    "filesystems",
];

interface AppConfig {
    shouldExit: () => boolean;
}

async function warn(msg: string): Promise<void> {
    console.log(`${chalk.yellow.bold('==> WARNING: ')}${chalk.bold(msg)}`);
}

async function msg1(msg: string): Promise<void> {
    console.log(`${chalk.green.bold('==> ')}${chalk.bold(msg)}`);
}

async function msg2(msg: string): Promise<void> {
    console.log(`${chalk.blue.bold('  -> ')}${chalk.bold(msg)}`);
}

async function build(
    hooks: string[],
    preset: string,
    mode: string,
    zip: string,
    drivers: string[],
    osRelease: string,
    appConfig: AppConfig,
    speedFactor: number
): Promise<void> {
    const image = `/boot/initramfs-${preset}${mode === 'default' ? '' : `-${mode}`}.img`;

    await msg1(`Building image from preset: /etc/mkinitcpio.d/${preset}.preset: '${mode}'`);
    await msg2(`-k /boot/vmlinuz-${preset} -c /etc/mkinitcpio.conf -g ${image}`);
    await msg1(`Starting build: ${osRelease}`);

    for (const hook of hooks) {
        await msg2(`Running build hook: [${hook}]`);
        await sleep(getRandomInt(50, 1000));

        if (hook === 'block' && mode === 'fallback') {
            for (const driver of drivers) {
                await warn(`Possibly missing firmware for module: ${driver}`);
            }
        }

        if (appConfig.shouldExit()) {
            return;
        }
    }

    await msg1('Generating module dependencies');
    await sleep(getRandomInt(200, 500) / speedFactor);

    await msg1(`Creating ${zip}-compressed initcpio image: ${image}`);
    await sleep(getRandomInt(500, 2500) / speedFactor);

    await msg1('Image generation successful');
}

async function mkinitcpio(speedFactor = 1): Promise<void> {
    const [BOOT_HOOKS_LIST, CFILES_LIST, OS_RELEASES_LIST] = await Promise.all([
        loadData('boot_hooks'),
        loadData('cfiles'),
        loadData('os_releases'),
    ]);

    // Default configuration
    const appConfig: AppConfig = {
        shouldExit: () => false
    };

    // Select hooks including required ones
    const hooks = BOOT_HOOKS_LIST.filter(hook => 
        REQUIRED_HOOKS.includes(hook) || getRandomInt(0, 10) < 3
    );

    // Find drivers with potential firmware issues
    const drivers = CFILES_LIST
        .filter(file => file.match(/^drivers\/scsi.*\/([^\/\.]+)\.c$/))
        .map(file => file.match(/^drivers\/scsi.*\/([^\/\.]+)\.c$/)?.[1] || '')
        .filter(Boolean)
        .slice(0, getRandomInt(0, 5));

    // Set preset and select random OS release and compression format
    const preset = 'linux';
    const osRelease = OS_RELEASES_LIST[getRandomInt(0, OS_RELEASES_LIST.length)];
    const zip = COMPRESSION_FORMATS_LIST[getRandomInt(0, COMPRESSION_FORMATS_LIST.length)];

    // Build both default and fallback images
    await build(hooks, preset, 'default', zip, drivers, osRelease, appConfig, speedFactor);
    await build(hooks, preset, 'fallback', zip, drivers, osRelease, appConfig, speedFactor);
}
mkinitcpio.signature = 'mkinitcpio --generate /boot/initramfs-custom2.img --kernel 5.7.12-arch1-1';
export default mkinitcpio;