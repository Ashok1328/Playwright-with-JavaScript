import { test } from "@playwright/test";
import { RegisterPage } from "../Page/RegisterPage";
import { register_Data } from "../DataPage/TestData";

test("User Registration", async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.gotoRegisterPage();
  await registerPage.register(register_Data());
});
