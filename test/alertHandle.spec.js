const { Builder , By, keys } = require('selenium-webdriver')
require('chromedriver');
let driver;

describe('popup handling methods', async () => {
    before(async () =>{
        driver = await new Builder().forBrowser('chrome').build(); 
    })
    it("alert", async () => {
        await driver.get("https://demoqa.com/alerts");
        await driver.findElement(By.id("alertButton")).click();
        await driver.switchTo().alert().accept();
    })
    it("confirm", async () => {
        await driver.get("https://demoqa.com/alerts");
        await driver.findElement(By.id("confirmButton")).click();
        await driver.switchTo().alert().accept();
        let confirmResult  = await driver.findElement(By.id("confirmResult")).getText();
        console.log("confirm result : ",confirmResult);

        await driver.findElement(By.id("confirmButton")).click();
        await driver.switchTo().alert().dismiss();
        confirmResult  = await driver.findElement(By.id("confirmResult")).getText();
        console.log("confirm result : ",confirmResult)
    
    })
    it("prompt", async () => {
        await driver.get("https://demoqa.com/alerts");
        await driver.findElement(By.id("promtButton")).click();
        await driver.switchTo().alert().sendKeys("Pandicool");
        await driver.switchTo().alert().accept();
        const confirmResult  = await driver.findElement(By.id("promptResult")).getText();
        console.log("confirmResult : ",confirmResult);
    })
    after(async() => {
        await driver.quit();
    })
})