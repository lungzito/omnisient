import TIMEOUT from "../../fixtures/timeouts";

class CartPage {
    elements = {
        itemsList: '[id="tbodyid"]',
        cartItemsList: '[class="success"]',
        totalCartPrice: '[id="totalp"]',
        placeOrderButton: '[class="btn btn-success"]',
    }

    verifySingleCartItem(item, itemCost) {
        //verifies the text from a table using the index
        cy.get(this.elements.cartItemsList).eq(0).find('td').eq(1).should('have.text', item, { timeout: TIMEOUT.LONG });
        cy.get(this.elements.cartItemsList).eq(0).find('td').eq(2).should('have.text', itemCost, { timeout: TIMEOUT.LONG });
    }

    verifyTotalCartAmount(cartAmount) {
        cy.get(this.elements.totalCartPrice).should('have.text', cartAmount, { timeout: TIMEOUT.LONG });
    }

    placeOder() {

        cy.get(this.elements.placeOrderButton).should('be.visible', { timeout: TIMEOUT.LONG }).click();
    }

}

export default new CartPage();
