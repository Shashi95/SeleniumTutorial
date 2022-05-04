const {By,Key,Builder} = require('selenium-webdriver');
require('chromedriver');


async function googleVisit(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://rahulshettyacademy.com/angularpractice/");
    await driver.findElement(By.name("name")).sendKeys("Shashi");
    await driver.findElement(By.name("email")).sendKeys("Shashi@gmail.com");
    await driver.findElement(By.id("exampleInputPassword1")).sendKeys("Shashi@gmail.com");
    await driver.findElement(By.id("exampleCheck1")).click();
    await driver.findElement(By.id("exampleFormControlSelect1")).click("male");
    await driver.findElement(By.id("inlineRadio2")).click();
    await driver.findElement(By.name("bday")).sendKeys("1999-02-08");
    await driver.findElement(By.xpath("//input[@value='Submit']")).sendKeys(Key.RETURN);
    // await driver.sleep(3000);
    await driver.quit();
}

googleVisit();
