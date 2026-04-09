import selectors from '../selectors/profileSelectors.js';

class ProfilePage {
  constructor(page) {
    this.page = page;
  }

  getLocator(selector) {
    if (selector.type === 'label') {
      return this.page.getByLabel(selector.value, { exact: selector.exact ?? false });
    }

    if (selector.type === 'role') {
      return this.page.getByRole(selector.role, selector.options);
    }

    throw new Error(`Unsupported selector type: ${selector.type}`);
  }

  async goto() {
    await this.page.goto('/');
  }

  async fillMandatoryFields(data) {
    await this.getLocator(selectors.firstName).fill(data.firstName);
    await this.getLocator(selectors.lastName).fill(data.lastName);
    await this.getLocator(selectors.email).fill(data.email);
    await this.getLocator(selectors.password).fill(data.password);
    await this.getLocator(selectors.confirmPassword).fill(data.confirmPassword);
  }

  async fillOptionalFields(data = {}) {
    if (data.dob) {
      await this.getLocator(selectors.dob).fill(data.dob);
    }

    if (data.phone) {
      await this.getLocator(selectors.phone).fill(data.phone);
    }

    if (data.address) {
      await this.getLocator(selectors.address).fill(data.address);
    }

    if (data.linkedIn) {
      await this.getLocator(selectors.linkedIn).fill(data.linkedIn);
    }

    if (data.github) {
      await this.getLocator(selectors.github).fill(data.github);
    }
  }

  async submit() {
    await this.getLocator(selectors.submitButton).click();
  }

  async submitAndCaptureDialog() {
    const dialogMessagePromise = new Promise((resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.dismiss();
        resolve(message);
      });
    });

    await this.submit();
    return dialogMessagePromise;
  }

  successMessage() {
    return this.page.locator('p.success');
  }

  async getNativeValidationMessage(selector) {
    return this.getLocator(selector).evaluate((element) => element.validationMessage);
  }

  async isFieldValid(selector) {
    return this.getLocator(selector).evaluate((element) => element.checkValidity());
  }
}

export default ProfilePage;
