import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { usuario } from "../../support/usuarios.js";
import { homePage } from '../../pages/home.page.js';
import BaseRequest from '../../requests/base.request';
import CartRequest from '../../requests/cart.request';

Given("API_AOS - Autenticar Usuário", () => {
    BaseRequest.getHeadersAuth();
});

Then("API_AOS - get_user_cart - deve conter detalhes do produto inserido", () => {
});

    // .then((response) => {
    //     expect(response.status).to.eq(200);
    //     return response.statusMessage.token;
    // });