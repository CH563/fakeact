/**
 * "What's more about [module]?" — unique, SEO-friendly copy per module.
 * Use for the bottom section of each module page. Optional learnMoreUrl points to official docs/site.
 */
export type ModuleMoreAbout = {
    paragraphs: string[];
    learnMoreUrl?: string;
    learnMoreLabel?: string;
};

const displayName: Record<string, string> = {
    ansible: 'Ansible',
    bootlog: 'boot log',
    botnet: 'botnet',
    bruteforce: 'brute force',
    cargo: 'Cargo',
    cc: 'C/C++ compiler',
    claudeCode: 'Claude Code',
    composer: 'Composer',
    cryptomining: 'cryptomining',
    ganache: 'Ganache',
    geminiCli: 'Gemini CLI',
    kernelCompile: 'kernel compile',
    memdump: 'memdump',
    mkinitcpio: 'mkinitcpio',
    pip: 'pip',
    nextBuild: 'Next.js build',
    rkhunter: 'rkhunter',
    simcity: 'SimCity',
    terraform: 'Terraform',
};

export const MODULE_MORE_ABOUT: Record<string, ModuleMoreAbout> = {
    ansible: {
        paragraphs: [
            'Ansible is an open-source automation platform for configuration management, application deployment, and task automation. It uses YAML playbooks and connects to nodes over SSH without requiring agents.',
            'The real Ansible outputs play recap, task names, and host status (ok, changed, failed). This simulator reproduces that style so you can test log parsing, dashboards, or demos without running playbooks.',
        ],
        learnMoreUrl: 'https://docs.ansible.com/',
        learnMoreLabel: 'Ansible documentation',
    },
    bootlog: {
        paragraphs: [
            'Boot logs are produced by the Linux kernel and early userspace during system startup. They include driver loading, ACPI, PCI, and service messages.',
            'This module mimics typical dmesg and boot log lines so you can test log aggregation, monitoring, or training materials without a real boot.',
        ],
    },
    botnet: {
        paragraphs: [
            'Botnet-style logs often show cluster status, node counts, and command synchronization. They appear in security research and threat analysis.',
            'The output here is simulated for demos and log pipeline testing only; it does not connect to any network or service.',
        ],
    },
    bruteforce: {
        paragraphs: [
            'Brute force and hash-cracking tools produce progress output, rainbow table usage, and match results. Security teams use such logs for testing IDS and SIEM.',
            'This simulator generates similar-looking lines for safe demos and documentation without running real cracking tools.',
        ],
    },
    cargo: {
        paragraphs: [
            'Cargo is the Rust package manager and build tool. It prints dependency downloads, compilation steps, and finish messages.',
            'Real Cargo output is used in CI logs and developer workflows. This module helps you test log parsing or create demos that look like real Rust builds.',
        ],
        learnMoreUrl: 'https://doc.rust-lang.org/cargo/',
        learnMoreLabel: 'Cargo book',
    },
    cc: {
        paragraphs: [
            'C and C++ compilers (gcc, clang) emit lines for each translation unit: compile, link, and optional warnings. Build systems capture this for CI and logs.',
            'This simulator reproduces that style so you can test log processors or demo build pipelines without compiling real code.',
        ],
    },
    claudeCode: {
        paragraphs: [
            'Claude Code (e.g. in Cursor) is an AI coding assistant that runs tools like read_file, search_replace, and run_terminal_cmd. Its output shows tool calls and edits.',
            'This module simulates that workflow so you can demo or test UIs and log handling without calling a real AI backend.',
        ],
        learnMoreUrl: 'https://claude.ai/',
        learnMoreLabel: 'Claude by Anthropic',
    },
    composer: {
        paragraphs: [
            'Composer is the dependency manager for PHP. It resolves packages, downloads them, and generates the autoloader. Install and update output is familiar to PHP developers.',
            'Here we simulate that output for demos, CI log testing, or documentation without running composer install.',
        ],
        learnMoreUrl: 'https://getcomposer.org/doc/',
        learnMoreLabel: 'Composer documentation',
    },
    cryptomining: {
        paragraphs: [
            'Cryptocurrency mining software logs hashrate, stratum jobs, and share submission results. Pool operators and miners rely on these logs.',
            'This simulator produces similar-looking lines for testing monitoring and dashboards without connecting to any mining pool.',
        ],
    },
    ganache: {
        paragraphs: [
            'Ganache is a local Ethereum blockchain for development. It prints accounts, private keys, and transaction logs. Developers use it for smart contract testing.',
            'The output above mimics Ganache CLI so you can test log ingestion or demo blockchain tooling without running an actual node.',
        ],
        learnMoreUrl: 'https://trufflesuite.com/docs/ganache/',
        learnMoreLabel: 'Ganache documentation',
    },
    geminiCli: {
        paragraphs: [
            'Gemini CLI lets you build, debug, and deploy with AI from the terminal. It uses a REPL, tools like read_file and run_shell_command, and connects to the Gemini API.',
            'This simulator reproduces that style so you can demo or test integrations without calling the real Gemini CLI.',
        ],
        learnMoreUrl: 'https://geminicli.com/docs/',
        learnMoreLabel: 'Gemini CLI documentation',
    },
    kernelCompile: {
        paragraphs: [
            'Linux kernel builds produce lines like CC, LD, OBJCOPY, and final bzImage. They are common in embedded and kernel development CI.',
            'This module generates similar output for testing log parsers or creating build-pipeline demos without compiling the kernel.',
        ],
    },
    memdump: {
        paragraphs: [
            'Memory dump and hex dump tools output address ranges, hex bytes, and ASCII columns. They are used in forensics and low-level debugging.',
            'The simulator above produces that style for safe demos and log pipeline testing.',
        ],
    },
    mkinitcpio: {
        paragraphs: [
            'mkinitcpio builds initramfs images on Arch Linux. Its output shows build hooks, firmware warnings, and image creation.',
            'This module mimics that output for documentation and testing without running mkinitcpio on a real system.',
        ],
    },
    pip: {
        paragraphs: [
            'pip is the Python package installer. It prints collecting, downloading, installing, and success messages. CI and dev environments rely on this output.',
            'Here we simulate pip output so you can test log parsing or create Python-environment demos without installing real packages.',
        ],
        learnMoreUrl: 'https://pip.pypa.io/en/stable/',
        learnMoreLabel: 'pip documentation',
    },
    nextBuild: {
        paragraphs: [
            'Next.js build output includes compile phase, page sizes, and optional warnings. It is familiar to anyone running next build in CI or locally.',
            'This simulator reproduces that style for testing dashboards and log processors or for demos without building a real Next app.',
        ],
        learnMoreUrl: 'https://nextjs.org/docs',
        learnMoreLabel: 'Next.js documentation',
    },
    rkhunter: {
        paragraphs: [
            'rkhunter (Rootkit Hunter) scans the system and reports checks for rootkits and suspicious files. Its log format is used in security auditing.',
            'The output above is simulated for demos and log testing; it does not perform real system checks.',
        ],
        learnMoreUrl: 'https://rkhunter.org/',
        learnMoreLabel: 'rkhunter',
    },
    simcity: {
        paragraphs: [
            'SimCity-style games often show progress lines and simulation ticks. This module mimics that playful, procedural output.',
            'Use it for demos or log aggregation tests without running the actual game.',
        ],
    },
    terraform: {
        paragraphs: [
            'Terraform plan and apply produce resource creation, modification, and state lock messages. DevOps teams use these logs in CI and audits.',
            'This simulator generates similar output so you can test log pipelines or demo infrastructure-as-code without running Terraform.',
        ],
        learnMoreUrl: 'https://developer.hashicorp.com/terraform/docs',
        learnMoreLabel: 'Terraform documentation',
    },
};

export function getModuleMoreAbout(moduleKey: string): ModuleMoreAbout | undefined {
    return MODULE_MORE_ABOUT[moduleKey];
}

export function getModuleDisplayName(moduleKey: string): string {
    return displayName[moduleKey] ?? moduleKey;
}
