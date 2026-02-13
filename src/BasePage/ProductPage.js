const { product_Locators } = require("../SelectorPage/Locators");

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    
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
    this.page.once("dialog", (dialog) => dialog.accept());
    await this.addtoCart_Btn.click();
  }

  async goHome() {
    await this.home_Btn.click();
  }

  async addProducts(products) {
    for (const item of products) {
      await this.selectCategory(item.category);
      await this.selectProduct(item.product);
      await this.addToCart();
      await this.goHome();
    }
  }
};
