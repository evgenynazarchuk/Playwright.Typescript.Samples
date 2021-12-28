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

import { ElementHandle, expect, Locator, Page } from '@playwright/test';
import { ElementModel } from '../../basic_models/element.model'
import { DocsPage } from '../pages/docs.page';
import { ApiPage } from '../pages/api.page';
import { MainPage } from '../pages/main.page';

export class Menu extends ElementModel {

    constructor(element: ElementHandle) {
        super(element);
    }

    async Api(): Promise<ApiPage> {
        await this.click("//a[text()='API']");
        let page = await this.getPage();
        await page.waitForLoadState('networkidle');

        return new ApiPage(page);
    }

    async Docs(): Promise<DocsPage> {
        await this.click("//a[text()='Docs']");
        let page = await this.getPage();
        await page.waitForLoadState('networkidle');

        return new DocsPage(page);
    }
}