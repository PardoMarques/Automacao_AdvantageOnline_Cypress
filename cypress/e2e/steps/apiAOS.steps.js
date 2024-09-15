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

    Cypress.env("currentToken", (UserRequest.gerarToken(usuario.usuarioEmail, usuario.usuarioNome, usuario.usuarioLogin, usuario.usuarioSenha, userRole)));
    UserRequest.userPostAutenticarUsuario(usuario.usuarioEmail, usuario.usuarioSenha, usuario.usuarioLogin);
});

When("API_AOS - Cart - Consultar itens do carrinho pelo idUsuario", () => {
    CartRequest.cartGetItensDoCarrinhoPeloId(Cypress.env("currentToken"), Cypress.env("currentUserId"));
});

When("API_AOS - Cart - Cadastrar um item no carrinho com os seguintes dados", (dataTable) => {
    dataTable.hashes().forEach(row => {
        const productId = row.productId;
        const color = row.color;
        const hasWarranty = row.hasWarranty;
        const quantity = row.quantity;

        CartRequest.cartPutItemDoCarrinhoPeloId(Cypress.env("currentToken"), Cypress.env("currentUserId"), productId, color, hasWarranty, quantity)
    });
});

When("API_AOS - Cart - Atualizar um item no carrinho com os seguintes dados", (dataTable) => {
    dataTable.hashes().forEach(row => {
        const productId = row.productId;
        const newColor = row.newColor;
        const quantity = row.quantity;

        CartRequest.cartPutItemDoCarrinhoPeloId(Cypress.env("currentToken"), Cypress.env("currentUserId"), productId, newColor, quantity)
    });
});

Then("o status code da resposta deve ser {string}", (expectedStatusCode) => {
    cy.get('@response').then((response) => {
        expect(response.status).to.eq(Number(expectedStatusCode));
    });
});