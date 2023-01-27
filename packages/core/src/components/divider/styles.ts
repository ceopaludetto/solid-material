import { cva } from "class-variance-authority";

export const root = cva([
  "border-none bg-outline ui-horizontal:h-px ui-horizontal:w-full ui-vertical:h-full ui-vertical:w-px",
]);
