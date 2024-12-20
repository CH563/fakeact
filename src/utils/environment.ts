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

export const writeLine = (str: string = '') => {
    if (EnvDetector.isBrowser() && (window as any).terminal) {
        (window as any).terminal.writeln(str);
        return;
    }
    console.log(str);
}

// 获取终端宽度
export function getTerminalWidth(): number {
    if (EnvDetector.isNode() && process.stdout.columns) return process.stdout.columns;
    if (EnvDetector.isBrowser() && (window as any).terminal.cols) return (window as any).terminal.cols;
    return 80;
}