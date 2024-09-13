import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { usuario } from "../../support/usuarios.js";
import { homePage } from '../../pages/home.page.js';
import UserRequest from '../../requests/user.request.js';
import CartRequest from '../../requests/cart.request.js';

Given("API_AOS - Account - Autenticar Usuário", () => {
    cy.setToken(UserRequest.gerarToken());
});

When("API_AOS - Cart - Consultar itens do carrinho pelo idUsuario", () => {
    CartRequest.cartGetItensDoCarrinhoPeloId(cy.getToken(), cartId);
});

When("API_AOS - Cart - Cadastrar um novo item no carrinho pelo idUsuario", () => {
    dataTable.hashes().forEach(row => {
        const cartId = row.cartId;
        const productId = row.productId;
        const color = row.color;
        const hasWarranty = row.hasWarranty;
        const quantity = row.quantity;

        CartRequest.cartPutItemDoCarrinhoPeloId(cy.getToken(), cartId, productId, color, hasWarranty, quantity);
    });
});

When("API_AOS - Cart - Atualizar um item no carrinho pelo idUsuario", () => {
    dataTable.hashes().forEach(row => {
        const cartId = row.cartId;
        const productId = row.productId;
        const newColor = row.newColor;
        const quantity = row.quantity;

        CartRequest.cartPutItemDoCarrinhoPeloId(cy.getToken(), cartId, productId, newColor, quantity) 
    });
});

    // .then((response) => {
    //     expect(response.status).to.eq(200);
    //     return response.statusMessage.token;
    // });