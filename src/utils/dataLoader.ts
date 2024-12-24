import { EnvDetector } from './environment.js';

// import fs from 'fs';
// import path from 'path';
// import csv from 'csv-parser';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

interface CSVFILE {
    name: string;
    id: string;
    versions: string[];
}

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
    pypi: null,
    terraform_aws_resources: null,
    terraform_azure_resources: null,
    terraform_gcp_resources: null,
    terraform_ids: null,
};

export const DATA_CSV: { [key: string]: CSVFILE[] | null } = {
    julia: null
};

async function loadDataFile(filename: string): Promise<string[]> {
    try {
            if (EnvDetector.isNode()) {
                const path = await import('path');
                const fs = await import('fs');
                const { fileURLToPath } = await import('url');
                const __filename = fileURLToPath(import.meta.url);
                const __dirname = path.dirname(__filename);
                const filePath = path.join(__dirname, '../..', 'data', filename);
                const content = await fs.promises.readFile(filePath, 'utf8');
                return content
                    .trim()
                    .split('\n')
                    .filter((line) => line.length > 0);
            } else {
                const response = await fetch(`https://ch563.s3.ap-southeast-1.amazonaws.com/data/${filename}`);
                const content = await response.text();
                return content.trim().split('\n').filter((line) => line.length > 0);
            }
        } catch (error) {
            console.error(`Error loading ${filename}:`, error.message);
            return [];
        }
};

const getVersions = (data: any) => {
    const versions: string[] = [];
    Object.keys(data).map(key => {
        if (key !== 'AAindex' && key !== '1cd36ffe') {
            versions.push(data[key])
        }
        return key;
    });
    return versions;
}

const loadCsvFile = (filename: string): Promise<CSVFILE[]> => new Promise(async (resolve, reject) => {
    const results: CSVFILE[] = [];
    if (EnvDetector.isNode()) {
        const path = await import('path');
        const fs = await import('fs');
        const csv = (await import('csv-parser')).default;
        const filePath = path.join(__dirname, '../..', 'data', filename);
        fs.createReadStream(filePath)
            .pipe(csv()).on('data', (data) => {
                results.push({
                    name: data['AAindex'] || 'Revise',
                    id: data['1cd36ffe'] || '295af30f',
                    versions: getVersions(data),
                });
        })
        .on('end', () => {
            resolve(results);
        })
        .on('error', (error) => {
            console.error('Error reading CSV file:', error);
            resolve(results);
        });
    } else {
        resolve(results);
    }
})

export async function loadData(name: string): Promise<string[]> {
    const data = DATA_FILES[name];
    if (data === null) {
        DATA_FILES[name] = await loadDataFile(name + '.txt');
    }
    return DATA_FILES[name] || [];
}

export async function loadCsv(name: string): Promise<CSVFILE[]> {
    const data = DATA_CSV[name];
    if (data === null) {
        DATA_CSV[name] = await loadCsvFile(`${name}.csv`);
    }
    return DATA_CSV[name] || [];
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


export const COMPRESSION_FORMATS_LIST: string[] = [
    'gzip',
    'bzip2',
    'lzma',
    'xz',
    'lzop',
    'lz4',
    'zstd',
];