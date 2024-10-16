import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-redux": require.resolve("react-redux"),
    },
  },
  build: {
    rollupOptions: {
      external: ["react-redux"],
    },
  },
});
