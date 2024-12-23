export interface Environment {
    isNode: boolean;
    isBrowser: boolean;
}


export class EnvDetector {
    static isNode(): boolean {
        return (
            typeof process !== 'undefined' &&
            process.versions != null &&
            process.versions.node != null
        );
    }

    static isBrowser(): boolean {
        return (
            typeof window !== 'undefined' &&
            typeof window.document !== 'undefined'
        );
    }

    static getEnvironment(): Environment {
        return {
            isNode: this.isNode(),
            isBrowser: this.isBrowser(),
        };
    }
}

class BrowserOra {
    // spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    // frame = 0;
    val: string;
    constructor() {
        this.val = ''
    }
    get text() {
        return this.val;
    }
    set text(val: string) {
        this.val = val;
        if (EnvDetector.isBrowser() && (window as any).terminal) {
            (window as any).terminal.write('\x1b[2K\r');
            (window as any).terminal.write(`${val}`);
            return;
        }
    }
    start() {}
    stop() {}
    succeed() {}
    fail() {}
    warn() {}
    info() {}
    stopAndPersist() {}
}

export const writeLine = (str: string = '') => {
    if (EnvDetector.isBrowser() && (window as any).terminal) {
        (window as any).terminal.writeln(str);
        return;
    }
    console.log(str);
}

export const write = (str: string = '') => {
    if (EnvDetector.isBrowser() && (window as any).terminal) {
        (window as any).terminal.write(str);
        return;
    }
    if (EnvDetector.isNode()) process.stdout.write(str);
}

// 获取终端宽度
export function getTerminalWidth(): number {
    if (EnvDetector.isNode() && process.stdout.columns) return process.stdout.columns;
    if (EnvDetector.isBrowser() && (window as any).terminal.cols) return (window as any).terminal.cols;
    return 80;
}

export const oraFun = async () => {
    if (EnvDetector.isNode()) {
        const ora = (await import('ora')).default;
        return ora();
    }
    return new BrowserOra();
}