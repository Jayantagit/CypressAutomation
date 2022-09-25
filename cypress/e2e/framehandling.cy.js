describe("Handling Frame", () => 
{
    it('Frame-without Plugin', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get("iframe")
        .its("0.contentDocument")
        .its("body")
        .then(cy.wrap)
        .clear()
        .type("Cypres")
        
        
    });

  
});