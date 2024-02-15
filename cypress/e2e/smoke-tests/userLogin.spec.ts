import inventoryPage from "cypress/pageobjects/inventoryPage";
import loginPage from "cypress/pageobjects/loginPage";
import { userData, backpackItemName } from "../../fixtures/data.json";
describe("Login tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("The user should login with valid data", () => {
    loginPage.fillUserNameInput(userData.correctUserLogin);
    loginPage.fillPasswordInput(userData.userPassword);
    loginPage.clickLoginButton();
    inventoryPage.getBackbackItem.should("have.text", backpackItemName);
  });

  it("The application should show an error with invalid data", () => {});
});
