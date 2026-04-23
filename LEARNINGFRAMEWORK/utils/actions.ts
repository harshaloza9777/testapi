import { Page } from '@playwright/test';

export class Actions {
    constructor(private page: Page) {}

    async click(selector: string) {
        await this.page.locator(selector).click();
    }

    async sendKeys(selector: string, text: string) {
        await this.page.locator(selector).fill(text);
    }

    async selectDropdown(selector: string, value: string) {
        await this.page.locator(selector).selectOption(value);
    }


    
}
