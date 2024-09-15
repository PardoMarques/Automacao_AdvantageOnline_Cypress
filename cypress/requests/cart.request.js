import Utils from "../support/utils";

export default class CartRequest {

    static cartGetItensDoCarrinhoPeloId(usuario) {
        return cy.request({
            method: 'GET',
            url: `/order/api/v1/carts/${usuario.userId}`,
            headers: {
                'accept': '*/*',
                'Authorization': Cypress.env("currentToken")
            }
        }).then((response) => { return response; });
    }

    static cartPostItemNoCarrinhoPeloId(usuario, productId, color, hasWarranty, quantity) {
        return cy.request({
            method: 'POST',
            url: `/order/api/v1/carts/${usuario.userId}/product/${productId}/color/${color}?hasWarranty=${hasWarranty}&quantity=${quantity}`,
            headers: {
                'accept': '*/*',
                'Authorization': Cypress.env("currentToken")
            },
            body: {}
        }).then((response) => { return response; });
    }

    static cartPutItemDoCarrinhoPeloId(usuario, productId, color, quantity) {
        return cy.request({
            method: 'PUT',
            url: `/order/api/v1/carts/${usuario.userId}/product/${productId}/color/${color}?quantity=${quantity}`,
            headers: {
                'accept': '*/*',
                'Authorization': Cypress.env("currentToken")
            }
        }).then((response) => { return response; });
    }

}