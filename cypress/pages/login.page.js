import UserRequest from '../../requests/user.request';
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

    realizarLogin(usuario) {
        this.clicarIconeLogin();
        this.preencherUsuario(usuario.loginName);
        this.preencherSenha(usuario.loginPassword);
        this.clicarBotaoLogin();
    }

    realizarLoginUsuarioNovo(usuario) {
        UserRequest.userPostCadastrarUsuario(usuario);
        this.realizarLogin(usuario);
    }

}

export const loginPage = new LoginPage();