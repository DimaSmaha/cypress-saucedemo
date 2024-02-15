import inventoryPage from "cypress/pageobjects/inventoryPage";
import loginPage from "cypress/pageobjects/loginPage";
import { userData, inventoryPageData } from "../../fixtures/data.json";

describe("InventoryPage tests", () => {
  beforeEach(() => {
    loginPage.loginWithValidData();
  });

  it("The user should add item to the card", () => {
    inventoryPage.getBackbackItem.should(
      "have.text",
      inventoryPageData.backpackItemName
    );
    inventoryPage.clickBackbackAddItemButton();
    inventoryPage.assertCartLogoItems(1);
  });

  it("The user should add multiple items to the card", () => {
    inventoryPage.getBackbackItem.should(
      "have.text",
      inventoryPageData.backpackItemName
    );
    inventoryPage.clickBackbackAddItemButton();
    inventoryPage.assertCartLogoItems(1);
    inventoryPage.clickBikeLightsAddItemButton();
    inventoryPage.assertCartLogoItems(2);
  });

  it("The user should remove item from the card", () => {
    inventoryPage.getBackbackItem.should(
      "have.text",
      inventoryPageData.backpackItemName
    );
    inventoryPage.clickBackbackAddItemButton();
    inventoryPage.assertCartLogoItems(1);
    inventoryPage.clickBackbackRemoveItemButton();
    inventoryPage.getShoppingCartLogo.should("not.have.text");
  });
});
