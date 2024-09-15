import Utils from "../support/utils";

export default class CartRequest {

    static cartGetItensDoCarrinhoPeloId(currentToken, userId) {
        return cy.request({
            method: 'GET',
            url: `/order/api/v1/carts/${userId}`,
            headers: {
                'accept': '*/*',
                'Authorization': currentToken
            }
        }).then((response) => { return response; });
    }

    static cartPostItemNoCarrinhoPeloId(currentToken, userId, productId, color, hasWarranty, quantity) {
        return cy.request({
            method: 'POST',
            url: `/order/api/v1/carts/${userId}/product/${productId}/color/${color}?hasWarranty=${hasWarranty}&quantity=${quantity}`,
            headers: {
                'accept': '*/*',
                'Authorization': currentToken
            },
            body: {}
        }).then((response) => { return response; });
    }

    static cartPutItemDoCarrinhoPeloId(currentToken, userId, productId, newColor, quantity) {
        return cy.request({
            method: 'PUT',
            url: `/order/api/v1/carts/${userId}/product/${productId}/color/green?new_color=${newColor}&quantity=${quantity}`,
            headers: {
                'accept': '*/*',
                'Authorization': currentToken
            }
        }).then((response) => { return response; });
    }

}