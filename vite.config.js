import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: '/BWDC-Final-Project/',  
  plugins: [svelte(), tailwindcss()],
});
