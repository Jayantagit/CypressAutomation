const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 0,
      openMode: 1,
      }
  },
});
