import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { login_Data } from "../data/TestData";
import { CartPage } from "../page/CartPage";

test.describe("Cart Validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    const loginPage = new LoginPage(page);
    const data = login_Data().valid;

    await loginPage.login(data);
  });

  test("No of products in cart page", async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.checkProductInCart();
  });
});
