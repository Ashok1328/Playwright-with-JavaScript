const { test, expect } = require("@playwright/test");

test("Pagination", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("//a[normalize-space()='2']").click();

  const table = page.locator("#productTable");
  const rows = table.locator("tbody tr");

  // multiple product select
  await selectProduct(rows, page, "Television");
  await selectProduct(rows, page, "Gaming Console");

  await page.close();

});

async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await matchedRow.locator("input").check();
}

