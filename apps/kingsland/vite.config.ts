import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'kingsland',
            filename: 'remoteEntry.js',
            exposes: {
              './KingslandRoutes': './src/KingslandRoutes.tsx',
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
    server: {
        proxy: {
            '/api': 'http://localhost:4000',
            '/ws': {
                target: 'ws://localhost:4000',
                ws: true,
            },
        },
    },
});
