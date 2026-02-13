const { register_Locators } = require("../SelectorPage/Locators");
const { Urls } = require("../UtilsPage/Urls");
exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page;
    this.urls = new Urls(page);

    //Locators
    this.signup_Btn = page.locator(register_Locators.signup_Btn);
    this.username_Input = page.locator(register_Locators.username_Input);
    this.password_Input = page.locator(register_Locators.password_Input);
    this.submit_Btn = page.locator(register_Locators.submit_Btn);
  }

  async open() {
    await this.urls.openPage();
  }

  async register({ username, password }) {
    await this.signup_Btn.click();

    await this.username_Input.fill(username);
    await this.password_Input.fill(password);

    await this.submit_Btn.click();
  }
};
