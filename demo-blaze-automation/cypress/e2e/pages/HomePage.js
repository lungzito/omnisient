import TIMEOUT from "../../fixtures/timeouts";

class HomePage {

    elements = {
        homeLogo: () => cy.get('[id="nava"]',{ timeout: TIMEOUT.LONG }),
        loginLink: () => cy.get('[id="login2"]',{ timeout: TIMEOUT.LONG }),
        nameOfUserLabel: () => cy.get('[id="nameofuser"]',{ timeout: TIMEOUT.LONG }),
        categoriesList: () => cy.get('[id="itemc"]',{ timeout: TIMEOUT.LONG }),
        itemsList: () => cy.get('[class="card-title"]',{ timeout: TIMEOUT.LONG }),
        cartLink: () => cy.get('[id="cartur"]',{ timeout: TIMEOUT.LONG }),

    }

    verifyHomePageOpen() {
        this.elements.homeLogo().should('be.visible');
    }

    openLoginWindow() {
        this.elements.loginLink().click();
    }

    verifyUserLoggedIn(username) {
        this.elements.nameOfUserLabel().should('have.text', 'Welcome ' + username);
    }

    selectCategory(category) {
        this.elements.categoriesList().contains(category).click();
    }
    selectItem(item) {
        this.elements.itemsList().contains(item).click();
    }
    openCart() {
        this.elements.cartLink().click();
    }
}

export default new HomePage();