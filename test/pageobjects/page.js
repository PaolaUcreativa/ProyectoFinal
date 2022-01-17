/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`http://automationpractice.com/index.php${path}`)
    }
    get Item () {return $$('div.product-container')}
    get AddItemToCart () {return $('#add_to_cart')}
    get successMessage () {return $('[class="layer_cart_product col-xs-12 col-md-6"]')}
    get iframe () {return $('.fancybox-iframe')}
    get Checkout () {return $$('[title="Proceed to checkout"]')}
    get termsOfService () {return $('#cgv')}
    get linkPayByBankWire () {return $('.bankwire')}
    get ConfirmOrder () {return $('button[type="submit"][class="button btn btn-default button-medium"]')}
    get confirmationMessage () {return $('.page-heading')}

    async selectItem() {
        await this.Item[0].click()
    }

    async addToCart() {
        await this.AddItemToCart.scrollIntoView()
        await this.AddItemToCart.click()
    }

    async completeCheckout() {
        await this.Checkout[0].scrollIntoView()
        await this.Checkout[0].click()
        await (await $('#cart_title')).waitForDisplayed()
        await this.Checkout[1].scrollIntoView()
        await this.Checkout[1].click()
        await (await $('[name="processAddress"]')).waitForDisplayed()
        await (await $('[name="processAddress"]')).click()
        await this.termsOfService.click()
        await (await $('[name="processCarrier"]')).waitForDisplayed()
        await (await $('[name="processCarrier"]')).click()
    }

    async clickPayByBankWire() {
        await this.linkPayByBankWire.click()
    }

    async confirmOrder() {
        await this.Confirm.click()
    }
}


