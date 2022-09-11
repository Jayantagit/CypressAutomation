describe('Autosuggestion', () => {
    it('Google Auto Suggestion', () => {

        cy.visit("https://www.google.com/");

        cy.get("input[name='q']").type("mukesh otwani",{delay:100});


        //Iterate over an array of DOM elements

             
        cy.xpath("//div[@role='option']/div[1]//span")
        .each((ele,index,list)=>
        {
              // ele is a wrapped jQuery element
            cy.log(ele.text());

            if(ele.text().includes("cypress"))
            { 
                   // wrap this element so we can
                // use cypress commands on it
                cy.wrap(ele).click({force:true});
            }
           
        });
        
        
    });
});