import { test, expect } from '@playwright/test';
import { MainPage } from '../models/pages/main.page';

test('docs menu title', async ({ context }) => {
    
    let page = await context.newPage();
    await page.goto('https://playwright.dev/');

    let mainPageModel = new MainPage(page);
    let menu = await mainPageModel.Menu();
    let docs = await menu.Docs();
    
    await expect(docs.page).toHaveTitle('Getting started | Playwright')
    
});


test('api menu title', async ({ context }) => {
    
    let page = await context.newPage();
    await page.goto('https://playwright.dev/');

    let mainPageModel = new MainPage(page);
    let menu = await mainPageModel.Menu();
    let api = await menu.Api();

    await expect(api.page).toHaveTitle('Playwright Library | Playwright')
    
});