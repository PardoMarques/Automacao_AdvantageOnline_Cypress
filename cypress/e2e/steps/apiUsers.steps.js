import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { homePage } from '../../pages/home.page.js';

Given("que acesso a página do Advantage Online Shopping", () => {
    homePage.acessarAdvantageOnline();
});

When("realizo a pesquisa {string}", (textoProduto) => {
    homePage.clicarIconePesquisar();
    homePage.preencherPesquisar(textoProduto);
});

When("acesso página da categoria {string}", (textoCategoria) => {
    homePage.selecionarUmaCategoria(textoCategoria);
});


Then("deve ser visível no cabeçalho o campo de pesquisa", () => {
});