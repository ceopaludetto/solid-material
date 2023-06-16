import type { JSX } from "solid-js";
import type { Section } from "~/utils/sidebar";

import { NavigationDrawer, NavigationDrawerItem, TopBar } from "@solidjs-material/core";
import { For } from "solid-js";
import { A, Outlet } from "solid-start";
import Archive from "virtual:icons/iconoir/archive";
import SwitchOff from "virtual:icons/iconoir/switch-off";

import { getNavigationItemEntries } from "~/utils/sidebar";

const navigationItems = getNavigationItemEntries(import.meta.glob("./docs/**/*.mdx", { eager: true }));
const navigationIcons: Record<Section, JSX.Element> = {
  Guide: <Archive />,
  Components: <SwitchOff />,
};

export default function Docs() {
  return (
    <div class="grid min-h-screen grid-cols-[300px_1fr] grid-rows-[auto_1fr] items-start">
      <TopBar disableOnDesktop class="sticky top-0 col-span-2">
        SolidMaterial
      </TopBar>
      <NavigationDrawer class="sticky top-16">
        <For each={navigationItems}>
          {([section, items]) => (
            <>
              <div class="flex items-center gap-x-2 p-3 text-on-surface-variant">
                {navigationIcons[section]}
                <span class="text-label-large">{section}</span>
              </div>
              <For each={items}>
                {(item) => (
                  <NavigationDrawerItem as={A} href={item.path} end>
                    {item.title}
                  </NavigationDrawerItem>
                )}
              </For>
            </>
          )}
        </For>
      </NavigationDrawer>
      <div class="prose max-w-none p-3">
        <Outlet />
      </div>
    </div>
  );
}
