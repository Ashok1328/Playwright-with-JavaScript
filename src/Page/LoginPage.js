const { expect } = require("@playwright/test");
const { login_Locators } = require("../LocatorPage/Locators");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    this.login_Btn = page.locator(login_Locators.login_Btn);
    this.username_Input = page.locator(login_Locators.username_Input);
    this.password_Input = page.locator(login_Locators.password_Input);
    this.submit_Btn = page.locator(login_Locators.submit_Btn);
  }

  async login({ username, password }) {
    await expect(this.login_Btn).toBeEnabled();
    await this.login_Btn.click();
    await expect(this.username_Input).toBeVisible();
    await this.username_Input.fill(username);
    await expect(this.password_Input).toBeVisible();
    await this.password_Input.fill(password);
    await expect(this.submit_Btn).toBeEnabled();
    await this.submit_Btn.click();
  }
};
