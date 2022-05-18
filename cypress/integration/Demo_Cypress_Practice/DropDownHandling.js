///<reference type="cypress"/>//

describe('Locating WebElements',function (){

    it('Skills DropdownHandling',function (){

        //Launch browser with valid URL
        cy.visit('http://demo.automationtesting.in/Register.html')

        //to check Skill is exist or not
        cy.get('#Skills').select('Analytics').should('have.value','Analytics')

    })
    it('Languages MultiSelect', function () {

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()
        cy.get('.ui-corner-all').contains('Bulgarian').click()
    });

    it('Select searchable countries',function (){

        cy.get('[role="combobox"]').click({force:true}) // Forcefull Click
        cy.get('.select2-search__field').type('India')
        cy.get('.select2-search__field').type('{enter}')   //Hit ENTER from keyboard
    })

})