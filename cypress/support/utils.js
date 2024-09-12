const { faker } = require('@faker-js/faker');

const Utils = {

    gerarNomeAleatorio() {
        return faker.person.firstName();
    },

    gerarNumeroAleatorioEntre(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

};

module.exports = Utils;