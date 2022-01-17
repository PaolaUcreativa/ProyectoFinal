const assert = require("assert")
const loginPage = require("../../../pages/login/login.page")
const helper = require("../../../utils/helper")
const data = require("../../../resources/login/login")

describe("Website Login Page", function() {
  before(function (){
    browser.url("/index.php?controller=authentication&back=my-account")
  }),

  it("Load My Account Page", function() {
    loginPage.fillForm(data.valid_credentials)

    assert.strictEqual(helper.getBrowserTitle(), data.valid_credentials.assertion_title)
    assert.strictEqual(helper.getPageHeader(), data.valid_credentials.assertion_page)

    helper.takeScreenshot("./logs/screenshot/", "valid_login.png")
  });
});