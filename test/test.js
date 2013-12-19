var assert = require('assert'),
    webdriver = require('selenium-webdriver');

describe('UI', function() {
  var driver;

  before(function() {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build();
  });

  it('should open the browser', function(done) {
    driver.get('http://localhost:8080/sample');

    driver.wait(function() {
      return driver.isElementPresent(webdriver.By.css('[value="OK"]'));
    }, 1000);

    var first_message = driver.findElement(webdriver.By.css('[value="OK"]')).click();

    driver.wait(function() {
      var message = driver.findElement(webdriver.By.css('.message .content'));

      return message.getText().then(function(text) {
        return text === 'You clicked OK';
      });
    }, 1000);

    first_message.then(done);
  });

  after(function() {
    driver.quit();
  });
});
