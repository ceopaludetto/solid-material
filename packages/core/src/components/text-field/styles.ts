import { cva } from "class-variance-authority";

// Disable this rule until https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/183
// eslint-disable-next-line tailwindcss/no-custom-classname
export const root = cva([
  "group flex w-full flex-col gap-y-1",
  "focus-within:ui-invalid:text-error ui-not-invalid:text-on-surface-variant focus-within:ui-not-invalid:text-primary ui-not-disabled:ui-invalid:text-error ui-not-disabled:hover:ui-invalid:text-on-error-container",
]);

export const wrapper = cva(["relative inline-flex w-full items-stretch overflow-hidden"], {
  variants: {
    variant: {
      filled: [
        "rounded-xs bg-surface-variant state-layer",
        "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-[width,left] group-focus-within:after:left-0 group-focus-within:after:w-full",
        "group-focus-within:!reset-state-layer ui-group-not-disabled:group-hover:hover-state-layer",
        "ui-group-invalid:after:bg-error ui-group-disabled:bg-on-surface/4",
      ],
    },
  },
});

export const label = cva(
  [
    "pointer-events-none absolute left-4 select-none text-body-large text-inherit transition-[transform,top,font-size,letter-spacing,line-height,color]",
    "top-1/2 -translate-y-1/2 group-focus-within:top-0 group-focus-within:translate-y-1/2 group-focus-within:text-body-small",
    "ui-disabled:text-on-surface/38",
  ],
  {
    variants: {
      keepFloating: {
        true: ["!top-0 !translate-y-1/2 text-body-small text-primary"],
      },
    },
  },
);

export const field = cva(["relative w-full"]);

export const input = cva([
  "h-14 w-full bg-transparent px-4 pt-5 pb-2 text-body-large outline-none ui-disabled:text-on-surface/38 ui-not-disabled:text-on-surface",
]);

export const adornment = cva(["inline-flex items-center"], {
  variants: {
    variant: {
      start: ["pl-3 text-on-surface-variant"],
      end: ["pr-3 text-inherit"],
    },
  },
});

export const description = cva(["px-4 text-body-small ui-invalid:text-error ui-not-invalid:text-on-surface-variant"]);
