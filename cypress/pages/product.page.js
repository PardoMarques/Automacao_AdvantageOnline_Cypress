import BasePage from './base.page';

class ProductPage extends BasePage {

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

}

export const productPage = new ProductPage();