describe('API Testing with Alias',() =>{

    beforeEach(()=>{
        cy.request('/users?page=2').as('users')
    })

    it('Valiadate the status code ',() => {

        cy.get('@users')
            .its('status')
            .should('equal',200)
    })

    it('Valiadate the total pages in body',() => {

        cy.get('@users')
            .its('body')
            .should('contains',{'total_pages':2})
    })

    it('Valiadate the user info in the json array',() => {

        cy.get('@users')
            .its('body').then((res)=>{

            expect(res.data[0]).has.property('first_name','Michael')
        })

    it('Valiadate haeder info',() => {

        cy.get('@users')
             .its('Headers')
               .should('contain','application/json')
        })

    })

})