import LoginSauce from  '../pageobjects/sauce-demo-login';

describe('Performance glitch user tests', () => {
    beforeAll('open browser', () => {
       browser.url('https://www.saucedemo.com/')
    })
    it('login', async () => {
        await LoginSauce.login('performance_glitch_user', 'secret_sauce');
    });
    describe('Images and buttons to be displayed', () => {
        it('verify image1 loads correctly', async () => {
            const img1 = await $('#item_4_img_link > img').getAttribute('src');
            await expect(img1).toBe('/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
        });
        it('button1 loads corerctly', async () => {
            const btn1 = await $('#add-to-cart-sauce-labs-backpack').getAttribute('id');
            await expect(btn1).toBe('add-to-cart-sauce-labs-backpack');
        });
        it('social media', async () => {
            const twitter = await $('#page_wrapper > footer > ul > li.social_twitter > a').getAttribute('href');
            await expect(twitter).toBe('https://twitter.com/saucelabs');
        });

    });
});