import type { NavigationRailProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { NavigationRail, NavigationItem, FAB, IconButton } from "@solidjs-material/core";
import { Menu, Plus } from "lucide-solid";
import { For } from "solid-js";

import { navigationItems } from "./utils";

export default {
  title: "NavigationRail",
  render: (props) => (
    <div class="w-screen">
      <NavigationRail {...props}>
        <For each={navigationItems}>
          {(item) => (
            <NavigationItem href="https://www.google.com.br" active={item.active} icon={item.icon}>
              {item.children}
            </NavigationItem>
          )}
        </For>
      </NavigationRail>
    </div>
  ),
} as Meta<NavigationRailProps>;

export const Default: StoryObj<NavigationRailProps> = {};

export const WithFAB: StoryObj<NavigationRailProps> = {
  args: { startAdornment: () => <FAB aria-label="Add" variant="tertiary" icon={<Plus />} /> },
};

export const WithMenu: StoryObj<NavigationRailProps> = {
  args: {
    startAdornment: () => (
      <IconButton aria-label="Menu" variant="standard">
        <Menu />
      </IconButton>
    ),
  },
};

export const Combined: StoryObj<NavigationRailProps> = {
  args: {
    startAdornment: () => (
      <>
        <IconButton aria-label="Menu" variant="standard">
          <Menu />
        </IconButton>
        <FAB aria-label="Add" variant="tertiary" icon={<Plus />} />
      </>
    ),
  },
};
