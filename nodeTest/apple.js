const {By,Key,Builder} = require('selenium-webdriver');
require('chromedriver');


async function appleVisit(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.apple.com/ca/");

    await driver.findElement(By.xpath("//a[@href='/ca/shop/goto/buy_iphone/iphone_13_pro']")).click();
    await driver.manage().setTimeouts( { implicit: 1000 } ); 

    await driver.findElement(By.xpath("//input[@class='form-selector-input']")).click();
    await driver.findElement(By.xpath("//input[@value='sierrablue']")).click();
    await driver.findElement(By.name("dimensionCapacity")).click();
    await driver.findElement(By.name("tradeupinline")).click();
    await driver.findElement(By.xpath("//input[@id='applecareplus_58_noapplecare']")).click();
    await driver.manage().setTimeouts( { implicit: 1000 } ); 

    await driver.findElement(By.name("add-to-cart")).click();

    

    
    await driver.quit();
}

appleVisit();


