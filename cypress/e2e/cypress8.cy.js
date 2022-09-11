describe('"Create Course', () => {
    it('Manage Course', () => {


        cy.visit("https://ineuron-courses.vercel.app/login");
        
        cy.get('input[name="email1"]').type("ineuron@ineuron.ai");
        cy.get('input[name="password1"]').type("ineuron");
        cy.get('button[type="submit"]').click();

        cy.get('div.navbar-menu-links > button').should("be.visible");

        //cy.get("input").realMouseDown();

        cy.contains("Manage").realHover();
        cy.wait(1000);
        cy.contains("Manage Courses").click();
        cy.contains("Add New Course ").click({force:true});
        cy.get("#thumbnail").attachFile("back.png");
        
    });
});