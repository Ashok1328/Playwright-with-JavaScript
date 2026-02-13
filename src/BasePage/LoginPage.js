const { login_Locators } = require("../SelectorPage/Locators");
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    this.login_Btn = page.locator(login_Locators.login_Btn);
    this.username_Input = page.locator(login_Locators.username_Input);
    this.password_Input = page.locator(login_Locators.password_Input);
    this.submit_Btn = page.locator(login_Locators.submit_Btn);
  }

  async login({ username, password }) {
    await this.login_Btn.click();
    await this.username_Input.fill(username);
    await this.password_Input.fill(password);
    await this.submit_Btn.click();
  }
};
