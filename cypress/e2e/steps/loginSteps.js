import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { basePage } from '../../pages/base.page.js';
import { loginPage } from '../../pages/login.page.js';

When("realizo o login com sucesso", () => {
    loginPage.realizarLogin('Teste0509','Teste@123');
});

Then("deve ser exibido no campo do usuário o nome {string}", (textoValidar) => {
    loginPage.validarTextoUsuarioLogado(textoValidar);
});



