module.exports = {
  extends: [require.resolve("./eslint.solid.cjs"), "plugin:astro/recommended"],
  parserOptions: { extraFileExtensions: [".astro"] },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      rules: {
        // solid
        "solid/no-unknown-namespaces": "off",
        "solid/prefer-for": "off",
        "solid/style-prop": "off",
        // import
        "import/no-unresolved": "off",
      },
    },
  ],
};
