class FooterPage {
    elements = {
        telnyxLabel: () => cy.get('[class*="cHxUkN"]'),
        linkedInLink: () => cy.get('[class*="fVDMEa mchNoDecorate"][href="/contact-us"]'),
        twitterLink: () => cy.get('[href="https://twitter.com/telnyx"]'),
        facebookLink: () => cy.get('[href="https://www.facebook.com/Telnyx/"]'),

        blogLink: () => cy.get("div:nth-child(2)>div>ul>li:nth-child(2)>a>span>span"),
        searchInput: () => cy.get('[id="search"]'),
        searchResult: () => cy.get('[id="articles"]>div'),
    };
    telnyxLabelScrollIntoView() {
        this.elements.telnyxLabel().scrollIntoView();
    }
    linkedInLinkVisible() {
        this.elements.linkedInLink().should("be.visible");
    }
    twitterLinkVisible() {
        this.elements.twitterLink().should("be.visible");
    }
    facebookLinkVisible() {
        this.elements.facebookLink().should("be.visible");
    }
    blogLinkClick() {
        this.elements.blogLink().click();
    }
    typeSearchInput(search) {
        this.elements.searchInput().type(search).type("{enter}");
    }
    searchResultVisible() {
        this.elements.searchResult().should("be.visible");
    }
}
export default new FooterPage();
