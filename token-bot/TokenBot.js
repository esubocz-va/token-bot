const {Builder, By, until} = require('selenium-webdriver');
let webdriver = require('selenium-webdriver');
var sleep = require('sleep');

(async function example() {
    let chromeCapabilities = webdriver.Capabilities.chrome();
    let chromeOptions = {
        "w3c": false
    };
    chromeCapabilities.set('chromeOptions', chromeOptions);
    const driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();

    try {
        await driver.get('http://localhost:8080/auth');
        await driver.findElement(By.className('idme-signin')).click();
        await driver.wait(until.elementLocated(By.id('user_email'))).sendKeys("va.api.user+idme.001@gmail.com");
        await driver.findElement(By.id('user_password')).sendKeys("Password1234!");
        await driver.findElement(By.name('commit')).click();
        await driver.findElement(By.name('button')).click();
        await driver.findElement(By.name('button')).click();
        sleep.sleep(5);
        var text = await driver.findElement(By.xpath("/html/body")).getText();
        if (text == "Hello World!") {
            await driver.get('http://localhost:8080/test');
            console.log(await driver.findElement(By.xpath("/html/body")).getText())
        }
    } finally {
        await driver.quit();
    }
})();
