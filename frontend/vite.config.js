import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
   plugins: [sveltekit()],
   optimizeDeps: {
      include:  ["daisyui"],
      exclude: ["svelte-codemirror-editor", "codemirror"],
   },
   server: {
      port: 3000,
      fs: {
         allow: ["./tailwind.config.js"],
      },
   },
   resolve: {
      alias: {
         $components: path.resolve("./src/components"),
         $blocks: path.resolve("./src/blocks"),
      },
   },
});
