#!/usr/bin/env node

import { Command } from 'commander';
import runModule from './modules/index.js';
import { getRandomItem, executeNTimes } from './utils/helpers.js';

const program = new Command();
const modulelists = Object.keys(runModule).sort();

program
    .name('fakeact')
    .description('A command line fake active tool')
    .option('-l, --list', 'list available modules')
    .option('-m, --modules <modules>', `run only these modules ${JSON.stringify(modulelists)}`, 'all')
    .option('-s, --speed-factor <factor>', 'global speed factor', '1')
    .option('-t, --times <times>', 'execution times, 0 means infinite', '1')
    // .option('--exit-after-time <time>', 'exit after specified running time (ms)')
    .version('1.0.8')
    .parse();


// console.log(program.opts());
const { list, modules, speedFactor, times } = program.opts();
if (list) {
    console.log(modulelists.join('\n'));
    console.log('\nUsage: fakeact -m [module]')
    process.exit();
}
let name = modules;
if (!modulelists.includes(name)) name = getRandomItem(modulelists);
executeNTimes(Number(times), () => runModule[name](Number(speedFactor)));

