import type { ButtonProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { Button } from "@solidjs-material/core";
import { Heart } from "lucide-solid";

export default {
  title: "Button",
  render: (props) => <Button {...props}>Save</Button>,
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Tonal: StoryObj<ButtonProps> = {
  args: { variant: "tonal" },
};

export const Outlined: StoryObj<ButtonProps> = {
  args: { variant: "outlined" },
};

export const Text: StoryObj<ButtonProps> = {
  args: { variant: "text" },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: { startIcon: <Heart /> },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: { isDisabled: true },
};
