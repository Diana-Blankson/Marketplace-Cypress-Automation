/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')

describe('Cart Page',() => {
    
    it('individual login' , () =>{

    cy.login(mpp.testoneMail,mpp.testonePassword)

     })


    
    it ('cart page', () => {
        //click on cart icon
        cy.get('[data-testid="ShoppingCartIcon"]').first().click({force:true})

        //button disabled when page is empty
        cy.contains('Checkout').should('be.disabled')

        //view product
        cy.get('[src="/images/mkp_logo.svg"]').click()
        cy.get('[alt = "158"]').click()
        cy.contains('V-Neck Top')

        //add product to cart
        cy.contains('Add to cart').click({force:true})

        //revisit cart page
        cy.get('[data-testid="ShoppingCartIcon"]').first().click({force:true})

        //increase quantity
        cy.get('[data-testid="AddIcon"]').click({force:true})
        cy.get('[type="text"]').should('have.value', 2)
        

        //decrease quantity
        cy.get('[data-testid="RemoveIcon"]').click({force:true})
        cy.get('[type="text"]').should('have.value', 1)

        cy.get('[data-testid="AddIcon"]').click({force:true})
        cy.get('.currency-formater').eq(3).should('have.text','GH₵ 156.80')


        cy.get('div:nth-child(1) > span > .currency-formater').then((total)=>{
            
            const toValue = parseFloat(total[0].innerText.substring('3'))
            console.log(toValue)
            console.log(toValue*2)
            
        })

        cy.get('div:nth-child(3) > span > .currency-formater').then((total)=>{
            
            const tooValue = parseFloat(total[0].innerText.substring('3'))
            console.log(tooValue)
        })

        //unchecking product
        cy.get('[type="checkbox"]').eq(1).uncheck({force:true}) 
        cy.get('[type="checkbox"]').should('not.be.checked',({force:true}))
        cy.wait(2000)

        //delete product
        cy.get('[data-testid="DeleteIcon"]').first().click({force:true})
        cy.contains('Delete').click({force:true})
        cy.contains('Hi there, you have an empty cart, click here to add a product').should('be.visible')

    })


})

