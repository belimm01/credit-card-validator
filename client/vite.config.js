import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        // Keep the historical output directory name used by the tooling/ignores.
        outDir: 'build',
    },
    server: {
        port: 5173,
        // Proxy API calls to the backend during local development so the browser
        // stays same-origin and no CORS configuration is needed.
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
})
