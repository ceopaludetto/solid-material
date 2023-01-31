import { cva } from "class-variance-authority";

export const root = cva(["flex h-16 items-center gap-x-3 bg-surface px-4 surface"], {
  variants: {
    elevated: {
      true: ["surface-2"],
    },
    disableOnDesktop: {
      true: ["lg:!surface-0"],
    },
  },
});

export const title = cva(["flex flex-1 items-center text-title-large"]);

export const adornment = cva(["flex items-center gap-x-3"]);
