export default class search{

    searchAddtoCart(product,productName){

         cy.get('#search').clear({force:true}).type(product,{force:true})
         cy.wait(2000)
         cy.contains(productName).should('be.visible')
         cy.get('[data-testid="ShoppingCartIcon"]').eq(1).click({force:true})
    }
}