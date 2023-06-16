import { cva } from "class-variance-authority";

export const root = cva(["w-full"]);

export const list = cva(["relative flex w-full items-center border-b border-surface-variant"], {
  variants: {
    variant: {
      primary: ["h-12"],
      secondary: ["h-12"],
    },
    hasIcons: {
      true: [],
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      hasIcons: true,
      class: ["!h-16"],
    },
  ],
});

export const indicator = cva(["absolute bottom-0 flex justify-center transition-all duration-medium4"]);

export const line = cva(["w-full bg-primary"], {
  variants: {
    variant: {
      primary: ["h-[3px] max-w-[50px] rounded-t-[3px]"],
      secondary: ["h-0.5"],
    },
  },
});

export const item = cva([
  "flex h-full flex-1 flex-col items-center justify-center gap-1 text-title-small outline-none transition-colors state-layer ripple",
  "ui-selected:text-primary ui-not-selected:text-on-surface-variant",
  "focus-visible:hover-state-layer ui-not-disabled:hover:hover-state-layer ui-not-disabled:active:press-state-layer",
]);

export const icon = cva(["text-icon-medium text-inherit"]);
