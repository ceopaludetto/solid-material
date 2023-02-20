import { cva } from "class-variance-authority";

export const root = cva(
  [
    "inline-flex h-10 items-center justify-center gap-x-2 rounded-full text-label-large outline-none transition state-layer ripple",
    "focus:focus-state-layer focus-visible:hover-state-layer ui-not-disabled:hover:hover-state-layer ui-not-disabled:active:press-state-layer",
  ],
  {
    variants: {
      variant: {
        filled: ["bg-primary text-on-primary ui-disabled:bg-on-surface/12 ui-disabled:text-on-surface/38"],
        tonal: [
          "bg-secondary-container text-on-secondary-container ui-disabled:bg-on-surface/12 ui-disabled:text-on-surface/38",
        ],
        outlined: [
          "border border-outline bg-surface text-primary focus:border-primary ui-disabled:border-on-surface/12 ui-disabled:text-on-surface/38",
        ],
        text: ["bg-transparent text-primary ui-disabled:text-on-surface/38"],
      },
      hasStartIcon: {
        true: ["pl-4"],
        false: ["pl-6"],
      },
      hasEndIcon: {
        true: ["pr-4"],
        false: ["pr-6"],
      },
    },
  },
);

export const icon = cva(["inline-flex text-icon-small reset-svg"]);
