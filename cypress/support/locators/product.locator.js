import { HomeLocator } from './home.locator';

class ProductLocator extends HomeLocator {

    constructor() {
        super();
        
        this.lblItemName = `#Description > h1.roboto-regular`;
        this.lblItemPrice = `#Description > h2`;
        this.lblItemDesc = `#Description > p`;

        this.btnMinusQtd = `e-sec-plus-minus .minus`;
        this.btnPlusQtd = `e-sec-plus-minus .plus`;
        this.lblCurrentQtd = `e-sec-plus-minus [name="quantity"]`;

        this.btnAddToCart = `[translate="ADD_TO_CART"]`;

        this.lblProductSpecifications = `[translate="PRODUCT_SPECIFICATIONS"]`;

        this.lblPopUpCartTotalPrice = `#toolTipCart [class="roboto-medium cart-total ng-binding"]`

    }

}

export const elprod = new ProductLocator();