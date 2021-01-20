context("Test that stubing a response header works", () => {
  it("", () => {
    cy.intercept("/toto", {
      statusCode: 200,
      body: "Toto",
      headers: {
        foo: "bar",
      },
    }).as("fetchToto");

    cy.visit("/");

    cy.wait("@fetchToto");

    cy.contains("The header was found");
  });
});
