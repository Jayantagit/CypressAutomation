
describe("First API Request", () => {
    it('iNeuron Request-Broken Links', function () {

        cy.visit("https://ineuron-courses.vercel.app/login");


       
        let BrokenLinks = [];

        cy.get("a").each(link => {


            cy.request({ url: link.prop("href"), failOnStatusCode: false }).then(function (res) {
                var status = res.status;
                cy.log(status)
                if (status >= 400) {

                    cy.log("Add to Links Array..", link.prop("href"))
                    BrokenLinks.push(link.prop("href"));
                    // cy.log(BrokenLinks.length)
                }

                cy.log(BrokenLinks.length)
                if (BrokenLinks.length > 0) {
                    BrokenLinks.forEach((val) => {
                        cy.log(val);
                    })
                }

            })



        })







    })




});



