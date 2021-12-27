import { ElementHandle } from '@playwright/test';

export class ElementModel {

    readonly element: ElementHandle;

    constructor(element: ElementHandle) {
        this.element = element;
    }

    async Click(selector: string) {
        let innerElement = await this.element.waitForSelector(selector);
        await innerElement.click();
    }

    async GetPage() {
        let ownerFrame = await this.element.ownerFrame();
        let page = ownerFrame.page()
        return page;
    }
}