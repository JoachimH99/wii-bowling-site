import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
        host: true,           // listen on all interfaces
        strictPort: false,    // optional, allows fallback port
        // allow all hosts (needed for tunnels with random hostnames)
        allowedHosts: true
    }
})
