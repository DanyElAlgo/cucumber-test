// infinite_scroll
import Page from "./page.js";
class ScrollPage extends Page {
  get scrollText() {
    return $("//h3[contains(text(),'Infinite Scroll')]");
  }

  async scroll(){
    await this.scrollText.scrollIntoView();
    await browser.pause(2000);
  }

  async open() {
    await super.open("infinite_scroll");
  }
}

export default new ScrollPage();
