import Common from "./common";

class InventoryPage extends Common {
  get getBackbackItem(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#item_4_title_link");
  }

  get getBackbackAddItemButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId("add-to-cart-sauce-labs-backpack");
  }

  get getBikeLightsAddItemButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId("add-to-cart-sauce-labs-bike-light");
  }

  get getBackbackRemoveItemButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId("remove-sauce-labs-backpack");
  }

  get getShoppingCartLogo(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#shopping_cart_container");
  }

  public clickBackbackAddItemButton(): void {
    this.getBackbackAddItemButton.click();
  }

  public clickBikeLightsAddItemButton(): void {
    this.getBikeLightsAddItemButton.click();
  }

  public clickBackbackRemoveItemButton(): void {
    this.getBackbackRemoveItemButton.click();
  }

  public assertCartLogoItems(itemsNum: number): void {
    this.getShoppingCartLogo.should("have.text", itemsNum);
  }
}

export default new InventoryPage();
