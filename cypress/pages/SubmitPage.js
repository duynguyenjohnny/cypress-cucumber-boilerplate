class SubmitPage {
  elements = {
    emailInput: () => cy.get("[id='form_item_email']"),
    lastNameInput: () => cy.get("[id='form_item_lastName']"),
    firstNameInput: () => cy.get("[id='form_item_firstName']"),
    wyhDropDownList: () => cy.get("[id='field_infoSource']"),
    wyhDropDownItems: () => cy.get("[id='form_item_infoSource_list']"),
    soiItems: () => cy.get("[id='form_item_servicesOfInterest']"),
    toaItems: () => cy.get("[id='form_item_typeOfAssociation']"),
    explainInput: () => cy.get("[id='form_item_explanation']"),
    submitBtn: () => cy.get('button:contains("Submit")'),
    verifyMessages: () => cy.get("#__nuxt > div > div > div.ant-alert.ant-alert-success.css-j6gjt1 > div > div"),
    errorMessages: () =>
      cy.get(
        "#field_servicesOfInterest > div.ant-col.ant-col-14.ant-form-item-control.css-j6gjt1 > div:nth-child(2) > div.css-j6gjt1.ant-form-item-explain.ant-form-item-explain-connected.ant-form-show-help > div"
      ),
  };

  typeEmail() {
    this.elements.emailInput().type("email@gmail.com");
  }

  typeLastname() {
    this.elements.lastNameInput().type("lastname");
  }

  typeFirstname() {
    this.elements.firstNameInput().type("firstname");
  }

  selectWhereYouHereUs() {
    this.elements.wyhDropDownList().click();
    cy.contains('Social media').click();
  }

  selectServices() {
    this.elements.soiItems().eq(0).click();
  }

  selectTypes() {
    this.elements.toaItems().eq(0).click();
  }

  clickSubmit() {
    this.elements.submitBtn().click();
  }

  submitInfo() {
    this.typeEmail();
    this.typeLastname();
    this.typeFirstname();
    this.selectWhereYouHereUs();
    this.selectServices();
    this.selectTypes();
    this.clickSubmit();
  }

  submitMissInfo() {
    this.typeEmail();
    this.typeLastname();
    this.typeFirstname();
    this.clickSubmit();
  }
}

export const submitPage = new SubmitPage();
