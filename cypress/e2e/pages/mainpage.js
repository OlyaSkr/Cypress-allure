class MainPage {
    elements = {
        acceptCookieButton: () => cy.get('[aria-label="close and deny"]~div>div>button'),
        talkToExpertLink: () => cy.get('[class*="fVDMEa mchNoDecorate"][href="/contact-us"]'),
    };
    acceptCookieButtonClick() {
        this.elements.acceptCookieButton().click();
    }
    talkToExpertLinkClick() {
        this.elements.talkToExpertLink().click();
    }
}
export default new MainPage();
