/// <reference types="cypress" />
import {mpp} from '../fixtures/shared/mppdata'

describe('Add to cart' , () =>{
    // beforeEach(()=>{
    //     Cypress.Cookies.preserveOnce('currentUser','ugid','authRefresh','_ga','sp_id.0295','authToken')
    // })
    // after(()=>{
    //     cy.clearCookie('currentUser','ugid','authRefresh','_ga','sp_id.0295','authToken')
    // })

    it('Add to cart' , () =>{
        //login
        cy.login(mpp.mineMail,mpp.minePassword)

        //view product
        cy.get('[alt = "158"]').click()  
        cy.contains('V-Neck Top')

        //add to cart
        cy.contains('Add to cart').click({force:true})

        //click on cart icon
        cy.get('[data-testid="ShoppingCartIcon"]').first().click({force:true})

        //delete product
        cy.get('[data-testid="DeleteIcon"]').first().click({force:true})
        cy.contains('You want to delete V-Neck Top').should('be.visible')
        cy.contains('Delete').click({force:true})

        //assert the page has no product
        cy.contains('Hi there, you have an empty cart, click here to add a product').should('be.visible')
    })
    
    })
