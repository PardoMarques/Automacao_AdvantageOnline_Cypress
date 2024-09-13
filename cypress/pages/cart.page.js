import { HomePage } from './home.page';

class CartPage extends HomePage {

    constructor() {
        super();
        
        this.lblTitle = `div.uiview .sticky`;

        this.lblColProductName = `[translate="PRODUCT_NAME"]`;
        this.lblColColor = `[translate="COLOR"]`;
        this.lblColQuantity = `[translate="QUANTITY"]`;
        this.lblColPrice = `[translate="PRICE"]`;

        this.lblItem1ProductName = `#shoppingCart tbody tr:nth-child(1) label.productName`;
        this.lblItem1Quantity = `#shoppingCart tbody tr:nth-child(1) td:nth-child(5) label.ng-binding`;
        this.lblItem1Price = `#shoppingCart tbody tr:nth-child(1) p.price`;
        this.linkItem1Edit = `#shoppingCart tbody tr:nth-child(1) [translate="EDIT"]`;
        this.linkItem1Remove = `#shoppingCart tbody tr:nth-child(1) [translate="REMOVE"]`;

        this.lblItem2ProductName = `#shoppingCart tbody tr:nth-child(2) label.productName`;
        this.lblItem2Quantity = `#shoppingCart tbody tr:nth-child(2) td:nth-child(5) label.ng-binding`;
        this.lblItem2Price = `#shoppingCart tbody tr:nth-child(2) p.price`;
        this.linkItem2Edit = `#shoppingCart tbody tr:nth-child(2) [translate="EDIT"]`;
        this.linkItem2Remove = `#shoppingCart tbody tr:nth-child(2) [translate="REMOVE"]`;

        this.lblTotal = `#shoppingCart tfoot > tr:nth-child(1) > td:nth-child(2) > span.roboto-medium`;
        this.btnCheckout = `#shoppingCart tfoot`;

    }

    clicarLinkEditarItem1() {
        cy.get(this.linkItem1Edit).click();
    }

    clicarLinkRemoverItem1() {
        cy.get(this.linkItem1Remove).click();
    }

    clicarLinkEditarItem2() {
        cy.get(this.linkItem2Edit).click();
    }

    clicarLinkRemoverItem2() {
        cy.get(this.linkItem2Remove).click();
    }

    clicarBotaoCheckout() {
        cy.get(this.btnCheckout).click();
    }

}

export const cartPage = new CartPage();