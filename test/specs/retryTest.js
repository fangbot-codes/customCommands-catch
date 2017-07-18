describe('Try/Catch', () => {
  it('should catch errors propogated from custom commands', () => {
    browser.url('https://google.com');
    try {
      browser.customClick('#NonExistingId');
    } catch (err) {
      console.log('Caught error: ' + err);
    }
    // browser.inputWhenVisible(TtoLoginPage.passwordInput, 'Intuit01-');
    // browser.clickWhenVisible(TtoLoginPage.signInButton);
    // browser.waitForVisibility(TtoLandingPage.piTab, 60000);
    // browser.assertTextEquals(TtoLandingPage.piTab, 'Personal Info');
  });
});
