import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import testData from "../fixtures/testData.json";

describe('Demoblaze Oder Item Automation Test Suite', () => {
  //setup for the test by doing a login
  before('Login to the Demoblaze website', () => {
    cy.visit('/')
    HomePage.verifyHomePageOpen();


  })
  it('Search for an item and add the to the cart', () => {
    HomePage.openLoginWindow();
    LoginPage.enterUsername(testData.username);
    LoginPage.enterPassword(testData.password);
    LoginPage.clickLogin();
    HomePage.verifyUserLoggedIn(testData.username);
    HomePage.verifyHomePageOpen();
    HomePage.selectCategory(testData.category);
    HomePage.selectItem(testData.item);
    ItemPage.verifyItem(testData.item);
    ItemPage.addItemToCart();
    ItemPage.confirmItemAdded();
    HomePage.openCart();
    CartPage.verifySingleCartItem(testData.item, testData.price);
    CartPage.verifyTotalCartAmount(testData.price);
    CartPage.placeOder();
    PlaceOrderPage.verifyTotalOrderAmount(testData.price);
    PlaceOrderPage.enterUserDetails(testData.name, testData.country, testData.city, testData.card, testData.month, testData.year);
    PlaceOrderPage.purchaseOrder();
    PlaceOrderPage.verifyPurchaseSuccessful();

  })
  after(() => {
    cy.clearCookies(); //Clear cookies after test suite
  });
})