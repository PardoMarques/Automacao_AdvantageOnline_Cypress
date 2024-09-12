import Utils from "./utils";

export class Usuarios {

    constructor() {
        this.usuarioNome;
        this.usuarioLogin;
        this.usuarioEmail;
        this.usuarioSenha;
        this.usuarioRole = "USER";
    }

    gerarNovosDadosDeUsuario() {
        this.usuarioNome = Utils.gerarNomeAleatorio();
        this.usuarioLogin = this.usuarioNome + "000";
        this.usuarioEmail = this.usuarioNome + "@hotmail.com";
        this.usuarioSenha = `Teste@${Utils.gerarNumeroAleatorioEntre(100, 999)}`;
        cy.log(`Usuário gerado: ${this.usuarioLogin}, ${this.usuarioSenha}`);
    }

    gerarNovosDadosDeUsuarioAdmin() {
        this.usuarioNome = Utils.gerarNomeAleatorio();
        this.usuarioLogin = this.usuarioNome + "admin";
        this.usuarioEmail = this.usuarioNome + "admin@hotmail.com";
        this.usuarioSenha = `Admin@${Utils.gerarNumeroAleatorioEntre(100, 999)}`;
        cy.log(`Usuário gerado: ${this.usuarioLogin}, ${this.usuarioSenha}`);
    }

    atualizarDadosDeUsuario(nome, login, email, senha) {
        this.usuarioNome = nome || this.usuarioNome;
        this.usuarioLogin = login || this.usuarioLogin;
        this.usuarioEmail = email || this.usuarioEmail;
        this.usuarioSenha = senha || this.usuarioSenha;
    }

    virarAdministrador() {
        this.usuarioRole = "ADMIN";
    }
}

export const usuario = new Usuarios();