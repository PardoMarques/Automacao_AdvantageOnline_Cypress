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

    validarTextoUsuarioLogado(textoValidado){
        cy.esperarConterTexto(this.lblUserMenu, textoValidado);
        cy.validarTexto(this.lblUserMenu, textoValidado);
    }

    restPOST_CadastrarLogin(email, firstName, loginName, password){
        cy.fixture('login.json').then((jsonBody) => {
            // Arrange
            jsonBody.email = email;
            jsonBody.firstName = firstName;
            jsonBody.loginName = loginName;
            jsonBody.password = password;

            // Act
            cy.request({
                method: 'POST',
                url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register',
                headers: { 'content-type': 'application/json' },
                body: jsonBody
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }

    realizarLoginUsuarioNovo() {
        this.restPOST_CadastrarLogin(this.usuarioEmail, this.usuarioNome, this.usuarioLogin, this.usuarioSenha);
        this.realizarLogin(this.usuarioLogin, this.usuarioSenha);
    }

    validarTextoUsuarioNovoLogado(){
        this.validarTextoUsuarioLogado(this.usuarioLogin);
    }

}

export const loginPage = new LoginPage();