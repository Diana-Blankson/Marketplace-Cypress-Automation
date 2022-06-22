/// <reference types="cypress" />
describe('View Product' , () =>{
    // beforeEach(()=>{
    //     Cypress.Cookies.preserveOnce('currentUser','ugid','authRefresh','_ga','sp_id.0295','authToken')
    // })
    // after(()=>{
    //     cy.clearCookie('currentUser','ugid','authRefresh','_ga','sp_id.0295','authToken')
    // })

    it('individual login' , () =>{
        // cy.visit("http://localhost:3000/")
        // cy.get('.loginButton').click({force:true})
        // cy.url().should('eq','http://localhost:3000/login')
        // cy.get('#email').type('mine@yopmail.com',{force:true})
        // cy.get('#password').type('mine@yopmail.com',{force:true})
        // cy.get('.form_submit_btn').click({force:true})
        cy.login('mine@yopmail.com','mine@yopmail.com')


        cy.get('[alt = "158"]').click()  
        cy.contains('V-Neck Top')
        cy.contains('Add to cart').click({force:true})
    
    })
    
    // it('view product' , () =>{
    //     cy.get('[alt = "158"]').click()
    //     cy.contains('V-Neck Top')
    // })

    // it('add to cart' , () =>{
    //     cy.contains('Add to cart').click({force:true})
    // })
    })
