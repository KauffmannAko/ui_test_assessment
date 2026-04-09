import { test, expect } from '@playwright/test';
import ProfilePage from '../../src/pages/profilePage.js';
import selectors from '../../src/selectors/profileSelectors.js';
import profileTestData from '../../src/data/profileTestData.js';

test.describe('Profile form regression', () => {
  test('1:should submit form successfully with required data set used by the application', async ({ page }) => {
    const profilePage = new ProfilePage(page);
    const { validUser } = profileTestData;

    await profilePage.goto();
    await profilePage.fillMandatoryFields(validUser);
    await profilePage.fillOptionalFields({ linkedIn: validUser.linkedIn });
    await profilePage.submit();

    await expect(profilePage.successMessage()).toHaveText('Success!');
  });

  test('2:should block submission when mandatory fields are empty', async ({ page }) => {
    const profilePage = new ProfilePage(page);

    await profilePage.goto();
    await profilePage.getLocator(selectors.firstName).fill('John');
    const alertMessage = await profilePage.submitAndCaptureDialog();
    expect(alertMessage).toBe('Last name must be filled out');
    await expect(profilePage.successMessage()).toHaveCount(0);
  });

  test('3:should block submission when email address is invalid', async ({ page }) => {
    const profilePage = new ProfilePage(page);
    const { invalidEmailUser } = profileTestData;

    await profilePage.goto();
    await profilePage.fillMandatoryFields(invalidEmailUser);
    await profilePage.fillOptionalFields({ linkedIn: invalidEmailUser.linkedIn });
    await profilePage.submit();

    await expect(profilePage.successMessage()).toHaveCount(0);
    await expect.soft(await profilePage.isFieldValid(selectors.email)).toBe(false);
    expect(await profilePage.getNativeValidationMessage(selectors.email)).toContain('@');
  });

  test('4:should block submission when password and confirm password do not match', async ({ page }) => {
    const profilePage = new ProfilePage(page);
    const { mismatchedPasswordUser } = profileTestData;

    await profilePage.goto();
    await profilePage.fillMandatoryFields(mismatchedPasswordUser);
    await profilePage.fillOptionalFields({ linkedIn: mismatchedPasswordUser.linkedIn });
    const alertMessage = await profilePage.submitAndCaptureDialog();

    expect(alertMessage).toBe('Passwords do not match');
    await expect(profilePage.successMessage()).toHaveCount(0);
  });
});
