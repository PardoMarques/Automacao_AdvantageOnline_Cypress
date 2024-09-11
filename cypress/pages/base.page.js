import { faker } from '@faker-js/faker';

export class BasePage {

    constructor() {

        var nome = cy.gerarNomeAleatorio();
        var login = nome + "000";
        var email = nome + "@hotmail.com";

        this.usuarioNome = nome;
        this.usuarioLogin = login;
        this.usuarioEmail = email;
        this.usuarioSenha = "Teste@123";

    }

}