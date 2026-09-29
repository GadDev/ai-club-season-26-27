import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  base: "/ai-club-season-26-27/",
  plugins: [react(), tailwindcss()],
});
