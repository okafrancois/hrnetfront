import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), viteCompression()],
    css: {
        devSourcemap: true,
    },
    server: {
        port: process.env.PORT as unknown as number || 8080,
    }
})
