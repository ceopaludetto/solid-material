import type { Meta, StoryObj } from "@storybook/html";

import { Button } from "@solidjs-material/core";
import { Heart } from "lucide-solid";

export default {
  title: "Button",
  render: (props) => <Button {...props}>Save</Button>,
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {};

export const Tonal: StoryObj<typeof Button> = {
  args: { variant: "tonal" },
};

export const Outlined: StoryObj<typeof Button> = {
  args: { variant: "outlined" },
};

export const Text: StoryObj<typeof Button> = {
  args: { variant: "text" },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: { startIcon: <Heart /> },
};

export const Disabled: StoryObj<typeof Button> = {
  args: { isDisabled: true },
};
