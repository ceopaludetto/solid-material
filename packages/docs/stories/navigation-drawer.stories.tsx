import type { Meta, StoryObj } from "@storybook/html";

import { NavigationDrawer, NavigationDrawerItem, FAB, IconButton } from "@solid-material/core";
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
} as Meta<typeof NavigationDrawer>;

export const Default: StoryObj<typeof NavigationDrawer> = {};

export const WithFAB: StoryObj<typeof NavigationDrawer> = {
  args: {
    startAdornment: () => (
      <FAB aria-label="Add" variant="tertiary" icon={<Plus />}>
        Add
      </FAB>
    ),
  },
};

export const WithMenu: StoryObj<typeof NavigationDrawer> = {
  args: {
    startAdornment: () => (
      <IconButton aria-label="Menu" variant="standard">
        <Menu />
      </IconButton>
    ),
  },
};

export const Combined: StoryObj<typeof NavigationDrawer> = {
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
