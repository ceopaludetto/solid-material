module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    // typescript
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    // import
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: ["type", "builtin", "external", "index", ["internal", "sibling", "parent"], "object"],
        pathGroups: [
          {
            pattern: "~/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "type", "external", "object"],
        "newlines-between": "always",
      },
    ],
    // misc
    "no-restricted-syntax": "off",
    "no-continue": "off",
  },
};
