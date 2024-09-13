import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { usuario } from "../../support/usuarios.js";
import { homePage } from '../../pages/home.page.js';
import { productPage } from '../../pages/product.page.js';

Given("que acesso a página do Advantage Online Shopping como {string}", (tipoUsuario) => {
    if(tipoUsuario == "USER"){
        usuario.gerarNovosDadosDeUsuario();
    }else if(tipoUsuario == "ADMIN"){
        usuario.gerarNovosDadosDeUsuarioAdmin();
        usuario.virarAdministrador();
    }
    homePage.acessarAdvantageOnline();
});

When("clico no ícone do carrinho", () => {
    homePage.clicarIconeCarrinho();
});

When("clico no ícone do ajuda", () => {
    homePage.clicarIconeAjuda();
});

Then("a página inicial deve conter as categorias", () => {
    cy.contains(homePage.btnSpeakers, 'SPEAKERS')
    cy.contains(homePage.btnTablets, 'TABLETS');
    cy.contains(homePage.btnLaptops, 'LAPTOPS');
    cy.contains(homePage.btnMice, 'MICE');
    cy.contains(homePage.btnHeadphones, 'HEADPHONES');
});

And("deve ser exibido o texto {string}", (textoValidar) => {
    cy.esperarPaginaConterTexto(textoValidar);
});

When("realizo a pesquisa {string}", (textoProduto) => {
    homePage.clicarIconePesquisar();
    homePage.preencherPesquisar(textoProduto);
});

When("acesso página da categoria {string}", (textoCategoria) => {
    homePage.selecionarUmaCategoria(textoCategoria);
});

When("clico no único produto {string} disponível nos resultados", (textoProduto) => {
    homePage.clicarLinkUnicoResultado(textoProduto);
});

Then("deve ser exibido um pop-up de produtos com o trecho {string}", (textoValidar) => {
    cy.esperarPaginaConterTexto(textoValidar);
});

Then("deve ser visível no cabeçalho os ícones funcionais", (textoProduto) => {
    cy.esperarPaginaConterElemento(productPage.iconSearch, textoProduto);
    cy.esperarPaginaConterElemento(productPage.iconLogin, textoProduto);
    cy.esperarPaginaConterElemento(productPage.iconCart, textoProduto);
    cy.esperarPaginaConterElemento(productPage.iconHelp, textoProduto);
});