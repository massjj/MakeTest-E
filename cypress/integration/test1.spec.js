describe('ขอบเขตที่ 1' , () => {
  it('ทดสอบการใส่คำค้นหาบน www.google.com', () => {
    cy.visit('www.google.com')
    cy.get('input.gLFyf.gsfi').type('github')
    cy.contains('ค้นหาด้วย Google', { matchCase: true }).click()
  })
})