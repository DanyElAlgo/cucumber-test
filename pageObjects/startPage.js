import Page from "./page.js";

class StartPage extends Page {
    get addProductButtons() {
        return $$(".btn.btn_primary.btn_small.btn_inventory");
    }

    get cartButton() {
        return $(".shopping_cart_link");
    }

    async addProducts(){
        for (let button of await this.addProductButtons) {
            await button.click();
        }
        await browser.takeScreenshot();
    }

    async goToCart(){
        try {
            await this.cartButton.click();
            await browser.pause(500); 
            await browser.takeScreenshot();
            await $("#checkout").click();
        } catch (error) {
            console.error("Error navigating to cart:", error);
        }
    }

    async finishPurchase(){
        try {
            await $("#first-name").setValue("John");
            await $("#last-name").setValue("Doe");
            await $("#postal-code").setValue("12345");
            await $("#continue").click();
            await $("#finish").click();
            await browser.takeScreenshot();
        }
        catch (error) {
            console.error("Error finishing purchase:", error);
        }
    }

  async open() {
    await super.open("inventory.html");
  }
}

export default new StartPage();