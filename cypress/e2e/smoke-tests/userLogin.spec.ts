import inventoryPage from "cypress/pageobjects/inventoryPage";
import loginPage from "cypress/pageobjects/loginPage";
import {
  userData,
  backpackItemName,
  loginErrorText,
} from "../../fixtures/data.json";

describe("Login tests", () => {
  beforeEach(() => {
    loginPage.openLoginPage();
  });

  it("The user should login with valid data", () => {
    loginPage.fillUserNameInput(userData.correctUserLogin);
    loginPage.fillPasswordInput(userData.userPassword);
    loginPage.clickLoginButton();
    inventoryPage.getBackbackItem.should("have.text", backpackItemName);
  });

  it("The application should show an error with invalid data", () => {
    loginPage.fillUserNameInput(userData.correctUserLogin);
    loginPage.fillPasswordInput("111111");
    loginPage.clickLoginButton();
    loginPage.getLoginError.should("be.visible");
    loginPage.getLoginError.should("have.text", loginErrorText);
  });
});
