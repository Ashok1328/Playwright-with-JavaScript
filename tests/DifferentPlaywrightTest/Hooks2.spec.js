const { test, expect } = require("@playwright/test");

// Login Helper function

async function login(page) {
  await page.goto("https://demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Rameybhai");
  await page.locator("#loginpassword").fill("ramey12");
  await page.locator("//button[normalize-space()='Log in']").click();
}

let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await login(page);
});

test.afterAll(async ()=>
{
  await page.locator("#logout2").click();
})

test("Home Page test", async () => {
  const product = await page.$$(".hrefch");
  expect(product).toHaveLength(9);
});

test("Add product to cart test", async () => {
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });

  await page.locator("//a[normalize-space()='Nexus 6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();
});

test("Place Order", async () => {
  await page.locator("//a[@id='cartur']").click();
  const cartItems = await page.locator("#tbodyid tr");
  const count = await cartItems.count();
  for (let i = 0; i < count; i++) {
    await expect(cartItems.nth(i)).toBeVisible();
  }
  await page.locator("//button[normalize-space()='Place Order']").click();
});

test("Shipping Address", async () => {
  page.once("dialog", (dialog) => {
    expect(dialog.message()).toContain("Thank you for your purchase!");
    dialog.accept();
  });

  await page.locator("#name").fill("Rameybhai");
  await page.locator("#country").fill("China");
  await page.locator("#city").fill("Bejing");
  await page.locator("#card").fill("523594623");
  await page.locator("#month").fill("Feburary");
  await page.locator("#year").fill("2027");
  await page.locator("//button[normalize-space()='Purchase']").click();
});
