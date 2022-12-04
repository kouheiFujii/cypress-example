describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
  it("does not do mouch", () => {
    expect(true).to.equal(true);
  });
  it("finds the content 'filter'", () => {
    cy.visit("https://example.cypress.io");
    // find element
    cy.contains("filter");
    // Error if does not find
    // cy.contains("hoge");
  });
  it("click event", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("filter").click();
    // Should be on a new URL which includes '/commands/traversal'
    cy.url().should("include", "/commands/traversal");
  });
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();

    cy.get(".action-email") // select an element based on its class.
      .type("hoge@example.com") // enter text into the selected input.
      .should("have.value", "hoge@example.com");
  });
});
