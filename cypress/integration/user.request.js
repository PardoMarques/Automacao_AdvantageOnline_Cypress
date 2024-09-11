import { BaseRequest } from "./base.request";

class LoginRequest extends BaseRequest{

    constructor() {

        super();

        this.currentToken;

    }

    gerarToken(){
        var numAleatorio = gerarNumeroAleatorioEntre(10000, 99999);
        var email = numAleatorio + "admin@email.com";
        var firstName = "Senhor";
        var loginName = numAleatorio + "admin";
        userPostCadastrarUsuarioAdmin(email, firstName, loginName, numAleatorio);
    }

    userPostCadastrarUsuario(email, firstName, loginName, password, userRole="USER"){
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
                headers: this.header,
                body: jsonBody
            }).then((response) => {
                expect(response.status).to.eq(200);
                this.currentToken = response.statusMessage.token;
            });
        });
    }
    userPostCadastrarUsuarioAdmin(email, firstName, loginName, password){
        userPostCadastrarUsuario(email, firstName, loginName, password, "ADMIN");
    }

    restPostAutenticarUsuario(email, password, loginName){
        cy.fixture('postAutenticarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.email = email;
            jsonBody.password = password;
            jsonBody.loginName = loginName;

            // Act
            cy.request({
                method: 'POST',
                url: this.url + '/accountservice/accountrest/api/v1/login',
                headers: this.header,
                body: jsonBody
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }
    
    restDeleteApagarUsuario(accountId){
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

export const userRequest = new LoginRequest();