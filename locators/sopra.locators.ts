import { Page, Locator } from '@playwright/test';

export class SopraLocators {
    readonly cookieAcceptButton: Locator;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;
    readonly mainLogo: Locator;
    readonly footerContent: Locator;

    constructor(private page: Page) {
        // Cookie Banner (Usercentrics - handling shadow DOM via data-testid)
        this.cookieAcceptButton = this.page.locator('button[data-testid="uc-accept-all-button"]');

        // Header Elements
        this.searchIcon = this.page.locator('a[href="/recherche"]');
        this.searchInput = this.page.locator('input.ui-autocomplete-input');
        this.mainLogo = this.page.locator('a.primary-menu__logo');

        // Footer
        this.footerContent = this.page.locator('footer');
    }

    // Navigation
    menuItem(text: string): Locator {
        return this.page.locator(`nav >> text=${text}`);
    }
}
