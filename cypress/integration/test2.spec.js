/// <reference types="cypress" />

describe('MakeTest test', () => {
    it('JPet store', () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action');
        cy.get('#SidebarContent > a:nth-child(1) > img').click();
        cy.get('tr:nth-child(2) a').click();
        cy.get('h2').should('coontain', 'Angelfish');
        cy.get('')
    })
})