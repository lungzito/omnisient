import TIMEOUT from "../../fixtures/timeouts";

class LoginPage {
    elements = {
        usernameInput: '[id="loginusername"]',
        passwordInput: '[id="loginpassword"]',
        loginButton: '[onclick="logIn()"]',
    }

    enterUsername(username) {
        cy.get(this.elements.usernameInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(username);
    }

    enterPassword(password) {
        cy.get(this.elements.passwordInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(password);

    }

    clickLogin() {
        cy.get(this.elements.loginButton).should('be.visible', { timeout: TIMEOUT.LONG }).click();
    }

}

export default new LoginPage();
