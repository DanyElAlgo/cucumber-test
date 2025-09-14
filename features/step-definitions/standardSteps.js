const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../../pageObjects/loginPage').default;
const startPage = require('../../pageObjects/startPage').default;

Given(/^I log in$/, async () => {
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");
});
When(/^I add stuff to my cart$/, async () => {
    await startPage.addProducts();
});
Then(/^I can buy them$/, async () => {
    console.log("Buying products...");
    await startPage.goToCart();
    await startPage.finishPurchase();
});