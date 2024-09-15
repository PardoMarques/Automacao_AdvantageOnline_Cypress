import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { usuario } from "../../support/usuarios.js";
import UserRequest from '../../requests/user.request';
import CartRequest from '../../requests/cart.request';

Given("API_AOS - Account - Autenticar Usuário {string}", (userRole) => {
    if(userRole == "USER"){
        usuario.gerarNovosDadosDeUsuario();
    }else if(userRole == "ADMIN"){
        usuario.gerarNovosDadosDeUsuarioAdmin();
        usuario.virarAdministrador();
    }

    UserRequest.gerarToken(usuario);
});

When("API_AOS - Cart - Consultar itens do carrinho pelo idUsuario", () => {
    CartRequest.cartGetItensDoCarrinhoPeloId(usuario);
});

When("API_AOS - Cart - Cadastrar um item no carrinho com os seguintes dados", (dataTable) => {
    dataTable.hashes().forEach(row => {
        const productId = row.productId;
        const color = row.color;
        const hasWarranty = row.hasWarranty;
        const quantity = row.quantity;

        CartRequest.cartPostItemNoCarrinhoPeloId(usuario, productId, color, hasWarranty, quantity)
    });
});

When("API_AOS - Cart - Atualizar um item no carrinho com os seguintes dados", (dataTable) => {
    dataTable.hashes().forEach(row => {
        const productId = row.productId;
        const color = row.color;
        const quantity = row.quantity;

        CartRequest.cartPutItemDoCarrinhoPeloId(usuario, productId, color, quantity)
    });
});

Then("o status code da resposta deve ser {string}", (expectedStatusCode) => {
    expect(Cypress.env("currentStatus")).to.eq(Number(expectedStatusCode));
});