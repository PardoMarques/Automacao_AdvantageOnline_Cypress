import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { cartPage } from '../../pages/cart.page.js';

Then("deve ser exibido os detalhes do carrinho", () => {
    cy.validarElementoTexto(cartPage.lblTitle, "SHOPPING CART (1)");
});