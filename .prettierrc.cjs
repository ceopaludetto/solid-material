module.exports = {
  printWidth: 120,
  trailingComma: "all",
  plugins: [require.resolve("prettier-plugin-packagejson"), require.resolve("prettier-plugin-astro")],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
