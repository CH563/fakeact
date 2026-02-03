import ansible from '../../../src/modules/ansible';
import bootlog from '../../../src/modules/bootlog';
import botnet from '../../../src/modules/botnet';
import bruteforce from '../../../src/modules/bruteforce';
import cargo from '../../../src/modules/cargo';
import cc from '../../../src/modules/cc';
import claudeCode from '../../../src/modules/claudeCode';
import composer from '../../../src/modules/composer';
import cryptomining from '../../../src/modules/cryptomining';
import ganache from '../../../src/modules/ganache';
import geminiCli from '../../../src/modules/geminiCli';
import kernelCompile from '../../../src/modules/kernelCompile';
import memdump from '../../../src/modules/memdump';
import mkinitcpio from '../../../src/modules/mkinitcpio';
import pip from '../../../src/modules/pip';
import nextBuild from '../../../src/modules/nextBuild';
import rkhunter from '../../../src/modules/rkhunter';
import simcity from '../../../src/modules/simcity';
import terraform from '../../../src/modules/terraform';

export const moduleMap: Record<string, () => Promise<void>> = {
    ansible,
    bootlog,
    botnet,
    bruteforce,
    cargo,
    cc,
    claudeCode,
    composer,
    cryptomining,
    ganache,
    geminiCli,
    kernelCompile,
    memdump,
    mkinitcpio,
    pip,
    nextBuild,
    rkhunter,
    simcity,
    terraform,
};