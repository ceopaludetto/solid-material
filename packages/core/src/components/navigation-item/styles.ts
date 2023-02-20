import { cva } from "class-variance-authority";

// eslint-disable-next-line tailwindcss/no-custom-classname
export const root = cva(
  [
    "group flex select-none flex-col items-center gap-1 px-3 pb-1 outline-none",
    "focus:group-focus-state-layer ui-not-disabled:hover:group-hover-state-layer ui-not-disabled:active:group-press-state-layer",
  ],
  {
    variants: {
      active: {
        true: ["active"],
      },
    },
  },
);

export const content = cva([
  "text-label-medium",
  "ui-group-not-in-route/link:text-on-surface-variant ui-group-in-route:text-on-surface",
]);

export const icon = cva([
  "inline-flex aspect-[7/4] h-8 items-center justify-center rounded-full text-icon-medium state-layer ripple reset-svg",
  "ui-group-not-in-route:text-on-surface-variant ui-group-in-route:bg-secondary-container ui-group-in-route:text-on-secondary-container",
]);
