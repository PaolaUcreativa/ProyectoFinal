import landingPage from "../pages/landingPage";
import locators from "../utils/locators";

const baseUrl = locators.baseUrl,
  landingPageTitle = locators.landingPageTitle,
  printedSummerDress = locators.printedSummerDress,
  quantityWanted = locators.quantityWanted,
  numberOfItems = locators.numberOfItems,
  addToCartButton = locators.addToCartButton,
  cart = locators.cart,
  closeBtn = locators.closeBtn,
  totalProductPrice = locators.totalProductPrice;


describe("Check product from the Cart", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check title and URL", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });

  it("click on the 5th", async function () {
    const isDisplayed = await landingPage.printedSummerDress();
    await browser.waitAndClick(printedSummerDress);
    expect(isDisplayed).to.be.true;
  });

  it("Add quantity", async function () {
    let isDisplayed = await landingPage.dressTitle();
    expect(isDisplayed).to.be.true;
    await browser.waitAndSendKeys(quantityWanted, numberOfItems);
    await browser.waitAndClick(addToCartButton);
    await browser.waitAndClick(closeBtn);
    let getProductCount = await landingPage.getItemCount();
    expect(getProductCount).to.equal(numberOfItems);
  });

  it("Total price is accurate from the Cart", async function () {
    await browser.waitAndClick(cart);
    let productPrice = await landingPage.getTotalPrice();
    expect(productPrice).to.equal(totalProductPrice);
  });
});