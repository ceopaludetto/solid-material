import { cva } from "class-variance-authority";

export const root = cva(
  [
    "group flex items-center gap-4",
    "focus:group-focus-state-layer ui-not-disabled:hover:group-hover-state-layer ui-not-disabled:active:group-press-state-layer",
  ],
  {
    variants: {
      labelPlacement: {
        left: ["flex-row"],
        right: ["flex-row-reverse"],
        top: ["flex-col"],
        bottom: ["flex-col-reverse"],
      },
    },
  },
);

export const label = cva(["text-on-surface"]);

export const control = cva([
  "inline-flex aspect-[13/8] h-8 items-center rounded-full border-2 border-outline transition duration-short4 ease-emphasized",
  "ui-checked:border-primary ui-checked:bg-primary ui-not-checked:bg-surface-variant",
  "ui-disabled:ui-checked:bg-on-surface/12 ui-disabled:ui-not-checked:border-on-surface/12 ui-disabled:ui-not-checked:bg-surface-variant/12",
  "ui-disabled:ui-checked:border-0",
]);

export const thumb = cva([
  "aspect-square rounded-full transition-[transform,background-color,height] duration-short4 ease-emphasized state-layer state-layer-10",
  "ui-not-disabled:group-active:h-7 ui-checked:h-6 ui-checked:bg-on-primary ui-not-checked:h-4 ui-not-checked:bg-outline",
  "ui-checked:translate-x-[22px] ui-not-disabled:group-active:ui-checked:translate-x-5 ui-not-checked:translate-x-[6px] ui-not-disabled:group-active:ui-not-checked:translate-x-0",
  "ui-not-disabled:group-hover:ui-checked:bg-primary-container ui-not-disabled:group-hover:ui-not-checked:bg-on-surface-variant",
  "ui-not-disabled:group-focus:ui-checked:bg-primary-container ui-not-disabled:group-focus:ui-not-checked:bg-on-surface-variant",
  "ui-disabled:ui-checked:bg-surface ui-disabled:ui-not-checked:bg-on-surface/38",
  "ui-disabled:ui-checked:translate-x-6",
]);
