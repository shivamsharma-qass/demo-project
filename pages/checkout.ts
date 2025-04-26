import { Page } from '@playwright/test';

export async function checkout(page: Page): Promise<void> {
  //payment process
  const cardNumberFrame = page
  .frameLocator('iframe[name^="card-fields-number"]')
  .locator('input[name="number"]');
  await cardNumberFrame.waitFor({ state: 'visible', timeout: 15000 });
  await cardNumberFrame.fill('1');

  // Expiry
  const expiryFrame = page
  .frameLocator('iframe[name^="card-fields-expiry"]')
  .locator('input[name="expiry"]');
  await expiryFrame.waitFor({ state: 'visible', timeout: 15000 });
  await expiryFrame.fill('12/30');

  // CVV
  const cvvFrame = page
  .frameLocator('iframe[name^="card-fields-verification_value"]')
  .locator('input[name="verification_value"]');
  await cvvFrame.waitFor({ state: 'visible', timeout: 15000 });
  await cvvFrame.fill('123');
}
