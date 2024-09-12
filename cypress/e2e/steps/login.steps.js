import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { loginPage } from '../../pages/login.page.js';
import { usuario } from "../../support/usuarios.js";

When("realizo o login com sucesso", () => {
    loginPage.realizarLoginUsuarioNovo(usuario.usuarioEmail, usuario.usuarioNome, usuario.usuarioLogin, usuario.usuarioSenha);
});

Then("deve ser exibido no campo do usuário o login dele", () => {
    loginPage.validarTextoUsuarioNovoLogado();
});