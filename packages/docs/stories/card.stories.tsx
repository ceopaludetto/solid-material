import type { Meta, StoryObj } from "@storybook/html";

import { Card } from "@solid-material/core";

export default {
  title: "Card",
  args: { children: "Content", class: "p-4" },
  render: (props) => <Card {...props} />,
} as Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {};

export const Outlined: StoryObj<typeof Card> = {
  args: { variant: "outlined" },
};
