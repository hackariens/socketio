describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://socketio.traefik.me');
    cy.screenshot('first-page');
  })
})