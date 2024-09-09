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

// Adicionar o comando customizado `esperarConterTexto`
Cypress.Commands.add('esperarConterTexto', (selector, text) => {
    cy.waitUntil(() => {
        return cy.get(selector).then(($el) => {
        return $el.text().includes(text);
    });
    }, {
        timeout: 10000, // Tempo máximo de espera (10 segundos)
        interval: 500,  // Intervalo entre as tentativas (0.5 segundos)
    });
});

// Adicionar o comando customizado `esperarConterTexto`
Cypress.Commands.add('esperarPaginaConterTexto', (text) => {
    cy.waitUntil(() => {
        return cy.get('body').then(($el) => {
        return $el.text().includes(text);
    });
    }, {
        timeout: 10000, // Tempo máximo de espera (10 segundos)
        interval: 500,  // Intervalo entre as tentativas (0.5 segundos)
    });
});

// Adicionar o comando customizado `esperarConterElemento`
Cypress.Commands.add('esperarPaginaConterElemento', (selector) => {
    cy.waitUntil(() => {
        return cy.get('body').then(($body) => {
            return $body.find(selector).length > 0;
        });
    }, {
        timeout: 10000, // Tempo máximo de espera (10 segundos)
        interval: 500,  // Intervalo entre as tentativas (0.5 segundos)
    });
});

// Adicionar o comando customizado `clicarEEsperarTexto` reutilizando `esperarConterTexto`
Cypress.Commands.add('clicarElementoEsperarValidarTexto', (elementoA, elementoB, texto) => {
    cy.get(elementoA).click();
    cy.esperarConterTexto(elementoB, texto);
});

// Adicionar o comando customizado `clicarEEsperarTexto` reutilizando `esperarPaginaConterElemento`
Cypress.Commands.add('clicarElementoEsperarAparecerElemento', (elementoA, elementoB) => {
    cy.get(elementoA).click();
    cy.esperarPaginaConterElemento(elementoB);
});