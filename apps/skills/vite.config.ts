import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'skills',
            filename: 'remoteEntry.js',
            exposes: {
                './SkillsRoutes': './src/SkillsRoutes.tsx',
            },
            shared: ['react', 'react-dom', 'react-router-dom'],
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    },
})
