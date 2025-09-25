import { defineConfig } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3000';

export default defineConfig({
  outputDir: "test-results",
  reporter: [["html", { open: "never" }]],
  testDir: './tests',
  timeout: 240_000_000_000,
  use: {
    headless: true,
    trace: 'on-first-retry',          // coleta trace só na 1ª tentativa após falha
    screenshot: 'only-on-failure',    // salva screenshot apenas em falhas
    video: 'retain-on-failure',       // mantém vídeo apenas em falhas
  },
  webServer: {
    command: 'npx next start -p 3000',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
