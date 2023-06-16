const { resolve } = require("path");

module.exports = {
  extends: [require.resolve("./eslint.base.cjs"), "plugin:tailwindcss/recommended", "plugin:solid/recommended"],
  plugins: ["tailwindcss", "solid"],
  rules: {},
  settings: {
    tailwindcss: {
      // These are the default values but feel free to customize
      callees: ["classnames", "clsx", "ctl", "cva"],
      config: resolve(__dirname, "..", "..", "apps", "docs", "tailwind.config.ts"),
    },
  },
};
