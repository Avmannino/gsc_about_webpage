import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Correct for a GitHub repository named:
  // gsc_about_webpage
  base: "/gsc_about_webpage/",
});