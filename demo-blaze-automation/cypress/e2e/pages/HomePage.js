class HomePage {

    elements = {
        homeLogo: () => cy.get('[id="nava"]'),
        loginLink: () => cy.get('[id="login2"]'),
        nameOfUserLabel: () => cy.get('[id="nameofuser"]'),
        categoriesList: () => cy.get('[id="itemc"]'),
        itemsList: () => cy.get('[class="card-title"]'),
        cartLink: () => cy.get('[id="cartur"]'),

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