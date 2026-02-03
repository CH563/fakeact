export type ModuleSEO = {
    title: string;
    desc: string;
    keywords: string;
    /** Short name for schema.org */
    shortName: string;
    /** Category for schema.org */
    category: string;
};

export default {
    ansible: {
        title: 'Ansible Log Simulator - Generate Playbook & Deployment Logs Online | Fakeact',
        desc: 'Free online Ansible log generator. Create realistic playbook runs, task outputs, and deployment logs for DevOps testing, demos, and CI/CD pipeline development. No installation required.',
        keywords: 'ansible log generator, ansible playbook simulator, devops testing tool, ansible deployment logs, configuration management demo, ansible task output, fake ansible logs',
        shortName: 'Ansible Log Simulator',
        category: 'DevOps Tools',
    },
    bootlog: {
        title: 'Linux Boot Log Generator - Simulate dmesg & Kernel Startup Logs | Fakeact',
        desc: 'Generate realistic Linux boot logs including dmesg output, kernel initialization, and systemd startup sequences. Perfect for system administration training and log parser testing.',
        keywords: 'linux boot log generator, dmesg simulator, kernel startup logs, systemd boot logs, linux system logs, boot sequence simulator, fake dmesg output',
        shortName: 'Boot Log Generator',
        category: 'System Tools',
    },
    botnet: {
        title: 'Botnet Activity Log Simulator - Security Research & Testing | Fakeact',
        desc: 'Simulate botnet C2 communication logs for cybersecurity research and SIEM testing. Generate realistic malicious traffic patterns safely in your browser for security training.',
        keywords: 'botnet log simulator, security testing tool, c2 communication logs, cybersecurity research, malware simulation, threat analysis tool, siem testing',
        shortName: 'Botnet Log Simulator',
        category: 'Security Tools',
    },
    bruteforce: {
        title: 'Brute Force Attack Log Generator - Security Testing & IDS Development | Fakeact',
        desc: 'Create realistic brute force and password cracking logs for security testing. Simulate rainbow table attacks, hash cracking, and failed login attempts for IDS/SIEM development.',
        keywords: 'brute force log generator, password cracking simulator, security testing tool, ids development, hash cracking logs, rainbow table simulation, penetration testing',
        shortName: 'Brute Force Simulator',
        category: 'Security Tools',
    },
    cargo: {
        title: 'Rust Cargo Build Log Generator - Simulate Compilation & Dependencies | Fakeact',
        desc: 'Generate realistic Rust Cargo build logs with dependency downloads, compilation progress, and release builds. Ideal for CI/CD demos and Rust development tutorials.',
        keywords: 'rust cargo log generator, cargo build simulator, rust compilation logs, crate download simulation, rust ci/cd testing, cargo dependency logs, rustc output',
        shortName: 'Cargo Build Simulator',
        category: 'Development Tools',
    },
    cc: {
        title: 'GCC/Clang Compilation Log Generator - C/C++ Build Simulator | Fakeact',
        desc: 'Simulate GCC and Clang compilation logs with preprocessing, object file creation, and linking stages. Generate realistic C/C++ build output for testing and documentation.',
        keywords: 'gcc log generator, clang compilation simulator, c++ build logs, compiler output generator, make build simulation, linking logs, c compilation demo',
        shortName: 'C/C++ Compiler Simulator',
        category: 'Development Tools',
    },
    claudeCode: {
        title: 'Claude Code CLI Simulator - AI Coding Assistant Log Generator | Fakeact',
        desc: 'Simulate Claude Code and Cursor AI assistant logs including tool calls, file edits, and terminal commands. Perfect for AI coding workflow demos and integration testing.',
        keywords: 'claude code simulator, ai coding assistant, cursor ai logs, anthropic claude demo, ai tool calls, code editing simulation, llm coding assistant',
        shortName: 'Claude Code Simulator',
        category: 'AI Tools',
    },
    composer: {
        title: 'PHP Composer Log Generator - Package Installation Simulator | Fakeact',
        desc: 'Generate realistic PHP Composer install and update logs. Simulate dependency resolution, package downloads, and autoloader generation for Laravel and PHP project demos.',
        keywords: 'composer log generator, php package installer, laravel composer logs, dependency resolution simulator, packagist download, composer install simulation',
        shortName: 'Composer Log Simulator',
        category: 'Development Tools',
    },
    cryptomining: {
        title: 'Cryptocurrency Mining Log Generator - Hashrate & Pool Simulator | Fakeact',
        desc: 'Simulate cryptocurrency mining logs with hashrate stats, stratum protocol, and pool submissions. Generate realistic miner output for monitoring dashboards and educational content.',
        keywords: 'crypto mining log generator, hashrate simulator, stratum protocol logs, mining pool simulation, gpu mining output, ethereum mining logs, bitcoin miner demo',
        shortName: 'Mining Log Simulator',
        category: 'Blockchain Tools',
    },
    dockerBuild: {
        title: 'Docker Build Log Generator - Container Image Build Simulator | Fakeact',
        desc: 'Create realistic Docker image build logs with multi-stage builds, layer caching, and Dockerfile instructions. Perfect for container CI/CD pipeline testing and demos.',
        keywords: 'docker build log generator, container build simulator, dockerfile logs, multi-stage build demo, docker layer caching, container ci/cd testing',
        shortName: 'Docker Build Simulator',
        category: 'DevOps Tools',
    },
    dockerImageRm: {
        title: 'Docker Image Cleanup Log Generator - Container Management Tool | Fakeact',
        desc: 'Generate Docker image and container removal logs. Simulate docker rmi, prune operations, and disk space reclamation for container management documentation.',
        keywords: 'docker image removal logs, container cleanup simulator, docker prune logs, disk space reclamation, docker rmi output, container management demo',
        shortName: 'Docker Cleanup Simulator',
        category: 'DevOps Tools',
    },
    download: {
        title: 'File Download Log Generator - Network Transfer Progress Simulator | Fakeact',
        desc: 'Create realistic file download progress logs with speed tracking, ETA calculation, and retry handling. Perfect for download manager testing and network monitoring demos.',
        keywords: 'download log generator, file transfer simulator, network progress logs, wget curl simulation, download speed tracking, transfer monitoring demo',
        shortName: 'Download Log Simulator',
        category: 'Network Tools',
    },
    julia: {
        title: 'Julia Package Manager Log Simulator - Pkg Installation Demo | Fakeact',
        desc: 'Generate Julia Pkg manager logs for package installation and updates. Simulate dependency resolution for scientific computing and data science project demos.',
        keywords: 'julia package manager, pkg log simulator, julia installation logs, scientific computing demo, julia dependency resolution, data science tools',
        shortName: 'Julia Pkg Simulator',
        category: 'Development Tools',
    },
    kernelCompile: {
        title: 'Linux Kernel Compilation Log Generator - make bzImage Simulator | Fakeact',
        desc: 'Simulate Linux kernel compilation logs with CC, LD, and OBJCOPY stages. Generate realistic make output for kernel development tutorials and embedded systems training.',
        keywords: 'kernel compilation logs, linux kernel build, make bzimage simulator, vmlinux generation, kernel module compilation, embedded linux demo',
        shortName: 'Kernel Build Simulator',
        category: 'System Tools',
    },
    memdump: {
        title: 'Memory Dump Log Generator - Hex Dump & Forensics Simulator | Fakeact',
        desc: 'Create realistic memory dump and hexdump output for debugging and forensics training. Simulate memory analysis with address ranges, hex bytes, and ASCII columns.',
        keywords: 'memory dump generator, hexdump simulator, forensics tool, debugging output, memory analysis demo, crash dump simulation, gdb memory examination',
        shortName: 'Memory Dump Simulator',
        category: 'System Tools',
    },
    mkinitcpio: {
        title: 'mkinitcpio Log Generator - Arch Linux Initramfs Simulator | Fakeact',
        desc: 'Generate mkinitcpio initramfs creation logs with hooks, modules, and firmware warnings. Perfect for Arch Linux documentation and boot troubleshooting tutorials.',
        keywords: 'mkinitcpio log generator, initramfs simulator, arch linux boot, initial ramdisk logs, linux hooks demo, boot image generation',
        shortName: 'mkinitcpio Simulator',
        category: 'System Tools',
    },
    rkhunter: {
        title: 'rkhunter Rootkit Scanner Log Generator - Security Audit Simulator | Fakeact',
        desc: 'Simulate rkhunter rootkit detection scan logs for security training. Generate realistic system check outputs, malware scans, and vulnerability assessments.',
        keywords: 'rkhunter log generator, rootkit scanner simulator, security audit logs, malware detection demo, system security check, linux security tool',
        shortName: 'rkhunter Simulator',
        category: 'Security Tools',
    },
    simcity: {
        title: 'SimCity Simulation Log Generator - City Building Game Demo | Fakeact',
        desc: 'Generate SimCity-style city simulation logs with building events, resource management, and population updates. Perfect for game development demos and simulation tutorials.',
        keywords: 'simcity log generator, city simulation demo, game development logs, simulation tick output, city builder demo, game progress logs',
        shortName: 'SimCity Log Simulator',
        category: 'Gaming Tools',
    },
    terraform: {
        title: 'Terraform Log Generator - Infrastructure as Code Plan & Apply Simulator | Fakeact',
        desc: 'Generate realistic Terraform plan and apply logs with AWS, Azure, and GCP resources. Simulate state management and infrastructure changes for IaC training and demos.',
        keywords: 'terraform log generator, infrastructure as code, terraform plan simulator, aws terraform demo, azure infrastructure, terraform apply logs, iac testing',
        shortName: 'Terraform Log Simulator',
        category: 'DevOps Tools',
    },
    weblog: {
        title: 'Web Server Access Log Generator - Apache/Nginx Log Simulator | Fakeact',
        desc: 'Create realistic Apache and Nginx access logs with various HTTP methods, status codes, and user agents. Perfect for log analytics testing and web monitoring demos.',
        keywords: 'web server log generator, apache access logs, nginx log simulator, http request logs, web analytics testing, server monitoring demo',
        shortName: 'Web Log Simulator',
        category: 'Network Tools',
    },
    npm: {
        title: 'NPM Install Log Generator - Node.js Package Manager Simulator | Fakeact',
        desc: 'Generate realistic npm install and update logs with dependency trees, version resolution, and audit reports. Ideal for Node.js CI/CD testing and JavaScript tutorials.',
        keywords: 'npm install log generator, node.js package manager, npm audit simulation, dependency tree logs, javascript ci/cd, package-lock demo',
        shortName: 'NPM Log Simulator',
        category: 'Development Tools',
    },
    nextBuild: {
        title: 'Next.js Build Log Generator - React SSR/SSG Build Simulator | Fakeact',
        desc: 'Simulate Next.js build output with page compilation, bundle optimization, and static generation. Perfect for React framework demos and frontend CI/CD pipeline testing.',
        keywords: 'nextjs build log generator, react ssr simulator, static site generation, next.js compilation, vercel build demo, frontend ci/cd testing',
        shortName: 'Next.js Build Simulator',
        category: 'Development Tools',
    },
    geminiCli: {
        title: 'Gemini CLI Log Simulator - Google AI Coding Assistant Demo | Fakeact',
        desc: 'Simulate Gemini CLI terminal logs with read_file, run_shell_command, and Gemini API responses. Perfect for Google AI coding tool demos and integration testing.',
        keywords: 'gemini cli simulator, google ai coding, gemini api demo, ai assistant logs, google cloud ai, code generation tool, llm terminal demo',
        shortName: 'Gemini CLI Simulator',
        category: 'AI Tools',
    },
    ganache: {
        title: 'Ganache Blockchain Log Generator - Ethereum Development Simulator | Fakeact',
        desc: 'Generate Ganache local blockchain logs with accounts, transactions, and block mining. Perfect for Ethereum smart contract testing and Web3 development tutorials.',
        keywords: 'ganache log generator, ethereum development, blockchain simulator, smart contract testing, web3 development, truffle suite demo, eth local node',
        shortName: 'Ganache Simulator',
        category: 'Blockchain Tools',
    },
    pip: {
        title: 'Python pip Install Log Generator - Package Manager Simulator | Fakeact',
        desc: 'Generate realistic Python pip install logs with wheel downloads, dependency resolution, and requirements.txt processing. Ideal for Python CI/CD testing and tutorials.',
        keywords: 'pip install log generator, python package manager, wheel download simulation, requirements.txt demo, pypi package logs, python ci/cd testing',
        shortName: 'pip Log Simulator',
        category: 'Development Tools',
    },
} as Record<string, ModuleSEO>;
