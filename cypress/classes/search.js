export default class search{

    searchAddtoCart(product,productName){
         cy.get('[placeholder="Search products"]').clear({force:true}).type(product,{force:true})
         cy.wait(2000)
    }
}