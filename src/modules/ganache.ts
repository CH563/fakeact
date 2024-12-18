import chalk from 'chalk';
import { sleep, getRandomItem, getRandomInt } from '../utils/helpers.js';

interface GanacheConfig {
    port?: number;
    networkId?: number;
    blockTime?: number;
    accounts?: number;
    defaultBalanceEther?: number;
    gasPrice?: number;
    gasLimit?: number;
    fork?: string;
    speedFactor?: number;
}

class GanacheSimulator {
    private config: GanacheConfig;
    private accounts: Array<{ address: string; privateKey: string; balance: string }>;
    private currentBlock: number;
    private isRunning: boolean;
    private txCount: number;
    private startTime: number;

    constructor(speedFactor: number = 1, config: GanacheConfig = {}) {
        this.config = {
            port: config.port || 8545,
            networkId: config.networkId || 1337,
            blockTime: config.blockTime || 0,
            accounts: config.accounts || 10,
            defaultBalanceEther: config.defaultBalanceEther || 1000,
            gasPrice: config.gasPrice || 20000000000,
            gasLimit: config.gasLimit || 6721975,
            fork: config.fork,
            speedFactor: speedFactor || 1,
        };
        this.accounts = [];
        this.currentBlock = 0;
        this.isRunning = false;
        this.txCount = 0;
        this.startTime = Date.now();
    }

    // 生成随机以太坊地址
    private generateAddress(): string {
        return '0x' + Array.from({length: 40}, () => 
            Math.floor(Math.random() * 16).toString(16)).join('');
    }

    // 生成随机私钥
    private generatePrivateKey(): string {
        return '0x' + Array.from({length: 64}, () => 
            Math.floor(Math.random() * 16).toString(16)).join('');
    }

    // 生成账户
    private generateAccounts(): void {
        for (let i = 0; i < this.config.accounts!; i++) {
            this.accounts.push({
                address: this.generateAddress(),
                privateKey: this.generatePrivateKey(),
                balance: `${this.config.defaultBalanceEther} ETH`,
            });
        }
    }

    // 模拟交易哈希
    private generateTxHash(): string {
        return '0x' + Array.from({length: 64}, () => 
            Math.floor(Math.random() * 16).toString(16)).join('');
    }

    // 模拟交易数据
    private async simulateTransaction(): Promise<void> {
        const fromAccount = getRandomItem(this.accounts);
        const toAccount = getRandomItem(this.accounts.filter(a => a !== fromAccount));
        const value = (Math.random() * 10).toFixed(4);
        const txHash = this.generateTxHash();
        
        console.log(chalk.dim(`eth_sendTransaction`));
        console.log(
            chalk.dim(`  Transaction: ${txHash}\n`) +
            chalk.dim(`  From:       ${fromAccount.address}\n`) +
            chalk.dim(`  To:         ${toAccount.address}\n`) +
            chalk.dim(`  Value:      ${value} ETH\n`) +
            chalk.dim(`  Gas used:   ${Math.floor(Math.random() * 50000 + 21000)}`)
        );
        this.txCount++;
    }

    // 打印启动信息
    private async printStartupInfo(): Promise<void> {
        console.log(chalk.green('\nGanache CLI v2.13.2 (ganache-core: 2.13.2)'));
        
        if (this.config.fork) {
            console.log(chalk.yellow(`\nForking from ${this.config.fork} at block number ${Math.floor(Math.random() * 1000000)}`));
        }

        console.log(chalk.green('\nAvailable Accounts'));
        console.log(chalk.green('=================='));
        this.accounts.forEach((account, index) => {
            console.log(`(${index}) ${account.address} (${account.balance})`);
        });

        console.log(chalk.green('\nPrivate Keys'));
        console.log(chalk.green('=================='));
        this.accounts.forEach((account, index) => {
            console.log(`(${index}) ${account.privateKey}`);
        });

        console.log(chalk.green('\nHD Wallet'));
        console.log(chalk.green('=================='));
        console.log(`Mnemonic:       surround taste account animal auto dumb label impact fork wild lawsuit dumb`);
        console.log(`Base HD Path:   m/44'/60'/0'/0/{account_index}`);

        console.log(chalk.green('\nGas Price'));
        console.log(chalk.green('=================='));
        console.log(`${this.config.gasPrice} wei`);

        console.log(chalk.green('\nGas Limit'));
        console.log(chalk.green('=================='));
        console.log(`${this.config.gasLimit}`);

        console.log(chalk.green('\nListening on'));
        console.log(chalk.green('=================='));
        console.log(`http://127.0.0.1:${this.config.port}`);
    }

    // 模拟区块生成
    private async simulateNewBlock(): Promise<void> {
        this.currentBlock++;
        const timestamp = Math.floor(Date.now() / 1000);
        console.log(
            chalk.dim(`Block Number: ${this.currentBlock} `) +
            chalk.dim(`Timestamp: ${timestamp}`)
        );

        // 随机生成1-3笔交易
        const txCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < txCount; i++) {
            await sleep(500 * (this.config.speedFactor || 1));
            await this.simulateTransaction();
        }
    }

    // 启动模拟器
    public async start(): Promise<void> {
        this.isRunning = true;
        this.generateAccounts();
        await this.printStartupInfo();

        console.log(chalk.green('\nBlockchain Started'));
        console.log(chalk.green('==================\n'));

        while (this.isRunning) {
            await this.simulateNewBlock();
            
            if (this.config.blockTime) {
                await sleep(this.config.blockTime * 1000 * (this.config.speedFactor || 1));
            } else {
                await sleep(1000 * (this.config.speedFactor || 1));
            }

            // 随机生成 RPC 调用日志
            if (Math.random() > 0.7) {
                const methods = ['eth_getBalance', 'eth_getTransactionCount', 'eth_getCode', 'eth_call'];
                console.log(chalk.dim(`\n${getRandomItem(methods)}`));
            }
        }
    }

    // 停止模拟器
    public stop(): void {
        this.isRunning = false;
        const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
        console.log(chalk.yellow(`\nGanache CLI stopped after ${duration}s`));
        console.log(chalk.yellow(`Generated ${this.currentBlock} blocks`));
        console.log(chalk.yellow(`Processed ${this.txCount} transactions`));
    }
}


async function ganache(speedFactor: number = 1, config: GanacheConfig = {}): Promise<void> {
    const simulator = new GanacheSimulator(speedFactor, config);

    await simulator.start();
    await sleep(getRandomInt(16000, 30000));
    simulator.stop();
}

ganache.signature = 'ganache-cli';
export default ganache;