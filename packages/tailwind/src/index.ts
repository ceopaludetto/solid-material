import type { Config } from "tailwindcss";

import kobateTailwind from "@kobalte/tailwindcss";
import plugin from "tailwindcss/plugin";

import {
  createCSSVariablesFromScheme,
  createDurationTokens,
  createPaletteFromColor,
  createShapeTokens,
  createTailwindColorsFromScheme,
  createTransitionTokens,
  createTypographyTokens,
} from "./tokens";
import { addDefault } from "~/utils";

export type DesignSystemOptions = {
  baseColor: string;
  addSelectionStyles?: boolean;
};

export function designSystem({ baseColor, addSelectionStyles = true }: DesignSystemOptions): Config {
  const schemes = createPaletteFromColor(baseColor);

  return {
    content: [],
    theme: {
      surface: {
        0: 0,
        1: "0.05",
        2: "0.08",
        3: "0.11",
        4: "0.12",
        5: "0.14",
      },
      borderRadius: addDefault(createShapeTokens(), "xs"),
      fontSize: createTypographyTokens(),
      extend: {
        colors: createTailwindColorsFromScheme(schemes.light),
        transitionTimingFunction: addDefault(createTransitionTokens(), "standard"),
        transitionDuration: addDefault(createDurationTokens(), "short3"),
        opacity: {
          4: ".04",
          8: ".08",
          11: ".11",
          12: ".12",
          14: ".14",
          38: ".38",
        },
        scale: {
          200: "2",
        },
      },
    },
    plugins: [
      kobateTailwind,
      plugin(({ addBase, addUtilities, addVariant, matchUtilities, theme }) => {
        addBase({
          ":root": createCSSVariablesFromScheme(schemes.light),
          "@media(prefers-color-scheme: dark)": {
            ":root": createCSSVariablesFromScheme(schemes.dark),
          },
          html: {
            "-webkit-tap-highlight-color": "transparent",
          },
          body: {
            backgroundColor: "rgb(var(--surface) / 1)",
            color: "rgb(var(--on-surface) / 1)",
          },
          ...(addSelectionStyles
            ? {
                "*::selection": {
                  backgroundColor: "rgb(var(--tertiary) / 1)",
                  color: "rgb(var(--on-tertiary) / 1)",
                },
              }
            : {}),
        });

        addUtilities({
          ".state-layer": {
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              left: "50%",
              top: "50%",
              backgroundColor: theme("colors.current"),
              borderRadius: "var(--tw-state-layer-radius, 9999px)",
              height: "var(--tw-state-layer-size, 150%)",
              width: "var(--tw-state-layer-size, 150%)",
              opacity: "var(--tw-state-layer-opacity, 0)",
              pointerEvents: "none",
              transform: "translateX(-50%) translateY(-50%)",
              transitionProperty: "opacity, background-color",
              transitionDuration: theme("transitionDuration.short3"),
              transitionTimingFunction: theme("transitionTimingFunction.standard"),
            },
          },
          ".hover-state-layer": {
            "--tw-state-layer-opacity": theme("opacity.8"),
          },
          ".focus-state-layer": {
            "--tw-state-layer-opacity": theme("opacity.10"),
          },
          ".press-state-layer": {
            "--tw-state-layer-opacity": theme("opacity.12"),
          },
          ".reset-state-layer": {
            "--tw-state-layer-opacity": theme("opacity.0"),
          },
          ".group-hover-state-layer": {
            ".state-layer": {
              "--tw-state-layer-opacity": theme("opacity.8"),
            },
          },
          ".group-focus-state-layer": {
            ".state-layer": {
              "--tw-state-layer-opacity": theme("opacity.10"),
            },
          },
          ".group-press-state-layer": {
            ".state-layer": {
              "--tw-state-layer-opacity": theme("opacity.12"),
            },
          },
          ".reset-svg": {
            "> svg": {
              width: "1em",
              height: "1em",
            },
          },
          ".ripple": {
            overflow: "hidden",
            position: "relative",
            isolation: "isolate",
          },
        });

        matchUtilities(
          { "state-layer": (value) => ({ "--tw-state-layer-size": value }) },
          { type: ["absolute-size", "relative-size", "length", "percentage"], values: theme("spacing") },
        );

        const variants = [
          ["in-route", ".active"],
          ["disabled", "[data-disabled]"],
        ];

        variants.forEach(([name, variant]) => {
          addVariant(`ui-${name}`, `&${variant}`);
          addVariant(`ui-not-${name}`, `&:not(${variant})`);

          addVariant(`ui-group-${name}`, `:merge(.group)${variant} &`);
          addVariant(`ui-group-not-${name}`, `:merge(.group):not(${variant}) &`);

          addVariant(`ui-peer-${name}`, `:merge(.peer)${variant} ~ &`);
          addVariant(`ui-peer-not-${name}`, `:merge(.peer):not(${variant}) ~ &`);
        });
      }),
    ],
  };
}

export * from "./tokens";
