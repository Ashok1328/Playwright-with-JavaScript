const { test, expect } = require("@playwright/test");

test("Handle Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#country").selectOption({ value: "china" });

  //number of options in dropdown
  const option = await page.locator("#country option");
  expect(option).toHaveCount(10);

  //check number of option in dropdown
  const options = await page.$$("#country option"); //all the option in array format use $$ sign
  console.log("Number of options: ", options.length);

  //check presence of value in dropdown --Approach 1
  const content = await page.locator("#country").textContent();
  await expect(content.includes("Germany")).toBeTruthy();

  //check presence of value in dropdown --Approach 2
  const optionss = await page.$$("#country option");
  let status = false;
  for (const option of optionss) {
    let value = await option.textContent();
    if(value.includes("France"))
    {
      status = true;
      break;
    }
  }
  expect(status).toBeTruthy();
});
