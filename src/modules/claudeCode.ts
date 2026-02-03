import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { sleep, getRandomInt, getRandomItem } from '../utils/helpers.js';
import { writeLine } from '../utils/environment.js';

// Claude Code 主色 #d97757 -> RGB 217, 119, 87 (ANSI 24-bit 保证浏览器 xterm 一致)
const BRAND = '\x1b[38;2;217;119;87m';
const RESET = '\x1b[0m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';

const SCENARIOS = [
    { key: 'claude_code_onboarding', label: 'Code onboarding' },
    { key: 'claude_code_prs', label: 'Turn issues into PRs' },
    { key: 'claude_code_edits', label: 'Make powerful edits' },
] as const;

function formatLogLine(raw: string): string {
    if (raw.startsWith('b:')) {
        return BRAND + raw.slice(2).trimStart() + RESET;
    }
    if (raw.startsWith('d:')) {
        return DIM + raw.slice(2).trimStart() + RESET;
    }
    return raw;
}

async function outputLine(raw: string): Promise<void> {
    writeLine(formatLogLine(raw));
    await sleep(getRandomInt(60, 180));
}

async function simulateClaudeCode(): Promise<void> {
    writeLine('');
    writeLine(BRAND + '* ' + RESET + DIM + 'Welcome to the ' + RESET + BRAND + 'Claude Code' + RESET + DIM + ' research preview!' + RESET);
    writeLine('');
    writeLine(DIM + ' ✈ Login successful. Press ' + RESET + BOLD + 'Enter' + RESET + DIM + ' to continue' + RESET);
    await sleep(600);

    const scenario = getRandomItem(SCENARIOS);
    const lines = await loadData(scenario.key);
    if (!lines.length) {
        writeLine(DIM + '  (No log data loaded for ' + scenario.label + ')' + RESET);
        await sleep(500);
        return;
    }

    for (const raw of lines) {
        if (raw === '') {
            writeLine('');
            await sleep(getRandomInt(80, 150));
        } else {
            await outputLine(raw);
        }
    }
    writeLine('');
}

async function claudeCode(): Promise<void> {
    await simulateClaudeCode();
}

claudeCode.signature = 'claude code';
export default claudeCode;
