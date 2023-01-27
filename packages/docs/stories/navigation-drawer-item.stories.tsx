import type { Meta, StoryObj } from "@storybook/html";

import { NavigationDrawerItem } from "@solid-material/core";
import { Home } from "lucide-solid";

export default {
  title: "NavigationDrawerItem",
  args: { children: "Home", icon: () => <Home />, href: "https://www.google.com.br" },
  render: (props) => (
    <div class="w-screen">
      <NavigationDrawerItem {...props} />
    </div>
  ),
} as Meta<typeof NavigationDrawerItem>;

export const Default: StoryObj<typeof NavigationDrawerItem> = {};

export const Active: StoryObj<typeof NavigationDrawerItem> = {
  args: { active: true },
};
