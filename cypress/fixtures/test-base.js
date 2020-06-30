var baseURL = 'http://hobsons.com';

export function visitBaseURL() {
    cy.visit(baseURL, { timeout: 20000 });

};