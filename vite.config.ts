import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',
  base: '/demo/',
  plugins: [react()],
  build: {
    outDir: '../dist/demo',
    emptyOutDir: true,
  },
  server: {
    open: '/demo/',
  },
})
