const { expect } = require("@playwright/test");
const { shipping_Locators, cart_Locators } = require("../selector/Locators");

exports.PlaceOrderPage = class PlaceOrderPage {
  constructor(page) {
    this.page = page;

    this.user_Input = page.locator(shipping_Locators.user_Input);
    this.country_Input = page.locator(shipping_Locators.country_Input);
    this.city_Input = page.locator(shipping_Locators.city_Input);
    this.creditcard_Input = page.locator(shipping_Locators.creditcard_Input);
    this.month_Input = page.locator(shipping_Locators.month_Input);
    this.year_Input = page.locator(shipping_Locators.year_Input);
    this.purchase_Btn = page.locator(shipping_Locators.purchase_Btn);
    this.success_Message = page.locator(shipping_Locators.success_Message);
    this.ok_Btn = page.locator(shipping_Locators.ok_Btn);
    this.cart_Btn = page.locator(cart_Locators.cart_Btn);
    this.placeorder_Btn = page.locator(cart_Locators.placeorder_Btn);
  }

  async shippingAddress(data) {
    await this.cart_Btn.click();
    await this.placeorder_Btn.click();
    await this.user_Input.fill(data.fullName);
    await this.country_Input.fill(data.country);
    await this.city_Input.fill(data.city);
    await this.creditcard_Input.fill(data.creditCard);
    await this.month_Input.fill(data.month);
    await this.year_Input.fill(data.year);

    await this.purchase_Btn.click();

    await expect(this.success_Message).toBeVisible();
    await expect(this.success_Message).toHaveText(
      "Thank you for your purchase!",
    );

    await expect(this.ok_Btn).toBeVisible();
    await this.ok_Btn.click();
    // await this.page.waitForTimeout(3000);
  }
};
