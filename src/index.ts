import { Command } from 'commander';
import runModule from './modules/index.js';
import { getRandomItem } from './utils/helpers.js'

const program = new Command();

program
    .name('Fakeact')
    .description('一个假装在执行任务的命令行工具')
    .option('-m, --modules <modules>', '指定要运行的模块', 'all')
    .option('-s, --speed-factor <factor>', '速度因子', '1')
    .option('--exit-after-time <time>', '指定运行时间后退出')
    .parse();


console.log(program.opts());
const { modules, speedFactor, exitAfterTime } = program.opts();
const modulelists = Object.keys(runModule);
let name = modules;
if (!modulelists.includes(name)) name = getRandomItem(modulelists);

runModule[name](Number(speedFactor));
