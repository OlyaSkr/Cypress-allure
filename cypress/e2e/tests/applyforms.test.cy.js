import mainPage from "../pages/mainpage";
import applyformPage from "../pages/applyform";
describe("Apply forms of telnyx site", () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/");
    });
    it("Join the waitlist form from main page", () => {
        mainPage.acceptCookieButtonClick();
        applyformPage.joinTheWaitListLinkClick();
        applyformPage.joinButtonClick();
        applyformPage.typeFirstName("David");
        applyformPage.typeLastName("Grant");
        applyformPage.typeBusinessEmailName("user@gmail.com");
        applyformPage.applyButtonClick();
        applyformPage.confirmLabelVisible();
        cy.title().should("eq", "Thanks for joining the waitlist for Telnyx Storage!");
    });
    it("Talk to an expert form from main page", () => {
        applyformPage.talkToExpertLinkClick();
        applyformPage.reasonForContactSelect("Sales Inquiry");
        applyformPage.typeFirstName("Mark");
        applyformPage.typeLastName("Nelson");
        applyformPage.typeBusinessEmailName("newuser@gmail.com");
        applyformPage.countryPhoneNumberSelect("+1");
        applyformPage.typephoneNumberInput("0235685412");
        applyformPage.typecompanySiteInput("http://www.test.com");
        applyformPage.primaryInterestSelect("AI / Voice Analytics");
        applyformPage.submitButtonClick();
        applyformPage.confirmMessageVisible();
        cy.title().should("eq", "Telnyx - Telecom APIs for Voice, Messaging and Fax");
    });
});
