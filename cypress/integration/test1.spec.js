describe('' , () => {
  it('', () => {
    cy.visit('https://www.github.com')
    cy.get('.octicon-three-bars').click()
    cy.get('.mr-0:nth-child(1) .HeaderMenu-summary').click()
    cy.get('.mr-0:nth-child(1) li:nth-child(2) > .lh-condensed-ultra').click()
  })
})