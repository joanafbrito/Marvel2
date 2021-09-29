// to start the test run npx cypress open into your terminal
describe('The Character details page', () => {
    beforeEach(()=> {
        cy.pageLoad()
    });

    it('Should contain the information of the Selected Character', () => {
        cy.get('.search-bar')
          .type('Thor')
          .type('{enter}')
        cy.get('img[src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg"]',{timeout:6000})
          .click()
          .get('.character-detail')
          .should('be.visible')
          .get('.search-form')
          .should('not.exist')
          .get('.text-info')
          .contains('God of thunder and lightning')
          .get('img[src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg"]')
          .should('be.visible')
          .get('.series-container')
          .should('be.visible')
    });

    it('Should display the Characters link to go back to the home page option', () => {
        cy.get('.home-page-link')
          .contains('Characters')
    });

    it('Should be able to click and go Back to the Home Page', () => {
        cy.get('.home-page-link')
          .click()
          .get('.character-detail')
          .should('not.exist')
          .get('.search-form')
          .should('be.visible')
    });

    it('Should be able to navigate forward to the Character Page using the Browser arrows', () => {
        cy.get('.home-page-link')
          .click()
          .get('.search-bar')
          .type('Avengers')
          .type('{enter}')
        cy.get('img[src="http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7.jpg"]',{timeout:6000})
          .click()
          .get('.character-detail')
          .should('be.visible')
          .get('.search-form')
          .should('not.exist')
          .go('back')
          .get('.character-detail')
          .should('not.exist')
          .go('forward')
          .get('.character-detail')
          .should('be.visible')
          
    });
})