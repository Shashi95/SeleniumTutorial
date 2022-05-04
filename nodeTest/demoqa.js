const {By,Key,Builder} = require("selenium-webdriver");
require('chromedriver');

async function demoQa(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://demoqa.com/checkbox");
    await driver.manage().setTimeouts( { implicit: 1000 } ); 

    

    await driver.findElement(By.id("item-0")).click();
    await driver.findElement(By.id("userName")).sendKeys("Shashi");
    await driver.findElement(By.id("userEmail")).sendKeys("Shashikanth@gmal.com");
    await driver.findElement(By.id("currentAddress")).sendKeys("12345 banting");
    await driver.findElement(By.id("permanentAddress")).sendKeys("12345 banting");
    await driver.findElement(By.id("submit")).sendKeys("12345 banting");

}

demoQa();
