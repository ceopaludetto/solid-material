import type { NavigationItemProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { NavigationItem } from "@solidjs-material/core";
import { Home } from "lucide-solid";

export default {
  title: "NavigationItem",
  args: { children: "Home", icon: () => <Home /> },
  render: (props) => <NavigationItem {...props} />,
} as Meta<NavigationItemProps>;

export const Default: StoryObj<NavigationItemProps> = {};

export const Active: StoryObj<NavigationItemProps> = {
  args: { active: true },
};
