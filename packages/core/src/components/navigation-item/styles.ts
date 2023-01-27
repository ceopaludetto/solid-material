import { cva } from "class-variance-authority";

// eslint-disable-next-line tailwindcss/no-custom-classname
export const root = cva(
  [
    "group/link flex select-none flex-col items-center gap-1 px-3 pb-1 outline-none",
    "ui-hover:group-hover-state-layer ui-focus:group-focus-state-layer ui-active:group-press-state-layer",
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
  "group-ui-in-route/link:text-on-surface group-ui-not-in-route/link:text-on-surface-variant",
]);

export const icon = cva([
  "inline-flex aspect-[7/4] h-8 items-center justify-center rounded-full text-icon-medium state-layer reset-svg ripple",
  "group-ui-in-route/link:bg-secondary-container group-ui-in-route/link:text-on-secondary-container group-ui-not-in-route/link:text-on-surface-variant",
]);
