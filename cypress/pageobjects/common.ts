abstract class Common {
  public openPage(pageEndpoint: string) {
    cy.visit(pageEndpoint);
  }
}
export default Common;
