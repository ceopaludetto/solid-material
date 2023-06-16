import type { Scheme } from "mcu-extra";
import type { KebabCase } from "type-fest";

import { argbFromHex, blueFromArgb, greenFromArgb, redFromArgb } from "@material/material-color-utilities";
import { themeFromSourceColor } from "mcu-extra";

import { getTypedEntries, getTypedKeys, kebabCase } from "~/utils";

export type ColorVariants = KebabCase<keyof ReturnType<Scheme["toJSON"]>>;

function toRGB(value: number) {
  return [redFromArgb(value), greenFromArgb(value), blueFromArgb(value)].join(" ");
}

export function createPaletteFromColor(color: string) {
  const { schemes } = themeFromSourceColor(argbFromHex(color));
  return schemes;
}

export function createTailwindColorsFromScheme(scheme: Scheme) {
  return getTypedKeys(scheme.toJSON()).reduce((acc, color) => {
    const name = kebabCase(color);
    acc[name] = `rgb(var(--${name}) / <alpha-value>)`;

    return acc;
  }, {} as Record<ColorVariants, string>);
}

export function createCSSVariablesFromScheme(scheme: Scheme) {
  return getTypedEntries(scheme.toJSON()).reduce((acc, [color, value]) => {
    const name = kebabCase(color);
    acc[`--${name}`] = toRGB(value);

    return acc;
  }, {} as Record<`--${ColorVariants}`, string>);
}
