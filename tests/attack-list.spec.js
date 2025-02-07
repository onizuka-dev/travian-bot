import 'dotenv/config';
import { test, expect } from '@playwright/test';
const { login } = require('../actions/login');

test('attack list', async ({ page }) => {
  await login(page, process.env.USERNAME, process.env.PASSWORD);

  const attackListUrl = `${process.env.SERVER_URL}${process.env.ATTACK_LIST_RELATIVE_URL}`;
  await page.goto(attackListUrl);
  await page.waitForTimeout(2000);

  const interval = parseInt(process.env.CLICK_INTERVAL_MINUTES || 10) * 60 * 1000;

  while (true) {
    try {
      const button = page.getByRole('button', { name: 'Comenzar todas las listas de asaltos' });

      if (await button.isVisible()) {
        await button.click();
      }

      console.log(`[🗡️  Attack List] >>> Next trigger at: ${new Date(Date.now() + interval).toLocaleTimeString()}`);

      await page.waitForTimeout(interval);
    } catch (error) {
      console.error('Error while clicking:', error.message);
      break;
    }
  }
});
