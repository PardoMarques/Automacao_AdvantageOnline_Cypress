import Utils from "../support/utils";

export default class BaseRequest {

    constructor() {
        
        this.url = 'https://www.advantageonlineshopping.com';
        this.headers = { 'content-type': 'application/json' };
        this.headersAuth;
        this.currentToken;
        this.setToken();
        this.setHeadersAuth();

    }

    getToken() {
        return this.token;
    }

    setToken(){
        var numAleatorio = Utils.gerarNumeroAleatorioEntre(10000, 99999);
        var email = numAleatorio + "admin@email.com";
        var firstName = "Senhor";
        var loginName = numAleatorio + "admin";
        var loginPassword = "Teste@123";
        this.userPostCadastrarUsuario(email, firstName, loginName, numAleatorio, "ADMIN");
        this.currentToken = this.userPostAutenticarUsuario(email, loginPassword, loginName);
        console.log('Administrador criado');
    }

    setHeadersAuth() {
        this.headersAuth = { 
            'content-type': 'application/json',
            'authorization': 'Bearer' + this.getToken()
        }
    }

    getHeadersAuth() {
        return this.headersAuth;
    }

    // .then((response) => {
    //     expect(response.status).to.eq(200);
    //     return response.statusMessage.token;
    // });

    static userPostCadastrarUsuario(email, firstName, loginName, password, userRole = "USER") {
        return cy.fixture('postCadastrarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.accountType = userRole;
            jsonBody.email = email;
            jsonBody.firstName = firstName;
            jsonBody.loginName = loginName;
            jsonBody.password = password;

            // Act
            cy.request({
                method: 'POST',
                url: '/accountservice/accountrest/api/v1/register',
                headers: this.headers,
                body: jsonBody
            })
        });
    }

    static userPostAutenticarUsuario(email, password, loginName){
        cy.fixture('postAutenticarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.email = email;
            jsonBody.password = password;
            jsonBody.loginName = loginName;

            // Act
            cy.request({
                method: 'POST',
                url: this.url + '/accountservice/accountrest/api/v1/login',
                headers: this.headers,
                body: jsonBody
            })
        });
    }
    
    static userDeleteApagarUsuario(accountId){
        cy.fixture('deleteApagarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.accountId = accountId;

            // Act
            cy.request({
                method: 'DELETE',
                url: this.url + '/accountservice/accountrest/api/v1/delete',
                headers: this.getHeadersAuth(),
                body: jsonBody
            })
        });
    }

}