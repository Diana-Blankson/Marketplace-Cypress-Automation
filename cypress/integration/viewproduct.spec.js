/// <reference types="cypress" />
describe('View Product' , () =>{
it('individual login' , () =>{
    cy.visit("http://localhost:3000/")
    cy.get('.loginButton').click({force:true})
    cy.url().should('eq','http://localhost:3000/login')
    cy.get('#email').type('mine@yopmail.com',{force:true})
    cy.get('#password').type('mine@yopmail.com',{force:true})
    cy.get('.form_submit_btn').click({force:true})

})

it('view product' , () =>{
    cy.get('[alt = "158"]').click()
    cy.contains('V-Neck Top')
    cy.scrollTo('center')
    cy.scrollTo('top')
})
})