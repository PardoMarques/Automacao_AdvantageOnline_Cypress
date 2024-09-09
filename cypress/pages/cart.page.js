import BasePage from './base.page';

class CartPage extends BasePage {

    constructor() {
        super();

        this.lblTitle = `body > div.uiview.ng-scope > section > article > h3`;

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

        this.iconLogin = `[data-ng-click="login('loginMiniTitle')"]`;
        this.inptUser = `[name="username"]`;
        this.inptPassword = `[name="password"]`;
        this.btnLogin = `#sign_in_btn`;
        this.lblUserMenu = `#checkOutButton`;

    }

}

export const cartPage = new CartPage();