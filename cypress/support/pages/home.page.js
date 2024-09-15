import { elhome } from '../../support/locators/home.locator';

export class HomePage {

    acessarAdvantageOnline() {
        cy.visit('https://advantageonlineshopping.com/');
        cy.esperarConterTexto(elhome.btnSpeakers, 'SPEAKERS')
        cy.esperarConterTexto(elhome.btnTablets, 'TABLETS');
        cy.esperarConterTexto(elhome.btnLaptops, 'LAPTOPS');
        cy.esperarConterTexto(elhome.btnMice, 'MICE');
        cy.esperarConterTexto(elhome.btnHeadphones, 'HEADPHONES');
    }

    clicarLinkLogotipo(){
        cy.get(elhome.linkLogo).click();
    }

    clicarIconePesquisar(){
        cy.get(elhome.iconSearch).click();
        cy.wait(3000);
    }

    clicarIconeLogin(){
        cy.get(elhome.iconLogin).click();
    }

    clicarIconeCarrinho(){
        cy.get(elhome.iconCart).click();
    }

    clicarIconeAjuda(){
        cy.get(elhome.iconHelp).click();
    }

    preencherPesquisar(produto){
        cy.get(elhome.inptSearch).type(produto);
    }

    clicarLinkUnicoResultado(produto){
        cy.esperarConterTexto(elhome.linkUnique, produto);
        cy.get(elhome.linkUnique).click();
    }

    clicarBotaoCategoriaSpeakers(){
        cy.clicarElementoEsperarvalidarElementoTexto(elhome.btnSpeakers, elhome.lblCategoryTitle, "SPEAKERS");
    }

    clicarBotaoCategoriaTablets(){
        cy.clicarElementoEsperarvalidarElementoTexto(elhome.btnTablets, elhome.lblCategoryTitle, "TABLETS");
    }

    clicarBotaoCategoriaLaptops(){
        cy.clicarElementoEsperarvalidarElementoTexto(elhome.btnLaptops, elhome.lblCategoryTitle, "LAPTOPS");
    }

    clicarBotaoCategoriaMice(){
        cy.clicarElementoEsperarvalidarElementoTexto(elhome.btnMice, elhome.lblCategoryTitle, "MICE");
    }

    clicarBotaoCategoriaHeadphones(){
        cy.clicarElementoEsperarvalidarElementoTexto(elhome.btnHeadphones, elhome.lblCategoryTitle, "HEADPHONES");
    }

    selecionarUmaCategoria(categoria){
        switch (categoria) {
            case "SPEAKERS":
                this.clicarBotaoCategoriaSpeakers();
                break;

            case "TABLETS":
                this.clicarBotaoCategoriaTablets();
                break;

            case "LAPTOPS":
                this.clicarBotaoCategoriaLaptops();
                break;

            case "MICE":
                this.clicarBotaoCategoriaMice();
                break;

            case "HEADPHONES":
                this.clicarBotaoCategoriaHeadphones();
                break;

            default:
                cy.log("Nada foi escolhido");
        }
    }

}

export const homePage = new HomePage();