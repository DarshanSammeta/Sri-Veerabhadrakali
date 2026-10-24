import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  server: { host: "0.0.0.0", port: 8080, strictPort: true },
  plugins: [
    tsconfigPaths(),
    tanstackStart({ server: { entry: "server" } }),
    react(),
    tailwindcss(),
    nitro({
      preset: "cloudflare-module",
      output: { dir: "dist", publicDir: "dist/client", serverDir: "dist/server" },
      cloudflare: { nodeCompat: true },
    }),
  ],
});
