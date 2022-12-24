import { defineConfig } from 'astro/config';

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno()
});