import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  })],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.resend.com', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '')  
      }
    }
  }
})
