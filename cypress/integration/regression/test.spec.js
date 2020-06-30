require('cypress-xpath')


describe('Unit test our math functions', () => {
    context('math', () => {
      it('it should visit hobsons home page', () => {
        cy.visit('http://hobsons.com', { timeout: 10000 });
        cy.get('title').should('have.text', 'Education Advances | Hobsons');
      })

      it('it should click on intersect tile', () => {
        cy.visit('http://hobsons.com', { timeout: 18000 });
        cy.xpath('//*[@id="body"]/section/div/div[2]/a[2]').click({ force: true });
        cy.get('title').should('have.text', 'Intersect | Hobsons');
      })

      it('it should scroll down to the U.S map', () => {
        cy.visit('http://hobsons.com', { timeout: 18000 });
        cy.xpath('//*[@id="body"]/section/div/div[2]/a[2]').click({ force: true });
        cy.get('title').should('have.text', 'Intersect | Hobsons');
        cy.get('.block-stats-map__map').scrollIntoView(); 
      })
     
      it('it should select differrent states and regions', () => {
        cy.visit('http://hobsons.com', { timeout: 18000 });
        cy.xpath('//*[@id="body"]/section/div/div[2]/a[2]').click({ force: true });
        cy.get('title').should('have.text', 'Intersect | Hobsons');
        cy.get('.block-stats-map__map').scrollIntoView();
      
        cy.get('.block-stats-map__state-dropdown').select('NE,MO,KS,IA,OK');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '26% to 50% of Students');
      
        cy.get('.block-stats-map__state-dropdown').select('VT');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '60% of Students');

        cy.get('.block-stats-map__state-dropdown').select('MD,DE');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '81% to 90% of Students');

        cy.get('.block-stats-map__state-dropdown').select('LA,AL,MS');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '11% to 25% of Students\n');

        cy.get('.block-stats-map__state-dropdown').select('WY,ID,MT,UT,NV');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '11% to 25% of Students');

        cy.get('.block-stats-map__state-dropdown').select('AK');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', 'Less than 10% of Students');

        cy.get('.block-stats-map__state-dropdown').select('OR,WA');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '26% to 50% of Students');

        cy.get('.block-stats-map__state-dropdown').select('AZ,NM');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '26% to 50% of Students');

        cy.get('.block-stats-map__state-dropdown').select('MI,WI');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '11% to 25% of Students');

        cy.get('.block-stats-map__state-dropdown').select('NJ');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '90% of Students');

        cy.get('.block-stats-map__state-dropdown').select('TN,KY,WV');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '11% to 25% of Students');

        cy.get('.block-stats-map__state-dropdown').select('CA');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '45% of Students');

        cy.get('.block-stats-map__state-dropdown').select('AR');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '50% of Students');

        cy.get('.block-stats-map__state-dropdown').select('NC,SC,GA,FL');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '26% to 50% of Students');

        cy.get('.block-stats-map__state-dropdown').select('CO');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '80% of Students');

        cy.get('.block-stats-map__state-dropdown').select('CT');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '95% of Students');

        cy.get('.block-stats-map__state-dropdown').select('ND,SD');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', 'Less than 10% of Students');

        cy.get('.block-stats-map__state-dropdown').select('HI');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '40% of Students');

        cy.get('.block-stats-map__state-dropdown').select('IL');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '65% of Students');

        cy.get('.block-stats-map__state-dropdown').select('IN');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '55% of Students');

        cy.get('.block-stats-map__state-dropdown').select('ME');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '55% of Students');

        cy.get('.block-stats-map__state-dropdown').select('MA');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '90% of Students');

        cy.get('.block-stats-map__state-dropdown').select('MN');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '50% of Students');

        cy.get('.block-stats-map__state-dropdown').select('NH');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '70% of Students');

        cy.get('.block-stats-map__state-dropdown').select('NY');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '75% of Students');

        cy.get('.block-stats-map__state-dropdown').select('OH');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '55% of Students');

        cy.get('.block-stats-map__state-dropdown').select('PA');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '60% of Students');

        cy.get('.block-stats-map__state-dropdown').select('RI');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '50% of Students');

        cy.get('.block-stats-map__state-dropdown').select('TX');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '40% of Students');

        cy.get('.block-stats-map__state-dropdown').select('VA');
        cy.get('.block-stats-map__mobile-popup-text').should('have.text', '50% of Students');

    
      })
     
     
    })
  })