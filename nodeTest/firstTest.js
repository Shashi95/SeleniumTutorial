const {By,Key,Builder} = require('selenium-webdriver');
require('chromedriver');


async function googleVisit(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www1.shoppersdrugmart.ca/en/home");

    
    await driver.findElement(By.xpath("//a[@title='Health & Pharmacy']"));
    driver.actions().mouseMove(By.xpath("//a[@title='Health & Pharmacy']")).mouseDown().perform();
    


    await driver.sleep(3000);
    await driver.quit();
}

googleVisit();
