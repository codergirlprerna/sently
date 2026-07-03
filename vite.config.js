import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Firebase into its own chunk — only loads when user tries to sign in
          firebase: ['firebase/app', 'firebase/auth'],
          // Split framer-motion — large library, cache separately
          motion: ['framer-motion'],
        },
      },
    },
  },
})