const { test, expect } = require("@playwright/test");

test.beforeAll(async () => {
  console.log("this is beforeAll hooks.....");
});

test.afterAll(async () => {
  console.log("this is afterAll hooks....");
});

test.beforeEach(async () => {
  console.log("this is beforeEach hooks....");
});

test.afterEach(async () => {
  console.log("this is afterEach hook ....");
});

test.describe("Group1", () => {
  test("Test1", async ({ page }) => {
    console.log("This is test 1");
  });

  test("Test2", async ({ page }) => {
    console.log("This is test 2");
  });
});

test.describe("Group2", () => {
  test("Test3", async ({ page }) => {
    console.log("This is test 3");
  });

  test("Test4", async ({ page }) => {
    console.log("This is test 4");
  });

  test("Test5", async ({ page }) => {
    console.log("This is test 5");
  });
});
