const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter', //for html reports

  e2e: {
    setupNodeEvents(on, config) {
  
      //implementes node event listeners here
      this.screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
  },
});
