/// <reference types="cypress" />
import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
let url, myValue, myExpectedAnswer

// GET SCENARIO
Given("I have access to the Factorial API", () => {
    url = `${Cypress.env('url')}factorial`
});

When("I send a GET request to the Factorial API", () => {
    cy.request(url).as('page')
});

Then("verify the response contains the expected values", () => {
    cy.get('@page').should((response) => {
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq("OK");
        expect(response.isOkStatusCode).to.eq(true);
        expect(response.headers.server).to.eq("PythonAnywhere");
        expect(response.body.toString().includes("The greatest factorial calculator!")).to.be.true;
    })
});

// POST SCENARIO
When('I send a POST request to the Factorial API', (userInputs) => {
    userInputs.hashes().forEach((userInput) => {
        myValue = userInput.value
        myExpectedAnswer = userInput.expectedAnswer
    });
});

Then("verify the response received contains the expected values", () => {
    cy.request('POST', `${Cypress.env('url')}factorial`, { number: myValue }).then(
        (response) => {
            expect(response.body).to.have.property('answer', myExpectedAnswer)
        }
    )
});