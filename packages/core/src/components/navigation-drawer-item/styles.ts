import { cva } from "class-variance-authority";

// eslint-disable-next-line tailwindcss/no-custom-classname
export const root = cva(
  [
    "inline-flex h-14 w-full select-none items-center gap-x-3 rounded-full pl-3 pr-6 outline-none state-layer ripple",
    "ui-hover:hover-state-layer ui-focus:focus-state-layer ui-focus-visible:hover-state-layer ui-active:press-state-layer",
    "ui-in-route:bg-secondary-container ui-in-route:text-on-secondary-container ui-not-in-route:text-on-surface-variant",
  ],
  {
    variants: {
      active: {
        true: "active",
      },
    },
  },
);

export const content = cva(["flex-1 text-label-large"]);

export const icon = cva(["text-icon-medium reset-svg"]);
