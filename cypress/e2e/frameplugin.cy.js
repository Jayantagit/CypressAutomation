describe("Handling Frame", () => 
{
    it('Frame- Plugin', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        cy.iframe('#mce_0_ifr').contains("Your content goes here.").type("Cypress")
        
        
    });

  
});