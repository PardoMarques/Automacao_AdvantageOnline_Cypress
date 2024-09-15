import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { usuario } from "../../support/usuarios.js";
import { homePage } from '../../support/pages/home.page.js';
import { productPage } from '../../support/pages/product.page.js';
import { elprod } from '../../support/locators/product.locator.js';

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
    cy.contains(elprod.btnSpeakers, 'SPEAKERS')
    cy.contains(elprod.btnTablets, 'TABLETS');
    cy.contains(elprod.btnLaptops, 'LAPTOPS');
    cy.contains(elprod.btnMice, 'MICE');
    cy.contains(elprod.btnHeadphones, 'HEADPHONES');
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
    cy.esperarPaginaConterElemento(elprod.iconSearch, textoProduto);
    cy.esperarPaginaConterElemento(elprod.iconLogin, textoProduto);
    cy.esperarPaginaConterElemento(elprod.iconCart, textoProduto);
    cy.esperarPaginaConterElemento(elprod.iconHelp, textoProduto);
});