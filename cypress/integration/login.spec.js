/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')

describe('login', () =>{
it('individual login' , () =>{

    cy.login(mpp.mineMail,mpp.minePassword)
})

it('business login' , () =>{
    cy.login(mpp.businessMail,mpp.businessPassword)

})
})