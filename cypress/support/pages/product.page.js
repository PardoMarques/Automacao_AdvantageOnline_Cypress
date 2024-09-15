import { HomePage } from './home.page';
import { elprod } from '../../support/locators/product.locator';

class ProductPage extends HomePage {

    clicarBotaoMais() {
        cy.get(elprod.btnPlusQtd).click();
    }

    clicarBotaoMenos() {
        cy.get(elprod.btnMinusQtd).click();
    }

    clicarBotaoAdicionarAoCarrinho() {
        cy.get(elprod.btnAddToCart).click();
    }

}

export const productPage = new ProductPage();