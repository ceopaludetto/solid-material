import type { IconButtonProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { IconButton } from "@solidjs-material/core";
import { Heart } from "lucide-solid";

export default {
  title: "IconButton",
  args: { children: () => <Heart />, "aria-label": "Favorite" },
  render: (props) => <IconButton {...props} />,
} as Meta<IconButtonProps>;

export const Default: StoryObj<IconButtonProps> = {};

export const Tonal: StoryObj<IconButtonProps> = {
  args: { variant: "tonal" },
};

export const Disabled: StoryObj<IconButtonProps> = {
  args: { isDisabled: true },
};
