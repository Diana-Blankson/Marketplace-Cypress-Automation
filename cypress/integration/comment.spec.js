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


    })   
    
    })