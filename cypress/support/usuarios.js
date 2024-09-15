import Utils from "./utils";

export class Usuarios {

    constructor() {
        this.userId;
        this.firstName;
        this.loginName;
        this.firstName;
        this.loginPassword;
        this.accountType = "USER";
    }

    gerarNovosDadosDeUsuario() {
        this.firstName = Utils.gerarNomeAleatorio();
        this.loginName = this.firstName + "000";
        this.email = this.firstName + "@hotmail.com";
        this.loginPassword = `Teste@${Utils.gerarNumeroAleatorioEntre(100, 999)}`;
        cy.log(`Usuário gerado: ${this.loginName}, ${this.loginPassword}`);
    }

    gerarNovosDadosDeUsuarioAdmin() {
        this.firstName = Utils.gerarNomeAleatorio();
        this.loginName = this.firstName + "admin";
        this.email = this.firstName + "admin@hotmail.com";
        this.loginPassword = `Admin@${Utils.gerarNumeroAleatorioEntre(100, 999)}`;
        cy.log(`Usuário gerado: ${this.loginName}, ${this.loginPassword}`);
    }

    atualizarDadosDeUsuario(nome, login, email, senha) {
        this.firstName = nome || this.firstName;
        this.loginName = login || this.loginName;
        this.email = email || this.email;
        this.loginPassword = senha || this.loginPassword;
    }

    virarAdministrador() {
        this.accountType = "ADMIN";
    }
}

export const usuario = new Usuarios();