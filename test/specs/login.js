import LoginSauce from  '../pageobjects/sauce-demo-login';

describe('Login Page Testing', () => {
    beforeAll('open browser', () => {
       browser.url('https://www.saucedemo.com/')
    })
    describe('Fail login test', () => {
        it('empty username should display error', async () => { 
            await LoginSauce.login('', 'secret_sauce');
            await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Username is required');
        })
        it('invalid username should display error', async () => {
            await LoginSauce.login('invalid', 'secret_sauce');
            await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        })
        it('wrong password should display error', async () => {
            await LoginSauce.login('standard_user', 'wrong');
            await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
        })
    })
    describe('Elements to be displayed', () => {
        it('verify botIng to be displayed', async() => {
            await expect(LoginSauce.botIng).toBeDisplayed();
        })
    })
    it('should display error when trying to login with locked out user', async () => {
        await LoginSauce.login('locked_out_user', 'secret_sauce');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.')
    })
});

