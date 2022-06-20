/// <reference types="cypress" />
describe('Comment on Products' , () =>{
    it('individual login' , () =>{
        cy.login('mine@yopmail.com','mine@yopmail.com')
    })
    
    it('comment of products' , () =>{
        // view product
        cy.get('[alt = "158"]').click()
        cy.contains('V-Neck Top')

        //make a comment
        cy.get('textarea').type('Love this')
        cy.get('[data-testid="SendIcon"]').click({force:true})
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Comment posted sucessfully');
          });

          //making a reply
        //   cy.get('[data-testid= "ReplyIcon"]').first().click()
        //   cy.get('.form > .customer-comment-reply-container > textarea').type("Yes love it")

        //make an edit
        cy.get('[data-testid="EditIcon"]').eq(0).click({force:true})
    })   
    
    })