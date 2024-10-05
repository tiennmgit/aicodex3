const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vnexpress.net',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Updated to use specPattern
    fixturesFolder: 'cypress/fixtures',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    supportFile: 'cypress/support/index.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    env: {
      apiUrl: 'https://vnexpress.net/api'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});