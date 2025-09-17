import Page from "./page.js";

class StartPage extends Page {
    get addProductButtons() {
        try {
            return $$(".btn.btn_primary.btn_small.btn_inventory");
        } catch (error) {
            console.error("Error locating add product buttons:", error);
            return [];
        }
    }

    get cartButton() {
        if($(".shopping_cart_badge").isExisting()){
            console.error("Error: El carrito no debería tener productos antes de agregar alguno.");
        }
        return $(".shopping_cart_link");
    }

    async addProducts(){
        try {
            for (let button of await this.addProductButtons) {
                const initialText = await button.getText();
                await button.click();
                await browser.pause(200); 
                const newText = await button.getText();
    
                if (
                    // (initialText === "Add to cart" && newText !== "Remove") ||
                    // (initialText === "Remove" && newText !== "Add to cart")
                    (initialText != newText)
                ) {
                    console.error(
                        `Error: El botón no cambió correctamente de "${initialText}" a "${newText}"`
                    );
                } else {
                    console.log(
                        `Botón cambió correctamente de "${initialText}" a "${newText}"`
                    );
                }
            }
            await browser.takeScreenshot();
        } catch (error) {
            console.error("Error adding products to cart:", error);
        }
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
            await browser.pause(500);
            await $("#first-name").setValue("John");
            await $("#last-name").setValue("Doe");
            await $("#postal-code").setValue("12345");
            const firstNameValue = await $("#first-name").getValue();
            const lastNameValue = await $("#last-name").getValue();
            const postalCodeValue = await $("#postal-code").getValue();
            if (firstNameValue !== "John" || lastNameValue !== "Doe" || postalCodeValue !== "12345") {
                new Error("Error: Los valores del formulario no se establecieron correctamente.");
            }
            await $("#continue").click();
            await browser.pause(500);
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