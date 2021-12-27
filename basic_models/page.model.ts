import { expect, Locator, Page } from '@playwright/test';

export class PageModel {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Click() {
        
    }
}