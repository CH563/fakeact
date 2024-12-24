import chalk from 'chalk';
import { loadData } from '../utils/dataLoader.js';
import { getRandomInt, sleep } from '../utils/helpers.js';
import { writeLine, write } from '../utils/environment.js';

interface AppConfig {
    shouldExit: boolean;
}

interface ResourceCounts {
    added: number;
    changed: number;
    destroyed: number;
}

type CloudProvider = 'AWS' | 'AZURE' | 'GCP';

async function bold(msg: string): Promise<void> {
    writeLine(chalk.bold(msg));
}

async function print(msg: string): Promise<void> {
    write(msg);
}

async function terraform(speedFactor: number = 1, config: AppConfig = { shouldExit: false }): Promise<void> {
    // Load resource data
    const [TERRAFORM_AWS_RESOURCES_LIST, TERRAFORM_AZURE_RESOURCES_LIST, TERRAFORM_GCP_RESOURCES_LIST, TERRAFORM_IDS_LIST] = await Promise.all([
        loadData('terraform_aws_resources'),
        loadData('terraform_azure_resources'),
        loadData('terraform_gcp_resources'),
        loadData('terraform_ids'),
    ]);

    // Initialize counters and state
    const counts: ResourceCounts = {
        added: 0,
        changed: 0,
        destroyed: 0
    };

    // Generate random number of resources (30-300)
    const numResources = getRandomInt(30, 300);
    
    // Start message
    writeLine("Acquiring state lock. This may take a few moments...");
    await sleep(500 / speedFactor);

    // Start time
    const startTime = Date.now();

    // Randomly select cloud provider
    const cloudProviders: CloudProvider[] = ['AWS', 'AZURE', 'GCP'];
    const cloud = cloudProviders[getRandomInt(0, 3)];

    for (let i = 0; i < numResources; i++) {
        // Select appropriate resource list based on cloud provider
        let resourceList: string[];
        switch (cloud) {
            case 'AWS':
                resourceList = TERRAFORM_AWS_RESOURCES_LIST;
                break;
            case 'AZURE':
                resourceList = TERRAFORM_AZURE_RESOURCES_LIST;
                break;
            case 'GCP':
                resourceList = TERRAFORM_GCP_RESOURCES_LIST;
                break;
        }

        // Randomly select resource and ID
        const resource = resourceList[getRandomInt(0, resourceList.length)];
        const id = TERRAFORM_IDS_LIST[getRandomInt(0, TERRAFORM_IDS_LIST.length)];

        // Calculate elapsed time
        const elapsedSecs = Math.floor((Date.now() - startTime) / 1000);

        // Randomly select and display a Terraform action message
        const action = getRandomInt(0, 9);
        switch (action) {
            case 0:
                await bold(`${resource}.${id}: Refreshing state... [id=${id}]`);
                break;
            case 1:
                await bold(`${resource}.${id}: Creating...`);
                break;
            case 2:
                await bold(`${resource}.${id}: Creation complete after ${elapsedSecs}s [id=${id}]`);
                counts.added += 1;
                break;
            case 3:
                await bold(`${resource}.${id}: Still creating... [${elapsedSecs}s elapsed]`);
                break;
            case 4:
                await bold(`${resource}.${id}: Modifying... [id=${id}]`);
                break;
            case 5:
                await bold(`${resource}.${id}: Still modifying... [id=${id}, ${elapsedSecs}s elapsed]`);
                break;
            case 6:
                await bold(`${resource}.${id}: Modifications complete after ${elapsedSecs}s [id=${id}]`);
                counts.changed += 1;
                break;
            case 7:
                await bold(`${resource}.${id}: Destroying... [id=${id}]`);
                break;
            case 8:
                await bold(`${resource}.${id}: Destruction complete after ${elapsedSecs}s`);
                counts.destroyed += 1;
                break;
        }

        // Calculate sleep duration using a basic approximation of Fisher-F distribution
        // Note: This is a simplified version compared to the Rust implementation
        const baseSleepTimeMs = 200.0;
        const randomFactor = Math.random() * 2 + 0.5; // Generates values between 0.5 and 2.5
        const sleepDuration = baseSleepTimeMs * randomFactor / speedFactor;
        await sleep(Math.floor(sleepDuration));

        // Check if should exit
        if (config.shouldExit) {
            writeLine(
                `Apply complete! Resources: ${counts.added} added, ${counts.changed} changed, ${counts.destroyed} destroyed.`
            );
            writeLine();
            return;
        }
    }

    // Final message
    writeLine(
        `Apply complete! Resources: ${counts.added} added, ${counts.changed} changed, ${counts.destroyed} destroyed.`
    );
    writeLine();
}
terraform.signature = 'terraform --check';
export default terraform;