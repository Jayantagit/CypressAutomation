describe('Autosuggestion', () => {
    it('Google Auto Suggestion', () => {

        cy.visit("https://www.google.com/");

        cy.get("input[name='q']").type("mukesh otwani",{delay:100});


        //Iterate over an array of DOM elements
        cy.SelectValueFromList("//div[@role='option']/div[1]//span","cypress");

             
        
        
        
    });
});