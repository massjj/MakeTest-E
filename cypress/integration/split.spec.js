var String2;


describe('' , () => {
  it('', () => {
    String2 = 'Sasikarn Aungkanakorn';
    String2 = String2.split(' ');
    cy.log(String2)
    cy.log(String2[0])
  })
})