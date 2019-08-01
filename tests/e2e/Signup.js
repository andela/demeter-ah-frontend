require('dotenv').config;

const app = process.env.APP_URL;
module.exports = {
  'Render Home Page': (browser) => {
    browser
      .url(`${app}/#/signup`).pause(1000)
      .waitForElementVisible('.signup', 1000)
      .assert.elementPresent('#signup-menu')
      .assert.containsText('#signup-menu', 'Sign Up')
      .assert.elementPresent('#signin-menu')
      .assert.containsText('#signin-menu', 'Sign In')
      .assert.visible('img#logo')
      .assert.visible('img#brand-logo')
      .setValue('#email', 'user@haven.com')
      .pause(500)
      .setValue('#firstName', 'john')
      .pause(500)
      .setValue('#lastName', 'mark')
      .pause(500)
      .setValue('#username', 'johnm')
      .pause(500)
      .setValue('#password', 'password')
      .pause(500)
      .setValue('#confirmPassword', 'password')
      .pause(500)
      .assert.value('#email', 'user@haven.com')
      .assert.value('#firstName', 'john')
      .assert.value('#lastName', 'mark')
      .assert.value('#username', 'johnm')
      .assert.value('#password', 'password')
      .assert.value('#confirmPassword', 'password')
      .click('#register').pause(500)
      .end();
  },
};
