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
        await this.Click("//a[text()='API']");
        let page = await this.GetPage();
        await page.waitForLoadState('networkidle');

        return new ApiPage(page);
    }

    async Docs() {
        await this.Click("//a[text()='Docs']");
        let page = await this.GetPage();
        await page.waitForLoadState('networkidle');

        return new ApiPage(page);
    }
}