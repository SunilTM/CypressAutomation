/// <reference types="cypress"/>

describe("select box", () => {
    it("should load website with selectbox", () => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false;
        });
        cy.visit("https://chercher.tech/practice/dropdowns");
    });

    it("should select multiple option from the select box", () => {
        cy.get("#second.col-lg-3")
            .select(["Pizza", "Burger"])
            .invoke("val")
            .should("deep.equal", ["pizza", "burger"]);
        //selecting using the values
    });
});