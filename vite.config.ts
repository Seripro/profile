import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/profile/" : "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: { main: "index.html", ja: "ja/index.html", en: "en/index.html" },
    },
  },
});
