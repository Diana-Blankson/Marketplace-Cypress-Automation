/// <reference types="cypress" />
import {mpp} from '../fixtures/shared/mppdata'

describe('login', () =>{
it('individual login' , () =>{
    // cy.visit("http://localhost:3000/")
    // cy.get('.loginButton').click({force:true})
    // cy.url().should('eq','http://localhost:3000/login')
    // cy.get('#email').type('mine@yopmail.com',{force:true})
    // cy.get('#password').type('mine@yopmail.com',{force:true})
    // cy.get('.form_submit_btn').click({force:true})

    cy.login(mpp.mineMail,mpp.minePassword)
})

it('business login' , () =>{
    // cy.visit("http://localhost:3000/")
    // cy.get('.loginButton').click({force:true})
    // cy.url().should('eq','http://localhost:3000/login')
    // cy.get('#email').type('business5@mail.com',{force:true})
    // cy.get('#password').type('Hello1234!',{force:true})
    // cy.get('.form_submit_btn').click({force:true})

    cy.login(mpp.businessMail,mpp.businessPassword)

})
})