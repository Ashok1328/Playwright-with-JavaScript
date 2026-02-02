const { expect } = require("@playwright/test");

exports.LogoutPage = class LogoutPage {
  constructor(page) {
    this.page = page;

    //Locators
    this.accountBtn = page.locator("//span[@class='oxd-userdropdown-tab']");
    this.logoutBtn = page.locator("//a[normalize-space()='Logout']");
  }

  async logout() {
    await expect(this.accountBtn).toBeVisible();
    await this.accountBtn.click();
    await expect(this.logoutBtn).toBeVisible();
    await this.logoutBtn.click();
    await expect(this.page).toHaveURL("/web/index.php/auth/login");
  }
};
