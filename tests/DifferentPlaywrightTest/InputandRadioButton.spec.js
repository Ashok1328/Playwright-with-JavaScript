const { test, expect } = require("@playwright/test");

test("Handle InputBox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Inputbox-name
  await expect(page.locator("#name")).toBeVisible();
  await expect(page.locator("#name")).toBeEmpty();
  await expect(page.locator("#name")).toBeEditable();
  await expect(page.locator("#name")).toBeEnabled();

  await page.locator("#name").fill("Leon");

  //Radio Buttons

  await page.locator("#male").check();
  await expect(page.locator("#male")).toBeChecked();
  await expect(page.locator("#male").isChecked()).toBeTruthy();

  await expect(await page.locator("#female").isChecked()).toBeFalsy();
});
