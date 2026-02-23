import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { login_Data, products_Data } from "../data/TestData";
import { HomePage } from "../page/HomePage";
import { ProductPage } from "../page/ProductPage";

test.describe("Add Product to Cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    const loginPage = new LoginPage(page);
    const data = login_Data().valid;

    await loginPage.login(data);
  });

  test("No of Products in Home Page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyProductCount(9);
  });

  test("Add mutiple products on cart", async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.addMultipleProducts(products_Data());
  });

  test("Add Single Product into cart", async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.addSingleProducts();
  });
});
