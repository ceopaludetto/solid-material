import type { NavigationDrawerProps } from "@solidjs-material/core";
import type { Meta, StoryObj } from "@storybook/html";

import { NavigationDrawer, NavigationDrawerItem, FAB, IconButton } from "@solidjs-material/core";
import { Menu, Plus } from "lucide-solid";
import { For } from "solid-js";

import { navigationItems } from "./utils";

export default {
  title: "NavigationDrawer",
  render: (props) => (
    <div class="w-screen">
      <NavigationDrawer {...props}>
        <For each={navigationItems}>
          {(item) => (
            <NavigationDrawerItem href="https://www.google.com.br" active={item.active} icon={item.icon}>
              {item.children}
            </NavigationDrawerItem>
          )}
        </For>
      </NavigationDrawer>
    </div>
  ),
} as Meta<NavigationDrawerProps>;

export const Default: StoryObj<NavigationDrawerProps> = {};

export const WithFAB: StoryObj<NavigationDrawerProps> = {
  args: {
    startAdornment: () => (
      <FAB aria-label="Add" variant="tertiary" icon={<Plus />}>
        Add
      </FAB>
    ),
  },
};

export const WithMenu: StoryObj<NavigationDrawerProps> = {
  args: {
    startAdornment: () => (
      <IconButton aria-label="Menu" variant="standard">
        <Menu />
      </IconButton>
    ),
  },
};

export const Combined: StoryObj<NavigationDrawerProps> = {
  args: {
    startAdornment: () => (
      <>
        <IconButton aria-label="Menu" variant="standard">
          <Menu />
        </IconButton>
        <FAB aria-label="Add" variant="tertiary" icon={<Plus />}>
          Add
        </FAB>
      </>
    ),
  },
};
