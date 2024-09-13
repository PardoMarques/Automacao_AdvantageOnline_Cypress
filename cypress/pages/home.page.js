export class HomePage {

    constructor() {

        this.linkLogo = `[class="logo"]`;
        this.iconSearch = `#menuSearch`;
        this.iconLogin = `#menuUser`;
        this.iconCart = `#menuCart`;
        this.iconHelp = `#menuHelp`;
        this.inptSearch = `#autoComplete`;
        this.linkUnique = `#output > div > div.top6Products > a:nth-child(3)`;
        
        this.btnSpeakers = "#speakersTxt";
        this.btnTablets = "#tabletsTxt";
        this.btnLaptops = "#laptopsTxt";
        this.btnMice = "#miceTxt";
        this.btnHeadphones = "#headphonesTxt";
        this.lblCategoryTitle = "h3.categoryTitle";

    }

    acessarAdvantageOnline() {
        cy.visit('https://advantageonlineshopping.com/');
        cy.esperarConterTexto(this.btnSpeakers, 'SPEAKERS')
        cy.esperarConterTexto(this.btnTablets, 'TABLETS');
        cy.esperarConterTexto(this.btnLaptops, 'LAPTOPS');
        cy.esperarConterTexto(this.btnMice, 'MICE');
        cy.esperarConterTexto(this.btnHeadphones, 'HEADPHONES');
    }

    clicarLinkLogotipo(){
        cy.get(this.linkLogo).click();
    }

    clicarIconePesquisar(){
        cy.get(this.iconSearch).click();
        cy.wait(2000);
    }

    clicarIconeLogin(){
        cy.get(this.iconLogin).click();
    }

    clicarIconeCarrinho(){
        cy.get(this.iconCart).click();
    }

    clicarIconeAjuda(){
        cy.get(this.iconHelp).click();
    }

    preencherPesquisar(produto){
        cy.get(this.inptSearch).type(produto);
    }

    clicarLinkUnicoResultado(){
        cy.get(this.linkUnique).click();
    }

    clicarBotaoCategoriaSpeakers(){
        cy.clicarElementoEsperarvalidarElementoTexto(this.btnSpeakers, this.lblCategoryTitle, "SPEAKERS");
    }

    clicarBotaoCategoriaTablets(){
        cy.clicarElementoEsperarvalidarElementoTexto(this.btnTablets, this.lblCategoryTitle, "TABLETS");
    }

    clicarBotaoCategoriaLaptops(){
        cy.clicarElementoEsperarvalidarElementoTexto(this.btnLaptops, this.lblCategoryTitle, "LAPTOPS");
    }

    clicarBotaoCategoriaMice(){
        cy.clicarElementoEsperarvalidarElementoTexto(this.btnMice, this.lblCategoryTitle, "MICE");
    }

    clicarBotaoCategoriaHeadphones(){
        cy.clicarElementoEsperarvalidarElementoTexto(this.btnHeadphones, this.lblCategoryTitle, "HEADPHONES");
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