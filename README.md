# Fakeact - 命令行摸鱼神器

[![Stars](https://img.shields.io/github/stars/CH563/fakeact.svg)](https://github.com/CH563/fakeact/stargazers)
[![npm](https://img.shields.io/npm/v/fakeact.svg)](https://www.npmjs.com/package/fakeact) 
[![npm downloads](https://img.shields.io/npm/dm/fakeact?color=blue&label=npm%20downloads)](https://www.npmjs.com/package/fakeact)
[![license](http://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CH563/fakeact/blob/main/LICENSE)

> 参考Rust版 [Genact](https://github.com/svenstaro/genact) 实现，日志数据也来源于该项目

🐟模拟各种下载安装编译的日志实时输出，假装很忙，摸鱼不慌张

运行后，只是模拟日志打印输出，**不会处理或安装任何数据**，让命令行输出看起来很专业和处于忙碌状态

![](https://github.com/CH563/fakeact/blob/main/gifs/download.gif)
![](https://github.com/CH563/fakeact/blob/main/gifs/composer.gif)


### 按需运行

使用 `npx` 运行该脚本而无需先安装：

```bash
npx fakeact
```

### 全局安装

```bash
npm install fakeact -g
```

全局安装 `fakeact` ，可以直接运行 fakeact 使用


### Docker运行

```bash
docker run -it --rm ch563/fakeact -m composer
```

修改 -m 或 增加参数运行不同 module, 参考以下使用说明

### 使用

    A command line fake active tool

    Usage: fakeact [OPTIONS]

    Options:
      -l, --list                                       list available modules
      -m, --modules <modules>                          run only these modules [possible values: ansible, bootlog, botnet, bruteforce, cargo, cc,
                                                       composer, cryptomining, dockerBuild, dockerImageRm, download, julia, kernelCompile, memdump,
                                                       mkinitcpio, rkhunter, simcity, terraform, weblog] (default: "all")
      -s, --speed-factor <factor>                      global speed factor (default: "1")
      -t, --times <times>                              execution times, 0 means infinite (default: "1")
      -h, --help                                       display help for command
      -V, --version                                    display version


### 支持模拟运行模块

- [x] ansible - 模拟Ansible部署日志
- [x] bootlog - 模拟系统启动日志
- [x] botnet - 模拟僵尸网络活动日志
- [x] bruteforce - 模拟暴力破解日志
- [x] cargo - 模拟Rust Cargo构建日志
- [x] cc - 模拟C/C++编译日志
- [x] composer - 模拟PHP Composer安装日志
- [x] cryptomining - 模拟加密货币挖矿日志
- [x] dockerBuild - 模拟Docker构建日志
- [x] dockerImageRm - 模拟Docker镜像删除日志
- [x] download - 模拟文件下载日志
- [x] julia - 模拟Julia包管理器日志
- [x] kernelCompile - 模拟内核编译日志
- [x] memdump - 模拟内存转储日志
- [x] mkinitcpio - 模拟initramfs生成日志
- [x] rkhunter - 模拟rootkit扫描日志
- [x] simcity - 模拟SimCity游戏日志
- [x] terraform - 模拟Terraform部署日志
- [x] weblog - 模拟Web服务器访问日志
- [x] npm - 模拟NPM安装过程日志
- [x] nextBuild - 模拟nextjs build日志
- [x] ganache - 模拟ganache-cli区块链初始化、账户信息、交易日志
- [x] pip - 模拟pip install日志

### 本地构建

通过git clone下载源码，构建运行，为了模块共同减少空间推荐使用 `pnpm`:

    git clone https://github.com/CH563/fakeact.git
    cd fakeact
    pnpm install
    pnpm run build

## TODO

网页版，使用 `xtermjs` 在网页上运行输出

## License

Fakeact is licensed under the [MIT License](https://github.com/CH563/fakeact/blob/main/LICENSE).
