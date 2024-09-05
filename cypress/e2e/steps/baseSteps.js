import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { basePage } from '../../pages/base.page.js';

Given("que acesso a página do Advantage Online Shopping", () => {
    basePage.acessarAdvantageOnline();
});

Then("deve ser exibido o texto {string}", (textoValidar) => {
    cy.contains(textoValidar).should('be.visible');
});
