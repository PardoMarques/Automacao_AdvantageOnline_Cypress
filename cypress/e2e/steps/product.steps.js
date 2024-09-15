import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { homePage } from '../../support/pages/home.page.js';
import { productPage } from '../../support/pages/product.page.js';
import { elprod } from '../../support/locators/product.locator.js';

When("clico no botão ADD TO CART", () => {
    productPage.clicarBotaoAdicionarAoCarrinho();
});

Then("devo ser redirecionado para a página de detalhes do produto {string}", (textoProduto) => {
    cy.validarElementoTexto(elprod.lblItemName, textoProduto);
});

Then("deve estar disponível o botão ADD TO CART", () => {
    cy.validarElementoTexto(elprod.btnAddToCart, "ADD TO CART");
});

Then("deve ser informado no PopUp do carrinho o total igual a {string}", (valorEsperado) => {
    cy.validarElementoTexto(elprod.lblPopUpCartTotalPrice, valorEsperado);
});