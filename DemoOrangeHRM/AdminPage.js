const { expect } = require("@playwright/test");

const admin_Locators = {
admin_Btn : "//span[text()='Admin']",
username_Input : "//form//input[contains(@class,'oxd-input')]",
user_Role : "(//div[contains(@class,'oxd-select-text-input') and text()='-- Select --'])[1]",
role_Option : "//div[@role='listbox']//span[text()='ESS']",
employee_Name : "//input[@placeholder='Type for hints...']",
employee_Option : "//div[@role='option']",
employee_Select : "//div[@role='listbox']//span[text()='Peter Mac Anderson']",
status : "(//div[@class='oxd-select-wrapper'])[2]",
status_Option : "//div[@role='listbox']//span[text()='Enabled']",
search_Btn : "//button[@type='submit']",
};

exports.AdminPage = class AdminPage {
  constructor(page) {
    this.page = page;

//Locators using locator object

this.admin_Btn = page.locator(admin_Locators.admin_Btn);
this.username_Input = page.locator(admin_Locators.username_Input);
this.user_Role = page.locator(admin_Locators.user_Role);
this.role_Option = page.locator(admin_Locators.role_Option)
this.employee_Name = page.locator(admin_Locators.employee_Name)
this.employee_Option = page.locator(admin_Locators.employee_Option)
this.employee_Select = page.locator(admin_Locators.employee_Select)
this.status = page.locator(admin_Locators.status);
this.status_Option = page.locator(admin_Locators.status_Option)
this.search_Btn = page.locator(admin_Locators.search_Btn)
}

  async admin(username, employeename) {
    await expect(this.admin_Btn).toBeVisible();
    await this.admin_Btn.click();

    await expect(this.username_Input).toBeEditable();
    await this.username_Input.fill(username);

    await this.user_Role.click();
    await expect(this.role_Option).toBeVisible();
    await this.role_Option.click();

    await this.employee_Name.fill(employeename);
    await expect(this.employee_Option).toBeVisible();
    await this.employee_Select.click();

    await expect(this.employee_Name).toHaveValue("Peter Mac Anderson");

    await this.status.click();
    await expect(this.status_Option).toBeVisible();
    await this.status_Option.click();

    await expect(this.search_Btn).toBeEnabled();
    await this.search_Btn.click();
  }
};


  