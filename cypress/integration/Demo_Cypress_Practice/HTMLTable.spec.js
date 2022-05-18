/// <reference types="cypress"/>

describe('Locating Elements',function ()
{
    it('verify type of locators',function ()
    {

        cy.visit("https://testautomationpractice.blogspot.com/")

        //1. check specific value present or not in Table
        cy.get('table[name="BookTable"]').contains('td','Learn Java').should('be.visible')

        //2.check  value present in a specific row and coloumn
        cy.get('table[name="BookTable"]> tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')


        //verify the book name "" whose author is""
        cy.get('table[name="BookTable"]>tbody>tr td:nth-child(2)').each(($e1,index,$list)=>{

            const text =$e1.text()

            if(text.includes("Amod"))
            {
                cy.get('table[name="BookTable"]>tbody>tr td:nth-child(1)').eq(index).then(function (bname)
                {
                   const bookname =bname.text()
                    expect(bookname).to.equal("Master In Java")
                })
            }
    })
    })
})