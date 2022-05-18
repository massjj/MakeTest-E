var x;


describe('x' , () => {
  it('x', () => {
    x = 'xx';
    cy.contains(x, { matchCase: true }).should('be.contain', x)
  })
})