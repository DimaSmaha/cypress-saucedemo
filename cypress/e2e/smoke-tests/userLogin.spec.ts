import inventoryPage from "cypress/pageobjects/inventoryPage";
import loginPage from "cypress/pageobjects/loginPage";
import {
  userData,
  inventoryPageData,
  errorTexts,
} from "../../fixtures/data.json";

describe("Login tests", () => {
  beforeEach(() => {
    loginPage.openLoginPage();
  });

  it("The user should login with valid data", () => {
    loginPage.fillUserNameInput(userData.correctUserLogin);
    loginPage.fillPasswordInput(userData.userPassword);
    loginPage.clickLoginButton();
    inventoryPage.getBackbackItem.should(
      "have.text",
      inventoryPageData.backpackItemName
    );
  });

  it("The application should show an error with invalid password", () => {
    loginPage.fillUserNameInput(userData.correctUserLogin);
    loginPage.fillPasswordInput("111111");
    loginPage.clickLoginButton();
    loginPage.getLoginError.should("be.visible");
    loginPage.getLoginError.should("have.text", errorTexts.loginErrorText);
  });

  it("The application should show an error with invalid login", () => {
    loginPage.fillUserNameInput("123456");
    loginPage.fillPasswordInput(userData.userPassword);
    loginPage.clickLoginButton();
    loginPage.getLoginError.should("be.visible");
    loginPage.getLoginError.should("have.text", errorTexts.loginErrorText);
  });
});
