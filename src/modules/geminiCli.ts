import chalk from 'chalk';
import { sleep, getRandomInt, getRandomItem } from '../utils/helpers.js';
import { writeLine } from '../utils/environment.js';

const FILES = [
    'src/components/LoginForm.tsx',
    'src/components/Button.tsx',
    'src/pages/dashboard.tsx',
    'src/utils/format.ts',
    'src/api/auth.ts',
];

const TOOLS = ['read_file', 'run_shell_command', 'write_file'];

async function geminiCli(speedFactor: number = 1): Promise<void> {
    writeLine(chalk.bold('Gemini CLI · Build, debug & deploy with AI'));
    const steps = getRandomInt(4, 8);
    for (let i = 0; i < steps; i++) {
        const tool = getRandomItem(TOOLS);
        const file = getRandomItem(FILES);
        writeLine(`Tool: ${tool}`);
        writeLine(`  path: ${file}`);
        await sleep(getRandomInt(200, 900) / speedFactor);
        if (tool === 'run_shell_command') {
            writeLine('  $ npm test');
            await sleep(getRandomInt(300, 800) / speedFactor);
        }
        writeLine(chalk.green(`  ✓ ${tool} completed`));
        await sleep(getRandomInt(100, 500) / speedFactor);
    }
    writeLine('Summary: Refactored a component to use a form library.');
}

geminiCli.signature = 'gemini cli';
export default geminiCli;
