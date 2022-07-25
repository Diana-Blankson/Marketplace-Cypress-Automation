/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')
import Signup from '../classes/signUp'


describe('sign up', () =>{
    const serverId = 'p6v877nj'
    const serverDomain = 'p6v877nj.mailosaur.net'
    const emailAddress = mpp.mail + serverDomain
    const signup = new Signup()

    it('click sign up', () =>{
        cy.visit('/login')
        cy.contains('Sign up').click({force:true})
    })

    it('invalid email', () =>{
        signup.fillSignup(mpp.invalidmail,mpp.password2, mpp.password2)
    })

    it('mismatch password', () =>{
        signup.fillSignup(emailAddress,mpp.password2, mpp.password3)
    })



    it('sign up with correct credentials', () =>{
        signup.fillSignup(emailAddress,mpp.password2, mpp.password2)
        
        
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

