import { HomePage } from './home.page';
import { elpaym } from '../../support/locators/payment.locator';

class PaymentPage extends HomePage {
    
    preencherUsuario(userName) {
        cy.get(elpaym.inptUser).type(userName);
    }

    preencherSenha(password) {
        cy.get(elpaym.inptPassword).type(password);
    }

    clicarBotaoLogin() {
        cy.get(elpaym.btnLogin).click();
    }

    clicarLinkEsqueceuSenha() {
        cy.get(elpaym.linkForgetPassword).click();
    }

    realizarLogin(usuario) {
        this.clicarIconeLogin();
        this.preencherUsuario(usuario.userName);
        this.preencherSenha(usuario.loginPassword);
        this.clicarBotaoLogin();
    }

    clicarBotaoRegistrar() {
        cy.get(elpaym.btnRegistration).click();
    }

}

export const paymentPage = new PaymentPage();