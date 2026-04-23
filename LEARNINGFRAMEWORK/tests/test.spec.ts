import { test } from '../tests/setup';
import { Actions } from '../utils/actions';
import { SearchLocators } from '../locators/searchLocators';


let actions: Actions;

test.beforeEach(async ({ page }) => {
    actions = new Actions(page);
});

test('search Test', async ({ page }) => {
    await actions.sendKeys(SearchLocators.searchTextbox, 'iPhone 16');
    await actions.click(SearchLocators.searchButton);
    
});

