
describe("API Request", () => {
    it('iNeuron Request', function () {

        cy.visit("https://ineuron-courses.vercel.app")

        cy.request("/login").then(function (res) {
            cy.log(res.status);
            cy.log(res.body);
        })




    });



});