import ScrollPage from '../../pageObjects/scrollPage.js';

// pageObjects/scrollPage.test.js

describe('ScrollPage', () => {
    beforeEach(async () => {
        await ScrollPage.open();
    });

    it('should display the scroll text', async () => {
        const isDisplayed = await ScrollPage.scrollText.isDisplayed();
        expect(isDisplayed).toBe(true);
    });

    it('should scroll down when scroll method is called', async () => {
        const initialScroll = await browser.execute(() => window.scrollY);
        await ScrollPage.scroll();
        const afterScroll = await browser.execute(() => window.scrollY);
        expect(afterScroll).toBeGreaterThanOrEqual(initialScroll);
    });

    it('should scroll further after multiple scrolls', async () => {
        const initialScroll = await browser.execute(() => window.scrollY);
        await ScrollPage.scroll();
        await ScrollPage.scroll();
        const afterScroll = await browser.execute(() => window.scrollY);
        expect(afterScroll).toBeGreaterThan(initialScroll);
    });
});