/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    // Visit the base URL or the Sign In page directly
    cy.visit('https://react-redux.realworld.io/'); // Replace '/' with the actual URL path if needed

    // Click on the "Sign In" button in the navigation
    cy.get('a.nav-link[href="#login"]').click();

    // Fill in the email and password fields
    cy.get('input[placeholder="Email"]').type('testuser@example.com');
    cy.get('input[placeholder="Password"]').type('password123');

    // Click the "Sign in" button
    cy.get('button[type="submit"]').click();

    // Assert that the username appears in the navigation menu
    cy.get('.nav-item .nav-link').contains('testuser').should('be.visible'); // Replace 'testuser' with the expected username
  });
});
