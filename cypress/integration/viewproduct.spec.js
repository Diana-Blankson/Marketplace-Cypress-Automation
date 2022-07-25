/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')

describe('View Product' , () =>{
it('individual login' , () =>{

    cy.login(mpp.mineMail,mpp.minePassword)

})

it('view product' , () =>{
    cy.get('[alt = "158"]').click()
    cy.contains('V-Neck Top')
    cy.scrollTo('center')
    cy.scrollTo('top')
})
})