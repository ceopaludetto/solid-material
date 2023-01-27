import type { Meta, StoryObj } from "@storybook/html";

import { NavigationItem } from "@solid-material/core";
import { Home } from "lucide-solid";

export default {
  title: "NavigationItem",
  args: { children: "Home", icon: () => <Home /> },
  render: (props) => <NavigationItem {...props} />,
} as Meta<typeof NavigationItem>;

export const Default: StoryObj<typeof NavigationItem> = {};

export const Active: StoryObj<typeof NavigationItem> = {
  args: { active: true },
};
