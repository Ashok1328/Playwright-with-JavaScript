const { test, expect } = require("@playwright/test");

test("Single Files", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .locator("#singleFileInput")
    .setInputFiles("tests/uplaodFiles/examRoutine.pdf");

  await page
    .locator("#multipleFilesInput")
    .setInputFiles([
      "tests/uplaodFiles/examRoutine.pdf",
      "tests/uplaodFiles/QA Resume.pdf",
    ]);
  await page.waitForTimeout(5000);
});
