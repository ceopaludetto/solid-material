/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://solid-material.dev",
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
  integrations: [solid(), tailwind(), mdx()],
});
