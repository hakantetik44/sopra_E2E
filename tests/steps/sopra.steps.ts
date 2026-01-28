import { createBdd } from 'playwright-bdd';
import { expect, request } from '@playwright/test';
import { SopraPage } from '../../pages/sopra.page';

const { Given, When, Then } = createBdd();

let sopraPage: SopraPage;
let apiResponse: any;

Given("Je navigue sur la page d'accueil de Sopra Steria", async function ({ page }) {
    sopraPage = new SopraPage(page);
    await sopraPage.goToHomePage();
    await sopraPage.acceptCookiesIfVisible();
});

Then('le logo doit être visible', async function () {
    const isVisible = await sopraPage.isLogoVisible();
    expect(isVisible).toBe(true);
});

When('je recherche {string}', async function ({ }, term: string) {
    await sopraPage.performSearch(term);
});

Then('les résultats de recherche doivent être pertinents', async function ({ page }) {
    await sopraPage.waitForSearchResults();
    const url = page.url();
    expect(url).toMatch(/search|recherche/);
});

// API Steps
Given("j'envoie une requête GET à {string}", async function ({ }, url: string) {
    const apiRequestContext = await request.newContext();
    apiResponse = await apiRequestContext.get(url);
});

Then('le statut de la réponse doit être {int}', async function ({ }, status: number) {
    expect(apiResponse.status()).toBe(status);
});

Then('la réponse doit contenir {string}', async function ({ }, key: string) {
    const body = await apiResponse.json();
    expect(body).toHaveProperty(key);
});
