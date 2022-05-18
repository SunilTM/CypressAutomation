///<reference type = Cypress/>

describe('Post User request',()=>{
    it('create user test', () =>{
        cy.request({
            method: 'Post',
            url:'https://reqres.in/api/users',
            body:  {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })
})