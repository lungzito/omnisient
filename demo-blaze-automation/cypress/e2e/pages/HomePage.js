import TIMEOUT from "../../fixtures/timeouts";

class HomePage {

    elements = {
        homeLogo: '[id="nava"]',
        loginLink: '[id="login2"]',
        nameOfUserLabel: '[id="nameofuser"]',
        categoriesList: '[id="itemc"]',
        itemsList: '[class="card-title"]',
        cartLink: '[id="cartur"]',

    }

    verifyHomePageOpen() {
        cy.get(this.elements.homeLogo).should('be.visible',{ timeout: TIMEOUT.LONG });
    }

    openLoginWindow() {
        cy.get(this.elements.loginLink).should('be.visible',{ timeout: TIMEOUT.LONG }).click();
    }

    verifyUserLoggedIn(username) {
        cy.get(this.elements.nameOfUserLabel).should('have.text', 'Welcome ' + username,{ timeout: TIMEOUT.LONG });
    }

    selectCategory(category) {
        cy.get(this.elements.categoriesList).should('be.visible',{ timeout: TIMEOUT.LONG }).contains(category).click();
    }
    selectItem(item) {
        cy.get(this.elements.itemsList).should('be.visible',{ timeout: TIMEOUT.LONG }).contains(item).click();
    }
    openCart() {
        cy.get(this.elements.cartLink).should('be.visible',{ timeout: TIMEOUT.LONG }).click();
    }
}

export default new HomePage();