import type { Config } from "tailwindcss";

import kobateTailwind from "@kobalte/tailwindcss";
import { createCSSVariablesFromScheme, createPaletteFromColor, createTailwindColorsFromScheme } from "palette";
import plugin from "tailwindcss/plugin";
import { createTypographyTokens } from "typography";

export type DesignSystemOptions = {
  baseColor: string;
};

export function designSystem({ baseColor }: DesignSystemOptions): Partial<Config> {
  const schemes = createPaletteFromColor(baseColor);

  return {
    theme: {
      extend: {
        colors: createTailwindColorsFromScheme(schemes.light),
        fontSize: createTypographyTokens(),
      },
    },
    plugins: [
      kobateTailwind,
      plugin(({ addBase }) => {
        addBase({
          ":root": createCSSVariablesFromScheme(schemes.light),
          "(prefers-color-scheme: dark)": {
            ":root": createCSSVariablesFromScheme(schemes.dark),
          },
          html: {
            "-webkit-tap-highlight-color": "transparent",
          },
          body: {
            backgroundColor: "rgb(var(--surface) / 1)",
            color: "rgb(var(--on-surface) / 1)",
          },
          "*::selection": {
            backgroundColor: "rgb(var(--tertiary) / 1)",
            color: "rgb(var(--on-tertiary) / 1)",
          },
        });
      }),
    ],
  };
}

export * from "./typography";
export * from "./palette";
