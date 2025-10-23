import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://retiha.github.io/portfolio/",   // ← add this line
  plugins: [react()],
});
