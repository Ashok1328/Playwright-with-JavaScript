exports.AdminPage = class AdminPage {
  constructor(page) {
    this.page = page;
    this.AdminBtn = "//span[text()='Admin']";
    this.userNameInput = "//form//input[contains(@class,'oxd-input')]";
    this.userRole =
      "(//div[contains(@class,'oxd-select-text-input') and text()='-- Select --'])[1]";
    this.roleOption = "//div[@role='listbox']//span[text()='ESS']";
    this.employeeName = "//input[@placeholder='Type for hints...']";
    this.employeeOption = "//div[@role='option']";
    this.employeeSelect =
      "//div[@role='listbox']//span[text()='Peter Mac Anderson']";
    this.status = "(//div[@class='oxd-select-wrapper'])[2]";
    this.statusOption = "//div[@role='listbox']//span[text()='Enabled']";
    this.searchBtn = "//button[@type='submit']";
  }

  async Admin(username, employeename) {
    await this.page.locator(this.AdminBtn).click();
    await this.page.locator(this.userNameInput).fill(username);
    await this.page.locator(this.userRole).click();
    await this.page.locator(this.roleOption).click();
    await this.page.locator(this.employeeName).fill(employeename);
    await this.page.waitForSelector(this.employeeOption, {state: 'visible'});
    await this.page.locator(this.employeeSelect).click();
    await this.page.locator(this.status).click();
    await this.page.locator(this.statusOption).click();
    await this.page.locator(this.searchBtn).click();
  }
};
