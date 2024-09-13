import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { homePage } from '../../pages/home.page.js';
import { productPage } from '../../pages/product.page.js';
import { cartPage } from '../../pages/cart.page.js';
import { paymentPage } from '../../pages/payment.page.js';

Given("adiciono ao carrinho o produto {string}", (textoProduto) => {
    homePage.clicarIconePesquisar();
    homePage.preencherPesquisar(textoProduto);
    homePage.clicarLinkUnicoResultado();
    cy.validarElementoTexto(productPage.btnAddToCart, "ADD TO CART");
    productPage.clicarBotaoAdicionarAoCarrinho();
});

When("acesso a página de pagamento", () => {
    cartPage.clicarBotaoCheckout();
});

Then("deve ser exibido título, login, cadastro e sumário de compra", () => {
    cy.wait(3000);
    cy.validarElementoTexto(paymentPage.lblTitle, "ORDER PAYMENT");
    cy.validarElementoTexto(paymentPage.lblDescLogin, "Already have an account?");
    cy.validarElementoTexto(paymentPage.lblDescRegistration, "Create your account to track your order");
    cy.validarElementoTexto(paymentPage.lblDescOrderSummary, "ORDER SUMMARY");
});

Then("deve ser exibido na tela de pagamento o item adicionado ao carrinho", () => {

});

Then("deve ser exibido corretamente a quantidade e o preço do item", () => {

});
