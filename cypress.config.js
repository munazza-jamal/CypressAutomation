const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  watchForFileChanges : true,
  reporter : "mochawesome",
  reporterOptions : {
    autoOpen : true,
    code : true,
    reportFilename : "Cypress Demo",
    reportPageTitle : "Cypress Automation",
  }
  },

  video : false
})
