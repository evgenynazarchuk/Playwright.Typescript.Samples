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

import { Page } from '@playwright/test';
import { ClickOptions, DblClickOptions, TypeOptions, FillOptions } from './types'

export class PageModel {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    protected async click(selector: string, options?: ClickOptions) {
        await this.page.click(selector, options);
    }

    protected async dblclick(selector: string, options?: DblClickOptions) {
        await this.page.dblclick(selector, options);
    }

    protected async type(selector: string, text: string, options?: TypeOptions) {
        await this.page.type(selector, text, options);
    }

    protected async fill(selector: string, text: string, options?: FillOptions) {
        await this.page.fill(selector, text, options);
    }
}