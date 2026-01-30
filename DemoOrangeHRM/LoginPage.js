exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

     // Locators (defined once for reusability & readability) eg: page.locator(locator_value)
    this.userName = "input[name='username']",
    this.userPassword = "input[name='password']",
    this.submitBtn = "//button[@type='submit']";
  }
    // naming conventions login lowercase do not user capitalcase
  async gotoLoginPage() {
    // user navigateto and baseurl value from the playwright.config.js file
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  }
  // Login to login lowercase
  async Login(username, passsword) {
    // use wait for visisbel element donot do hardcode playwright might not find the element due to slow network
    await this.page.locator(this.userName).fill(username);
    await this.page.locator(this.userPassword).fill(passsword); // typo error password 
    await this.page.locator(this.submitBtn).click();
  }
};
