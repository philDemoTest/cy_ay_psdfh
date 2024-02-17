/// <reference types="Cypress" />

describe("Testing of EA App", () => {

    beforeEach("Call for a purticular it block", () => {
        cy.visit("http://www.executeautomation.com/site");
    })

    it("Testing EA Site for assertion", () => {
        //Implicit assertions
        //cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should('have.class','ls-nav-active');

        //Explicit assertions
        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        })
    })
    it("Testing EA Site for assertion with hooks", () => {
        //Explicit assertions
        cy.get("[aria-label='jump to slide 2']",{timeout:60000}).should(($x) => {
            expect($x).to.have.class("ls-nav-active");
        })
    })

})