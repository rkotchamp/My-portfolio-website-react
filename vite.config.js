import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log("Debugging: This message will appear in the build logs");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
