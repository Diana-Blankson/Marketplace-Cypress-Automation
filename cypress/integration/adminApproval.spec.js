/// <reference types="cypress" />
const mpp = require ('../fixtures/shared/mppdata')

describe('admin approval of posted products',() => {
it('login',() =>{

    cy.login(mpp.adminMail,mpp.password1)
})

it('admin approval of posted products', () =>{
    //post request page
    cy.get('[d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"]').click({force:true})
    cy.contains('Post Request').click({force:true})

    //click on image to be approved
    cy.get('[src="https://community-product-media.s3.eu-west-1.amazonaws.com/media/products/Web_capture_25-4-2022_145326__kVaQaq3.jpeg"]').click({force:true})
    cy.contains('Hairy cardigan sweater').should('be.visible')
    cy.get('.btn').click({force:true})

    //assertion 
    cy.contains('Active Businesses').should('be.visible')

    //view posted product
    cy.get('[alt="logo"]').click({multiple:true,force:true})
    cy.get('[src="https://community-product-media.s3.eu-west-1.amazonaws.com/media/products/Web_capture_25-4-2022_145326__kVaQaq3.jpeg"]').click({force:true})

    //remove post
    cy.contains('Remove Post').click({force:true})
    cy.url().should('eq','https://marketplace.amalitech-dev.net/')
    cy.contains('Products').should('be.visible')
})

})