import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import sass from "sass";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@lib": "/src/lib",
      "@styles": "/src/styles",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MaraschinoUI",
      fileName: (format) => `maraschino-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },
  },
});
