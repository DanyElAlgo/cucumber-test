const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../../pageObjects/loginPage').default;

Given(/^I log into the page$/, async () => {
    await loginPage.open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    const exists = await loginPage.flashMessage.isExisting();
    if (message === "." && !exists) return;
    
    await loginPage.isMessageDisplayed(message);
});

