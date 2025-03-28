import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // плагин для поддержки React
import svgr from "vite-plugin-svgr";  // плагин для импорта SVG как React компоненты


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),   // для React
    svgr(),    // для поддержки SVG как React компонент
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // настроить алиас для путей
    },
  },
});
