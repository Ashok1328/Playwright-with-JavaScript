const { test, expect } = require("@playwright/test");

test("Home Page test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  // Login
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Rameybhai");
  await page.locator("#loginpassword").fill("ramey12");
  await page.locator("//button[normalize-space()='Log in']").click();

  // Home page
  const product = await page.$$(".hrefch");
  expect(product).toHaveLength(9);

  //Logout
  page.locator("#logout2");
});

test("Add product to cart test", async ({ page }) => {
  await page.goto("https://demoblaze.com/");

  //Login
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Rameybhai");
  await page.locator("#loginpassword").fill("ramey12");
  await page.locator("//button[normalize-space()='Log in']").click();

  // Product to cart
  await page.locator("//a[normalize-space()='Nexus 6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });

  // Logout
  page.locator("#logout2");
});
