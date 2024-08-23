/// <reference types="Cypress" />
describe.only('Testes funcionais do formulario', () => {

    beforeEach(() => {
        cy.visit("https://formulario-cliente.onrender.com");
    });

    it('Deve permitir cadastrar um cliente com sucesso', () => {
        cy.get('[href="/cadastrar"] > .chakra-button').click()
        cy.get('#nome').type("Marcela Araujo")
        cy.get('#nascimento').clear() .type('1990-01-01', { force: true })
        cy.get('#email').type("marcelaaraujo24@gmail.com")
        cy.get('#telefone').type("32988888888")
        cy.get('#escolaridade').select("Ensino médio")
        cy.get('input[name="estCivil"][value="casado"]').check({ force: true })
        cy.get('input[name="filhos"]').check({ force: true })
        cy.get('#descricao').type("1 Blusa Moletom - R$ 125,00")
        cy.get('[type="submit"]').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Cliente inserido com sucesso!')
    })

    it('Não deve permitir cadastrar um cliente', () => {
        cy.get('[href="/cadastrar"] > .chakra-button').click()
        cy.get('#nome').type("Marcela Araujo")
        cy.get('[type="submit"]').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Ocorreu algum problema, tente novamente por favor!')
    })

    it('Deve permitir atualizar um cliente com sucesso', () => {
        cy.get(':nth-child(1) > .div-button > a > .chakra-button').click()
        cy.get('#nome').type("Deve atualizar")
        cy.get('[type="submit"]').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Cliente atualizado com sucesso!')
    })

    it('Não deve permitir atualizar um cliente', () => {
        cy.get(':nth-child(1) > .div-button > a > .chakra-button').click()
        cy.get('#nome').clear()
        cy.get('[type="submit"]').click()
        cy.get('.Toastify__toast-body')
          .should('be.visible')
          .and('contain', 'Ocorreu algum problema, tente novamente por favor!')
    })
})