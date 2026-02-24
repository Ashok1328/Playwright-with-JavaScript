import { test } from "@playwright/test";
import { RegisterPage } from "../page/RegisterPage";
import { HomePage } from "../page/HomePage";
import { ProductPage } from "../page/ProductPage";
import { CartPage } from "../page/CartPage";
import { PlaceOrderPage } from "../page/PlaceOrderPage";
import { LogoutPage } from "../page/LogoutPage";
import { LoginPage } from "../Page/LoginPage";

import {
  login_Data,
  products_Data,
  register_Data,
  shipping_Data,
} from "../data/TestData";
import { Urls } from "../config/BaseUrl";

test("DemoBlaze", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const placeOrderPage = new PlaceOrderPage(page);
  const logoutPage = new LogoutPage(page);
  const urls = new Urls(page);

  const registerUser = register_Data();
  const loginUser = login_Data().valid;
  const product = products_Data();
  const shipping = shipping_Data();

  //Register
  await urls.openPage();
  await registerPage.register(registerUser);

  //Login
  await loginPage.login(loginUser);

  //Check no of product in home page
  await homePage.verifyProductCount(9);

  // Add multiple products in cart
  await productPage.addMultipleProducts(product);

  // Check how many products are added
  await cartPage.checkProductInCart(product.length);

  //Shipping address
  await placeOrderPage.shippingAddress(shipping);

  // Logout
  await logoutPage.logout();
});
