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
        var phone_name = "Nokia lumia 1520";
        var price = "820";
        cy.visit('https://www.demoblaze.com/')
        cy.get('#login2').click()
        cy.wait(1000)
        cy.get('#loginusername').type('maketest1')
        cy.get('#loginpassword').type('123456')
        cy.get('.btn').contains('Log in').click()
        cy.wait(1000)
        cy.get('#nameofuser').should('be.contain', 'Welcome maketest1')
        cy.get('.card-title').contains('Nokia lumia 1520').click()
        cy.get('#tbodyid > h2').should('be.contain', phone_name)
        cy.get('#tbodyid > .price-container').should('be.contain', price)
        cy.get('a[class="btn btn-success btn-lg"]').click()
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Product added.')
        })
        cy.contains('Cart').click()
        cy.get('#tbodyid').within(() => {
            cy.contains(phone_name).should('be.visible')
        })
        cy.get('#totalp').should('be.contain', price)
        cy.get('.btn').contains('Place Order').click()
        cy.get('#totalm').should('be.contain', price)
        cy.get('#name').type('MakeTest1')
        cy.get('#country').type('TH')
        cy.get('#city').type('BKK')
        cy.get('#card').type('012458887745')
        cy.get('#month').type('APR')
        cy.get('#year').type('2022')
        cy.get('.btn').contains('Purchase').click()
        cy.get('.sweet-alert').contains('Thank you for your purchase!')
        cy.get('.btn').contains('OK').click()
        cy.url().should('be.contain', 'index.html')

    })
})