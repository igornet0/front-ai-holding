import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   
    port: 3000, 
    strictPort: true, 
  },
  
  build: {
    rollupOptions: {
      output: {
        // Хеширование файлов для кэширования
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})
