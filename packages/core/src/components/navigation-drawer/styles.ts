import { cva } from "class-variance-authority";

export const root = cva(["flex w-4/5 max-w-[300px] flex-col bg-surface px-3"]);

export const adornment = cva(["mb-6 flex flex-col items-start gap-3"]);
