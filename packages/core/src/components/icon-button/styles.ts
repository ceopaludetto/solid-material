import { cva } from "class-variance-authority";

export const root = cva(
  [
    "inline-flex aspect-square h-10 items-center justify-center rounded-full text-icon-medium",
    "outline-none state-layer ripple reset-svg",
    "ui-hover:hover-state-layer ui-focus:focus-state-layer ui-focus-visible:hover-state-layer ui-active:press-state-layer",
  ],
  {
    variants: {
      variant: {
        filled: ["bg-primary text-on-primary ui-disabled:bg-on-surface/12 ui-disabled:text-on-surface/38"],
        tonal: [
          "bg-secondary-container text-on-secondary-container ui-disabled:bg-on-surface/12 ui-disabled:text-on-surface/38",
        ],
        outlined: [
          "border border-outline bg-surface text-primary ui-disabled:border-on-surface/12 ui-disabled:text-on-surface/38 ui-focus:border-primary",
        ],
        standard: ["bg-transparent text-on-surface-variant ui-disabled:text-on-surface/38"],
      },
    },
  },
);
