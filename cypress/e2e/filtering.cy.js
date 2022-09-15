/// <reference types = "cypress"/>

describe('filtering', () => {
  beforeEach(() => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')
  })

  it('should filter active', () => {
      cy.fixture('./example.json').then((data) => {
      cy.get('.new-todo').type(data.todo1)
      cy.get('.new-todo').type("{enter}")
      cy.get('.new-todo').type(data.todo2)
      cy.get('.new-todo').type("{enter}")
      cy.get('.new-todo').type(data.todo3)
      cy.get('.new-todo').type("{enter}")
      cy.get('.todo-list li:nth-child(2) .toggle').click()
    
      cy.contains('Active').click()
      cy.get('.todo-list>li').should('have.length', 2)
    })
  })

    it('should filter active with custom commands', () => {
      cy.fixture('./example.json').then((data) => {
        cy.filtering(
        data.todo1,
        data.todo2,
        data.todo3
      )
    
      cy.contains('Active').click()
      cy.get('.todo-list>li').should('have.length', 2)
    })
  })

    it('should filter completed', () => {
      cy.fixture('./example.json').then((data) => {
      cy.filtering(
        data.todo1,
        data.todo2,
        data.todo3
      )
      
      cy.contains('Completed').click()
      cy.get('.todo-list>li').should('have.length', 1)
    })
  })

    it('should filter All', () => {
      cy.fixture('./example.json').then((data) => {
        cy.filtering(
          data.todo1,
          data.todo2,
          data.todo3
        )
      cy.contains('All').click()
      cy.get('.todo-list>li').should('have.length', 3)
    })
})
})