import Utils from "../support/utils";

export class BaseRequest {

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
        this.userPostCadastrarUsuario(email, firstName, loginName, numAleatorio, "ADMIN");
        this.currentToken = this.userPostAutenticarUsuario(email, "Teste@123", loginName);
        console.log('Administrador criado');
    }

    setHeadersAuth() {
        this.headersAuth = { 
            'content-type': 'application/json',
            'authorization': 'Bearer' + getToken()
        }
    }

    getHeadersAuth() {
        return this.headersAuth;
    }

    userPostCadastrarUsuario(email, firstName, loginName, password, userRole = "USER") {
        // Carregar o JSON (simulando o fixture)
        const jsonBody = require('../fixtures/postCadastrarUsuario.json'); // Carregando o arquivo JSON local

        // Modificar o JSON com os parâmetros fornecidos
        jsonBody.accountType = userRole;
        jsonBody.email = email;
        jsonBody.firstName = firstName;
        jsonBody.loginName = loginName;
        jsonBody.password = password;

        // Fazer a requisição HTTP usando fetch
        return fetch(`${this.url}/accountservice/accountrest/api/v1/register`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(jsonBody)
        })
        .then(response => {
            if (!response.ok) { throw new Error('Falha no cadastro de usuário'); }
            return response.json();
        })
        .then(data => {
            console.log('Usuário cadastrado com sucesso:', data);
            return data;
        })
        .catch(error => { console.error('Erro ao cadastrar usuário:', error); });
    }

    userPostCadastrarUsuarioVelho(email, firstName, loginName, password, userRole="USER"){
        cy.fixture('postCadastrarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.accountType = userRole;
            jsonBody.email = email;
            jsonBody.firstName = firstName;
            jsonBody.loginName = loginName;
            jsonBody.password = password;

            // Act
            cy.request({
                method: 'POST',
                url: this.url + '/accountservice/accountrest/api/v1/register',
                headers: this.headers,
                body: jsonBody
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }

    userPostAutenticarUsuario(email, password, loginName){
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
            }).then((response) => {
                expect(response.status).to.eq(200);
                return response.statusMessage.token;
            });
        });
    }
    
    userDeleteApagarUsuario(accountId){
        cy.fixture('deleteApagarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.accountId = accountId;

            // Act
            cy.request({
                method: 'DELETE',
                url: this.url + '/accountservice/accountrest/api/v1/delete',
                headers: { 
                    'content-type': 'application/json',
                    'authorization': 'Bearer' + this.currentToken
                },
                body: jsonBody
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }

}

export const baseRequest = new BaseRequest();