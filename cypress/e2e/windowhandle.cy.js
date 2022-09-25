
describe('Window Handling', function () {



    it('Tab Switching', function () {

        cy.visit("https://ineuron-courses.vercel.app/login");


        cy.get('input[name="email1"]').type("ineuron@ineuron.ai");
        cy.get('input[name="password1"]').type("ineuron");


        cy.get('button[type="submit"]').click();

        cy.get('div.navbar-menu-links > button').should("be.visible");

        cy.contains("Manage").realHover();
        cy.wait(9000);

        // Use cy.invoke('removeAttr', 'target') to get around new tab

        cy.contains("Manage Categories").invoke('removeAttr', 'target').click({ force: true })

        cy.window().then(function (win) {

            cy.contains("Add New Category ").click()
            cy.stub(win, "prompt").returns("TypeScript")
        }


        )

        cy.contains("TypeScript").should("be.visible")


    });
});