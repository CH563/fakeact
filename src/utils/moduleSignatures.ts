// Static table of every module's `.signature` (the command shown as the
// Dockerfile RUN instruction in dockerBuild's simulated steps).
// Source: each module's `.signature` property in src/modules/*.ts.
//
// dockerBuild reads this table instead of importing the module registry
// (src/modules/index.ts): importing the registry would drag all 25 modules,
// including Node-only ones (ora, fs), into the browser bundle.
export const MODULE_SIGNATURES: Record<string, string> = {
    ansible: 'ansible-playbook',
    bootlog: 'bcdedit /set {current} bootlog Yes && shutdown /r',
    botnet: './botnet.sh',
    bruteforce: './bruteforce.sh ./hashes.txt',
    cargo: 'cargo run',
    cc: 'gcc app.c',
    claudeCode: 'claude code',
    composer: 'composer install',
    cryptomining: './cryptominer.sh --gpu all --provider stratum',
    dockerBuild: 'docker build -t image .',
    dockerImageRm: 'docker image rm 04880416f1bf',
    download: 'wget -i downloads.txt',
    ganache: 'ganache-cli',
    geminiCli: 'gemini cli',
    julia: 'julia --threads auto --project .',
    kernelCompile: 'sudo make install',
    memdump: 'memdump -k -v',
    mkinitcpio: 'mkinitcpio --generate /boot/initramfs-custom2.img --kernel 5.7.12-arch1-1',
    nextBuild: 'next build',
    npm: 'npm install',
    pip: 'pip install -r requirements.txt',
    rkhunter: 'rkhunter --check',
    simcity: './start-sumcity.sh',
    terraform: 'terraform --check',
    weblog: 'tail -f /var/log/nginx/access.log',
};
