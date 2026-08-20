import { defineConfig, devices } from "@playwright/test";

const frontendRoot = process.env.FRONTEND_ROOT ?? `${process.cwd()}/frontend`;
const port = Number(process.env.PLAYWRIGHT_PORT ?? "4391");

export default defineConfig({
  testDir: "./browser",
  outputDir: process.env.PLAYWRIGHT_OUTPUT_DIR ?? "test-results",
  timeout: 30_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "line" : "list",
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command: `python3 -m http.server ${port}`,
    cwd: frontendRoot,
    url: `http://127.0.0.1:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 1000 } } },
    { name: "mobile", use: { ...devices["Pixel 5"], viewport: { width: 390, height: 844 } } },
  ],
});
