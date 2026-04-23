import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    reporter: [
        ['html', { open: 'never' }],
        ['list']
    ],

    retries: 2,

    use: {
        screenshot: 'only-on-failure',   // ✅ key setting
       // video: 'retain-on-failure'

    },
});