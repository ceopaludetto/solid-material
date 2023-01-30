/* eslint-disable import/no-extraneous-dependencies, global-require */
const { designSystem } = require("@solidjs-material/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@solidjs-material/core/dist/*.{js,cjs}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  presets: [designSystem({ baseColor: "#00FFCC" })],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Poppins override", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addBase, addUtilities }) => {
      addBase({
        ":root": {
          "--astro-code-color-text": "rgb(var(--on-surface) / 1)",
          "--astro-code-color-background": "rgb(var(--surface-variant) / 1)",
          "--astro-code-token-constant": "rgb(var(--on-secondary-container) / 1)",
          "--astro-code-token-string": "rgb(var(--on-secondary-container) / 1)",
          "--astro-code-token-comment": "rgb(var(--outline) / 1)",
          "--astro-code-token-keyword": "rgb(var(--primary) / 1)",
          "--astro-code-token-parameter": "#AA0000",
          "--astro-code-token-function": "rgb(var(--tertiary) / 1)",
          "--astro-code-token-string-expression": "rgb(var(--error) / 1)",
          "--astro-code-token-punctuation": "rgb(var(--tertiary) / 1)",
          "--astro-code-token-link": "rgb(var(--tertiary) / 1)",
        },
      });

      addUtilities({
        ".reset-svg svg": {
          width: "1em",
          height: "1em",
        },
      });
    }),
  ],
};
