exports.AdminPage = class AdminPage {
  constructor(page) {
    this.page = page;

    //Locators
    this.AdminBtn = page.locator("//span[text()='Admin']");
    this.userNameInput = page.locator(
      "//form//input[contains(@class,'oxd-input')]",
    );
    this.userRole = page.locator(
      "(//div[contains(@class,'oxd-select-text-input') and text()='-- Select --'])[1]",
    );
    this.roleOption = page.locator(
      "//div[@role='listbox']//span[text()='ESS']",
    );
    this.employeeName = page.locator(
      "//input[@placeholder='Type for hints...']",
    );
    this.employeeOption = page.locator("//div[@role='option']");
    this.employeeSelect = page.locator(
      "//div[@role='listbox']//span[text()='Peter Mac Anderson']",
    );
    this.status = page.locator("(//div[@class='oxd-select-wrapper'])[2]");
    this.statusOption = page.locator(
      "//div[@role='listbox']//span[text()='Enabled']",
    );
    this.searchBtn = page.locator("//button[@type='submit']");
  }

  async admin(username, employeename) {
    await this.AdminBtn.click();
    await this.userNameInput.fill(username);
    await this.userRole.click();
    await this.roleOption.click();
    await this.employeeName.fill(employeename);
    await this.page.waitForSelector("//div[@role='option']", {
      state: "visible",
    });
    await this.employeeSelect.click();
    await this.status.click();
    await this.statusOption.click();
    await this.searchBtn.click();
  }
};
