import { cva } from "class-variance-authority";

export const root = cva(
  [
    "inline-flex items-center justify-center gap-x-2 text-label-large outline-none state-layer ripple",
    "focus:focus-state-layer focus-visible:hover-state-layer ui-not-disabled:hover:hover-state-layer ui-not-disabled:active:press-state-layer",
  ],
  {
    variants: {
      isExtended: {
        true: ["min-w-[80px] px-4"],
        false: ["aspect-square"],
      },
      size: {
        small: ["h-10 rounded-md"],
        medium: ["h-14 rounded-lg"],
        large: ["h-24 rounded-xl"],
      },
      variant: {
        surface: ["bg-surface text-primary"],
        secondary: ["bg-secondary-container text-on-secondary-container"],
        tertiary: ["bg-tertiary-container text-on-tertiary-container"],
      },
    },
  },
);

export const icon = cva(["inline-flex reset-svg"], {
  variants: {
    size: {
      small: ["text-icon-medium"],
      medium: ["text-icon-medium"],
      large: ["text-icon-large"],
    },
  },
});
