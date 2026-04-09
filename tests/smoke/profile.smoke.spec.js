import { test, expect } from '@playwright/test';
import ProfilePage from '../../src/pages/profilePage.js';
import profileTestData from '../../src/data/profileTestData.js';

test.describe('Profile form smoke', () => {
  test('1:should submit form successfully with mandatory valid fields', async ({ page }) => {
    const profilePage = new ProfilePage(page);
    const { validUser } = profileTestData;

    await profilePage.goto();
    await profilePage.fillMandatoryFields(validUser);
    await profilePage.submit();

    await expect(page.getByText('Profile submitted successfully!')).toBeVisible();
  });
});
