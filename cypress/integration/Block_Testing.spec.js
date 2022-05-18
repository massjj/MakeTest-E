var phone_name, price;


describe('Maketest Block Testing Survey' , () => {
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
    phone_name = 'Nokia lumia 1520';
    price = '820';
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.wait(1000)
    cy.get('#loginusername').type('maketest1')
    cy.get('#loginpassword').type('123456')
    cy.get('#logInModal .btn-primary').click()
    cy.wait(1000)
    cy.get('#nameofuser').should('be.contain', 'Welcome maketest1')
    cy.contains('Nokia lumia 1520').click()
    cy.get('.name').should('be.contain',
    phone_name)
    cy.get('.price-container').should('be.contain',
    price)
    cy.get('.btn-success').click()
    cy.on('window:alert', (text) => {
     expect(text).to.contain('Product added.')
    })
    cy.get('#cartur').click()
    cy.get('td:nth-child(2)').should('be.exist')
    cy.get('#totalp').should('be.contain',
    price)
    cy.get('.btn-success').click()
    cy.get('#totalm').should('be.exist')
    cy.get('#name').type('MakeTest1')
    cy.get('#country').type('TH')
    cy.get('#city').type('BKK')
    cy.get('#card').type('123456878')
    cy.get('#month').type('xx')
    cy.get('#year').type('xx')
    cy.get('#orderModal .btn-primary').click()
    cy.get('h2:nth-child(6)').should('be.contain', 'Thank you for your purchase!')
  })
})