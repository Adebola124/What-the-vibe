import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: ".", // or "public" if that's where it is
  plugins: [react()],
});