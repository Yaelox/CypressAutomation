

describe('CSSLocators', () =>{

    it("cssLocators",() =>{



        cy.visit("http://automationpractice.com/index.php")

        // cy.get("#search_query_top").type("T-Shirts")   //id tag optional
        // cy.get("#search_query_top").type("T-Shirts")  // class tag optional
        // cy.get("[name='search_query']").type("T-Shirts") // atribute tag optional

        cy.get("input.search_query[name='search_query']").type("T-Shirts")

        cy.get("[name='submit_search']").click()

        cy.get(".lighter").contains("T-Shirts") //Assertion

        
    })

})