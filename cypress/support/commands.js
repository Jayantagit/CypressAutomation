// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('SelectValueFromList', function(locator,search) {
    cy.xpath(locator)
    .each((ele)=>
    {
          // ele is a wrapped jQuery element
        cy.log(ele.text());

        if(ele.text().includes(search))
        { 
               // wrap this element so we can
            // use cypress commands on it
            cy.wrap(ele).click({force:true});
        }
       
    });
  })