import { loadData } from '../utils/dataLoader.js';
import { sleep, getRandomInt } from '../utils/helpers.js';
import { writeLine } from '../utils/environment.js';

// Gemini CLI 主色与渐变 (ANSI 24-bit)
const BRAND = '\x1b[38;2;66;133;244m';      // Google Blue #4285F4
const PURPLE = '\x1b[38;2;156;39;176m';   // 渐变中段 #9C27B0
const PINK = '\x1b[38;2;233;30;99m';      // 渐变末段 #E91E63
const CYAN = '\x1b[38;2;0;188;212m';      // Tips 用 #00BCD4
const GREEN = '\x1b[38;2;76;175;80m';     // 目录 #4CAF50
const RESET = '\x1b[0m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';

// 块字符拼成的 > GEMINI 图案（6 行，每行 7 个 5 宽字符格：> G E M I N I）
const GEMINI_ART = [
    '█       ███ █████ █   █  ███ █   █  ███ ',
    ' ██   █   █ █     ██ ██   █  ██  █   █  ',
    '   █  █     ███   █ █ █   █  █ █ █   █  ',
    '   ██ █  ██ █     █   █   █  █  ██   █  ',
    ' ██   █   █ █     █   █   █  █   █   █  ',
    '█      ███  █████ █   █  ███ █   █  ███ ',
];

function drawGeminiBanner(): void {
    const segments = [
        { start: 0, end: 10, color: BRAND },   // > G 蓝
        { start: 10, end: 20, color: PURPLE },  // E M 紫
        { start: 20, end: 40, color: PINK },   // I N I 粉
    ];
    for (const line of GEMINI_ART) {
        let out = '  ';
        for (const seg of segments) {
            out += seg.color + line.slice(seg.start, seg.end) + RESET;
        }
        writeLine(out);
    }
}

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
    await sleep(getRandomInt(50, 160));
}

async function simulateGeminiCli(): Promise<void> {
    writeLine('');
    // 首次欢迎：块字符拼成的 > GEMINI 图案（蓝→紫→粉渐变）+ Tips（仅出现一次）
    drawGeminiBanner();
    writeLine('');
    writeLine(CYAN + '  Tips for getting started:' + RESET);
    writeLine(CYAN + '  1. Ask questions, edit files, or run commands.' + RESET);
    writeLine(CYAN + '  2. Be specific for the best results.' + RESET);
    writeLine(CYAN + '  3. Create GEMINI.md files to customize your interactions with Gemini.' + RESET);
    writeLine(CYAN + '  4. /help for more information.' + RESET);
    writeLine('');
    writeLine(DIM + '  Using 1 GEMINI.md file' + RESET + '                    ' + DIM + '1 MCP server' + RESET);
    writeLine('  ' + BRAND + '> ' + RESET + 'Ask Gemini to scaffold a web app');
    writeLine('');
    writeLine(GREEN + '  ~/Developer/playground' + RESET + DIM + '    sandbox-exec (minimal)    ' + RESET + BRAND + 'gemini-3-pro' + RESET);
    writeLine('');
    await sleep(900);

    const lines = await loadData('gemini_cli');
    if (!lines.length) {
        writeLine(DIM + '  (No log data loaded for Gemini CLI)' + RESET);
        await sleep(500);
        return;
    }

    // 从 “Starting Gemini CLI...” 起播报，跳过数据文件里的重复标题行（前 4 行）
    const startFrom = 4;
    const logLines = lines.slice(startFrom);

    for (const raw of logLines) {
        if (raw === '') {
            writeLine('');
            await sleep(getRandomInt(60, 120));
        } else {
            await outputLine(raw);
        }
    }
    writeLine('');
}

async function geminiCli(): Promise<void> {
    await simulateGeminiCli();
}

geminiCli.signature = 'gemini cli';
export default geminiCli;
