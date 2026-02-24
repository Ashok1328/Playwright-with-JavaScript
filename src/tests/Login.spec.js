import { test } from "@playwright/test";
import { LoginPage } from "../Page/LoginPage";
import { login_Data } from "../data/TestData";
import { Urls } from "../config/BaseUrl";

test.describe("User Login", () => {
  test.beforeEach(async ({ page }) => {
    const urls = new Urls(page);
    await urls.openPage();
  });

  test("should navigate to home page on success", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = login_Data().valid;

    await loginPage.login(data);
  });

  test("alert message should appear for invalid username", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = login_Data().invalidUsername;

    await loginPage.login(data);

    page.on("dailog", async (dialog) => {
      expect(dialog.message()).toContain("User does not exist.");
      await dialog.accept();
    });
  });

  test("alert message should appear for invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = login_Data().invalidPassword;

    await loginPage.login(data);

    page.on("dailog", async (dialog) => {
      expect(dialog.message()).toContain("User does not exist.");
      await dialog.accept();
    });
  });

  test("alert message should appear for invalid username/password", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const data = login_Data().invalidBoth;

    await loginPage.login(data);

    page.on("dailog", async (dialog) => {
      expect(dialog.message()).toContain(
        "Please fill out Username and Password.",
      );
      await dialog.accept();
    });
  });

  test("alert message should appear for empty fields", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const data = login_Data().emptyFileds;

    await loginPage.login(data);

    page.on("dailog", async (dialog) => {
      expect(dialog.message()).toContain("User does not exist.");
      await dialog.accept();
    });
  });
});
