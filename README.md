<img src="https://github.com/CH563/fakeact/blob/web/app/public/favicon.svg" style="width:80px">

# Fakeact - Command line fake tool

[![Stars](https://img.shields.io/github/stars/CH563/fakeact.svg)](https://github.com/CH563/fakeact/stargazers)
[![npm](https://img.shields.io/npm/v/fakeact.svg)](https://www.npmjs.com/package/fakeact) 
[![npm downloads](https://img.shields.io/npm/dm/fakeact?color=blue&label=npm%20downloads)](https://www.npmjs.com/package/fakeact)
[![license](http://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/CH563/fakeact/blob/main/LICENSE)

Website: [https://fakeact.fun](https://fakeact.fun)

🐟Fake live output of various installation and compilation logs, pretending to be busy to make you look professional, but not doing anything

When run, it just fake log printout and **doesn't process or install any data**, making the command line output look professional and in a busy state

![](https://github.com/CH563/fakeact/blob/main/gifs/download.gif)
![](https://github.com/CH563/fakeact/blob/main/gifs/composer.gif)


### Running on-demand

Using `npx` ou can run the script without installing it first:

```bash
npx fakeact
```

### Installation

```bash
npm install fakeact -g
```

This will install `fakeact` globally so that it may be run from the command line anywhere.


### Run in Docker

```bash
docker run -it --rm ch563/fakeact -m composer
```

Modify -m or add parameters to run different modules

### Usage

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


### Support modules

- [x] ansible - Ansible Deployment Log Simulator | DevOps Testing Tool
- [x] bootlog - System Boot Log Simulator | Linux Startup Log Generator
- [x] botnet - Botnet Activity Log Generator | Network Security Testing
- [x] bruteforce - Brute Force Attack Log Simulator | Security Testing Tool
- [x] cargo - Rust Cargo Build Log Generator | Development Testing Tool
- [x] cc - C/C++ Compilation Log Generator | Build Process Simulator
- [x] composer - PHP Composer Log Generator | Package Installation Simulator
- [x] cryptomining - Cryptocurrency Mining Log Generator | Blockchain Tool
- [x] dockerBuild - Docker Build Log Generator | Container Build Simulator
- [x] dockerImageRm - Docker Image Removal Log Generator | Container Management
- [x] download - File Download Log Generator | Network Transfer Simulator
- [x] julia - Julia Package Manager Log Simulator | Scientific Computing
- [x] kernelCompile - Linux Kernel Compilation Log Generator | System Development
- [x] memdump - Memory Dump Log Generator | System Analysis Tool
- [x] mkinitcpio - Initramfs Generation Log Simulator | Linux Boot Tool
- [x] rkhunter - Rootkit Scanner Log Generator | Security Analysis Tool
- [x] simcity - SimCity Game Log Generator | Gaming Development Tool
- [x] terraform - Terraform Deployment Log Generator | Infrastructure as Code
- [x] weblog - Web Server Access Log Generator | Website Analytics Tool
- [x] npm - NPM Installation Log Generator | Node.js Development Tool
- [x] nextBuild - Next.js Build Log Generator | React Framework Tool
- [x] ganache - Ganache Blockchain Log Generator | Ethereum Development
- [x] pip - Pip Installation Log Generator | Python Package Tool

### Building

git clone and `pnpm`:

    git clone https://github.com/CH563/fakeact.git
    cd fakeact
    pnpm install
    pnpm run build

## Thanks to

inspired credit to Rust [Genact](https://github.com/svenstaro/genact), and Log data

## License

Fakeact is licensed under the [MIT License](https://github.com/CH563/fakeact/blob/main/LICENSE).
