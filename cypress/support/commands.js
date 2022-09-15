Cypress.Commands.add('filtering', (todo1, todo2, todo3) => { 
        cy.get('.new-todo').type(todo1 + "{enter}")
        cy.get('.new-todo').type(todo2 + "{enter}")
        cy.get('.new-todo').type(todo3 + "{enter}")
        cy.get('.todo-list li:nth-child(2) .toggle').click()
 })
