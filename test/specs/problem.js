import LoginSauce from  '../pageobjects/sauce-demo-login';

describe('Problem user tests', () => {
    beforeAll('open browser', () => {
       browser.url('https://www.saucedemo.com/')
    })
    it('login', async () => {
        await LoginSauce.login('problem_user', 'secret_sauce');
    })
    describe('Images and buttons to be displayed', () => {
        it('verify image1 loads correctly', async () => {
            const img1 = await $('#item_4_img_link > img').getAttribute('src');
            await expect(img1).toBe('/static/media/sl-404.168b1cce.jpg');
        })
        it('button1 loads corerctly', async () => {
            const btn1 = await $('#add-to-cart-sauce-labs-backpack').getAttribute('id');
            await expect(btn1).toBe('add-to-cart-sauce-labs-backpack');
        })
        it('button1 has correct text', async () => {
            const addToCartBtn = await $('#add-to-cart-sauce-labs-backpack');
            await expect(addToCartBtn).toHaveText('ADD TO CART');
        })
    })
    describe('add to cart', () => {
        it('click', async () => {
            const addToCartBtn = await $('#add-to-cart-sauce-labs-backpack');
            await addToCartBtn.click();
        })
        it('add to cart number changes', async () => {
            const cart = await $('#shopping_cart_container > a > span');
            await expect(cart).toHaveText('1');
        } )
    })
});
