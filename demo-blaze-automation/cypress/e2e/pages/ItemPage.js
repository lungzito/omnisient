import TIMEOUT from "../../fixtures/timeouts";

class ItemPage {
    elements = {
        itemNameLabel: '[class="name"]',
        addToCartButton: '[class="btn btn-success btn-lg"]',

    }

    verifyItem(item) {

        cy.get(this.elements.itemNameLabel).should('have.text', item, { timeout: TIMEOUT.LONG });
    }

    addItemToCart() {

        cy.get(this.elements.addToCartButton).should('be.visible', { timeout: TIMEOUT.LONG }).click();
    }

    //checks that the windows popup dialog has the correct message and then clicks the OK button on the dialog.
    confirmItemAdded() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added.');
        });

    }

}

export default new ItemPage();