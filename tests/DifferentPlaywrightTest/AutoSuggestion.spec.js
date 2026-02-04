const { test, expect } = require("@playwright/test");

test("Auto Suggestion Box", async ({ page }) => {
  await page.goto("https://www.ebay.com/");

  await page
    .locator("//input[@placeholder='Search for anything']")
    .pressSequentially("mac", { delay: 100 });
  await page.waitForSelector("#ebay-autocomplete li", { state: "visible" });

  const deviceOption = await page.$$("#ebay-autocomplete li");
  for (let option of deviceOption) {
    const value = await option.textContent();
    if (value === "macbook pro") {
      await option.click();
      break;
    }
  }
});
