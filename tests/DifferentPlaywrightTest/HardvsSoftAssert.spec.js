const { test, expect } = require("@playwright/test");

test("Soft Assertion", async ({ page }) => {
  await page.goto("https://demoblaze.com");

  //Hard assertion
  await expect(page).toHaveTitle("STORE123");
  await expect(page).toHaveURL("https://demoblaze.com");
  await expect(page.locator(".navbar-brand")).toBeVisible();

  //Soft assertion
  await expect.soft(page).toHaveTitle("STORE123");
  await expect(page).toHaveURL("https://demoblaze.com");
  await expect(page.locator(".navbar-brand")).toBeVisible();
});
