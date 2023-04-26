/// <reference types="cypress" />
describe('Check home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/registrar-comentario')
  })

  it('Check CloseButton close modal', () => {
    cy.get('[data-testid="closeModal"]').click()
    cy.location('pathname').should('eq', '/')
  })

  it('Check validation error input name', () => {
    cy.get('[data-testid="submitButton"]').click()
    cy.get('[data-testid="name"]').then($input => {
      expect($input[0].validationMessage).to.eq('Preencha este campo.')
    })
  })

  it('Check validation error rate value', () => {
    cy.get('[data-testid="name"]').type('Abilio Bittencourt')
    cy.get('[data-testid="submitButton"]').click()
    cy.get('[data-testid="toaster"]').contains('Preencha a nota')
  })

  it('Check success toaster', () => {
    cy.get('[data-testid="name"]').type('Abilio Bittencourt')
    cy.get('[data-testid="comment"]').type('Abilio Bittencourt')
    cy.get('[data-testid="star5"]').click()
    cy.get('[data-testid="submitButton"]').click()
    cy.get('[data-testid="toaster"]').contains('Obrigado por avaliar nossos serviços.')
  })
})
