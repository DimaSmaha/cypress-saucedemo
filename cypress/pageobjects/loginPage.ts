import Common from "./common";

class LoginPage extends Common {
  public openLoginPage(): void {
    super.openPage("/");
  }

  get getUserNameInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId("username");
  }

  get getPasswordInput(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId("password");
  }

  get getLoginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId("login-button");
  }

  get getLoginError(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.getByTestId("error");
  }

  public fillUserNameInput(userName: string): void {
    this.getUserNameInput.type(userName);
  }

  public fillPasswordInput(password: string): void {
    this.getPasswordInput.type(password);
  }

  public clickLoginButton(): void {
    this.getLoginButton.click();
  }
}

export default new LoginPage();
