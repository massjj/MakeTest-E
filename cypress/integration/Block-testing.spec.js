describe('Maketest Block Testing Survey', () => {
    it('TC00-Check url', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.url().should('be.contain', 'demoblaze')
    })
    it('TC01-Wrong password Test', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('maketest1')
        cy.get('#loginpassword').type('654321')
        cy.get('#logInModal .btn-primary').click()
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Wrong password.')
        })
    })
    it('TC02-Buying somthing in website', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('maketest1')
        cy.get('#loginpassword').type('123456')
        cy.get('.btn').contains('Log in').click()
        cy.wait(1000)
        cy.get('#nameofuser').should('be.contain', 'Welcome maketest1')


    })
})