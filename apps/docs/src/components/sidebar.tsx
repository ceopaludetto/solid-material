import type { MDXInstance } from "astro";
import type { JSX } from "solid-js";

import { IconButton, NavigationDrawer, NavigationDrawerItem } from "@solidjs-material/core";
import { AiOutlineMenu } from "solid-icons/ai";
import { BsCardText, BsToggleOff } from "solid-icons/bs";
import { createSignal, For } from "solid-js";

import { createClickOutside } from "~/utils/click-outside";

type Section = "Components" | "Guide";
export type SidebarEntry = [section: Section, items: MDXInstance<Record<string, any>>[]];

export type SidebarProps = {
  currentURL: string;
  entries: SidebarEntry[];
};

const icons: Record<Section, JSX.Element> = {
  Guide: () => <BsCardText />,
  Components: () => <BsToggleOff />,
};

export function Sidebar(props: SidebarProps) {
  const [ref, setRef] = createSignal<HTMLDivElement>();

  createClickOutside<HTMLDivElement>({
    ref,
    isDisabled: () => ref()?.classList.contains("max-lg:-translate-x-full"),
    callback: (sidebar) => {
      if (!sidebar) return;

      if (sidebar.classList.contains("max-lg:-translate-x-full")) {
        sidebar.classList.remove("max-lg:-translate-x-full");
        return;
      }

      sidebar.classList.add("max-lg:-translate-x-full");
    },
  });

  return (
    <aside
      ref={setRef}
      id="sidebar"
      class="top-0 z-50 h-full overflow-hidden rounded-md bg-surface transition-transform surface max-lg:fixed max-lg:w-4/5 max-lg:max-w-[360px] max-lg:-translate-x-full max-lg:surface-1 lg:sticky lg:top-[64px] lg:h-[calc(100vh-72px)]"
    >
      <div class="h-full overflow-y-auto">
        <NavigationDrawer>
          <div class="flex h-16 items-center gap-x-3 lg:hidden">
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <IconButton class="sidebar-toggle ml-1" aria-label="Menu" variant="standard">
              <AiOutlineMenu />
            </IconButton>
            <a href="/" class="text-title-medium">
              Solid<span class="text-primary">Material</span>
            </a>
          </div>
          <For each={props.entries}>
            {([section, items]) => (
              <>
                <div class="mx-3 flex items-center gap-x-3 py-2">
                  {icons[section]}
                  <span class="text-title-small capitalize text-on-surface-variant">{section}</span>
                </div>
                <For each={items}>
                  {(item) => (
                    <NavigationDrawerItem active={item.url === props.currentURL} as="a" href={item.url}>
                      {item.frontmatter.title}
                    </NavigationDrawerItem>
                  )}
                </For>
              </>
            )}
          </For>
        </NavigationDrawer>
      </div>
    </aside>
  );
}
