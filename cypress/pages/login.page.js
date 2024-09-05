import BasePage from './base.page';

class LoginPage extends BasePage {

    clicarNoIconeLogin(){
        cy.get(`[data-ng-click="login('loginMiniTitle')"]`).click();
    }

    digitarUsuario(userName) {
        cy.get(`[name="username"]`).type(userName);
    }

    digitarSenha(password) {
        cy.get(`[name="password"]`).type(password);
    }

    confirmarLogin() {
        cy.get(`#sign_in_btn`).click();
    }

    realizarLogin(userName, password) {
        this.clicarNoIconeLogin();
        this.digitarUsuario(userName);
        this.digitarSenha(password);
        this.confirmarLogin();
    }

    retornarValorUsuarioLogago(){
        return cy.get(`[data-ng-show="userCookie.response"]`).invoke('text');
    }

}

export const loginPage = new LoginPage();