import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import * as fs from 'fs';

setDefaultTimeout(60000);

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll({ timeout: 60000 }, async function () {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
});

Before(async function (scenario) {
    if (scenario.pickle.tags.some(tag => tag.name === '@ui')) {
        context = await browser.newContext({
            recordVideo: {
                dir: 'test-results/videos/'
            }
        });
        page = await context.newPage();
        this.page = page;
    }
});

After(async function (scenario) {
    if (scenario.pickle.tags.some(tag => tag.name === '@ui')) {
        if (scenario.result?.status === Status.FAILED) {
            const image = await this.page.screenshot();
            await this.attach(image, 'image/png');
        }

        const videoPath = await this.page.video()?.path();

        await this.page.close();
        await context.close();

        if (videoPath && fs.existsSync(videoPath)) {
            const videoBuffer = fs.readFileSync(videoPath);
            await this.attach(videoBuffer, 'video/webm');
        }
    }
});

AfterAll(async function () {
    if (browser) {
        await browser.close();
    }
});

export { page };
