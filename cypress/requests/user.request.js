import Utils from "../support/utils";

export default class UserRequest {

    static gerarToken(usuario){
        var currentToken;
        this.userPostCadastrarUsuario(usuario);
        this.userPostAutenticarUsuario(usuario);
    }

    // static userPostCadastrarUsuario(email, firstName, loginName, password, userRole) {
    //     return cy.fixture('users/postCadastrarUsuario.json').then((jsonBody) => {
    //         // Arrange
    //         jsonBody.accountType = userRole;
    //         jsonBody.email = email;
    //         jsonBody.firstName = firstName;
    //         jsonBody.loginName = loginName;
    //         jsonBody.password = password;

    //         // Act
    //         cy.request({
    //             method: 'POST',
    //             url: '/accountservice/accountrest/api/v1/register',
    //             headers: { 'content-type': 'application/json' },
    //             body: jsonBody
    //         }).then((response) => {
    //             Cypress.env("currentResponseStatus", response.status);
    //             Cypress.env("currentResponseBody", response.body.response);
    //             Cypress.env("currentUserId", response.body.userId);
    //             return response
    //         });
    //     });
    // }

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

    // static userPostAutenticarUsuario(email, loginPassword, loginUser){
    //     return cy.fixture('users/postAutenticarUsuario.json').then((jsonBody) => {
    //         // Arrange
    //         jsonBody.email = email;
    //         jsonBody.loginPassword = loginPassword;
    //         jsonBody.loginUser = loginUser;

    //         // Act
    //         cy.request({
    //             method: 'POST',
    //             url: '/accountservice/accountrest/api/v1/login',
    //             headers: { 'content-type': 'application/json' },
    //             body: jsonBody
    //         }).then((response) => {
    //             expect(response.body).to.have.property('statusMessage');
    //             Cypress.env("currentResponseStatus", response.status);
    //             Cypress.env("currentResponseBody", response.body);
    //             Cypress.env("currentToken", response.body.statusMessage.token);
    //             return response
    //         });
    //         cy.then(() => {
    //             const valorArmazenado = Cypress.env('currentResponseBody');

    //             // [Sincronizar] Verifica se o valor foi armazenado corretamente
    //             expect(valorArmazenado).to.not.be.undefined;
    //             cy.log('Usando o valor armazenado: ' + valorArmazenado);
    //         });
    //     });
    // }
    
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
                    'authorization': Cypress.env("currentToken")
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