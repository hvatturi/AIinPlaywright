// @ts-check
import { test, expect } from '@playwright/test';
import { ai } from "@zerostep/playwright"
import { text } from 'node:stream/consumers';

test('AI Integration Test', async ({ page }) => {
  const aiArgs = { page, test }
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  const text = await ai('what is the Discount price of Tomato', aiArgs);
  expect(text).toBe('26');
});
