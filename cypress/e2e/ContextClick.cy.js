
describe("Right Click Event", () => {
    it('iNeuron Context Click..', function () {

        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");


        cy.contains("right click me").rightclick()
        cy.wait(1000);
        cy.xpath("//span[text()='Copy']").click({force:true});
       // cy.contains("Copy").click();

        cy.on("window:alert", function (msg) {

            expect(msg).to.be.equal("clicked:copy")
        }



        )




    })




});



