const { test, expect } = require("@playwright/test");

test("Mouse Hover", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const Point = page.locator("//button[text()='Point Me']");
  const mobile = page.locator("//a[text()='Mobiles']");

  // mouse hover
  await Point.hover();
  await mobile.hover();

  // mouse right click
  await button.click({ button: "right" });

  // mouse double click

  const btnCpy = page.locator("//button[text()='Copy Text']");
  await btnCpy.dblclick();

  await expect(page.locator("#field2")).toHaveValue("Hello World!");

  // Mouse drag and drop

  const drag = page.locator("#draggable");
  const drop = page.locator("#droppable");

  await drag.dragTo(drop);

  await page.waitForTimeout(5000);
});
