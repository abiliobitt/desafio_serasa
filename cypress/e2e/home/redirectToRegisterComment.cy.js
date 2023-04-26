/// <reference types="cypress" />
describe('Check home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Check if link redirect to register comment screen', () => {
    cy.get('[data-testid="ratingLink"]').click()
    cy.location('pathname').should('eq', '/registrar-comentario')
  })
})
