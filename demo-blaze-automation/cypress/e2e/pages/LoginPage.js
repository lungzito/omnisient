import TIMEOUT from "../../fixtures/timeouts";

class LoginPage {
    elements = {
        usernameInput: () => cy.get('[id="loginusername"]',{ timeout: TIMEOUT.LONG }),
        passwordInput: () => cy.get('[id="loginpassword"]',{ timeout: TIMEOUT.LONG }),
        loginButton: () => cy.get('[onclick="logIn()"]',{ timeout: TIMEOUT.LONG }),
    }

    enterUsername(username) {
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginButton().click();
    }

}

export default new LoginPage();
