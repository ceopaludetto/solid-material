const { designSystem } = require("@solidjs-material/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@solidjs-material/core/dist/*.{js,cjs}", "./stories/**/*.tsx"],
  presets: [designSystem({ baseColor: "#00AAFF" })],
};
