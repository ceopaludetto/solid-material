/* eslint-disable import/no-extraneous-dependencies */
import { whyframe } from "@whyframe/core";
import { whyframeJsx } from "@whyframe/jsx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import solid from "solid-start/vite";
import icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
      enforce: "pre",
    },
    whyframe({ defaultShowSource: true, defaultSrc: "/frames/default", components: [{ name: "Story" }] }),
    whyframeJsx({ defaultFramework: "solid" }),
    icons({ compiler: "solid" }),
    solid({
      extensions: [".mdx", ".md"],
    }),
  ],
});
