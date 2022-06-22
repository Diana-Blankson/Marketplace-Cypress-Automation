/// <reference types="cypress" />
import {mpp} from '../fixtures/shared/mppdata'

describe('EditProfile',() =>{
    it('login',() =>{
        // cy.visit("http://localhost:3000/")
        // cy.get('.loginButton').click({force:true})
        // cy.url().should('eq','http://localhost:3000/login')
        // cy.get('#email').type('testone@yopmail.com',{force:true})
        // cy.get('#password').type('testone@yopmail.com',{force:true})
        // cy.get('.form_submit_btn').click({force:true})

        cy.login(mpp.testoneMail,mpp.testonePassword)
    })

    it('edit profile Page',() =>{
        cy.get('[aria-label = "Account settings" ]').click()
        cy.contains('Profile').click()
        cy.get('.Edit_profile_btn').click({force:true})

        //check email field is disabled
        cy.get('#Email').should('be.disabled')

    })

    it('clear all fields', () =>{
        cy.get('#name').clear({force:true})
        cy.get('[name = "street_address"]').clear({force:true})
        cy.get('#City').clear({force:true})
        cy.get('#Region/State/Province').clear()
        cy.get('phone').clear()
        cy.get('#Digital Address').clear()
    })

    it('retype fields to enter', () =>{
        cy.get('#name').type('Test One',{force:true})
        cy.get('[name = "birthday"]').type('20101515',{force:true})
        cy.get('#Street\ Address').type('No 400')
        cy.get('#City').type()
        cy.get('#Region/State/Province').clear()
        cy.get('phone').type()
        cy.get('#Digital Address').clear()
    })

})