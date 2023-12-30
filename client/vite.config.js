import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // backend server connect
  server:{
    proxy: {
      '/api/': {
        target: 'http://localhost:7000',
      }
    }
  }
})


