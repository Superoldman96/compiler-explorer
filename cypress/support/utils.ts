import '../../static/global';

export function stubConsoleOutput(win: Cypress.AUTWindow) {
    cy.stub(win.console, 'log').as('consoleLog');
    cy.stub(win.console, 'warn').as('consoleWarn');
    cy.stub(win.console, 'error').as('consoleError');
}

export function assertNoConsoleOutput() {
    cy.get('@consoleLog').should('not.be.called');
    cy.get('@consoleWarn').should('not.be.called');
    cy.get('@consoleError').should('not.be.called');
}
