import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions: {
    input: './main.jsx'
  },
  plugins: [react()],
})
