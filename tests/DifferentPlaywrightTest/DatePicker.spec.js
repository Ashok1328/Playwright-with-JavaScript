const { test, expect } = require("@playwright/test");

test("Handle Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //await page.locator("#datepicker").fill("02/03/2026");

  //date picker

  const year = "2022";
  const month = "December";
  const date = "28";

  const MONTHS = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  await page.click("#datepicker");

  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (currentYear == year && currentMonth == month) {
      break;
    }

    const isPast =
      Number(year) < Number(currentYear) ||
      (currentYear === year &&
        MONTHS[month.toLowerCase()] < MONTHS[currentMonth.toLowerCase()]);

    if (isPast) {
      await page.locator(".ui-datepicker-prev").click();
    } else {
      await page.locator(".ui-datepicker-next").click();
    }
  }

  // date selection using loop
   const dates = await page.$$("//a[@class='ui-state-default']");
  for (const dt of dates) {
    if ((await dt.textContent()) == date) {
      await dt.click();
      break;
    }
  }

  // without loop

  await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

  await page.waitForTimeout(3000);
});

/*---------------------------------------------------------------------------------------------------*/

