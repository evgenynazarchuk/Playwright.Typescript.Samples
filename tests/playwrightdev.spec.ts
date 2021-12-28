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
import { MainPage } from '../models/pages/main.page';

test('given menu then click to docs then title', async ({ context }) => {
    // arrange
    let page = await context.newPage();
    await page.goto('https://playwright.dev/');
    
    let mainPageModel = new MainPage(page);
    let menu = await mainPageModel.Menu();

    // act
    await menu.Docs();
    
    // assert
    await expect(page).toHaveTitle('Getting started | Playwright')
    
});


test('given menu then click to api then title', async ({ context }) => {
    // arrange
    let page = await context.newPage();
    await page.goto('https://playwright.dev/');

    let mainPageModel = new MainPage(page);
    let menu = await mainPageModel.Menu();

    // act
    await menu.Api();

    // assert
    await expect(page).toHaveTitle('Playwright Library | Playwright')
    
});