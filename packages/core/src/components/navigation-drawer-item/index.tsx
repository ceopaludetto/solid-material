import type { As, PolymorphicProps } from "@kobalte/utils";
import type { JSX } from "solid-js";

import { Link as KLink } from "@kobalte/core";
import { createSignal, splitProps } from "solid-js";

import { content, icon, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

type NavigationDrawerItemOwnProps = KLink.LinkRootOptions & {
  class?: string;
  active?: boolean;
  icon: JSX.Element;
  children: JSX.Element;
};

export type NavigationDrawerItemProps<T extends As = "a"> = PolymorphicProps<T, NavigationDrawerItemOwnProps>;

export function NavigationDrawerItem<T extends As = "a">(props: NavigationDrawerItemProps<T>) {
  const [ref, getRef] = createSignal<HTMLAnchorElement>();

  createRipples({ ref });
  const [local, rest] = splitProps(props, ["class", "children", "icon", "active"]);

  return (
    <KLink.Root class={root({ class: local.class, active: local.active })} {...mergeWithRefs(getRef, rest)}>
      <span class={icon()}>{local.icon}</span>
      <div class={content()}>{local.children}</div>
    </KLink.Root>
  );
}
