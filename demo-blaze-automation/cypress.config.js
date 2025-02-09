const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://www.demoblaze.com/',
    retries: {
      runMode: 4,  // Retries failed tests twice in CLI mode
      openMode: 4   // Retries failed tests once in Cypress Test Runner
    },
  },
});
