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

  async submit() {
    await this.getLocator(selectors.submitButton).click();
  }
}

export default ProfilePage;
