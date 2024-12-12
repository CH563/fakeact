import chalk from 'chalk';
import delay from 'delay';

async function composer(speedFactor = 1) {
    const files = [
        'main.cpp',
        'utils.cpp',
        'helper.cpp',
        // ... 更多文件
    ];

    for (const file of files) {
        console.log(chalk.cyan(`[CC] 编译 ${file}`));
        await delay(1000 / speedFactor);

        // 随机编译警告
        if (Math.random() > 0.7) {
            console.log(
                chalk.yellow(
                    `警告: ${file}:${Math.floor(
                        Math.random() * 100
                    )}: 未使用的变量`
                )
            );
        }
    }
}

export default composer;
