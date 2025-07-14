import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup.jsx',
    css: true,
    testTimeout: 10000,
    hookTimeout: 10000,
    exclude: [
      'node_modules/**',
      'src/test/disabled/**',
      '**/*.config.{js,ts}',
    ],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        'src/test/disabled/',
        '**/*.test.{js,jsx}',
        '**/*.spec.{js,jsx}',
        'src/main.jsx',
        'vite.config.js',
        'tailwind.config.js',
        'postcss.config.js',
      ],
    },
  },
})
