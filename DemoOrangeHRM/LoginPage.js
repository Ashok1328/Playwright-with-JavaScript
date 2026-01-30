exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = "input[name='username']",
    this.userPassword = "input[name='password']",
    this.submitBtn = "//button[@type='submit']";
  }

  async gotoLoginPage() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }

  async Login(username, passsword) {
    await this.page.locator(this.userName).fill(username);
    await this.page.locator(this.userPassword).fill(passsword);
    await this.page.locator(this.submitBtn).click();
  }
};
