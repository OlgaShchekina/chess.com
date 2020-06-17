import SignUpPage from '../_pages/SignUpPage';
import {notifications, wrongEmail, wrongPassword, wrongUsername} from '../_data/signUp.data';
import {expect} from "chai";


describe('User register - negative scenarios', () => {
  before('open registration page', () => {
    SignUpPage.open();
    browser.waitUntil(
      () => browser.getTitle() === 'New Member Registration & Signup - Chess.com',
      {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
      });
  });

  it('button Create should not be clickable with default - all empty fields', () => {
    expect(SignUpPage.createBtn.isClickable()).false;
  });

  it('button Create should not be clickable with wrong username input', () => {
    for (let i = 0; i < wrongUsername.length; i++) {
      (SignUpPage.usernameField).setValue(wrongUsername[i]);
      SignUpPage.registerWithWrongUsername();
      expect(SignUpPage.createBtn.isClickable()).false;
      expect(SignUpPage.requiredNotification.getText()).eq(notifications.wrongUserInputNot);
    }
  });

  it('button Create should not be clickable with wrong Email input', () => {
    for (let i = 0; i < wrongEmail.length; i++) {
      (SignUpPage.emailField).setValue(wrongEmail[i]);
      SignUpPage.registerWithWrongEmail();
      expect(SignUpPage.createBtn.isClickable()).false;
      expect(SignUpPage.requiredNotification.getText()).eq(notifications.wrongEmailInputNot);
    }
  });

  it('button Create should not be clickable with wrong Password input', () => {
    for (let i = 0; i < wrongPassword.length; i++) {
      (SignUpPage.passwordField).setValue(wrongPassword[i]);
      SignUpPage.registerWithWrongPassword();
      expect(SignUpPage.createBtn.isClickable()).false;
      expect(SignUpPage.requiredNotification.getText()).eq(notifications.wrongPasswordInputNot);
    }
  });

  it('button Create should not be clickable with weak Password input', () => {
    SignUpPage.passwordField.setValue('123456')
    SignUpPage.registerWithWrongPassword();
    browser.pause(500)
    expect(SignUpPage.createBtn.isClickable()).false;
    expect(SignUpPage.requiredNotification.getText()).eq(notifications.weakPasswordInputNot);
  });
});