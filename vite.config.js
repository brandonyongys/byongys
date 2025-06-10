import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    // Optional: include gray-matter here if you want faster builds
    include: ['gray-matter']
  },
  // 👇👇 ADD THIS
  resolve: {
    conditions: ['import'],
  },
})
