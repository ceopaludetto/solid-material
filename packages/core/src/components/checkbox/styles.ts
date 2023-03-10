import { cva } from "class-variance-authority";

export const root = cva(
  [
    "flex items-center gap-4",
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
  "relative isolate inline-flex aspect-square h-[18px] rounded-xxs border-on-surface state-layer state-layer-10 ui-not-checked:border-2",
  "ui-disabled:border-on-surface/38 ui-disabled:ui-checked:bg-on-surface/38 ui-not-disabled:ui-checked:bg-primary",
]);

export const indicator = cva([
  "inline-flex items-center justify-center text-icon-small text-on-primary reset-svg ui-not-checked:hidden",
]);
