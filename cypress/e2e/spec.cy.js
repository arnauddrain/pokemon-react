describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    expect(cy.contains("Rechercher")).to.exist;
    cy.get("input").type("Pikachu");
    cy.contains("Rechercher").click();
    expect(cy.get("img")).to.exist;
  });
});
