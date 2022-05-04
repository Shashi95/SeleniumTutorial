const {By,Key,Builder} = require("selenium-webdriver");
require('chromedriver');

async function demoQa(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://demoqa.com/checkbox");


    await driver.findElement(By.xpath("(//*[@id='item-2'])[1]")).click();
    await driver.sleep(1000);
    await driver.findElement(By.css("[id='impressiveRadio']")).click();

}

demoQa();
