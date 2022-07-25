/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')
import Signup from '../classes/signUp'


describe('sign up', () =>{
    const serverId = 'p6v877nj'
    const serverDomain = 'p6v877nj.mailosaur.net'
    const emailAddress = mpp.mail + serverDomain

    const serverId1 = '2w2igkoy'
    const serverDomain2 = '2w2igkoy.mailosaur.net'
    const emailAddress2 = mpp.mail + serverDomain2
    

    const signup = new Signup()

    it('click sign up', () =>{
        cy.visit('/login')
        cy.contains('Sign up').click({force:true})
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


        cy.get('#one').type(splitVerificationCodes[0],{force:true})
        cy.get('#two').type(splitVerificationCodes[1],{force:true})
        cy.get('#three').type(splitVerificationCodes[2],{force:true})
        cy.get('#four').type(splitVerificationCodes[3],{force:true})

        cy.get('.confirm-button').click({force:true})
        cy.url().should('eq','https://staging.d3o0f92tyu6euq.amplifyapp.com/login')
        })

        
    })

    it('forgot password with mailosaur' , () =>{
        cy.contains('Forgot Password').click({force:true})
        cy.url().should('eq','https://staging.d3o0f92tyu6euq.amplifyapp.com/forgot-password')
        cy.get('#reset_password').clear({force:true}).type(emailAddress,{force:true})
        cy.get('.form_submit_btn')

        // reset password with mailosaur
        cy.mailosaurGetMessage(serverId1, {
            sentTo: emailAddress2
        }).then(async (email) =>{
            cy.log(email.subject)
            //expect(emaill.subject).to.equal('Password forgotten')

      const getEmail = await email
      const VerificationCode = getEmail.html.codes[0].value
      //const splitVerificationCodes = VerificationCode.split('')


        cy.get('[placeholder="Enter pin"]').type(VerificationCode,{force:true})
        // cy.get('#two').type(splitVerificationCodes[1],{force:true})
        // cy.get('#three').type(splitVerificationCodes[2],{force:true})
        // cy.get('#four').type(splitVerificationCodes[3],{force:true})

        cy.get('.form_submit_btn').click({force:true})
        //cy.url().should('eq','https://staging.d3o0f92tyu6euq.amplifyapp.com/login')
        })

    })
    
    
})
