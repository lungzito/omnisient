class CartPage {
    elements = {
        itemsList: () => cy.get('[id="tbodyid"]'),
        cartItemsList: () => cy.get('[class="success"]'),
        totalCartPrice: () => cy.get('[id="totalp"]'),
        placeOrderButton: () => cy.get('[class="btn btn-success"]'),
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
