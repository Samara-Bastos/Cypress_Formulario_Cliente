/// <reference types="Cypress" />
describe('Teste funcional do botão editar', () => {
    it('Deve permitir acessar o formulario com os dados do cliente selecionado', () => {
        cy.visit("https://formulario-cliente.onrender.com");
        cy.get(':nth-child(3) > .div-button > a > .chakra-button').click()
        cy.get('#nome')
    })
})