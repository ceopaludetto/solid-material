import type { VariantProps } from "class-variance-authority";
import type { JSX } from "solid-js";

import { Button as KButton } from "@kobalte/core";
import { Show, splitProps } from "solid-js";

import { icon, root } from "./styles";
import { createRipples } from "~/primitives";
import { mergeWithRefs } from "~/utils/refs";

export type ButtonProps = KButton.ButtonRootOptions &
  Omit<VariantProps<typeof root>, "hasEndIcon" | "hasStartIcon"> & {
    class?: string;
    children: JSX.Element;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
  };

export function Button(props: ButtonProps) {
  const [trigger] = createRipples({ disabled: props.disabled });
  const [local, rest] = splitProps(props, ["class", "children", "variant", "startIcon", "endIcon"]);

  return (
    <KButton.Root
      class={root({
        class: local.class,
        variant: local.variant ?? "filled",
        hasStartIcon: !!local.startIcon,
        hasEndIcon: !!local.endIcon,
      })}
      {...mergeWithRefs(trigger, rest)}
    >
      <Show when={local.startIcon}>{(startIcon) => <span class={icon()}>{startIcon()}</span>}</Show>
      {local.children}
      <Show when={local.endIcon}>{(endIcon) => <span class={icon()}>{endIcon()}</span>}</Show>
    </KButton.Root>
  );
}
