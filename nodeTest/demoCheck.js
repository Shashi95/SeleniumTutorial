const {By,Key,Builder} = require("selenium-webdriver");
require('chromedriver');

async function demoQa(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://demoqa.com/checkbox");
    await driver.manage().setTimeouts( { implicit: 2000 } ); 


    await driver.findElement(By.className("rct-checkbox")).click();

}

demoQa();
