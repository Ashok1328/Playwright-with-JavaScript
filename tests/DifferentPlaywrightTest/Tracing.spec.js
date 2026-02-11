import {test, expect} from "@playwright/test"

test("Trace Viewer", async({page})=>
{
  await page.goto("https://demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Rameybhai");
  await page.locator("#loginpassword").fill("ramey12");
  await page.locator("//button[normalize-space()='Log in']").click();
  await expect(page.locator("#logout")).toBeVisible();
})