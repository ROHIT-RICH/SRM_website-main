import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

const preset = process.env.NITRO_PRESET || "node-server";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  vite: {
    plugins: [
      nitro({
        preset,
      }),
    ],
  },
});
