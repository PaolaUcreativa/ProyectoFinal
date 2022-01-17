const assert = require("assert");
const helper = require("../../../utils/helper")
const data = require("../../../resources/home/home")

describe("Website Home Page", function() {
  it("Right Tittle", function() {
    browser.url("http://automationpractice.com/index.php")

    assert.strictEqual(helper.getBrowserTitle(), data.store_name)
  });
});