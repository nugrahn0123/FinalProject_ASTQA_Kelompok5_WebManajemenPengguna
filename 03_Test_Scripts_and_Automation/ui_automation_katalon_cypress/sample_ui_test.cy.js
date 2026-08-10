describe('School Web Login Smoke', () => {
  it('should open login page', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.contains('Login').should('exist');
  });

  it('should reject invalid credential', () => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('input[name="email"]').type('invalid@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau password salah').should('exist');
  });
});
