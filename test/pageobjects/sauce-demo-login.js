import Page from './page';


class loginsauce extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button')
    }

    get errorContainer() {
        return $('.error-message-container.error')
    }

    get botIng() {
        return $('.bot_column')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('');
    }

}

export default new loginsauce();

