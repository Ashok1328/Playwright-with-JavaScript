const { test, expect } = require("@playwright/test");

test("Pagination", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("//a[normalize-space()='2']").click();

  const table = page.locator("#productTable");
  const rows = table.locator("tbody tr");

  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Television",
  });
  await matchedRow.locator("input").check();
});
