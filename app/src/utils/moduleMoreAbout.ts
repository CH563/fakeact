/**
 * "What's more about [module]?" — unique, SEO-friendly copy per module.
 * Use for the bottom section of each module page. Optional learnMoreUrl points to official docs/site.
 */
export type ModuleMoreAbout = {
    paragraphs: string[];
    learnMoreUrl?: string;
    learnMoreLabel?: string;
};

/**
 * Stack Overflow question with accepted answer.
 */
export type StackOverflowQuestion = {
    question: string;
    answer: string;
    questionUrl: string;
};

/**
 * YouTube tutorial video for a module.
 */
export type YouTubeVideo = {
    /** YouTube video ID (e.g., 'dQw4w9WgXcQ') */
    videoId: string;
    /** Video title */
    title: string;
    /** Brief description/summary of the video content */
    description: string;
    /** Channel name */
    channel: string;
};

/**
 * YouTube tutorial videos for each module.
 */
export const MODULE_YOUTUBE_VIDEOS: Record<string, YouTubeVideo[]> = {
    ansible: [
        {
            videoId: 'w9eCU4bGgjQ',
            title: 'Ansible Full Course | Ansible Tutorial For Beginners',
            description: 'Complete Ansible tutorial covering playbooks, roles, inventory management, and automation workflows. Learn infrastructure as code from scratch.',
            channel: 'Simplilearn',
        },
        {
            videoId: '1id6ERvfozo',
            title: 'Getting Started with Ansible',
            description: 'Quick introduction to Ansible fundamentals including ad-hoc commands, playbook basics, and common modules for configuration management.',
            channel: 'Learn Linux TV',
        },
    ],
    bootlog: [
        {
            videoId: 'Yw7rVqO6eUY',
            title: 'Linux Boot Process Explained',
            description: 'Detailed walkthrough of the Linux boot sequence from BIOS/UEFI to login prompt. Covers bootloader, kernel initialization, and systemd startup.',
            channel: 'Chris Titus Tech',
        },
        {
            videoId: 'mHBmGcuoZ9A',
            title: 'Understanding dmesg and System Logs',
            description: 'Learn how to read and analyze Linux system logs including dmesg, journalctl, and /var/log files for troubleshooting boot issues.',
            channel: 'Linux Crash Course',
        },
    ],
    botnet: [
        {
            videoId: '3BbxUCOFX8g',
            title: 'What is a Botnet?',
            description: 'A botnet is a network of infected computers, used for criminal purposes. Visit Kaspersky Lab at https://goo.gl/mwf8eR to learn how our products can help you stay protected.Your computer could be part of a botnet, without you even knowing! Malware can turn your computer into a ‘bot’ to be used for launching DDoS attacks, phishing and spam campaigns, and online fraud campaigns. ',
            channel: 'Kaspersky',
        },
        {
            videoId: 'WnN6dbos5u8',
            title: 'Malware Analysis Fundamentals',
            description: 'Introduction to analyzing malware behavior including network traffic analysis, reverse engineering basics, and setting up safe analysis environments.',
            channel: 'John Hammond',
        },
    ],
    bruteforce: [
        {
            videoId: '7U-RbOKanYs',
            title: 'Password Cracking Explained - Ethical Hacking',
            description: 'Learn about password attack methods including brute force, dictionary attacks, and rainbow tables. Includes defensive best practices.',
            channel: 'David Bombal',
        },
        {
            videoId: 'XjVYl1Ts6GI',
            title: 'Securing Against Brute Force Attacks',
            description: 'Implement protection against brute force attacks using rate limiting, fail2ban, multi-factor authentication, and account lockout policies.',
            channel: 'HackerSploit',
        },
    ],
    cargo: [
        {
            videoId: 'OX9HJsJUDxA',
            title: 'Rust Cargo Tutorial - Package Management',
            description: 'Master Rust\'s Cargo package manager including dependency management, workspaces, features, and publishing crates to crates.io.',
            channel: 'Let\'s Get Rusty',
        },
        {
            videoId: 'BU1LYFkpJuk',
            title: 'Rust Build System Deep Dive',
            description: 'Advanced Cargo topics including build profiles, cross-compilation, custom build scripts, and optimizing compilation times.',
            channel: 'Jon Gjengset',
        },
    ],
    cc: [
        {
            videoId: 'KJgsSFOSQv0',
            title: 'C Programming Full Course - GCC Compilation',
            description: 'Comprehensive C programming tutorial including GCC compiler usage, Makefiles, debugging with GDB, and memory management.',
            channel: 'freeCodeCamp.org',
        },
        {
            videoId: '3bQhXjhaPmw',
            title: 'Understanding the C/C++ Build Process',
            description: 'Deep dive into compilation stages: preprocessing, compilation, assembly, and linking. Learn how object files become executables.',
            channel: 'The Cherno',
        },
    ],
    claudeCode: [
        {
            videoId: 'PF_FXZcLnDw',
            title: 'Claude AI Coding Assistant Tutorial',
            description: 'Learn to use Claude for coding tasks including code generation, debugging, refactoring, and understanding complex codebases.',
            channel: 'AI Explained',
        },
        {
            videoId: 'HGDsYrP4wTo',
            title: 'Cursor IDE with AI - Complete Guide',
            description: 'Master Cursor IDE powered by Claude AI. Covers setup, prompting techniques, code editing workflows, and productivity tips.',
            channel: 'Fireship',
        },
    ],
    composer: [
        {
            videoId: 'rqzYdHdyMH0',
            title: 'PHP Composer Tutorial for Beginners',
            description: 'Complete guide to PHP Composer including installation, dependency management, autoloading, and creating your own packages.',
            channel: 'Traversy Media',
        },
        {
            videoId: 'RJoG31PXgO0',
            title: 'Laravel & Composer Best Practices',
            description: 'Advanced Composer techniques for Laravel development including version constraints, scripts, and optimizing autoloader.',
            channel: 'Laravel Daily',
        },
    ],
    cryptomining: [
        {
            videoId: 'bBC-nXj3Ng4',
            title: 'How Cryptocurrency Mining Works',
            description: 'Understand the technical aspects of cryptocurrency mining including proof of work, hashrate, difficulty adjustment, and pool mining.',
            channel: '3Blue1Brown',
        },
        {
            videoId: 'GmOzih6I1zs',
            title: 'Mining Rig Setup and Monitoring',
            description: 'Set up a mining rig from hardware selection to software configuration. Learn to monitor hashrate, temperature, and profitability.',
            channel: 'Son of a Tech',
        },
    ],
    ganache: [
        {
            videoId: 'gyMwXuJrbJQ',
            title: 'Ethereum Development with Ganache',
            description: 'Full blockchain development course using Ganache for local Ethereum testing. Covers smart contracts, Truffle, and Web3.js integration.',
            channel: 'freeCodeCamp.org',
        },
        {
            videoId: 'M576WGiDBdQ',
            title: 'Smart Contract Testing with Ganache',
            description: 'Learn to test Solidity smart contracts using Ganache local blockchain. Covers test environments, debugging, and fork testing.',
            channel: 'Dapp University',
        },
    ],
    geminiCli: [
        {
            videoId: '1AF5pFGwRTM',
            title: 'Gemini CLI Tutorial #1 - Introduction & Setup',
            description: 'In this Gemini CLI Crash Course series, I\'ll show you how to get up an running wth the CLI in a project, use extensions & MCP servers, add an API key to access Gemini 3 models and more.',
            channel: 'The Net Ninja',
        },
        {
            videoId: 'UIZAiXYceBI',
            title: 'Building with Gemini - Developer Guide',
            description: 'Practical guide to building applications with Gemini AI including multimodal inputs, function calling, and best practices.',
            channel: 'Fireship',
        },
    ],
    kernelCompile: [
        {
            videoId: 'NwftvBbhxaU',
            title: 'Compiling Linux Kernel from Source',
            description: 'Step-by-step guide to compiling a custom Linux kernel. Covers configuration, compilation, module building, and installation.',
            channel: 'Learn Linux TV',
        },
        {
            videoId: 'WiZ05pnHvbI',
            title: 'Linux Kernel Development Introduction',
            description: 'Introduction to kernel development including source code structure, building modules, and understanding the kernel build system.',
            channel: 'Linux Foundation',
        },
    ],
    memdump: [
        {
            videoId: 'Hm8NvhTL4M8',
            title: 'Memory Forensics with Volatility',
            description: 'Learn memory forensics using Volatility framework. Analyze memory dumps, extract artifacts, and investigate malware infections.',
            channel: '13Cubed',
        },
        {
            videoId: 'mHIKhk9O05A',
            title: 'GDB Memory Analysis Tutorial',
            description: 'Use GDB for memory debugging and analysis. Covers examining memory, setting watchpoints, and analyzing core dumps.',
            channel: 'Low Level Learning',
        },
    ],
    mkinitcpio: [
        {
            videoId: 'DPLnBPM4DhI',
            title: 'Arch Linux Installation - mkinitcpio Explained',
            description: 'Understand mkinitcpio configuration during Arch Linux installation. Covers hooks, modules, and troubleshooting boot issues.',
            channel: 'EF - Linux Made Simple',
        },
        {
            videoId: 'Ga6lzYxdWXc',
            title: 'Linux Initramfs Deep Dive',
            description: 'Deep dive into initramfs creation and customization. Learn how early userspace works and when to regenerate initramfs.',
            channel: 'Learn Linux TV',
        },
    ],
    pip: [
        {
            videoId: 'U2ZN104hIcc',
            title: 'Python pip Tutorial - Package Management',
            description: 'Master Python pip for package installation, virtual environments, requirements files, and dependency management best practices.',
            channel: 'Corey Schafer',
        },
        {
            videoId: 'KdJuKrZx_qU',
            title: 'Python Virtual Environments Explained',
            description: 'Complete guide to Python virtual environments with venv and pip. Covers isolation, activation, and managing project dependencies.',
            channel: 'Tech With Tim',
        },
    ],
    nextBuild: [
        {
            videoId: 'Sklc_fQBmcs',
            title: 'Next.js 14 Full Tutorial',
            description: 'Complete Next.js tutorial covering App Router, server components, data fetching, and production deployment strategies.',
            channel: 'Vercel',
        },
        {
            videoId: '_w0Ikk4JY7U',
            title: 'Optimizing Next.js Build Performance',
            description: 'Speed up Next.js builds with bundle analysis, code splitting, image optimization, and deployment best practices.',
            channel: 'Lee Robinson',
        },
    ],
    rkhunter: [
        {
            videoId: '2W3KeqCzejY',
            title: '10 Ways to Secure Your Linux Server',
            description: 'Learn Linux server security including updates, firewall, SSH hardening, and security tools. Essential for understanding rootkit detection context.',
            channel: 'Learn Linux TV',
        },
        {
            videoId: 'dGCSMxJcKig',
            title: 'Linux Security - Protect Your Server',
            description: 'Comprehensive guide to securing Linux servers including intrusion detection, monitoring, and security best practices.',
            channel: 'NetworkChuck',
        },
    ],
    simcity: [
        {
            videoId: 'YX40hbAHx3s',
            title: 'City Simulation Game Development',
            description: 'Learn game development concepts behind city builders including simulation systems, pathfinding, and economic models.',
            channel: 'GDC',
        },
        {
            videoId: 'cQP8WApzIQQ',
            title: 'Procedural Generation in Games',
            description: 'Understand procedural generation techniques used in simulation games for terrain, buildings, and city layouts.',
            channel: 'Sebastian Lague',
        },
    ],
    terraform: [
        {
            videoId: 'SLB_c_ayRMo',
            title: 'Terraform Tutorial for Beginners',
            description: 'Complete Terraform course covering HCL syntax, providers, state management, modules, and infrastructure as code best practices.',
            channel: 'TechWorld with Nana',
        },
        {
            videoId: '7xngnjfIlK4',
            title: 'Terraform AWS Infrastructure',
            description: 'Build AWS infrastructure with Terraform including VPCs, EC2, RDS, and implementing production-ready architectures.',
            channel: 'freeCodeCamp.org',
        },
    ],
    dockerBuild: [
        {
            videoId: 'pg19Z8LL06w',
            title: 'Docker Tutorial for Beginners',
            description: 'Complete Docker tutorial covering images, containers, Dockerfile best practices, and multi-stage builds.',
            channel: 'TechWorld with Nana',
        },
        {
            videoId: 'SnSH8Ht3MIc',
            title: 'Docker Build Optimization',
            description: 'Optimize Docker image builds with layer caching, multi-stage builds, and reducing image sizes for production.',
            channel: 'Fireship',
        },
    ],
    dockerImageRm: [
        {
            videoId: 'pg19Z8LL06w',
            title: 'Docker Tutorial for Beginners',
            description: 'Learn Docker fundamentals including image management, container lifecycle, and cleanup commands for disk space.',
            channel: 'TechWorld with Nana',
        },
        {
            videoId: 'gAkwW2tuIqE',
            title: 'Docker Cleanup and Maintenance',
            description: 'Manage Docker disk usage with prune commands, removing unused images, containers, and volumes effectively.',
            channel: 'DevOps Journey',
        },
    ],
    download: [
        {
            videoId: 'q6a0yvRV2bI',
            title: 'wget and curl Tutorial',
            description: 'Master command-line download tools wget and curl. Covers options, resume downloads, authentication, and scripting.',
            channel: 'LearnLinuxTV',
        },
        {
            videoId: 'WBZBhZ6FWVY',
            title: 'Network File Transfer Tools',
            description: 'Compare file transfer tools including wget, curl, rsync, and scp. Learn when to use each for different scenarios.',
            channel: 'Chris Titus Tech',
        },
    ],
    julia: [
        {
            videoId: 'sE67bP2PnOo',
            title: 'Julia Programming Tutorial',
            description: 'Introduction to Julia programming language for scientific computing. Covers syntax, packages, and performance optimization.',
            channel: 'Derek Banas',
        },
        {
            videoId: 'LbTbs4mNaM0',
            title: 'Julia Package Management with Pkg',
            description: 'Master Julia\'s Pkg package manager including environments, version management, and creating packages.',
            channel: 'Julia Computing',
        },
    ],
    npm: [
        {
            videoId: 'P3aKRdUyr0s',
            title: 'NPM Crash Course',
            description: 'Complete npm tutorial covering package installation, scripts, versioning, publishing packages, and npm vs yarn comparison.',
            channel: 'Traversy Media',
        },
        {
            videoId: 'cjoTTSbOuG0',
            title: 'Node.js Package Management Deep Dive',
            description: 'Advanced npm topics including workspaces, security audits, lock files, and managing large JavaScript projects.',
            channel: 'Fireship',
        },
    ],
    weblog: [
        {
            videoId: 'mZ1Gx4o7viE',
            title: 'Web Server Logs Analysis',
            description: 'Analyze Apache and Nginx access logs for traffic insights, security monitoring, and performance troubleshooting.',
            channel: 'LearnLinuxTV',
        },
        {
            videoId: 'AEWTpXm0e_A',
            title: 'Log Management with ELK Stack',
            description: 'Set up Elasticsearch, Logstash, and Kibana for centralized log management and real-time analytics.',
            channel: 'TechWorld with Nana',
        },
    ],
};

export function getModuleYouTubeVideos(moduleKey: string): YouTubeVideo[] {
    return MODULE_YOUTUBE_VIDEOS[moduleKey] ?? [];
}

/**
 * Stack Overflow questions for each module.
 */
export const MODULE_STACKOVERFLOW_QUESTIONS: Record<string, StackOverflowQuestion[]> = {
    ansible: [
        {
            question: 'How to create a directory using Ansible?',
            answer: 'Use the ansible.builtin.file module with state: directory. Example: - name: Creates directory\\n  ansible.builtin.file:\\n    path: /srv/www\\n    state: directory',
            questionUrl: 'https://stackoverflow.com/questions/22844905/how-to-create-a-directory-using-ansible',
        },
        {
            question: 'How can I pass variable to ansible playbook in the command line?',
            answer: 'Use the --extra-vars (or -e) flag: ansible-playbook playbook.yml -e "my_var=my_value". You can also pass JSON: -e \'{"key": "value"}\'',
            questionUrl: 'https://stackoverflow.com/questions/30662069/how-can-i-pass-variable-to-ansible-playbook-in-the-command-line',
        },
        {
            question: 'How to specify sudo password for Ansible?',
            answer: 'Use --ask-become-pass (or -K) flag to prompt for password. Or set ansible_become_password in inventory. For automation, use ansible-vault to encrypt the password in a vars file.',
            questionUrl: 'https://stackoverflow.com/questions/21870083/specify-sudo-password-for-ansible',
        },
        {
            question: 'How to run only one task in Ansible playbook?',
            answer: 'Use tags: add "tags: mytag" to the task, then run with --tags mytag. Or use --start-at-task "task name" to start from a specific task. Use --step for interactive execution.',
            questionUrl: 'https://stackoverflow.com/questions/23945201/how-to-run-only-one-task-in-ansible-playbook',
        },
        {
            question: 'How to ignore SSH authenticity checking in Ansible?',
            answer: 'Set host_key_checking = False in ansible.cfg under [defaults]. Or set environment variable ANSIBLE_HOST_KEY_CHECKING=False. Or add ansible_ssh_common_args: "-o StrictHostKeyChecking=no" to inventory.',
            questionUrl: 'https://stackoverflow.com/questions/32297456/how-to-ignore-ansible-ssh-authenticity-checking',
        },
        {
            question: 'How to delete files and folders inside a directory with Ansible?',
            answer: 'Use file module with state: absent to delete, or use find module with file module. Example: find files first, then loop to delete. Or use shell module with rm -rf (less idempotent).',
            questionUrl: 'https://stackoverflow.com/questions/28347717/ansible-how-to-delete-files-and-folders-inside-a-directory',
        },
        {
            question: 'How to check if a file exists in Ansible?',
            answer: 'Use the stat module to check file existence, then register the result. Example: stat: path=/path/to/file, register: file_stat. Then use when: file_stat.stat.exists in subsequent tasks.',
            questionUrl: 'https://stackoverflow.com/questions/35654286/how-to-check-if-a-file-exists-in-ansible',
        },
        {
            question: 'What is the difference between defaults and vars in Ansible role?',
            answer: 'defaults/ has lowest precedence - easily overridden by inventory, playbook vars. vars/ has higher precedence - harder to override. Use defaults for user-configurable options, vars for internal role variables.',
            questionUrl: 'https://stackoverflow.com/questions/29127560/whats-the-difference-between-defaults-and-vars-in-an-ansible-role',
        },
        {
            question: 'How to use a default value if a variable is not defined in Ansible?',
            answer: 'Use the default filter: {{ my_var | default("fallback_value") }}. For undefined check: {{ my_var | default(omit) }}. Use default(true) or default(false) for boolean defaults.',
            questionUrl: 'https://stackoverflow.com/questions/34733123/use-a-default-if-a-variable-is-not-defined',
        },
        {
            question: 'How to do multiline shell script in Ansible?',
            answer: 'Use the shell module with literal block scalar (|): shell: |\\n  command1\\n  command2. Or use cmd parameter. For better practice, consider using script module for complex scripts.',
            questionUrl: 'https://stackoverflow.com/questions/40230184/how-to-do-multiline-shell-script-in-ansible',
        },
    ],
    bootlog: [
        {
            question: 'How to check Linux boot logs?',
            answer: 'Use dmesg command to view kernel ring buffer messages, or journalctl -b to see boot logs from systemd. You can also check /var/log/boot.log on some systems.',
            questionUrl: 'https://stackoverflow.com/questions/21292983/how-to-check-linux-boot-logs',
        },
        {
            question: 'What does "ACPI: System State" mean in boot logs?',
            answer: 'ACPI System State indicates power states supported: S0 (working), S1-S3 (sleep levels), S4 (hibernate), S5 (soft off). The value in parentheses shows the deepest supported sleep state.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/acpi',
        },
        {
            question: 'How to view previous boot logs in Linux?',
            answer: 'Use journalctl --list-boots to see available boots. Then journalctl -b -1 for previous boot, -b -2 for two boots ago. Requires persistent journal storage in /etc/systemd/journald.conf.',
            questionUrl: 'https://unix.stackexchange.com/questions/269447/how-to-view-previous-boot-logs',
        },
        {
            question: 'What causes "PCI: Failed to allocate mem resource" in boot logs?',
            answer: 'This indicates BIOS/UEFI did not allocate enough memory for PCI devices. Try updating BIOS, enabling "Above 4G Decoding" in BIOS, or adding pci=realloc kernel parameter.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/pci',
        },
        {
            question: 'How to reduce Linux boot time?',
            answer: 'Use systemd-analyze blame to find slow services. Disable unnecessary services with systemctl disable. Use systemd-analyze critical-chain for dependency analysis. Consider using systemd socket activation.',
            questionUrl: 'https://unix.stackexchange.com/questions/290610/how-to-reduce-linux-boot-time',
        },
        {
            question: 'What does "TSC Deadline Timer" mean in boot logs?',
            answer: 'TSC (Time Stamp Counter) Deadline Timer is a precision timing feature in modern CPUs. When enabled, it allows more efficient timer interrupts. It is used by the kernel for high-resolution timers.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/tsc',
        },
        {
            question: 'How to fix "microcode updated early" messages in boot log?',
            answer: 'This is informational, not an error. CPU microcode updates are applied early in boot for security/stability. Ensure linux-firmware package is up to date. Messages are normal and expected.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/microcode',
        },
        {
            question: 'What is PCID in boot logs?',
            answer: 'PCID (Process Context ID) is a CPU feature that reduces TLB flush overhead during context switches. "PCID enabled" message means the kernel is using this optimization. Improves performance especially with Meltdown mitigations.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/cpu-cache',
        },
        {
            question: 'How to make dmesg output persistent across reboots?',
            answer: 'Use rsyslog or syslog-ng to log kernel messages to a file. Or configure systemd-journald for persistent storage. Set Storage=persistent in /etc/systemd/journald.conf and create /var/log/journal directory.',
            questionUrl: 'https://unix.stackexchange.com/questions/198178/how-to-make-dmesg-output-persistent',
        },
        {
            question: 'What does "ACPI BIOS Error" mean during boot?',
            answer: 'ACPI BIOS errors indicate issues with system firmware ACPI tables. Often caused by buggy BIOS. Usually non-fatal. Try updating BIOS or using acpi=off kernel parameter as workaround (may disable some features).',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/acpi',
        },
    ],
    botnet: [
        {
            question: 'How to detect botnet activity in network logs?',
            answer: 'Look for unusual patterns: periodic beaconing, connections to known C&C IPs, high volume of failed connections, and DNS queries to suspicious domains. Tools like Wireshark and Zeek can help analyze traffic.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/botnet',
        },
        {
            question: 'What are common botnet communication protocols?',
            answer: 'Common protocols include IRC, HTTP/HTTPS, P2P networks, and DNS tunneling. Modern botnets often use encrypted channels and domain generation algorithms (DGA) to evade detection.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/botnet',
        },
        {
            question: 'How do botnets evade detection?',
            answer: 'Techniques include: fast-flux DNS, domain generation algorithms (DGA), encrypted C2 channels, mimicking legitimate traffic patterns, using legitimate services as C2, and peer-to-peer architecture to avoid single point of failure.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/malware',
        },
        {
            question: 'What is a Domain Generation Algorithm (DGA)?',
            answer: 'DGA generates pseudo-random domain names algorithmically. Bots and C2 servers use the same algorithm to find each other. Makes blocking difficult as thousands of domains are generated. Used by Conficker, Zeus, CryptoLocker.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/dns',
        },
        {
            question: 'How to analyze botnet malware samples safely?',
            answer: 'Use isolated virtual machines with no network access or monitored network. Tools: Cuckoo Sandbox, REMnux, FLARE VM. Disable shared folders. Take snapshots before analysis. Use tools like IDA Pro, Ghidra for static analysis.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/malware-analysis',
        },
        {
            question: 'What is the difference between botnet and DDoS?',
            answer: 'A botnet is a network of compromised computers (bots) controlled by an attacker. DDoS (Distributed Denial of Service) is one type of attack botnets can perform. Botnets can also send spam, mine crypto, steal data.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/ddos',
        },
        {
            question: 'How do I check if my server is part of a botnet?',
            answer: 'Check for: unusual outbound connections (netstat), unknown processes, high CPU/bandwidth usage, cron jobs you did not create, modified system files (rpm -Va), rootkit scanners (rkhunter, chkrootkit).',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/rootkit',
        },
        {
            question: 'What ports do botnets commonly use?',
            answer: 'IRC botnets: 6667, 6668. HTTP-based: 80, 443 (to blend with normal traffic). Custom ports vary. Many modern botnets use standard web ports with encryption to avoid detection.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/network-security',
        },
        {
            question: 'How do botnets spread to new hosts?',
            answer: 'Methods include: exploiting vulnerabilities, brute-forcing SSH/RDP, phishing emails with malware, drive-by downloads, infected USB drives, supply chain attacks, and worm-like self-propagation.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/malware',
        },
        {
            question: 'What is fast-flux in botnets?',
            answer: 'Fast-flux rapidly changes DNS records pointing to C2 servers, using compromised hosts as proxies. Single-flux changes A records, double-flux also changes NS records. Makes takedown difficult.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/dns',
        },
    ],
    bruteforce: [
        {
            question: 'How to protect against brute force attacks?',
            answer: 'Implement rate limiting, use CAPTCHA after failed attempts, require strong passwords, enable account lockout policies, use multi-factor authentication, and consider tools like fail2ban.',
            questionUrl: 'https://security.stackexchange.com/questions/94283/how-to-protect-against-brute-force-attacks',
        },
        {
            question: 'What is the difference between brute force and dictionary attacks?',
            answer: 'Brute force tries all possible combinations systematically, while dictionary attacks use a predefined list of likely passwords. Dictionary attacks are faster but may miss uncommon passwords.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/brute-force',
        },
        {
            question: 'How long does it take to brute force different password lengths?',
            answer: 'Depends on charset and speed. 8-char lowercase at 1B/sec: ~3 days. Add uppercase: ~2 years. Add numbers/symbols: decades. 12+ chars with complexity: practically impossible with current technology.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/passwords',
        },
        {
            question: 'What is credential stuffing vs brute force?',
            answer: 'Credential stuffing uses leaked username/password pairs from breaches to try on other sites. Brute force systematically tries combinations. Stuffing exploits password reuse, brute force tries to guess passwords.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/credential-stuffing',
        },
        {
            question: 'How does fail2ban work against brute force?',
            answer: 'fail2ban monitors log files for failed login attempts. After X failures from an IP in Y seconds, it adds a firewall rule to block that IP for a duration. Configurable via /etc/fail2ban/jail.conf.',
            questionUrl: 'https://serverfault.com/questions/tagged/fail2ban',
        },
        {
            question: 'What are rainbow tables and how do they relate to brute force?',
            answer: 'Rainbow tables are precomputed hash-to-password lookup tables. They trade storage for time - instead of computing hashes during attack, look them up. Defeated by salting passwords. Modern bcrypt/argon2 are immune.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/rainbow-table',
        },
        {
            question: 'How to detect brute force attacks in logs?',
            answer: 'Look for: multiple failed logins from same IP, sequential or pattern-based usernames tried, high volume of auth requests in short time. Tools: grep failed auth logs, use log analyzers like Splunk, ELK stack.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/log-analysis',
        },
        {
            question: 'Is bcrypt enough to protect against brute force?',
            answer: 'bcrypt with sufficient cost factor (12+) makes brute force impractical. It is deliberately slow and includes salt. Each hash takes ~100ms, making billions of attempts infeasible. Still need rate limiting for online attacks.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/bcrypt',
        },
        {
            question: 'What is password spraying attack?',
            answer: 'Password spraying tries common passwords against many accounts, avoiding lockout thresholds. Instead of 1000 passwords vs 1 account, try 1 password vs 1000 accounts. Evades per-account lockout policies.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/password-spraying',
        },
        {
            question: 'How to implement rate limiting for login attempts?',
            answer: 'Track attempts per IP and per account separately. Use exponential backoff: 1s, 2s, 4s... delays after failures. Consider CAPTCHA after 3-5 failures. Use Redis or similar for distributed rate limiting.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/rate-limiting',
        },
    ],
    cargo: [
        {
            question: 'How do I update dependencies in Cargo.toml?',
            answer: 'Run cargo update to update all dependencies to their latest compatible versions. To update a specific package: cargo update -p package_name. To allow breaking changes, manually edit Cargo.toml.',
            questionUrl: 'https://stackoverflow.com/questions/29065921/how-do-i-update-dependencies-in-cargo-toml',
        },
        {
            question: 'What is the difference between dependencies and dev-dependencies in Cargo?',
            answer: 'Dependencies are required to build and run your project. Dev-dependencies are only used during development and testing (like test frameworks). They are not included when others use your crate as a dependency.',
            questionUrl: 'https://stackoverflow.com/questions/35007897/what-is-the-difference-between-dependencies-and-dev-dependencies',
        },
        {
            question: 'How to build a release binary with Cargo?',
            answer: 'Run cargo build --release. Binary will be in target/release/. Release builds enable optimizations and disable debug symbols. For maximum optimization, add lto = true in [profile.release] in Cargo.toml.',
            questionUrl: 'https://stackoverflow.com/questions/29008127/how-to-build-a-release-binary-with-cargo',
        },
        {
            question: 'How to fix "could not find crate" error in Cargo?',
            answer: 'Check crate name spelling in Cargo.toml. Run cargo update. Clear ~/.cargo/registry and cargo cache. Check if crate exists on crates.io. For git dependencies, verify URL and branch/tag.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/rust-cargo',
        },
        {
            question: 'What is Cargo.lock and should I commit it?',
            answer: 'Cargo.lock records exact dependency versions used. For applications: commit it for reproducible builds. For libraries: usually do not commit (let downstream choose versions). Add to .gitignore for libraries.',
            questionUrl: 'https://stackoverflow.com/questions/29917613/should-i-commit-cargo-lock',
        },
        {
            question: 'How to add a local crate as dependency in Cargo?',
            answer: 'Use path in Cargo.toml: [dependencies]\\nmy_crate = { path = "../my_crate" }. For both local and published: my_crate = { version = "1.0", path = "../my_crate" }.',
            questionUrl: 'https://stackoverflow.com/questions/33025887/how-to-use-a-local-unpublished-crate',
        },
        {
            question: 'How to run a specific example in Cargo?',
            answer: 'Run cargo run --example example_name. Examples are in examples/ directory. List all examples: cargo run --example. Build without running: cargo build --example example_name.',
            questionUrl: 'https://stackoverflow.com/questions/26243025/how-to-run-examples-in-cargo',
        },
        {
            question: 'How to enable features in Cargo dependencies?',
            answer: 'In Cargo.toml: my_crate = { version = "1.0", features = ["feature1", "feature2"] }. To enable default features: default-features = true. To disable: default-features = false.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/rust-cargo',
        },
        {
            question: 'How to cross-compile with Cargo?',
            answer: 'Install target: rustup target add x86_64-unknown-linux-musl. Build: cargo build --target x86_64-unknown-linux-musl. May need linker configured in ~/.cargo/config.toml for some targets.',
            questionUrl: 'https://stackoverflow.com/questions/31492799/cross-compile-a-rust-application-from-linux-to-windows',
        },
        {
            question: 'What is workspace in Cargo and when to use it?',
            answer: 'Workspace groups related crates sharing Cargo.lock and output directory. Use for monorepos with multiple crates. Define in root Cargo.toml: [workspace]\\nmembers = ["crate1", "crate2"].',
            questionUrl: 'https://stackoverflow.com/questions/tagged/cargo-workspace',
        },
    ],
    cc: [
        {
            question: 'How to compile C code with debugging symbols?',
            answer: 'Use the -g flag: gcc -g -o program program.c. For more detailed info use -g3. To also include optimization: gcc -g -O2 -o program program.c. Debug with gdb or lldb.',
            questionUrl: 'https://stackoverflow.com/questions/89603/how-do-i-compile-with-debugging-symbols',
        },
        {
            question: 'How to link external libraries in GCC?',
            answer: 'Use -l flag for library name and -L for library path: gcc -o program program.c -L/path/to/lib -lmylib. For standard math library: gcc -o calc calc.c -lm',
            questionUrl: 'https://stackoverflow.com/questions/6141147/how-do-i-link-a-library-in-gcc',
        },
        {
            question: 'What is the difference between gcc and g++?',
            answer: 'gcc compiles C by default, g++ compiles C++. g++ automatically links C++ standard library. gcc can compile C++ with -lstdc++. For C++ code, prefer g++ to avoid missing library issues.',
            questionUrl: 'https://stackoverflow.com/questions/172587/what-is-the-difference-between-g-and-gcc',
        },
        {
            question: 'How to see all warnings in GCC?',
            answer: 'Use -Wall for common warnings. Add -Wextra for more warnings. -Wpedantic for strict ISO compliance. -Werror treats warnings as errors. Example: gcc -Wall -Wextra -Werror -o prog prog.c',
            questionUrl: 'https://stackoverflow.com/questions/5088460/flags-to-enable-thorough-and-verbose-g-warnings',
        },
        {
            question: 'What do -O1, -O2, -O3 optimization levels mean?',
            answer: '-O0: no optimization (fast compile, debug). -O1: basic optimization. -O2: recommended for release (good balance). -O3: aggressive (may increase code size). -Os: optimize for size. -Ofast: O3 + fast-math.',
            questionUrl: 'https://stackoverflow.com/questions/15548023/what-is-the-difference-between-o0-o1-o2-o3-and-ofast',
        },
        {
            question: 'How to fix "undefined reference" linker error?',
            answer: 'Means function declared but not defined. Check: 1) Implementation exists, 2) Library is linked (-l flag), 3) Order matters - libraries after objects using them, 4) Correct library path (-L flag).',
            questionUrl: 'https://stackoverflow.com/questions/12573816/what-is-an-undefined-reference-unresolved-external-symbol-error',
        },
        {
            question: 'How to create static vs shared libraries with GCC?',
            answer: 'Static: ar rcs libfoo.a foo.o bar.o, link with -static. Shared: gcc -shared -fPIC -o libfoo.so foo.c, link with -L. -lfoo. Shared libraries need -fPIC for position independent code.',
            questionUrl: 'https://stackoverflow.com/questions/2649334/difference-between-static-and-shared-libraries',
        },
        {
            question: 'How to use address sanitizer in GCC/Clang?',
            answer: 'Compile with -fsanitize=address -g. Run program normally - it reports memory errors at runtime. Also available: -fsanitize=undefined, -fsanitize=thread. Significant slowdown but catches many bugs.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/address-sanitizer',
        },
        {
            question: 'What is -fPIC and when do I need it?',
            answer: '-fPIC generates Position Independent Code, required for shared libraries so they can be loaded at any address. Use when creating .so files. Not needed for executables or static libraries.',
            questionUrl: 'https://stackoverflow.com/questions/5311515/what-is-the-fpic-option-for-position-independent-code',
        },
        {
            question: 'How to compile for different C standards?',
            answer: 'Use -std flag: -std=c89, -std=c99, -std=c11, -std=c17. For GNU extensions: -std=gnu11. Default varies by GCC version. Check with: gcc -v. Specify explicitly for portability.',
            questionUrl: 'https://stackoverflow.com/questions/14737104/what-is-the-default-c-mode-for-the-current-gcc',
        },
    ],
    claudeCode: [
        {
            question: 'How does Claude Code handle file editing?',
            answer: 'Claude Code uses tools like read_file to view content, then search_replace or write_file to make changes. It maintains context of the codebase and can make targeted edits while preserving surrounding code.',
            questionUrl: 'https://docs.anthropic.com/claude/docs/claude-code',
        },
        {
            question: 'What are the best practices for prompting Claude Code?',
            answer: 'Be specific about what you want changed, provide context about your codebase, break complex tasks into steps, and review changes before applying. Use @file references to point to relevant code.',
            questionUrl: 'https://docs.anthropic.com/claude/docs/prompt-engineering',
        },
        {
            question: 'How to cancel Claude Code operation mid-execution?',
            answer: 'Press Ctrl+C (or Cmd+C on Mac) to interrupt. Claude Code will stop the current operation. For long-running tasks, you can also close the terminal, though this may leave partial changes.',
            questionUrl: 'https://docs.anthropic.com/claude/docs',
        },
        {
            question: 'Can Claude Code run terminal commands?',
            answer: 'Yes, Claude Code can execute terminal commands using run_terminal_cmd tool. It can run builds, tests, git commands, and more. Commands require user approval unless in auto-accept mode.',
            questionUrl: 'https://docs.anthropic.com/claude/docs/tools',
        },
        {
            question: 'How does Claude Code handle large codebases?',
            answer: 'Claude Code uses intelligent file reading, searching patterns rather than loading everything. Use @folder references for context. It can glob search, grep for patterns, and read specific line ranges.',
            questionUrl: 'https://docs.anthropic.com/claude/docs',
        },
        {
            question: 'How to undo changes made by Claude Code?',
            answer: 'Use git to revert: git checkout -- file or git restore file. For multiple files: git checkout . Review with git diff before committing. Claude Code works best with version control.',
            questionUrl: 'https://docs.anthropic.com/claude/docs',
        },
        {
            question: 'What is the context window limit for Claude Code?',
            answer: 'Claude has a 200k token context window. Long conversations may be truncated. For large files, Claude reads relevant portions. Use clear, concise prompts to maximize effective context usage.',
            questionUrl: 'https://docs.anthropic.com/claude/docs/models',
        },
        {
            question: 'How to make Claude Code follow project conventions?',
            answer: 'Add a CLAUDE.md or .cursorrules file with project guidelines. Reference existing code as examples. Be explicit about naming conventions, file structure, and patterns you want followed.',
            questionUrl: 'https://docs.anthropic.com/claude/docs',
        },
        {
            question: 'Can Claude Code create new files?',
            answer: 'Yes, Claude Code can create new files using write_file tool. Specify the path and content. It respects existing directory structure and can create parent directories if needed.',
            questionUrl: 'https://docs.anthropic.com/claude/docs/tools',
        },
        {
            question: 'How to use Claude Code for code review?',
            answer: 'Share the file or diff you want reviewed. Ask for specific feedback: security issues, performance, best practices. Claude can suggest improvements and explain potential problems in the code.',
            questionUrl: 'https://docs.anthropic.com/claude/docs',
        },
    ],
    composer: [
        {
            question: 'What is the difference between composer install and composer update?',
            answer: 'composer install reads composer.lock and installs exact versions listed. composer update ignores the lock file, resolves dependencies fresh, and updates composer.lock. Use install for consistent deployments.',
            questionUrl: 'https://stackoverflow.com/questions/16927452/what-is-the-difference-between-composer-install-and-composer-update',
        },
        {
            question: 'How to fix "Your requirements could not be resolved" in Composer?',
            answer: 'Check for conflicting version constraints, try composer update --with-dependencies, use composer why package to see why it is required, or add conflict resolution in composer.json.',
            questionUrl: 'https://stackoverflow.com/questions/22280762/how-to-fix-your-requirements-could-not-be-resolved-to-an-installable-set-of-pac',
        },
        {
            question: 'How to install a specific version of a package with Composer?',
            answer: 'Run: composer require vendor/package:1.2.3. Or in composer.json: "vendor/package": "1.2.3". Use ^ for compatible updates (^1.2), ~ for minor updates (~1.2), or exact version.',
            questionUrl: 'https://stackoverflow.com/questions/19542639/install-specific-version-of-a-package-with-composer',
        },
        {
            question: 'What is the difference between require and require-dev?',
            answer: 'require lists packages needed to run the application. require-dev lists packages for development only (tests, debugging tools). Install without dev packages: composer install --no-dev.',
            questionUrl: 'https://stackoverflow.com/questions/24858287/difference-between-require-and-require-dev',
        },
        {
            question: 'How to clear Composer cache?',
            answer: 'Run: composer clear-cache or composer clearcache. Cache location: ~/.composer/cache/ or ~/.cache/composer/. Sometimes needed when packages fail to download or update properly.',
            questionUrl: 'https://stackoverflow.com/questions/29875775/how-to-clear-composer-cache',
        },
        {
            question: 'How to autoload classes in Composer?',
            answer: 'In composer.json, add autoload section: {"psr-4": {"App\\\\": "src/"}}. Run composer dump-autoload. Include vendor/autoload.php in your code. Supports PSR-4, PSR-0, classmap, files.',
            questionUrl: 'https://stackoverflow.com/questions/24622029/composer-autoload-not-working',
        },
        {
            question: 'How to install Composer globally?',
            answer: 'Download installer: curl -sS https://getcomposer.org/installer | php. Move to path: mv composer.phar /usr/local/bin/composer. Verify: composer --version. Update: composer self-update.',
            questionUrl: 'https://stackoverflow.com/questions/21670720/how-to-install-composer-on-a-mac',
        },
        {
            question: 'What does composer dump-autoload do?',
            answer: 'Regenerates autoload files (vendor/autoload.php and autoload_*.php). Use after: adding new classes, changing autoload config, or optimizing. Add -o flag for optimized class map.',
            questionUrl: 'https://stackoverflow.com/questions/33527033/what-is-composer-dump-autoload-in-laravel',
        },
        {
            question: 'How to use private repositories with Composer?',
            answer: 'Add repository in composer.json: {"type": "vcs", "url": "git@github.com:user/repo.git"}. Configure SSH keys or use auth.json for credentials. For GitLab/GitHub tokens, use composer config.',
            questionUrl: 'https://stackoverflow.com/questions/15669508/how-to-use-a-private-git-repository-with-composer',
        },
        {
            question: 'How to downgrade a package in Composer?',
            answer: 'Run: composer require vendor/package:1.0.0 (specific version). Or edit composer.json to constrain version, then composer update vendor/package. Check available versions: composer show vendor/package --all.',
            questionUrl: 'https://stackoverflow.com/questions/29349498/how-to-downgrade-a-package-via-composer',
        },
    ],
    cryptomining: [
        {
            question: 'How to detect cryptocurrency mining malware?',
            answer: 'Monitor for high CPU/GPU usage, check for unknown processes, watch for connections to mining pools, and use security tools. Common indicators: system slowdown, increased electricity usage, and fan noise.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/cryptocurrency',
        },
        {
            question: 'What is stratum protocol in mining?',
            answer: 'Stratum is a mining pool protocol that reduces bandwidth by sending only necessary data. Miners receive job notifications, submit shares, and the pool tracks contributions. It replaced the older getwork protocol.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/stratum',
        },
        {
            question: 'What is hashrate and how is it measured?',
            answer: 'Hashrate measures computational power - hashes per second (H/s). KH/s = 1,000 H/s, MH/s = million, GH/s = billion, TH/s = trillion. Higher hashrate means more mining power and potential rewards.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/hashrate',
        },
        {
            question: 'What is the difference between solo mining and pool mining?',
            answer: 'Solo mining: you keep full block reward but may wait months/years for a block. Pool mining: combined hashpower, frequent smaller payouts based on contribution. Pools charge 1-3% fee typically.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/mining-pools',
        },
        {
            question: 'What are mining shares and difficulty?',
            answer: 'Shares are proof-of-work submissions to the pool at lower difficulty. Pool tracks shares to distribute rewards fairly. Difficulty adjusts how hard it is to find a valid hash - higher difficulty = harder.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/difficulty',
        },
        {
            question: 'How does GPU mining compare to ASIC mining?',
            answer: 'ASICs are specialized hardware, vastly more efficient for specific algorithms (SHA-256, Scrypt). GPUs are versatile, can mine various algorithms. ASICs dominate Bitcoin; GPUs used for Ethereum (before PoS), altcoins.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/asic',
        },
        {
            question: 'What causes stale/rejected shares in mining?',
            answer: 'Stale: network found block before your share submitted. Rejected: invalid share (wrong nonce, bad hash). Causes: slow network, pool latency, overclocking instability. Normal rate: <2% stale, <0.5% rejected.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/mining',
        },
        {
            question: 'How to calculate mining profitability?',
            answer: 'Factors: hashrate, power consumption (watts), electricity cost ($/kWh), pool fees, coin price, network difficulty. Use calculators like WhatToMine. Profitability changes with market conditions.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/profitability',
        },
        {
            question: 'What is proof of work in cryptocurrency?',
            answer: 'PoW requires miners to solve computational puzzles (find hash below target). First to solve gets block reward. Secures network by making attacks expensive. Uses significant energy. Alternative: Proof of Stake.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/proof-of-work',
        },
        {
            question: 'How to monitor mining rig temperature?',
            answer: 'Use nvidia-smi for NVIDIA GPUs, amd-smi for AMD. Mining software often shows temps. Tools: HWiNFO (Windows), lm-sensors (Linux). Safe range: GPU 60-75°C, VRAM under 95°C. Use thermal throttling limits.',
            questionUrl: 'https://bitcoin.stackexchange.com/questions/tagged/hardware',
        },
    ],
    ganache: [
        {
            question: 'How to fork mainnet with Ganache?',
            answer: 'Use ganache --fork https://mainnet.infura.io/v3/YOUR_KEY to fork Ethereum mainnet. Add --fork-block-number to fork at specific block. This allows testing against real contract state.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/ganache',
        },
        {
            question: 'How to increase block gas limit in Ganache?',
            answer: 'Use the --gasLimit flag: ganache --gasLimit 12000000. In ganache-cli config: gasLimit: 12000000. This helps when deploying large contracts.',
            questionUrl: 'https://stackoverflow.com/questions/50697467/how-to-increase-block-gas-limit-in-ganache',
        },
        {
            question: 'How to persist Ganache data between restarts?',
            answer: 'Use --database.dbPath flag: ganache --database.dbPath ./ganache-data. Data persists in that directory. Without this, blockchain state is lost on restart.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/ganache',
        },
        {
            question: 'How to get test ETH in Ganache?',
            answer: 'Ganache automatically creates 10 accounts with 1000 ETH each. Use ganache --wallet.defaultBalance 10000 to change default. Access accounts via web3.eth.getAccounts().',
            questionUrl: 'https://stackoverflow.com/questions/tagged/ganache',
        },
        {
            question: 'How to use Ganache with Hardhat?',
            answer: 'In hardhat.config.js, add network: { ganache: { url: "http://127.0.0.1:8545" }}. Run Ganache first, then npx hardhat run --network ganache script.js. Or use Hardhat Network (built-in).',
            questionUrl: 'https://stackoverflow.com/questions/tagged/hardhat',
        },
        {
            question: 'How to view transaction logs in Ganache?',
            answer: 'Ganache GUI shows transactions in the Transactions tab. For CLI, use --verbose flag. Or query via web3: web3.eth.getTransactionReceipt(txHash).logs for event logs.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/ganache',
        },
        {
            question: 'How to mine blocks manually in Ganache?',
            answer: 'Use --miner.blockTime 0 for instant mining (default). For manual mining, use evm_mine RPC method: curl -X POST --data \'{"jsonrpc":"2.0","method":"evm_mine","params":[],"id":1}\' localhost:8545.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/ganache',
        },
        {
            question: 'How to impersonate accounts in Ganache?',
            answer: 'Use --wallet.unlockedAccounts flag with address: ganache --wallet.unlockedAccounts 0xAddress. This allows sending transactions from any account without private key, useful for testing.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/ganache',
        },
        {
            question: 'How to set specific timestamp in Ganache?',
            answer: 'Use evm_setNextBlockTimestamp RPC method before mining a block. Or evm_increaseTime to advance time by seconds. Useful for testing time-dependent contracts.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/ganache',
        },
        {
            question: 'How to connect MetaMask to Ganache?',
            answer: 'In MetaMask, add network: RPC URL http://127.0.0.1:8545, Chain ID 1337 (or 5777 for older versions). Import Ganache accounts using private keys shown in Ganache output.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/metamask',
        },
    ],
    geminiCli: [
        {
            question: 'How to use Gemini CLI for code generation?',
            answer: 'Start gemini-cli in your project directory, describe what you want to build, and Gemini will use tools like read_file and write_file to generate code. Review changes before accepting.',
            questionUrl: 'https://ai.google.dev/gemini-api/docs/ai-studio-quickstart',
        },
        {
            question: 'How does Gemini CLI handle context?',
            answer: 'Gemini CLI maintains conversation context and can read files from your project. Use @file syntax to reference specific files. It tracks recent changes and can build on previous responses.',
            questionUrl: 'https://ai.google.dev/docs',
        },
        {
            question: 'How to install and set up Gemini CLI?',
            answer: 'Install via npm: npm install -g @anthropic-ai/gemini-cli. Set GEMINI_API_KEY environment variable. Run "gemini" in terminal to start. Requires Node.js 18+.',
            questionUrl: 'https://ai.google.dev/gemini-api/docs',
        },
        {
            question: 'How to use Gemini CLI with different models?',
            answer: 'Use --model flag to specify model: gemini --model gemini-pro or gemini-ultra. Different models have different capabilities and costs. Check Google AI docs for available models.',
            questionUrl: 'https://ai.google.dev/gemini-api/docs/models',
        },
        {
            question: 'Can Gemini CLI run shell commands?',
            answer: 'Yes, Gemini CLI can execute shell commands with run_shell_command tool. It asks for confirmation before running commands. Use for build scripts, tests, git operations, and system tasks.',
            questionUrl: 'https://ai.google.dev/docs',
        },
        {
            question: 'How to limit Gemini CLI file access?',
            answer: 'Gemini CLI respects .gitignore by default. Create .geminiignore for additional exclusions. Use sandbox mode for restricted access. Sensitive files should be in ignore patterns.',
            questionUrl: 'https://ai.google.dev/docs',
        },
        {
            question: 'How to use Gemini CLI for debugging?',
            answer: 'Share error messages and relevant code files. Ask Gemini to analyze stack traces, suggest fixes, and explain the issue. It can read logs and propose solutions based on error patterns.',
            questionUrl: 'https://ai.google.dev/docs',
        },
        {
            question: 'How does Gemini CLI handle API rate limits?',
            answer: 'Gemini CLI has built-in rate limiting awareness. If limits are hit, it will wait and retry. For heavy usage, consider paid API tier. Monitor usage in Google Cloud Console.',
            questionUrl: 'https://ai.google.dev/gemini-api/docs/quota',
        },
        {
            question: 'Can Gemini CLI search the web?',
            answer: 'Yes, Gemini CLI can use web_fetch tool to retrieve information from URLs. Useful for documentation, API references, and current information. Respects robots.txt.',
            questionUrl: 'https://ai.google.dev/docs',
        },
        {
            question: 'How to export Gemini CLI conversation?',
            answer: 'Conversations are saved in ~/.gemini/history/. Export to markdown with gemini export command. Include --full flag for complete context. Useful for documentation and sharing.',
            questionUrl: 'https://ai.google.dev/docs',
        },
    ],
    kernelCompile: [
        {
            question: 'How to compile the Linux kernel?',
            answer: 'Steps: 1) make menuconfig to configure, 2) make -j$(nproc) to compile, 3) make modules_install, 4) make install. Ensure you have build-essential, libncurses-dev, and flex installed.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/linux-kernel',
        },
        {
            question: 'What does CC and LD mean in kernel build output?',
            answer: 'CC means compiling C source to object file. LD means linking object files. AR creates archives. OBJCOPY copies/transforms object files. These show the build progress of different kernel components.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/kernel-module',
        },
        {
            question: 'How to speed up kernel compilation?',
            answer: 'Use make -j$(nproc) for parallel builds. Use ccache for repeat builds: export CC="ccache gcc". Build only needed modules. Use tmpfs for build directory. Consider distcc for distributed builds.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/linux-kernel',
        },
        {
            question: 'What is make menuconfig vs make xconfig?',
            answer: 'menuconfig: ncurses text UI (works in terminal). xconfig: Qt-based GUI (needs X server). nconfig: newer ncurses UI. oldconfig: update config for new kernel. All produce .config file.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/linux-kernel',
        },
        {
            question: 'How to compile only a specific kernel module?',
            answer: 'Use make M=path/to/module for out-of-tree modules. For in-tree: make modules SUBDIRS=drivers/net/. Or use make path/to/module.ko for single module.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/kernel-module',
        },
        {
            question: 'How to find the right kernel config?',
            answer: 'Copy running config: zcat /proc/config.gz > .config (if enabled) or cp /boot/config-$(uname -r) .config. Then make olddefconfig to update for new kernel version.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/linux-kernel',
        },
        {
            question: 'What is vmlinux vs bzImage vs zImage?',
            answer: 'vmlinux: uncompressed kernel ELF. bzImage: compressed bootable image (>512KB). zImage: compressed bootable (<512KB, legacy). Modern systems use bzImage. vmlinux used for debugging.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/linux-kernel',
        },
        {
            question: 'How to fix kernel build errors about missing headers?',
            answer: 'Install kernel headers: apt install linux-headers-$(uname -r). For build deps: apt install build-essential libncurses-dev flex bison libssl-dev libelf-dev. Clean with make mrproper.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/linux-kernel',
        },
        {
            question: 'How to apply patches to kernel source?',
            answer: 'Use patch command: patch -p1 < patchfile.patch. Dry run first with --dry-run. For git-format patches: git am patchfile.patch. Revert with patch -R -p1 < patchfile.patch.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/linux-kernel',
        },
        {
            question: 'How to create initramfs for custom kernel?',
            answer: 'Use mkinitcpio (Arch), mkinitramfs (Debian/Ubuntu), or dracut (Fedora/RHEL). Example: mkinitramfs -o /boot/initrd.img-VERSION VERSION. Include necessary modules for boot device.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/initramfs',
        },
    ],
    memdump: [
        {
            question: 'How to read a memory dump file?',
            answer: 'Use hexdump -C file for hex+ASCII view, xxd file for hex dump, or objdump -s for object files. For crash dumps, use tools like WinDbg (Windows) or crash (Linux).',
            questionUrl: 'https://stackoverflow.com/questions/tagged/memory-dump',
        },
        {
            question: 'What do memory dump patterns like 0xCD mean?',
            answer: '0xCD = uninitialized heap memory (MSVC). 0xDD = freed heap memory. 0xFD = guard bytes. 0xCC = uninitialized stack. These patterns help identify memory issues during debugging.',
            questionUrl: 'https://stackoverflow.com/questions/370195/when-and-why-will-a-compiler-initialize-memory-to-0xcd-0xdd-etc',
        },
        {
            question: 'How to create a memory dump of a running process?',
            answer: 'Linux: gcore PID creates core.PID file. Or /proc/PID/mem with root. Windows: Task Manager > Create dump file, or procdump -ma PID. Dumps can be large.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/memory-dump',
        },
        {
            question: 'How to analyze a Linux core dump?',
            answer: 'Use gdb: gdb ./program corefile. Commands: bt (backtrace), info registers, x/100x $rsp (examine memory). Load symbols with symbol-file. Requires debug symbols (-g).',
            questionUrl: 'https://stackoverflow.com/questions/tagged/gdb',
        },
        {
            question: 'How to convert memory dump to readable format?',
            answer: 'hexdump -C for hex+ASCII. strings command extracts printable strings. od (octal dump) with various formats. xxd -r reverses hex to binary. Use objdump for structured binary.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/hexdump',
        },
        {
            question: 'What is the difference between core dump and heap dump?',
            answer: 'Core dump: full process memory including stack, heap, code, registers. Heap dump: only dynamically allocated memory (Java heap, malloc). Heap dumps are smaller, focused on application data.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/heap-dump',
        },
        {
            question: 'How to enable core dumps on Linux?',
            answer: 'Set ulimit -c unlimited for unlimited size. Configure /proc/sys/kernel/core_pattern for location/naming. Example: echo "/tmp/core.%e.%p" > /proc/sys/kernel/core_pattern.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/core-dump',
        },
        {
            question: 'How to search for strings in memory dump?',
            answer: 'Use strings command: strings dumpfile | grep pattern. For binary patterns: grep -obUaP "\\x00\\x01\\x02" file. xxd + grep for hex patterns. Consider volatility for forensics.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/strings',
        },
        {
            question: 'How to dump memory of specific address range?',
            answer: 'In gdb: dump memory filename start_addr end_addr. Linux: dd if=/proc/PID/mem bs=1 skip=$ADDR count=$SIZE. Use readelf to find section addresses.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/gdb',
        },
        {
            question: 'What tools are used for memory forensics?',
            answer: 'Volatility Framework: most popular, plugins for various OS. Rekall: similar to Volatility. LiME: Linux memory acquisition. WinDbg: Windows analysis. Autopsy: general forensics with memory plugins.',
            questionUrl: 'https://security.stackexchange.com/questions/tagged/forensics',
        },
    ],
    mkinitcpio: [
        {
            question: 'How to fix "Possibly missing firmware" warning in mkinitcpio?',
            answer: 'Install the missing firmware package (often linux-firmware). For specific hardware, find the firmware package in AUR. The warning usually does not prevent booting unless you need that specific hardware.',
            questionUrl: 'https://bbs.archlinux.org/viewtopic.php?id=258348',
        },
        {
            question: 'What are mkinitcpio hooks and how do they work?',
            answer: 'Hooks add functionality to initramfs. Common hooks: base (essential), udev (device management), filesystems (fs support), keyboard (input). Order matters - udev should come before autodetect.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'How to regenerate initramfs with mkinitcpio?',
            answer: 'Run: sudo mkinitcpio -P to regenerate all presets. For specific kernel: mkinitcpio -p linux. For specific config: mkinitcpio -c /etc/mkinitcpio.conf -g /boot/initramfs-linux.img.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'What is the difference between MODULES and HOOKS in mkinitcpio?',
            answer: 'MODULES: specific kernel modules to always include (e.g., nvidia, ext4). HOOKS: scripts that add functionality and may include multiple modules. MODULES is manual, HOOKS is more automated.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'How to add custom modules to initramfs?',
            answer: 'Edit /etc/mkinitcpio.conf, add to MODULES array: MODULES=(module1 module2). Then run mkinitcpio -P. For hooks adding modules automatically, check hook documentation.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'How to fix boot issues caused by mkinitcpio?',
            answer: 'Boot from live USB, mount root partition, chroot in, check /etc/mkinitcpio.conf for errors, regenerate with mkinitcpio -P. Common issues: missing hooks, wrong filesystem module.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'What compression algorithms does mkinitcpio support?',
            answer: 'Supported: gzip (default), bzip2, lzma, xz, lzop, lz4, zstd. Set in mkinitcpio.conf: COMPRESSION="zstd". zstd offers good compression with fast decompression. lz4 is fastest.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'How to include files in initramfs?',
            answer: 'Use FILES array: FILES=(/etc/modprobe.d/myconfig.conf). For directories/patterns, create a custom hook in /etc/initcpio/install/ that copies files.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'How to debug mkinitcpio boot problems?',
            answer: 'Add break=premount or break=postmount to kernel cmdline for emergency shell. Use rd.debug for verbose output. Check journalctl -b for boot logs after successful boot.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
        {
            question: 'What is the autodetect hook in mkinitcpio?',
            answer: 'autodetect scans your system and includes only needed modules, making initramfs smaller. Place after udev. Remove autodetect for generic/portable images that need all modules.',
            questionUrl: 'https://wiki.archlinux.org/title/Mkinitcpio',
        },
    ],
    pip: [
        {
            question: 'How do I upgrade pip itself?',
            answer: 'Run: python -m pip install --upgrade pip. On some systems use pip3. For user install: pip install --user --upgrade pip. Always use python -m pip to ensure correct Python version.',
            questionUrl: 'https://stackoverflow.com/questions/15221473/how-do-i-update-pip-itself-from-inside-my-virtual-environment',
        },
        {
            question: 'How to install packages from requirements.txt?',
            answer: 'Run: pip install -r requirements.txt. To install exact versions: pip install -r requirements.txt --no-deps. Create requirements with: pip freeze > requirements.txt',
            questionUrl: 'https://stackoverflow.com/questions/7225900/how-to-install-packages-using-pip-according-to-the-requirements-txt-file',
        },
        {
            question: 'How to fix "pip is configured with locations that require TLS/SSL"?',
            answer: 'Install OpenSSL development packages: apt install libssl-dev (Debian) or yum install openssl-devel (RHEL). Rebuild Python with SSL support. Or use --trusted-host pypi.org (not recommended).',
            questionUrl: 'https://stackoverflow.com/questions/45954528/pip-is-configured-with-locations-that-require-tls-ssl',
        },
        {
            question: 'How to install a specific version of a package?',
            answer: 'Use ==: pip install package==1.2.3. Version ranges: package>=1.0,<2.0. Latest patch: package~=1.4.2. List versions: pip index versions package (pip 21.2+).',
            questionUrl: 'https://stackoverflow.com/questions/5226311/installing-specific-package-version-with-pip',
        },
        {
            question: 'How to fix "Could not find a version that satisfies the requirement"?',
            answer: 'Check package name spelling, Python version compatibility, pip version (upgrade pip). For packages requiring compilation: install build deps. Try: pip install --pre for pre-release versions.',
            questionUrl: 'https://stackoverflow.com/questions/32302379/could-not-find-a-version-that-satisfies-the-requirement',
        },
        {
            question: 'What is the difference between pip and pip3?',
            answer: 'pip may point to Python 2 or 3 depending on system. pip3 explicitly uses Python 3. Best practice: python3 -m pip ensures correct Python. Check with pip --version.',
            questionUrl: 'https://stackoverflow.com/questions/40832533/difference-between-pip-and-pip3',
        },
        {
            question: 'How to install pip in a virtual environment?',
            answer: 'Virtual environments include pip automatically. Create: python -m venv myenv. Activate: source myenv/bin/activate (Linux/Mac) or myenv\\Scripts\\activate (Windows). pip is then available.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/virtualenv',
        },
        {
            question: 'How to uninstall all pip packages?',
            answer: 'Generate list and uninstall: pip freeze | xargs pip uninstall -y. Or pip freeze > uninstall.txt then pip uninstall -r uninstall.txt -y. Be careful in system Python.',
            questionUrl: 'https://stackoverflow.com/questions/11248073/how-to-uninstall-all-pip-packages',
        },
        {
            question: 'How to use pip with proxy?',
            answer: 'Set environment variable: export HTTPS_PROXY=http://proxy:port. Or use flag: pip install --proxy http://user:pass@proxy:port package. Configure in pip.conf for permanent setting.',
            questionUrl: 'https://stackoverflow.com/questions/9698557/how-to-use-pip-on-windows-behind-an-authenticating-proxy',
        },
        {
            question: 'How to install packages from GitHub with pip?',
            answer: 'pip install git+https://github.com/user/repo.git. Specific branch: git+https://...@branch. Specific tag: git+https://...@v1.0. SSH: git+ssh://git@github.com/user/repo.git.',
            questionUrl: 'https://stackoverflow.com/questions/15268953/how-to-install-python-package-from-github',
        },
    ],
    nextBuild: [
        {
            question: 'How to fix "Module not found" error in Next.js build?',
            answer: 'Check import paths (case-sensitive on Linux), verify package is in dependencies, clear .next folder and node_modules, run npm install again. For aliases, check jsconfig.json or tsconfig.json paths.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'What is the difference between getStaticProps and getServerSideProps?',
            answer: 'getStaticProps runs at build time (SSG) - best for static content. getServerSideProps runs on every request (SSR) - best for dynamic data. SSG is faster but SSR shows fresher data.',
            questionUrl: 'https://stackoverflow.com/questions/65083269/what-is-the-difference-between-getstaticprops-and-getserversideprops',
        },
        {
            question: 'How to reduce Next.js build time?',
            answer: 'Use SWC (default in Next 12+), enable incremental builds, analyze bundle with @next/bundle-analyzer, code-split with dynamic imports, cache node_modules in CI, use turbo for monorepos.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'How to fix "Error: Image Optimization" during build?',
            answer: 'For static export, set images.unoptimized: true in next.config.js. Or use custom loader. Issue occurs because static export cannot optimize images at request time.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'How to analyze Next.js bundle size?',
            answer: 'Install @next/bundle-analyzer. In next.config.js, wrap config with analyzer. Run ANALYZE=true npm run build. Opens interactive treemap showing module sizes.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'What is ISR (Incremental Static Regeneration)?',
            answer: 'ISR allows static pages to be updated after build. Add revalidate property to getStaticProps. Pages regenerate in background while serving stale content. Balances SSG speed with freshness.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'How to fix "out of memory" during Next.js build?',
            answer: 'Increase Node memory: NODE_OPTIONS="--max-old-space-size=4096" npm run build. Analyze bundle for large dependencies. Use dynamic imports. Consider moving to server components in Next 13+.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'How to handle environment variables in Next.js build?',
            answer: 'NEXT_PUBLIC_* vars are exposed to browser (baked in at build). Server-only vars are not prefixed. Use .env.local for local dev, .env.production for production. Runtime vars need getServerSideProps.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'How to fix build errors with third-party packages?',
            answer: 'Common fix: transpilePackages in next.config.js. For ESM issues: use next/dynamic with ssr: false. Check package compatibility with your Next.js version. Some packages need client-only rendering.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
        {
            question: 'What is the output option in next.config.js?',
            answer: 'output: "standalone" creates minimal production bundle. output: "export" generates static HTML (no server). Default is server mode. Standalone is useful for Docker deployments.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/next.js',
        },
    ],
    rkhunter: [
        {
            question: 'How to update rkhunter database?',
            answer: 'Run: sudo rkhunter --update to update malware signatures. Then sudo rkhunter --propupd to update file properties database after system updates. Run checks with sudo rkhunter --check.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'How to fix false positives in rkhunter?',
            answer: 'Edit /etc/rkhunter.conf to whitelist known-good files using ALLOWHIDDENDIR, ALLOWHIDDENFILE, or SCRIPTWHITELIST. After changes, run rkhunter --propupd to update baseline.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'How to run rkhunter automatically?',
            answer: 'Set up cron job: 0 3 * * * /usr/bin/rkhunter --check --cronjob --report-warnings-only. Or use systemd timer. Configure MAIL-ON-WARNING in rkhunter.conf for email alerts.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'What does "Warning: The file properties have changed" mean?',
            answer: 'File hash/permissions changed since last propupd. Normal after system updates. Run rkhunter --propupd after legitimate updates. If unexpected, investigate the file for tampering.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'How to check specific test in rkhunter?',
            answer: 'Use --enable or --disable flags: rkhunter --check --enable rootkits. Available tests: rootkits, trojans, os_specific, additional, properties. List tests with --list tests.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'What is the difference between rkhunter and chkrootkit?',
            answer: 'Both scan for rootkits. rkhunter also checks file properties, ports, startup files. chkrootkit is simpler, focuses on rootkit signatures. Best practice: run both for comprehensive coverage.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rootkit',
        },
        {
            question: 'How to interpret rkhunter log file?',
            answer: 'Log at /var/log/rkhunter.log. Look for [Warning] and [Bad] entries. [OK] is fine. Check "System checks summary" at end. Warnings need investigation, not all are malware.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'How to fix "Invalid WEB_CMD configuration option"?',
            answer: 'In /etc/rkhunter.conf, set WEB_CMD to wget/curl path or disable: WEB_CMD="". Some systems need explicit path like WEB_CMD="/usr/bin/wget". Restart rkhunter after change.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'What rootkits can rkhunter detect?',
            answer: 'rkhunter detects 100+ rootkits including: SucKIT, Adore, Knark, Mood-NT, 55808 trojan, and many more. Also detects suspicious strings in binaries, hidden processes, backdoors.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
        {
            question: 'How to whitelist hidden directories in rkhunter?',
            answer: 'In /etc/rkhunter.conf, add: ALLOWHIDDENDIR=/path/.hidden_dir. For files: ALLOWHIDDENFILE=/path/.hidden_file. Common whitelists: .git directories, dotfiles in home.',
            questionUrl: 'https://unix.stackexchange.com/questions/tagged/rkhunter',
        },
    ],
    simcity: [
        {
            question: 'How does SimCity simulation work under the hood?',
            answer: 'SimCity uses cellular automata and agent-based simulation. Each tile has properties that affect neighbors. Agents (Sims, vehicles) path-find through the city. The game ticks update state incrementally.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/simulation',
        },
        {
            question: 'What are the key algorithms in city simulation games?',
            answer: 'Key algorithms: A* for pathfinding, cellular automata for land value/pollution spread, traffic flow simulation, utility network graphs, and demand/supply economic models.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/city-building',
        },
        {
            question: 'How do city builders handle traffic simulation?',
            answer: 'Approaches vary: agent-based (individual vehicles), flow-based (aggregate traffic), or hybrid. Roads have capacity, intersections cause delays. Pathfinding uses weighted graphs with congestion feedback.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/pathfinding',
        },
        {
            question: 'How is land value calculated in city builders?',
            answer: 'Land value typically uses: proximity to services (positive), pollution (negative), crime (negative), nearby land values (averaging). Often implemented with cellular automata spreading influence.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/simulation',
        },
        {
            question: 'How do utility networks (power/water) work in city sims?',
            answer: 'Usually graph-based: buildings are nodes, pipes/lines are edges. Use flow algorithms to distribute resources. Check connectivity, calculate capacity/demand, propagate shortages.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/graph',
        },
        {
            question: 'How to implement demand/supply mechanics?',
            answer: 'Track population needs: housing demand = jobs available - housing. Industrial demand = commercial activity. Balance with caps, growth rates, and feedback loops. Update periodically.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/economy',
        },
        {
            question: 'How does zoning work in city builders?',
            answer: 'Zones define allowed building types. Buildings spawn based on demand/land value/accessibility. Higher value land gets denser buildings. Zone types influence each other (industrial near residential = bad).',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/city-building',
        },
        {
            question: 'How to optimize simulation performance for large cities?',
            answer: 'Techniques: spatial partitioning (quadtree), LOD simulation (distant areas less detailed), batch updates, multithreading, caching expensive calculations, simplified models for scale.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/optimization',
        },
        {
            question: 'How do disasters work in city simulation games?',
            answer: 'Disasters are events that modify tile/building state: destroy buildings, spread fire (cellular automata), create evacuation traffic. Often use random triggers with escalation mechanics.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/simulation',
        },
        {
            question: 'How to save/load city simulation state?',
            answer: 'Serialize all tile data, building states, agent positions, economic variables. Use efficient formats (binary/protobuf). Consider save versioning for updates. Compress large saves.',
            questionUrl: 'https://gamedev.stackexchange.com/questions/tagged/save-game',
        },
    ],
    terraform: [
        {
            question: 'What is the difference between terraform plan and terraform apply?',
            answer: 'terraform plan shows what changes will be made without executing them - it is a dry run. terraform apply actually creates/modifies/destroys resources. Always run plan before apply to review changes.',
            questionUrl: 'https://stackoverflow.com/questions/48044954/what-is-the-difference-between-terraform-plan-and-terraform-apply',
        },
        {
            question: 'How to fix "state lock" errors in Terraform?',
            answer: 'State lock prevents concurrent modifications. If stuck, use terraform force-unlock LOCK_ID. Check if another process is running. For remote state, verify backend connectivity and permissions.',
            questionUrl: 'https://stackoverflow.com/questions/62189825/how-to-unlock-terraform-state',
        },
        {
            question: 'How to import existing resources into Terraform?',
            answer: 'Use terraform import resource_type.name resource_id. Example: terraform import aws_instance.web i-1234567890. Then write matching config. Use terraform state show to see attributes.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
        {
            question: 'What is terraform state and why is it important?',
            answer: 'State maps config to real resources, tracks metadata, and improves performance. Without state, Terraform cannot know what exists. Use remote state (S3, GCS) for teams. Never edit state manually.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
        {
            question: 'How to use variables in Terraform?',
            answer: 'Declare with variable block, reference with var.name. Set via -var flag, terraform.tfvars, environment (TF_VAR_name). Use locals for computed values. Variables can have defaults and validation.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
        {
            question: 'What is the difference between count and for_each?',
            answer: 'count creates numbered instances (count.index). for_each creates named instances with keys. for_each is preferred - avoids index shift issues when removing items from middle of list.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
        {
            question: 'How to manage multiple environments with Terraform?',
            answer: 'Options: workspaces (terraform workspace new prod), separate directories per env, or use tools like Terragrunt. Workspaces share code with different state. Directories offer more isolation.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
        {
            question: 'How to destroy specific resources in Terraform?',
            answer: 'Use terraform destroy -target=resource_type.name. Or remove from config and apply. Be careful with dependencies. -target is for exceptional cases, not regular workflow.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
        {
            question: 'What are Terraform modules and when to use them?',
            answer: 'Modules are reusable groups of resources. Use for: repeated patterns, team sharing, organization. Call with module block. Modules have inputs (variables) and outputs. Version modules for stability.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
        {
            question: 'How to handle secrets in Terraform?',
            answer: 'Never commit secrets to git. Options: environment variables, AWS Secrets Manager/HashiCorp Vault data sources, encrypted tfvars (git-crypt), CI/CD secret injection. Mark sensitive variables.',
            questionUrl: 'https://stackoverflow.com/questions/tagged/terraform',
        },
    ],
};

export function getModuleStackOverflowQuestions(moduleKey: string): StackOverflowQuestion[] {
    return MODULE_STACKOVERFLOW_QUESTIONS[moduleKey] ?? [];
}

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
