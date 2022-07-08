/// <reference types="cypress" />
import {mpp} from '../fixtures/shared/mppdata'
import search from '../classes/search'


describe('placeOrder', () =>{
    
    const searchh = new search()

    it('login', () =>{
        cy.login(mpp.fifthMail,mpp.fifthPassword)
    })

    it('search product, add to cart & place order', () =>{

        // searh  product & add to cart
        searchh.searchAddtoCart('V-Neck','V-Neck Top')
        searchh.searchAddtoCart('Long Bl','Long Blazer')
        

        // cart page
        cy.get('[data-testid="ShoppingCartIcon"]').first().click({force:true})

        // assert button is disabled when products are unchecked
        cy.get('[type="checkbox"]').eq(0).uncheck({force:true}).should('not.be.checked')
        cy.contains('Checkout').should('be.disabled')

        //check products & checkout
        cy.get('[type="checkbox"]').eq(0).check({force:true}).should('be.checked')
        cy.contains('Checkout').click({force:true})
        cy.get('.paystack-junctin-content > input').type('minefifth@yopmail.com',{force:true})
        cy.contains('Continue').click({force:true})
        cy.wait(1500)

        //
        // cy.get('.nav--collapsed').within(()=>{
        //     cy.contains('Use any of the options below to test the payment flow').should('be.visible')

        // })
        
        // cy.frameLoaded()
        // cy.enter().then(getBody => {
        //     getBody().find('Mobile Money').should('be.visible').click()
        //   })
        cy.frameLoaded()
        // cy.enter().then(getBody => {
        //     getBody().find('[alt="Mobile Money Icon"]').click({force:true})
        //   })

        cy.iframe().contains('Mobile Money').should('be.visible')
          

    })

})