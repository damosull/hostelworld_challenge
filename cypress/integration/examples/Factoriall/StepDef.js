/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Factoriall from '../../../support/pageObjects/Factoriall'

const factoriall = new Factoriall()
let myValue, myMessage;

Given("the user navigates to the Factoriall calculator screen", () => {
    cy.visit(Cypress.env('url'))
});

When('the user enters a value into the input box', (userInputs) => {
    userInputs.hashes().forEach((userInput) => {
        myValue = userInput.value
        factoriall.getInputBox().type(myValue)
    });
});

When('the user clicks the Calculate button', () => {
    factoriall.getBtnCalculate().click();
});

Then('a message is displayed to the user', (expectedMessages) => {
    expectedMessages.hashes().forEach((expectedMessage) => {
        factoriall.getInputBox().clear();
        myMessage = expectedMessage.message
        factoriall.getResultParagraph().should('have.text', myMessage)
    });
});