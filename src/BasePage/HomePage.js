const { home_Locators } = require("../SelectorPage/Locators");
import { expect } from "@playwright/test";

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    
    this.product_No = page.locator(home_Locators.product_No);
  }

  async verifyProductCount(expectedCount = 9) {
    await expect(this.product_No).toHaveCount(expectedCount);
  }
};
