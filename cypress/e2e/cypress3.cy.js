describe('Test Suite', function() {
    it('Test1', function() {

        cy.visit("https://ineuron-courses.vercel.app/login");
        cy.xpath("//input[@name='email1']").type("Jayanta")
        
    });
});