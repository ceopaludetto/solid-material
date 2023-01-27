import { getTypedEntries } from "~/utils";

export const shapeTokens = {
  full: 9999,
  lg: 16,
  md: 12,
  none: 0,
  sm: 8,
  xl: 28,
  xs: 4,
  xxs: 2,
};

export type ShapeVariants = keyof typeof shapeTokens;

type ShapeTokens = Record<ShapeVariants, string>;

export function createShapeTokens() {
  return getTypedEntries(shapeTokens).reduce((acc, [key, value]) => {
    acc[key] = `${value}px`;
    return acc;
  }, {} as ShapeTokens);
}
