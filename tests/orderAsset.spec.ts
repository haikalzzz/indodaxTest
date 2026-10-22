import { test, expect } from '@playwright/test';

test('Scenario Order USDT', async ({ page }) => {
  await page.goto('https://trading-simulator-qa-test.netlify.app/');
  await expect(page).toHaveTitle(/Trading Simulator/);

  //Login ke akun demo
  await page.getByTestId('btn-open-login').click();
  await page.getByTestId('input-login-email').fill('demo@exchange.mock');
  await page.getByTestId('input-login-password').fill('password123');
  await page.getByTestId('btn-login-submit').click();

  //Cari pair USDT
  await page.getByTestId('btn-open-pair-selector').click();
  await page.getByTestId('pair-item-usdt_idr').click();

  //Order Beli USDT
  await page.getByTestId('input-order-price').click();
  await page.getByTestId('input-order-price').fill('15900');
  await page.getByTestId('input-order-amount').click();
  await page.getByTestId('input-order-amount').fill('10');
  await page.getByTestId('btn-submit-order').click();

  //Order Jual USDT
  await page.getByTestId('tab-side-sell').click();
  await page.getByTestId('input-order-price').click();
  await page.getByTestId('input-order-price').fill('15500');
  await page.getByTestId('input-order-amount').click();
  await page.getByTestId('input-order-amount').fill('10');
  await page.getByTestId('btn-submit-order').click();

});