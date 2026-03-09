// @ts-check
import { test, expect } from '@playwright/test';
import { ai } from "@zerostep/playwright";

test('Search for Vipul Nandan on Google', async ({ page }) => {
  const aiArgs = { page, test };
  
  // Navigate to Google
  await page.goto('https://www.google.com');
  
  // Accept cookies if prompted (this might vary)
  try {
    await page.click('text=Accept all', { timeout: 5000 });
  } catch (e) {
    // Cookies dialog might not appear
  }
  
  // Search for "Vipul Nandan"
  await page.fill('textarea[name="q"]', 'Vipul Nandan');
  await page.press('textarea[name="q"]', 'Enter');
  
  // Wait for results to load
  await page.waitForSelector('h3');
  
  // Use AI to fetch and summarize the search results
  const searchResults = await ai('Extract the top 5 search result titles and their URLs from the Google search results page', aiArgs);
  
  console.log('Search Results for Vipul Nandan:');
  console.log(searchResults);
  
  // You can add assertions here if needed
  expect(searchResults).toBeTruthy();
});