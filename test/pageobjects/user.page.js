const assert = require("assert")
const signupPage = require("../../../pages/signup/signup.page")
const helper = require("../../../utils/helper")
const data = require("../../../resources/signup/signup")

describe("Sign Up page", function() {
  before(function (){
    browser.url("/index.php?controller=authentication&back=my-account")
  })

  it("Error message with invalid credentials", function() {
    signupPage.fillPreForm(data.signup_pre_form_valid_credentials)

    helper.takeScreenshot("./logs/screenshot/", "signup_pre_form_valid_credentials.png")

    const elem = $("#customer_firstname")
    elem.waitForExist(2000)

    assert.strictEqual(helper.getPageHeader(), data.signup_pre_form_valid_credentials.assertion)
  });

  it("Create an account", function() {
    signupPage.fillForm(data.signup_valid_credentials)

    helper.takeScreenshot("./logs/screenshot/", "signup_valid_credentials.png")

    assert.strictEqual(helper.getPageHeader(), data.signup_valid_credentials.assertion)
  });
});