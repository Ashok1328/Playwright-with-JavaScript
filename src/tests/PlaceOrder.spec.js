import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { login_Data, products_Data, shipping_Data } from "../data/TestData";
import { ProductPage } from "../page/ProductPage";
import { PlaceOrderPage } from "../page/PlaceOrderPage";
import { Urls } from "../config/BaseUrl";

test.describe("Shipping Address", () => {
  test.beforeEach(async ({ page }) => {
    const urls = new Urls(page);
    await urls.openPage();

    const loginPage = new LoginPage(page);
    const data = login_Data().valid;

    await loginPage.login(data);
  });

  test("Place Order", async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.addMultipleProducts(products_Data());

    const placeOrder = new PlaceOrderPage(page);
    await placeOrder.shippingAddress(shipping_Data());
  });
});
