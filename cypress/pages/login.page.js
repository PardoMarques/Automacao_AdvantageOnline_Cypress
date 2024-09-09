import HomePage from './home.page';

class LoginPage extends HomePage {

    constructor() {
        super();
        
        this.inptUser = `[name="username"]`;
        this.inptPassword = `[name="password"]`;
        this.btnLogin = `#sign_in_btn`;
        this.lblUserMenu = `#menuUserLink [data-ng-show="userCookie.response"]`;

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

    validarTextoUsuarioLogado(textoValidacao){
        cy.esperarConterTexto(this.lblUserMenu, textoValidacao);
        cy.validarTexto(this.lblUserMenu, textoValidacao);
    }

}

export const loginPage = new LoginPage();