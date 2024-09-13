const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://advantageonlineshopping.com/',
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    
    viewportWidth: 1920,    // Largura padrão da janela
    viewportHeight: 1080,   // Altura padrão da janela
  },
});
