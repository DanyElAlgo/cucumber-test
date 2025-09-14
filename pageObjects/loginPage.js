import Page from "./page.js";

class LoginPage extends Page {
  get inputUsername() {
    return $("#user-name");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnLogin() {
    return $('#login-button');
  }
  get flashMessage() {
    return $("/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3");
  }
  async getFlashMessage() {
    message = await this.flashMessage.getText();
    console.log("#################################")
    console.log(message);
    return message;
  }
  async isMessageDisplayed(expectedText) {
    await expect(this.flashMessage).toBeDisplayed();
    const text = await this.flashMessage.getText();
    expect(text).toContain(expectedText);
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  async open() {
    await super.open("");
  }
}

export default new LoginPage();
