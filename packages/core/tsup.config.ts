/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "tsup-preset-solid";

export default defineConfig({ entry: "src/index.tsx" }, { cjs: true, writePackageJson: false });
