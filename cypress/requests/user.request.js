import Utils from "../support/utils";

export default class UserRequest {

    static gerarToken(usuario){
        var currentToken;
        this.userPostCadastrarUsuario(usuario);
        this.userPostAutenticarUsuario(usuario);
    }

    static userPostCadastrarUsuario(usuario) {
        var userId;
        // Arrange
        const jsonBody = require('../fixtures/users/postCadastrarUsuario.json');
        jsonBody.accountType = usuario.userRole;
        jsonBody.email = usuario.email;
        jsonBody.firstName = usuario.firstName;
        jsonBody.loginName = usuario.loginName;
        jsonBody.password = usuario.loginPassword;

        // Act
        cy.request({
            method: 'POST',
            url: '/accountservice/accountrest/api/v1/register',
            headers: { 'content-type': 'application/json' },
            body: jsonBody
        }).then((response) => {
            expect(response).property('status').to.equal(200);
            expect(response.body).property('response').to.not.be.oneOf([null, ""]);
            userId = response.body['response']['userId'];
            cy.log(userId);
            usuario.userId = response.body['response']['userId'];
        });
        
    }

    static userPostAutenticarUsuario(usuario){
        var currentToken;
        // Arrange
        const jsonBody = require('../fixtures/users/postAutenticarUsuario.json');
        jsonBody.email = usuario.email;
        jsonBody.loginPassword = usuario.loginPassword;
        jsonBody.loginUser = usuario.loginName;

        // Act
        cy.request({
            method: 'POST',
            url: '/accountservice/accountrest/api/v1/login',
            headers: { 'content-type': 'application/json' },
            body: jsonBody
        }).then((response) => {
            expect(response).property('status').to.equal(200)
            expect(response.body).property('statusMessage').to.not.be.oneOf([null, ""])
            currentToken = (response.body['statusMessage']['token']);
            cy.log(currentToken);
            Cypress.env("currentStatus", response.status);
            Cypress.env("currentResponse", response.body);
            Cypress.env("currentToken", `Bearer ${currentToken}`);
        });
    }
    
    static userDeleteApagarUsuario(accountId){
        // Arrange
        const jsonBody = require('../fixtures/users/deleteApagarUsuario.json');
        jsonBody.accountId = accountId;

        // Act
        cy.request({
            method: 'DELETE',
            url: '/accountservice/accountrest/api/v1/delete',
            headers: { 
                'content-type': 'application/json',
                'authorization': Cypress.env("currentToken")
            },
            body: jsonBody
        }).then((response) => {
            Cypress.env("currentResponseStatus", response.status);
            Cypress.env("currentResponseBody", response.status);
            return response
        });
        
    }

}