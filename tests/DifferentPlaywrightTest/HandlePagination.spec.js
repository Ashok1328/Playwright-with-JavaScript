const { test, expect } = require("@playwright/test");

test("Handle Web tables", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  //total number of rows and column
  const columns = await table.locator("thead tr th");

  console.log("Number of columns: ", await columns.count());

  const rows = await table.locator("tbody tr");

  console.log("Number of rows: ", await rows.count());

  // assertion
  expect(await columns.count()).toBe(4);

  expect(await rows.count()).toBe(5);

  // select checkbox for product 4
  /* const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Smartwatch'
  })
  matchedRow.locator('input').check();   */

  // select mutliple products by reusable function 
  await selectProduct(rows,page,'SmartPhone');
  await selectProduct(rows,page,'Tablet');
  await selectProduct(rows,page,'Wireless Earbuds');  

  // print all products details using loop

  for(let i=0; i<await rows.count(); i++)
  {
    const row = rows.nth(i);
    const tds = row.locator('td')

    for(let j=0; j<await tds.count()-1; j++)
    {
      console.log(await tds.nth(j).textContent())
    }
  }

  await page.waitForTimeout(3000);

});


async function selectProduct(rows,page,name) {
    const matchedRow = rows.filter({
    has: page.locator('td'),
    hasText: name
  })
  await matchedRow.locator('input').check();
}