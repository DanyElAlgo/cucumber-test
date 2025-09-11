const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../../pageObjects/loginPage').default;
const securePage = require('../../pageObjects/securePage').default;

Given(/^I am on the login page$/, async () => {
    await loginPage.open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await securePage.isMessageDisplayed(message);
});

