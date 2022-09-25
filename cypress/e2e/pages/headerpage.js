class HeaderPage {
    elements = {
        networkLink: () => cy.get('span [href="/solutions/global-ip-network"]'),
        tryNetworkButton: () => cy.get('[class*="fZNeGm"]>div>a'),
        createAccountLabel: () => cy.get('[class*="gkWopw gjiitA"]'),

        supportCenterLink: () => cy.get('[class*="biNvWx"] :nth-child(5)'),
        gettingStartedLink: () => cy.get("section>div:nth-child(1)>a>div>div.collection_meta>h2"),
        gettingStartedLabel: () => cy.get('[class="t__h1"]'),

        productsLink: () => cy.get("div.sc-14c941d7-7.hhCIhu>ul>li:nth-child(1)>span>span"),
        getSimCardButton: () => cy.get("div.fJEUzb a.sc-5d3a275a-1"),
        createFreeAccountLabel: () => cy.get("h1.gjiitA"),
    };
    networkLinkClick() {
        this.elements.networkLink().click();
    }
    tryNetworkButtonClick() {
        this.elements.tryNetworkButton().click();
    }
    createAccountLabelVisible() {
        this.elements.createAccountLabel().should("be.visible");
    }
    supportCenterLinkClick() {
        this.elements.supportCenterLink().click({ force: true });
    }
    gettingStartedLinkClick() {
        this.elements.gettingStartedLink().click();
    }
    gettingStartedLabelVisible() {
        this.elements.gettingStartedLabel().should("be.visible");
    }
    wirelessLinkClick() {
        cy.contains("Wireless").click({ force: true });
    }

    getSimCardButtonClick() {
        this.elements.getSimCardButton().click({ force: true });
    }
    createFreeAccountLabelVisible() {
        this.elements.createFreeAccountLabel().should("be.visible");
    }
}
export default new HeaderPage();
