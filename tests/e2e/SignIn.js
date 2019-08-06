require('dotenv').config;

const app = process.env.APP_URL;
module.exports = {
  'Render Sign In Page': (browser) => {
    browser
      .url(`${app}/#/signin`).pause(1000)
      .waitForElementVisible('.signin', 1000)
      .assert.elementPresent('.card')
      .assert.elementPresent('.left-con')
      .assert.elementPresent('.right-con')
      .assert.elementPresent('#email')
      .assert.elementPresent('#password')
      .assert.valueContains('#email', '')
      .assert.valueContains('#password', '')
      .assert.elementPresent('#center-line')
      .assert.elementPresent('#google')
      .assert.elementPresent('#facebook')
      .assert.elementPresent('#twitter')
      .assert.containsText('#signin-text', 'Sign In')
      .assert.visible('img#logo')
      .assert.visible('img#brand-logo')
      .setValue('#email', 'user@haven.com')
      .pause(500)
      .setValue('#password', 'Password')
      .pause(500)
      .assert.value('#email', 'user@haven.com')
      .assert.value('#password', 'Password')
      .click('#signin').pause(500)
      .end();
  },
};
