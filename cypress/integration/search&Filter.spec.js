/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')
import search from '../classes/search'


describe('search&Filter', () =>{
    
    const searchh = new search()

    it('login', () =>{
        cy.login(mpp.fifthMail,mpp.fifthPassword)
    })

    it('search product1', () =>{
        searchh.searchAddtoCart('Blazer')
        searchh.searchAddtoCart('bag')
    })

    it('filter', () =>{
        cy.get('.select__input-container').click({force:true})
        cy.contains('Fashion, Textiles and Fabrics').click({force:true})
    })
})