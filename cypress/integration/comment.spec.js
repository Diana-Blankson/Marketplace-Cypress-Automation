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
        cy.get('textarea').type('Love this',{force:true})
        cy.get('[data-testid="SendIcon"]').click({force:true})
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Comment posted sucessfully');
          });


          //making a reply
          //cy.get('[data-testid= "ReplyIcon"]').eq(0).click({force:true})
          //cy.get('[placeholder="Write a reply ..."]').type('Yes i love it')

          //refreshing
          cy.get('[src="/images/mkp_logo.svg"]').click()
          cy.get('[alt = "158"]').click()
          cy.contains('V-Neck Top')

        //make an edit
        cy.get('[data-testid="EditIcon"]').eq(0).click({force:true})
        cy.get('form > .customer-comment-reply-container > textarea').clear().type("Yes I love this")
        cy.get('[data-testid="SendIcon"]').eq(1).click({force:true})

        // delete comment
        //click on no 
        cy.get('[data-testid="DeleteIcon"]').eq(0).click({force:true})
        cy.contains('No').click({force:true})

        //confirm the comment is still there
        cy.get(':nth-child(2) > .chat-container > :nth-child(2) > .customer-comment').eq(0).should('include.text','Yes I love this')

        //click on yes to delte comment
        cy.get('[data-testid="DeleteIcon"]').eq(0).click({force:true})
        cy.get('.btn_actions_container > :nth-child(2)').click({force:true})
        //cy.get(':nth-child(2) > .chat-container > :nth-child(2) > .customer-comment').eq(0).should('not.contain','Yes I love this')


    })   
    
    })