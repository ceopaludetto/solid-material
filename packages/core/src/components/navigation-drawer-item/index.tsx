import type { As, PolymorphicProps } from "@kobalte/utils";
import type { JSX } from "solid-js";

import { Link as KLink } from "@kobalte/core";
import { splitProps } from "solid-js";

import { content, icon, root } from "./styles";
import { createRipples } from "~/primitives";

type NavigationDrawerItemOwnProps = {
  class?: string;
  active?: boolean;
  icon: JSX.Element;
  children: JSX.Element;
};

export type NavigationDrawerItemProps<T extends As = "a"> = PolymorphicProps<T, NavigationDrawerItemOwnProps>;

export function NavigationDrawerItem<T extends As = "a">(props: NavigationDrawerItemProps<T>) {
  let ref!: HTMLAnchorElement;

  createRipples({ ref: () => ref });
  const [local, rest] = splitProps(props, ["class", "children", "icon", "active"]);

  return (
    <KLink.Root ref={ref} class={root({ class: local.class, active: local.active })} {...rest}>
      <span class={icon()}>{local.icon}</span>
      <div class={content()}>{local.children}</div>
    </KLink.Root>
  );
}
