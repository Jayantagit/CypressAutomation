//cy.fixture('registration.json').as('userData')

describe('Registration ', function() {
    it('Create User', function(){

        cy.visit("https://ineuron-courses.vercel.app/login");
      // cy.viewport(1920,1080);
        
       cy.contains("New user? Signup").click();
       cy.contains("Sign up").should("be.disabled");

       
       cy.get("input[name='name']").type("cytest7");
       cy.get("input[name='email']").type("test8@gmail.com");
       cy.get("input[name='password']").type("test123");
       cy.get("input[type='checkbox']").first().click();
       //cy.get("input[type='checkbox']").click(multiple:true)
       cy.xpath("//label[text()='Testing']/preceding-sibling::input").click();

       cy.get("input[name='gender'][value='Male']").click()

       cy.get("select[name='state']").select('Goa');

       cy.get(".submit-btn").click();

       cy.get('input[name="email1"]').type("test8@gmail.com");
       cy.get('input[name="password1"]').type("test123");
       cy.get('button[type="submit"]').click();

       cy.get('div.navbar-menu-links > button').should("be.visible");

        
        
    });

});