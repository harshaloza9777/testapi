import { test } from '../tests/setup';
import { Actions } from '../utils/actions';
import { Loginlocators } from '../locators/Loginlocatore';
import  { Macbook } from '../locators/MacBook';



let actions: Actions;

test.beforeEach(async ({ page }) => {
    actions = new Actions(page);
});

test('click Test', async ({ page }) => {
    await actions.click(Loginlocators.MyAccount);
    await actions.click(Loginlocators.clicklogin);
    await actions.sendKeys(Loginlocators.email,'harshal@yupmail.com');  
    await actions.sendKeys(Loginlocators.password,'harshal@123');
    await actions.sendKeys(Macbook.SearchLocators,'Macbook');
    await actions.click(Macbook.Searchbutton);
    await actions.click(Macbook.Clickonmacbook);
    

    
});