import { defineConfig } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3000';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL,
    headless: true,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx next start -p 3000',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: true,
    timeout: 120_000
  },
});
