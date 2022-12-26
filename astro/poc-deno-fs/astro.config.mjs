import { defineConfig } from 'astro/config';

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import { existsSync } from 'fs';
import { join, sep, posix } from 'path';
import react from "@astrojs/react";
const pagesPath = 'src/pages';
const layoutPath = 'src/layouts';
const layoutAlias = '@layouts';
const defaultLayout = 'Main';
const pascalCache = {};
function toPascalCase(str) {
  pascalCache[str] = pascalCache[str] || /^[\p{L}\d]+$/iu.test(str) && str.charAt(0).toUpperCase() + str.slice(1) || str.replace(/([\p{L}\d])([\p{L}\d]*)/giu, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()).replace(/[^\p{L}\d]/giu, '');
  return pascalCache[str];
}
const knownLayouts = new Set();
const knownNotLayouts = new Set();
function defaultLayoutPlugin() {
  return function (tree, file) {
    const filePathFull = file.history[0].replace(/\/[^\/]+$/, '').split(sep).join(posix.sep);
    const pagesPathFull = join(file.cwd, pagesPath);
    const nestedDirs = filePathFull.slice(pagesPathFull.length + 1);
    const directories = nestedDirs ? nestedDirs.split('/').reverse() : [];
    let layout = defaultLayout;
    directories.some(directory => {
      const layoutName = toPascalCase(directory);
      if (knownLayouts.has(layoutName) || !knownNotLayouts.has(layoutName) && existsSync(join(layoutPath, layoutName + '.astro'))) {
        knownLayouts.add(layoutName);
        layout = layoutName;
        return true;
      } else {
        knownNotLayouts.add(layoutName);
      }
    });
    file.data.astro.frontmatter.layout = `${layoutAlias}/${layout}.astro`;
  };
}

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  markdown: {
    remarkPlugins: [defaultLayoutPlugin],
    extendDefaultPlugins: true
  },
  integrations: [mdx(), react()]
});