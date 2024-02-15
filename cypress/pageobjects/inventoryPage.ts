import Common from "./common";

class InventoryPage extends Common {
  get getBackbackItem(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("#item_4_title_link");
  }
}
export default new InventoryPage();
