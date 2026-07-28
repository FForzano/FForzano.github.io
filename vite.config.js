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
  build: {
    // lucide-react alone accounts for most of icons-vendor; the split still
    // pays off for caching (vendor code rarely changes vs. app code, which
    // changes on every content edit), even though total bytes are the same.
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'markdown-vendor': ['react-markdown'],
          'icons-vendor': ['lucide-react'],
        },
      },
    },
  },
})
