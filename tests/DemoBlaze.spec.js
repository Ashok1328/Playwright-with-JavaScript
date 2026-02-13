import { test } from "@playwright/test";
import { RegisterPage } from "../src/BasePage/RegisterPage";
import { register_Data } from "../src/DataPage/RegisterData";
import { login_Data } from "../src/DataPage/LoginData";
import { HomePage } from "../src/BasePage/HomePage";
import { CartPage } from "../src/BasePage/CartPage";
import { ProductPage } from "../src/BasePage/ProductPage";
import { PlaceOrderPage } from "../src/BasePage/PlaceOrderPage";
import { LogoutPage } from "../src/BasePage/LogoutPage";
import { products_Data } from "../src/DataPage/ProductData";
import { shipping_Data } from "../src/DataPage/ShippingData";
import { LoginPage } from "../src/BasePage/LoginPage";

test("DemoBlaze", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const placeOrderPage = new PlaceOrderPage(page);
  const logoutPage = new LogoutPage(page);

  const registerUser = register_Data();
  const loginUser = login_Data();
  const product = products_Data();
  const shipping = shipping_Data();

  //Register
  await registerPage.open();
  await registerPage.register(registerUser);

  //Login
  await loginPage.login(loginUser);

  //Check no of product in home page
  await homePage.verifyProductCount(9);

  // Add multiple products in cart
  await productPage.addProducts(product);

  // Check how many products are added
  await cartPage.checkProductInCart();

  //Shipping address
  await placeOrderPage.shippingAddress(shipping);

  // Logout
  await logoutPage.logout();
});
