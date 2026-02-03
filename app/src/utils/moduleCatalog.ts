export const MODULE_LIST = [
    'ansible',
    'bootlog',
    'botnet',
    'bruteforce',
    'cargo',
    'cc',
    'claudeCode',
    'composer',
    'cryptomining',
    'ganache',
    'geminiCli',
    'kernelCompile',
    'memdump',
    'mkinitcpio',
    'pip',
    'nextBuild',
    'rkhunter',
    'simcity',
    'terraform',
].sort();

export type ModuleGuide = {
    tags: string[];
    highlights: string[];
    scenarios: string[];
    sampleOutput: string[];
};

export type ModuleFaqItem = {
    question: string;
    answer: string;
};

const MODULE_TAGS: Record<string, string[]> = {
    ansible: ['playbook runs', 'inventory hosts', 'task results', 'role steps'],
    bootlog: ['kernel init', 'driver load', 'system services', 'hardware probes'],
    botnet: ['cluster status', 'node counts', 'command sync', 'connection ramps'],
    bruteforce: ['hash lists', 'rainbow tables', 'match progress', 'cracked pairs'],
    cargo: ['crate downloads', 'compile steps', 'release builds', 'dependency graphs'],
    cc: ['compiler flags', 'object files', 'link stage', 'include paths'],
    claudeCode: ['tool calls', 'file reads', 'edits', 'terminal commands'],
    composer: ['package installs', 'dependency resolve', 'lock files', 'autoload build'],
    cryptomining: ['hashrate stats', 'gpu workers', 'stratum jobs', 'share submits'],
    ganache: ['local accounts', 'rpc calls', 'transaction flow', 'block mining'],
    geminiCli: ['REPL', 'read_file', 'run_shell_command', 'web_fetch', 'Gemini API'],
    kernelCompile: ['arch builds', 'VMLINUX link', 'object steps', 'bzImage output'],
    memdump: ['memory addresses', 'hex bytes', 'region patterns', 'ascii columns'],
    mkinitcpio: ['initramfs build', 'hook sequence', 'firmware warnings', 'compression output'],
    pip: ['package downloads', 'wheel installs', 'dependency checks', 'install summaries'],
    nextBuild: ['compile phase', 'page sizes', 'bundle output', 'build timings'],
    rkhunter: ['system checks', 'rootkit tests', 'signature scans', 'result lines'],
    simcity: ['simulation ticks', 'status lines', 'resource steps', 'task loops'],
    terraform: ['resource apply', 'state lock', 'provider actions', 'plan results'],
};

const MODULE_SAMPLES: Record<string, string[]> = {
    ansible: [
        'PLAY [setup web-prod-042] ****************************************',
        'TASK [Gathering Facts] *******************************************',
        'ok: [192.168.1.10]',
        'TASK [nginx : install packages] *********************************',
        'changed: [192.168.1.10]',
        'PLAY RECAP *******************************************************',
        '192.168.1.10 : ok=5 changed=1 unreachable=0 failed=0',
    ],
    bootlog: [
        'PMAP: PCID enabled',
        'TSC Deadline Timer supported and enabled',
        'ACPI: System State [S0 S3 S4 S5] (S3)',
        'PCI configuration changed (bridge=16 device=4 cardbus=0)',
        'com.Example.FSCompressionTypeZlib load succeeded',
    ],
    botnet: [
        'Establishing connections: 0123/0456',
        '  Cluster #01 (154 nodes) [booting]',
        '  Cluster #02 (198 nodes) [online]',
        '+ Synchronizing clocks... [done]',
        '+ Sending command... [done]',
        '>> Botnet update complete.',
    ],
    bruteforce: [
        '=> Hashes to decrypt',
        '  3f5b1e6a9f0c2d1e4f9b1c3d5e7a9b0c',
        '=> Extracting Rainbow Table [====/           ]',
        '=> Begin matching',
        ':: 12ab34cd56ef7890 ::',
        '=> Match found',
        '  3f5b1e6a9f0c2d1e4f9b1c3d5e7a9b0c:james42',
    ],
    cargo: [
        'Downloading serde v1.0.193',
        'Downloading tokio v1.36.0',
        'Compiling rand v0.8.5',
        'Compiling my_app v0.1.0',
        'Finished release [optimized] target(s) in 12.34 secs',
    ],
    cc: [
        'gcc -c -O2 -Wall -Iinclude -DDEBUG -o src/main.o src/main.c',
        'gcc -c -O2 -Wall -Iinclude -DDEBUG -o src/utils.o src/utils.c',
        'gcc -o app src/main.o src/utils.o -lm',
        'clang -c -O2 -Wall -Iinclude -o src/net.o src/net.c',
    ],
    claudeCode: [
        '  Reading user request...',
        '  Running tool: read_file',
        '    path: src/components/Button.tsx',
        '  ✓ Tool completed',
        '  Applying edit...',
        '  ✓ Edit applied',
        '  Done.',
    ],
    composer: [
        'Loading composer repositories with package information',
        'Updating dependencies (including require-dev)',
        '  - Installing monolog/monolog (2.3.4): Loading from cache',
        '  - Installing guzzlehttp/guzzle (7.8.1): Loading from cache',
        'Writing lock file',
        'Generating autoload files',
    ],
    cryptomining: [
        'INFO 12:00:01|stratum Received new job #1a2b3c4d seed: #abcd1234',
        'm 12:00:02|cryptominer Speed 52.34 Mh/s gpu/0 52.34 [A1+0:R0+0:F0]',
        'INFO 12:00:05|CUDA0 Solution found; submitted to pool',
        'INFO 12:00:05|CUDA0 Nonce: 0x12ab34cd56ef7890',
        'INFO 12:00:06|stratum Accepted',
    ],
    geminiCli: [
        '  Gemini CLI · Build, debug & deploy with AI',
        '  Tool: read_file',
        '    path: src/components/LoginForm.tsx',
        '  ✓ read_file completed',
        '  Tool: run_shell_command',
        '  ✓ run_shell_command completed',
        '  Summary: Refactored LoginForm to use React Hook Form.',
    ],
    ganache: [
        'Ganache CLI v2.13.2 (ganache-core: 2.13.2)',
        'Available Accounts',
        '(0) 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 (1000 ETH)',
        'Listening on http://127.0.0.1:8545',
        'eth_sendTransaction',
        '  Transaction: 0x8b1f2c3d4e5f6a7b8c9d',
        '  Gas used:   21000',
    ],
    kernelCompile: [
        '  CC      kernel/sched/core.o',
        '  AR      kernel/built-in.o',
        '  LD      vmlinux',
        '  OBJCOPY arch/x86/boot/vmlinux.bin',
        'BUILD   arch/x86/boot/bzImage',
        'Kernel: arch/x86/boot/bzImage is ready (#1)',
    ],
    memdump: [
        '0000000000401000  48 89 E5 53 48 83 EC 20  CD CD CD CD CD CD CD CD |H..SH.. ........|',
        '0000000000401010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00 |................|',
        '000000007ffffff0  FF FF FD 00 FF FF FD 00  FF FF FD 00 FF FF FD 00 |................|',
        '0000000000804800  CD FF FE 00 CD FF FE 00  CD FF FE 00 CD FF FE 00 |................|',
    ],
    mkinitcpio: [
        "==> Building image from preset: /etc/mkinitcpio.d/linux.preset: 'default'",
        '  -> Running build hook: [base]',
        '  -> Running build hook: [block]',
        '==> WARNING: Possibly missing firmware for module: ahci',
        '==> Creating gzip-compressed initcpio image: /boot/initramfs-linux.img',
        '==> Image generation successful',
    ],
    pip: [
        'Collecting packages from requirements.txt...',
        'Downloading requests-2.31.0.whl (56.9 kB)',
        'Installing collected packages: requests',
        'Successfully installed requests-2.31.0',
        'Successfully installed 25 packages',
    ],
    nextBuild: [
        'info  - Creating an optimized production build...',
        'info  - Compile phase starting...',
        '|-- /pages/index.tsx           5.2 kB        0.12s',
        'warn  - Missing meta description tag in /pages/blog/[slug].tsx',
        'Compiled successfully in 12.34s',
        'Pages: 42',
    ],
    rkhunter: [
        'Running Rootkit Hunter version 1.4.6 on localhost',
        'Info: Start date is Fri Jan 30 2026 10:21:33 UTC',
        'Starting system checks...',
        '  Checking for SucKIT rootkit...',
        '  /usr/bin/ls                                 [ Not found ]',
        '  /usr/bin/ps                                 [ Not found ]',
    ],
    simcity: [
        '[ ] Adding Hidden Agendas... /',
        '[o] Adding Hidden Agendas... OK',
        '[ ] Building Data Trees... -',
        '[o] Building Data Trees... SUCCESS',
        '[ ] Collecting Meteor Particles... |',
    ],
    terraform: [
        'Acquiring state lock. This may take a few moments...',
        'aws_instance.web: Creating...',
        'aws_instance.web: Creation complete after 12s [id=i-0abc1234]',
        'aws_security_group.web: Modifying... [id=sg-1234abcd]',
        'Apply complete! Resources: 3 added, 1 changed, 0 destroyed.',
    ],
};

const buildHighlights = (tags: string[]): string[] => [
    `Focuses on ${tags[0]} and ${tags[1]} events seen in real logs.`,
    `Surfaces ${tags[2]} signals that are useful for demos and parsers.`,
    'Safe output only: prints logs without changing your system.',
];

const buildScenarios = (moduleName: string, tags: string[]): string[] => [
    `Demo ${moduleName} workflows without running the real stack.`,
    `Test log ingestion rules around ${tags[0]} and ${tags[2]} events.`,
    'Create screenshots, recordings, or training material on demand.',
];

export const MODULE_GUIDES: Record<string, ModuleGuide> = Object.fromEntries(
    MODULE_LIST.map((moduleName) => {
        const tags = MODULE_TAGS[moduleName] ?? ['simulated output', 'log events', 'demo'];
        return [
            moduleName,
            {
                tags,
                highlights: buildHighlights(tags),
                scenarios: buildScenarios(moduleName, tags),
                sampleOutput: MODULE_SAMPLES[moduleName] ?? [],
            },
        ];
    })
);

export const buildFaq = (moduleName: string): ModuleFaqItem[] => [
    {
        question: `Is ${moduleName} output real?`,
        answer: 'No. It is a simulator that prints log text only.',
    },
    {
        question: `Can I control the speed of ${moduleName}?`,
        answer: 'Yes. The CLI supports speed and repeat options, and the web page can be refreshed.',
    },
    {
        question: `Does ${moduleName} change my system?`,
        answer: 'No. It does not install, update, or modify anything.',
    },
];
