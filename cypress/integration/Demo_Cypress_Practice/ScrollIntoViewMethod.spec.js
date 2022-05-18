/// <reference types="cypress"/>

describe("scroll down", () => {
    it("should scroll down and up on page", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        });
        cy.visit(
            "https://chercher.tech/protractor/dropdowns-protractor#javascript-method-select"
        );

        //ScrollView ()
        cy.wait(3000);
        cy.get("#create-select-class").scrollIntoView();
        cy.wait(3000);
        cy.get("#dropdowns-protractor-select").scrollIntoView();

        //ScrollIntoView() with Options
        cy.wait(3000);
        cy.get("#create-select-class").scrollIntoView({ easing: "swing" });
        cy.wait(3000);
    });
});