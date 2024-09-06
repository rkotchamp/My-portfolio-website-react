import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // helpful for debugging
    chunkSizeWarningLimit: 1000, // increase limit if it's complaining about chunk size
    rollupOptions: {
      output: {
        manualChunks: undefined, // ensures chunking doesn't break
      },
    },
  },
});
