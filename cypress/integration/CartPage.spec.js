/// <reference types="cypress" />
describe('Cart Page',() => {
     
    it('individual login' , () =>{
    //     cy.visit("http://localhost:3000/")
    //     cy.get('.loginButton').click({force:true})
    //     cy.url().should('eq','http://localhost:3000/login')
    //     cy.get('#email').type('testone@yopmail.com',{force:true})
    //     cy.get('#password').type('testone@yopmail.com',{force:true})
    //     cy.get('.form_submit_btn').click({force:true})

    cy.login('testone@yopmail.com','testone@yopmail.com')
     })


    
    it ('cart page', () => {
        //click on cart icon
        cy.get('[data-testid="ShoppingCartIcon"]').first().click({force:true})

        //button disabled when page is empty
        cy.contains('Place Order').should('be.disabled')
        cy.get('[src="/images/mkp_logo.svg"]').click()
        cy.get('[alt = "158"]').click()
        cy.contains('V-Neck Top')
        cy.contains('Add to cart').click({force:true})

    })


})

