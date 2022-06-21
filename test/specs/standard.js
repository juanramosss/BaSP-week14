import LoginSauce from  '../pageobjects/sauce-demo-login';

describe('standard user', () => {
    beforeAll('open browser', () => {
        browser.url('https://www.saucedemo.com/')
    })
    it('should login with valid credentials', async () => {
        await LoginSauce.login('standard_user', 'secret_sauce');
    });
    it('checking first image loading after login', async() => {
        const imgSrc = await $('#item_4_img_link > img').getAttribute('src');
        await expect(imgSrc).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('checking add to cart button loading', async() => {
        const btn = await $('#add-to-cart-sauce-labs-backpack').getAttribute('id');
        await expect(btn).toBe('add-to-cart-sauce-labs-backpack');
    })


});