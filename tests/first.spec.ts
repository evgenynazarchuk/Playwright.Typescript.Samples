/*
 * MIT License
 *
 * Copyright (c) Evgeny Nazarchuk.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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

  // arrange
  let page = await context.newPage();
  await page.goto('https://playwright.dev/');

  // act
  let menu = await page.waitForSelector('//nav');
  let docs = await menu.waitForSelector("//a[text()='Docs']")
  await docs.click();
  
  await page.waitForLoadState('networkidle')

  // assert
  await expect(page).toHaveTitle('Getting started | Playwright');
  
});