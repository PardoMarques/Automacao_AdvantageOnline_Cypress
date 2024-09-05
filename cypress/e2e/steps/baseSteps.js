import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { basePage } from '../../pages/base.page.js';

Given("que acesso a página do Advantage Online Shopping", () => {
    basePage.acessarAdvantageOnline();
});

Then("a página inicial deve conter as categorias", () => {
    cy.contains('#speakersTxt', 'SPEAKERS')
    cy.contains('#tabletsTxt', 'TABLETS');
    cy.contains('#laptopsTxt', 'LAPTOPS');
    cy.contains('#miceTxt', 'MICE');
    cy.contains('#headphonesTxt', 'HEADPHONES');
});

And("deve ser exibido o texto {string}", (textoValidar) => {
    cy.esperarPaginaConterTexto(textoValidar);
});
