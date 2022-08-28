///<reference types="Cypress"/>

describe('Test Suite', function() {
    it('Verify Test', function(){

        cy.visit("https://ineuron.ai/");
        cy.title().should("contain","iNeuron");
        
        
    });

    it('URL Validatiob', function(){

        cy.url().should("contain","ineuron");
        
    });

  });