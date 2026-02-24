import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { login_Data, single_Product_Data } from "../data/TestData";
import { CartPage } from "../page/CartPage";
import { ProductPage } from "../page/ProductPage";
import { Urls } from "../config/BaseUrl";

test.describe("Cart Validation", () => {
  test.beforeEach(async ({ page }) => {
    const urls = new Urls(page);
    await urls.openPage();

    const loginPage = new LoginPage(page);
    const data = login_Data().valid;

    await loginPage.login(data);
  });

  test("No of products in cart page", async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.checkProductInCart();
  });

  test("Delete product", async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const productData = single_Product_Data();

    await productPage.addSingleProducts(productData);

    await cartPage.deleteProductFromCart(productData.product);
  });
});
