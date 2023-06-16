import type { JSX } from "solid-js";

import { Link as KLink } from "@kobalte/core";
import { splitProps } from "solid-js";

import { content, icon, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

export type NavigationItemProps = KLink.LinkRootOptions & {
  class?: string;
  active?: boolean;
  icon: JSX.Element;
  children: JSX.Element;
};

export function NavigationItem(props: NavigationItemProps) {
  const [trigger, positioner] = createRipples({ center: true });
  const [local, rest] = splitProps(props, ["children", "class", "icon", "active"]);

  return (
    <KLink.Root class={root({ class: local.class, active: local.active })} {...mergeWithRefs(trigger, rest)}>
      <div ref={positioner} class={icon()}>
        {local.icon}
      </div>
      <div class={content()}>{local.children}</div>
    </KLink.Root>
  );
}
