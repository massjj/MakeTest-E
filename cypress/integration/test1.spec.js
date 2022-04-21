describe('MakeTest test' , () => {
  it('JPet store', () => {
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    cy.get('#SidebarContent > a:nth-child(1) > img').click()
    cy.get('tr:nth-child(2) a').click()
    cy.get('h2').should('be.contain', 'Angelfish')
    cy.get('tr:nth-child(2) .Button').click()
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.contain', 'Large Angelfish')
    cy.get('.Button:nth-child(1)').click()
    cy.get('td:nth-child(3)').should('not.be.visible')
  })
})