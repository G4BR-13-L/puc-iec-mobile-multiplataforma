import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'TMDB Popular Movies',
        short_name: 'TMDB Movies',
        description: 'Filmes populares do The Movie Database — funciona offline',
        theme_color: '#01b4e4',
        background_color: '#0d253f',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'icons/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/pwa-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        // Pré-cache dos assets estáticos (shell da PWA)
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // ── TODO 3 ────────────────────────────────────────────────────────
        // Adicione uma runtimeCaching strategy para a TMDB API:
        //
        // runtimeCaching: [
        //   {
        //     urlPattern: /^https:\/\/api\.themoviedb\.org\//,
        //     handler: 'NetworkFirst',
        //     options: {
        //       cacheName: 'tmdb-api',
        //       expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 },
        //     },
        //   },
        // ],
        // ─────────────────────────────────────────────────────────────────
      },
    }),
  ],
});
