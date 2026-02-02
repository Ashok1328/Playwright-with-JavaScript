import { test, expect } from "@playwright/test";
import { LoginPage } from "../DemoOrangeHRM/LoginPage";
import { AdminPage } from "../DemoOrangeHRM/AdminPage";

test("OrangeHRM", async ({ page }) => {
  //Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("Admin", "admin123");

  //Admin
  const admin = new AdminPage(page);
  await admin.admin("ESS", "Peter");
});
