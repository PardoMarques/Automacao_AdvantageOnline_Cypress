import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../pages/login.page.js';

When("realizo o login com sucesso", () => {
    loginPage.realizarLoginUsuarioNovo();
});

Then("deve ser exibido no campo do usuário o login dele", () => {
    loginPage.validarTextoUsuarioNovoLogado();
});