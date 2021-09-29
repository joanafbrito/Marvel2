// to start the test run npx cypress open into your terminal
describe('Home page', () => {
    beforeEach(() => {
        cy.pageLoad()
    });

    it('Should have a Header',() => {
        cy.get('.header')
          .should('be.visible')
          .get('.marvel-logo')
          .should('be.visible')
          .get('.home-page-link')
          .should('be.visible')
    });

    it('Should have a Search and all its elements', () => {
        cy.get('.home-page-background-img')
          .should('be.visible')
          .get('.icon-search')
          .should('be.visible')
          .get('.search-bar')
          .should('be.visible')
    });

    it('Should show the character cards', () => {
        cy.get('.all-character')
          .should('be.visible')
    });

    it('Should be able to Search for a character by name', () => {
        cy.get('.search-bar')
          .type('Thor')
          .should('have.value','Thor')
          .type('{enter}')
          .get('img[src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg"]', {timeout:6000})
          .should('be.visible')
    });

    it('Should change to the Character page, when click on the card', () => {
        cy.get('.search-bar')
          .type('Avengers')
          .type('{enter}')
          cy.get('img[src="http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7.jpg"]',{timeout:6000})
          .click()
          .get('.all-character')
          .should('not.exist')
          .get('.character-detail')
          .should('be.visible')
    });

    it('Should be able to navigate back to the Home Page using the Browser arrows', () => {
        cy.get('.search-bar')
          .type('Avengers')
          .type('{enter}')
        cy.get('img[src="http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7.jpg"]',{timeout:6000})
          .click()
          .go('back')
          .get('.all-character')
          .should('be.visible')
          .get('.character-detail')
          .should('not.exist')
    }); 

})