import { preprocessMeltUI, sequence } from "@melt-ui/pp";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from 'svelte-preprocess'
import adapter from "@sveltejs/adapter-auto";
import nested from 'postcss-nested';


/** @type {import('@sveltejs/kit').Config}*/
const config = {
   kit: {
      adapter: adapter(),
   },
   preprocess: sequence([
      sveltePreprocess({
         postcss: true,
         plugins: [nested()]
      }),
      vitePreprocess(),
      preprocessMeltUI(),
   ]),
};
export default config;
