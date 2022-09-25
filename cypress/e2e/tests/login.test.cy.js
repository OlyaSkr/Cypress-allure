import mainPage from "../pages/mainpage";
import loginPage from "../pages/loginpage";
describe.only("Registration and authorization", () => {
    beforeEach(() => {
        cy.visit("https://telnyx.com/");
    });
    it("Sign up with valid credentials from main page", () => {
        mainPage.acceptCookieButtonClick();
        loginPage.signUpButtonClick();
        loginPage.typeworkEmailInut("bercof@gmail.com");
        loginPage.typeFullNameInput("Tom Armstrong");
        loginPage.typePasswordInput("yji@89G85hje87ret");
        loginPage.termsCheckboxClick();
        loginPage.emailsCheckboxClick();
        cy.title().should("eq", "Sign Up | Telnyx");
    });
    it("Log in with incorrect credentials from main page ", () => {
        loginPage.logInButtonClick();
        loginPage.typeBusinessEmailInput("test@gmail.com");
        loginPage.typePasswordField("df34#Rty67999hg");
        loginPage.submitButtonClick();
        loginPage.errorMessageVisible();
    });
    it("Forgot password from account", () => {
        loginPage.logInButtonClick();
        loginPage.forgotPasswordClick();
        loginPage.typeEmailInput("focus@gmail.com");
        loginPage.resetPaaswordButtonClick();
        loginPage.informMessageVisible();
        cy.title().should("eq", "Password Reset / Telnyx Customer Portal");
    });
});
