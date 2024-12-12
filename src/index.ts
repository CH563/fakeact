import { Command } from 'commander';
import runModule from './modules/index.js';
import { getRandomItem } from './utils/helpers.js'

const program = new Command();
const modulelists = Object.keys(runModule);

program
    .name('fakeact')
    .description('A command line fake active tool')
    .option('-m, --modules <modules>', `run only these modules ${JSON.stringify(modulelists)}`, 'all')
    .option('-s, --speed-factor <factor>', 'global speed factor', '1')
    .option('--exit-after-time <time>', 'exit after specified running time (ms)')
    .parse();


console.log(program.opts());
const { modules, speedFactor, exitAfterTime } = program.opts();

let name = modules;
if (!modulelists.includes(name)) name = getRandomItem(modulelists);

runModule[name](Number(speedFactor));
