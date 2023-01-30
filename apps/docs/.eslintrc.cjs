/* eslint-disable import/no-extraneous-dependencies */
const { resolve } = require("path");

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [require.resolve("@solidjs-material/configuration/eslint.astro.cjs")],
  parserOptions: { project: resolve(__dirname, "tsconfig.json") },
};
