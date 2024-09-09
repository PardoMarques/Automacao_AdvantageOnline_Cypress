import BasePage from './base.page';

class PaymentPage extends BasePage {

    constructor() {
        super();
        
        this.lblTitle = `body > div.uiview.ng-scope > section > article > h3`;

        this.lblDescLogin = `label[translate="Already_have_an_account"]`;
        this.inptUser = `[name="usernameInOrderPayment"]`;
        this.inptPassword = `[name="passwordInOrderPayment"]`;
        this.linkForgetPassword = `#Forgot_your_password`;
        this.btnLogin = `#login_btn`;

        this.lblDescRegistration = `[translate="Create_your_account_easily"]`;
        this.btnRegistration = `#registration_btn`;

        this.lblDesc = `[translate="ORDER_SUMMARY"]`;
        
        this.lblItem1ProductName = `#userCart tr:nth-child(1) td:nth-child(2) > a > h3`;
        this.lblItem1Quantity = `#userCart tr:nth-child(1) td:nth-child(2) > a > label:nth-child(2)`;
        this.lblItem1Price = `#userCart tr:nth-child(1) td:nth-child(3) p`;

        this.lblItem2ProductName = `#userCart tr:nth-child(2) td:nth-child(2) > a > h3`;
        this.lblItem2Quantity = `#userCart tr:nth-child(2) td:nth-child(2) > a > label:nth-child(2)`;
        this.lblItem2Price = `#userCart tr:nth-child(2) td:nth-child(3) p`;

        this.lblTotal = `[class="roboto-medium totalValue ng-binding"]`;

    }

}

export const paymentPage = new PaymentPage();