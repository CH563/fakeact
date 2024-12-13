# Fakeact - 命令行摸鱼神器

[![license](http://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CH563/fakeact/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/CH563/fakeact.svg)](https://github.com/CH563/fakeact/stargazers)

> 参考Rust版 [Genact](https://github.com/svenstaro/genact) 实现，日志数据也来源于该项目

🐟模拟各种下载安装编辑的日志实时输出，假装很忙，摸鱼不慌张

运行后，只是模拟日志输出，**不会处理或安装任何数据**，让命令行输出看起来很专业和处于忙碌状态

![](https://github.com/CH563/fakeact/blob/main/gifs/cc.gif)


### 按需运行

使用“npx”你可以运行该脚本而无需先安装它：

```bash
npx fakeact
```

### 全局安装

```bash
npm install fakeact -g
```

全局安装 `fakeact` ，可以直接运行 fakeact 使用

### 使用

    A command line fake active tool

    Usage: fakeact [OPTIONS]

    Options:
      -l, --list                                       list available modules
      -m, --modules <MODULES>                          run only these modules [possible values: ansible, bootlog, botnet, bruteforce, cargo, cc,
                                                       composer, cryptomining, dockerBuild, dockerImageRm, download, julia, kernelCompile, memdump,
                                                       mkinitcpio, rkhunter, simcity, terraform, weblog] (default: "all")
      -s, --speed-factor <SPEED_FACTOR>                global speed factor (default: "1")
      -h, --help                                       display help for command
      -V, --version                                    display version


### 支持模拟运行模块

- [x] ansible - 模拟Ansible部署日志
- [x] bootlog - 模拟系统启动日志
- [ ] botnet - 模拟僵尸网络活动日志
- [ ] bruteforce - 模拟暴力破解日志
- [ ] cargo - 模拟Rust Cargo构建日志
- [ ] cc - 模拟C/C++编译日志
- [x] composer - 模拟PHP Composer安装日志
- [ ] cryptomining - 模拟加密货币挖矿日志
- [x] dockerBuild - 模拟Docker构建日志
- [ ] dockerImageRm - 模拟Docker镜像删除日志
- [x] download - 模拟文件下载日志
- [ ] julia - 模拟Julia包管理器日志
- [ ] kernelCompile - 模拟内核编译日志
- [ ] memdump - 模拟内存转储日志
- [ ] mkinitcpio - 模拟initramfs生成日志
- [ ] rkhunter - 模拟rootkit扫描日志
- [ ] simcity - 模拟SimCity游戏日志
- [ ] terraform - 模拟Terraform部署日志
- [ ] weblog - 模拟Web服务器访问日志


