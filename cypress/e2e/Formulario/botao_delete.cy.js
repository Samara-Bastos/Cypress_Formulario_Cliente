/// <reference types="Cypress" />
describe('Teste funcional do botão deletar', () => {
    it.only('Deve permitir deletar um cliente com sucesso', () => {
        cy.visit("https://formulario-cliente.onrender.com");
        cy.get(':nth-child(1) > .div-button > :nth-child(2)').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Cliente excluido com sucesso!')
    })
})