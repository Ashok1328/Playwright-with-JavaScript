import { test, expect } from "@playwright/test";
import { LoginPage } from "../DemoOrangeHRM/LoginPage";
import { AdminPage } from "../DemoOrangeHRM/AdminPage";

test("OrangeHRM", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.Login("Admin", "admin123");

  await page.waitForTimeout(2000);

  //Admin
  const admin = new AdminPage(page);
  await admin.Admin("ESS", "Peter");

  await page.waitForTimeout(3000);
});
