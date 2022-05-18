/// <reference types="cypress"/>

describe("scroll down and up", () => {
    it("should scroll down and up on page", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        });
        cy.visit( "https://chercher.tech/protractor/dropdowns-protractor");
        cy.scrollTo("bottom", { duration: 2000 });
    });
});