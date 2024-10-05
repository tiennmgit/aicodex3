describe('Navigation Testing', () => {
    it('should navigate to the kinh-doanh page', () => {
        cy.visit('https://vnexpress.net/'); // Change this to your application's URL

        // Assuming there's a link with text 'About' that navigates to the about page
        cy.get('a[title="Kinh doanh"]').click();

        // Verify that the URL is correct
        cy.url().should('include', '/kinh-doanh');

        // Verify that the about page contains specific content
        cy.contains('Kinh doanh');
    });

});