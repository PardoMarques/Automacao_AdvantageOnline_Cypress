describe('Teste Frontend: Login', () => {

  // beforeEach(() => {
  //   cy.visit('https://advantageonlineshopping.com/');
  //   cy.contains('#speakersTxt', 'SPEAKERS');
  //   cy.contains('#tabletsTxt', 'TABLETS');
  //   cy.contains('#laptopsTxt', 'LAPTOPS');
  //   cy.contains('#miceTxt', 'MICE');
  //   cy.contains('#headphonesTxt', 'HEADPHONES');
  // })

  it('Acessar a página AdvantageDEMO', () => {
    cy.visit('https://advantageonlineshopping.com/');
    cy.contains('#speakersTxt', 'SPEAKERS')
    cy.contains('#tabletsTxt', 'TABLETS');
    cy.contains('#laptopsTxt', 'LAPTOPS');
    cy.contains('#miceTxt', 'MICE');
    cy.contains('#headphonesTxt', 'HEADPHONES');
    cy.contains('#special_offer_items > .roboto-regular', 'SPECIAL OFFER').should('be.visible');
  })

  // it('Deve tentar realizar um login com erro', () => {
  //   cy.login('test@email.com', 't123456este');
  //   cy.intercept('POST', 'https://serverest.dev/login', {statusCode:401}).as('stubPost');
  //   cy.contains('Email e/ou senha inválidos').should('be.visible');
  // })

})