describe("Journalist can", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/api/articles",
      response: "fixture:create_article_response.json"
    });
    cy.route({
      method: "POST",
      url: "**/auth/**",
      response: "fixture:journalist_login.json"
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:journalist_login.json"
    });
    cy.visit("/");
  });

  it("create an article successfully", () => {
    cy.get("#main-header").within(() => {
      cy.get("#login").click();
    });
    cy.get("#login-form").within(() => {
      cy.get("#email").type("journalist@mail.com");
      cy.get("#password").type("password");
      cy.get("#login-button")
        .contains("Login")
        .click();
    });
    cy.get("button")
      .contains("Close")
      .click();
    cy.get("#sidebar")
      .contains("Create New Article")
      .click();
    cy.get("#new-article-form").within(() => {
      cy.get("#title").type("This is a title");
      cy.get("#lead").type("This is a lead");
      cy.get("textarea#content").type("This is some awesome content");
      cy.get("div[name='category']").click();
      cy.get('div[role="option"]')
        .contains("Tech")
        .click();
      cy.file_upload("img.png", "#image-upload", "image/png");
    });

    cy.get("#create-article-button").click();
    cy.get("p#message").should(
      "contain",
      "Your article was successfully created"
    );
  });
});
