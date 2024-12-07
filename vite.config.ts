// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import type { UserConfig } from "vitest/config";

// const test = {
//   globals: true,
//   environment: "jsdom",
//   setupFiles: ["src/__tests__/setupTests.ts"],
//   threads: false,
//   watch: false,
// } as UserConfig["test"];

// const isProd = process.env.NODE_ENV === "production";
// // Determine if HTTPS is being used
// const isHttps = process.env.USE_HTTPS === "true";
// const hmrProtocol = isHttps ? "wss" : "ws";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: parseInt("8000", 10),
//     https: isHttps, // Enable HTTPS if needed
//     hmr: {
//       protocol: hmrProtocol,
//       host: "diniubire.ro",
//       port: 24678,
//     },
//   },
//   build: {
//     minify: isProd,
//     sourcemap: !isProd, // Enable source maps in development
//   },
//   test,
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/client/styles/mixins.scss";\n`,
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vitest/config";

const test = {
  globals: true,
  environment: "jsdom",
  setupFiles: ["src/__tests__/setupTests.ts"],
  threads: false,
  watch: false,
} as UserConfig["test"];

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000, // Use Render's PORT or default to 3000
    strictPort: true, // Ensure the server fails if the port is unavailable
    hmr: {
      protocol: "ws", // Use WebSocket for HMR
      host: "localhost", // Dynamic for local development
    },
  },
  build: {
    minify: isProd,
    sourcemap: !isProd, // Enable source maps in development
    chunkSizeWarningLimit: 500, // Prevent warnings about large chunks
  },
  test,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/client/styles/mixins.scss";\n`,
      },
    },
  },
});
