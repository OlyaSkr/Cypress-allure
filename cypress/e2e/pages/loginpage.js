class LoginPage {
    elements = {
        signUpButton: () => cy.get('li [class="sc-5d3a275a-0 eKznVb"]>a'),
        workEmailInput: () => cy.get('[id="email"]'),
        fullNameInput: () => cy.get('[id="full_name"]'),
        passwordInput: () => cy.get('[id="password"]'),
        termsCheckbox: () => cy.get('[id="terms_and_conditions"]'),
        emailsCheckbox: () => cy.get(' [id="subscription_opt_in"]'),

        logInButton: () => cy.get('[class="sc-ee0ec023-2 biNvWx"] :nth-child(6)'),
        businessEmailInput: () => cy.get('[class*="eSxLXo"]>label>div>div>input'),
        passwordField: () => cy.get('[name="password"]'),
        submitButton: () => cy.get('[class*="eazkBi"]'),
        errorMessage: () => cy.get('[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]'),

        forgotPassword: () => cy.get('[href="/#/login/password-reset"]'),
        emailInput: () => cy.get('[name="email"]'),
        resetPaaswordButton: () => cy.get(' [class*="jGQzza"]>button'),
        informMessage: () => cy.get('[class*="bCowrg"]>div'),
    };
    signUpButtonClick() {
        this.elements.signUpButton().click();
    }
    typeworkEmailInut(workemail) {
        this.elements.workEmailInput().type(workemail);
    }
    typeFullNameInput(fullname) {
        this.elements.fullNameInput().type(fullname);
    }
    typePasswordInput(password) {
        this.elements.passwordInput().type(password);
    }
    termsCheckboxClick() {
        this.elements.termsCheckbox().click({ force: true });
    }
    emailsCheckboxClick() {
        this.elements.emailsCheckbox().click({ force: true });
    }
    logInButtonClick() {
        this.elements.logInButton().click({ force: true });
    }
    typeBusinessEmailInput(businessemail) {
        this.elements.businessEmailInput().type(businessemail);
    }
    typePasswordField(password) {
        this.elements.passwordField().type(password);
    }
    submitButtonClick() {
        this.elements.submitButton().click();
    }
    errorMessageVisible() {
        this.elements.errorMessage().should("be.visible");
    }
    forgotPasswordClick() {
        this.elements.forgotPassword().click();
    }
    typeEmailInput(email) {
        this.elements.emailInput().type(email);
    }
    resetPaaswordButtonClick() {
        this.elements.resetPaaswordButton().click();
    }
    informMessageVisible() {
        this.elements.informMessage().should("be.visible");
    }
}
export default new LoginPage();
