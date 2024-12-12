import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 枚举data目录下的所有文件名和对应的缓存变量值，对应数据类型: string[] | null
export const DATA_FILES: { [key: string]: string[] | null } = {
    bootlog: null,
    cfiles: null,
    packages: null,
    composer: null,
    simcity: null,
    boot_hooks: null,
    os_releases: null,
    docker_packages: null,
    docker_tags: null,
    ansible_roles: null,
    ansible_tasks: null,
    rkhunter_checks: null,
    rkhunter_rootkits: null,
    rkhunter_tasks: null,
    julia_packages: null,
    terraform_aws_resources: null,
    terraform_azure_resources: null,
    terraform_gcp_resources: null,
    terraform_ids: null,
};

async function loadDataFile(filename: string): Promise<string[]> {
    try {
        const filePath = path.join(__dirname, '../..', 'data', filename);
        const content = await fs.readFile(filePath, 'utf8');
        return content
            .trim()
            .split('\n')
            .filter((line) => line.length > 0);
    } catch (error) {
        console.error(`Error loading ${filename}:`, error.message);
        return [];
    }
}

export async function loadData(name: string): Promise<string[]> {
    const data = DATA_FILES[name];
    if (data === null) {
        DATA_FILES[name] = await loadDataFile(name + '.txt');
    }
    return DATA_FILES[name] || [];
}

export const EXTENSIONS_LIST: string[] = [
    'gif',
    'mkv',
    'webm',
    'mp4',
    'html',
    'php',
    'md',
    'png',
    'jpg',
    'opus',
    'ogg',
    'mp3',
    'flac',
    'iso',
    'zip',
    'rar',
    'tar.gz',
    'tar.bz2',
    'tar.xz',
    'tar.zstd',
    'deb',
    'rpm',
    'exe',
];
