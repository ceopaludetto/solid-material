import { cva } from "class-variance-authority";

export const overlay = cva(["fixed inset-0 bg-scrim/30"]);

export const positioner = cva(["fixed inset-0 flex items-center justify-center"]);

export const content = cva([
  "flex min-w-[280px] max-w-[560px] flex-col items-center gap-4 rounded-xl bg-surface p-6 outline-none",
  "relative overflow-hidden surface surface-3",
]);

export const icon = cva(["text-icon-medium text-secondary reset-svg"]);

export const title = cva(["text-headline-small text-on-surface"]);

export const description = cva(["text-body-medium text-on-surface-variant"]);

export const actions = cva(["flex w-full items-center justify-end gap-x-2 pt-2"]);
