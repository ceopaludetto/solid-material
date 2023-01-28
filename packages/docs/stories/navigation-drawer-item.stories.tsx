import type { NavigationItemProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { NavigationDrawerItem } from "@solidjs-material/core";
import { Home } from "lucide-solid";

export default {
  title: "NavigationDrawerItem",
  args: { children: "Home", icon: () => <Home />, href: "https://www.google.com.br" },
  render: (props) => (
    <div class="w-screen">
      <NavigationDrawerItem {...props} />
    </div>
  ),
} as Meta<NavigationItemProps>;

export const Default: StoryObj<NavigationItemProps> = {};

export const Active: StoryObj<NavigationItemProps> = {
  args: { active: true },
};
