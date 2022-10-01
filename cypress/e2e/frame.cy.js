
describe("Frame Handling", () => {
    it('Plugin', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");


        cy.frameLoaded().iframe().clear().type("Cypress")




    })

    it.only('Frame-Dbl Click', () => {

        cy.visit("https://api.jquery.com/dblclick/");


        cy.frameLoaded("iframe").iframe().contains("Double click the block")
            .siblings().eq(0).dblclick()
            .should("have.class", "dbl");




    })




});



