import { cva } from "class-variance-authority";

export const root = cva(["rounded-full"], {
  variants: {
    variant: {
      filled: ["bg-primary", "text-on-primary"],
    },
  },
});
