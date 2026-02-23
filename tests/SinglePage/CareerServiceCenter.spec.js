import { test, expect } from "@playwright/test";

test("Register", async ({ page }) => {
  await page.goto("https://recruiter.stage.careerservicelab.com/register");

  await page.locator("#search").fill("ashok12");

  await page.locator("//button[text()='Search']").click();

  await page
    .locator("//button[normalize-space()='Register as Recruiter']")
    .click();

  await page.locator("#email").fill("ashok12@gmai.com");

  await page.locator("#phone_no").fill("9874623658");

  await page.locator("#address").fill("Kathmandu");

  await page.click("(//input[@role='combobox'])[1]");

  await page.click("//div[normalize-space()='Nepal']");

  await page.click("(//input[@role='combobox'])[2]");

  await page.click("//div[normalize-space()='Bagmati Province']");

  await page.click("(//input[@role='combobox'])[3]");

  await page.click("//div[normalize-space()='Kathmandu Maha Municipality']");

  await page.click("(//input[@role='combobox'])[4]");

  await page.click("//div[normalize-space()='IT']");

  await page.locator("#description").fill("Registering myself as a recruiter");

  await page.locator("//input[@id='admins.0.full_name']").fill("AdminAsh");

  await page
    .locator("//input[@id='admins.0.email']")
    .fill("Adminash28@gmail.com");

  await page.locator("//input[@id='admins.0.phone_no']").fill("9874562325");

  await page.locator("//input[@id='admins.0.designation']").fill("Admin");

  await page.locator("//button[@type='submit']").click();
});
