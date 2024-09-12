const faker = require('@faker-js/faker');  // ou apenas 'faker' dependendo de como o pacote está instalado

const Utils = {

    gerarNomeAleatorio() {
        return faker.person.firstName();
    },

    gerarNumeroAleatorioEntre(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

};

module.exports = Utils;