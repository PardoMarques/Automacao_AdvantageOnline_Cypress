import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { homePage } from '../../pages/home.page.js';
import { productPage } from '../../pages/product.page.js';

When("clico no botão ADD TO CART", () => {
    productPage.clicarBotaoAdicionarAoCarrinho();
});

Then("devo ser redirecionado para a página de detalhes do produto {string}", (textoProduto) => {
    cy.validarElementoTexto(productPage.lblItemName, textoProduto);
});

Then("deve estar disponível o botão ADD TO CART", () => {
    cy.validarElementoTexto(productPage.btnAddToCart, "ADD TO CART");
});

Then("deve ser informado no PopUp do carrinho o total igual a {string}", (valorEsperado) => {
    cy.validarElementoTexto(productPage.lblPopUpCartTotalPrice, valorEsperado);
});