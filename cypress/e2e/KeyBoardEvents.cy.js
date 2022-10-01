
describe("KeyBoard Event", () => {
    it('iNeuron Enter Key', function () {

        cy.visit("https://ineuron-courses.vercel.app/login");


        cy.get("#email1").type("jayanta@gmail.com")
        cy.get("#password1").type("jayanta{enter}")




    })




});



