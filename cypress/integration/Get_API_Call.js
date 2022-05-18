
///<reference type = Cypress/>

describe('Get User request',()=>{
    it('Get user test', () =>{
        cy.request({
            method: 'get',
            url:'https://reqres.in/api/users/2'

        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })
})