import type { Meta, StoryObj } from "@storybook/html";

import { IconButton } from "@solidjs-material/core";
import { Heart } from "lucide-solid";

export default {
  title: "IconButton",
  args: { children: () => <Heart />, "aria-label": "Favorite" },
  render: (props) => <IconButton {...props} />,
} as Meta<typeof IconButton>;

export const Default: StoryObj<typeof IconButton> = {};

export const Tonal: StoryObj<typeof IconButton> = {
  args: { variant: "tonal" },
};

export const Disabled: StoryObj<typeof IconButton> = {
  args: { isDisabled: true },
};
