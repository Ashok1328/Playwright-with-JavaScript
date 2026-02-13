const { expect } = require("@playwright/test");
const { shipping_Data } = require("../DataPage/ShippingData");
const { shipping_Locators } = require("../SelectorPage/Locators");

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
  }

  async shippingAddress() {
    const data = shipping_Data();

    await this.user_Input.fill(data.fullName);
    await this.country_Input.fill(data.country);
    await this.city_Input.fill(data.city);
    await this.creditcard_Input.fill(data.creditCard);
    await this.month_Input.fill(data.month);
    await this.year_Input.fill(data.year);

    this.page.once("dialog", (dialog) => {
      expect(dialog.message).toContain("Thank you for your purchase!");
      dialog.accept();
    });

    await this.purchase_Btn.click();
  }
};
