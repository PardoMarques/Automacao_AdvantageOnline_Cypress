import Utils from "../support/utils";

export default class UserRequest {

    static gerarToken(email, firstName, loginName, loginPassword, userRole){
        var currentToken;
        this.userPostCadastrarUsuario(email, firstName, loginName, loginPassword, userRole);
        this.userPostAutenticarUsuario(email, loginPassword, loginName);
        cy.log(Cypress.env("currentResponseBody"));
        currentToken = Cypress.env("currentResponseBody");
        cy.log(currentToken);
        return `Bearer ${currentToken}`;
    }

    static userPostCadastrarUsuario(email, firstName, loginName, password, userRole) {
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
            }).then((response) => {
                Cypress.env("currentResponseStatus", response.status);
                Cypress.env("currentResponseBody", response.body.response);
                Cypress.env("currentUserId", response.body.userId);
                return response
            });
        });
    }

    static userPostAutenticarUsuario(email, loginPassword, loginUser){
        return cy.fixture('users/postAutenticarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.email = email;
            jsonBody.loginPassword = loginPassword;
            jsonBody.loginUser = loginUser;

            // Act
            cy.request({
                method: 'POST',
                url: '/accountservice/accountrest/api/v1/login',
                headers: { 'content-type': 'application/json' },
                body: jsonBody
            }).then((response) => {
                Cypress.env("currentResponseStatus", response.status);
                Cypress.env("currentResponseBody", response.status);
                Cypress.env("currentToken", response.body.statusMessage.token);
                return response
            });
        });
    }
    
    static userDeleteApagarUsuario(bearerToken, accountId){
        return cy.fixture('users/deleteApagarUsuario.json').then((jsonBody) => {
            // Arrange
            jsonBody.accountId = accountId;

            // Act
            cy.request({
                method: 'DELETE',
                url: '/accountservice/accountrest/api/v1/delete',
                headers: { 
                    'content-type': 'application/json',
                    'authorization': bearerToken
                },
                body: jsonBody
            }).then((response) => {
                Cypress.env("currentResponseStatus", response.status);
                Cypress.env("currentResponseBody", response.status);
                return response
            });
        });
    }

}