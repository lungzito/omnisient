import TIMEOUT from "../../fixtures/timeouts";

class LoginPage {
    elements = {
        usernameInput: () => cy.get('[id="loginusername"]',{ timeout: TIMEOUT.LONG }),
        passwordInput: () => cy.get('[id="loginpassword"]',{ timeout: TIMEOUT.LONG }),
        loginButton: () => cy.get('[onclick="logIn()"]',{ timeout: TIMEOUT.LONG }),
    }

    enterUsername(username) {
        this.elements.usernameInput().should('be.visible').type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().should('be.visible').type(password);
    }

    clickLogin() {
        this.elements.loginButton().should('be.visible').click();
    }

}

export default new LoginPage();
