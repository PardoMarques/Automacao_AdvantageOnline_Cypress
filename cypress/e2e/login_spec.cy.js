describe('Teste Frontend: Login', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev');
    cy.contains('.font-robot', 'Login');
  })

  it('Deve tentar realizar um login com sucesso', () => {
    cy.login('fulano@qa.com', 'teste');
    cy.contains('Bem Vindo Fulano da Silva').should('be.visible');
  })

  it('Deve tentar realizar um login com erro', () => {
    cy.login('test@email.com', 't123456este');
    cy.intercept('POST', 'https://serverest.dev/login', {statusCode:401}).as('stubPost');
    cy.contains('Email e/ou senha inválidos').should('be.visible');
  })

})