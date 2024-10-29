import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import dotenv from 'dotenv';

const env = dotenv.config({ path: '../../.env'});

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
            '/api': env.parsed?.VITE_KINGSLAND_SERVER_URL || '',
            '/ws': {
                target: env.parsed?.VITE_KINGSLAND_SERVER_WEBSOCKET_URL,
                ws: true,
            },
        },
    },
});
