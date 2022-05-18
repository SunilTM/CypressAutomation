///<reference type="cypress"/>//

describe('WebElements ',function (){

    it('Alert Popup Handliing',function (){

        cy.visit('https://chercher.tech/practice/popups')
        //clicking the button which throws the alert popup
        //As we are not handling,cypress selects OK
        cy.get('[name="alert"]]').click()

        cy.on('window:alert',(str) =>
        {
            expect(str).to.equal('I am alert')
        })
    })
    it('confirmationMSG',function (){

        cy.get('input[name="confirmation"]').click()

        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('I am confirm')
        })
    })
    it('TypeinAlertPopUp', function () {

        cy.get('[name="prompt"]').click().type('Alert Pop Up Handled').type('{enter}')
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('I am prompt')
        })
    })
})