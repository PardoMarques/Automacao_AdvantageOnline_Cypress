import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { homePage } from '../../support/pages/home.page.js';
import { productPage } from '../../support/pages/product.page.js';
import { cartPage } from '../../support/pages/cart.page.js';
import { paymentPage } from '../../support/pages/payment.page.js';
import { elprod } from '../../support/locators/product.locator.js';
import { elpaym } from '../../support/locators/payment.locator.js';

Given("adiciono ao carrinho o produto {string}", (textoProduto) => {
    homePage.clicarIconePesquisar();
    homePage.preencherPesquisar(textoProduto);
    homePage.clicarLinkUnicoResultado(textoProduto);
    cy.validarElementoTexto(elprod.btnAddToCart, "ADD TO CART");
    productPage.clicarBotaoAdicionarAoCarrinho();
});

When("acesso a página de pagamento", () => {
    cartPage.clicarBotaoCheckout();
});

Then("deve ser exibido título, login, cadastro e sumário de compra", () => {
    cy.wait(3000);
    cy.validarElementoTexto(elpaym.lblTitle, "ORDER PAYMENT");
    cy.validarElementoTexto(elpaym.lblDescLogin, "Already have an account?");
    cy.validarElementoTexto(elpaym.lblDescRegistration, "Create your account to track your order");
    cy.validarElementoTexto(elpaym.lblDescOrderSummary, "ORDER SUMMARY");
});

Then("deve ser exibido na tela de pagamento o item adicionado ao carrinho", () => {

});

Then("deve ser exibido corretamente a quantidade e o preço do item", () => {

});
