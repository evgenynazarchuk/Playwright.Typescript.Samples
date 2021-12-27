import { test, expect } from '@playwright/test';

test('basic test', async ({ context }) => {

  let page = await context.newPage();

  await page.goto('https://playwright.dev/');

  let title = page.locator('//title');
  await expect(title).toHaveText('Fast and reliable end-to-end testing for modern web apps | Playwright')
  
  let logo = page.locator('.navbar__inner .navbar__title');
  await expect(logo).toHaveText('Playwright');
});

test('playwright base test', async ({ context }) => {

  let page = await context.newPage();
  await page.goto('https://playwright.dev/');

  let menu = await page.waitForSelector('//nav');
  let docs = await menu.waitForSelector("//a[text()='Docs']")
  await docs.click();
  
  await page.waitForLoadState('networkidle')

  await expect(page).toHaveTitle('Getting started | Playwright');
  
});