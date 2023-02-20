/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')
import search from '../classes/search'


describe('placeOrder', () =>{
    
    const searchh = new search()

    it('login', () =>{
        cy.login(mpp.fifthMail,mpp.fifthPassword)
    })

    it('search product, add to cart & place order', () =>{

       //view product
       cy.get('[alt = "158"]').click()  
       cy.contains('V-Neck Top')

       //add to cart
       cy.contains('Add to cart').click({force:true})
        
        // cart page
        cy.get('[data-testid="ShoppingCartIcon"]').first().click({force:true})

        // assert button is disabled when products are unchecked
        cy.get('[type="checkbox"]').eq(0).uncheck({force:true}).should('not.be.checked')
        cy.contains('Checkout').should('be.disabled')

        //check products & checkout
        cy.get('[type="checkbox"]').eq(0).check({force:true}).should('be.checked')
        cy.contains('Checkout').click({force:true})
        
        // cy.get('.paystack-junctin-content > input').type('minefifth@yopmail.com',{force:true})
        // cy.contains('Continue').click({force:true})
        // cy.wait(1500)

        //checkout page
        
    

        //paystack payment
        // cy.get('[src="https://checkout.paystack.com/popup"]').its('0.contentDocument.body')
        // .contains('Mobile Money').click({force:true})
        // cy.get('[src="https://checkout.paystack.com/popup"]').its('0.contentDocument.body')
        // .contains('Confirm').click({force:true})
        // cy.wait(3000)
       
          
    })

})