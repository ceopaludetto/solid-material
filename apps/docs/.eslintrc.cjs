/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require("path");

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [require.resolve("@solidjs-material/configuration/eslint.solid.cjs")],
  parserOptions: { project: resolve(__dirname, "tsconfig.json") },
  overrides: [{ files: ["./test/*.{ts,tsx}"], rules: { "import/no-extraneous-dependencies": "off" } }],
};
