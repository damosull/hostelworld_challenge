class Factoriall {
    getInputBox() {
        return cy.get('input[id="number"]')
    }

    getBtnCalculate() {
        return cy.get('button[id="getFactorial"]')
    }

    getResultParagraph() {
		return cy.get('#resultDiv')
    }
}

export default Factoriall;
