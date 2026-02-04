const { test, expect } = require("@playwright/test");

test("Handling IFrames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const allFrames = await page.frames();
  console.log("Number of frames: ", allFrames.length);

  //appraoch 1 : using name or url
  const frame1 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1.fill("[name='mytext1']", "Hello");

  //appraoch 2 : using frame locator
  const inputBox = await page
    .frameLocator("frame[src='frame_1.html']")
    .locator("[name='mytext1']");
  inputBox.fill("Hello");

  await page.waitForTimeout(3000);
});

/* -------------------------------------------------------------------------*/

test.only("Handling InnerFrames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  const frame3 = await page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  //await frame3.locator("[name='mytext3']").fill("Hello");

  //nested frame
  const childFrames = await frame3.childFrames()
  await childFrames[0].locator("//div[@class='nWQGrd zwllIb']//div[@id='i9']").check();

});
