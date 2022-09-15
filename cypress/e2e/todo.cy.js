/// <reference types = "cypress"/>

describe('todo list', () => {
  beforeEach(() => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
    cy.get('.new-todo').type("walking{enter}")
  })

  it('should add todo in list', () => {
    cy.get('label').should('have.text', 'walking')
    cy.get('.toggle').should('not.be.checked')
  })

  it('should mark and clear todo', () => {

    cy.get('.toggle').click()
    cy.get('.clear-completed').click()
  })
})