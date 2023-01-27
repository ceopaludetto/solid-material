import type { As, PolymorphicProps } from "@kobalte/utils";
import type { JSX } from "solid-js";

import { Link as KLink } from "@kobalte/core";
import { splitProps } from "solid-js";

import { content, icon, root } from "./styles";
import { createRipples } from "~/primitives";

type NavigationItemOwnProps = {
  class?: string;
  active?: boolean;
  icon: JSX.Element;
  children: JSX.Element;
};

export type NavigationItemProps<T extends As = "a"> = PolymorphicProps<T, NavigationItemOwnProps>;

export function NavigationItem<T extends As = "a">(props: NavigationItemProps<T>) {
  let ref!: HTMLAnchorElement;
  let iconRef!: HTMLDivElement;

  createRipples({ ref: () => ref, positioner: () => iconRef, center: true });
  const [local, rest] = splitProps(props, ["children", "class", "icon", "active"]);

  return (
    <KLink.Root ref={ref} class={root({ class: local.class, active: local.active })} {...rest}>
      <div ref={iconRef} class={icon()}>
        {local.icon}
      </div>
      <div class={content()}>{local.children}</div>
    </KLink.Root>
  );
}
