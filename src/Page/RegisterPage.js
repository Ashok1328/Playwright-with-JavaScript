const { expect } = require("@playwright/test");
const { register_Locators } = require("../LocatorPage/Locators");

exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;

    //Locators
    this.signup_Btn = page.locator(register_Locators.signup_Btn);
    this.username_Input = page.locator(register_Locators.username_Input);
    this.password_Input = page.locator(register_Locators.password_Input);
    this.submit_Btn = page.locator(register_Locators.submit_Btn);
  }

  async gotoRegisterPage() {
    await this.page.goto("/index.html");
    await expect(this.page).toHaveURL(/index.html/);
    await expect(this.page).toHaveTitle("STORE");
  }

  async register({ username, password }) {
    await expect(this.signup_Btn).toBeEnabled();
    await this.signup_Btn.click();
    await expect(this.username_Input).toBeVisible();
    await this.username_Input.fill(username);
    await expect(this.password_Input).toBeVisible();
    await this.password_Input.fill(password);
    await expect(this.submit_Btn).toBeEnabled();
    await this.submit_Btn.click();
  }
};
