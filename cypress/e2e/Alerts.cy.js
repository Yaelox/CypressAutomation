/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe('Alerts', () => { 

    it("JS Alerts",()=>{

        //1.- JavaScript Alert: It will have some text and an "OK" button

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })

        //alert window automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    //2.- JavaScript Confirm Alert: It will have some text and an "OK" and "Cancel" buttons

    it('Js  Confirm Alert -OK',()=>{
            
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        //cypress automatically closed alert window by using ok button-default
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('Js  Confirm Alert - Cancel',()=>{
            
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onClick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        cy.on('window:confirm',()=> false); //cupress close alert window using cancel button

        //cypress automatically closed alert window by using ok button-default
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //3.- JavaScript Prompt Alert: It will have some text with a text box for user input along with "OK"

    it('Js Prompt Alert - OK',()=>{
            
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onClick='jsPrompt()']").click();

        //cypress automatically close prompt alert- it will use OK button - by defualt
        //cy.on('window:prompt',()=> false);

        cy.get("#result").should('have.text',"You entered: welcome");
    })

    //4.- authenticated Alert

    it.only('Authenticated Alert',()=>{

        //aprpraoch1
        /* cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
            {
                username:"admin", 
                password:"admin"
            }
        });
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")


        */
        cy.visit(" https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    })
})