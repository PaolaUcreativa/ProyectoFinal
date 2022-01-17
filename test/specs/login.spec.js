import LoginPage from  '../pageobjects/login.page';


describe('Cart Page', () => {
    beforeAll(async function(){
        await LoginPage.open();
        await LoginPage.login('','');
    
    });

    it('Display Cart', async () => {
        await CartPage.goToCartPage();
        await expect(browser).toHaveUrl('http://automationpractice.com/index.php');
       });
});