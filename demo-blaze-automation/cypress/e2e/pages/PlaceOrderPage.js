class PlaceOrderPage {
    elements = {
        totalOrderLabel: () => cy.get('[id="totalm"]'),
        nameInput: () => cy.get('[id="name"]'),
        countryInput: () => cy.get('[id="country"]'),
        cityInput: () => cy.get('[id="city"]'),
        creditCardInput: () => cy.get('[id="card"]'),
        monthInput: () => cy.get('[id="month"]'),
        yearInput: () => cy.get('[id="year"]'),
        purchaseButton: () => cy.get('[onclick="purchaseOrder()"]'),
        successDialogue: () => cy.get('[class="sa-icon sa-success animate"]'),
    }

    verifyTotalOrderAmount(orderAmount) {
        this.elements.totalOrderLabel().should('have.text', 'Total: ' + orderAmount);

    }

    enterUserDetails(name, country, city, creditCard, month, year) {
        this.elements.nameInput().type(name);
        this.elements.countryInput().type(country);
        this.elements.cityInput().type(city);
        this.elements.creditCardInput().type(creditCard);
        this.elements.monthInput().type(month);
        this.elements.yearInput().type(year);

    }

    purchaseOrder() {
        this.elements.purchaseButton().click();
    }
    verifyPurchaseSuccessful() {
        this.elements.successDialogue().should('be.visible')

    }

}

export default new PlaceOrderPage();
