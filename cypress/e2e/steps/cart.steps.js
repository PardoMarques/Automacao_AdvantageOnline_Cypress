import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { elcart } from '../../support/locators/cart.locator.js';

Then("deve ser exibido os detalhes do carrinho", () => {
    cy.validarElementoTexto(elcart.lblTitle, "SHOPPING CART (1)");
});