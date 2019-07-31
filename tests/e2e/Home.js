require('dotenv').config;

const app = process.env.APP_URL;
module.exports = {
  'Render Home Page': (browser) => {
    browser
      .url(app)
      .waitForElementVisible('.welcome')
      .assert.containsText('.welcome', 'Welcome to Demeter Team Frontend');
  },
};
