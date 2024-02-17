const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  screenshotsFolder: '/Users/karthikkk/report/',
  env: {
    username: 'admin',
  },
 // projectId: 'sn6ium',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://eaapp.somee.com',
    specPattern: 'cypress/e2e/examples/*.{js,jsx,ts,tsx}',
  },
})
