import 'cypress-wait-until';

// Adicionar o comando customizado `validarTexto`
Cypress.Commands.add('validarTexto', (selector, expectedText) => {
    cy.get(selector) // Obtém o elemento
      .should('be.visible') // Verifica se o elemento está visível
      .invoke('text') // Obtém o texto do elemento
      .then((actualText) => { // Confirmar validação
        cy.log('Texto do elemento:', actualText);
        expect(actualText.trim()).to.equal(expectedText); // Valida o texto
    });
});

// Adicionar o comando customizado `esperarTexto`
Cypress.Commands.add('esperarTexto', (selector, text) => {
    cy.waitUntil(() => {
        return cy.get(selector).then(($el) => {
        return $el.text().includes(text);
    });
    }, {
        timeout: 10000, // Tempo máximo de espera (10 segundos)
        interval: 500,  // Intervalo entre as tentativas (0.5 segundos)
    });
});

// Adicionar o comando customizado `esperarClasse`
Cypress.Commands.add('esperarClasse', (selector, className) => {
    cy.waitUntil(() => {
        return cy.get(selector).then(($el) => {
        return $el.hasClass(className);
    });
    }, {
        timeout: 10000,
        interval: 500,
    });
});