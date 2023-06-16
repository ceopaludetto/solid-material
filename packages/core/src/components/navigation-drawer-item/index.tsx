import type { JSX } from "solid-js";

import { Link as KLink } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { content, icon, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

export type NavigationDrawerItemProps = KLink.LinkRootOptions & {
  class?: string;
  active?: boolean;
  icon?: JSX.Element;
  children: JSX.Element;
};

export function NavigationDrawerItem(props: NavigationDrawerItemProps) {
  const [trigger] = createRipples({ disabled: props.disabled });
  const [local, rest] = splitProps(props, ["class", "children", "icon", "active"]);

  return (
    <KLink.Root class={root({ class: local.class, active: local.active })} {...mergeWithRefs(trigger, rest)}>
      <Show when={!!local.icon}>
        <span class={icon()}>{local.icon}</span>
      </Show>
      <div class={content()}>{local.children}</div>
    </KLink.Root>
  );
}
