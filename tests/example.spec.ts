import { test, expect } from '@playwright/test';
import { ReportingApi } from '@reportportal/agent-js-playwright';
    test('basic test', async ({ page }, testInfo) => {

  await page.goto('https://adakpro.com/');
  await page.getByRole('link', { name: 'Products & Services' }).click();
  await page.getByRole('link', { name: 'Accounting' }).click();
  await page.getByRole('link', { name: 'Start right now' }).click();
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

  await page.locator('#avia_1_1').click();
  await page.locator('#avia_1_1').fill('dawod');
  await page.locator('#avia_1_1').press('Tab');
  await page.locator('#avia_2_1').fill('d.ali@adakpro.com');
  await page.locator('#avia_2_1').press('Tab');
  await page.getByPlaceholder('Company*').fill('adak');
  await page.getByPlaceholder('Company*').press('Tab');
  await page.getByPlaceholder('Subject*').fill('test playwright');
  await page.getByPlaceholder('Subject*').press('Tab');
  await page.getByPlaceholder('Message*').fill('execution test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'Products & Services' }).click();
  await page.getByRole('link', { name: 'CRM' }).click();
  await page.getByRole('tab', { name: 'Accounting' }).click();
  await page.getByRole('tab', { name: 'Sales' }).click();
  await page.getByRole('tab', { name: 'Marketing' }).click();
  await page.getByRole('tab', { name: 'Ticketing' }).click();
  await page.getByRole('tab', { name: 'CRM' }).click();
  await page.getByRole('tab', { name: 'HR' }).click();
  await page.getByPlaceholder('Name*').click();
  await page.getByPlaceholder('Name*').fill('ali');
  await page.getByPlaceholder('Name*').press('Tab');
  await page.getByPlaceholder('E-Mail*').fill('ali@adak.ir');
  await page.getByRole('button', { name: 'Subscribe' }).click();
});
