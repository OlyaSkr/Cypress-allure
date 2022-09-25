import mainPage from "../pages/mainpage";
import footerPage from "../pages/footerpage";
describe("Footer of the telnyx site", () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/");
    });
    it("Social links are visible", () => {
        mainPage.acceptCookieButtonClick();
        footerPage.telnyxLabelScrollIntoView();
        footerPage.linkedInLinkVisible();
        footerPage.twitterLinkVisible();
        footerPage.facebookLinkVisible();
    });
    it("Search information in the blog section", () => {
        footerPage.telnyxLabelScrollIntoView();
        footerPage.blogLinkClick();
        footerPage.typeSearchInput("storage");
        footerPage.searchResultVisible();
        cy.title().should("eq", "Read our blog!");
    });
});
