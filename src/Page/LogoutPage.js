const { expect } = require("@playwright/test");
const { logout_Locators } = require("../selector/Locators");

exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;

    this.logout_Btn = page.locator(logout_Locators.logout_Btn);
  }

  async logout() {
    await expect(this.logout_Btn).toBeEnabled();
    await this.logout_Btn.click();
    await expect(this.page).toHaveURL("https://demoblaze.com/index.html");
  }
};
