import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { homePage } from '../../pages/home.page.js';
import { loginPage } from '../../pages/login.page.js';

When("realizo o login com sucesso", () => {
    loginPage.realizarLogin('Teste2024','Testes@123');
});

Then("deve ser exibido no campo do usuário o nome {string}", (textoValidar) => {
    loginPage.validarTextoUsuarioLogado(textoValidar);
});
