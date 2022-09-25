import mainPage from "../pages/mainpage";
import headerPage from "../pages/headerpage";
describe("Header of the telnyx site", () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/");
    });
    it("Network option is available to the user", () => {
        mainPage.acceptCookieButtonClick();
        headerPage.networkLinkClick();
        headerPage.tryNetworkButtonClick();
        headerPage.createAccountLabelVisible();
        cy.title().should("eq", "Sign Up | Telnyx");
    });
    it("Support center is available to the user", () => {
        headerPage.supportCenterLinkClick();
        headerPage.gettingStartedLinkClick();
        headerPage.gettingStartedLabelVisible();
        cy.title().should("eq", "Getting Started | Telnyx Support");
    });
    it("Get a sim card via wireless in the products list", () => {
        headerPage.wirelessLinkClick();
        headerPage.getSimCardButtonClick();
        headerPage.createFreeAccountLabelVisible();
        cy.title().should("eq", "Sign Up | Telnyx");
    });
});
