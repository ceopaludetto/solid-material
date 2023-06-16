import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Button as KButton } from "@kobalte/core";
import { createMemo, Show, splitProps } from "solid-js";

import { icon, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

export type FABProps = KButton.ButtonRootOptions &
  VariantProps<typeof root> & {
    class?: string;
    icon?: JSX.Element;
    children?: JSX.Element;
  };

export function FAB(props: FABProps): JSX.Element {
  const [trigger] = createRipples({ disabled: props.disabled });
  const [local, rest] = splitProps(props, ["class", "children", "variant", "icon", "size"]);

  const isExtended = createMemo(() => !!local.children);

  return (
    <KButton.Root
      class={root({
        class: local.class,
        variant: local.variant ?? "surface",
        size: isExtended() ? "medium" : local.size ?? "medium",
        isExtended: isExtended(),
      })}
      {...mergeWithRefs(trigger, rest)}
    >
      <Show when={!!local.icon}>
        <span class={icon({ size: isExtended() ? "medium" : local.size ?? "medium" })}>{local.icon}</span>
      </Show>
      {local.children}
    </KButton.Root>
  );
}
