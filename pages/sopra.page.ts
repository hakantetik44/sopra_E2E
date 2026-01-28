import { Page } from '@playwright/test';
import { BasePage } from '../base/base.page';
import { SopraLocators } from '../locators/sopra.locators';

export class SopraPage extends BasePage {
    private locators: SopraLocators;

    constructor(page: Page) {
        super(page);
        this.locators = new SopraLocators(page);
    }

    async goToHomePage() {
        await this.navigateTo('https://www.soprasteria.fr/');
    }

    async acceptCookiesIfVisible() {
        if (await this.isVisible(this.locators.cookieAcceptButton)) {
            await this.click(this.locators.cookieAcceptButton);
        }
    }

    async performSearch(term: string) {
        // Some sites might need a click on search icon first
        if (await this.isVisible(this.locators.searchIcon)) {
            await this.click(this.locators.searchIcon);
        }
        await this.type(this.locators.searchInput, term);
        await this.page.keyboard.press('Enter');
    }

    async isLogoVisible() {
        return await this.isVisible(this.locators.mainLogo);
    }

    async waitForSearchResults() {
        await this.waitForVisible(this.locators.searchResultsContainer);
    }
}
