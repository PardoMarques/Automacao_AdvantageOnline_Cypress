import { HomePage } from './home.page';

class ProductPage extends HomePage {

    constructor() {
        super();
        
        this.lblItemName = `#Description > h1`;
        this.lblItemPrice = `#Description > h2`;
        this.lblItemDesc = `#Description > p`;

        this.btnMinusQtd = `e-sec-plus-minus .minus`;
        this.btnPlusQtd = `e-sec-plus-minus .plus`;
        this.lblCurrentQtd = `e-sec-plus-minus [name="quantity"]`;

        this.btnAddToCart = `[translate="ADD_TO_CART"]`;

        this.lblProductSpecifications = `[translate="PRODUCT_SPECIFICATIONS"]`;

    }

    clicarBotaoMais() {
        cy.get(this.btnPlusQtd).click();
    }

    clicarBotaoMenos() {
        cy.get(this.btnMinusQtd).click();
    }

    clicarBotaoAdicionarAoCarrinho() {
        cy.get(this.btnAddToCart).click();
    }

}

export const productPage = new ProductPage();