class ApplyformPage {
    elements = {
        joinTheWaitListLink: () => cy.get('span [href="/products/storage"]'),
        joinButton: () => cy.get('[class="sc-31a8cefb-10 isgwvf"]>div>div>a'),
        firstNameInput: () => cy.get('[id="FirstName"]'),
        lastNameInput: () => cy.get('[id="LastName"]'),
        businessEmailInput: () => cy.get('[id="Email"]'),
        applyButton: () => cy.get('[class="mktoButton"]'),
        confirmLabel: () => cy.get('[class="sc-31a8cefb-6 eCGKsC"]>span'),

        talkToExpertLink: () => cy.get('[class*="byuCMl"] [href="/contact-us"]'),
        reasonForContact: () => cy.get('[id="Reason_for_Contact__c"]'),
        countryPhoneNumber: () => cy.get('[id="Phone_Number_Extension__c"]'),
        phoneNumberInput: () => cy.get('[id="Phone_Number_Base__c"]'),
        companySiteInput: () => cy.get('[id="Website"]'),
        primaryInterest: () => cy.get('[id="Use_Case_Form__c"]'),
        submitButton: () => cy.get('[type="submit"]'),
        confirmMessage: () => cy.get('[class*="cQGyop"]>h1'),
    };
    joinTheWaitListLinkClick() {
        this.elements.joinTheWaitListLink().click();
    }
    joinButtonClick() {
        this.elements.joinButton().click({ force: true });
    }
    typeFirstName(firstname) {
        this.elements.firstNameInput().type(firstname);
    }
    typeLastName(lastname) {
        this.elements.lastNameInput().type(lastname);
    }
    typeBusinessEmailName(email) {
        this.elements.businessEmailInput().type(email);
    }
    applyButtonClick() {
        this.elements.applyButton().click();
    }
    confirmLabelVisible() {
        this.elements.confirmLabel().should("be.visible");
    }
    talkToExpertLinkClick() {
        this.elements.talkToExpertLink().click();
    }
    reasonForContactSelect(value) {
        this.elements.reasonForContact().select(value);
    }
    countryPhoneNumberSelect(value) {
        this.elements.countryPhoneNumber().select(value);
    }
    typephoneNumberInput(phonenumber) {
        this.elements.phoneNumberInput().type(phonenumber);
    }
    typecompanySiteInput(website) {
        this.elements.companySiteInput().type(website);
    }
    primaryInterestSelect(value) {
        this.elements.primaryInterest().select(value);
    }
    submitButtonClick() {
        this.elements.submitButton().click();
    }
    confirmMessageVisible() {
        this.elements.confirmMessage().should("be.visible");
    }
}
export default new ApplyformPage();
