import { faker } from '@faker-js/faker';

export class BasePage {

    constructor() {

        var nome = this.gerarNomeAleatorio();
        var login = nome + "000";
        var email = nome + "@hotmail.com";

        this.usuarioNome = nome;
        this.usuarioLogin = login;
        this.usuarioEmail = email;
        this.usuarioSenha = "Teste@123";

    }

    gerarNomeAleatorio() {
        return faker.person.firstName();
    }

    gerarEmailAleatorio() {
        return faker.internet.email();
    }

    gerarTelefoneAleatorio() {
        return faker.phone.phoneNumber();
    }

}