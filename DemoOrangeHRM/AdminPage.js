const { expect } = require("@playwright/test");

exports.AdminPage = class AdminPage {
  constructor(page) {
    this.page = page;

    //Locators

// const admin_locators = { admin_btn = 'xpath', and similarly all value of locator only with the variable name}


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

// use the locator variable name as this.admin_btn = page.locator(admin_locator.admin_btn)

  async admin(username, employeename) {
    await expect(this.AdminBtn).toBeVisible();
    await this.AdminBtn.click();
    await expect(this.userNameInput).toBeEditable();
    await this.userNameInput.fill(username);
    await this.userRole.click();

    // use await this.roleOption.click();
    //await expect(this.userRole).toContainText("ESS"); do not use hard assertation.
    await expect(this.roleOption).toHaveText("ESS");
    await this.roleOption.click();
    await this.employeeName.fill(employeename);

    // use tobevisible 
    await this.page.waitForSelector("//div[@role='option']", {
      state: "visible",
    });

    await this.employeeSelect.click();
    await expect(this.employeeName).toHaveValue("Peter Mac Anderson");
    await this.status.click();
    await expect(this.statusOption).toBeVisible();
    await this.statusOption.click();
    await expect(this.searchBtn).toBeEnabled();
    await this.searchBtn.click();
  }
};
