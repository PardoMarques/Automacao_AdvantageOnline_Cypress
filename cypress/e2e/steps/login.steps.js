import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../support/pages/login.page.js';
import { ellogin } from '../../support/locators/login.locator.js';
import { usuario } from "../../support/usuarios.js";

When("realizo o login com sucesso", () => {
    cy.log(usuario.firstName);
    cy.log(usuario.loginPassword);
    loginPage.realizarLoginUsuarioNovo(usuario);
});

Then("deve ser exibido no campo do usuário o login dele", () => {
    cy.validarElementoTexto(ellogin.lblUserMenu, usuario.loginName);
});