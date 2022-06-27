/// <reference types="cypress" />
import {mpp} from '../fixtures/shared/mppdata'

describe('sign up', () =>{
    const serverId = 'w6jtvutj'
    const serverDomain = 'w6jtvutj.mailosaur.net'
    const emailAddress = mpp.mail + serverDomain

    it('click sign up', () =>{
        cy.visit('/login')
        cy.contains('Sign up').click({force:true})
    })

    it('invalid email', () =>{
          cy.get('#email').type(mpp.invalidmail,{force:true})
          cy.get('#Password').type(mpp.password2,{force:true})
          cy.get('[placeholder="**********"]').eq(1).type(mpp.password2,{force:true})
          cy.get('.signup-btn-register').click({force:true})
    })

    it('mismatch password', () =>{
          //mismatch password
          cy.get('#email').clear({force:true}).type(mpp.invalidmail,{force:true})
          cy.get('#Password').clear({force:true}).type(mpp.password2,{force:true})
          cy.get('[placeholder="**********"]').clear({force:true}).eq(1).type(mpp.password1,{force:true})
          cy.get('.signup-btn-register').click({force:true})
    })

    it('clear all fields',() =>{
        //clear all fields
        cy.get('#email').clear({force:true})
        cy.get('#Password').clear({force:true})
        cy.get('[placeholder="**********"]').clear({force:true})
    })

    it('sign up with correct credentials', () =>{
        cy.get('#email').type(emailAddress,{force:true})
        cy.get('#Password').type(mpp.password2,{force:true})
        cy.get('[placeholder="**********"]').eq(1).type(mpp.password2,{force:true})
        cy.get('.signup-btn-register').click({force:true})
    })

    it('email verification with mailosaur', () =>{     
       
        cy.get('.custom-ui > div > button').click({force:true})
        cy.url().should('include','confirm-account')
        cy.mailosaurGetMessage(serverId, {
            sentTo: emailAddress
        }).then(async (email) =>{
            cy.log(email.subject)
            expect(email.subject).to.equal('Account activation')

      const getEmail = await email
      const VerificationCode = getEmail.html.codes[0].value
      const splitVerificationCodes = VerificationCode.split('')

      //asserting that resend code is disabled
    cy.get('.resend-button').should('be.disabled')

    //type code

    //   for (let i = 0; i < splitVerificationCodes.length; i++) {
    //     cy.get('#code' + (i + 1)).type(splitVerificationCodes[i])
    //     }

        cy.get('#one').type(splitVerificationCodes[0],{force:true})
        cy.get('#two').type(splitVerificationCodes[1],{force:true})
        cy.get('#three').type(splitVerificationCodes[2],{force:true})
        cy.get('#four').type(splitVerificationCodes[3],{force:true})

        cy.get('.confirm-button').click({force:true})
        cy.url().should('eq','https://staging.d3o0f92tyu6euq.amplifyapp.com/login')
        })
    })
    
})

