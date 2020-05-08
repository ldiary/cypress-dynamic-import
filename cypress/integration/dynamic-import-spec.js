describe('Dynamic import', () => {
    it('works', () => {
        cy.wrap(import('../support/utils'))
            .invoke('reverse', 'Hello')
            .should('equal', 'olleH')
    });
});
