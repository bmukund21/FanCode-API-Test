module.exports = {
  testDir: './tests',  // Test directory
  timeout: 30000,      // Timeout for each test
  retries: 1,          // Retries on failure
  reporter: [['html', { outputFolder: 'playwright-report' }]],  // HTML report
  use: {
    headless: true,    // Run in headless mode
  },
};
