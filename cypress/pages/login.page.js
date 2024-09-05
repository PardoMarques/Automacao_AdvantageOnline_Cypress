import BasePage from './base.page';

class LoginPage extends BasePage {

    constructor() {
        super();
        
        this.iconLogin = `[data-ng-click="login('loginMiniTitle')"]`;
        this.inptUsuario = `[name="username"]`;
        this.inptSenha = `[name="password"]`;
        this.btnLogin = `#sign_in_btn`;
        this.lblMenuUsuario = `#menuUserLink [data-ng-show="userCookie.response"]`;

    }

    clicarNoIconeLogin(){
        cy.get(this.iconLogin).click();
    }

    digitarUsuario(userName) {
        cy.get(this.inptUsuario).type(userName);
    }

    digitarSenha(password) {
        cy.get(this.inptSenha).type(password);
    }

    confirmarLogin() {
        cy.get(this.btnLogin).click();
    }

    realizarLogin(userName, password) {
        this.clicarNoIconeLogin();
        this.digitarUsuario(userName);
        this.digitarSenha(password);
        this.confirmarLogin();
    }

    validarTextoUsuarioLogado(textoValidacao){
        cy.esperarTexto(this.lblMenuUsuario, textoValidacao);
        cy.validarTexto(this.lblMenuUsuario, textoValidacao);
    }

}

export const loginPage = new LoginPage();