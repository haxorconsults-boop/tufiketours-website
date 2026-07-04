const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Listen to console logs and errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR LOG:', msg.text());
    } else {
      console.log('BROWSER LOG:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('UNCAUGHT EXCEPTION:', err.message);
  });

  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
  });

  console.log('Navigating to https://tufiketoursandtravels.com ...');
  await page.goto('https://tufiketoursandtravels.com', { waitUntil: 'networkidle2' });
  
  console.log('\n--- Checking DOM ---');
  const bodyHtml = await page.evaluate(() => document.body.innerHTML.substring(0, 500));
  console.log('Body HTML preview:', bodyHtml);

  await browser.close();
})();
