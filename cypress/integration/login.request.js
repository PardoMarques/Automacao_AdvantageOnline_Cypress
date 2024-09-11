import { BaseRequest } from "./base.request";

class LoginRequest extends BaseRequest{

    constructor() {
        super();
    }

    restPostCadastrarLogin(email, firstName, loginName, password){
        cy.fixture('login.json').then((jsonBody) => {
            // Arrange
            jsonBody.email = email;
            jsonBody.firstName = firstName;
            jsonBody.loginName = loginName;
            jsonBody.password = password;

            // Act
            cy.request({
                method: 'POST',
                url: this.url + '/accountservice/accountrest/api/v1/register ',
                headers: this.header,
                body: jsonBody
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }

}

export const loginRequest = new LoginRequest();