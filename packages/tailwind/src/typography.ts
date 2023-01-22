import { getTypedEntries } from "utils";

export const typographyTokens = {
  "body-large": { lineHeight: 24, size: 16, tracking: 0.5, weight: 400 },
  "body-medium": { lineHeight: 20, size: 14, tracking: 0.25, weight: 400 },
  "body-small": { lineHeight: 16, size: 12, tracking: 0.4, weight: 400 },
  "display-large": { lineHeight: 64, size: 57, tracking: 0, weight: 400 },
  "display-medium": { lineHeight: 52, size: 45, tracking: 0, weight: 400 },
  "display-small": { lineHeight: 44, size: 36, tracking: 0, weight: 400 },
  "headline-large": { lineHeight: 40, size: 32, tracking: 0, weight: 400 },
  "headline-medium": { lineHeight: 36, size: 28, tracking: 0, weight: 400 },
  "headline-small": { lineHeight: 32, size: 24, tracking: 0, weight: 400 },
  "label-large": { lineHeight: 20, size: 14, tracking: 0.1, weight: 500 },
  "label-medium": { lineHeight: 16, size: 12, tracking: 0.5, weight: 500 },
  "label-small": { lineHeight: 16, size: 11, tracking: 0.5, weight: 500 },
  "title-large": { lineHeight: 28, size: 22, tracking: 0, weight: 400 },
  "title-medium": { lineHeight: 24, size: 16, tracking: 0.15, weight: 500 },
  "title-small": { lineHeight: 20, size: 14, tracking: 0.1, weight: 500 },
};

export type TypographyVariants = keyof typeof typographyTokens;

type TailwindTypographyToken = [string, { fontWeight: string; letterSpacing: string; lineHeight: string }];

function toRem(value: number) {
  return `${value / 16}rem`;
}

export function createTypographyTokens() {
  return getTypedEntries(typographyTokens).reduce((acc, [name, value]) => {
    const { size, weight, lineHeight, tracking } = value;
    const definitions = {
      fontWeight: weight.toString(),
      letterSpacing: toRem(tracking),
      lineHeight: toRem(lineHeight),
    };

    acc[name] = [toRem(size), definitions];
    return acc;
  }, {} as Record<TypographyVariants, TailwindTypographyToken>);
}
