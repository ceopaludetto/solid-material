/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  noExternal: ["@material/material-color-utilities", "mcu-extra"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
});
