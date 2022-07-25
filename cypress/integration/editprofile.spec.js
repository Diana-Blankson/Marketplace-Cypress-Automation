/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')

describe('EditProfile',() =>{
    it('login',() =>{

        cy.login(mpp.testoneMail,mpp.testonePassword)
    })

    it('edit profile Page',() =>{
        cy.get('[aria-label = "Account settings" ]').click()
        cy.contains('Profile').click()
        cy.get('.Edit_profile_btn').click({force:true})

        //enter fields
        cy.get('#name').clear({force:true}).type('Test One',{force:true})
        //cy.get('[name = "birthday"]').type('2010-15-15',{force:true})
        cy.get('[name = "street_address"]').clear({force:true}).type('No 400')
        cy.get('[name="region"]').select('Western',{force:true}).should('have.value', 'Western')
        cy.get('[name="city"]').select('Fijai',{force:true}).should('have.value' , 'Fijai')
        cy.get('[name="phone_number2"]').clear({force:true}).type(mpp.number)
        cy.get('[name="gps_location"]').clear({force:true}).type('WR 150')

        //upload profile image
        const image = "model-in-gold-fashion.jpg"
        cy.get('[type="file"]').selectFile('cypress/fixtures/model-in-gold-fashion.jpg',{force: true})

        cy.get('[type = "submit"]').click({force:true})

        cy.get('.Edit_profile_btn')

    })


})