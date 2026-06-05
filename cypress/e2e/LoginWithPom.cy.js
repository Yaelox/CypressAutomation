//import Login from "../PageObjects/LoginPage";
import Login2 from "../PageObjects/LoginPage2";

describe('POM', () => { 

    //General Appraoch
    it.skip('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard');

    })

    //Using POM LOGIN
   it.skip('LoginTest',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin(); 

    })

      //Using POM LOGIN
   it('LoginTest2',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangehrm').then((data)=>{

               const ln=new Login2();
                ln.setUserName(data.username)
                ln.setPassword(data.password)
                ln.clickSubmit();
                ln.verifyLogin(); 

        })
    })

})