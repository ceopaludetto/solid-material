import { cva } from "class-variance-authority";

export const root = cva(["rounded-md"], {
  variants: {
    variant: {
      filled: ["bg-surface-variant"],
      outlined: ["border border-outline bg-surface"],
    },
  },
});
