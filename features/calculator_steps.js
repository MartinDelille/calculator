var assert = require('assert');

module.exports = function() {

  this.Given(/^I am going to the website "([^"]*)"$/, function (url, next) {
    browser
      .url(url)
      .call(next);
  });

  this.Then(/^the title is "([^"]*)"$/, function (expectedTitle, next) {
    browser
      .getTitle().then(function(title) {
        assert(title === expectedTitle);
        next();
      }, next);
  });

  this.When(/^I click the button "([^"]*)"$/, function (button, next) {
    browser
    .click('.btn=' + button)
    .call(next);
  });

  this.Then(/^it display "([^"]*)" on the calculator screen$/, function (expectedValue, next) {
    browser
    .getText('#number').then(function(value) {
      assert(value === expectedValue, ' result of command is "' + value + '" but should be "' + expectedValue + '"');
    })
    .call(next);
  });
};
