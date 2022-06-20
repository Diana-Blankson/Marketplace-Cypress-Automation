/// <reference types="cypress" />
describe('Post product',()=>{
beforeEach(()=>{
    Cypress.Cookies.preserveOnce('authToken')
})
after(()=>{
    cy.clearCookie('authToken')
})
it('business login' , () =>{
    cy.visit("http://localhost:3000/")
    cy.get('.loginButton').click({force:true})
    cy.url().should('eq','http://localhost:3000/login')
    cy.get('#email').type('peacegroup29@gmail.com',{force:true})
    cy.get('#password').type('peacegroup29@gmail.com',{force:true})
    cy.get('.form_submit_btn').click({force:true})
})

it('add product' , () =>{
    cy.get('.add-product-button').eq(0).click()
})

it('post product image' , () =>{
    const imagefile = "Web capture_25-4-2022_145326_.jpeg";
    cy.contains('click here')
    .attachFile(imagefile, { subjectType: 'drag-n-drop' });
    cy.contains('click here')
    .attachFile(imagefile, { subjectType: 'drag-n-drop' });
    cy.contains('click here')
    .attachFile(imagefile, { subjectType: 'drag-n-drop' });  
})

it('product information',() =>{
    cy.get('.product-name-input').type('Hairy cardigan sweater',{force:true})
    cy.get('.product-price-input').type('100',{force:true})
    cy.get('#demo-simple-select').click({force: true}).then(()=>{
        cy.contains('Fashion, Textiles and Fabrics').click({force: true}) })
    cy.get('[placeholder = "Add discount?"]').type('5',{force:true})
    cy.get('[placeholder = "Product-description"]').type('Available as seen',{force:true})
   // cy.get('.d-flex add-product-type flex-column w-100').children().first().children().eq(1).click({force:true})
    cy.get('.add-product-type > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select')
    .click({force:true})
    cy.get('.MuiList-root > [tabindex="0"]').click({force:true})
    cy.contains('Product').click({force:true},{multiple:true})
    cy.get('.add-product-button').click({force:true})
})
})