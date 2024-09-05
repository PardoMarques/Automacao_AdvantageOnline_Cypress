export default class BasePage {

    acessarAdvantageOnline() {
        cy.visit('https://advantageonlineshopping.com/');
    }

}

export const basePage = new BasePage();