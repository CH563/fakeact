import chalk from 'chalk';
import { getRandomInt, sleep } from '../utils/helpers.js';
import { write, writeLine } from '../utils/environment.js';

interface AppConfig {
    shouldExit?: boolean;
}

// 常见的内存模式
const MEMORY_PATTERNS = {
    NULL: '00',
    UNINITIALIZED: 'CC',
    FREED: 'DD',
    ALLOCATED: 'CD',
    STACK_GUARD: 'FD',
    HEAP_GUARD: 'FE'
};

// 模拟不同类型的内存区域
enum MemoryRegionType {
    CODE,
    HEAP,
    STACK,
    MAPPED,
    NULL_PAGE
}

interface MemoryRegion {
    type: MemoryRegionType;
    pattern: string[];
    probability: number; // 该模式出现的概率
}

// 生成更真实的内存数据模式
function generateMemoryPatterns(regionType: MemoryRegionType): string[] {
    const patterns: MemoryRegion[] = [
        {
            type: MemoryRegionType.CODE,
            pattern: ['48', '89', 'E5', '53', '48', '83', 'EC', '20'], // 常见的x64指令序列
            probability: 0.7
        },
        {
            type: MemoryRegionType.HEAP,
            pattern: [MEMORY_PATTERNS.ALLOCATED, 'FF', '00', MEMORY_PATTERNS.HEAP_GUARD],
            probability: 0.6
        },
        {
            type: MemoryRegionType.STACK,
            pattern: ['FF', 'FF', MEMORY_PATTERNS.STACK_GUARD, '00'],
            probability: 0.5
        },
        {
            type: MemoryRegionType.NULL_PAGE,
            pattern: Array(8).fill(MEMORY_PATTERNS.NULL),
            probability: 0.9
        }
    ];

    // 根据区域类型和概率选择合适的模式
    const applicablePatterns = patterns.filter(p => 
        p.type === regionType && Math.random() < p.probability
    );

    if (applicablePatterns.length > 0) {
        const selectedPattern = applicablePatterns[0].pattern;
        return selectedPattern.concat(generateRandomBytes(16 - selectedPattern.length));
    }

    return generateRandomBytes(16);
}

// 生成随机字节，但保持一定的模式
function generateRandomBytes(count: number): string[] {
    const bytes: string[] = [];
    let usePattern = Math.random() < 0.7; // 70%概率使用模式
    let currentPattern = '';

    for (let i = 0; i < count; i++) {
        if (usePattern && i % 4 === 0) { // 每4个字节可能改变模式
            const patternTypes = Object.values(MEMORY_PATTERNS);
            currentPattern = patternTypes[Math.floor(Math.random() * patternTypes.length)];
        }

        if (usePattern && currentPattern) {
            bytes.push(currentPattern);
        } else {
            bytes.push(generateRandomHexByte());
        }
    }

    return bytes;
}

function generateRandomHexByte(): string {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase();
}

function isPrintableAscii(char: number): boolean {
    return char >= 0x20 && char <= 0x7e;
}

// 生成更真实的内存地址
function generateMemoryAddress(): bigint {
    // 常见的内存区域起始地址
    const commonAddresses = [
        0x400000n, // 代码段
        0x7ffffffn, // 栈
        0x8048000n, // 堆
        0x0n, // NULL页
    ];

    const baseAddr = commonAddresses[Math.floor(Math.random() * commonAddresses.length)];
    const offset = BigInt(Math.floor(Math.random() * 0x10000)) * 16n;
    return baseAddr + offset;
}

async function memdump(config: AppConfig = {}, speedFactor: number = 1) {
    // 移除spinner，使输出更接近原生内存转储
    try {
        let currentLoc = generateMemoryAddress();
        const numLines = getRandomInt(50, 200);
        let regionType = MemoryRegionType.CODE; // 初始区域类型
        
        // 设置输出模式
        write('\x1b[?25l'); // 隐藏光标
        
        for (let i = 0; i < numLines; i++) {
            if (config.shouldExit) {
                write('\x1b[?25h'); // 恢复光标
                return;
            }

            // 地址输出
            write(chalk.gray(`${currentLoc.toString(16).padStart(16, '0')}  `));

            // 可能切换内存区域类型
            if (i % 16 === 0) {
                regionType = Object.values(MemoryRegionType)[
                    Math.floor(Math.random() * 5)
                ] as MemoryRegionType;
            }

            // 生成该行的十六进制值
            const values = generateMemoryPatterns(regionType);
            
            // 打印十六进制值
            for (let j = 0; j < values.length; j++) {
                if (j === 8) write(' ');
                write(chalk.hex('#A0A0A0')(values[j] + ' '));
                
                // 更自然的打印延迟
                const valueDelay = getRandomInt(10, 50);
                await sleep(valueDelay / speedFactor);
            }
            
            // ASCII表示
            write(' |');
            for (const value of values) {
                const charCode = parseInt(value, 16);
                const char = isPrintableAscii(charCode) ? 
                    String.fromCharCode(charCode) : 
                    chalk.dim('.');
                write(char);
            }
            write('|');
            
            // 行间延迟
            const rowDelay = getRandomInt(20, 80); // 更快的行间延迟
            await sleep(rowDelay / speedFactor);
            
            currentLoc += 16n;
            writeLine();
        }
        
        write('\x1b[?25h'); // 恢复光标
        
    } catch (error) {
        write('\x1b[?25h'); // 确保恢复光标
        console.error('\nMemory dump failed:', error);
    }
}
memdump.signature = 'memdump -k -v';
export default memdump;