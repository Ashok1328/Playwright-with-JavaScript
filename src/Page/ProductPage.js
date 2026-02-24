const { expect } = require("@playwright/test");
const { product_Locators } = require("../selector/Locators");

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;

    //Locators
    this.single_Product = page.locator(product_Locators.single_Product);
    this.addtoCart_Btn = page.locator(product_Locators.addtocart_Btn);
    this.home_Btn = page.locator(product_Locators.home_Btn);
  }

  async selectCategory(category) {
    await this.page.locator(product_Locators.category_ByName(category)).click();
  }

  async selectProduct(productName) {
    await this.page
      .locator(product_Locators.product_ByName(productName))
      .click();
  }

  async addToCart() {
    this.page.once("dialog", async (dialog) => {
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    await this.addtoCart_Btn.click();
  }

  async goHome() {
    await this.home_Btn.click();
  }

  async addSingleProducts() {
    await this.single_Product.click();
    await this.addToCart();
  }

  async addMultipleProducts(products) {
    for (const item of products) {
      await this.selectCategory(item.category);
      await this.selectProduct(item.product);
      await this.addToCart();
      await this.goHome();
    }
  }
};
