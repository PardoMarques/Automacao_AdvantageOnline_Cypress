import { HomePage } from './home.page';
import { elcart } from '../../support/locators/cart.locator';

class CartPage extends HomePage {

    clicarLinkEditarItem1() {
        cy.get(elcart.linkItem1Edit).click();
    }

    clicarLinkRemoverItem1() {
        cy.get(elcart.linkItem1Remove).click();
    }

    clicarLinkEditarItem2() {
        cy.get(elcart.linkItem2Edit).click();
    }

    clicarLinkRemoverItem2() {
        cy.get(elcart.linkItem2Remove).click();
    }

    clicarBotaoCheckout() {
        cy.get(elcart.btnCheckout).click();
    }

}

export const cartPage = new CartPage();