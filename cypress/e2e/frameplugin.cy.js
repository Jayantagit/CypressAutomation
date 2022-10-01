///<reference types="cypress-iframe" />
describe("Handling Frame", () => 
{
    it('Frame- Plugin', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        cy.iframe('#mce_0_ifr').contains("Your content goes here.").type("Cypress")
        
        
    });

    it.only('Frame- Plugin', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe")
       
        cy.frameLoaded().iframe().clear().type("TypeScript")
        
        
    });

  
});