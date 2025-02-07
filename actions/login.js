import 'dotenv/config';

async function login(page, username, password) {
  await page.goto(process.env.SERVER_URL);

  const loginScreen = await page.locator('input[placeholder="Email address / account name"]').isVisible();

  if (loginScreen) {
    await page.fill('input[placeholder="Email address / account name"]', username);
    await page.waitForTimeout(500);

    await page.fill('input[placeholder="Password"]', password);
    await page.waitForTimeout(500);

   await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForNavigation();
  } else {
    throw new Error('Already logged in', loginScreen);
  }
}

module.exports = { login };
