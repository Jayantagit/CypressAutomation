
describe('Fixture Test', function() {

    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('user').then(function(user) {
          // "this" is still the test context object
          this.user = user
        })
      })

   
    
    it('Sign Up', function() {

        cy.visit("https://ineuron-courses.vercel.app/login");

                 
            cy.get('input[name="email1"]').type(this.user.name);
            cy.get('input[name="password1"]').type(this.user.password);
      
            
        
        cy.get('button[type="submit"]').click();

        cy.get('div.navbar-menu-links > button').should("be.visible");

         cy.contains("Manage").realHover();
        cy.wait(1000);
        cy.contains("Manage Courses").click();
        cy.contains("Add New Course ").click({force:true});
        cy.get("#thumbnail").attachFile("back.png");
        
    });
});

