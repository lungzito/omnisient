import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";

describe('Demoblaze Oder Item Automation Test Suite', () => {
  //setup for the test by doing a login
  before('Login to the Demoblaze website', () => {
    cy.visit('/')
    HomePage.verifyHomePageOpen();
    HomePage.openLoginWindow();
    LoginPage.enterUsername('test');
    LoginPage.enterPassword('test');
    LoginPage.clickLogin();
    HomePage.verifyUserLoggedIn('test');

  })
  it('Search for an item and add the to the cart', () => {
    HomePage.verifyHomePageOpen();
    HomePage.selectCategory('Laptops');
    HomePage.selectItem('MacBook Pro');
    ItemPage.verifyItem('MacBook Pro');
    ItemPage.addItemToCart();
    ItemPage.confirmItemAdded();
    HomePage.openCart();
    CartPage.verifySingleCartItem('MacBook Pro', '1100');
    CartPage.verifyTotalCartAmount('1100');
    CartPage.placeOder();
    PlaceOrderPage.verifyTotalOrderAmount('1100');
    PlaceOrderPage.enterUserDetails('test', 'RSA', 'Durban', '000000000000000', 'February', '2025');
    PlaceOrderPage.purchaseOrder();
    PlaceOrderPage.verifyPurchaseSuccessful();

  })
  after(() => {
    cy.clearCookies(); //Clear cookies after test suite
  });
})