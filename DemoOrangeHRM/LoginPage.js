const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    //Locators
    this.userName = page.locator("input[name='username']");
    this.userPassword = page.locator("input[name='password']");
    this.submitBtn = page.locator("//button[@type='submit']");
    this.dashbaordPage = page.locator("//h6[normalize-space()='Dashboard']");
  }

  async gotoLoginPage() {
    await this.page.goto("web/index.php/auth/login");
    await expect(this.page).toHaveURL("/web/index.php/auth/login");
    await expect(this.page).toHaveTitle("OrangeHRM");
  }

  async login(username, password) {
    await expect(this.userName).toBeVisible();
    await this.userName.fill(username);
    await expect(this.userPassword).toBeVisible();
    await this.userPassword.fill(password);
    await expect(this.submitBtn).toBeEnabled();
    await this.submitBtn.click();
    await expect(this.dashbaordPage).toBeVisible();
  }
};
