import Utils from "../support/utils";

export default class CartRequest {

    static cartGetItensDoCarrinhoPeloId(currentToken, cartId) {
        return cy.request({
            method: 'GET',
            url: `/order/api/v1/carts/${cartId}`,
            headers: {
                'accept': '*/*',
                'Authorization': currentToken
            }
        });
    }

    static cartPostItemNoCarrinhoPeloId(currentToken, cartId, productId, color, hasWarranty, quantity) {
        return cy.request({
            method: 'POST',
            url: `/order/api/v1/carts/${cartId}/product/${productId}/color/${color}?hasWarranty=${hasWarranty}&quantity=${quantity}`,
            headers: {
                'accept': '*/*',
                'Authorization': currentToken
            },
            body: {}
        });
    }

    static cartPutItemDoCarrinhoPeloId(currentToken, cartId, productId, newColor, quantity) {
        return cy.request({
            method: 'PUT',
            url: `/order/api/v1/carts/${cartId}/product/${productId}/color/green?new_color=${newColor}&quantity=${quantity}`,
            headers: {
                'accept': '*/*',
                'Authorization': currentToken
            }
        });
    }

}