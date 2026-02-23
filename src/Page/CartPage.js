const { expect } = require("@playwright/test");
const { cart_Locators } = require("../selector/Locators");

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;

    this.cart_Btn = page.locator(cart_Locators.cart_Btn);
    this.checkcartItems = page.locator(cart_Locators.checkcart_Items);
    this.placeorder_Btn = page.locator(cart_Locators.placeorder_Btn);
  }

  async checkProductInCart() {
    await expect(this.cart_Btn).toBeEnabled();
    await this.cart_Btn.click();

    const count = await this.checkcartItems.count();
    for (let i = 0; i < count; i++) {
      await expect(this.checkcartItems.nth(i)).toBeVisible();
    }

    await expect(this.placeorder_Btn).toBeEnabled();
    await this.placeorder_Btn.click();
  }
};
