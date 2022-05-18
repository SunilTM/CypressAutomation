///<reference type="cypress"/>//

describe('Locating WebElements',function (){

    it('Verify CheckBox',function (){

        cy.visit('http://demo.automationtesting.in/Register.html')

        //Select each checkbox individually
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

    })

    it('Deslecting the checkbox',function (){
        //Deselecting the checkbox
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

    })
    it('Select Multiple Checkbox',function (){

        //Select multiple checkboxes
        cy.get('input[type="checkbox"]').check(['Cricket','Hockey','Movies'])
    })

})