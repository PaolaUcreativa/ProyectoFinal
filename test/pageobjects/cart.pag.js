import landingPage from "../pages/landingPage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  landingPageTitle = locators.landingPageTitle,
  addToCartButton = locators.addToCartButton,
  elementText = locators.elementText,
  productCount = locators.productCount,
  closeBtn = locators.closeBtn;


describe("Add to Cart", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check the title and URL", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });

  it("Check whether the Shopping Cart is enabled", async function () {
    let result = await landingPage.addToCart();
    expect(result.state).to.be.true;
    expect(result.text).to.equal(elementText);
    await browser.waitAndClick(addToCartButton);
  });

  it("Verify message is displayed", async function () {
    let isDisplayed = await landingPage.cartMessage();
    expect(isDisplayed).to.equal(true);
    let isVisible = await landingPage.successMessage();
    expect(isVisible).to.equal(true);
  });

  it("Verify the product count from the Cart", async function () {
    await browser.waitAndClick(closeBtn);
    let getProductCount = await landingPage.getItemCount();
    expect(getProductCount).to.equal(productCount);
  });
});