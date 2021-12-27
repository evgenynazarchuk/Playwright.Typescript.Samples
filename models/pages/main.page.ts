import { Page } from '@playwright/test';
import { PageModel } from '../../basic_models/page.model'
import { Menu } from '../blocks/menu'

export class MainPage extends PageModel {

    constructor(page: Page) {
        super(page);
    }

    async Menu(): Promise<Menu> {
        let element = await this.page.waitForSelector('//nav')
        return new Menu(element);
    }

}