export default class BasePage { //HOMEPAGE

    constructor() {

        this.linkLogo = `[class="logo"]`;
        this.iconSearch = `#menuSearch`;
        this.iconLogin = `#menuUser`;
        this.iconCart = `#menuCart`;
        this.iconHelp = `#menuHelp`;

    }

    acessarAdvantageOnline() {
        cy.visit('https://advantageonlineshopping.com/');
    }

    clicarNoLinkLogotipo(){
        cy.get(this.linkLogo).click();
    }

    clicarNoIconePesquisar(){
        cy.get(this.iconSearch).click();
    }

    clicarIconeLogin(){
        cy.get(this.iconLogin).click();
    }

    clicarNoIconeCarrinho(){
        cy.get(this.iconCart).click();
    }

    clicarNoIconeAjuda(){
        cy.get(this.iconHelp).click();
    }

}

export const basePage = new BasePage();