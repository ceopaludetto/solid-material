import type { Config } from "tailwindcss";

import kobateTailwind from "@kobalte/tailwindcss";
import plugin from "tailwindcss/plugin";
import { addDefault } from "utils";

import {
  createCSSVariablesFromScheme,
  createDurationTokens,
  createPaletteFromColor,
  createShapeTokens,
  createTailwindColorsFromScheme,
  createTransitionTokens,
  createTypographyTokens,
} from "./tokens";

export type DesignSystemOptions = {
  baseColor: string;
  addSelectionStyles?: boolean;
};

export function designSystem({ baseColor, addSelectionStyles = true }: DesignSystemOptions): Partial<Config> {
  const schemes = createPaletteFromColor(baseColor);

  return {
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
      plugin(({ addBase, addUtilities, addVariant, matchUtilities, matchVariant, theme, e }) => {
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
          ".surface": {
            "&::before": {
              content: "''",
              display: "block",
              position: "absolute",
              left: "0",
              top: "0",
              height: "100%",
              width: "100%",
              pointerEvents: "none",
              background: `rgb(var(--primary) / var(--tw-surface-opacity, 0))`,
              transitionProperty: "background-color",
              transitionDuration: theme("transitionDuration.short3"),
              transitionTimingFunction: theme("transitionTimingFunction.standard"),
            },
          },
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
          { surface: (value) => ({ "--tw-surface-opacity": value }) },
          { type: "length", values: theme("surface") },
        );

        matchUtilities(
          { "state-layer": (value) => ({ "--tw-state-layer-size": value }) },
          { type: ["absolute-size", "relative-size", "length", "percentage"], values: theme("spacing") },
        );

        addVariant("ui-horizontal", "&[data-orientation='horizontal']");
        addVariant("ui-not-horizontal", "&:not([data-orientation='horizontal'])");

        addVariant("ui-vertical", "&[data-orientation='vertical']");
        addVariant("ui-not-vertical", "&:not([data-orientation='vertical'])");

        addVariant("ui-in-route", "&.active");
        addVariant("ui-not-in-route", "&:not(.active)");

        const variants = [
          "focus",
          "hover",
          "disabled",
          "invalid",
          [
            ["ui-in-route", ".active"],
            ["ui-not-in-route", ":not(.active)"],
          ],
        ]
          .map((variant) =>
            Array.isArray(variant)
              ? variant
              : [
                  [`ui-${variant}`, `[data-${variant}]`],
                  [`ui-not-${variant}`, `:not([data-${variant}])`],
                ],
          )
          .flat();

        matchVariant(
          "group",
          (value, { modifier }) =>
            modifier ? `:merge(.group\\/${e(modifier)})${value} &` : `:merge(.group)${value} &`,
          { values: Object.fromEntries(variants) },
        );

        // variants.forEach((variant) => {
        //   addVariant(`group-ui-not-${variant}`, `:merge(.group):not([data-${variant}]) &`);
        //   addVariant(`group-ui-${variant}`, `:merge(.group)[data-${variant}] &`);
        // });
      }),
    ],
  };
}

export * from "./tokens";
