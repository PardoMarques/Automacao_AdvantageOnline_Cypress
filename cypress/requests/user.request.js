import Utils from "../support/utils";

export default class UserRequest {

    static gerarToken(){
        var currentToken;
        var numAleatorio = Utils.gerarNumeroAleatorioEntre(10000, 99999);
        var email = numAleatorio + "admin@email.com";
        var firstName = "Senhor";
        var loginName = numAleatorio + "admin";
        var loginPassword = "Teste@123";
        this.userPostCadastrarUsuario(email, firstName, loginName, numAleatorio, "ADMIN");
        currentToken = this.userPostAutenticarUsuario(email, loginPassword, loginName);
        console.log('Token criado');
        return `Bearer ${currentToken}`
    }

    static userPostCadastrarUsuario(email, firstName, loginName, password, userRole = "USER") {
        return cy.fixture('users/postCadastrarUsuario.json').then((jsonBody) => {
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
                headers: { 'content-type': 'application/json' },
                body: jsonBody
            })
        });
    }

    static userPostAutenticarUsuario(email, password, loginName){
        cy.fixture('users/postAutenticarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.email = email;
            jsonBody.password = password;
            jsonBody.loginName = loginName;

            // Act
            cy.request({
                method: 'POST',
                url: this.url + '/accountservice/accountrest/api/v1/login',
                headers: { 'content-type': 'application/json' },
                body: jsonBody
            })
        });
    }
    
    static userDeleteApagarUsuario(bearerToken, accountId){
        cy.fixture('users/deleteApagarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.accountId = accountId;

            // Act
            cy.request({
                method: 'DELETE',
                url: this.url + '/accountservice/accountrest/api/v1/delete',
                headers: { 
                    'content-type': 'application/json',
                    'authorization': bearerToken
                },
                body: jsonBody
            })
        });
    }

}