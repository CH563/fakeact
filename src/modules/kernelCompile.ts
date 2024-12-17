import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';

// Architecture options
const ARCHES = [
    'alpha', 'arc', 'arm', 'arm64', 'blackfin', 'c6x', 'cris', 'frv',
    'h8300', 'hexagon', 'ia64', 'm32r', 'm68k', 'metag', 'microblaze',
    'mips', 'mn10300', 'nios2', 'openrisc', 'parisc', 'powerpc', 's390',
    'score', 'sh', 'sparc', 'tile', 'um', 'unicore32', 'x86', 'xtensa'
];

// Generate a build step for a header file
function genHeader(arch: string, cfilesList: string[]): string {
    const RARE_CMDS = ['SYSTBL ', 'SYSHDR '];
    const CMDS = ['WRAP   ', 'CHK    ', 'UPD    '];
    
    const isRareCmd = Math.random() < 1/15;
    const cmd = isRareCmd ? 
        RARE_CMDS[getRandomInt(0, RARE_CMDS.length - 1)] :
        CMDS[getRandomInt(0, CMDS.length - 1)];
    
    const cfile = cfilesList[getRandomInt(0, cfilesList.length - 1)];
    let file = `${cfile.slice(0, -1)}h`;
    
    if (file.startsWith('arch')) {
        file = file.replace(/arch\/([a-z0-9_])+\//, `arch/${arch}/`);
    }
    
    return `  ${cmd} ${file}`;
}

// Generate a build step for an object file
function genObject(arch: string, cfilesList: string[]): string {
    const RARE_CMDS = ['HOSTCC ', 'AS     '];
    
    let cmd: string;
    if (Math.random() < 1/15) {
        cmd = RARE_CMDS[getRandomInt(0, RARE_CMDS.length - 1)];
    } else if (Math.random() < 0.33) {
        cmd = 'AR     ';
    } else {
        cmd = 'CC     ';
    }
    
    const cfile = cfilesList[getRandomInt(0, cfilesList.length - 1)];
    let file = `${cfile.slice(0, -1)}o`;
    
    if (file.startsWith('arch')) {
        file = file.replace(/arch\/([a-z0-9_])+\//, `arch/${arch}/`);
    }
    
    return `  ${cmd} ${file}`;
}

// Generate a 'special' build step
function genSpecial(arch: string): string {
    const SPECIALS = [
        'HOSTLD  arch/ARCH/tools/relocs',
        'HOSTLD  scripts/mod/modpost',
        'MKELF   scripts/mod/elfconfig.h',
        'LDS     arch/ARCH/entry/vdso/vdso32/vdso32.lds',
        'LDS     arch/ARCH/kernel/vmlinux.lds',
        'LDS     arch/ARCH/realmode/rm/realmode.lds',
        'LDS     arch/ARCH/boot/compressed/vmlinux.lds',
        'EXPORTS arch/ARCH/lib/lib-ksyms.o',
        'EXPORTS lib/lib-ksyms.o',
        'MODPOST vmlinux.o',
        'SORTEX  vmlinux',
        'SYSMAP  System.map',
        'VOFFSET arch/ARCH/boot/compressed/../voffset.h',
        'OBJCOPY arch/ARCH/entry/vdso/vdso32.so',
        'OBJCOPY arch/ARCH/realmode/rm/realmode.bin',
        'OBJCOPY arch/ARCH/boot/compressed/vmlinux.bin',
        'OBJCOPY arch/ARCH/boot/vmlinux.bin',
        'VDSO2C  arch/ARCH/entry/vdso/vdso-image-32.c',
        'VDSO    arch/ARCH/entry/vdso/vdso32.so.dbg',
        'RELOCS  arch/ARCH/realmode/rm/realmode.relocs',
        'PASYMS  arch/ARCH/realmode/rm/pasyms.h',
        'XZKERN  arch/ARCH/boot/compressed/vmlinux.bin.xz',
        'MKPIGGY arch/ARCH/boot/compressed/piggy.S',
        'DATAREL arch/ARCH/boot/compressed/vmlinux',
        'ZOFFSET arch/ARCH/boot/zoffset.h'
    ];
    
    const special = SPECIALS[getRandomInt(0, SPECIALS.length - 1)];
    return `  ${special.replace(/ARCH/g, arch)}`;
}

// Generate a line from `make` output
function genLine(arch: string, cfilesList: string[]): string {
    if (Math.random() < 1/50) {
        return genSpecial(arch);
    } else if (Math.random() < 0.1) {
        return genHeader(arch, cfilesList);
    } else {
        return genObject(arch, cfilesList);
    }
}

interface AppConfig {
    shouldExit?: boolean;
}

async function kernelCompile(config: AppConfig = {}, speedFactor = 1) {
    try {
        // Load C files list
        const CFILES_LIST = await loadData('cfiles');
        
        // Generate random number of lines
        const numLines = getRandomInt(50, 500);
        
        // Choose random architecture
        const arch = ARCHES[getRandomInt(0, ARCHES.length - 1)];
        
        // Generate build output
        for (let i = 0; i < numLines; i++) {
            if (config.shouldExit) {
                return;
            }
            
            const line = genLine(arch, CFILES_LIST);
            console.log(chalk.white(line));
            
            // Random sleep between lines
            const sleepLength = getRandomInt(10, 1000) / speedFactor;
            await sleep(sleepLength);
        }
        
        // Final build steps
        console.log(chalk.white(`BUILD   arch/${arch}/boot/bzImage`));
        console.log();
        
        const bytes = getRandomInt(9000, 1000000);
        const paddedBytes = getRandomInt(bytes, 1100000);
        console.log(chalk.white(`Setup is ${bytes} bytes (padded to ${paddedBytes} bytes).`));
        
        const system = getRandomInt(300, 3000);
        console.log(chalk.white(`System is ${system} kB`));
        
        const crc = getRandomInt(0x10000000, 0xffffffff);
        console.log(chalk.white(`CRC ${crc.toString(16)}`));
        
        console.log(chalk.white(`Kernel: arch/${arch}/boot/bzImage is ready (#1)`));
        console.log();
        
    } catch (error) {
        console.error('Error during kernel compilation:', error);
        throw error;
    }
}

export default kernelCompile;