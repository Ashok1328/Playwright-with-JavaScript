import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { login_Data } from "../data/TestData";
import { LogoutPage } from "../page/LogoutPage";
import { Urls } from "../config/BaseUrl";

test.describe("User Logout", () => {
  test.beforeEach(async ({ page }) => {
    const urls = new Urls(page);
    await urls.openPage();

    const loginPage = new LoginPage(page);
    const data = login_Data().valid;

    await loginPage.login(data);
  });

  test("Logout", async ({ page }) => {
    const logoutPage = new LogoutPage(page);
    await logoutPage.logout();
  });
});
