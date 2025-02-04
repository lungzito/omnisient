import TIMEOUT from "../../fixtures/timeouts";

class CartPage {
    elements = {
        itemsList: () => cy.get('[id="tbodyid"]',{ timeout: TIMEOUT.LONG }),
        cartItemsList: () => cy.get('[class="success"]',{ timeout: TIMEOUT.LONG }),
        totalCartPrice: () => cy.get('[id="totalp"]',{ timeout: TIMEOUT.LONG }),
        placeOrderButton: () => cy.get('[class="btn btn-success"]',{ timeout: TIMEOUT.LONG }),
    }

    verifySingleCartItem(item, itemCost) {
        this.elements.cartItemsList().eq(0).find('td').eq(1).should('have.text', item);
        this.elements.cartItemsList().eq(0).find('td').eq(2).should('have.text', itemCost);

    }

    verifyTotalCartAmount(cartAmount) {
        this.elements.totalCartPrice().should('have.text', cartAmount);
    }

    placeOder() {
        this.elements.placeOrderButton().click();
    }

}

export default new CartPage();
