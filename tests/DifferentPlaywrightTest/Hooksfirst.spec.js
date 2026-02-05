const { test, expect } = require("@playwright/test");

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Rameybhai");
  await page.locator("#loginpassword").fill("ramey12");
  await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterEach(async () => {
  page.locator("#logout2");
});

test("Home Page test", async () => {
  const product = await page.$$(".hrefch");
  expect(product).toHaveLength(9);
});

test("Add product to cart test", async () => {
  await page.locator("//a[normalize-space()='Nexus 6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });
});
