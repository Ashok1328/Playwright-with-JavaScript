const { expect } = require("@playwright/test");
const { home_Locators } = require("../selector/Locators");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;

    //Locators
    this.product_No = page.locator(home_Locators.product_No);
  }

  async verifyProductCount(expectedCount = 9) {
    await expect(this.product_No).toHaveCount(expectedCount);
  }
};
