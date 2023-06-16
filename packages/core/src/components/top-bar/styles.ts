import { cva } from "class-variance-authority";

export const root = cva(["surface flex h-16 items-center gap-x-3 bg-surface px-4"], {
  variants: {
    elevated: {
      true: ["bg-surface-container-lowest"],
    },
    disableOnDesktop: {
      true: ["lg:!bg-surface"],
    },
  },
});

export const title = cva(["flex flex-1 items-center text-title-large"]);

export const adornment = cva(["flex items-center gap-x-3"]);
