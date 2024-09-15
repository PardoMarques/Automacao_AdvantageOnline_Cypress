import UserRequest from '../../requests/user.request';
import { HomePage } from './home.page';
import { ellogin } from '../../support/locators/login.locator';

class LoginPage extends HomePage {

    preencherUsuario(userName) {
        cy.get(ellogin.inptUser).type(userName);
    }

    preencherSenha(password) {
        cy.get(ellogin.inptPassword).type(password);
    }

    clicarBotaoLogin() {
        cy.get(ellogin.btnLogin).click();
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