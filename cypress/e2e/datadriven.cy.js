import user from '../fixtures/user.json'
import LoginPage from '../support/Pages/LoginPage.js'

describe('Fixture Test', function() {

    before(function () {
        cy.visit("https://ineuron-courses.vercel.app/login");
       
    })
    LoginPage.doLogin();
    it('Sign Up', function() {

        cy.fixture('user').then((testdata)=> {
           
            cy.get('input[name="email1"]').type(testdata.name);
            cy.get('input[name="password1"]').type(testdata.password);
        })
            
        
        cy.get('button[type="submit"]').click();

        cy.get('div.navbar-menu-links > button').should("be.visible");

         cy.contains("Manage").realHover();
        cy.wait(1000);
        cy.contains("Manage Courses").click();
        cy.contains("Add New Course ").click({force:true});
        cy.get("#thumbnail").attachFile("back.png");
        
    });
});

