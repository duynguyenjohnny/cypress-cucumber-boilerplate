import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { submitPage } from "@pages/SubmitPage";

Given("A web browser is at the work sample page", () => {
  cy.visit("https://raksul.github.io/recruit-qa-engineer-work-sample/");
});

When(
  "A user fills all requirement information, and clicks on the submit button",
  () => {
    submitPage.submitInfo();
  }
);

When("A user are missing information, and clicks on the submit button", () => {
  submitPage.submitMissInfo();
});

Then("the successfully messages appears", () => {
  submitPage.elements.verifyMessages().should("have.text", "Your inquiry has been submitted successfully!");
});

Then("The red warning appears", () => {
  submitPage.elements.errorMessages().should("have.text", "\'servicesOfInterest\' is required");
});
