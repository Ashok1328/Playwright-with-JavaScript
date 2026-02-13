const { logout_Locators } = require("../SelectorPage/Locators");

exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;
    
    this.logout_Btn = page.locator(logout_Locators.logout_Btn);
  }

  async logout() {
    await this.logout_Btn.click();
  }
};
