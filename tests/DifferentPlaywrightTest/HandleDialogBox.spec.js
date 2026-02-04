const { test, expect } = require("@playwright/test");

test("Alert Box with OK", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //Enabling alert handling // Dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.locator("#alertBtn").click();
});

test("Confirmation Dialog", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept();
  });

  await page.locator("#confirmBtn").click();
  await expect(page.locator("#demo")).toHaveText("You pressed OK!");
});

test.only("Prompt Alert", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Ram Hari");
  });

  await page.locator("#promptBtn").click();
  await expect(page.locator("#demo")).toHaveText(
    "Hello Ram Hari! How are you today?",
  );
});
