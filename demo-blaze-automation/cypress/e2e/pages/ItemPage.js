import TIMEOUT from "../../fixtures/timeouts";

class ItemPage {
    elements = {
        itemNameLabel: () => cy.get('[class="name"]',{ timeout: TIMEOUT.LONG }),
        addToCartButton: () => cy.get('[class="btn btn-success btn-lg"]',{ timeout: TIMEOUT.LONG }),

    }

    verifyItem(item) {
        this.elements.itemNameLabel().should('have.text', item);
    }

    addItemToCart() {
        this.elements.addToCartButton().click();
    }

    //checks that the windows popup dialog has the correct message and then clicks the OK button on the dialog.
    confirmItemAdded() {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added.');
        });

    }

}

export default new ItemPage();