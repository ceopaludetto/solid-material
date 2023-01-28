import type { CardProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { Card } from "@solidjs-material/core";

export default {
  title: "Card",
  args: { children: "Content", class: "p-4" },
  render: (props) => <Card {...props} />,
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {};

export const Outlined: StoryObj<CardProps> = {
  args: { variant: "outlined" },
};
