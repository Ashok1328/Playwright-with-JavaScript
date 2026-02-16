const { test, expect } = require("@playwright/test");

test("Handle Checkbox", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //single checkbox
  await page.locator("//input[@id='sunday' and @type='checkbox']").check();
  expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked).toBeTruthy();

  //mutliple checkbox
  const checkboxLocators = ["#monday", "#wednesday", "#friday"];

  //for check boxes
  for (const locator of checkboxLocators) {
    await page.locator(locator).check();
  }

  await page.waitForTimeout(3000);

  //for uncheck boxes
  for (const locator of checkboxLocators) {
    if (await page.locator(locator).isChecked()) {
       page.locator(locator).uncheck;
    }
  }
});
