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

import { ElementHandle, Page } from '@playwright/test';
import { ClickOptions, DblClickOptions, TypeOptions, FillOptions } from './types'

export class ElementModel {

    readonly element: ElementHandle;

    constructor(element: ElementHandle) {
        this.element = element;
    }

    protected async getPage() {
        let ownerFrame = await this.element.ownerFrame();
        let page = ownerFrame.page()
        return page;
    }

    protected async click(selector?: string, options?: ClickOptions) {
        if(selector == null) {
            await this.element.click(options);
        }
        else {
            let innerElement = await this.element.waitForSelector(selector);
            await innerElement.click(options);
        }
    }

    protected async dblclick(selector?: string, options?: DblClickOptions) {
        if(selector == null) {
            await this.element.dblclick(options);
        }
        else {
            let innerElement = await this.element.waitForSelector(selector);
            await innerElement.dblclick(options);
        }
    }

    protected async type(text: string, selector?: string, options?: TypeOptions) {
        if(selector == null) {
            await this.element.type(text, options);
        }
        else {
            let innerElement = await this.element.waitForSelector(selector);
            await innerElement.type(text, options);
        }
    }

    protected async fill(text: string, selector?: string, options?: FillOptions) {
        if(selector == null) {
            await this.element.fill(text, options);
        }
        else {
            let innerElement = await this.element.waitForSelector(selector);
            await innerElement.fill(text, options);
        }
    }
}