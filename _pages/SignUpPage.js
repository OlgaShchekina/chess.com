import BasePage from './BasePage';
import {skillLevel} from '../_data/signUp.data'

class SignUpPage extends BasePage {

  get header() {
    return $('h1')
  }

  get createBtn() {
    return browser.$('//button[@type="submit"] ')
  }

  get requiredNotification() {
    return browser.$('.form-error-component.register-form-input-error')
  }

  get usernameField() {
    return $('#registration_username')
  }

  get emailField() {
    return $('#registration_email')
  }

  get passwordField() {
    return $('#registration_password')
  }

  get skillLevel() {
    return $('#registration_skillLevel')
  }

  get eye() {
    return $('.icon-font-chess.eye')
  }

  registerWithWrongUsername() {
    this.emailField.setValue('valid@user.com');
    this.passwordField.setValue('password!12');
    this.skillLevel.selectByVisibleText(skillLevel[3]);
  }

  registerWithWrongEmail() {
    this.usernameField.setValue('someNewUser1');
    this.passwordField.setValue('password!12');
    this.skillLevel.selectByVisibleText(skillLevel[2]);
  }

  registerWithWrongPassword() {
    this.usernameField.setValue('someNewUser1');
    this.emailField.setValue('valid@user.com');
    this.skillLevel.selectByVisibleText(skillLevel[4]);
  }

  registerWithCorrectInput() {
    this.usernameField.setValue('someNewUser1');
    this.emailField.setValue('valid@user.com');
    this.passwordField.setValue('password!12');
    this.skillLevel.selectByVisibleText(skillLevel[1]);
  }

  registerWithCorrectUsername() {
    this.emailField.setValue('valid@user.com');
    this.passwordField.setValue('password!12');
    this.skillLevel.selectByVisibleText(skillLevel[2]);
  }

  registerWithCorrectEmail() {
    this.usernameField.setValue('someNewUser1');
    this.passwordField.setValue('password!12');
    this.skillLevel.selectByVisibleText(skillLevel[3]);
  }

  registerWithCorrectPassword() {
    this.usernameField.setValue('someNewUser1');
    this.emailField.setValue('valid@user.com');
    this.skillLevel.selectByVisibleText(skillLevel[4]);
  }


  open() {
    super.open('register');
  }
}

export default new SignUpPage();
