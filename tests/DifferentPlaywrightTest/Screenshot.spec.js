import { test, expect } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.screenshot({
    path: "tests/Screenshot/" + Date.now() + "HomePage.png",
  });
});

test("Fullpage Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.screenshot({
    path: "tests/Screenshot/" + Date.now() + "FullPage.png",
    fullPage: true,
  });
});

test("Element Screenshot", async ({ page }) => {
  await page.goto("https://demoblaze.com/");
  await page.locator("//*[@id='tbodyid']/div[1]").screenshot({
    path: "tests/Screenshot/" + Date.now() + "Samsung galaxy s6.png",
  });
});
