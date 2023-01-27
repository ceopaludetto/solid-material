const { designSystem } = require("@solid-material/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@solid-material/core/dist/*.{js,cjs}", "./stories/**/*.tsx"],
  presets: [designSystem({ baseColor: "#00AAFF" })],
};
