export default class HomePage { //HOMEPAGE

    constructor() {

        this.linkLogo = `[class="logo"]`;
        this.iconSearch = `#menuSearch`;
        this.iconLogin = `#menuUser`;
        this.iconCart = `#menuCart`;
        this.iconHelp = `#menuHelp`;
        this.inptSearch = `#autoComplete`;
        this.linkUnique = `.searchPopUp a.product`;

        this.btnSpeakers = "#speakersTxt";
        this.btnTablets = "#tabletsTxt";
        this.btnLaptops = "#laptopsTxt";
        this.btnMice = "#miceTxt";
        this.btnHeadphones = "#headphonesTxt";
        this.lblCategoryTitle = "h3.categoryTitle";

    }

    acessarAdvantageOnline() {
        cy.visit('https://advantageonlineshopping.com/');
    }

    clicarLinkLogotipo(){
        cy.get(this.linkLogo).click();
    }

    clicarIconePesquisar(){
        cy.get(this.iconSearch).click();
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
        cy.clicarElementoEsperarValidarTexto(this.btnSpeakers, this.lblCategoryTitle, "SPEAKERS");
    }

    clicarBotaoCategoriaTablets(){
        cy.clicarElementoEsperarValidarTexto(this.btnTablets, this.lblCategoryTitle, "TABLETS");
    }

    clicarBotaoCategoriaLaptops(){
        cy.clicarElementoEsperarValidarTexto(this.btnLaptops, this.lblCategoryTitle, "LAPTOPS");
    }

    clicarBotaoCategoriaMice(){
        cy.clicarElementoEsperarValidarTexto(this.btnMice, this.lblCategoryTitle, "MICE");
    }

    clicarBotaoCategoriaHeadphones(){
        cy.clicarElementoEsperarValidarTexto(this.btnHeadphones, this.lblCategoryTitle, "HEADPHONES");
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