import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto('https://tutorialsninja.com/demo/');
    await use(page);
    await page.close();
  },
});
