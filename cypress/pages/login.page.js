import BaseRequest from '../requests/base.request';
import { HomePage } from './home.page';

class LoginPage extends HomePage {

    constructor() {
        super();
        
        this.inptUser = `[name="username"]`;
        this.inptPassword = `[name="password"]`;
        this.btnLogin = `#sign_in_btn`;
        this.lblUserMenu = `nav a#menuUserLink span`;

    }

    preencherUsuario(userName) {
        cy.get(this.inptUser).type(userName);
    }

    preencherSenha(password) {
        cy.get(this.inptPassword).type(password);
    }

    clicarBotaoLogin() {
        cy.get(this.btnLogin).click();
    }

    realizarLogin(userName, password) {
        this.clicarIconeLogin();
        this.preencherUsuario(userName);
        this.preencherSenha(password);
        this.clicarBotaoLogin();
    }

    realizarLoginUsuarioNovo(usuarioEmail, usuarioNome, usuarioLogin, usuarioSenha) {
        BaseRequest.userPostCadastrarUsuario(usuarioEmail, usuarioNome, usuarioLogin, usuarioSenha);
        this.realizarLogin(usuarioLogin, usuarioSenha);
    }

}

export const loginPage = new LoginPage();