import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, '/')

          if (!normalized.includes('node_modules')) return undefined
          if (normalized.includes('/@supabase/')) return 'supabase-vendor'
          if (normalized.includes('/react-router')) return 'react-vendor'
          if (
            normalized.includes('/react/') ||
            normalized.includes('/react-dom/') ||
            normalized.includes('/scheduler/')
          ) {
            return 'react-vendor'
          }

          return undefined
        },
      },
    },
  },
})
