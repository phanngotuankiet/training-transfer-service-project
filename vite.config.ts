import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  root: './',
  base: '',
  plugins: [reactRefresh()],
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // Loại bỏ console.log trong file build
      },
    },
  },
});
