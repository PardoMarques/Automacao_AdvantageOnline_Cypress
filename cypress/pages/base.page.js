import Utils from "../support/utils";

export class BasePage {

    constructor() {

        this.usuarioNome;
        this.usuarioLogin;
        this.usuarioEmail;
        this.usuarioSenha;
        this.gerarNovosDadosDeUsuario();

    }

    gerarNovosDadosDeUsuario(){
        var nome = Utils.gerarNomeAleatorio();
        var login = nome + "000";
        var email = nome + "@hotmail.com";

        this.usuarioNome = nome;
        this.usuarioLogin = login;
        this.usuarioEmail = email;
        this.usuarioSenha = "Teste@123";
    }

}