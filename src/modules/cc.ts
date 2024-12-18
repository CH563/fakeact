import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';
import path from 'path';

// Constants
const COMPILERS = ['gcc', 'clang'];
const FLAGS_OPT = ['-O0', '-O1', '-O2', '-O3', '-Og', '-Os'];
const FLAGS_WARN_BASE = ['-Wall', '-Wall -Wextra'];
const FLAGS_WARN = [
    '-Wno-unused-variable',
    '-Wno-sign-compare',
    '-Wno-unknown-pragmas',
    '-Wno-parentheses',
    '-Wundef',
    '-Wwrite-strings',
    '-Wold-style-definition',
];
const FLAGS_F = ['-fsigned-char', '-funroll-loops', '-fgnu89-inline', '-fPIC'];
const FLAGS_ARCH = ['-march=x86-64', '-mtune=generic', '-pipe'];
const FLAGS_DEF_BASE = ['-DDEBUG', '-DNDEBUG'];
const FLAGS_DEF = [
    '-D_REENTRANT',
    '-DMATH_LOOP',
    '-D_LIBS_REENTRANT',
    '-DNAMESPACE=lib',
    '-DMODULE_NAME=lib',
    '-DPIC',
    '-DSHARED',
];

interface AppConfig {
    shouldExit: boolean;
}

// Helper functions
function getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomMultiple<T>(array: T[], count: number): T[] {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateIncludes(fileList: string[], max: number): string {
    const includeFlags = new Set<string>();
    
    for (const file of fileList) {
        const dir = path.dirname(file);
        if (dir !== '.') {
            includeFlags.add(dir);
        }
    }
    
    const limitedFlags = getRandomMultiple([...includeFlags], max);
    return limitedFlags.map(flag => `-I${flag}`).join(' ');
}

function generateLinkerFlags(candidates: string[], n: number): string {
    const libraries = getRandomMultiple(candidates, n);
    return libraries.map(lib => `-l${lib}`).join(' ');
}

function generateRandomFlags(flags: string[], maxCount: number): string {
    const count = getRandomInt(0, maxCount);
    return getRandomMultiple(flags, count).join(' ');
}

async function print(message: string): Promise<void> {
    console.log(message);
}

async function newline(): Promise<void> {
    console.log('');
}

async function cc(config: AppConfig = { shouldExit: false }, speedFactor: number = 1): Promise<void> {
    // Load data
    const CFILES_LIST: string[] = await loadData('cfiles');
    const PACKAGES_LIST: string[] = await loadData('packages');
    
    // Choose compiler and package
    const compiler = getRandomElement(COMPILERS);
    const package_name = getRandomElement(PACKAGES_LIST);
    
    // Generate random number of files to compile
    const numCfiles = getRandomInt(100, 1000);
    const chosenFiles = getRandomMultiple(CFILES_LIST, numCfiles).sort();
    
    // Generate flags
    const opt = getRandomElement(FLAGS_OPT);
    const warnBase = getRandomElement(FLAGS_WARN_BASE);
    const warnAdditional = generateRandomFlags(FLAGS_WARN, FLAGS_WARN.length);
    const warnFinal = `${warnBase} ${warnAdditional}`;
    
    const fFlags = generateRandomFlags(FLAGS_F, FLAGS_F.length);
    const archFlags = generateRandomFlags(FLAGS_ARCH, FLAGS_ARCH.length);
    
    // Generate includes and linker flags
    const includes = generateIncludes(chosenFiles, 20);
    const linkerFlags = generateLinkerFlags(PACKAGES_LIST, getRandomInt(0, 10));
    
    // Generate definition flags
    const defsBase = getRandomElement(FLAGS_DEF_BASE);
    const defsAdditional = generateRandomFlags(FLAGS_DEF, FLAGS_DEF.length);
    const defsFinal = `${defsBase} ${defsAdditional}`;
    
    // Compile files
    for (const cfile of chosenFiles) {
        if (config.shouldExit) {
            return;
        }
        
        const outputFile = cfile.replace('.c', '.o');
        const command = `${compiler} -c ${opt} ${warnFinal} ${fFlags} ${archFlags} ${includes} ${defsFinal} -o ${outputFile}`;
        
        await print(command);
        await newline();
        await sleep(getRandomInt(30, 200) / speedFactor);
    }
    
    // Link everything together
    const objectFiles = chosenFiles.map(file => file.replace('.c', '.o')).join(' ');
    const linkCommand = `${compiler} -o ${package_name} ${objectFiles} ${linkerFlags}`;
    
    await print(linkCommand);
    await newline();
    await sleep(getRandomInt(300, 1000) / speedFactor);
}
cc.signature = 'gcc app.c';
export default cc;