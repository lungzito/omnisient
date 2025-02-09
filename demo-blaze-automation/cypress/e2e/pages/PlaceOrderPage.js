import TIMEOUT from "../../fixtures/timeouts";

class PlaceOrderPage {
    elements = {
        totalOrderLabel: '[id="totalm"]',
        nameInput: '[id="name"]',
        countryInput: '[id="country"]',
        cityInput: '[id="city"]',
        creditCardInput: '[id="card"]',
        monthInput: '[id="month"]',
        yearInput: '[id="year"]',
        purchaseButton: '[onclick="purchaseOrder()"]',
        successDialogue: '[class="sa-icon sa-success animate"]',
    }

    verifyTotalOrderAmount(orderAmount) {
        cy.get(this.elements.totalOrderLabel).should('have.text', 'Total: ' + orderAmount, { timeout: TIMEOUT.LONG });

    }

    enterUserDetails(name, country, city, creditCard, month, year) {
        cy.get(this.elements.nameInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(name);
        cy.get(this.elements.countryInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(country);
        cy.get(this.elements.cityInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(city);
        cy.get(this.elements.creditCardInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(creditCard);
        cy.get(this.elements.monthInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(month);
        cy.get(this.elements.yearInput).should('be.visible', { timeout: TIMEOUT.LONG }).type(year);

    }

    purchaseOrder() {
        cy.get(this.elements.purchaseButton).should('be.visible', { timeout: TIMEOUT.LONG }).click();
    }
    verifyPurchaseSuccessful() {
        cy.get(this.elements.successDialogue).should('be.visible', { timeout: TIMEOUT.LONG });

    }

}

export default new PlaceOrderPage();
