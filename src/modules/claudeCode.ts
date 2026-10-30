import chalk from 'chalk';
import { sleep, getRandomInt, getRandomItem } from '../utils/helpers.js';
import { writeLine } from '../utils/environment.js';

const FILES = [
    'src/components/Button.tsx',
    'src/components/LoginForm.tsx',
    'src/pages/index.tsx',
    'src/utils/helpers.ts',
    'src/api/users.ts',
    'src/components/Modal.tsx',
];

const TOOLS = ['read_file', 'search_replace', 'write_file', 'run_terminal_cmd'];

async function claudeCode(speedFactor: number = 1): Promise<void> {
    writeLine(chalk.bold('Claude Code · AI coding assistant'));
    writeLine('Reading user request...');
    await sleep(400 / speedFactor);
    const steps = getRandomInt(4, 8);
    for (let i = 0; i < steps; i++) {
        const tool = getRandomItem(TOOLS);
        const file = getRandomItem(FILES);
        writeLine(`Running tool: ${tool}`);
        writeLine(`  path: ${file}`);
        await sleep(getRandomInt(200, 900) / speedFactor);
        if (tool === 'run_terminal_cmd') {
            writeLine('  $ npm run build');
            await sleep(getRandomInt(300, 800) / speedFactor);
        } else if (tool === 'search_replace' || tool === 'write_file') {
            writeLine('Applying edit...');
            await sleep(getRandomInt(200, 600) / speedFactor);
            writeLine(chalk.green('  ✓ Edit applied'));
        } else {
            writeLine(chalk.green('  ✓ Tool completed'));
        }
        await sleep(getRandomInt(100, 500) / speedFactor);
    }
    writeLine(chalk.green('Done.'));
}

claudeCode.signature = 'claude code';
export default claudeCode;
