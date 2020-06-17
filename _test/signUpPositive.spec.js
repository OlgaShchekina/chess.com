import SignUpPage from '../_pages/SignUpPage';
import {correctEmail, correctPassword, correctUsername} from '../_data/signUp.data';
import {expect} from "chai";

describe('User register - positive scenarios', () => {
  before('open registration page', () => {
    SignUpPage.open();
    browser.waitUntil(
      () => browser.getTitle() === 'New Member Registration & Signup - Chess.com',
      {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s'
      });
  });

  it('should check the right Register page header', () => {
    expect(SignUpPage.header.getText()).eq('Join Now — It’s Free & Easy!');
  });

  it('button Create should be clickable with all correct input', () => {
    SignUpPage.registerWithCorrectInput()
    expect(SignUpPage.createBtn.isClickable()).true;
  });

  it('should check correct usernames input', () => {
    for (let i = 0; i < correctUsername.length; i++) {
      (SignUpPage.usernameField).setValue(correctUsername[i]);
      SignUpPage.registerWithWrongUsername()
      expect(SignUpPage.createBtn.isClickable()).true;
    }
  });

  it('should check correct emails input', () => {
    for (let i = 0; i < correctEmail.length; i++) {
      (SignUpPage.emailField).setValue(correctEmail[i]);
      SignUpPage.registerWithCorrectEmail()
      expect(SignUpPage.createBtn.isClickable()).true;
    }
  });

  it('should check correct passwords input', () => {
    for (let i = 0; i < correctPassword.length; i++) {
      (SignUpPage.passwordField).setValue(correctPassword[i]);
      SignUpPage.registerWithCorrectPassword()
      expect(SignUpPage.createBtn.isClickable()).true;
    }
  });
});