export default class Signup{
    fillSignup(email,password1,password2){

        cy.get('#email').clear({force:true}).type(email,{force:true})
        cy.get('#Password').clear({force:true}).type(password1,{force:true})
        cy.get('[placeholder="**********"]').clear({force:true}).eq(1).type(password2,{force:true})
        cy.get('.signup-btn-register').click({force:true})
    }

}