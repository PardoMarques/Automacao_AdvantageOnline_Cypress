import BasePage from './base.page';

class LoginPage extends BasePage {

    constructor() {
        super();
        
        this.inptUser = `[name="username"]`;
        this.inptPassword = `[name="password"]`;
        this.btnLogin = `#sign_in_btn`;
        this.lblUserMenu = `#menuUserLink [data-ng-show="userCookie.response"]`;

    }

    digitarUsuario(userName) {
        cy.get(this.inptUser).type(userName);
    }

    digitarSenha(password) {
        cy.get(this.inptPassword).type(password);
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
        cy.esperarConterTexto(this.lblUserMenu, textoValidacao);
        cy.validarTexto(this.lblUserMenu, textoValidacao);
    }

}

export const loginPage = new LoginPage();