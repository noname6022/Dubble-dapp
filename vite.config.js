import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  server: {
    host: "192.168.0.7",
    port: 3000,
  },
  resolve: {
    alias: {
      events: 'events',
    },
  },
});